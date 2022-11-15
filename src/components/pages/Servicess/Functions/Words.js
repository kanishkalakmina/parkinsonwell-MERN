var words = [
    "tea",
    "coffie",
    "home",
    "Person",
    "animal"
]

function randomWords()
{
    return words[Math.floor(Math.random() * words.length)]
}
export {randomWords}