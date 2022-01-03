
const btn = document.getElementById('button');
const body = document.getElementsByName('body');

btn.addEventListener('click', () => {

	const formExist = document.querySelector('form');

	if( !!formExist ){
		formExist.classList.replace('animate__flipInX', 'animate__lightSpeedOutRight');
		setTimeout(() => {
			document.body.removeChild(formExist);
		}, 500);
	}
	else{

		const table = document.createElement('form');
		table.classList.add('newbook', 'animate__animated', 'animate__flipInX');
		const title = document.createElement('p');
		title.classList.add('newbook__title');
		const name = document.createElement('input');
		name.classList.add('newbook__data');
		name.placeholder = 'Title';
		const author = document.createElement('input');
		author.placeholder = 'Author';
		author.classList.add('newbook__data');
		const pages = document.createElement('input');
		pages.placeholder = 'Number of pages'
		pages.classList.add('newbook__data');
		const fbtn = document.createElement('button');
		fbtn.classList.add('newbook__button');
	
		fbtn.textContent = 'Submit';
		title.textContent = 'Add new book';
	
		table.appendChild(title);
		table.appendChild(name);
		table.appendChild(author);
		table.appendChild(pages);
		table.appendChild(fbtn);
		document.body.appendChild(table);
	
		console.log('You are clicking me');
	}


	// table.textContent = 'Hola';
	// document.body.appendChild(table);
});