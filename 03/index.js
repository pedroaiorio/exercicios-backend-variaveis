function descontoNecessario(valorTenis, valorSobrou) {

    let diferenca = valorTenis - valorSobrou
    let desconto = diferenca / valorTenis * 100

    return desconto

}



console.log(descontoNecessario(110, 50))


