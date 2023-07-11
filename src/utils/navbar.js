import { PricingPage } from "../pages/PricingPage";
import { BlogPage } from "../pages/blogPage";
import HomePage from "../pages/homePage";
import FeaturestPage from "../pages/productPage";

const navbar = [
  {
    id: 1,
    name: 'Home',
    hidden: false,
    path: "/home",
    element: <HomePage />,
  },
  {
    id: 2,
    name: 'Features',
    hidden: false,
    path: "/features",
    element: <FeaturestPage />,
  },
  {
    id: 3,
    name: 'Pricing',
    hidden: false,
    path: "/pricing",
    element: <PricingPage />
  },
  {
    id: 4,
    name: 'Blog',
    hidden: false,
    path: "/blog",
    element: <BlogPage />
  }
];

export default navbar;