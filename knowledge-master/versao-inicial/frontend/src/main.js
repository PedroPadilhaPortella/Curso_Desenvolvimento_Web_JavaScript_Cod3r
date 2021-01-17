import Vue from 'vue';
import App from './App';
import store from './config/store';
import router from './config/router';

import 'font-awesome/css/font-awesome.css';
import './config/bootstrap';
import './config/msg';

Vue.config.productionTip = false

//token temporário
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6ImVkd2luIiwiZW1haWwiOiJlZHdpbkBnbWFpbC5jb20uYnIiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjEwODQ4ODYyLCJleHAiOjE2MTExMDgwNjJ9.kW7zVB3KNh2pZAMXlxBtozD8J143ze8lVAaPl7DqzYM';

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')