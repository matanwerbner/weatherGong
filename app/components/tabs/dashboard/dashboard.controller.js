export default ['$scope', '$ngRedux', (scope, ngRedux) => {
    scope.data = [{
        location: 'tel-aviv',
        time: '08:00',
        wind: '8 Kts',
        windDirection: 'N',
        temp: '28°',
        wave: '0.5 / 7sec',
        waveDirection: 'N'
    }];
    
    const mapStateToThis = (state) => {
        return {
          value: state.counter
        };
    }

    let unsubscribe = ngRedux.connect(mapStateToThis, null)(scope);
    scope.$on('$destroy', unsubscribe);
}]