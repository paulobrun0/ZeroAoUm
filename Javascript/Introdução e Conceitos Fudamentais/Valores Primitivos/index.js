/**
 * String, Number, Boolean, Undefined, Null (Biint, Symbol) IMUTÁVEIS - LUGAR DIFERENTE NA MEMÓRIA
 * Array, Object, function (mutáveis / referência) // MESMO LOCAL DA MEMÓRIA
 */

let a = [1, 2, 3];
let b = [...a];

b.pop();

console.log(a, b);
