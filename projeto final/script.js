class Tarefas {

    divFazer = document.getElementById("div_Fazer")
    divFazendo = document.getElementById("div_Fazendo")
    divFeito = document.getElementById("div_JaFeita")

   tarefasfazer = [] // Array para armazenar as tarefas a fazer


    CriarTarefa() {
        let novaTarefa = document.getElementById("tarefa").value // Pega o valor do input

        this.tarefasfazer.push({nome:novaTarefa, i:"nova"}) // Adiciona a nova tarefa ao array
        console.log(this.tarefasfazer) // Exibe o array no console;
        this.Mostrar()
        
    }
    MudarTarefa() {

    }
    ExcluirTarefa() {
    
    }

    Mostrar() {
        this.divFazer.innerHTML = this.tarefasfazer.map((tarefa, i) =>
            `
            <div class = "exibirtarefa">
                <h2>${tarefa.nome}</h2>
                <button class="buttonTarefa">=></button>
            </div>
            `).join("")
        }
        
}

let obj = new Tarefas() // Instancia a classe Tarefas