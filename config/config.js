'use strict';

module.exports = {
  localhost: {
    API_URL: 'http://ws.projecttests.com/SI_WS/',
    BROKER_URL: 'http://si.projecttests.com/b78/invastsec/',
    SIGNALR_URL: 'http://srqa.project.com:8081/signalr/',
    PRODUCT_ID: 6
  },
  development: {
    API_URL: 'http://roboxws.project.com/',
    BROKER_URL: 'https://robox.project.com/B183/robofx_v3/',
    SIGNALR_URL: 'http://Roboxpush.project.com/signalr/',
    PRODUCT_ID: 6
  },
  testing: {
    API_URL: '//ws.projecttests.com/SI_WS/',
    BROKER_URL: '',
    SIGNALR_URL: '//srqa.project.com:8081/signalr/',
    PRODUCT_ID: 6
  },
  staging: {
    API_URL: '//stagesi.project.com/SI_WS/',
    BROKER_URL: '',
    SIGNALR_URL: '//srstg.project.com:8081/signalr/',
    PRODUCT_ID: 6
  },
  bt: {
    API_URL: '//TestRoboFXWS.project.com/',
    BROKER_URL: '',
    SIGNALR_URL: '//Testrobofxpush.project.com/signalr/',
    PRODUCT_ID: 6
  },
  production: {
    API_URL: '//roboxws.project.com/',
    BROKER_URL: '',
    SIGNALR_URL: '//Roboxpush.project.com/signalr/',
    PRODUCT_ID: 6
  },
  mobile: {
    API_URL: 'http://roboxws.project.com/',
    BROKER_URL: 'https://robox.project.com/B187/FXDD_Robox/',
    SIGNALR_URL: 'http://Roboxpush.project.com/signalr/',
    PRODUCT_ID: 6
  }
};