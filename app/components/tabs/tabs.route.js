export default ($stateProvider, $urlRouterProvider) => {
    $stateProvider

        // setup an abstract state for the tabs directive
        .state('tab', {
            url: '/tab',
            abstract: true,
            template: require('./tabs.html')
        })
}