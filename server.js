// modulo fetch 1

export async function carregaDadosGithubPorUsuario(user) {
    const URL = `https://api.github.com/users/${user}`;
    let data = await fetch(URL);
    return data.json();
}

export async function carregaDadosGithubPorUsuarioRepositorio(user) {
    const URLREPOS = `https://api.github.com/users/${user}/repos`
    let dataRepos = await fetch(URLREPOS)
    return dataRepos.json();
}

// dados header usuario
export function userGitHub(user) {
    let dadosUser = document.getElementById("perfil")
    dadosUser.innerHTML = `<img src="${user.avatar_url} class="logo" alt=${user.name}/>
                            <h1> ${user.name}</h1>
                            <p> ${user.bio}</p> 
                            <p> Mora no ${user.location}</p> 
                            <a href=${user.html_url}> Github</a> 
                          `
}

 // dados na tela do usuario repositorio
    
 export function userGitHubRepositorio(user) {
    console.log(user)
    let dadosUserRepositorio = document.getElementById("habilidade_sessao_card")
    //map 

    function meuPropioMap(array, funcao) {
        let novoArray = []

        array.forEach(element => {
            // console.log( element.name)
            novoArray.push(funcao(element))
        });

        return novoArray;
    }


    let dados = meuPropioMap(user, (repositorio) => {
        return `<li>
                    <a href=${repositorio.html_url}>
                        <h3> ${repositorio.name}</h3> 
                    </a>
                    <p>  ${repositorio.description || "Sem Descricao "}</hp>
                    <p> Linguagem:  ${repositorio.language || "Sem Linguagem "}</hp> 
              </li>`
    })
    dadosUserRepositorio.innerHTML += dados; 
  }