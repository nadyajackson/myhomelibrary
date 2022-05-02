import { Link } from "react-router-dom"
import njlogo from './njlogo.png'
import tiktok from './tiktok.png'
import pinterest from './pinterest.png'
import instagram from './insta.png'
import facebook from './facebook.png'

export default function Navbar(){
    return(<div className="footer">
        <p>My Home Library &copy; N.B. Jackson 2022</p>
        <p>Follow us online:</p>
        <div className="logos">
        <img src={njlogo}  alt="njs nerdy knickknacks logo" />
        <img src={tiktok}  alt="tiktok logo" />
        <img src={instagram}  alt="instagram logo" />
        <img src={facebook}  alt="facebook logo" />
        <img src={pinterest}  alt="njs nerdy knickknacks logo" />
        </div>
    </div>)
}
