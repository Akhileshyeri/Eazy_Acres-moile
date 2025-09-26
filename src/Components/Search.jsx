import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

const Search = () => {
  const [activeTab, setActiveTab] = useState('Buy');
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const tabs = ['Buy', 'Rent/PG', 'Commercial'];

  return (
    <div id="app-wrap">
      {/* Banner with background color */}
      <div
        className="banner-wrapper position-relative"
        style={{
          backgroundColor: '#005CA8',
          height: '150px',
          borderRadius: '10px',
          position: 'relative',
        }}
      >
        {/* Tabs */}
        <div
          className="tabs-container"
          style={{
            position: 'absolute',
            top: '15px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            padding: '0 10px',
          }}
        >
          {tabs.map(tab => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div
          className="search-overlay"
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
          }}
        >
          <div
            className="search-input-container"
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '8px 12px',
              boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
            }}
          >
            <input
              type="text"
              placeholder="Try - Raj High Gardens Hosur Road Bangalore"
              className="search-input"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              style={{ flex: 1, border: 'none', outline: 'none', fontSize: '14px', padding: '8px' }}
              onFocus={() => navigate('/search')}
            />

            {/* Search Icon */}
            <span className="icon-search" style={{ fontSize: '20px', marginRight: '10px', cursor: 'pointer' }}></span>

            {/* Cancel Button */}
            {searchText && (
              <span
                className="icon-cancel"
                style={{ fontSize: '20px', cursor: 'pointer', color: '#FF0000' }}
                onClick={() => {
                  setSearchText('');
                  navigate('/home');
                }}
              >
                ❌
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
