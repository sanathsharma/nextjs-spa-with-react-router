import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routePaths from '../constants/routePaths';
import AppLayout from '../layouts/AppLayout';
import About from './about';
import ProjectEdit from './project/ProjectEdit';
import ProjectNew from './project/ProjectNew';
import ProjectsList from './project/ProjectsList';
import ProjectView from './project/ProjectView';

const Root = () => {
  console.log('control');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path={routePaths.project.root}>
            <Route index element={<ProjectsList />} />
            <Route path={routePaths.project.sub.view} element={<ProjectView />} />
            <Route path={routePaths.project.sub.edit} element={<ProjectEdit />} />
            <Route path={routePaths.project.sub.new} element={<ProjectNew />} />
          </Route>
          <Route path={routePaths.about.root} element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Root;
