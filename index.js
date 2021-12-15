let myLinks = []
let billName = []
let billElements = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLinks") )
const billNameFromLocalStorage = JSON.parse( localStorage.getItem("billName") )
const tabBtn = document.getElementById("tab-btn")
const openAllBtn = document.getElementById("open-all-btn")
const searchEl = document.getElementById("search-el")

//Displays links and names from local storage
if (leadsFromLocalStorage && billNameFromLocalStorage) {
    myLinks = leadsFromLocalStorage
    billName = billNameFromLocalStorage
    render(myLinks)
}

// Saves current tab with input as the text. Add alert if textbox is empty
tabBtn.addEventListener("click", function(){ 
    billName.push(inputEl.value)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLinks.push(tabs[0].url)
    localStorage.setItem("myLinks", JSON.stringify(myLinks) )
    localStorage.setItem("billName", JSON.stringify(billName))
    inputEl.value = ""
    render(myLinks)
    console.log(myLinks)
    })
})

inputEl.addEventListener("keyup", function(e){
    if (e.code === 'Enter') {
         tabBtn.click()
         
    }
})
//traverses array, pulling out each link name + link and putting it into ulEL
function render(leads) {

    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
       
        
            <li>
            <div class = "container">
                <a class="list" target='_blank' href='${leads[i]}'>
                    ${billName[i]}
                </a>
                <button class="delbtn" id="${i}">
                    Delete
                </button>
            </div>
            </li>
           
           
            
        
        `
    }
    ulEl.innerHTML = listItems
    for (let i=0; i<myLinks.length; i++){
        const deleteEl = document.getElementById(i)
        deleteEl.addEventListener("click", function() {
            myLinks.splice(i,1)
            billName.splice(i,1)
            render(myLinks)
            localStorage.setItem("myLinks", JSON.stringify(myLinks) )
            localStorage.setItem("billName", JSON.stringify(billName))
        })
    } 
    // billElements = document.getElementsByClassName("container")
    
}




// Clears local storage and empties arrays
deleteBtn.addEventListener("click", function() {
    console.log("clicked clear")
    localStorage.clear()
    myLinks = []
    billName = []
    render(myLinks)
})

openAllBtn.addEventListener("click", function() {
    for (let i = 0; i<myLinks.length; i++ )
    chrome.tabs.create({
        url: myLinks[i]
    })
})

//Search 

billElements = document.getElementsByClassName("container")
searchEl.addEventListener("keyup", function(event){
    let searchQuery = event.target.value.toLowerCase()
    console.log(searchQuery)
    for (let i = 0; i<billElements.length; i++){
        const currentBillElement = billElements[i].children[0].textContent.toLowerCase();
        
        if (currentBillElement.includes(searchQuery)){
            billElements[i].style.display = "flex"
        }else {
            billElements[i].style.display = "none"
        }
    }
}
)