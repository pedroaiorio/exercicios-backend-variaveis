function taxaDeJuros(m, c, n) {

    const i = ((Math.pow(m / c, 1 / n)) - 1) * 100
    console.log(i)
}


taxaDeJuros(90_000, 60_000, 24)