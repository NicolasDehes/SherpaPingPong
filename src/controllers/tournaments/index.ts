export const nbMatches = (nbPlayer: number) => {
    return (1 << Math.ceil(Math.log2(nbPlayer))) - 1;
}

const nbRounds = (nbMatches: number) => {
    return nbMatches.toString(2).length;
}