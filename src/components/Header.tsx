import logo from '../../public/Logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import '../index.css';

function Header() {
    return (
        <>
            <section className='flex items-center justify-between'>
                <div className="flex items-center">
                    <img src={logo} alt='logo' className='img_logo'/>
                    <h1 className='flex align_center text-2xl italic font-extrabold'>Airbnbeach</h1>
                </div>
                <section className="border rounded-full p-3 mr-24">
                    <MenuIcon style={{ fontSize: '30px' }}/>
                    <AccountCircleIcon style={{ fontSize: '30px' }}/>
                </section>
            </section>
        </>
    );
}

export default Header;