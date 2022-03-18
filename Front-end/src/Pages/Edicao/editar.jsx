import api from "../../Servers/api";
import { useRef, useEffect, useState } from "react";

export function Editar(props) {

    const nome = useRef()
    const sobrenome = useRef()
    const email = useRef()
    const duvida = useRef()

    const [contato, setContato] = useState([])

    useEffect(() => {
        api.get("/contato").then((res) => {
            setContato(res.data)
        }).catch((erro) => console.log(erro))
    }, [])

    return (
        <section>
                <form key={contato.id}>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" ref={nome} defaultValue={props.produto.nome}/>
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label" >Sobrenome</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2"  ref={sobrenome} defaultValue={props.produto.sobrenome}/>
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label" >E-mail</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" ref={email} defaultValue={props.produto.email} />
                    </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label" >Motivo do contato</label>
                        <textarea type="text" class="form-control" id="formGroupExampleInput2" ref={duvida} defaultValue={props.produto.duvida} rows="5"></textarea>
                    </div>
                    <button type="submit" class="btn btn-warning">Salvar</button>
                </form>
        </section>
    );
}