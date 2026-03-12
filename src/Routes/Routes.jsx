import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import WhisList from "../Pages/WhisList";
import ErrorPage from "../Pages/ErrorPage";
import Details from "../Pages/Details";

 const router = createBrowserRouter([
    {
        path:"/",
        errorElement:<ErrorPage></ErrorPage>,
        Component:Root,
        children:[
            {index:true,
            loader:()=>fetch('/furnitureData.json'),    
            Component:Home},
            {path:'products',Component:Products},
            {path:'whistList',Component:WhisList},
            // {path:'*',element:<h1>404 page not found</h1>}
            {
                path:'/details/:id',
                loader:async ({params})=>{
                    const res = await fetch('/furnitureData.json')
                    const data = await res.json()
                    console.log(data);
                    const singleData = data.find(single=>single.id===parseInt(params.id))
                    // console.log(singleData);
                    return singleData
                },
                Component:Details
            }
        ]
    }
])
export default router