// Sync route definition
export default {
  name: 'index',
  title: '首页',
  exact: true,
  display:true,
  component: resolve => require(['./components/HomeView'], resolve)
}