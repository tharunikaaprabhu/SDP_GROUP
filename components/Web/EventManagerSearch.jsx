import React, { useState, useEffect } from 'react';
import "./Seach.css";
const EventManagerSearch = () => {
  const [managers, setManagers] = useState([]);
  const [filteredManagers, setFilteredManagers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    eventType: '',
    budget: '',
    availability: '',
  });

  // Simulated data fetch
  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const dummyManagers = [
      { id: 1, name: 'John Doe', location: 'New York', eventTypes: ['Wedding', 'Corporate'], minBudget: 5000, availability: 'Weekends' },
      { id: 2, name: 'Jane Smith', location: 'Los Angeles', eventTypes: ['Birthday', 'Wedding'], minBudget: 3000, availability: 'All Week' },
      { id: 3, name: 'Mike Johnson', location: 'Chicago', eventTypes: ['Corporate', 'Charity'], minBudget: 7000, availability: 'Weekdays' },
    ];
    setManagers(dummyManagers);
    setFilteredManagers(dummyManagers);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    applyFilters(event.target.value, filters);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    applyFilters(searchTerm, newFilters);
  };

  const applyFilters = (search, currentFilters) => {
    let result = managers.filter(manager => 
      manager.name.toLowerCase().includes(search.toLowerCase()) ||
      manager.location.toLowerCase().includes(search.toLowerCase())
    );

    if (currentFilters.location) {
      result = result.filter(manager => 
        manager.location.toLowerCase() === currentFilters.location.toLowerCase()
      );
    }

    if (currentFilters.eventType) {
      result = result.filter(manager => 
        manager.eventTypes.includes(currentFilters.eventType)
      );
    }

    if (currentFilters.budget) {
      result = result.filter(manager => 
        manager.minBudget <= parseInt(currentFilters.budget)
      );
    }

    if (currentFilters.availability) {
      result = result.filter(manager => 
        manager.availability === currentFilters.availability
      );
    }

    setFilteredManagers(result);
  };

  return (
    <div className="event-manager-search">
      <h2>Find Event Managers</h2>
      
      <input
        type="text"
        placeholder="Search by name or location"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="filters">
        <select name="location" onChange={handleFilterChange} value={filters.location}>
          <option value="">All Locations</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
        </select>

        <select name="eventType" onChange={handleFilterChange} value={filters.eventType}>
          <option value="">All Event Types</option>
          <option value="Wedding">Wedding</option>
          <option value="Corporate">Corporate</option>
          <option value="Birthday">Birthday</option>
          <option value="Charity">Charity</option>
        </select>

        <input
          type="number"
          name="budget"
          placeholder="Max Budget"
          onChange={handleFilterChange}
          value={filters.budget}
        />

        <select name="availability" onChange={handleFilterChange} value={filters.availability}>
          <option value="">Any Availability</option>
          <option value="Weekends">Weekends</option>
          <option value="Weekdays">Weekdays</option>
          <option value="All Week">All Week</option>
        </select>
      </div>

      <div className="manager-list">
        {filteredManagers.length === 0 ? (
          <p>No managers found matching your criteria.</p>
        ) : (
          filteredManagers.map(manager => (
            <div key={manager.id} className="manager-card">
              <h3>{manager.name}</h3>
              <p>Location: {manager.location}</p>
              <p>Event Types: {manager.eventTypes.join(', ')}</p>
              <p>Minimum Budget: ${manager.minBudget}</p>
              <p>Availability: {manager.availability}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventManagerSearch;