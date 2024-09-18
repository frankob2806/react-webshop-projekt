import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import {Header} from '../Components/Header';


export function Sportovi( { sport }) {
    console.log(sport);
    return (
        <div className='home'>
            <Header></Header>
            <div className='Nogomet'>
                <h1>Popis nogometnih lopti</h1>
                <GetNogomet sport={sport} />
            </div>
            <Footer></Footer>
        </div>
    );

    function GetNogomet( { sport }) {
        return (
            <ul>
                {sport.map((i) => (
                    <GetItem nogomet={i} key={i} />
                ))}
            </ul>
        );
    }

    function GetItem( { nogomet }) {
        {
            if ( nogomet.naziv === "nogomet") {
                return (
                    <div>
                        <h2> Naziv: {nogomet.naziv}</h2>
                        <img src="/nogomet.jpg" alt='nogomet' />
                        <h4>Cijena: {nogomet.cijena}&</h4>
                    </div>
                )
            }
        }
    }
}