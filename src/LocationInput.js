import React from 'react';

function LocationInput({ location, onLocationChange, onSearch }) {
    return (
        <div>
            <input 
                type="text" 
                value={location} 
                onChange={onLocationChange} 
                placeholder="Enter location" 
            />
            <button onClick={onSearch}>Search</button>
        </div>
    );
}

export default LocationInput;
