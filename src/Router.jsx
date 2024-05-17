import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import Notes from "./Pages/Notes/Notes";
import NotesDetails from "./Pages/Notes/NotesDetails";
import Quotes from "./Pages/Quotes/Quotes";
import MusicPage from "./Pages/MusicPage/MusicPage";
import HomePage from "./Pages/HomePage/Homepage";
import Weather from "./Pages/Weather/Weather";
import ImagePage from "./Pages/ImagePage/ImagePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/Home",
    element: <Home />,
    children: [
      {
        path: "/Home/notes",
        element: <Notes />,
      },
      {
        path: "/Home/notes/notesDetails/:id/:type",
        element: <NotesDetails />,
      },

      {
        path: "/Home/quotes",
        element: <Quotes />,
      },
      {
        path: "/Home/musicPage",
        element: <MusicPage />,
      },
      {
        path: "/Home/homePage",
        element: <HomePage />,
      },
      {
        path: "/Home/weather",
        element: <Weather />,
      },
      {
        path: "/Home/imagepage",
        element: <ImagePage />,
      },
    ],
  },
]);

export default router;
