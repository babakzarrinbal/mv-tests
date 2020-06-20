
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/globalstyle.scss";
import "./scss/vue-transitions.scss";

var attachFastClick = require("fastclick");
attachFastClick.attach(document.body);

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
