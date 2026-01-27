// get current position
function curSuccess(pos) {
    const coords = pos.coords;
    console.log(`Latitude is ${coords.latitude} Longitude is ${coords.longitude} Within ${coords.accuracy} meters`);
}

function curError(err) {
    console.log(`Error Code = ${err.code} - ${err.message}`);
}

const curOptions = {
    enableHighAccuracy: true, // Use GPS if available
    timeout: 5000,
    maximumAge: 0, // do not use a cached position
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);


function curSuccess(pos) {
    const coords = pos.coords;
    console.log(`Latitude is ${coords.latitude} Longitude is ${coords.longitude} Within ${coords.accuracy} meters`);
}

function curError(err) {
    console.log(`Error Code = ${err.code} - ${err.message}`);
}

const curOptions = {
    enableHighAccuracy: true, // Use GPS if available
    timeout: 5000,
    maximumAge: 0, // do not use a cached position
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// watch position

const target = {
    latitude: 40.7128,
    longitude: -74.0060,
}

function watchSuccess(pos) {
    const coords = pos.coords;

    if (coords.latitude === target.latitude && coords.longitude === target.longitude) {
        console.log('You are at the target location');
        navigator.geolocation.clearWatch(id);
    }
}

function watchError(err) {
    console.log(`Error Code = ${err.code} - ${err.message}`);
}

const watchOptions = {
    enableHighAccuracy: true, // Use GPS if available
    timeout: 5000,
    maximumAge: 0, // do not use a cached position
};

const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);