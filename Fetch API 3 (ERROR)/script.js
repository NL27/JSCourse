// fetch('http://httpstat.us/200')
//     .then((response) => {
//         return response;
//     })
//     .then(() => {
//         console.log('success');
//     })

// // will still run the success but not the catch unless it's a newtwork error 
// fetch('http://httpstat.us/404')
//     .then((response) => {
//         return response;
//     })
//     .then(() => {
//         console.log('success');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // catch will run on a network error
// fetch('http://hello123.net')
//     .then((response) => {
//         return response;
//     })
//     .then(() => {
//         console.log('success');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // test with response.ok
// fetch('http://httpstat.us/404')
//     .then((response) => {
//         // console.log(response.ok); // one way to test it
//         // console.log(response.statusText); // another way to test it

//         if (!response.ok) {
//             throw new Error(`request failed ${response.statusText}`);
//         }
//         return response;
//     }) 
//     .then(() => {
//         console.log('success');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// //  check for specific code
// fetch('http://httpstat.us/404')
//     .then((response) => {
//         // console.log(response.ok); // one way to test it
//         // console.log(response.statusText); // another way to test it

//         if (response.status === 404) {
//             throw new Error(`Not Found ${response.statusText}`);
//         } else if (response.status === 500) {
//             throw new Error(`Server Error ${response.statusText}`);
//         } else if (response.status !== 200) {
//             throw new Error(`Request Failed ${response.statusText}`);
//         }
//         return response;
//     }) 
//     .then(() => {
//         console.log('success');
//     })
//     .catch((err) => {
//         console.log(err);
//     });