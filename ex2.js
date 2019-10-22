// let user = {
//     name: 'Yann',
//     description: '',
//     budget: 6,
// }

// function toto(user){
//     if (user.budget === null){
//         return user.description = 'Tu as oublié ton porte feuille'
//     }
//     else if (user.budget >= 0 && user.budget < 5){
//         return user.description = 'Il fallait travailler cet été'
//     }
//     else if (user.budget === 5){
//         return user.description = 'Tu as le droit à une bière'
//     }
//     else {
//         return user.description = 'Tu peux payer ta journée'
//     }
// }

// toto(user)

// console.log(`Bravo, ${user.name} , ${user.description}. Voici le rappel de ton budget: ${user.budget}`)




// Exercice 3
//===============================================================================


// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] % 2 === 0){
//         console.log(`${numbers[i]} est pair`)
//     }
//     else 
//         console.log(`${numbers[i]} est impair`)
// }


// Exercice 4
//===============================================================================
// str = 'Anna'
// result =''
// function palindrome(str, result){
//     //minuscule
//     strmini = str.toLowerCase()
//     //split
//     strsplit = strmini.split("").reverse().join("")
//     //reverse
//     //join
//     // === 
//     if (strsplit === strmini){
//         return result = "c'est un palindrome"
//     }
//     else{
//         return result = "ça n'est pas un palindrom"
//     }
// }

// console.log(palindrome(str, result))



// Exercice 5
//===============================================================================

// let tabl1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let tabl2 = [2, 4, 5, 6, 9, 10]

// function compareTabl(tabl1, tabl2)
// 		{
// 			if (tabl1.length != tabl2.length) {
// 				return false;
// 			} else {
// 				for (var a = 0; a < tabl1.length; ++a) {
// 					if (tabl1[a] != tabl2[a]) {
//                         //Retourner les différences (spoil ça marche pas) 
//                         diff = tabl1.indexOf(tabl2)
// 						return false;
// 					}
// 				}
// 			}
// 			return "C'est les même tableaux";
// 		}
// console.log(compareTabl(tabl1, tabl2))


// Exercice 6
//===============================================================================
// Premiere version (qui marche pas)
//=======================
// let list = ["J'adore","le","js","c'est","vraiment","cool"]
// let sep = " "

// function concatenationTabl(list, sep){
//     for (var a = 0; a < list.length; ++a) {
//         return (sep, list[a])
//     }
// }

// console.log(concatenationTabl(list, sep))

// Deuxieme version (qui marche)
//=======================

// let list = ["J'adore","le","js","c'est","vraiment","cool"]
// let sep = " "

// function concatenationTabl(list, sep){
//     concat = list.join(sep)
//     return concat
// }
// console.log(concatenationTabl(list, sep))