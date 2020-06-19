/*JS1.2 - Chifoumi
Énoncé
L'utilisateur saisit le mot pierre, feuille ou ciseau, l'ordinateur choisit aléatoirement l'une des trois possibilités, et la partie commence !
Détails
Le mot peut tout aussi bien être saisi en minuscules qu'en majuscules.
.*/
// Creer le monde
// Je recupere les infos de l'user
//
//  L'ordi choisit son tirage
//  Faire correspondre un choix avec un nombre
// On compare les variables
// Si le joueur et l'ordinateur font le même choix on obtient une égalité.
// si(joueur === ordinateur) {
//      egalite
// }
// Le ciseau est écrasé par la pierre (la pierre gagne, le ciseau perd).
// si(joueur === ciseau et ordi === pierre) {
//      ordinateur gagne
// } sinon si(joueur === ciseau && ordinateur === feuille) {
//      joueur gagne
// }
/*La feuille est découpée par le ciseau (le ciseau gagne, la feuille perd).
si(joueur === feuille && ordinateur === ciseau)   {
    ordinateur gagne
}*/
// La pierre est enveloppée par la feuille (la feuille gagne, la pierre perd)
/*si(joueur === pierre && ordinateur === feuille) {
    oridnateur gagne
}
*/


// utulisateur choisis son mot//

let pierre = '1';

let feuille = '2';

let ciseau = '3'



let utulisateur = prompt('choisissez pierre feuille ou ciseau');

let ordinateur = Math.floor(Math.random() * 3 ) + 1;

console.log(ordinateur);

// l'ordinateur choisis aléatoirement entre pierre feuille ou ciseau//


const egalite = "égalité";

const user = "User Win !";

const poil = "Ordi Win";


//ordi win

if(utulisateur === ordinateur) {
    document.write(egalite);
} else {
    
    switch(utulisateur) {
        case 'pierre':
            
            break;
            
        case 'ciseau':
            
            break;
        case 'feuille':
            
            break;
    }

}










