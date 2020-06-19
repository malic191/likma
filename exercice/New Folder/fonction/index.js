// JS1.4 - Liste de Courses
// Enoncé

// Gérer une liste de courses en affichant les informations dans la console du navigateur web.


//La liste de courses est stockée dans une seule variable.
let listeDeCourses = ['sopalin', 'oranges', 'citrons', 'savon', 'eau de javel', 'du virus en promo'];

let listeDeCoursesCopie = ['copie', 'citrons', 'savon', 'eau de javel', 'du virus en promo'];



// Afficher la taille
function afficheTailleDeLaListe(liste) {
    return liste.length;
}

    
// et le contenu de la liste

function afficheLesProduitsDeLaListe(liste) {
    document.write('<ul>');

    for(let produit of liste) {
        document.write(`<li>${produit}</li>`);
    }
    
    document.write('</ul>');
}


document.write(`Nombre d'articles dans le panier: ${afficheTailleDeLaListe(listeDeCourses)}`);
afficheLesProduitsDeLaListe(listeDeCourses);


document.write(`Nombre d'articles dans le panier: ${afficheTailleDeLaListe(listeDeCoursesCopie)}`);
afficheLesProduitsDeLaListe(listeDeCoursesCopie);




 



//         Supprimer un produit ayant un nom spécifique
// splice() class Array.


//         Supprimer tous les produits
function supprimerProduitsDeListe(liste) {
    liste.length = 0;    
}

supprimerProduitsDeListe(listeDeCourses);



//     Le code ne doit pas se répéter, il faut donc organiser le programme en fonctions.

//     Les fonctionnalités de gestion de la liste de courses sont :





//     Créer des noms de fonctions clairs, en rapport avec la fonctionnalité implémentée

//Les tableaux sont des objets de la classe Array, s'appuyer sur des méthodes de cette classe pour implémenter les fonctionnalités

//Pour vérifier le bon fonctionnement du programme il faut écrire du code de test, par exemple :
//         Ajouter 4 produits simples puis afficher les informations
//         Demander à l'utilisateur de saisir le nom d'un produit, essayer de supprimer celui-ci puis afficher les informations
//         Supprimer tous les produits puis afficher les informations

