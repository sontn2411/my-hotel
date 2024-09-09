import About from "./pages/About"
import Home from "./pages/Home"

const publicRouters = [{
    name : 'Home' ,
    path : '/',
    element : Home
}, {
    name : "about",
    path : '/about' ,
    element : About
}] 

export { publicRouters}