export const rangeByNumAndStep = (num, step = 1) => {
    return [...Array(num).keys()].map(x => x + step)
}