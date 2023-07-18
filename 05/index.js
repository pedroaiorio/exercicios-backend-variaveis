function distanciaEntrePontos(x1, y1, x2, y2) {

    const p1 = (x2 - x1) ** 2 + (y2 - y1) ** 2
    const d = Math.sqrt(p1, 2)

    return d

}


console.log(distanciaEntrePontos(1, 1, 1, 4))