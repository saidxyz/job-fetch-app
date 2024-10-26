import React, { useEffect, useState } from "react";
import axios from "axios";
import "./JobList.css";

interface Job {
  title: string;
  link: string;
  snippet: string;
}

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1); // Track current page for pagination

  const apiKey = "AIzaSyCcUEHCF9Tfr8K4CQE5HayubnaqShBjgW8";
  const cseId = "a67f209cfeac9483d";
  const query = "IT jobs"; // Customize the search query as needed

  useEffect(() => {
    fetchJobs();
  }, [page]); // Fetch jobs whenever `page` changes

  // Function to fetch jobs from Google Custom Search API
  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await axios.get("https://www.googleapis.com/customsearch/v1", {
        params: {
          key: apiKey,
          cx: cseId,
          q: query,
          start: (page - 1) * 10 + 1,
        },
      });
  
      if (response.data.items) {
        const jobListings = response.data.items.map((item: any) => ({
          title: item.title,
          link: item.link,
          snippet: item.snippet,
        }));
        setJobs((prevJobs) => [...prevJobs, ...jobListings]);
      } else {
        setError("No job listings found.");
      }
    } catch (err: any) {
      if (err.response?.status === 429) {
        setError("Too many requests. Please try again later.");
      } else {
        setError("Error fetching job listings.");
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  

  const loadMoreJobs = () => {
    setPage((prevPage) => prevPage + 1); // Increment page to load more results
  };

  return (
    <section className="job-list">
      <h1>IT & Developer Jobs in Norway</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="job-cards-container">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <h2 className="job-title">{job.title}</h2>
            <p className="job-snippet">{job.snippet}</p>
            <a href={job.link} target="_blank" rel="noopener noreferrer" className="job-link">
              Read more
            </a>
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <button onClick={loadMoreJobs} className="load-more-button">
          Load More
        </button>
      )}
    </section>
  );
};

export default JobList;
