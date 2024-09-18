import { Button } from 'react-bootstrap';
import { IoIosMenu } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3 navPart1'>
                        <Button className='allCatTab align-items-center'>
                            <span class='icon1 mr-2'><IoIosMenu/></span>
                            <span class='text'>ALL CATEGORIES</span>
                            <span class='icon2 ml-2'><FaAngleDown/></span>
                        </Button>
                    </div>

                    <div className='col-sm-9 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline w-100'>
                            <li className='list-inline-item'><Link to="/">Home</Link></li>
                            <li className='list-inline-item'><Link to="/">Sportovi</Link></li>
                            <li className='list-inline-item'><Link to="/">Muško</Link></li>
                            <li className='list-inline-item'><Link to="/">Žensko</Link></li>
                            <li className='list-inline-item'><Link to="/">Trčanje</Link></li>
                            <li className='list-inline-item'><Link to="/">Brendovi</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Navigation;