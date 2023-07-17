
function jurosCompostos(capital, porcentagem, tempo) {

    const montante = capital * (1 + (porcentagem / 100)) ** tempo

    return montante
}

console.log(jurosCompostos(1000, 12.5, 5))



//M = C * (1 + i) ** t