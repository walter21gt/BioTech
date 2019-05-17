angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Metodos Anticonceptivos',
    lastText: 'Son los métodos o procedimientos que previenen un embarazo en mujeres sexualmente activas, ya sean ellas o sus parejas quienes los usen. Pueden ser hormonales o no hormonales, transitorios o definitivos, basados en tecnología o en conductas',
    face: 'img/imagen1.jpg'
  }, {
    id: 1,
    name: 'Metodos Anticonceptivos',
    lastText: 'Métodos combinados que contienen estrógeno y progestágeno y que se pueden administrar como píldoras, inyecciones, anillo vaginal o parche transdérmico. Métodos que contienen solo progestágeno y que se pueden administrar como píldoras, inyecciones, implantes, anillo vaginal o dispositivo intrauterino.',
    face: 'img/imagen2.jpg'
    
  }, {
    id: 2,
    name: 'Metodos Anticonceptivos',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Metodos Anticonceptivos',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Metodos Anticonceptivos',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

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
