// src/components/SidebarFilters.tsx
import React from 'react';
import './SidebarFilters.css';

const SidebarFilters: React.FC = () => (
  <aside className="sidebar">
    <h3>Filter by Location</h3>
    <label><input type="checkbox" /> Norway</label>
    <label><input type="checkbox" /> Oslo</label>
    <label><input type="checkbox" /> Buskerud</label>
    <h3>Job Type</h3>
    <label><input type="checkbox" /> Internship</label>
    <label><input type="checkbox" /> Contract</label>
    <label><input type="checkbox" /> Full-Time</label>
  </aside>
);

export default SidebarFilters;
