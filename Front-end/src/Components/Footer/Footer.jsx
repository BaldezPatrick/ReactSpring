import './footer.css';

export function Footer() {
    return(
        <footer className="cont text-warning">
            <section className="contact">
                <h5>CONTATO</h5>
                <p>E-mail: exemplo@exemplo.com</p>
                <address><p>Endereço: Av. Inventada, 70, RJ</p></address>
                <p>Telefone: (00) 00000-0000</p>
            </section>
            <section className="contact">
                <h5>Mais informações</h5>
                <p>Sobre Nós</p>
                <p>Trabalhe conosco</p>
                <p>Segurança do cliente</p>
            </section>
            <section className="contact">
                <h5>Guias</h5>
                <p>África</p>
                <p>América</p>
                <p>Ásia</p>
                <p>Europa</p>
                <p>Oceania</p>
            </section>
        </footer>
    );
}