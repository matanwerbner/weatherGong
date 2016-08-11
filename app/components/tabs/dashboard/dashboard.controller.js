import tree from '../../../store';
import { 
    addToSubscriptionIdsStorage,
    removeFromSubscriptionIdsStorage,
    getSubscriptionIdsFromStorage
} from '../../../storage/subscriptionIds.helper';
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

        locationSelector.on('update', (e) => {
            connectLocations(e.data.currentData, scope, $timeout);
        });

        scope.getLocationsForModal = () => {
            if(!scope.locations) return [];
            const existingIds = getSubscriptionIdsFromStorage();
            return scope.locations.filter((d) => existingIds.indexOf(d.id) == -1);
        }

        scope.modal = $ionicModal.fromTemplate(locationModalTemplate, {
            scope,
            animation: 'none'
        });

        scope.showAddLocation = function () {
            scope.modal.show();
        }

        scope.closeModal = function () {
            scope.modal.hide();
        };

        scope.removeLocation = (id) => {
            const idsSelector = tree.select(["subscriptions", "ids"]);
            const existingIDs = idsSelector.get();
            idsSelector.set(existingIDs.filter((l) => l != id));
            removeFromSubscriptionIdsStorage(id);
        }

        scope.addLocation = (location) => {
            tree.push(["subscriptions", "ids"], location.id);
            addToSubscriptionIdsStorage(location.id);
            scope.modal.hide();
        };
    }]