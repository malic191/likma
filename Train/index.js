// Ici on déclare une constante anniversaire , auquel on lui attribut une date 

const birthday= new Date('11 Novembre, 1993, 17:58');

//Ensuite on déclare une autre constante day1 , on crée un .getDay pour pouvoir retourner la date spécifié d'après l'heure locale

const day1= birthday.getDate();


//console.log et f12 pour vérifier le résultat


console.log(day1)


                              // Date //
                              
                              
                              
// Date est une instance qui permet de représenter un moment précis dans le temps.

// la fonction Date ne peut etre instancié seulement en utulisant l'opérateur new

// Sinon date sera une chaine de caractère et non un objet date;



//new Date(); // heure courante dans le fuseau horaire locale
//new Date(valeur); // heure basée sur l'epoch Unix
//new Date(chaîneDate);
//new Date(année, indexMois[, jour[, heures[, minutes[, secondes[, millisecondes]]]]]);



// La méthode Date.now() renvoie le nombre de millisecondes écoulées depuis le 1er Janvier 1970 00:00:00 UTC.


const start = Date.now();

console.log('starting timer...');


setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
}, 2000);







                                 // Array.lenght
                                 
                                 

//La propriété length (longueur) est un entier non-signé de 32 bits qui indique le nombre d'éléments présents dans le tableau.
//Elle est toujours supérieure au plus grand indice du tableau.


//exemple

const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length);




