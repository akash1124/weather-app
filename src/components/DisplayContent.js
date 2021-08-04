import React from 'react';

import '../styles/DisplayContent.css';

const getSuffix = ({ type, iconId }) => {
    switch (type) {
        case 'percentage': return '%';
        case 'degree': return <sup>o</sup>;
        case 'icon': return <><br /><img src={`http://openweathermap.org/img/wn/${iconId}@2x.png`} alt="" /></>
        default: return;
    }
}

export default function DisplayContent(props) {
    if (!props.displayData) {
        return (
            <div className="weather-info">
                No Data
            </div>
        )
    }
    return (
        <div className="weather-info">
            {props.displayData}{getSuffix(props)}
        </div>
    )
}
