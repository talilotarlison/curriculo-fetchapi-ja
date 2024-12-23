import { carregaDadosGithubPorUsuario , userGitHub} from './server.js'

Promise.all([carregaDadosGithubPorUsuario("talilotarlison")])
      .then((valores) => {
          userGitHub(valores[0]);
      })
      .catch(error => {
          throw new Error(error);
      })
      .finally(
          console.log("Finalizado com sucesso!")
      )
  
  // dados na tela do usuario
  
 