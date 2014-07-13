
var esconde = "Cursos";
var mostra = "Portifolio";

var some = document.querySelector(".button");
var hab = document.querySelector(".habilidades");

some.addEventListener("click", function(event){
	hab.classList.toggle("invisivel");
	if(hab.classList.contains("invisivel")){
		this.textContent = mostra;
	}else{
		this.textContent = esconde;
	}
});
