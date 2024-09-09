import { useEffect, useState } from "react"

const data = [{
    title : "title 1",
    img : ""
}, {
    title : "title 2", 
    img : ""
}]

const Slider = ()=>{
    const [indexSlide , setIndexSlide] = useState(0)

    // useEffect(()=>{
    //     setInterval(()=>{
    //         setIndexSlide(indexSlide + 1)
    //     }, 1000)
    // },[])

    return (
        <div className='wrapperSlider'>
            <div className="sliderContainer"></div>
        </div>
    )
}


export default Slider 