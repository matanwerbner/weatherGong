import { default_subscriptions } from './consts';
import subscript_data_monkey from './monkeys/subscriptionData';
import { fetchLocations } from '../api';
var Baobab = require('baobab');

const tree = new Baobab({
    locations: {

    },
    subscriptions: {
        ids: window.localStorage.getItem("subscriptions") || default_subscriptions,
        data: [],
        subscribedLocations: subscript_data_monkey
    }
},{
          immutable: false
        });
export default tree;

fetchLocations().then((result) => {
    tree.set("locations", result);
});
