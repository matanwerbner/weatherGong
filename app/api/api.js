import config from '../config';

export const fetchLocationsData = (ids) => {
    return fetch(`${config.apiUrl}/locationsData`, {
        method: 'POST',
        body: JSON.stringify({ ids })
    })
    .then((response) => response.json());
}

export const fetchLocations = () => {
    return fetch(`${config.apiUrl}/locations`, {
        method: 'GET'
    })
    .then((response) => response.json());
}