import Vue from 'vue';
import App from './App';
import store from './config/store';
import router from './config/router';

import 'font-awesome/css/font-awesome.css';
import './config/axios';
import './config/bootstrap';
import './config/msg';
import './config/mq';


Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')