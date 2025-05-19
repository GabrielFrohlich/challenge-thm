function Footer() {
    return (
        <footer className="bg-purple text-white p-4 sticky-bottom" style={{ marginTop: 'auto' }}>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-12">
                        <b>Mapa do site</b>
                        <nav>
                            <ul>
                                <li>Home</li>
                                <li>Como funciona</li>
                                <li>Funcionalidades</li>
                                <li>Sobre o Projeto</li>
                                <li>Contato</li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-md-4 col-12">
                        <b>Contato</b>
                        <p>
                            Email: contato@disasterinformer.com<br />
                            Telefone: (11) 1234-5678<br />
                            Endereço: Rua Exemplo, 123, São Paulo, SP
                        </p>
                    </div>
                    <div class="col-md-4 col-12">
                        <b>Redes Sociais</b>
                        <p>
                            <a href="https://www.facebook.com/disasterinformer" class="text-white">Facebook</a><br />
                            <a href="https://www.twitter.com/disasterinformer" class="text-white">Twitter</a><br />
                            <a href="https://www.instagram.com/disasterinformer" class="text-white">Instagram</a>
                        </p>    
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer