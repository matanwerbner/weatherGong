import dashboard from './dashboard';
import routing from './tabs.route';
import './tabs.scss';
export default angular.module('app.components.tabs', [dashboard])
  .config(routing)
  .name;