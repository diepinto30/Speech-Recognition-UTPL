$(document).ready( function() {
  artyom.fatality();// Detener cualquier instancia previa

  setTimeout(function(){// Esperar 250ms para inicializar
       artyom.initialize({
          lang:"es-ES",// Más lenguajes son soportados, lee la documentación
          continuous:true,// Artyom obedecera por siempre
          listen:true, // Iniciar !
          debug:true, // Muestra un informe en la consola
          speed:1 // Habla normalmente
      }).then(function(){
          console.log("Ready to work !");
          artyom.say("Bienvenido al sistema de adminsión de la UTPL ");
      });
  },2500);
  console.log('ya pase');


//El sistema responde
artyom.addCommands([
{
    indexes:["hola",'cuál es tu banda favorita','Saluda XD'],
        action: function(i){
            if (i==0) {
            artyom.say("Hola Diego, buenos dias");
            }
            if (i==1) {
            artyom.say("Diego, me gusta tu banda RED HOT CHILI PAPPERS");
            }
            if (i==2) {
            artyom.say("Jlila XD XD XD ");
            }
        }
    },

]);

});
