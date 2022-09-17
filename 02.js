function classificaTriangulo (lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3){
        return'Equilatero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        return 'Isosceles'
    } else{
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2))

