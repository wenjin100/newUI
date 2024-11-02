import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'wj100',
  },
  routes: [
    {
      path: '/',
      redirect: '/inputCom',
    },

    {
      name: 'verifyInput',
      path: '/inputCom',
      component: './InputCom',
    },
    {
      name: 'treeShow',
      path: '/TreeCom',
      component: './TreeCom',
    },
  ],
  npmClient: 'pnpm',
});
