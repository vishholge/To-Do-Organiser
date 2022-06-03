const toDoDragStart = (event) => {
	let toDoCardIDBeingDragged = event.target.id
	event.dataTransfer.setData('ToDoCard', toDoCardIDBeingDragged)
}

const allowDrop = (event) => {
	event.preventDefault()
}
const toDoDrop = (event) => {
	let toDoCardIDBeingDragged = 	event.dataTransfer.getData('ToDoCard')
	let toDoCardBeingDropped = document.getElementById(toDoCardIDBeingDragged)
	let parentElement = event.target
	parentElement.appendChild(toDoCardBeingDropped)
}