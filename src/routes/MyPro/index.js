// Sync route definition
export default {
  name: 'my-pro',
  title: 'MyPro',
  exact: true,
  component: resolve => require(['./components/MyProView'], resolve)
};


