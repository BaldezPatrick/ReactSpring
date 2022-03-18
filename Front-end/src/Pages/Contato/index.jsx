import { Menu } from '../../Components/NavBar/Nav';
import { Footer } from '../../Components/Footer/Footer';
import './contato.css';
import api from '../../Servers/api';
import { useRef, useEffect } from 'react';


export function Contato() {

    const nome = useRef()
    const sobrenome = useRef()
    const email = useRef()
    const duvida = useRef()

    function enviarDados(event) {
        event.preventDefault()
        api.post("/contato", {
            nome: nome.current.value,
            sobrenome: sobrenome.current.value,
            email: email.current.value,
            duvida: duvida.current.value
        }).then(() => document.location.reload(true)).catch((erro) => console.log(erro))
    }

    return (
        <>
            <Menu />
            <section id="txt">
                <h2>Fale com a gente</h2>
            </section>
            <section>
                <form onSubmit={enviarDados}>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Insira seu nome" ref={nome}/>
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label" >Sobrenome</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Insira seu sobrenome" ref={sobrenome} />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label" >E-mail</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Exemplo@exemplo.com" ref={email} />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label" >Motivo do contato</label>
                        <textarea type="text" class="form-control" id="formGroupExampleInput2" placeholder="Informe-nos o motivo do contato" rows="5" ref={duvida}></textarea>
                    </div>
                    <button type="submit" class="btn btn-warning">Enviar</button>
                </form>
            </section>
            <Footer />
        </>
    );
}