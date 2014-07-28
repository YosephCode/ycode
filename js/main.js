/*Button*/
var hab = $(".habilidades, .imagem");var hd = $("header");var bt= $(".butt").text("Contact");bt.click(function(){hab.slideToggle(400, function(){if(hab.css("display") == "none"){bt.text("Portfolio");hd.addClass("header");}else{bt.text("Contact");hd.removeClass("header");}});});
/*texteare*/
$("textarea").bind("input", function(e) {while($(this).outerHeight()<this.scrollHeight+parseFloat($(this).css("borderTopWidth"))+parseFloat($(this).css("borderBottomWidth"))&& $(this).height() < 500){$(this).height($(this).height()+1);};});
if(Modernizr.touch){/*Sem-animate-no-mobile*/}else{$(function(){var but = $(".butt");but.addClass("animated bounceInRight");$("h1").addClass("animated fadeInDown");$("header").addClass("animated shake");$(".frase2").addClass("animated tada");$(".perfil-foto").addClass("animated wobble");$(".front, .back").addClass("animated pulse");});}
// Avoid `console` errors in browsers that lack a console.
(function(){var method;var noop = function () {};var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error','exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log','markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
'timeStamp', 'trace', 'warn'];var length = methods.length;var console = (window.console = window.console || {});while (length--){method = methods[length];
if (!console[method]) {console[method] = noop;}}}());




