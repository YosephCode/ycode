/*Button*/
var hab = $(".habilidades, .imagem");var hd = $("header");var bt= $(".butt").text("Contact");bt.click(function(){hab.slideToggle(400, function(){if(hab.css("display") == "none"){bt.text("Portfolio");hd.addClass("header");}else{bt.text("Contact");hd.removeClass("header");}});});
/*texteare*/
$("textarea").bind("input", function(e) {while($(this).outerHeight()<this.scrollHeight+parseFloat($(this).css("borderTopWidth"))+parseFloat($(this).css("borderBottomWidth"))&& $(this).height() < 500){$(this).height($(this).height()+1);};});
if(Modernizr.touch){/*Sem-animate-no-mobile*/}else{$(function(){var but = $(".butt");but.addClass("animated bounceInRight");$("h1").addClass("animated fadeInDown");$("header").addClass("animated shake");$(".frase2").addClass("animated tada");$(".perfil-foto").addClass("animated wobble");$(".front, .back").addClass("animated pulse");});}
// Avoid `console` errors in browsers that lack a console.
(function(){var method;var noop = function () {};var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error','exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log','markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
'timeStamp', 'trace', 'warn'];var length = methods.length;var console = (window.console = window.console || {});while (length--){method = methods[length];
if (!console[method]) {console[method] = noop;}}}());

var app = angular.module('comentario', ["firebase"]);
/*
app.controller('coments', function($scope){
	$scope.users = [{name:"Pedro", email:"pedro@gmail.com", comentario:"Gostei de ver! Aplicou angularJs nesse formulário."},
				   {name:"Nadini", email:"falcao@gmail.com", comentario:"Parabéns Yoseph, vejo que utilizou o respondJs para as MediaQuerys funcionar nos navegadores mais antigos."},
	               {name:"Fernando", email:"ferraz@gmail.com", comentario:"Legal! Com muito Html5 e css3."}];

	$scope.adicionar = function(u){
		$scope.users.push(angular.copy(u));
		u.name=null;
		u.email=null;
		u.comentario=null;
	}
});
*/
app.constant("FIREBASE_URL", "https://ycode.firebaseio.com/ycodes/" );
app.directive('chatComentario', function(){
	return{
		restrict:'E',
		templateUrl: function(elem, attrs){
			return 'chat-comentario.php';
		}
	};

});

function CommentListController($scope, $firebase, FIREBASE_URL) {
	
	// Carrega os comentarios
	var commentsRef = new Firebase(FIREBASE_URL);
	$scope.ycodes = $firebase(commentsRef);
	$scope.mostra=true;
	
	// Remove comentario
    //$scope.removeComment = function (index, comment, event) {

       // Evita remocao errada
       //if (comment.id === undefined)return;

       // Firebase: Remove comentario do escopo
      // $scope.ycodes.$remove(comment.id);

    //};

	// Adiciona comentario
    $scope.addComment  = function () {

        // Captura tempo em milissegundos para Id
        var timestamp = new Date().valueOf();

        // Referencia o comentario
        var commentRef = new Firebase(FIREBASE_URL + timestamp);
        //var commentRef = new Firebase(FIREBASE_URL);
		
		// Firebase: Cria nova entrada
        $firebase(commentRef).$set({
        	id: timestamp,
            name : $scope.commentname,
            email : $scope.commentemail,
            comentario: $scope.commentcomentario
        });

        //$scope.text = "";

    };

}



