import Search from "./components/search";
import Home from "./components/home";
import Add from "./components/add";
import Product from "./components/product";
import Warehouse from "./components/warehouse";
const router = [
    {
        path: "/",
        exact: true,
        mani: () => <Home />,
    },
    {
        path: "/admin001sadmin002/warehouse",
        exact: true,
        mani: () => <Warehouse />,
    },
    {
        path: "/admin001sadmin002/add",
        exact: true,
        mani: () => <Add />,
    },
    {
        path: "/admin001sadmin002/edit/:id",
        exact: true,
        mani: () => <Add />,
    },
    {
        path: "/search",
        exact: false,
        mani: () => <Search />,
    },
    {
        path: "/mypicture/:id",
        exact: false,
        mani: () => <Product />,
    },
]
export default router;