import { state } from '../../index.js';
import { fetchLocationsData } from '../../../api/mockApi'
export default (ids) => {
    if (ids.length == 0)
        return null;
    let dataSelector = state.select('subscriptions', 'data');
    fetchLocationsData(ids)
    .then((data) => {
            data.forEach((d) => {
                dataSelector.set(d.id, d);
            });
        });
}