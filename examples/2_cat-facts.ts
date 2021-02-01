// Generate a random cat fact!
import { CatFact } from "./models/cat-fact.ts"

// const catsEndpoint = `${Deno.env.get("CATS_API_HOST")}/facts`

await fetch("https://cat-fact.herokuapp.com/facts")
.then(data => data.json())
.then((result: CatFact[]) => {
	if (result?.length) {
		const randomIndex: number = Math.floor(Math.random() * result.length)
		console.log(" ")
		console.log(`🐈 🐈 🐈 ${result[randomIndex].text} 🐈 🐈 🐈`)
		console.log(" ")
	}
})
