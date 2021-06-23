const ContactName = document.getElementById('name')
const number = document.getElementById('number')
const address = document.getElementById('address')
const button = document.getElementById('button')
const contactList = document.getElementById('contact-list')

const store = window.localStorage

button.addEventListener('click', () => {
	const contact = {
		id: Math.random(),
		name: ContactName.value,
		number: number.value,
		address: address.value,
	}

	store.setItem(contact.id, JSON.stringify(contact))
	// window.location = '/'
	ContactName.value = ''
	number.value = ''
	address.value = ''
})

const loadContacts = (store, node) =>{
	const contactKeys = Object.keys(store)

	contactKeys.map(key => {
		const contact = (JSON.parse(store.getItem(key)))
		console.log(contact)
	})
}

loadContacts(store, contactList)