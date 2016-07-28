// Sync route definition
export default {
  name: 'detail',
  title: '详情',
  exact: true,
  display:false,
  component: resolve => require(['./components/DetailView'], resolve)
};


