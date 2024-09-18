import { FaFacebookF, FaInstagram, FaTripadvisor } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import data from '../../../data/data.json'
import { useState } from "react";

const Social = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1200px)" }); 
  const {social_media} = data


  return (
    <>
      <div className="socialHeader">
        {/* <a href="" className="linkItem">
          <FaFacebookF />
        </a>
        <a href="" className="linkItem">
          <FaInstagram />
        </a>
        <a href="" className="linkItem">
          <FaTripadvisor />
        </a> */}

        {social_media.map(item =>{

          return (
            <a href={item.link} className="linkItem">
                <div  
             dangerouslySetInnerHTML={{ __html: item.icon }} />
            </a>
          )
        })}
      </div>
      {!isTabletOrMobile &&  <div className="languageHeader">
        <span>VI / EN</span>
      </div>}
    </>
  );
};

export default Social;
