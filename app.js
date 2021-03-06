//Movimento do cartao
const cartao = document.querySelector(".cartao");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const comprar = document.querySelector(".comprar");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Movendo o item quando o mouse entrar na div
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  cartao.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//animação começa
container.addEventListener("mouseenter", (e) => {
  cartao.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  comprar.style.transform = "translateZ(75px)";
});
//animação termina
container.addEventListener("mouseleave", (e) => {
  cartao.style.transition = "all 0.5s ease";
  cartao.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  comprar.style.transform = "translateZ(0px)";
});