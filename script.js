let lista = document.querySelectorAll(".item");

let proximo = document.getElementById("proximo");
let anterior = document.getElementById("anterior");

let contador = lista.length;

let ativo = 0;

proximo.onclick = () => {
  let inativo = document.querySelector(".ativo");
  inativo.classList.remove("ativo");
  ativo = ativo >= contador - 1 ? 0 : ativo + 1;
  lista[ativo].classList.add("ativo");
};

anterior.onclick = () => {
  let inativo = document.querySelector(".ativo");
  inativo.classList.remove("ativo");
  ativo = ativo <= 0 ? contador - 1 : ativo - 1;
  lista[ativo].classList.add("ativo");
};
