const itemsList = document.querySelector("ul")
const itemInput = document.querySelector("input")
const itemBtn = document.querySelector("button")

function handleBtnClick(e) {
        const inputValue = itemInput.value
        itemInput.value = ''
        itemInput.focus()
        const itemParent = document.createElement("li")
        const itemText = document.createElement("span")
        const itemDelete = document.createElement("button")
        itemParent.appendChild(itemText)
        itemParent.appendChild(itemDelete)
        itemText.textContent = inputValue
        itemDelete.textContent = "Delete"

        itemsList.appendChild(itemParent)

        itemDelete.addEventListener('click', (e) => {
          e.target.parentNode.remove()
        })
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM content event!");
})
document.addEventListener("load", () => {
  console.log("Page Load event!");
})
document.addEventListener("beforeunload", () => {
  confirm("Do you want to leave?")
  console.log("Page before unload event!");
})
document.addEventListener("unload", () => {
  console.log("Page unload event!");
})
itemBtn.addEventListener('click', handleBtnClick)