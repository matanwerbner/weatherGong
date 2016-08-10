import { default_subscriptions } from './consts';
import subscript_data_monkey from './monkeys/subscriptionData';

var Baobab = require('baobab');

export default new Baobab({
    subscriptions: {
        ids: window.localStorage.getItem("subscriptions") || default_subscriptions,
        locations: [],
        subscribedLocations: subscript_data_monkey
    }
});