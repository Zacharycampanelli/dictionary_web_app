export const capitalize = (word) => {
    const words = word.split(' ')
    let capitalWord = ''
    words.forEach(item => {
        item = item[0].toUpperCase() + item.slice(1) + ' '
        capitalWord += item
    });
    return capitalWord
}