import { useState } from "react"


const MenuItem = ({item}) =>{
    const [showMenu, setShowMenu] = useState(false)
    
    const handleShowMenu =()=>{

       setShowMenu(true)
    }

    return (
        <li className={`itemMenuHeader ${showMenu ? '' : ""}`} onClick={handleShowMenu}>
            {item.title}
            {item.childrens && 
               <div className="wrapperMenuHeader">
                    <ul className={` listMenuHeader ${showMenu ? "" : ""}`}>
                    {item.childrens.map(chil =>{
                        return <MenuItem key={chil.id}  item={chil}/>
                    })}
                </ul>
               </div>
            } 
        </li>
    )
}

export default MenuItem