import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "./style.css"

// import 'bootstrap/dist/css/bootstrap-grid.min.css'
// import 'bootstrap/dist/css/bootstrap-utilities.min.css'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add( fas, far, fab)
const app = createApp(App);

app.use(createPinia())
app.use(router)
app.use(Antd)
app.use(bootstrap)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
