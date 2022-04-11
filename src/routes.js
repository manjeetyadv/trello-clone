import React from 'react';

const Board = React.lazy(() => import('./components/Board'));

let routes = [
  { path: '/board', name: 'Board', component: Board }, // Board
];

export default routes;
