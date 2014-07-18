/*Button*/
var hab = $(".habilidades, .imagem");var hd = $("header");var bt= $(".butt").text("Contato");bt.click(function(){hab.slideToggle(400, function(){if(hab.css("display") == "none"){bt.text("Portfolio");hd.addClass("header");}else{bt.text("Contact");hd.removeClass("header");}});});
/*texteare*/
$("textarea").bind("input", function(e) {while($(this).outerHeight()<this.scrollHeight+parseFloat($(this).css("borderTopWidth"))+parseFloat($(this).css("borderBottomWidth"))&& $(this).height() < 500){$(this).height($(this).height()+1);};});



$(function(){
	if(Modernizr.touch){
		$(function(){
			function init(){
			var but = $(".butt");
			but.addClass("animated bounceInRight");
				$("h1").addClass("animated fadeInDown");
				$("header").addClass("animated shake");
				$(".frase2").addClass("animated tada");
				$(".perfil-foto").addClass("animated wobble");
				$(".front, .back").addClass("animated pulse");
				}
			init();
		});
	}else{
		alert('NÃO TEM TOUCH');
		
	}
});
