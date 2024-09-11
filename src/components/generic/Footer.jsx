import '../../scss/generic/footer.scss'

const Footer = ()=>{

    return (
        <div className="wrapperFooter">
            <div className="footerContainer">

                {/* hotline */}
                <span className="">Hotline: +84 258 1 234 456</span>

                {/* address */}
                <span className="">Địa chỉ: Nha Trang Khánh Hòa</span>

                {/* email */}
                <span className=''>Email: info@email.com</span>
            </div>
        </div>
    )
}

export default Footer