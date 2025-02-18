import { RouteObject } from 'react-router-dom';
import { createElement } from 'react';
import { IndustriesPage } from './industries-page.ui';
import { pathKeys } from '../../shared/lib/react-router';

export const IndustriesPageRoute: RouteObject = {
  path: pathKeys.industries.root(),
  element: createElement(IndustriesPage),
};
