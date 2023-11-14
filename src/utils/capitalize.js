export const capitalize = (word) => {
    const words = word.split(' ')
    let capitalWord = ''
    console.log(words[0])
    words.forEach(item => {
        item = item[0].toUpperCase() + item.slice(1) + ' '
        capitalWord += item
    });
    console.log(capitalWord)
    return capitalWord
}