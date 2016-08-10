
var Baobab = require('baobab');
var monkey = Baobab.monkey;
import loadSubscriptions from './loaders/subscriptionData';
export default monkey({
    cursors: {
        ids: ['subscriptions', 'ids'],
        data: ['subscriptions', 'data']
    },
    get: function (state) {
        const result = state.ids.map((id) => {
            let data = state.data[id];
            return data || { id, loading: true };
        });     
        loadSubscriptions(result.filter((r) => r.loading));   
        return result;
    }
});


