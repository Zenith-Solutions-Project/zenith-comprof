import { Navigate } from "react-router-dom";
import Base from "../app/pages/Base";
import Home from "../app/pages/Home";
import OurTeams from "../app/components/ui/teams/OurTeams";
import OurServices from "../app/components/ui/ourservice/OurServices";
import Portofolio from "../app/components/ui/portofolio/Portofolio";
import SliderPorto from "../app/pages/SliderPorto";
const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Base />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/teams",
    element: <Base />,
    children: [
      {
        path: "",
        element: <OurTeams />,
      },
    ],
  },
  {
    path: "/services",
    element: <Base />,
    children: [
      {
        path: "",
        element: <OurServices />,
      },
    ],
  },
  {
    path: "/portofolio",
    element: <Base />,
    children: [
      {
        path: "",
        element: <SliderPorto />,
      },
    ],
  },
];

export { routes };
