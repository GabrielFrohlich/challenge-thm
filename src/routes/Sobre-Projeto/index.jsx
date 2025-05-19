function SobreProjeto() {
    const pessoas = [
        {
            nome: 'João Gabriel Fröhlich',
            imagem: '/imgs/joao-gabriel-frohlich.jpg',
            funcao: 'Scrum Master'
        },
        {
            nome: 'Lucas de Souza',
            imagem: '/imgs/joao-gabriel-frohlich.jpg',
            funcao: 'Desenvolvedor'
        },
        {
            nome: 'Lucas Silva',
            imagem: '/imgs/joao-gabriel-frohlich.jpg',
            funcao: 'Desenvolvedor Frontend'
        },
        {
            nome: 'Eduardo Menezes',
            imagem: '/imgs/joao-gabriel-frohlich.jpg',
            funcao: 'Desenvolvedor Backend'
        }
    ]


    return (
        <div class="container py-4">
            <h2 class="text-center mb-4">Time</h2>
            <div class="row justify-content-center">
                {pessoas.map(pessoa => (
                    <div class="col-12 col-md-3 row justify-content-center">
                        <div >
                            <img src={pessoa.imagem} alt="" class="rounded-circle w-100" />
                            <h4 class="text-center">{pessoa.nome}</h4>
                            <p class="text-center text-muted">{pessoa.funcao}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default SobreProjeto;