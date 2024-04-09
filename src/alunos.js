class Aluno {
    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}

// Array de objetos utilizando a classe Aluno
const alunos = [
    new Aluno('João', 7),
    new Aluno('Maria', 5),
    new Aluno('Pedro', 8),
    new Aluno('Ana', 6),
    new Aluno('Carlos', 4)
];

// Função para filtrar os alunos com nota maior ou igual a 6
function filtrarAlunos(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Teste da função
const alunosAprovados = filtrarAlunos(alunos);
console.log(alunosAprovados);

