const contactName = document.getElementById('name')
const number = document.getElementById('number')
const address = document.getElementById('address')
const button = document.getElementById('button')
const contactList = document.querySelector('.contacts')

const store = window.localStorage

button.addEventListener('click', (e) => {
	e.preventDefault()

	if(contactName.value === "" || number.value === "" || address.value === ""){
		return (
			Swal.fire({
				title: 'Error',
				text: 'Debes completar todos los campos',
				icon: 'error',
				confirmButtonText: 'Aceptar',
			})
		)
	}

	const contact = {
		id: Date.now(),
		name: contactName.value,
		number: number.value,
		address: address.value,
	}

	createContact(store, contact)
	loadContacts(store, contactList)

	// Reseteo de los campos del formulario
	contactName.value = ''
	number.value = ''
	address.value = ''
})


loadContacts(store, contactList)