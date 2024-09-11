import { Helmet } from "react-helmet"
import Footer from "../components/generic/Footer"
import Header from "../components/generic/Header"
import Rooms from "../components/Rooms"
import Slider from "../components/Slider"


const Home = ()=>{


    return (
        <>
        <Helmet>
                <title>Home</title>
        </Helmet>
        
        {/* header */}
            <Header />

        {/* slider */}
            <Slider />

        {/* room */}
        <Rooms />

        {/* footer */}
        <Footer />
        </>
    )
}

export default Home