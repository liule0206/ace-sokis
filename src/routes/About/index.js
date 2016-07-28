// Sync route definition
export default {
  name: 'about',
  title: 'About',
  exact: true,
  display:true,
  component: resolve => require(['./components/AboutView'], resolve)
};


