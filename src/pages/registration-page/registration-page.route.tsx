import { RouteObject } from "react-router-dom";
import { createElement } from "react";
import { RegistrationPage } from "./registration-page.ui";
import { pathKeys } from "../../shared/lib/react-router";

export const RegistrationPageRoute: RouteObject = {
  path: pathKeys.registration(),
  element: createElement(RegistrationPage),
};
