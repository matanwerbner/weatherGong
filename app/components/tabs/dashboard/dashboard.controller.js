import tree from '../../../store';

const connectSubscriptions = (data, scope, $timeout) => {
    let hashKey = 0;
    $timeout(() => {
        scope.data = data.reduce((curr, next) => {
            return Object.assign(curr, { [hashKey++] : next });
        }, {});
    });
}

export default ['$scope', '$timeout', (scope, $timeout) => {
    const subscriptionSelector = tree.select('subscriptions', 'subscribedLocations');
    connectSubscriptions(subscriptionSelector.get(), scope, $timeout);
    subscriptionSelector.on('update', function (e) {
        connectSubscriptions(e.data.currentData, scope, $timeout);
    });
}]