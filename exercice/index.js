const birthday = new Date('mardi 11, Février, 2014');
const day1 = birthday.getDay(4);
// Sunday - Saturday : 0 - 6
const tableau=['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
console.log(day1);
// expected output: 2
