import { RouteObject } from "react-router-dom";
import { createElement } from "react";
import { ClientsPage } from "./clients-home.ui";
import { pathKeys } from "../../shared/lib/react-router";

export const ClientsPageRoute: RouteObject = {
  path: pathKeys.clients(),
  element: createElement(ClientsPage),
};
