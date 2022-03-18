import { Menu } from '../../Components/NavBar/Nav';
import { Footer } from '../../Components/Footer/Footer';
import { Btn } from '../../Components/Botão/btn';
import './viagem.css';

export function Viagens(props) {
    return(
        <>
        <Menu />
        <main>
            <section className="chamada">
                <div id="txt-chamada">
                    Não perca os melhores destinos. Com nossa agência você tem conforto de com um click escolher um destino para aproveitar com amigos, familiares e paixões. Garanta já os melhores preços e pacotes para seu destino favorito!
                </div>
                <div>
                    <img src={props.pool} alt="Ilustração de uma piscina"/>
                </div>
            </section>
            <section id="sec-l">
                <div id="linha"></div>
            </section>
            <section className="cards-promo">
                <article className="cardi">
                    <img src={props.foto} alt="..." />
                    <div>
                        <h6>Cidade</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur ab soluta voluptas odio repellat sunt dicta qui nemo perspiciatis. Odio, officia! Consequatur molestiae sapiente recusandae eligendi minima eum nam.</p>
                        <Btn />
                    </div>
                </article>
                <article className="cardi">
                    <img src={props.foto} alt="..." />
                    <div>
                        <h6>Cidade</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur ab soluta voluptas odio repellat sunt dicta qui nemo perspiciatis. Odio, officia! Consequatur molestiae sapiente recusandae eligendi minima eum nam.</p>
                        <Btn />
                    </div>
                </article>
                <article className="cardi">
                    <img src={props.foto} alt="..." />
                    <div>
                        <h6>Cidade</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur ab soluta voluptas odio repellat sunt dicta qui nemo perspiciatis. Odio, officia! Consequatur molestiae sapiente recusandae eligendi minima eum nam.</p>
                        <Btn />
                    </div>
                </article>
                <article className="cardi">
                    <img src={props.foto} alt="..." />
                    <div>
                        <h6>Cidade</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur ab soluta voluptas odio repellat sunt dicta qui nemo perspiciatis. Odio, officia! Consequatur molestiae sapiente recusandae eligendi minima eum nam.</p>
                        <Btn />
                    </div>
                </article>
                <article className="cardi">
                    <img src={props.foto} alt="..." />
                    <div>
                        <h6>Cidade</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur ab soluta voluptas odio repellat sunt dicta qui nemo perspiciatis. Odio, officia! Consequatur molestiae sapiente recusandae eligendi minima eum nam.</p>
                        <Btn />
                    </div>
                </article>
                <article className="cardi">
                    <img src={props.foto} alt="..." />
                    <div>
                        <h6>Cidade</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur ab soluta voluptas odio repellat sunt dicta qui nemo perspiciatis. Odio, officia! Consequatur molestiae sapiente recusandae eligendi minima eum nam.</p>
                        <Btn />
                    </div>
                </article>                    
            </section>
        </main>
        <Footer />
        </>
    );
}