
// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";

//Layouts
import HomeLayout from "./layout/HomeLayout";


import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from 'react-router-dom'


 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route  path="/login" element={<Login />}/>
         <Route path="/" element={<HomeLayout/>} >
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
         </Route>
        <Route path="*" element={<PageNotFound />} />
    </Route>
  )
)

function App() {
  return (
    <div className="App">
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
