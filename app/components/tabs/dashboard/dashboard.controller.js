import tree from '../../../store';
var locationModalTemplate = require('./locationModal.html');
const connectSubscriptions = (data, scope, $timeout) => {
    $timeout(() => {
        scope.currentData = scope.forecastData = data;
    });
}

const connectLocations = (data, scope, $timeout) => {
    $timeout(() => {
        scope.locations = data;
    });
}

export default ['$scope', '$timeout', '$ionicModal',
    (scope, $timeout, $ionicModal) => {
        const subscriptionSelector = tree.select('subscriptions', 'subscribedLocations');
        const locationSelector = tree.select('locations');
        connectSubscriptions(subscriptionSelector.get(), scope, $timeout);
        subscriptionSelector.on('update', function (e) {
            connectSubscriptions(e.data.currentData, scope, $timeout);
        });

        locationSelector.on('update',(e) => {
            connectLocations(e.data.currentData, scope, $timeout);
        });

        scope.modal = $ionicModal.fromTemplate(locationModalTemplate, {
            scope,
            animation: 'slide-in-up'
        });
    
        scope.showAddLocation = function(){
            scope.modal.show();
        }

        scope.closeModal = function() {
            scope.modal.hide();
        };

        scope.addLocation = (location) => {
            tree.push(["subscriptions", "ids"], location.id);
            scope.modal.hide();
        };
    }]