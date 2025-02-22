import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";
import { HomePageRoute } from "~pages/homePage";
import { GenericLayout } from "~pages/layout";
import { HomeLayout } from "~pages/homeLayout";
import { IndustriesLayout } from "~pages/industriesLayout";
import { aboutPageRoute } from "~pages/about";
import { IndustriesPageRoute } from "~pages/industriesPage";
import { IndustriesDetailsPageRoute } from "~pages/industriesDetailPage";
import { SpecialistPageRoute } from "~pages/specialistHome";

function BubbleError() {
  const error = useRouteError();
  if (error instanceof Error) {
    console.error("Route Error:", error.message);
  } else {
    console.error("Unknown Route Error:", error);
  }
  return (
    <div className="text-center text-red-500">
      <h1>Ошибка!</h1>
      <p>Что-то пошло не так. Пожалуйста, попробуйте позже.</p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <BubbleError />,
    children: [HomePageRoute],
  },
  {
    path: "/",
    element: <IndustriesLayout />,
    errorElement: <BubbleError />,
    children: [aboutPageRoute, IndustriesPageRoute, IndustriesDetailsPageRoute],
  },
  {
    path: "/",
    element: <GenericLayout />,
    errorElement: <BubbleError />,
    children: [SpecialistPageRoute],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
