import ProductPage from "../pages/productPage";

const navbar = [
  {
    id: 1,
    name: 'All Products',
    hidden: false,
    path: "/allProducts",
    element: <ProductPage />,
  },
  {
    id: 2,
    name: 'Solutions',
    hidden: false,
    path: "/solutions"
  },
  {
    id: 3,
    name: 'About',
    hidden: false,
    path: "/about"
  },
  {
    id: 4,
    name: 'Support',
    hidden: false,
    path: "/support",
  }
];

export default navbar;