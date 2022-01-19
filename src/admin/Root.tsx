import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { adminRoutePaths } from '../constants/routePaths';
import UsersList from './users/UsersList';
import UserView from './users/UserView';

const AdminRoot = () => {
  return (
    <Router>
      <Routes>
        <Route path={adminRoutePaths.root}>
          <Route path={adminRoutePaths.users.root}>
            <Route index element={<UsersList />} />
            <Route path={adminRoutePaths.users.sub.view} element={<UserView />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AdminRoot;
