import tree from '../../index.js';
import { fetchLocationsData } from '../../../api'
export default (ids) => {
    if (ids.length == 0)
        return null;
    let dataSelector = tree.select('subscriptions', 'data');
    fetchLocationsData(ids)
    .then((data) => {
            data.forEach((d) => {
                dataSelector.set(d.id, d);
            });
        });
}