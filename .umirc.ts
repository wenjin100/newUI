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
      redirect: '/verifyInput',
    },

    {
      name: 'verifyInput',
      path: '/verifyInput',
      component: './verifyInput',
    },
    {
      name: 'myButton',
      path: '/myButton',
      component: './button',
    },
    {
      name: 'myCard',
      path: '/myCard',
      component: './card',
    },
    {
      name: 'input',
      path: '/input',
      component: './input',
    },
    {
      name: 'message',
      path: '/message',
      component: './message',
    },
  ],
  npmClient: 'pnpm',
});
