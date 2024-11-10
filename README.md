> [!NOTE]\
> This is not a real projet, it was made only for learning purposes.

# Jokes API

The Jokes API provides access to a collection of jokes in various categories. The API offers:

- Retrieve Random Jokes
- Get Specific Jokes (by id or category)
- Add New Jokes
- Edit Jokes
- Delete Jokes

## `GET` Random Joke

Get a random joke from the Joke API\
Example request:

```js
GET http://localhost:3000/random/
```

Example response:

```json
{
	"id": 62,
	"jokeText": "Why did the tomato turn red? Because it saw the salad dressing!",
	"jokeType": "Food"
}
```

## `GET` Specific Joke

Get joke by id.\
Example request:

```js
GET  http://localhost:3000/jokes/:id
```

Path Variable:

```json
id: 1
```

Example response:

```json
{
	"id": 1,
	"jokeText": "Why don't scientists trust atoms? Because they make up     everything.",
	"jokeType": "Science"
}
```

## `GET` Filtered Joke By Type

Provide a query parameter for type and if the type exists, then you should get back all the jokes that match that type.\
Types:

```json
jokeType: "Food",
jokeType: "Math",
jokeType: "Movies",
jokeType: "Puns",
jokeType: "Science",
jokeType: "Sports",
jokeType: "Wordplay",
```

Example request:

```js
GET http://localhost:3000/jokes?type=Science
```

Path Parameters:

```json
type: "Science"
```

Example response:

```json
[
    {
        "id": 1,
        "jokeText": "Why don't scientists trust atoms? Because they make up everything.",
        "jokeType": "Science"
    },

    [...]

    {
        "id": 97,
        "jokeText": "How do you organize a space party? You planet!",
        "jokeType": "Science"
    }
]
```

## `POST` New Joke

Add your joke.\
Example request:

```js
POST http://localhost:3000/submit
```

Body:

```json
type: "Science"
text: "You can't trust atoms! They make up everything!"
```

Example response:

```json
{
	"id": 101,
	"jokeType": "Science",
	"jokeText": "You can't trust atoms! They make up everything!"
}
```

## `PUT` Replace Joke

Replace joke with given id.\
Example request:

```js
PUT localhost:3000/replace/:id
```

Path Variable:

```json
id: 1
```

Body:

```json
type: "Math"
text: "Example math joke"
```

Example request:

```json
{
	"id": 1,
	"jokeType": "Math",
	"jokeText": "Example math joke"
}
```

## `PATCH` Edit Joke

Edit joke with given id.\
Example request:

```js
PATCH localhost:3000/patch/:id
```

Path Variable:

```json
id: 1
```

Body:

```json
type: "Science"
```

Example response:

```json
{
	"id": 1,
	"jokeType": "Science",
	"jokeText": "Example math joke"
}
```

## `DELETE` Joke

Delete a joke with given id.\
Example request:

```js
DELETE localhost:3000/delete/:id
```

Path Variable:

```json
id: 1
```

Example response:

```json
{
	"message": "Joke deleted"
}
```

## `DELETE` All Jokes

Delete all jokes, secret key needed.

> [!WARNING]
> This will delete all jokes

Example request:

```js
DELETE localhost:3000/wipe?key=xxx
```

Query params:

```json
key: "xxx"
```

Example response:

```json
{
	"message": "Completely wiped"
}
```
