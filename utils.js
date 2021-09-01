const keysMemo = []

const createContact = (store, contact) => store.setItem(contact.id, JSON.stringify(contact))

const loadContacts = (store, node) =>{
	const contactKeys = Object.keys(store)

	const sortContactKeys = sortContacts(contactKeys)

	sortContactKeys.map(key => {
		const data = (JSON.parse(store.getItem(key)))

		if (!keysMemo.includes(data.id)){
			keysMemo.push(data.id)

			// Datos del contacto
			const contact = [
				data.name,
				data.number,
				data.address,
				'delete_forever'
			]
	
			const divContact = document.createElement('div')
			divContact.classList.add('contacts__contact')
	
			// Elementos
			const contactElements = [
				nameContact = document.createElement('p'),
				numberContact = document.createElement('p'),
				addressContact = document.createElement('p'),
				iconDelete = document.createElement('span')
			]
	
			contactElements[3].classList.add('material-icons')
			contactElements[3].onclick = () =>{
				removeContact(store, data.id)
			}
	
			// Se cargan los datos de cada contacto en su respectivo elemento
			// Se carga cada elemento en el div de los contactos
			contactElements.map(element =>{
				const index = contactElements.indexOf(element);
				element.innerHTML = contact[index]
				divContact.appendChild(element)
			})
	
			// Se agrega al DOM el div de los contactos
			node.appendChild(divContact)
		}		
	})
}

const removeContact = (store, id) => {
	store.removeItem(id)
	window.location.href = '/'
}

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