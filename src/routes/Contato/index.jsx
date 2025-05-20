function Contato() {
    return (
        <div class="container">
            <div class="row p-5">
                <div class="col-12 col-md-6">
                    <b>Contato</b>
                    <p>
                        Email: contato@disasterinformer.com<br />
                        Telefone: (11) 1234-5678<br />
                        Endereço: Rua Exemplo, 123, São Paulo, SP
                    </p>
                </div>
                <form action="#" class="col-12 col-md-6">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nome:</label>
                        <input type="text" class="form-control" id="name" placeholder="João da Silva" name="name" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="email@example.com" name="email" />
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Telefone:</label>
                        <input type="tel" class="form-control" id="phone" placeholder="11999999999" name="phone" />
                    </div>
                    <div class="mb-3">
                        <label for="mensagem" class="form-label">Mensagem:</label>
                        <textarea class="form-control" id="mensagem" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contato;