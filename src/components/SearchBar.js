import React, { useState } from 'react';

import '../styles/SearchBar.css';

export default function SearchBar(props) {
    const [city, setCity] = useState('');

    const onInputChange = (event) => {
        setCity(event.target.value)
    }

    const fetchWeather = () => {
        props.fetchWeatherDetails(city)
    }

    return (
        <div className="search-bar">
            <input
                value={city}
                onChange={(event) => onInputChange(event)}
                type="text"
                placeholder="What are you looking for?"
            />
            <button
                className="search-btn"
                type="submit"
                onClick={() => fetchWeather()}
            >
                <i className="fa fa-search"></i>
            </button>
        </div>
    )
}
