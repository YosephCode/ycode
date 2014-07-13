
var esconde = "Cursos";
var mostra = "Portifolio";

var some = document.querySelector(".button");
var hab = document.querySelector(".habilidades ");
var ft = document.querySelector(".imagem");
var hd = some.parentNode;
some.addEventListener("click", function(event){
	hd.classList.toggle("header");/*style.backgroundColor.toggle="rgba(228,239,192,0.7)";*/
	ft.classList.toggle("invisivel")
	hab.classList.toggle("invisivel");
	if(hab.classList.contains("invisivel")){
		this.textContent = mostra;
	}else{
		this.textContent = esconde;
	}
});
