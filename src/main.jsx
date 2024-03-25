import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Countries from "./pages/countries/Countries";
import Country from "./pages/country/Country";
import LayoutContires from "./pages/LayoutContries/LayoutContires";
import { countriesLoader } from "./components/CountriesSection/CountiresSection";
import { countryLoader } from "./pages/country/Country";

import "./app.scss";

import Error from "./components/Error/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutContires />,
    children: [
      {
        path: "/",
        element: <Countries />,
        loader: countriesLoader,
        children: [],
      },
      {
        path: "/:name",
        element: <Country />,
        loader: countryLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
