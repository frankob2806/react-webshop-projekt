import { Link } from 'react-router-dom';
import BANNER from '../../Assets/banners.jpg';
import { Button } from 'react-bootstrap';
import { IoIosMenu } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa6';

const Home = ()=> {
    return(
        <>
        <div className="Body">
            <div className='container'>
                <div className='row'>
                    <div className='tekst'>
                    </div>
                    <div className='image d-flex align-items-start col-sm-12'>
                        <Link to={'/'}><img src={BANNER} alt='Banner' /></Link>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}



export default Home;