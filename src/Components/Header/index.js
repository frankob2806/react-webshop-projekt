import { Link } from 'react-router-dom';
import Logo from '../../Assets/sports-shop-icon-vector.jpg';
import { Button } from 'react-bootstrap';
import { IoSearch } from 'react-icons/io5';
import { FiUser } from 'react-icons/fi';
import { IoBagOutline } from 'react-icons/io5';
import Navigation from './Navigation';

const Header = () => {
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-header">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">WEBSHOP SPORT</p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-start col-sm-2">
                                <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                            </div>

                            <div className='col-sm-10 d-flex align-items-center part2'>
                                <Button className='countryDrop'>
                                    Početna Stranica
                                </Button>

                                <div className='headerSearch ml-3 mr-3'>
                                <input type='text' placeholder='Search for an item...'/>
                                <Button><IoSearch/></Button>
                                </div>

                                <div className='part3 d-flex align-items-center ml-auto'>
                                    <Button className='circle mr-3'><FiUser/></Button>
                                    <div className='ml-auto cartTab d-flex align-items-center'>
                                        <span className='price'>30€</span>
                                        <div className='position-relative ml-2'>
                                            <Button className='circle ml-1'><IoBagOutline/></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>
                
                
                <Navigation/>

                
            </div>
        </>
    )
}

export default Header;