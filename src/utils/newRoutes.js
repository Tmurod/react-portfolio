import { useRoutes } from 'react-router-dom';
import HomePage from "../pages/homePage";
import FeaturestPage from "../pages/productPage";
import { PricingPage } from "../pages/PricingPage";
import { BlogPage } from "../pages/blogPage";

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/features',
    element: <FeaturestPage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />
  },
  {
    path: "/blog",
    element: <BlogPage />
  },
  {
    path: '*',
    element: <h1>404 not found</h1>,
  },
];

function MyRoutes() {
  const routeResult = useRoutes(routes);

  return routeResult;
}

export default MyRoutes;