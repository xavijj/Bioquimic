angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('juegoCtrl', function($scope) {$(document).ready(function(){
  
var checkArray = []; // para verificar si las dos cartas con click son el mismo personaje
var idArray = []; //array para guardar los ids de las cartas que tienen click 
var contador = 0;
var fin = 0; 
var fields = document.querySelectorAll(".atras");


var images = [
"https://s-media-cache-ak0.pinimg.com/originals/30/9b/58/309b58c5153182dc480d429d21bb1ec1.png",
"https://s-media-cache-ak0.pinimg.com/originals/4b/ae/6c/4bae6cba8ec4060b5c4059ad2ce9c329.png",
"https://s-media-cache-ak0.pinimg.com/originals/b6/df/d7/b6dfd79c625f9ebe14709a9b75224962.png",
"https://s-media-cache-ak0.pinimg.com/originals/76/e7/a3/76e7a392abff7c8a22969f7c95f37d4c.png",
"https://s-media-cache-ak0.pinimg.com/originals/cb/ca/50/cbca50fc5156fb15b68bd3ab5dae6e06.png",
"https://s-media-cache-ak0.pinimg.com/originals/de/b9/70/deb9709e87f1d5b7f6457e8286113012.png",
"https://s-media-cache-ak0.pinimg.com/originals/29/9e/c7/299ec7c3cd62b88dd4905ffc6a71d8f9.png",
"https://s-media-cache-ak0.pinimg.com/originals/74/11/00/74110094c67aa9a519c70ecb7cec7d76.png",
"http://diysolarpanelsv.com/images/neville-clipart-4.png",
"https://s-media-cache-ak0.pinimg.com/originals/30/9b/58/309b58c5153182dc480d429d21bb1ec1.png",
"https://s-media-cache-ak0.pinimg.com/originals/4b/ae/6c/4bae6cba8ec4060b5c4059ad2ce9c329.png",
"https://s-media-cache-ak0.pinimg.com/originals/b6/df/d7/b6dfd79c625f9ebe14709a9b75224962.png",
"https://s-media-cache-ak0.pinimg.com/originals/76/e7/a3/76e7a392abff7c8a22969f7c95f37d4c.png",
"https://s-media-cache-ak0.pinimg.com/originals/cb/ca/50/cbca50fc5156fb15b68bd3ab5dae6e06.png",
"https://s-media-cache-ak0.pinimg.com/originals/de/b9/70/deb9709e87f1d5b7f6457e8286113012.png",
"https://s-media-cache-ak0.pinimg.com/originals/29/9e/c7/299ec7c3cd62b88dd4905ffc6a71d8f9.png",
"https://s-media-cache-ak0.pinimg.com/originals/74/11/00/74110094c67aa9a519c70ecb7cec7d76.png",
"http://diysolarpanelsv.com/images/neville-clipart-4.png"
];
// verificacion de los clicks
function clicked() { 
  if ($(this).find(".inner-wrap").hasClass("flipped")) {
    return;
  }
  $(this).find(".inner-wrap").toggleClass("flipped");
  checkArray.push($(this).find("img").attr("src"));
  idArray.push($(this).attr("id"));
  check();
}

$(".carta").on("click", clicked);
  
//reiniciar el juego
function reiniciar() {
  $(".atras").find("img").remove(); //quitar todas las imagenes actuales
  $(".carta .inner-wrap").removeClass("flipped"); // quitar la classe flipped para volver a su estado inicial
  checkArray = []; 
  idArray = [];
  contador = 0; 
  fin = 0;
  iniciarJuego();
}
//para verificar el fin del juego
function verificarFin() {
  if (fin === 18) { //si todas las cartas estan volteadas
    alert("Juego finalizado, lo has logrado en " + contador + " intentos");
    reiniciar();
  }
}
//para random de las imagenes 
function shuffleArray(array) { 
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function iniciarJuego() {

  

  var arr = shuffleArray(images); //array con las imagenes de forma aleatoria
 // append de las imagenes a la clase para la parte de atras de las cartas
  for (var i = 0; i < fields.length; i++) {
    var img = document.createElement("img");
    img.src = arr[i];
    fields[i].appendChild(img);
  }


}

function check() {
  //si los fields se  han hecho dos clicks 
  if (checkArray.length === 2) {
    $(".carta").off("click", clicked); 
    setTimeout(function(){
      //si no hay match
      if (checkArray[0] !== checkArray[1]) { 
        //voltear las dos cartas seleccionadas
        $("#" + idArray[0]).find(".inner-wrap").removeClass("flipped"); 
        $("#" + idArray[1]).find(".inner-wrap").removeClass("flipped"); 
        contador++;
        //vaciar los arrays para la siguiente eleccion
        checkArray = []; 
        idArray = []; 
        //habilitar el click de nuevo
        $(".carta").on("click", clicked);
      } else {

        contador++;
        
        fin += 2; // contador para el final del juego, se agregan dos para el contador de fin
        //vaciar los dos arrays
        checkArray = []; 
        idArray = []; 
        verificarFin(); 
        $(".carta").on("click", clicked); 
      }
      document.querySelector(".counter").innerHTML = contador;
    }, 800);  
  }
}



iniciarJuego();

});})


.controller('adnCtrl',function($scope){
  
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = Detector.webgl? new THREE.WebGLRenderer( { antialias: true } ): new THREE.CanvasRenderer();

var blue = 0x84D0F0;
var yellow = 0xFED162;
var purple = 0x651E59;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 20;

var tubeGeometry = new THREE.CylinderGeometry(0.3,0.3,6,32);
var ballGeometry = new THREE.SphereGeometry(0.8,32,32);
var blueMaterial = new THREE.MeshBasicMaterial( { color: blue } );
var yellowMaterial = new THREE.MeshBasicMaterial( { color: yellow } );
var purpleMaterial = new THREE.MeshBasicMaterial( { color: purple } );

var dna = new THREE.Object3D();
var holder = new THREE.Object3D();


for (var i = 0; i <= 40; i++) {
  var blueTube = new THREE.Mesh(tubeGeometry, blueMaterial);
  blueTube.rotation.z = 90 * Math.PI/180; 
  blueTube.position.x = -3;

  var yellowTube = new THREE.Mesh(tubeGeometry, yellowMaterial );
  yellowTube.rotation.z = 90 * Math.PI/180;
  yellowTube.position.x = 3;


  var ballRight = new THREE.Mesh( ballGeometry, purpleMaterial );
  ballRight.position.x = 6;

  var ballLeft = new THREE.Mesh( ballGeometry, purpleMaterial );
  ballLeft.position.x = -6;

  var row = new THREE.Object3D();
  row.add(blueTube);
  row.add(yellowTube);
  row.add(ballRight);
  row.add(ballLeft);

  row.position.y = i*2;
  row.rotation.y = 30*i * Math.PI/180;

  dna.add(row);

};


dna.position.y = -40;

scene.add(dna);

dna.position.y = -40;
holder.add(dna)
scene.add(holder);

var CubeConfigData = function() {
  this.zoom = 20;
};

var view = new CubeConfigData();
var gui = new dat.GUI();
gui.close();

gui.add( view, 'zoom', 0, 20 ).onChange( function(value) {
  camera.position.z = value;
});


var render = function () {

  requestAnimationFrame(render);

  holder.rotation.x += 0.01;
  holder.rotation.y += 0.01;
  renderer.render(scene, camera);
}

render();
});