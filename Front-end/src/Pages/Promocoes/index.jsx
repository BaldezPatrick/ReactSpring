import './promocao.css';
import { Menu } from '../../Components/NavBar/Nav';
import { Footer } from '../../Components/Footer/Footer';
import { Btn } from '../../Components/Botão/btn';



export function Promocao(props) {
    return (
        <>
            <Menu />
            <section className="texto-top">
                <h1>Os melhores descontos estão aqui!</h1>
                <p>Encontre os melhores descontos e os melhores pacotes para você e sua família aproveitarem sua viagem.</p>
            </section>
            <section>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card">
                            <img src={props.imagem} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h2 class="card-title">Cidade</h2>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p>De: <s>2000,00</s></p>
                                <p>Por: 1200,00</p>
                                <Btn />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={props.imagem} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h2 class="card-title">Cidade</h2>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p>De: <s>2000,00</s></p>
                                <p>Por: 1200,00</p>
                                <Btn />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={props.imagem} class="card-img-top" alt="..." />
                            <div class="card-body">
                            <h2 class="card-title">Cidade</h2>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p>De: <s>2000,00</s></p>
                                <p>Por: 1200,00</p>
                                <Btn />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={props.imagem} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h2 class="card-title">Cidade</h2>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p>De: <s>2000,00</s></p>
                                <p>Por: 1200,00</p>
                                <Btn />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}