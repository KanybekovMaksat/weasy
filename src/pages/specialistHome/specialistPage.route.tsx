import { RouteObject } from "react-router-dom";
import { createElement } from "react";
import { SpecialistPage } from "./specialistPage.ui";
import { pathKeys } from "../../shared/lib/react-router";

export const SpecialistPageRoute: RouteObject = {
  path: pathKeys.specialist(),
  element: createElement(SpecialistPage),
};
