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
        <div class="">
            <div class="container py-4 mb-5">
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

            <div class="bg-purple text-white p-4">
                <div class="container py-4 mb-5">
                    <h2 class="text-center mb-4">💻 Tecnologia Utilizada</h2>
                    <p class="fs-5">Nosso aplicativo foi desenvolvido com tecnologias modernas e confiáveis para garantir desempenho, segurança e uma excelente experiência ao usuário. Utilizamos:

                        <ul>
                            <li>React: uma biblioteca JavaScript para construir interfaces dinâmicas e interativas de forma eficiente.</li>
                            <li>HTML e CSS: as bases da estrutura e do estilo das páginas, garantindo acessibilidade e compatibilidade com todos os navegadores.</li>
                            <li>JavaScript: responsável pela interatividade e lógica do app, permitindo respostas rápidas e intuitivas.</li>
                            <li>Bootstrap: um framework responsivo que nos ajuda a criar um design moderno e adaptável a diferentes tamanhos de tela.</li>
                        </ul>
                        Essa combinação de tecnologias permite que o aplicativo funcione de forma fluida e esteja sempre pronto para fornecer informações críticas quando você mais precisa.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default SobreProjeto;