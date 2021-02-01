import { pathToFile } from './3_write-file.ts'

Deno.readTextFile(pathToFile).then(data => {
    console.log(" ")
    console.log(`🥠 🥠 🥠 ${data} 🥠 🥠 🥠`)
    console.log(" ")
});