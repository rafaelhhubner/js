// 1 - inserir dado
localStorage.setItem("name", "Matheus");

// 2 - restart sem perder dados

// 3 - resgatar item
const name = localStorage.getItem("name");

console.log(name);

// 4 - resgate de item que não existe
const lastName = localStorage.getItem("lastname");

console.log(lastName);

if(!lastName) {
    console.log("Sem sobrenome");
}

// 5 - remover item
localStorage.removeItem("name");

// 6 - limpar todos os itens
localStorage.setItem("a", 1);
localStorage.setItem("b", 2);

// console.log(typeof localStorage.getItem("a"));

localStorage.clear();

// 7 - session storage
// sessionStorage.setItem("number", 123);

// 8 - reiniciar e perder dados

const n = sessionStorage.getItem("number");

console.log(n);

// sessionStorage.removeItem("number");

sessionStorage.clear();

// 9 - salvar objeto

const person = {
    name: "Matheus",
    age: 31,
    job: "Programmer",
};

// localStorage.setItem("person", person);

localStorage.setItem("person", JSON.stringify(person));

const getPerson = localStorage.getItem("person");

console.log(getPerson);

const personObject = JSON.parse(getPerson);

console.log(typeof personObject);

console.log(personObject.job);

