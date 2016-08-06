import controller from './dashboard.controller';
import template from './dashboard.html';

export default ($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state('tab.dash', {
            url: '/dash',
            views: {
                'tab-dash': {
                    template,
                    controller
                }
            }
        })
}