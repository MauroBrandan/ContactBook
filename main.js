const contactName = document.getElementById('name')
const number = document.getElementById('number')
const address = document.getElementById('address')
const button = document.getElementById('button')
const contactList = document.querySelector('.contacts')

const store = window.localStorage
const keysMemo = []

button.addEventListener('click', () => {
	const contact = {
		id: Date.now(),
		name: contactName.value,
		number: number.value,
		address: address.value,
	}

	createContact(contact)
	loadContacts(store, contactList)

	contactName.value = ''
	number.value = ''
	address.value = ''
})

const createContact = contact => store.setItem(contact.id, JSON.stringify(contact))

const sortContacts = (array) =>{
	let swapped = true
	do {
		swapped = false
		for (let i = 0; i < array.length; i++) {
			if(array[i] > array[i + 1]){
				let temp = array[i]
				array[i] = array[i + 1]
				array[i + 1] = temp
				swapped = true
			}
		}
	} while (swapped);
	return array
}

const removeContact = (id) => {
	store.removeItem(id)
	window.location.href = '/'
}

const loadContacts = (store, node) =>{
	const contactKeys = Object.keys(store)

	const sortContactKeys = sortContacts(contactKeys)

	sortContactKeys.map(key => {
		const data = (JSON.parse(store.getItem(key)))

		if (!keysMemo.includes(data.id)){
			keysMemo.push(data.id)
			const contact = [
				data.name,
				data.number,
				data.address,
				'delete_forever'
			]
	
			const divContact = document.createElement('div')
			divContact.classList.add('contacts__contact')
	
			const contactElements = [
				nameContact = document.createElement('p'),
				numberContact = document.createElement('p'),
				addressContact = document.createElement('p'),
				iconDelete = document.createElement('span')
			]
	
			contactElements[3].classList.add('material-icons')
			contactElements[3].onclick = () =>{
				removeContact(data.id)
			}
	
			contactElements.map(element =>{
				const index = contactElements.indexOf(element);
				element.innerHTML = contact[index]
				divContact.appendChild(element)
			})
	
			node.appendChild(divContact)
		}		
	})
}

loadContacts(store, contactList)

// ORDENAR FUNCIONES Y AGREGAR COMENTARIOS