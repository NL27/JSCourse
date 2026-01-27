// Random User API - People Iterator
const API_URL = 'https://randomuser.me/api/?results=10';

const container = document.querySelector('.container');
const img = document.querySelector('.avatar');
const nextBtn = document.querySelector('#next');

// UI Elements
const ui = {
    name: document.querySelector('.name'),
    location: document.querySelector('.location'),
    genderBadge: document.querySelector('.gender-badge'),
    age: document.querySelector('.age'),
    nationality: document.querySelector('.nationality-flag'),
    memberYears: document.querySelector('.member-years'),
    email: document.querySelector('.email'),
    city: document.querySelector('.city'),
    state: document.querySelector('.state'),
    country: document.querySelector('.country'),
    postcode: document.querySelector('.postcode'),
    current: document.querySelector('#current'),
    total: document.querySelector('#total')
};

let people = [];
let iterator;
let currentIndex = 0;

// Country code to flag emoji
function getFlagEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

// Fetch people from the API
async function fetchPeople() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        people = data.results.map(person => ({
            // Basic info
            imageURL: person.picture.large,
            name: `${person.name.title} ${person.name.first} ${person.name.last}`,
            gender: person.gender,
            age: person.dob.age,
            nationality: person.nat,
            
            // Contact
            email: person.email,
            
            // Location
            city: person.location.city,
            state: person.location.state,
            country: person.location.country,
            postcode: person.location.postcode,
            
            // Account
            memberYears: person.registered.age
        }));
        
        ui.total.textContent = people.length;
        return people;
    } catch (error) {
        console.error('Error fetching people:', error);
        return [];
    }
}

// Generator function to create an infinite iterator
function* createPeopleIterator() {
    let index = 0;
    while (true) {
        currentIndex = index % people.length;
        yield people[currentIndex];
        index++;
    }
}

// Update the UI with person data
function displayPerson(person) {
    if (!person) return;
    
    // Header
    img.src = person.imageURL;
    img.alt = person.name;
    ui.name.textContent = person.name;
    ui.location.textContent = `${person.city}, ${person.country}`;
    ui.genderBadge.textContent = person.gender;
    ui.genderBadge.className = `gender-badge ${person.gender}`;
    
    // Stats
    ui.age.textContent = person.age;
    ui.nationality.textContent = getFlagEmoji(person.nationality);
    ui.memberYears.textContent = `${person.memberYears}yr`;
    
    // Contact
    ui.email.textContent = person.email;
    
    // Address
    ui.city.textContent = person.city;
    ui.state.textContent = person.state;
    ui.country.textContent = person.country;
    ui.postcode.textContent = person.postcode;
    
    // Counter
    ui.current.textContent = currentIndex + 1;
}

// Handle next button click
function handleNext() {
    const person = iterator.next().value;
    displayPerson(person);
}

// Initialize the app
async function init() {
    nextBtn.disabled = true;
    container.classList.add('loading');
    
    await fetchPeople();
    iterator = createPeopleIterator();
    
    container.classList.remove('loading');
    nextBtn.disabled = false;
    
    // Show first person
    handleNext();
}

// Event listener
nextBtn.addEventListener('click', handleNext);

// Start the app
init();
