import React from "react";

const SearchSection = ({ getWeatherData, searchInputRef }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleCitySearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.querySelector(".search-input");
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`;
    getWeatherData(API_URL);
  };

  const handleLocationSearch = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=2`;
        getWeatherData(API_URL);
        window.innerWidth >= 768 && searchInputRef.current.focus();
      },
      () => {
        alert("Location access denied");
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  };

  return (
    <div className="search-section">
      <form action="#" className="search-form" onSubmit={handleCitySearch}>
        <span className="material-symbols-rounded">search</span>
        <input
          type="search"
          placeholder="Enter city name"
          className="search-input"
          required
          ref={searchInputRef}
        />
      </form>
      <button className="location-button">
        <span
          className="material-symbols-rounded"
          onClick={handleLocationSearch}
        >
          my_location
        </span>
      </button>
    </div>
  );
};

export default SearchSection;
