const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const filterInput = document.getElementById('filter');
const clearAllBtn = document.getElementById('clear-all');
const filterContainer = document.getElementById('filter-container');
const clearAllContainer = document.getElementById('clear-all-container');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;


function displayItems() {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach(item => addItemToDOM(item));
    toggleFilterAndClearAll();
}

// Add item to list
function onAddItemSubmit(e) {
    e.preventDefault();

    const newItem = itemInput.value.trim();

    // Validate input - show alert if empty
    if (newItem === '') {
        alert('Please input a task name');
        return;
    }

    // check for edit mode
    if (isEditMode) {
        const itemToEdit = itemList.querySelector('.edit-mode');

        if (itemToEdit) {
            // Get only the text content from the first child (text node), excluding the button
            removeItemFromStorage(itemToEdit.firstChild.textContent);
            itemToEdit.classList.remove('edit-mode');
            itemToEdit.remove();
            isEditMode = false;
        }
    } else {
        if (checkIfItemExists(newItem)) {
            alert('' + newItem + ' already exists in your list');
            return;
        }
    }

    // create item DOM element
    addItemToDOM(newItem);

    // add item to local storage
    addItemToStorage(newItem); 

    // Clear input
    itemInput.value = '';
    
    // Show filter and clear all if there are tasks
    toggleFilterAndClearAll();
}

function addItemToDOM(item) {
     // Create list item
     const li = document.createElement('li');
     li.appendChild(document.createTextNode(item));
     
     // Create delete button (X)
     const button = document.createElement('button');
     button.className = 'remove-item text-red';
     button.textContent = 'X';
    //  button.addEventListener('click', removeItem);
     
     li.appendChild(button);
     itemList.appendChild(li);
}

function addItemToStorage(item) {
    const itemsFromStorage = getItemsFromStorage();

    // add new item to array
    itemsFromStorage.push(item);

    // Convert to JSON string and set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
    let itemsFromStorage;

    if (localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    return itemsFromStorage;
}

function onClickItem(e) {
    if (e.target.classList.contains('remove-item')) {
        removeItem(e.target.parentElement);
    } else {
        // Get the li element (either e.target if it's the li, or parentElement if it's the text node)
        const li = e.target.tagName === 'LI' ? e.target : e.target.parentElement;
        setItemToEdit(li);
    }
}

function checkIfItemExists(item) {
    const itemsFromStorage = getItemsFromStorage();

    return itemsFromStorage.includes(item);
}

function setItemToEdit(item) {
    isEditMode = true;

    itemList.querySelectorAll('li').forEach(li => li.classList.remove('edit-mode'));
    item.classList.add('edit-mode');
    item.style.color = '#ccc';
    formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
    formBtn.style.backgroundColor = '#228B22';
    // Get only the text content from the first child (text node), excluding the button
    itemInput.value = item.firstChild.textContent;
}

// Remove individual item
function removeItem(item) {
    if (confirm('Are you sure you want to delete this item?')) {
        // Remove item from DOM
        // Get only the text content from the first child (text node), excluding the button
        const itemText = item.firstChild.textContent;
        item.remove();

        // remove item from Storage
        removeItemFromStorage(itemText);
    
        toggleFilterAndClearAll();
    }
}

function removeItemFromStorage(item) {
    let itemsFromStorage = getItemsFromStorage();

    // filter out item to be removed
    itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

    // re-set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));

}

// Clear all items
function clearAll() {
    itemList.innerHTML = '';

    localStorage.removeItem('items');
    
    // Hide filter and clear all when list is empty
    toggleFilterAndClearAll();
    
    // Clear filter input
    filterInput.value = '';
}

// Filter/search tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    // const items = itemList.getElementsByTagName('li');
    const items2 = itemList.querySelectorAll('li');
    
    items2.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();
        if (itemName.indexOf(text) !== -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });

    // Array.from(items).forEach(item => {
    //     const itemName = item.firstChild.textContent.toLowerCase();
    //     if (itemName.indexOf(text) !== -1) {
    //         item.style.display = 'flex';
    //     } else {
    //         item.style.display = 'none';
    //     }
    // });
}

// Toggle visibility of filter and clear all based on task count
function toggleFilterAndClearAll() {
    itemInput.value = '';

    const taskCount = itemList.children.length;
    if (taskCount > 0) {
        filterContainer.style.display = 'block';
        clearAllContainer.style.display = 'block';
    } else {
        filterContainer.style.display = 'none';
        clearAllContainer.style.display = 'none';
    }

    formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Task';
    formBtn.style.backgroundColor = '#333';
    isEditMode = false;
}

// initialize app
function init() {
    // Event listeners
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', onClickItem);
    clearAllBtn.addEventListener('click', clearAll);
    filterInput.addEventListener('keyup', filterTasks);
    document.addEventListener('DOMContentLoaded', displayItems);
    
    toggleFilterAndClearAll(); 
}

init();