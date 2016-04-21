// Vendor libraries:
import 'expose?jQuery!expose?$!jquery/dist/jquery.min';

// Application assets:
import 'assets/scss/main.scss';
import 'angular-mighty-datepicker';

// Angular and 3rd party modules:
import angular                  from 'angular';
import ngAnimate                from 'angular-animate';
import momentJS                 from 'expose?moment!moment/moment';
import lodash                   from 'lodash';
import uiRouter                 from 'angular-ui-router';
import ngCurrency               from 'ng-currency';
import ngStorage                from 'ngStorage';
import ngTranslate              from 'angular-translate';
import rzSlider                 from 'angularjs-slider';
import SignalR                  from 'angular-signalr-hub';

// Application modules:
import siCommon        from 'common/common.module';
import siModels        from 'models/models.module';
import siComponents    from 'components/components.module';
import siHome          from 'states/home.module';

let modules = [
  SignalR,
  ngAnimate,
  uiRouter,
  ngCurrency,
  ngTranslate,
  rzSlider.name,
  ngStorage.name,
  siCommon.name,
  siModels.name,
  siComponents.name,
  siHome.name,
  'foundation.core.animation',
  'foundation.core'
];

angular.module('smartInvestor', modules);

// Bootstrap in strictDI mode
angular.bootstrap(document, ['smartInvestor'], {
  strictDi: true
});
