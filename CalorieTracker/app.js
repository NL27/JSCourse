class CalorieTracker {
    constructor() {
        this._calorieLimit = Storage.getCalorieLimit();
        this._totalCalories = Storage.getTotalCalories(0);
        this._meals = Storage.getMeals();
        this._workouts = Storage.getWorkouts();

        this._displayCaloriesLimit();
        this._displayCaloriesTotal();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displayCaloriesProgress();
    }


    // public methods/API 

    addMeal(meal) {
        this._meals.push(meal);
        this._totalCalories += meal.calories;
        Storage.updateTotalCalories(this._totalCalories);
        Storage.saveMeal(meal);
        this._render();
    }

    addWorkout(workout) {
        this._workouts.push(workout);
        this._totalCalories -= workout.calories;
        Storage.updateTotalCalories(this._totalCalories);
        Storage.saveWorkout(workout);
        this._render();
    }

    removeMeal(id) {
        const index = this._meals.findIndex(meal => meal.id === id);
        if (index !== -1) {
            const meal = this._meals[index];
            this._totalCalories -= meal.calories;
            Storage.updateTotalCalories(this._totalCalories);
            Storage.removeMeal(id);
            this._meals.splice(index, 1);
            this._render();
        }
    }

    removeWorkout(id) {
        const index = this._workouts.findIndex(workout => workout.id === id);
        if (index !== -1) {
            const workout = this._workouts[index];
            this._totalCalories += workout.calories;
            Storage.updateTotalCalories(this._totalCalories);
            Storage.removeWorkout(id);
            this._workouts.splice(index, 1);
            this._render();
        }
    }

    reset() {
        this._totalCalories = 0;
        this._meals = [];
        this._workouts = [];
        Storage.clearAll();
        this._render();
    }

    setLimit(limit) {
        this._calorieLimit = limit;
        Storage.setCalorieLimit(limit);
        this._displayCaloriesLimit();
        this._displayCaloriesRemaining();
        this._displayCaloriesProgress();
    }

    get meals() {
        return this._meals;
    }

    get workouts() {
        return this._workouts;
    }

    // Private Methods

    _displayCaloriesTotal(){
        const totalCaloriesEl = document.getElementById('total-calories');
        totalCaloriesEl.innerHTML = this._totalCalories;
    }

    _displayCaloriesLimit(){
        const calorieLimitEl = document.getElementById('calories-limit');
        calorieLimitEl.innerHTML = this._calorieLimit;
        document.getElementById('limit-input').value = this._calorieLimit;
    }

    _displayCaloriesConsumed(){
        const caloriesConsumedEl = document.getElementById('calories-consumed');

        const consumed = this._meals.reduce((total, meal) => total + meal.calories, 0);
        caloriesConsumedEl.innerHTML = consumed;
    }

    _displayCaloriesBurned(){
        const caloriesBurnedEl = document.getElementById('calories-burned');

        const burned = this._workouts.reduce((total, workout) => total + workout.calories, 0);
        caloriesBurnedEl.innerHTML = burned;
    }

    _displayCaloriesRemaining(){
        const caloriesRemainingEl = document.getElementById('calories-remaining');

        const remaining = this._calorieLimit - this._totalCalories;
        caloriesRemainingEl.innerHTML = remaining;
    }

    _displayCaloriesProgress(){
        const caloriesProgressEl = document.getElementById('calories-progress');
        const percentage = this._totalCalories / this._calorieLimit * 100;
        const width = Math.min(percentage, 100);
        caloriesProgressEl.style.width = `${width}%`;
    }

    _render(){
        this._displayCaloriesTotal();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displayCaloriesProgress();
    }
}

class Meal {
    constructor(name, calories) {
        this.id = Math.random().toString(16).substring(2);
        this.name = name;
        this.calories = calories;
    }
}

class Workout {
    constructor(name, calories) {
        this.id = Math.random().toString(16).substring(2);
        this.name = name;
        this.calories = calories;
    }
}

class Storage {
    static getCalorieLimit(defaultLimit = 2000) {
        let calorieLimit;
        if (localStorage.getItem('calorieLimit') === null) {
            calorieLimit = defaultLimit;
        } else {
            calorieLimit = +localStorage.getItem('calorieLimit');
        }
        return calorieLimit;
    }

    static setCalorieLimit(limit) {
        localStorage.setItem('calorieLimit', limit);
    }

    static getTotalCalories(defaultTotal = 0) {
        let totalCalories;
        if (localStorage.getItem('totalCalories') === null) {
            totalCalories = defaultTotal;
        } else {
            totalCalories = +localStorage.getItem('totalCalories');
        }
        return totalCalories;
    }

    static updateTotalCalories(calories) {
        localStorage.setItem('totalCalories', calories);
    }

    static getMeals() {
        let meals;
        if (localStorage.getItem('meals') === null) {
            meals = [];
        } else {
            meals = JSON.parse(localStorage.getItem('meals'));
        }
        return meals;
    }

    static saveMeal(meal) {
        const meals = Storage.getMeals();
        meals.push(meal);
        localStorage.setItem('meals', JSON.stringify(meals));
    }

    static removeMeal(id) {
        const meals = Storage.getMeals();
        const updatedMeals = meals.filter(meal => meal.id !== id);
        localStorage.setItem('meals', JSON.stringify(updatedMeals));
    }

    static getWorkouts() {
        let workouts;
        if (localStorage.getItem('workouts') === null) {
            workouts = [];
        } else {
            workouts = JSON.parse(localStorage.getItem('workouts'));
        }
        return workouts;
    }

    static saveWorkout(workout) {
        const workouts = Storage.getWorkouts();
        workouts.push(workout);
        localStorage.setItem('workouts', JSON.stringify(workouts));
    }

    static removeWorkout(id) {
        const workouts = Storage.getWorkouts();
        const updatedWorkouts = workouts.filter(workout => workout.id !== id);
        localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
    }

    static clearAll() {
        localStorage.removeItem('totalCalories');
        localStorage.removeItem('meals');
        localStorage.removeItem('workouts');

        // // if everything should be cleared
        // localStorage.clear();
    }
}

class App {
    constructor() { 
        this._tracker = new CalorieTracker();
        this._loadEventlisteners();
        this._loadItems();
    }

    _loadItems() {
        this._tracker.meals.forEach(meal => this._displayNewMeal(meal));
        this._tracker.workouts.forEach(workout => this._displayNewWorkout(workout));
    }

    _loadEventlisteners() {
        document.getElementById('meal-form').addEventListener('submit', this._newMeal.bind(this));
        document.getElementById('workout-form').addEventListener('submit', this._newWorkout.bind(this));
        document.getElementById('meal-filter').addEventListener('input', this._filterMeals.bind(this));
        document.getElementById('workout-filter').addEventListener('input', this._filterWorkouts.bind(this));
        document.getElementById('reset-btn').addEventListener('click', this._reset.bind(this));
        document.getElementById('limit-form').addEventListener('submit', this._setLimit.bind(this));
    }

    _setLimit(e) {
        e.preventDefault();
        const limitInput = document.getElementById('limit-input');
        const limit = +limitInput.value;

        if (limit <= 0 || isNaN(limit)) {
            alert('Please enter a valid calorie limit');
            return;
        }

        this._tracker.setLimit(limit);
        
        // Close modal
        const modal = document.getElementById('limit-modal');
        modal.classList.remove('show');
    }

    _reset() {
        if (confirm('Are you sure you want to reset all data for the day?')) {
            this._tracker.reset();
            
            // Clear meal list
            const mealList = document.getElementById('meal-items');
            mealList.innerHTML = '<li class="empty-state">No meals added yet</li>';
            
            // Clear workout list
            const workoutList = document.getElementById('workout-items');
            workoutList.innerHTML = '<li class="empty-state">No workouts added yet</li>';
            
            // Clear filter inputs
            document.getElementById('meal-filter').value = '';
            document.getElementById('workout-filter').value = '';
        }
    }

    _newMeal(e) {
        e.preventDefault();

        const nameInput = document.getElementById('meal-name');
        const caloriesInput = document.getElementById('meal-calories');

        if (nameInput.value === '' || caloriesInput.value === '') {
            alert('Please fill in all fields');
            return;
        }

        const meal = new Meal(nameInput.value, +caloriesInput.value);
        this._tracker.addMeal(meal);
        this._displayNewMeal(meal);
        
        nameInput.value = '';
        caloriesInput.value = '';
    }

    _newWorkout(e) {
        e.preventDefault();

        const nameInput = document.getElementById('workout-name');
        const caloriesInput = document.getElementById('workout-calories');

        if (nameInput.value === '' || caloriesInput.value === '') {
            alert('Please fill in all fields');
            return;
        }

        const workout = new Workout(nameInput.value, +caloriesInput.value);
        this._tracker.addWorkout(workout);
        this._displayNewWorkout(workout);
        
        nameInput.value = '';
        caloriesInput.value = '';
    }
    
    _displayNewMeal(meal) {
        const list = document.getElementById('meal-items');
        const emptyState = list.querySelector('.empty-state');
        if (emptyState) emptyState.remove();

        const li = document.createElement('li');
        li.dataset.id = meal.id;
        li.innerHTML = `
            <div class="item-info">
                <button class="delete-btn" onclick="deleteMeal('${meal.id}')">✕</button>
                <span class="item-name">${meal.name}</span>
            </div>
            <span class="item-calories meal">+${meal.calories} cal</span>
        `;
        list.appendChild(li);
    }

    _displayNewWorkout(workout) {
        const list = document.getElementById('workout-items');
        const emptyState = list.querySelector('.empty-state');
        if (emptyState) emptyState.remove();

        const li = document.createElement('li');
        li.dataset.id = workout.id;
        li.innerHTML = `
            <div class="item-info">
                <button class="delete-btn" onclick="deleteWorkout('${workout.id}')">✕</button>
                <span class="item-name">${workout.name}</span>
            </div>
            <span class="item-calories workout">-${workout.calories} cal</span>
        `;
        list.appendChild(li);
    }

    _filterMeals(e) {
        const filterText = e.target.value.toLowerCase();
        const items = document.querySelectorAll('#meal-items li');
        
        items.forEach(item => {
            if (item.classList.contains('empty-state') || item.classList.contains('no-results')) {
                return;
            }
            
            const name = item.querySelector('.item-name');
            if (name) {
                if (name.textContent.toLowerCase().includes(filterText)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            }
        });

        this._updateFilterState('meal-items');
    }

    _filterWorkouts(e) {
        const filterText = e.target.value.toLowerCase();
        const items = document.querySelectorAll('#workout-items li');
        
        items.forEach(item => {
            if (item.classList.contains('empty-state') || item.classList.contains('no-results')) {
                return;
            }
            
            const name = item.querySelector('.item-name');
            if (name) {
                if (name.textContent.toLowerCase().includes(filterText)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            }
        });

        this._updateFilterState('workout-items');
    }

    _updateFilterState(listId) {
        const list = document.getElementById(listId);
        const items = list.querySelectorAll('li:not(.empty-state):not(.no-results)');
        const visibleItems = list.querySelectorAll('li:not(.empty-state):not(.no-results):not(.hidden)');
        const noResultsEl = list.querySelector('.no-results');

        // Remove existing no-results message
        if (noResultsEl) {
            noResultsEl.remove();
        }

        // Show no results message if there are items but none visible
        if (items.length > 0 && visibleItems.length === 0) {
            const noResults = document.createElement('li');
            noResults.className = 'no-results';
            noResults.textContent = 'No matching items found';
            list.appendChild(noResults);
        }
    }
}

const app = new App();

// Expose tracker globally for inline HTML event handlers
const tracker = app._tracker;
