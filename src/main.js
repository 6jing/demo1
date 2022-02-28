import Vue from 'vue';

//导入antdesgin相关的模块
import Button from 'ant-design-vue/lib/button';
import Layout from 'ant-design-vue/lib/layout';
import Icon from 'ant-design-vue/lib/icon';
import menu from 'ant-design-vue/lib/menu';
import Input from 'ant-design-vue/lib/input';
import Table from 'ant-design-vue/lib/table';
import Popconfirm from 'ant-design-vue/lib/popconfirm';
import List from 'ant-design-vue/lib/list';
import Card from 'ant-design-vue/lib/card';
import 'ant-design-vue/dist/antd.css';


//导入路由模块
import router from '@/router'

//导入vuex模块
import store from '@/vuex'

//导入axios模块
import axios from 'axios'

import App from './App';

// 调用antdesgin模块
Vue.component(Button.name, Button);
Vue.component(Layout.name, Layout);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Icon.name, Icon);
Vue.component(Table.name, Table);
Vue.use(Popconfirm);
Vue.use(menu);
Vue.use(Input);
Vue.use(List);
Vue.component(Card.name, Card)


//此处设置访问时的根路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'

//挂载axios
Vue.prototype.$http = axios

Vue.config.productionTip = false;


//实例化路由模块
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');