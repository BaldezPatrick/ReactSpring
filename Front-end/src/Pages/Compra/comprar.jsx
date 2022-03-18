import { Menu } from '../../Components/NavBar/Nav';
import { Footer } from '../../Components/Footer/Footer';
import './comprar.css';
import { useRef } from 'react';
import api from '../../Servers/api';
import { CardCompra } from '../../Components/Card/cardcompra';

export function Comprar() {

    const nome = useRef()
    const sobrenome = useRef()
    const cidade_partida = useRef()
    const destino = useRef()
    const ida = useRef()
    const volta = useRef()

    function efetuarcompra(event) {
        event.preventDefault()
        api.post("/compra", {
            nome: nome.current.value,
            sobrenome: sobrenome.current.value,
            cidade_partida: cidade_partida.current.value,
            destino: destino.current.value,
            ida: ida.current.value,
            volta: volta.current.value
        }).then(() => document.location.reload(true)).catch((erro) => console.log(erro))
    }

    return (
        <>
            <Menu />
            <section>
                <h2>Realize sua compra com um clique</h2>
            </section>
            <CardCompra/>
            <section>
                <form onSubmit={efetuarcompra}>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nome" ref={nome} />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label">Sobrenome</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Sobrenome" ref={sobrenome} />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Local de ida</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Você parte de onde?" ref={cidade_partida} />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label">Destino</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Você quer ir aonde?" ref={destino}/>
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Ida</label>
                        <input type='date' class="form-control" id="formGroupExampleInput" ref={ida}/>
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label">Volta</label>
                        <input type="date" class="form-control" id="formGroupExampleInput2" ref={volta}/>
                    </div>
                    <button type="submit" class="btn btn-warning">Enviar</button>
                </form>
            </section>
            <Footer />
        </>
    );
}