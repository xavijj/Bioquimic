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