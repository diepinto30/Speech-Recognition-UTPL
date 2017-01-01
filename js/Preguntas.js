

$(document).ready( function() {

    setTimeout(function(){// Esperar 250ms para inicializar
         artyom.initialize({
            lang:"es-ES",// Más lenguajes son soportados, lee la documentación
            continuous:true,// Artyom obedecera por siempre
            listen:true, // Iniciar !
            debug:true, // Muestra un informe en la consola
            speed:1 // Habla normalmente
        }).then(function(){
            console.log("Ready to work !");
        });
    },2500);

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
						artyom.say("JAJAJAJAJAJAJAJAJAJAJ XD XD XD ");
					}
				}
			},
			{
				indexes:['me voy','chau'],
				action: function(){
          artyom.say("chau");
					artyom.fatality();// Detener cualquier instancia previa
				}
			},
			{
				indexes:['abrir google','abrir facebook', 'abrir youtube'],
				action: function(i){
					if (i==0) {
						artyom.say("Abriendo google");
						window.open("http://www.google.com",'_blank');
					}
					if (i==1) {
						artyom.say("Abriendo facebook");
						window.open("http://www.facebook.com/intecsolt/",'_blank');
					}
					if (i==2) {
						artyom.say("Abriendo youtube");
						window.open("https://www.youtube.com/channel/UCF721oswf7EUSsQbuGFoMZQ",'_blank');
					}
				}
			},
			{
				indexes:['limpiar'],
				action: function(){
					$('#salida').val('');
				}
			}
		]);

		// Escribir lo que escucha.
		artyom.redirectRecognizedTextOutput(function(text,isFinal){
			var texto = $('#salida');
			if (isFinal) {
				texto.val(text);
			}else{

			}
		});



		// Stop libreria;
		function stopArtyom(){
			artyom.fatality();// Detener cualquier instancia previa
		};

		// leer texto
		$('#btnLeer').click(function (e) {
            e.preventDefault();
            var btn = $('#btnLeer');
            if (artyom.speechSupported()) {
                btn.addClass('disabled');
                btn.attr('disabled', 'disabled');

                var text = $('#leer').val();
                if (text) {
                    var lines = $("#leer").val().split("\n").filter(function (e) {
                        return e
                    });
                    var totalLines = lines.length - 1;

                    for (var c = 0; c < lines.length; c++) {
                        var line = lines[c];
                        if (totalLines == c) {
                            artyom.say(line, {
                                onEnd: function () {
                                    btn.removeAttr('disabled');
                                    btn.removeClass('disabled');
                                }
                            });
                        } else {
                            artyom.say(line);
                        }
                    }
                }
            } else {
                alert("Your browser cannot talk !");
            }
        });

});
