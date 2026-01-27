// for a real world application you would add a backend and IP tracking and so on to prevent several votes from the same IP

const poll = new Map();
poll.set('Python', 0);
poll.set('Vue', 0);
poll.set('Go', 0);

function submitForm(e){
    e.preventDefault();
   
    const selectOption = document.querySelector("input[name='poll-select']:checked");


    if (!selectOption) {
        alert('Please select an option');
        return;
    }

    let voteCount = poll.get(selectOption.value);
    poll.set(selectOption.value, voteCount + 1);

    displayResults();

    // disable form fields after submission
    document
        .querySelector('#poll-form')
        .querySelectorAll('input, button')
        .forEach((el) => el.setAttribute('disabled', true));
}

function displayResults() {
    const results = document.getElementById('results');
    results.innerHTML = '';
    for (let [option, votes] of poll) {
        const optionElement = document.createElement('div');
        optionElement.classList.add('border-bottom','p-2', 'd-flex', 'justify-content-between', 'align-items-center');
        optionElement.innerHTML = `<strong>${option}: </strong> <span class="badge bg-primary rounded-pill">${votes}</span>`;
        results.appendChild(optionElement);
    }
}

document.getElementById('poll-form').addEventListener('submit', submitForm);

