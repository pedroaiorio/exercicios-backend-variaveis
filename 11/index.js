function volume(d) {
    const r = d / 2
    const v = (4 / 3) * Math.PI * (r ** 3)

    return v
}


console.log(volume(6))