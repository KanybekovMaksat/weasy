import { RouteObject } from "react-router-dom";
import { createElement } from "react";
import { LoginPage } from "./login-page.ui";
import { pathKeys } from "../../shared/lib/react-router";

export const LoginPageRoute: RouteObject = {
  path: pathKeys.login(),
  element: createElement(LoginPage),
};
