// VARIABLES
const itemInput = document.querySelector('#addItem input')
const addButton = document.querySelector('#addItem button')

const itemsContainer = document.querySelector('.items')
const items = Array.from(document.querySelectorAll('.item input'))

const deleteBtns = Array.from(document.querySelectorAll('button[name="delete"]'))
console.log(deleteBtns)
const inputHandler = function(e) {
    // Get item name
    const itemText = itemInput.value;
    console.log(`Adding: ${itemText}`)

    // Build html
    const itemHtml = `
    <div class="item" data-item=${itemText}>
        <input type="checkbox">${itemText}
        <button type="button" name="delete">x</button>
    </div>`

    itemsContainer.insertAdjacentHTML("beforeend", itemHtml)
};

const completedHandler = function(e) {
    const itemDiv = e.currentTarget.parentNode;
    itemDiv.classList.toggle('completed')
}

const deleteHandler = function(e){
    const parentEl = e.target.parentNode
    console.log(e.target)
    console.log(`REMOVING: ${parentEl}`)
    // parentEl.remove();
}


// Add new items
addButton.addEventListener("click", inputHandler)

// Grey out items
items.forEach(function(item){
    item.addEventListener("change", completedHandler)
})

// Delete an item
deleteBtns.forEach(function(btn) {
    addEventListener('click', deleteHandler)
})

// NEED TO UPDATE DELETEBTNS ARRAY WHEN ITEM IS ADDED AND ON PAGE LOAD
