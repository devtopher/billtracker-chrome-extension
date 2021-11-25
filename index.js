let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const billNameFromLocalStorage = JSON.parse( localStorage.getItem("billName") )

const tabBtn = document.getElementById("tab-btn")
let billName = []

if (leadsFromLocalStorage && billNameFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    billName = billNameFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){ 
    billName.push(inputEl.value)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    localStorage.setItem("billName", JSON.stringify(billName))
    render(myLeads)
    console.log(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
       
       
            <li>
            <div class = "container">
                <a target='_blank' href='${leads[i]}'>
                    ${billName[i]}
                </a>
                <button class= "delete-btn-list">Delete</button>
            </li>
            </div>
            
        
        `
    }
    ulEl.innerHTML = listItems
}
// do i need to use a two value array in order to save the bill name as a callable thing.?

deleteBtn.addEventListener("click", function() {
    console.log("clicked")
    localStorage.clear()
    myLeads = []
    billName = []
    render(myLeads)
})

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//     render(myLeads)})


inputBtn.addEventListener("click", function(){
    billName.push(inputEl.value)
    

})