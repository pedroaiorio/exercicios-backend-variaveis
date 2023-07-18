function velocidade(distancia, tempo) {
    const x = distancia / tempo
    const y = x * 3.6

    return y
}

console.log(velocidade(500, 10) + "km/h")