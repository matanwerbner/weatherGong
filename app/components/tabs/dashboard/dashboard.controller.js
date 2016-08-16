import { 
    addToSubscriptionIdsStorage,
    removeFromSubscriptionIdsStorage,
    getSubscriptionIdsFromStorage
} from '../../../storage/subscriptionIds.helper';

var locationModalTemplate = require('./locationModal.html');

export default ['$scope', '$timeout', '$ionicModal', 'AppState',
    (scope, $timeout, $ionicModal, AppState) => {
        const subscriptionSelector = AppState.select('subscriptions', 'subscribedLocations');
        const locationSelector = AppState.select('locations');
        scope.currentData = subscriptionSelector.get();
        
        subscriptionSelector.on('update', function (e) {
            scope.currentData = scope.forecastData = e.data.currentData;
        });

        locationSelector.on('update', (e) => {
            scope.locations = e.data.currentData;
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
            const idsSelector = AppState.select(["subscriptions", "ids"]);
            const existingIDs = idsSelector.get();
            idsSelector.set(existingIDs.filter((l) => l != id));
            removeFromSubscriptionIdsStorage(id);
        }

        scope.addLocation = (location) => {
            AppState.push(["subscriptions", "ids"], location.id);
            addToSubscriptionIdsStorage(location.id);
            scope.modal.hide();
        };
    }]