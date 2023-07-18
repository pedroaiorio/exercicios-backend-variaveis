

function pessoasInfectadas(po, x, t) {
    const p = po * (x ** (t / 7))
    return p
}


console.log(pessoasInfectadas(1000, 4, 7))