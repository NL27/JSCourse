function fetchUser() {
    fetch('https://randomuser.me/api/')
        .then((res) => res.json())
        .then((data) => {
            displayUser(data.results[0]);
        });
}

function displayUser(user) {
    const userDisplay = document.querySelector('#user');

    if (user.gender === 'female') {
        document.body.style.backgroundColor = 'red';
    } else {
        document.body.style.backgroundColor = 'blue';
    }


    userDisplay.innerHTML = `
    <div> 
        <img src="${user.picture.large}"/>
        <p> ${user.name.first} ${user.name.last} </p>
        <p> ${user.email} ${user.phone} </p>
        <p> ${user.location.city} </p>
        <p> ${user.dob.age} </p>
    </div>
    `;
}

document.querySelector('#generate').addEventListener('click', fetchUser);

fetchUser();