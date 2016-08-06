import routing from './dashboard.route';
import './dashboard.scss';

export default angular.module('app.components.tabs.dashboard', [])
  .config(routing)
  .name;