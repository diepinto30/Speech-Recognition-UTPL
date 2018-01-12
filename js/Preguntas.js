$(document).ready(function() {
    var div = "";
    var div2 = "";
    var div3 = "";
    var div4 = "";
    var div5 = "";
    var div6 = "";
    var contador = 0;
    var imgBien = '<img src="img/bien.jpg" alt="bien, ok" width="2%">';
    var imgMal = '<img src="img/mal.jpg" alt="mal" width="2%">';
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
            artyom.say("Para emprezar la prueba diga Comenzar");
        });
    }, 2500);
//El sistema responde
    artyom.addCommands([{
        indexes:["Comenzar", "Comensar"],
        action: function(i){
            if (i == 0) {
                artyom.say("Tener en cuenta lo siguientes puntos antes de empezar el examen");
                artyom.say("En cada pregunta se le dirá como debe responder a la pregunta");
                artyom.say("O Si Desea repetir la pregunta, solo dice repetir con el número de la pregunta");
                artyom.say("Ejemplo: repetir 7 ");
                artyom.say("Empezamos ahora");
                artyom.say("PREGUNTAS DE APTITUD VERBAL");
                artyom.say("Para responder la pregunta debe decir la palabra respuesta seguido del literal");
                artyom.say("Pregunta uno");
                artyom.say("Elija la palabra que conplete el campo semántico siguiente:");
                artyom.say("juego, diversión, entretenimiento, ");
                artyom.say("a. Recreación");
                artyom.say("b. Descanso");
                artyom.say("c. Sueño");
                artyom.say("d. Detención");
                div += '<div style="border: 4px solid black;padding:1.5em;width: 91.2%;margin-left: 2em;" class="pregunta1">';
                div += 'PREGUNTAS DE APTITUD VERBAL<br>';
                div += '<strong>Pregunta 1</strong><br>';
                div += 'Elija la palabra que complete el campo semántico siguiente: juego, diversión, entretenimiento, <br>';
                div += '<strong>a.</strong> Recreación <br>';
                div += '<strong>b.</strong> Descanso <br>';
                div += '<strong>c.</strong> Sueño <br>';
                div += '<strong>d.</strong> Detención<br>';
                div += 'Su respuesta escogida: <strong><p id="res"></p></strong><div id="imgs"></div>';
                div += '</div>';
                $("#preguntas").append(div);
                artyom.say("Su respuesta es:");
                artyom.addCommands([{
                    indexes:["Respuesta A", "Respuesta B", "Respuesta C", "Respuesta D", "Repetir uno"],
                    action: function(i){
                        if (i == 0) {
                            var gAux = "Recreación";
                            $("#res").text(gAux);
                            artyom.say("Para activar la otra pregunta decir segunda pregunta");
                            $(".pregunta2").fadeIn("slow");
                        }else if (i == 1) {
                            var gAux = "Descanso";
                            $("#res").text(gAux);
                            artyom.say("Para activar la otra pregunta decir segunda pregunta");
                            $(".pregunta2").fadeIn("slow");
                        }else if (i == 2) {
                            var gAux = "Sueño";
                            $("#res").text(gAux);
                            artyom.say("Para activar la otra pregunta decir segunda pregunta");
                            $(".pregunta2").fadeIn("slow");
                        } else if (i == 3) {
                            var gAux = "Detención";
                            $("#res").text(gAux);
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
                            artyom.say("Para responder la pregunta debe decir la palabra literal, seguido del literal");
                            artyom.say("Pregunta Dos");
                            artyom.say("Escuche las siguientes frases e identifique la que contiene palabras antónimas.");
                            artyom.say("a. La obscuridad de la noche da tristeza.");
                            artyom.say("b. Cuando más creces tus ideales son menores.");
                            artyom.say("c. La luz de sus ojos alumbran mi camino.");
                            artyom.say("d. Los ojos de mi madre son la ventana de mi alma.");
                            artyom.say("Su respuesta es:");
                            div2 += '<div style="border: 4px solid black;padding:1.5em;width: 91.2%;margin-left: 2em;" class="pregunta1">';
                            div2 += 'PREGUNTAS DE APTITUD VERBAL<br>';
                            div2 += '<strong>Pregunta 2</strong><br>';
                            div2 += 'Escuche las siguientes frases e identifique la que contiene palabras antónimas.<br>';
                            div2 += '<strong>a.</strong> La obscuridad de la noche da tristeza <br>';
                            div2 += '<strong>b.</strong> Cuando más creces tus ideales son menores <br>';
                            div2 += '<strong>c.</strong> La luz de sus ojos alumbran mi camino <br>';
                            div2 += '<strong>d.</strong> Los ojos de mi madre son la ventana de mi alma<br>';
                            div2 += 'Su respuesta escogida: <strong><p id="res2"></p></strong><div id="imgs"></div>';
                            div2 += '</div>';
                            $("#preguntas2").append(div2);
                        };
                        artyom.addCommands([{
                            indexes:["literal A", "literal B", "literal C", "literal D", "Repetir 2"],
                            action: function(i){
                                if (i == 0) {
                                    var gAux = "La obscuridad de la noche da tristeza";
                                    $("#res2").text(gAux);
                                    artyom.say("Para activar la otra pregunta decir tercera pregunta");
                                    $(".pregunta2").fadeIn("slow");
                                }else if (i == 1) {
                                    var gAux = "Cuando más creces tus ideales son menores";
                                    $("#res2").text(gAux);
                                    artyom.say("Para activar la otra pregunta decir tercera pregunta");
                                    $(".pregunta2").fadeIn("slow");
                                }else if (i == 2) {
                                    var gAux = "La luz de sus ojos alumbran mi camino";
                                    $("#res2").text(gAux);
                                    artyom.say("Para activar la otra pregunta decir tercera pregunta");
                                    $(".pregunta2").fadeIn("slow");
                                } else if (i == 3) {
                                    var gAux = "Los ojos de mi madre son la ventana de mi alma";
                                    $("#res2").text(gAux);
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
                            artyom.say("PREGUNTAS DE APTITUD lógica");
                            artyom.say("Para responder la pregunta debe decir la respuesta ejemplo, cinco horas");
                            artyom.say("O Si Desea repetir la pregunta solo dice repetir con el número de la pregunta");
                            artyom.say("Ejemplo: repetir 7 ");
                            artyom.say("Pregunta 3 ");
                            artyom.say("Dos pantalones se secan en dos horas, ¿en qué tiempo se secan 3 pantalones?");
                            artyom.say("a. Una hora");
                            artyom.say("b. dos horas");
                            artyom.say("c. tres horas");
                            artyom.say("d. cuatro horas");
                            artyom.say("Su respuesta es:");
                            div3 += '<div style="border: 4px solid black;padding:1.5em;width: 91.2%;margin-left: 2em;" class="pregunta1">';
                            div3 += 'PREGUNTAS DE APTITUD LOGICA<br>';
                            div3 += '<strong>Pregunta 3</strong><br>';
                            div3 += 'Dos pantalones se secan en dos horas, ¿en qué tiempo se secan 3 pantalones?<br>';
                            div3 += '<strong>a.</strong> Una hora <br>';
                            div3 += '<strong>b.</strong> dos horas <br>';
                            div3 += '<strong>c.</strong> tres horas <br>';
                            div3 += '<strong>d.</strong> cuarto horas<br>';
                            div3 += 'Su respuesta escogida: <strong><p id="res3"></p></strong><div id="imgs"></div>';
                            div3 += '</div>';
                            $("#preguntas3").append(div3);
                        };
                        artyom.addCommands([{
                            indexes:["una hora", "2 horas", "3 horas", "4 horas ", "Repetir 3"],
                            action: function(i){
                                if (i == 0) {
                                    var gAux = "una hora";
                                    $("#res3").text(gAux);
                                    artyom.say("Para activar la otra pregunta decir cuarta pregunta");
                                    $(".pregunta3").fadeIn("slow");
                                }else if (i == 1) {
                                    var gAux = "dos horas";
                                    $("#res3").text(gAux);
                                    artyom.say("Para activar la otra pregunta decir cuarta pregunta");
                                    $(".pregunta3").fadeIn("slow");
                                }else if (i == 2) {
                                    var gAux = "tres horas";
                                    $("#res3").text(gAux);
                                    artyom.say("Para activar la otra pregunta decir cuarta pregunta");
                                    $(".pregunta3").fadeIn("slow");
                                } else if (i == 3) {
                                    var gAux = "cuatro horas";
                                    $("#res3").text(gAux);
                                    //$(".pregunta1").fadeOut();
                                    artyom.say("Para activar la otra pregunta decir cuarta pregunta");
                                    $(".pregunta3").fadeIn("slow");
                                }else if (i == 4) {
                                    artyom.say("Pregunta 3 ");
                                    artyom.say("Dos pantalones se secan en dos horas, ¿en qué tiempo se secan 3 pantalones?");
                                    artyom.say("a. Una hora");
                                    artyom.say("b. dos horas");
                                    artyom.say("c. tres horas");
                                    artyom.say("d. cuatro horas");
                                    artyom.say("Su respuesta es:");
                                };
                            }
                        }]);
                    }
                },
                {
                    indexes:["cuarta Pregunta", "s"],
                    action: function(i){
                        if (i == 0) {
                            artyom.say("Para responder la pregunta debe decir la respuesta ejemplo, noveno");
                            artyom.say("Pregunta 4");
                            artyom.say("En una carrera de 5 competidores adelantas al que va segundo, ¿en qué puesto quedas?");
                            artyom.say("a. primero");
                            artyom.say("b. segundo");
                            artyom.say("c. tercero");
                            artyom.say("d. cuarto");
                            artyom.say("Su respuesta es:");
                            div4 += '<div style="border: 4px solid black;padding:1.5em;width: 91.2%;margin-left: 2em;" class="pregunta1">';
                            div4 += 'PREGUNTAS DE APTITUD LOGICA<br>';
                            div4 += '<strong>Pregunta 4</strong><br>';
                            div4 += 'En una carrera de 5 competidores adelantas al que va segundo, ¿en qué puesto quedas?.<br>';
                            div4 += '<strong>a.</strong> 1° <br>';
                            div4 += '<strong>b.</strong> 2° <br>';
                            div4 += '<strong>c.</strong> 3° <br>';
                            div4 += '<strong>d.</strong> 4° <br>';
                            div4 += 'Su respuesta escogida: <strong><p id="res4"></p></strong><div id="imgs"></div>';
                            div4 += '</div>';
                            $("#preguntas4").append(div4);
                        };
                        artyom.addCommands([{
                            indexes:["primero", "segundo", "tercero", "cuarto", "Repetir 4"],
                            action: function(i){
                                if (i == 0) {
                                    var gAux = "1°";
                                    $("#res4").text(gAux);
                                    //$(".pregunta1").fadeOut();
                                    artyom.say("Para activar la otra pregunta decir quinta pregunta");
                                    $(".pregunta4").fadeIn("slow");
                                }else if (i == 1) {
                                    var gAux = "2°";
                                    $("#res4").text(gAux);
                                    //$(".pregunta1").fadeOut();
                                    artyom.say("Para activar la otra pregunta decir quinta pregunta");
                                    $(".pregunta4").fadeIn("slow");
                                }else if (i == 2) {
                                    var gAux = "3°";
                                    $("#res4").text(gAux);
                                    //$(".pregunta1").fadeOut();
                                    artyom.say("Para activar la otra pregunta decir quinta pregunta");
                                    $(".pregunta4").fadeIn("slow");
                                } else if (i == 3) {
                                    var gAux = "4°";
                                    $("#res4").text(gAux);
                                    //$(".pregunta1").fadeOut();
                                    artyom.say("Para activar la otra pregunta decir quinta pregunta");
                                    $(".pregunta4").fadeIn("slow");
                                }else if (i == 4) {
                                    artyom.say("Pregunta 4");
                                    artyom.say("En una carrera de 5 competidores adelantas al que va segundo, ¿en qué puesto quedas?");
                                    artyom.say("a. primero");
                                    artyom.say("b. segundo");
                                    artyom.say("c. tercero");
                                    artyom.say("d. cuarto");
                                };
                            }
                        }]);
                    }
                },
                {
                    indexes:["quinta Pregunta", "s"],
                    action: function(i){
                        if (i == 0) {
                            artyom.say("COMPETENCIA ESPÍRITUAL DE LA UNIVERSIDAD");
                            artyom.say("Para responder la pregunta debe decir la respuesta");
                            artyom.say("O Si Desea repetir la pregunta solo dice repetir con el número de la pregunta");
                            artyom.say("Ejemplo: repetir 7 ");
                            artyom.say("Pregunta 5");
                            artyom.say("La visión de la UTPL es el Humanismo de Cristo con lo cual se propugna una Universidad \n\
                                       potenciadora e integradora donde el fundamento de toda actividad académica se sustenta en:");
                            artyom.say("a. La dignidad humana ");
                            artyom.say("b. Indicadores de eficiencia");
                            artyom.say("c. Criterios de calidad");
                            artyom.say("d. El trabajo en equipo");
                            artyom.say("Su respuesta es:");
                            div5 += '<div style="border: 4px solid black;padding:1.5em;width: 91.2%;margin-left: 2em;" class="pregunta1">';
                            div5 += 'COMPETENCIAS ESPÍRITU DE LA UNIVERSIDAD<br>';
                            div5 += '<strong>Pregunta 5</strong><br>';
                            div5 += 'La visión de la UTPL es el Humanismo de Cristo con lo cual se propugna una Universidad \n\
                                       potenciadora e integradora donde el fundamento de toda actividad académica se sustenta en:<br>';
                            div5 += '<strong>a.</strong> La dignidad humana <br>';
                            div5 += '<strong>b.</strong> Indicadores de eficiencia <br>';
                            div5 += '<strong>c.</strong> Criterios de calidad <br>';
                            div5 += '<strong>d.</strong> El trabajo en equipo <br>';
                            div5 += 'Su respuesta escogida: <strong><p id="res5"></p></strong> <div id="imgs"></div>';
                            div5 += '</div>';
                            $("#preguntas5").append(div5);
                        };
                        artyom.addCommands([{
                            indexes:["La dignidad humana", "Indicadores de eficiencia", "criterios de calidad", "el trabajo en equipo", "Repetir 5"],
                            action: function(i){
                                if (i == 0) {
                                    var gAux = "La dignidad humana";
                                    $("#res5").text(gAux);
                                    artyom.say("Para activar la otra pregunta decir sexta pregunta");
                                    $(".pregunta5").fadeIn("slow");
                                }else if (i == 1) {
                                    var gAux = "Indicadores de eficiencia";
                                    $("#res5").text(gAux);
                                    artyom.say("Para activar la otra pregunta decir sexta pregunta");
                                    $(".pregunta5").fadeIn("slow");
                                }else if (i == 2) {
                                    var gAux = "Criterios de calidad";
                                    $("#res5").text(gAux);
                                    artyom.say("Para activar la otra pregunta decir sexta pregunta");
                                    $(".pregunta5").fadeIn("slow");
                                } else if (i == 3) {
                                    var gAux = "El trabajo en equipo";
                                    $("#res5").text(gAux);
                                    artyom.say("Para activar la otra pregunta decir sexta pregunta");
                                    $(".pregunta5").fadeIn("slow");
                                }else if (i == 4) {
                                    artyom.say("Pregunta 5");
                                    artyom.say("La visión de la UTPL es el Humanismo de Cristo con lo cual se propugna una Universidad \n\
                                               potenciadora e integradora donde el fundamento de toda actividad académica se sustenta en:");
                                    artyom.say("a. La dignidad humana ");
                                    artyom.say("b. Indicadores de eficiencia");
                                    artyom.say("c. Criterios de calidad");
                                    artyom.say("d. El trabajo en equipo");
                                    artyom.say("Su respuesta es:");
                                };
                            }
                        }]);
                    }
                },
                {
                    indexes:["sexta Pregunta", "s"],
                    action: function(i){
                        if (i == 0) {
                            artyom.say("Para responder la pregunta debe decir la letra de la respuesta");
                            artyom.say("Pregunta 6");
                            artyom.say("La Universidad es una institución educativa de nivel superior que se responsabiliza de formar \n\
                                        Íntegramente a los educandos, principalmente. Dicha integridad compete abordar varios aspectos \n\
                                        intrínsecos al ser humano, siendo relevante para el desempeño adecuado de la profesión: ");
                            artyom.say("a. El desarrollo de las relaciones humanas ");
                            artyom.say("b. La formación del sentido Ético y social ");
                            artyom.say("c. La comprensión del sentido de empresa");
                            artyom.say("d. La búsqueda incansable del Éxito");
                            artyom.say("Su respuesta es:");
                            div6 += '<div style="border: 4px solid black;padding:1.5em;width: 91.2%;margin-left: 2em;" class="pregunta1">';
                            div6 += 'COMPETENCIAS ESPÍRITU DE LA UNIVERSIDAD<br>';
                            div6 += '<strong>Pregunta 6</strong><br>';
                            div6 += 'La Universidad es una institución educativa de nivel superior que se responsabiliza de formar \n\
                                        Íntegramente a los educandos, principalmente. Dicha integridad compete abordar varios aspectos \n\
                                        intrínsecos al ser humano, siendo relevante para el desempeño adecuado de la profesión: <br>';
                            div6 += '<strong>a.</strong> El desarrollo de las relaciones humanas <br>';
                            div6 += '<strong>b.</strong> La formación del sentido Ético y social <br>';
                            div6 += '<strong>c.</strong> La comprensión del sentido de empresa <br>';
                            div6 += '<strong>d.</strong> La búsqueda incansable del Éxito <br>';
                            div6 += 'Su respuesta escogida: <strong><p id="res6"></p></strong><div id="imgs"></div>';
                            div6 += '</div>';
                            $("#preguntas6").append(div6);
                        };
                        artyom.addCommands([{
                            indexes:[" a ", " b", "c", "d", "Repetir 6"],
                            action: function(i){
                                if (i == 0) {
                                    var gAux = "item a";
                                    $("#res6").text(gAux);
                                    artyom.say("Para calificar su examen diga terminar");
                                    $(".pregunta6").fadeIn("slow");
                                }else if (i == 1) {
                                    var gAux = "item b";
                                    $("#res6").text(gAux);
                                    artyom.say("Para calificar su examen diga terminar");
                                    $(".pregunta6").fadeIn("slow");
                                }else if (i == 2) {
                                    var gAux = "item c";
                                    $("#res6").text(gAux);
                                    artyom.say("Para calificar su examen diga terminar");
                                    $(".pregunta6").fadeIn("slow");
                                } else if (i == 3) {
                                    var gAux = "item d";
                                    $("#res6").text(gAux);
                                    artyom.say("Para calificar su examen diga terminar");
                                    $(".pregunta6").fadeIn("slow");
                                }else if (i == 4) {
                                    artyom.say("Pregunta 6");
                                    artyom.say("La Universidad es una institución educativa de nivel superior que se responsabiliza de formar \n\
                                                Íntegramente a los educandos, principalmente. Dicha integridad compete abordar varios aspectos \n\
                                                intrínsecos al ser humano, siendo relevante para el desempeño adecuado de la profesión: ");
                                    artyom.say("a. El desarrollo de las relaciones humanas ");
                                    artyom.say("b. La formación del sentido Ético y social ");
                                    artyom.say("c. La comprensión del sentido de empresa");
                                    artyom.say("d. La búsqueda incansable del Éxito");
                                    artyom.say("Su respuesta es:");
                                };
                            }
                        }]);
                    }
                },
                {
                    indexes:["terminar", "t"],
                    action: function(i){
                        if (i == 0) {
                            if((document.getElementById("res").value = document.getElementById("res").innerHTML == "Recreación") ){
                                contador = contador +1;
                                $("#respuesta").text(contador);
                                $("#imgs").append(imgBien);
                            }else{
                                $("#imgs").append(imgMal);
                            }
                            if((document.getElementById("res2").value = document.getElementById("res2").innerHTML == "Cuando más creces tus ideales son menores")){
                                contador = contador +1;
                                $("#respuesta").append(contador);
                                $("#imgs").append(imgBien);
                            }else{
                                $("#imgs").append(imgMal);
                            }
                            if((document.getElementById("res3").value = document.getElementById("res3").innerHTML == "tres horas")){
                                contador = contador +1;
                                $("#respuesta").text(contador);
                                $("#imgs").append(imgBien);
                            }else{
                                $("#imgs").append(imgMal);
                            }
                            if((document.getElementById("res4").value = document.getElementById("res4").innerHTML == "2°")){
                                contador = contador +1;
                                $("#respuesta").text(contador);
                                $("#imgs").append(imgBien);
                            }else{
                                $("#imgs").append(imgMal);
                            }
                            if((document.getElementById("res5").value = document.getElementById("res5").innerHTML == "El trabajo en equipo")){
                                contador = contador +1;
                                $("#respuesta").text(contador);
                                $("#imgs").append(imgBien);
                            }else{
                                $("#imgs").append(imgMal);
                            }
                            if(((document.getElementById("res6").value = document.getElementById("res6").innerHTML) == "item b")){
                                contador = contador +1;
                                $("#respuesta").text(contador);
                                $("#imgs").append(imgBien);
                            }else{
                                $("#imgs").append(imgMal);
                            }
                            $("#respuesta").append(contador);
                            artyom.say("examen terminado");
                            if(contador <= 4 ){
                                artyom.say("Su resultado final es de "+contador+" sobre 6");
                                artyom.say("Lo sentimos, usted no aprobado el examen");
                            }else if(contador >= 5){
                                artyom.say("Su resultado final es de "+contador+" sobre 6");
                                artyom.say("En Buena hora, usted aprobado el examen");
                            }

                        };
                    }
                }]);
            }
        }
    }]);
});
