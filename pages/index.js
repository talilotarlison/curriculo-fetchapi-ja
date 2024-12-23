import { carregaDadosGithubPorUsuarioRepositorio,carregaDadosGithubPorUsuario,userGitHub,userGitHubRepositorio } from '../server.js'

Promise.all([carregaDadosGithubPorUsuarioRepositorio("talilotarlison"),carregaDadosGithubPorUsuario("talilotarlison")])
      .then((valores) => {
          userGitHubRepositorio(valores[0])
            // header da pagina
          userGitHub(valores[1])
      })
      .catch(error => {
          throw new Error(error);
      })
      .finally(
          console.log("Finalizado com sucesso!")
      )


 