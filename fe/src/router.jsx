import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx"
import About from "./components/about/About.jsx";

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"about",
                element:<About/>
            }
        ]
    },
    
])

export default appRouter