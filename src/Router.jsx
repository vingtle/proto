import { createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home/Home";
import WelcomePage from "./Pages/WelcomePage";
import Notes from "./Pages/Notes";
import NotesDetails from "./Pages/Notes/NotesDetails";
import Quotes from "./Pages/Quotes";
import MusicPage from "./Pages/MusicPage/MusicPage";
const router = createBrowserRouter([
    {
        path:"/",
        element:<WelcomePage/>
    },
    {
        path:"/Home",
        element:<Home/>,
        children:[
            {
                path:"/notes",
                element:<Notes/>,
                children:[
                    {
                        path:"/notesDetails",
                        element:<NotesDetails/>,
                    }
                ]
            },

            {
                path:"/quotes",
                element:<Quotes/>,
            },
            {
                path:"/musicPage",
                element:<MusicPage/>,
            },
        ]
    }
 ])

 export default router