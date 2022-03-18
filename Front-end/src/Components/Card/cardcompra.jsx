import { useEffect, useState } from "react";
import api from "../../Servers/api";
import './cardcompra.css';

export function CardCompra() {
    const [compra, setCompra] = useState([])

    useEffect(() => {
        api.get("/compra").then((res) => {
            setCompra(res.data)
        }).catch((erro) => console.log(erro))
    }, [])

    function deletar(btn) {
        api.delete(`/compra/${btn.target.value}`)
            .then(() => api.get("/compra").then((res) => {
                setCompra(res.data)
            }).catch((erro) => console.log(erro))).catch((erro) => console.log(erro))
    }

    return (
        <>
            {compra.map((compra) => (
                <div id="cont-1" key={compra.id}>
                    <div>
                        <h3>Compra realizada com sucesso!</h3>
                        <p>Os dados de sua compra seguem abaixo.</p>
                    </div>
                    <div id="cont">
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Sobrenome</th>
                                    <th scope="col">Local da ida</th>
                                    <th scope="col">Destino</th>
                                    <th scope="col">Ida</th>
                                    <th scope="col">Volta</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">{compra.nome}</th>
                                    <td>{compra.sobrenome}</td>
                                    <td>{compra.cidade_partida}</td>
                                    <td>{compra.destino}</td>
                                    <td>{compra.ida}</td>
                                    <td>{compra.volta}</td>
                                    <td><button className="butto" type='submit' value={compra.id} onClick={(btn) => deletar(btn)}>Excluir</button> <span className="bg-warning editar">Editar</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </>
    );
}