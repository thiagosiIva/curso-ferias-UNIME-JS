/*
*Criar um array de objetos, com 3 objetos
*cada objetos vai ter a seguinte estrutura
*Funcionario
*   -Nome
    -Sexo
    -Cursos
        -Titulo
        -Faculdade
            -Nome
            -Endereço
        -Ano    
*
*foreach imprimindo seguindo o padrão aabaixo:
* ${funcionario} fez o curso: ${nomecurso} na faculdade ${faculdade} no ano ${ano}
*
*Só imprimir funcionarios que tem curso
*/
const funcionario = [
    {
        "nome" : "Thiago",
        "sexo" : "Masculino",
        "cursos" : [
            {
                "titulo" : "Sistemas de Informação",
                "faculdade" : {
                    "nome" : "UNIME",
                    "endereço" : "Lauro de freitas",
                    "ano" : 2021
                }
                
            }
        ]
    },

    {
        "nome" : "Zé Pequeno",
        "sexo" : "Masculino",
        "cursos" : [
            {
                "titulo" : "Medicina",
                "faculdade" : {
                    "nome" : "Catolica",
                    "endereço" : "Lauro de freitas",
                    "ano" : 2023
                }
                
            }
        ]
    },

    {
        "nome" : "Cirilo Santos",
        "sexo" : "Masculino",
        "cursos" : [
            {
                "titulo" : "Engenharia Eletrica",
                "faculdade" : {
                    "nome" : "Unifacs",
                    "endereço" : "Lauro de freitas",
                    "ano" : 2022
                }
                
            }
        ]
    },

    {
        "nome" : "Cirilo Santos(SEM CURSO)",
        "sexo" : "Masculino",
        "cursos" : [
            {
                "titulo" : "",
                "faculdade" : {
                    "nome" : "",
                    "endereço" : "",
                    "ano" : ""
                }
                
            }
        ]
    }

    

]
funcionario.forEach((funcionarios) => {
   if(funcionarios.cursos[0].titulo){
    var texto = `${funcionarios.nome} fez os cursos ${funcionarios.cursos[0].titulo} na faculdade ${funcionarios.cursos[0].faculdade.nome} no ano ${funcionarios.cursos[0].faculdade.ano}`
    console.log(texto)
   }
})
