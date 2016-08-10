
var Baobab = require('baobab');
var monkey = Baobab.monkey;
import loadSubscriptions from './loaders/subscriptionData';
export default monkey({
    cursors: {
        ids: ['subscriptions', 'ids'],
        locations: ['subscriptions', 'locations']
    },
    get: function (state) {
        debugger;
        const result = state.ids.map((id) => {
            let data = state.locations[id];
            return data || { id, loading: true };
        });     
        loadSubscriptions(result.filter((r) => r.loading));   
        return result;
    }
});


