import {imgRoom1 } from "../assets"
import '../scss/components/room.scss'

const data = [{
    id :1 ,
    titleRoom : 'Phòng hướng biển'  ,
    img : imgRoom1
},
{
    id : 2 ,
    titleRoom : 'Phòng hướng núi' ,
    img :imgRoom1
},
{
    id : 3 ,
    titleRoom : "Phòng hướng thành phố" ,
    img : imgRoom1
},
{
    id :4 ,
    titleRoom : "Phòng hướng trung tâm" ,
    img : imgRoom1
}
]

const Rooms = ()=>{

    return (
        <div className="wrapperRoom">
            <div className="roomContainer">
                {data.map(r =>{
                    return (
                        <div className="roomItem" key={r.id}>
                            <img src={r.img} alt={r.titleRoom}  />
                            <span className="roomItemTitle">{r.titleRoom}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Rooms