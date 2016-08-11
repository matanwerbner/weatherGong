import config from '../config';
const locationsData = require('./mocks/locationsData.js');
const locations = require('./mocks/locations.js');
export const fetchLocationsData = (ids) => {
    return new Promise((resolve) => {
        resolve(locationsData);
    });
}

export const fetchLocations = () => {
    return new Promise((resolve) => {
        resolve(locations);
    });
}