import tree from '../../index.js';
import config from '../../../config';

export default (ids) => {
    if (ids.length == 0)
        return null;
    let dataSelector = tree.select('subscriptions', 'locations');
    fetch(`${config.apiUrl}/getSubscriptions`, {
        method: 'POST',
        body: JSON.stringify({ ids })
    })
        .then((response) => response.json())
        .then((data) => {
            data.forEach((d) => {
                dataSelector.set(d.id, d);
            });
        });
}