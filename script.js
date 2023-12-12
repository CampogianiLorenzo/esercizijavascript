

// ESERCIZIO 1

// Scrivere un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:

// -se v e’ minore di 18,  stampare in console  “insufficiente”
// -se v e’ maggiore uguale a 18 e minore di 21,  stampare in console “sufficiente”
// -se v e’ maggiore uguale a 21 e minore di 24,  stampare in console: “buono”
// -se v e’ maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
// -se v e’ maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
// -se v e’ uguale a 30, stampare in console:  “eccellente”
// Esempio:

// let v = 29;

// Output: Ottimo

// let v = 0

// if (v < 18){
//     console.log ('insufficiente')
// } else if ( v >= 18 && v < 21){ 
//     console.log ('sufficiente')
// } else if (v >= 21 && v < 24){
//     console.log ('buono')
// } else if (v >= 24 && v< 27 ){
//     console.log ('distinto')
// }  else if (v >= 27 && v <= 29){
//     console.log ('ottimo')
// } else if (v == 30){
//     console.log ('eccellente')
// }


// let v = 25

// switch (true) {
//     case ( v < 0 ):
//         console.log('impossibile')
//         break;     
    
//     case ( v < 18 ):
//         console.log('insufficiente')
//         break;

//     case ( v >= 18 && v < 21 ):
//         console.log('sufficente')
//         break;

//     case ( v >= 21 && v < 24 ):
//         console.log('buono')
//         break;
    
//     case ( v >= 24 && v < 27 ):
//         console.log('distinto')
//         break;
 
//     case ( v >= 27 && v <= 29 ):
//         console.log('ottimo')
//         break;

//     case ( v == 30 ):
//         console.log('eccellente')
//         break;
    
//     default :
//         console.log('impossibile')
//         break;
// }

// ESERCIZIO 2

// -se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
// -se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sole, lu ientu”
// -se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
// -se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
// -se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi”

// let temp = 24
    
// if (temp < 20 && temp >= 0){
//     console.log ('non ci sono piú le mezze stagioni')
// } else if ( temp >= 30){ 
//     console.log ('lu mare, lu sole, le ientu')
// } else if (temp < 30 && temp >= 21){
//     console.log ('mi dia una peroni sudata')
// } else if (temp < 0 && temp >= -9 ){
//     console.log ("non é tanto il freddo quanto l'umiditá")
// }  else if (temp <-10 ){
//     console.log ('')
// } 


// let temp = 

// switch (true) {
//     case ( temp < -10 ):
//         console.log('ma stai a scherza')
//         break;     
    
//     case ( temp < 20 && temp >= 0 ):
//         console.log('non ci sono piú le mezze stagioni')
//         break;

//     case ( temp >= 30 ):
//         console.log('lu mare, lu sole, le ientu')
//         break;

//     case ( temp >= 21 && temp < 30 ):
//         console.log('mi dia una peroni sudata')
//         break;
    
//     case ( temp <0  && temp >= -9 ):
//         console.log("non é tanto il freddo quanto l'umiditá")
//         break;
 
//     case ( temp < -10):
//         console.log('copriti..ancora ti raffreddo')
//         break;
// }


// ESERCIZIO 3
// Scrivere un programma che simuli un distributore di bevande:

// fare in modo che l’utente possa inserire il numero corrispondente alla bevanda, mediante l’istruzione prompt:
// se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
// se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
// se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
// se inserisce qualcosa di diverso, il programma dovra’ riproporre la domanda di partenza 

// let bevanda = 0



// if (bevanda == 1) {
//     console.log("E’ stata selezionata l’acqua");  
// } else if (bevanda == 2) {
//     console.log("E’ stata selezionata coca cola");
// } else if (bevanda == 3) {
//     console.log("E’ stata selezionata birra");    
// }

// do{    
//     bevanda = prompt("scegli la bevanda")
//     if (bevanda == 1){
//     console.log("E’ stata selezionata l’acqua");
//     }else if (bevanda == 2){
//     console.log("E’ stata selezionata coca cola");
//     }else if (bevanda == 3){
//     console.log("E’ stata selezionata birra");
//     }   

// } while (bevanda < 1 || bevanda > 3){
// }

// RIFARE L'ESERCIZIO DEI DADI (cercate prima di farlo da soli)
// Scrivi un programma che, dato il numero dei tiri da effettuare per ciascun giocatore (N),
//  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti,
//  supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, ciò  significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore


// let tiri = 3

// let player1 = 0
// let player2 = 0

// for(let i = 1; i <= tiri; i++);{

//     let point1 = Math.floor(Math.random() * (6 - 1 + 1) + 1)
//     player1 = player1 + point1
// }

// for(let i = 1; i <= tiri; i++);{
//     let point2 = Math.floor(Math.random() * (6 - 1 + 1) + 1)
//     player2 = player2 + point2
// }

// if (player1 > player2){
//     console.log('player1 vince');
// } else if (player1 < player2) {
//     console.log('player2 vince');
// } else(player1 = player2); {
//     console.log("pareggio");
// }
    