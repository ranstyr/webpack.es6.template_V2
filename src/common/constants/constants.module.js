import { PRODUCT_ID }             from './product-id';
import { API_URLS }               from './api-urls';
import { GLOBALS }               from './globals';
import { ENV }                    from './env';

export default angular.module('si.constants', [])
  .constant('PRODUCT_ID', PRODUCT_ID)
  .constant('API_URLS', API_URLS)
  .constant('GLOBALS', GLOBALS)
  .constant('ENV', ENV);
