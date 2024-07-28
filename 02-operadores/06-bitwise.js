// DECIMAL: 1 2 3 4 5 6 7 8 9
// Binario: 0 1

// bit: 0 || 1

// Byte: 8 bits 00000000
// Byte: 00000000 -> 0
// Byte: 00000001 -> 1
// Byte: 00000010 -> 2
// Byte: 00000011 -> 3
// Byte: 00000100 -> 4
// Byte: 00000101 -> 5
// Byte: 00000110 -> 6
// Byte: 00000111 -> 7

console.log(1 | 3); // 00000011 3

// Basicamente si en lugar de usar || uso | lo tomara como si fueran numeros binarios y creara un nuevo numero basado en estos, lo mismo para el && & 