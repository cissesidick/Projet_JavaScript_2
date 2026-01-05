// ==============================================
// FONCTIONS DE MANIPULATION DE CHAÎNES
// ==============================================

// 1️⃣ Inverser une chaîne de caractères
function reverseString(str) {
    return str.split("").reverse().join("");
}

// 2️⃣ Compter le nombre de caractères dans une chaîne
function countCharacters(str) {
    return str.length;
}

// 3️⃣ Mettre en majuscule la première lettre de chaque mot
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// ==============================================
// FONCTIONS DE TABLEAU
// ==============================================

// 4️⃣ Trouver le maximum dans un tableau
function findMax(arr) {
    return Math.max(...arr);
}

// 5️⃣ Trouver le minimum dans un tableau
function findMin(arr) {
    return Math.min(...arr);
}

// 6️⃣ Somme de tous les éléments d'un tableau
function sumArray(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}

// 7️⃣ Filtrer un tableau selon une condition
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// ==============================================
// FONCTIONS MATHÉMATIQUES
// ==============================================

// 8️⃣ Calcul de la factorielle d'un nombre
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// 9️⃣ Vérification si un nombre est premier
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// 🔟 Générer la suite de Fibonacci jusqu'à n termes
function fibonacci(n) {
    let sequence = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        [a, b] = [b, a + b];
    }
    return sequence;
}

// ==============================================
// EXEMPLES DE TEST
// ==============================================

console.log("=== TEST CHAÎNES ===");
console.log(reverseString("bonjour"));                // "ruojnob"
console.log(countCharacters("bonjour"));              // 7
console.log(capitalizeWords("bonjour tout le monde")); // "Bonjour Tout Le Monde"

console.log("=== TEST TABLEAUX ===");
console.log(findMax([3, 7, 1]));                      // 7
console.log(findMin([3, 7, 1]));                      // 1
console.log(sumArray([1, 2, 3, 4]));                  // 10
console.log(filterArray([1, 2, 3, 4, 5], num => num > 2)); // [3,4,5]

console.log("=== TEST MATHÉMATIQUES ===");
console.log(factorial(5));                            // 120
console.log(isPrime(11));                             // true
console.log(isPrime(12));                             // false
console.log(fibonacci(7));                            // [0,1,1,2,3,5,8]
