/**
 * @Author: 左盐 <zuoyan>
 * @Date:   2017-12-03 19:33:24
 * @Email:  huabinglan@163.com
 * @Project: xxxx
 * @Last modified by:   zuoyan
 * @Last modified time: 2017-12-03 19:39:27
 */

const main = () => {
  return import('./pages/main.vue');
};
const index = () => {
  return import('./pages/index.vue');
};

const index_test = () => {
  return import('./pages/test.vue');
};

const index_my = () => {
  return import('./pages/my.vue');
};
const index_cart = () => {
  return import('./pages/cart.vue');
};

const routes = [{
  path: '/',
  component: main,
  meta: {
    title: 'asdasd'
  },
  children: [{ // 空路由，什么都没匹配到的时候执行
    path: '',
    component: index
  }, {
    path: '/test',
    component: index_test
  }, {
    path: '/my',
    component: index_my
  }, {
    path: '/cart',
    component: index_cart
  }]
}];

module.exports = routes;