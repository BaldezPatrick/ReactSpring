import { Link } from 'react-router-dom';
import './btn.css';

export function Btn() {
    return(
        <Link to={"/Compra"}><button className="text-warning">Comprar</button></Link>
    );
}