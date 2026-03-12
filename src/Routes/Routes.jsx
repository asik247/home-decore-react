import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import WhisList from "../Pages/WhisList";

 const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {index:true,Component:Home},
            {path:'products',Component:Products},
            {path:'whistList',Component:WhisList},
            {path:'*',element:<h1>404 page not found</h1>}
        ]
    }
])
export default router