// src/App.tsx
import React from "react";
import Header from "./components/Header";
import SidebarFilters from "./components/SidebarFilters";
import JobList from "./components/JobList";
import "./App.css";

interface Job {
  title: string;
  company: string;
  location: string;
  snippet: string;
  link: string;
}

const mockJobs: Job[] = [
  {
    title: "Software Developer Intern",
    company: "Protan AS",
    location: "Buskerud",
    snippet: "Join us as an intern...",
    link: "https://example.com/job1"
  },
  {
    title: "Project Engineer",
    company: "Optime Subsea",
    location: "Kongsberg",
    snippet: "We are looking for a project engineer...",
    link: "https://example.com/job2"
  },
  // Add more jobs as needed
];

const App: React.FC = () => (
  <div className="app">
    <Header />
    <div className="content">
      <SidebarFilters />
      <JobList />
    </div>
  </div>
);

export default App;
