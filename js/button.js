var hab = $(".habilidades, .imagem");var hd = $("header");var bt= $(".button").text("Contato");bt.click(function(){hab.slideToggle(400, function(){if(hab.css("display") == "none"){bt.text("Portifólio");hd.addClass("header");}else{bt.text("Contato");hd.removeClass("header");}});});

