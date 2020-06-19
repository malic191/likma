


// On veut un nombre
let number = '';

do {
     number = parseFloat(prompt('entrer un nombre'));
} while (isNaN(number) );



console.log(number);

  
document.write('<table>');
     
for (let i = 1; i <= number; i++){
    
     document.write('<tr>');
     // calcul
     for(let j = 1; j <= number; j++) {
          for(let number = i; number <= i; j++) 
          document.write('<td>');
          // si le nombre est mutliplie par lui meme
                    // on affiche un type de td
          // sinon
                    // on affiche un td normal
          document.write('<td>');
          document.write(i * j);
          document.write('</td>');
     }
  
     document.write('</tr>');
}   
     
     
document.write('</table>');                                