function getHitProbability(R, C, G) {
    let sumBoats = 0;
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (G[i][j] == 1) {
                sumBoats++;
            }
        }
    }
    return (sumBoats / (R * C)).toFixed(8)
}

arr = [
    [0, 0, 1],
    [1, 0, 1]
]
console.log(getHitProbability(2, 3, arr))