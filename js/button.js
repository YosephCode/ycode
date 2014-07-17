/*Button*/
var hab = $(".habilidades, .imagem");var hd = $("header");var bt= $(".butt").text("Contato");bt.click(function(){hab.slideToggle(400, function(){if(hab.css("display") == "none"){bt.text("Portfolio");hd.addClass("header");}else{bt.text("Contact");hd.removeClass("header");}});});
/*texteare*/
$("textarea").bind("input", function(e) {while($(this).outerHeight()<this.scrollHeight+parseFloat($(this).css("borderTopWidth"))+parseFloat($(this).css("borderBottomWidth"))&& $(this).height() < 500){$(this).height($(this).height()+1);};});