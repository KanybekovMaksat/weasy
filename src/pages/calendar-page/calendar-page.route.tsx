import { RouteObject } from "react-router-dom";
import { createElement } from "react";
import { CalendarPage } from "./calendar-page.ui";
import { pathKeys } from "../../shared/lib/react-router";

export const CalendarPageRoute: RouteObject = {
  path: pathKeys.calendar(),
  element: createElement(CalendarPage),
};
