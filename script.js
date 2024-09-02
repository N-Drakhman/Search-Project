// Variable

const search = document.querySelector(".search-input");


// Function

search.addEventListener('focus', (() => {
    search.style.border = '.5px #4c5fd5 solid'
    console.log('works')
}))

