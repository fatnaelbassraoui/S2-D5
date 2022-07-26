/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/*La parola chiave function va posta all’inizio; viene seguita dal nome della funzione, 
poi c’è una lista di parametri, racchiusi tra parentesi (separati da virgola, 
in questo esempio la lista è vuota, vedremo un esempio più avanti) e infine il codice 
della funzione, chiamato anche “corpo della funzione”, racchiuso tra parentesi graffe.

function name(parameter1, parameter2, ... parameterN) {
  ...body... => “corpo della funzione”
}

- Esempio: La chiamata showMessage() esegue il codice dentro la funzione

function showMessage() {
  alert( 'Hello everyone!' );
}

showMessage();

Variabili locali
Una variabile dichiarata all’interno di una funzione è visibile solamente all’interno di quella funzione.

Ad esempio:

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // variabile locale

  console.log( message );
}

showMessage(); // Hello, I'm JavaScript!

console.log( message ); // <-- Errore! La variabile è locale alla funzione

let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) cambiata la variabile esterna

  let message = 'Hello, ' + userName;
  console.log(message);
}

console.log( userName ); // John prima della chiamata di funzione

console.log.apply(showMessage());

//console.log( userName ); => Bob, il valore è stato modificato dalla funzione

a variabile esterna viene utilizzata solo se non ce n’è una locale.

Se una variabile con lo stesso nome viene dichiarata all’interno di una funzione, questa oscurerà quella esterna. Ad esempio, nel codice sotto la funzione usa la variabile locale userName. Quella esterna viene ignorata:

let userName = 'John';

function showMessage() {
  let userName = "Bob"; // dichiara una variabile locale

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// la funzione creerà è utilizzerà un suo 'personale' userName
showMessage();

alert( userName ); // John, intoccato, la funzione non può accedere alla variabile esterna

NB:
Variabili globali
Le variabili dichiarate all’esterno di qualsiasi funzione, come userName nel codice sopra,
 vengono chiamate globali.
Le variabili globali sono visibili a qualsiasi funzione (se non sono oscurate da quelle locali).

Solitamente, una funzione dichiara internamente tutte le variabili necessarie per svolgere 
il suo compito. Le variabili locali vengono utilizzate per memorizzare dati relativi alla 
funzione stessa, quando è importante che queste non siano accessibili in qualsiasi punto 
del codice. I codici moderni cercano di evitare le variabili globali, sebbene qualche 
volta possano essere utili per dati
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) 
 e calcola l'area del rettangolo associato.
 
*/


/* SCRIVI QUI LA TUA RISPOSTA 
function area(l1,l2){
    let total = l1*l2
    return total;
        
}

let a = 30
let b = 30
console.log(area(a,b)) */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo 
 stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

function  crazySum (x,y){
    let sum = x+y;
    if (x==y){
        let mult= sum*3
        return mult;
    
    }else {
        console.log(x+y);
    }
    
}

let a = 5;
let b = 7;

    console.log(crazySum(a,b));*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta 
 tra un numero fornito e 19. Se il valore calcolato è più grande di 19, 
 la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

function  crazyDiff (x,y){
    let diff = x-y;
    if (diff>y){
        let tot= diff*3
        return tot;
    }else {
        console.log(x-y);
    }
    
}

let a = 180;
let b = 19;

    console.log(crazyDiff(a,b))*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro 
 e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) 
 o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

function boundary( x){
    let check = x;
    if( check >=20 && check<=100 || check==400){
        return true;
    }else{
        return false;
    }

}

let a = 2;
console.log(boundary(a));*/


/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita 
 e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" 
 allora deve ritornarla senza modifiche.*/

 /* SCRIVI QUI LA TUA RISPOSTA 

 function codify(strin){
    let code =  strin  ;
    if (strin.includes("code")){
        return code;
    }else {
        return "code" + code;
    }  
}

let a = "Hello enter your";
console.log(codify(a))*/

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo 
 come parametro. La funzione deve controllare che tale parametro sia un multiplo 
 di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA 

 

    function check3and7(num){
        let check = num % 3 == 0 || num % 7 == 0 ? true : false;
        return check;

    }
    let a = 89;
    console.log(check3and7(a)) */

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa 
 come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
    function reverseString(str){
        let strSplit = str.split("");//split(): esso ha il compito di suddividere una stringa, o per meglio dire un oggetto String, in un array di stringhe formato da sotto-stringhe della stringa sorgente;
        let arrRev = strSplit.reverse(); //Ora che abbiamo creato l'array passiamo al metodo reverse() che si occuperà di invertirne l'ordine degli elementi:
        return arrRev.join("");//Passiamo infine a join() che ci permetterà di generare una stringa a partire dall'attuale disposizione degli elementi dell'array; stringa che utilizzeremo come valore di ritorno della nostra funzione.
    }
*/
/*  //Posso scrvere il codice n modo piu sintetico
    function reverseString(str) {
        return str.split("").reverse().join("");
      }
    let a = "ciao sono una stringa";
    console.log(reverseString(a));*/



/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro
  e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

function upperFirst(string) { 
    string = charAt(0).toUpperCase(); 
    str = string
    return str;
} 

let str = " ciao sono una stringa";
console.log(upperFirst(str))*/

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro 
 e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA*/ 
function cutString(str){
    let newStr= str.slice(1,-1); ;
    return newStr;
}
let strin = "ciao faty";
console.log(cutString(strin));


/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro 
 un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom (n){
    let arr=[]
    for (i=0; i<n;i++){
        
        arr.push(Math.floor(Math.random()*11));
        
    }
   return arr;
}

console.log(giveMeRandom(10));


