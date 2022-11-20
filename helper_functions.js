const { __GET, __POST, __PUT, __DELETE } = require('./generic_rest_functions');
const API_URL = `https://api.thecatapi.com/v1`;
const API_AUTH_KEY = ``

async function getFriendlyCatBreeds() {
    try
    {
    	console.log(`getting all the friendly cat breeds`);
    	let friendlyBreeds = await  __GET(
            API_URL + `/breeds`,
            {},
            { "Content-Type": "application/json" }
        );

        if(friendlyBreeds)
        {
            let allBreedArray = friendlyBreeds.map(catBreed => {
                catBreed.total_score = catBreed.dog_friendly + catBreed.child_friendly + catBreed.stranger_friendly;
            	return catBreed;
            });

            //console.log(allBreedArray);

            allBreedArray.sort((p1, p2) => {
            	return ((p1.total_score < p2.total_score) ? 1 : ((p1.total_score > p2.total_score) ? -1 : 0));
            });

            return allBreedArray.slice(0,5);
        }

        return false;
    }
    catch(err)
    {
	throw err;
    }
}

module.exports = {
    getFriendlyCatBreeds
};
