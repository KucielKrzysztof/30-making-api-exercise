import express from "express";
import bodyParser from "body-parser";
import jokes from "./models/jokes.js";

const app = express();
const port = 3000;
const masterKey = "4VGP2DN-6EWM4SJ-N6FGRHV-Z3PR3TT";
//body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

//1. GET a random joke
app.get("/random", (req, res) => {
	/* 	const randomJoke = jokes[99]; */
	try {
		const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
		console.log(randomJoke);
		/* console.log(typeof randomJoke); */
		res.json(randomJoke);
	} catch (error) {
		console.error(error.message);
		res.status(404);
	}
});
//2. GET a specific joke
app.get("/jokes/:id", (req, res) => {
	try {
		const id = req.params.id - 1;
		if (jokes[id]) {
			const specificJoke = jokes[id];
			console.log(specificJoke);
			res.json(specificJoke);
		} else {
			res.status(404).json("Wrong id");
		}
	} catch (error) {
		console.error(error.message);
		res.status(404).send("Something went wrong");
	}
});
//3. GET a jokes by filtering on the joke type
app.get("/jokes", (req, res) => {
	try {
		const type = req.query.type;
		console.log(req.query.type);
		const filtered = jokes.filter((j) => j.jokeType === type);
		if (filtered.length > 0) {
			res.json(filtered);
		} else {
			res.status(404).json("No jokes with this type");
		}
	} catch (error) {
		console.error(error.message);
		res.status(404).send("Something went wrong");
	}
});
//4. POST a new joke
app.post("/submit", (req, res) => {
	try {
		const id = jokes.length + 1;
		const type = req.body.type;
		const joke = req.body.text;
		const newJoke = {
			id: id,
			jokeType: type,
			jokeText: joke,
		};
		jokes.push(newJoke);
		console.log(`${id} - ${type} - ${joke}`);
		console.log(jokes.slice(-1));
		res.json(newJoke);
	} catch (error) {
		console.error(error.message);
		res.status(404).send("Something went wrong");
	}
});
//5. PUT a joke
app.put("/replace/:id", (req, res) => {
	try {
		const id = parseInt(req.params.id); //must be int
		const type = req.body.type;
		const joke = req.body.text;
		const replaceJoke = {
			id: id,
			jokeType: type,
			jokeText: joke,
		};
		const indexOfJoke = jokes.findIndex((i) => i.id === id);
		if (indexOfJoke != -1) {
			jokes[indexOfJoke] = replaceJoke;
			res.json(replaceJoke);
		} else {
			res.status(404).json("No joke with given id");
		}
		/* console.log(indexOfJoke); */
		/* console.log(typeof id); */

		/* console.log(`${id} - ${type} - ${joke}`); */
	} catch (error) {
		console.error(error.message);
		res.status(404).send("Something went wrong");
	}
});
//6. PATCH a joke

//7. DELETE Specific joke

//8. DELETE All jokes

app.listen(port, () => {
	console.log(`Successfully started server on port ${port}.`);
});
