import headerImg from "../images/mortyrick.png"

function Footer() {
  return (
    <>
    <div className="footer">
        <h6 className="footer_license">Elena Alcaraz © 2024</h6>
        <div>
            <div className="footer_logo">
                <img className="footer_logo_img" src={headerImg} alt="logo rick and morty"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer