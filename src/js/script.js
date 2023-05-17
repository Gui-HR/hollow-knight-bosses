
// Objetivo 1 - quando clicar no botão de troca de tema, adicionar a classse modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem para a alma do rei

// Passo 1 - pegar no Js o elemento HTML correspondente ao botão de trocar de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema")

// Passo 2 - dar um jeito de pegar no Js o elemento HTML correspondente ao body
const body = document.querySelector("body")
const imagemBotaoAlterarTema = document.querySelector(".imagem-botao-alterar-tema")

// Passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {
    
    // Passo 4 - adicionar a classe modo-escuro no body
    const modoEscuroAtivo = body.classList.contains("modo-escuro")

    // Passo 7 - remover a classe do modo-escuro
    body.classList.toggle("modo-escuro")

    // Passo 5 - trocar a imagem do botão de alterar o tema para a alma do rei
    imagemBotaoAlterarTema.setAttribute("src", "src/imagens/alma-do-rei.png")

    // Objetivo 2 - quando clicar no botão de troca de tema, caso o body ja tenha a classe modo-escuro, remover a classe para mudar pro modo claro e mudar a imagem para o coração do vazio

    // Passo 6 - verificar se o body ja tem o modo escuro
    if(modoEscuroAtivo){

        // Passo 8 - trocar a imagem do botão de alterar tema para o coração do vazio
        imagemBotaoAlterarTema.setAttribute("src", "src/imagens/coracao-do-vazio.png")
    }
})

