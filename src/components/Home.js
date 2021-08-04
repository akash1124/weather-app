import React from 'react';
import SearchBar from './SearchBar';
import DisplayContent from './DisplayContent';

import '../styles/Home.css';

const getIconId = ({ weather }) => Array.isArray(weather) ? weather[0].icon : ''; 

const getTemperature = kelvinTemp => Math.round(kelvinTemp - 273);

export default function Home(props) {
    return (
        <div className="weather-container">
            <div className="header">
                <SearchBar {...props} />
            </div>
            <div className="content">
                <div className="left-container">
                    {props.weather && <DisplayContent displayData={props.weather.name} type="icon" iconId={getIconId(props.weather)} {...props}/>}
                </div>
                <div className="right-container">
                    <div className="right-upper">
                        {props.weather.main && <DisplayContent displayData={getTemperature(props.weather.main.temp)} type="degree" {...props}/>}
                    </div>
                    <div className="right-lower">
                        {props.weather.main && <DisplayContent displayData={props.weather.main.humidity} type="percentage" {...props}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
