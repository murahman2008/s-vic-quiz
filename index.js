const { getFriendlyCatBreeds } = require('./helper_functions');
const express = require('express');
const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    res.send(`hello world...`);
});

app.get('/friendly-breeds', async (req, res) => {
    try
    {
    	let friendlyCatBreeds = await getFriendlyCatBreeds();
    	console.log(JSON.stringify(friendlyCatBreeds));
    	res.send(friendlyCatBreeds);
    }
    catch(err)
    {
	res.status(400).send('an error has occured');
    }
});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}...`);
});
