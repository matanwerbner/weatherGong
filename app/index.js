import components from './components';
import ngRedux from 'ng-redux';
import reducer from './reducers';
const initialState = null;
import createLogger from 'redux-logger';
import './scss/index.scss';

angular.module('app', ['ionic', components, ngRedux])
.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
}).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tab/dash');
}).config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(reducer, [createLogger], null, initialState);
});