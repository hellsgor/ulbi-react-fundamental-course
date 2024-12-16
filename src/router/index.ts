import React from 'react';

import About from '../pages/About';
import PostPage from '../pages/PostPage';
import Posts from '../pages/Posts';
import Login from '../pages/Login';

export interface Route {
  path: string;
  component?: React.ComponentType;
  redirect?: {
    to: string;
    replace: boolean;
  };
}

export const routes: Route[] = [
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/posts', component: Posts },
  { path: '/posts/:id', component: PostPage },
  { path: '/', redirect: { to: '/posts', replace: true } },
];
