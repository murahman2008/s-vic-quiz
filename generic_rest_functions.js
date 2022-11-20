const axios = require('axios');

function __GET(url, params, header) {
    return new Promise((resolve, reject) => {
        if(params)
	    url += `?${new URLSearchParams(params).toString()}`;

	axios.get(url, { headers: header })
	    .then((res) => {
	        resolve(res.data);
	    })
	    .catch(err => {
	        console.log('API ERROR', err);
		reject(err);
	    });
    });
}

function __POST(url, params, header) {
    console.log(url);
    console.log(params);
    console.log(header);
}

function __PUT(url, params, header) {
    console.log(url);
    console.log(params);
    console.log(header);
}

function __DELETE(url, params, header) {
    console.log(url);
    console.log(params);
    console.log(header);
}

module.exports = { __GET, __POST, __PUT, __DELETE };
