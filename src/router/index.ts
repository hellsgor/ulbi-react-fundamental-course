import About from '../pages/About';
import PostPage from '../pages/PostPage';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import React from 'react';

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
  { path: '/posts', component: Posts },
  { path: '/posts/:id', component: PostPage },
  { path: '/', redirect: { to: '/posts', replace: true } },
  { path: '*', component: Error },
];
