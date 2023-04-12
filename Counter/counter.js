// Variables
let count = 0
const added = document.querySelector('.btn-add')
const subbed = document.querySelector('.btn-subtract')
let display = document.querySelector('.number')



added.addEventListener('click', function(){
	count += 1
	display.innerHTML = count;

	if( count > 0){
		display.style.color ='rgb(48, 105, 81)'
	}
	else if( count == 0){
		display.style.color ='rgb(189, 180, 131)'

	}

	else{
		display.style.color ='rgb(96, 3, 26)'

	}


})
subbed.addEventListener('click', function(){
	count -= 1
	display.innerHTML = count;


	if( count > 0){
		display.style.color ='rgb(48, 105, 81)'
	}
	else if( count == 0){
		display.style.color ='rgb(189, 180, 131)'
		
	}

	else{
		display.style.color ='rgb(96, 3, 26)'

	}

})













