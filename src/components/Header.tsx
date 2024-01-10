import logo from '../images/Logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import '../index.css';
import {Link} from "@mui/material";

function Header() {
    return (
        <>
            <section className='flex items-center justify-between'>
                <div className="flex items-center">
                    <Link href={"/"} >
                        <img src={logo} alt='logo' className='img_logo'/>
                    </Link>
                    <h1 className='flex align_center text-2xl italic font-extrabold'>Airbnbeach</h1>
                </div>
                <section className="border rounded-full p-3 mr-24">
                    <MenuIcon style={{ fontSize: '30px' }}/>
                    <Link href={"/LogIn"}>
                        <AccountCircleIcon style={{ fontSize: '30px', color: "black" }}/>
                    </Link>
                </section>
            </section>
        </>
    );
}

export default Header;