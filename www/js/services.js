angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Lacteos',
    lastText: 'Leche entera, semi o descremada, leche en polvo o evaporada, queso, yogurt; 24g de queso, 3/4 tazon de leche o yogurt; porciones 4"',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Pan y Cereales',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Legumbres',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Frutas',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Verduras',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }, {
    id: 5,
    name: 'Procesados',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }, {
    id: 6,
    name: '',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  },];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
