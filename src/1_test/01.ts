export function splitIntoWords(sentense: string) {

    let word = sentense
        .toLowerCase()
        .split(' ')
    return word
        .filter(w => w !== '' && w !== '-')
        .map(w => w
            .replace('!', '')
            .replace('.', '')
            .replace(',', '')
        )
}


export function sum(a: number, b: number) {
    return a + b
}

export function mult(a: number, b: number) {
    return a * b
}