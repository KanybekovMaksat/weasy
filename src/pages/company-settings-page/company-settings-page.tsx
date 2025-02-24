import { RouteObject } from "react-router-dom";
import { createElement } from "react";
import { SettingsPage } from "./company-settings.ui";
import { pathKeys } from "../../shared/lib/react-router";

export const SettingsPageRoute: RouteObject = {
  path: pathKeys.settings(),
  element: createElement(SettingsPage),
};
