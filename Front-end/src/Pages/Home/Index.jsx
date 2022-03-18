import { Menu } from '../../Components/NavBar/Nav';
import { Footer } from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import './home.css';


export function Home(props) {
    return (
        <>
            <Menu />
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={props.imagem} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                                <h5>Conheça Londres com nossos guias únicos</h5>
                                <Link to='/Viagens'><button className='bt'>Ver mais</button></Link>
                            </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={props.imagem1} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>O Rio de Janeiro sempre tem momentos marcantes!</h5>
                                <Link to='/Viagens'><button className='bt'>Ver mais</button></Link>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={props.imagem2} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Tenha viagens únicas com seus amigos e com baixo preço!</h5>
                                <Link to='/Promocoes'><button className='bt'>Ver mais</button></Link>
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <Footer />
        </>
    );
}