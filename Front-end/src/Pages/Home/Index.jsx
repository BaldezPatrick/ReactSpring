import { Menu } from '../../Components/NavBar/Nav';
import { Footer } from '../../Components/Footer/Footer';
import './home.css';


export function Home(props) {
    return(
        <>
        <Menu />
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={props.imagem} className="d-block w-100" alt="Cidade de Londres"/>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}