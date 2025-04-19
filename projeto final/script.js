class Tarefas {

    divFazer = document.getElementById("div_Fazer")
    divFazendo = document.getElementById("div_Fazendo")
    divFeito = document.getElementById("div_JaFeita")

   tarefasfazer = [] // Array para armazenar as tarefas a fazer
   tarefasFazendo = []
   tarefasFeita = []


    CriarTarefa() {
        let novaTarefa = document.getElementById("tarefa").value // Pega o valor do input

        this.tarefasfazer.push({nome:novaTarefa, i:"nova"}) // Adiciona a nova tarefa ao array
        console.log(this.tarefasfazer) // Exibe o array no console;
        this.Mostrar()
        
    }
    MudarTarefa(index) {
        if(index != null) {
            this.tarefasFazendo.push({nome: this.tarefasfazer[index].nome, i: "realizando"})
            this.tarefasfazer.splice(index, 1)
        }
        
        this.divFazendo.innerHTML = this.tarefasFazendo.map((tarefa, i) =>
            `
            <div id="Fazendo" class = "exibirtarefa">
                <h2>${tarefa.nome}</h2>
                <button class="buttonTarefa" onclick = "obj.ConcluirTarefa(${i})">=></button>
            </div>
            `).join("")
            this.Mostrar()


    }
    ConcluirTarefa(index) {
        if (index != null) {
            this.tarefasFeita.push({nome: this.tarefasFazendo[index].nome, i: "terminado"})
            this.tarefasFazendo.splice(index, 1)
        }
        
        this.divFeito.innerHTML = this.tarefasFeita.map((tarefa, i) =>
            `
            <div id="Feito" class = "exibirtarefa">
                <h2>${tarefa.nome}</h2>
                <button class="buttonTarefa" onclick = "obj.ExcluirTarefa(${i})">X</button>
            </div>
            `).join("")
            this.MudarTarefa(null)
    
    }

    ExcluirTarefa(index) {
        this.tarefasFeita.splice(index, 1)
        this.ConcluirTarefa(null) 

    }

    Mostrar() {
        this.divFazer.innerHTML = this.tarefasfazer.map((tarefa, i) =>
            `
            <div id ="Fazer" class = "exibirtarefa">
                <h2>${tarefa.nome}</h2>
                <button class="buttonTarefa" onclick = "obj.MudarTarefa(${i})">=></button>
            </div>
            `).join("")
        }
        
}

let obj = new Tarefas() // Instancia a classe Tarefas