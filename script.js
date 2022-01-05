
const btn = document.getElementById('button');
const body = document.getElementsByName('body');
const books = document.querySelector('.books');	

let myLibrary = [];

btn.addEventListener('click', () => {

	const formExist = document.querySelector('form');

	if( !!formExist ){

		closeForm( formExist );

	}
	else{

		const table = document.createElement('form');
		const title = document.createElement('p');
		const name = document.createElement('input');
		const author = document.createElement('input');
		const pages = document.createElement('input');
		const readmsg = document.createElement('p');
		const readbox = document.createElement('input');
		const fbtn = document.createElement('button');

		table.classList.add('newbook', 'animate__animated', 'animate__flipInX');
		title.classList.add('newbook__title');
		name.classList.add('newbook__data');
		author.classList.add('newbook__data');
		pages.classList.add('newbook__data');
		readmsg.classList.add('newbook__msg');
		fbtn.classList.add('newbook__button');

		name.placeholder = 'Title';
		author.placeholder = 'Author';
		pages.placeholder = 'Number of pages';

		name.type = 'text';
		author.type = 'text';
		pages.type = 'text';
		readbox.type = 'checkbox';
		fbtn.type = 'submit';
	
		title.textContent = 'Add new book';
		readmsg.textContent = "I've already read this book";
		fbtn.textContent = 'Submit';
	
		table.appendChild(title);
		table.appendChild(name);
		table.appendChild(author);
		table.appendChild(pages);
		table.appendChild(readmsg);
		table.appendChild(readbox);
		table.appendChild(fbtn);
		document.body.appendChild(table);

		table.addEventListener('submit', (e) => {
			e.preventDefault();
			if( name.value.length != 0 && author.value.length != 0 && pages.value.length != 0  ){
				const newbook = new book( name.value, author.value, pages.value, readbox.checked );
				myLibrary.push(newbook);
				closeForm( table );
				renderBooks();
			}
		});
	}
	
});

const closeForm = ( form ) => {

		form.classList.replace('animate__flipInX', 'animate__lightSpeedOutRight');
		setTimeout(() => {
			document.body.removeChild(form);
		}, 750);

}

function book( title, author, pages, read ) {

	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;

}

const renderBooks = () => {

	while( books.lastChild ){ 							// Clean children before re-render to avoid duplicates
		books.removeChild( books.lastChild );
	}

	for( let i = 0, j = myLibrary.length; i < j; i++){ //Render loop

		// console.log( myLibrary[i] );

		let book = document.createElement('div');
		let title = document.createElement('p');
		let author = document.createElement('p');
		let pages = document.createElement('p');
		let read = document.createElement('p');
		let delbtn = document.createElement('button');

		title.textContent = myLibrary[i].title;
		author.textContent = myLibrary[i].author;
		pages.textContent = 'Pages: ' + myLibrary[i].pages;
		read.textContent = myLibrary[i].read ? 'Read' : 'Not read' ;
		delbtn.textContent = 'Delete';

		book.appendChild(title);
		book.appendChild(author);
		book.appendChild(pages);
		book.appendChild(read);
		book.appendChild(delbtn);
	
		delbtn.type = 'button';

		read.addEventListener('click', () => {

			if( read.textContent == 'Read' ){
				read.textContent = 'Not read';
				read.classList.remove('book__read');
				read.classList.add('book__unread');
			}
			else{
				read.textContent = 'Read';
				read.classList.remove('book__unread');
				read.classList.add('book__read');
			}

		})

		delbtn.addEventListener('click', ({ target }) => {

			removeBook( target );

		} );

		book.classList.add('book');
		title.classList.add('book__title');
		author.classList.add('book__author');
		myLibrary[i].read ? read.classList.add('book__read') : read.classList.add('book__unread');
		delbtn.classList.add('book__delbtn');

		books.appendChild( book );
	}

}

const removeBook = ( target ) => {

	const title =  target.parentNode.children[0].textContent;
	console.log( title );
	for( let i = 0, j = myLibrary.length; i < j; i++)
	{
		if( title == myLibrary[i].title ){
			myLibrary.splice(i, 1);
			renderBooks();
		}
	}

}