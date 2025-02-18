import { createElement } from 'react'
import { IndustriesDetailPage } from './industriesDetail.ui'
import { RouteObject } from 'react-router-dom'
import { pathKeys } from '~shared/lib/react-router'

export const IndustriesDetailsPageRoute: RouteObject = {
  path: pathKeys.industries.bySlug(':slug'),
  element: createElement(IndustriesDetailPage),
}
