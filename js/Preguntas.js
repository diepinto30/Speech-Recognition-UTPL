$(document).ready(function() {
    var div = "";
    var div2 = "";
    var div3 = "";
    var div4 = "";
    var div5 = "";
    var div6 = "";
    artyom.fatality(); // Detener cualquier instancia previa

    setTimeout(function(){// Esperar 250ms para inicializar
        artyom.initialize({
            lang:"es-ES", // Más lenguajes son soportados, lee la documentación
            continuous:true, // Artyom obedecera por siempre
            listen:true, // Iniciar !
            debug:true, // Muestra un informe en la consola
            speed:0.9 // Habla normalmente
        }).then(function(){
            console.log("Ready to work !");
            artyom.say("Bienvenido al sistema de admisión de la UTPL ");
            artyom.say("Para emprezar la prueba diga Comezar");
        });
    }, 2500);
//El sistema responde
    artyom.addCommands([{
        indexes:["Comenzar", "Comensar"],
        action: function(i){
            if (i == 0) {
                artyom.say("PREGUNTAS DE APTITUD VERBAL");
                artyom.say("Para responder la pregunta debe decir el valor del literal");
                artyom.say("O Si Desea repetir la pregunta solo dice repetir con el número de la pregunta");
                artyom.say("Ejemplo: repetir 7 ");
                artyom.say("Pregunta uno");
                artyom.say("Elija la palabra que conplete el campo semántico siguiente:");
                artyom.say("juego, diversión, entretenimiento, ");
                artyom.say("a. Recreación");
                artyom.say("b. Descanso");
                artyom.say("c. Sueño");
                artyom.say("d. Detención");
                div += '<div style="border: 4px solid black;" class="pregunta1">';
                div += 'PREGUNTAS DE APTITUD VERBAL<br>';
                div += '<strong>Pregunta 1</strong><br>';
                div += 'Elija la palabra que complete el campo semántico siguiente: juego, diversión, entretenimiento, <br>';
                div += '<strong>a.</strong> Recreación <br>';
                div += '<strong>b.</strong> Descanso <br>';
                div += '<strong>c.</strong> Sueño <br>';
                div += '<strong>d.</strong> Detención<br>';
                div += 'Su respuesta escogida: <strong><div id="res"></div></strong>';
                div += '</div>';
                $("#preguntas").append(div);
                artyom.say("Su respuesta es:");
                artyom.addCommands([{
                    indexes:["Respuesta A", "Respuesta B", "Respuesta C", "Respuesta D", "Repetir uno"],
                    action: function(i){
                        if (i == 0) {
                            var gAux = "Recreación";
                            $("#res").text(gAux);
                            //$(".pregunta1").fadeOut();
                            artyom.say("Para activar la otra pregunta decir segunda pregunta");
                            $(".pregunta2").fadeIn("slow");
                        }else if (i == 1) {
                            var gAux = "Descanso";
                            $("#res").text(gAux);
                            //$(".pregunta1").fadeOut();
                            artyom.say("Para activar la otra pregunta decir segunda pregunta");
                            $(".pregunta2").fadeIn("slow");
                        }else if (i == 2) {
                            var gAux = "Sueño";
                            $("#res").text(gAux);
                            //$(".pregunta1").fadeOut();
                            artyom.say("Para activar la otra pregunta decir segunda pregunta");
                            $(".pregunta2").fadeIn("slow");
                        } else if (i == 3) {
                            var gAux = "Detención";
                            $("#res").text(gAux);
                            //$(".pregunta1").fadeOut();
                            artyom.say("Para activar la otra pregunta decir segunda pregunta");
                            $(".pregunta2").fadeIn("slow");
                        }else if (i == 4) {
                            artyom.say("Primera Pregunta");
                            artyom.say("Elija la palabra que complete el campo semántico siguiente:");
                            artyom.say("juego, diversión, entretenimiento, ");
                            artyom.say("a. Recreación");
                            artyom.say("b. Descanso");
                            artyom.say("c. Sueño");
                            artyom.say("d. Detención");
                            artyom.say("Su respuesta es:");
                        };
                    }
                },
                {
                    indexes:["Segunda Pregunta", "s"],
                    action: function(i){
                        if (i == 0) {
                            artyom.say("Pregunta Dos");
                            artyom.say("Escuche las siguientes frases e identifique la que contiene palabras antónimas.");
                            artyom.say("a. La obscuridad de la noche da tristeza.");
                            artyom.say("b. Cuando más creces tus ideales son menores.");
                            artyom.say("c. La luz de sus ojos alumbran mi camino.");
                            artyom.say("d. Los ojos de mi madre son la ventana de mi alma.");
                            artyom.say("Su respuesta es:");
                            div2 += '<div style="border: 4px solid black;" class="pregunta1">';
                            div2 += 'PREGUNTAS DE APTITUD VERBAL<br>';
                            div2 += '<strong>Pregunta 2</strong><br>';
                            div2 += 'Escuche las siguientes frases e identifique la que contiene palabras antónimas.<br>';
                            div2 += '<strong>a.</strong> La obscuridad de la noche da tristeza <br>';
                            div2 += '<strong>b.</strong> Cuando más creces tus ideales son menores <br>';
                            div2 += '<strong>c.</strong> La luz de sus ojos alumbran mi camino <br>';
                            div2 += '<strong>d.</strong> Los ojos de mi madre son la ventana de mi alma<br>';
                            div2 += 'Su respuesta escogida: <strong><div id="res2"></div></strong>';
                            div2 += '</div>';
                            $("#preguntas2").append(div2);
                        };
                        artyom.addCommands([{
                            indexes:["literal A", "literal B", "literal SE", "literal D", "Repetir 2"],
                            action: function(i){
                                if (i == 0) {
                                    var gAux = "La obscuridad de la noche da tristeza";
                                    $("#res2").text(gAux);
                                    //$(".pregunta1").fadeOut();
                                    artyom.say("Para activar la otra pregunta decir tercera pregunta");
                                    $(".pregunta2").fadeIn("slow");
                                }else if (i == 1) {
                                    var gAux = "Cuando más creces tus ideales son menores";
                                    $("#res2").text(gAux);
                                    //$(".pregunta1").fadeOut();
                                    artyom.say("Para activar la otra pregunta decir tercera pregunta");
                                    $(".pregunta2").fadeIn("slow");
                                }else if (i == 2) {
                                    var gAux = "La luz de sus ojos alumbran mi camino";
                                    $("#res2").text(gAux);
                                    //$(".pregunta1").fadeOut();
                                    artyom.say("Para activar la otra pregunta decir tercera pregunta");
                                    $(".pregunta2").fadeIn("slow");
                                } else if (i == 3) {
                                    var gAux = "Los ojos de mi madre son la ventana de mi alma";
                                    $("#res2").text(gAux);
                                    //$(".pregunta1").fadeOut();
                                    artyom.say("Para activar la otra pregunta decir tercera pregunta");
                                    $(".pregunta2").fadeIn("slow");
                                }else if (i == 4) {
                                     artyom.say("Pregunta Dos");
                                    artyom.say("Escuche las siguientes frases e identifique la que contiene palabras antónimas.");
                                    artyom.say("a. La obscuridad de la noche da tristeza.");
                                    artyom.say("b.Cuando más creces tus ideales son menores.");
                                    artyom.say("c. La luz de sus ojos alumbran mi camino.");
                                    artyom.say("d. Los ojos de mi madre son la ventana de mi alma.");
                                    artyom.say("Su respuesta es:");
                                };
                            }
                        }]);
                    }
                },
                {
                    indexes:["tercera Pregunta", "s"],
                    action: function(i){
                        if (i == 0) {
                            artyom.say("Pregunta tres");
                            artyom.say("Escuche las siguientes frases e identifique la que contiene palabras antónimas.");
                            artyom.say("a. La obscuridad de la noche da tristeza.");
                            artyom.say("b. Cuando más creces tus ideales son menores.");
                            artyom.say("c. La luz de sus ojos alumbran mi camino.");
                            artyom.say("d. Los ojos de mi madre son la ventana de mi alma.");
                            artyom.say("Su respuesta es:");
                            div2 += '<div style="border: 4px solid black;" class="pregunta1">';
                            div2 += 'PREGUNTAS DE APTITUD VERBAL<br>';
                            div2 += '<strong>Pregunta 2</strong><br>';
                            div2 += 'Escuche las siguientes frases e identifique la que contiene palabras antónimas.<br>';
                            div2 += '<strong>a.</strong> La obscuridad de la noche da tristeza <br>';
                            div2 += '<strong>b.</strong> Cuando más creces tus ideales son menores <br>';
                            div2 += '<strong>c.</strong> La luz de sus ojos alumbran mi camino <br>';
                            div2 += '<strong>d.</strong> Los ojos de mi madre son la ventana de mi alma<br>';
                            div2 += 'Su respuesta escogida: <strong><div id="res3"></div></strong>';
                            div2 += '</div>';
                            $("#preguntas2").append(div2);
                        };
                        artyom.addCommands([{
                            indexes:["literal A", "literal B", "literal SE", "literal D", "Repetir 2"],
                            action: function(i){
                                if (i == 0) {
                                    var gAux = "La obscuridad de la noche da tristeza";
                                    $("#res3").text(gAux);
                                    //$(".pregunta1").fadeOut();
                                    artyom.say("Para activar la otra pregunta decir cuarta pregunta");
                                    $(".pregunta3").fadeIn("slow");
                                }else if (i == 1) {
                                    var gAux = "Cuando más creces tus ideales son menores";
                                    $("#res3").text(gAux);
                                    //$(".pregunta1").fadeOut();
                                    artyom.say("Para activar la otra pregunta decir cuarta pregunta");
                                    $(".pregunta3").fadeIn("slow");
                                }else if (i == 2) {
                                    var gAux = "La luz de sus ojos alumbran mi camino";
                                    $("#res3").text(gAux);
                                    //$(".pregunta1").fadeOut();
                                    artyom.say("Para activar la otra pregunta decir cuarta pregunta");
                                    $(".pregunta3").fadeIn("slow");
                                } else if (i == 3) {
                                    var gAux = "Los ojos de mi madre son la ventana de mi alma";
                                    $("#res23").text(gAux);
                                    //$(".pregunta1").fadeOut();
                                    artyom.say("Para activar la otra pregunta decir cuarta pregunta");
                                    $(".pregunta3").fadeIn("slow");
                                }else if (i == 4) {
                                     artyom.say("Pregunta Dos");
                                    artyom.say("Escuche las siguientes frases e identifique la que contiene palabras antónimas.");
                                    artyom.say("a. La obscuridad de la noche da tristeza.");
                                    artyom.say("b.Cuando más creces tus ideales son menores.");
                                    artyom.say("c. La luz de sus ojos alumbran mi camino.");
                                    artyom.say("d. Los ojos de mi madre son la ventana de mi alma.");
                                    artyom.say("Su respuesta es:");
                                };
                            }
                        }]);
                    }
                }]);
            }
        }
    }]);
});
