
import { Outlet } from 'react-router-dom'
import {Logo} from "../../components/Logo/Logo" ;
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer"
import NavBar from "../../components/Navbar/Navbar"
import "./home.css"

const Home = () => {
  return (
    <div>
      <Logo/>
      <Outlet/>
      <MusicPlayer/>
      <NavBar/>
    </div>
  )
}

export default Home