import Navbar from "../componets/Navbar"
import { Outlet  } from "react-router-dom"

const HomeLayout = () => {
    return (
      <>
        <Navbar />
        <>
          <Outlet/>
        </>
      </>
    )
}

export default HomeLayout