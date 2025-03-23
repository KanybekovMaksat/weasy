import { RouteObject } from "react-router-dom";
import { createElement } from "react";
import { InformationPage } from "./company-information.ui";
import { pathKeys } from "../../shared/lib/react-router";

export const InformationPageRoute: RouteObject = {
  path: pathKeys.information(),
  element: createElement(InformationPage),
};
