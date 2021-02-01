const directory = 'output'
const filename = 'fortune-cookie.txt'
export const pathToFile = `./${directory}/${filename}`

const myFortune = "Konfuzius says: He who tests his code will not be afraid of it."

Deno.writeTextFile(pathToFile, myFortune);