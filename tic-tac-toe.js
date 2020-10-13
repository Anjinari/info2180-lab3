window.onload = begin;

function begin(){
	formatDiv();
	XO();
}

const pick = ["X","O"];
let choice = 0;

function formatDiv(){
	const deck = document.getElementById("board").children;
	for(let y = 0; y < deck.length; y++){
		deck[y].classList.add("square");
    }
    const option = document.querySelectorAll("#board > div");
	for(let y = 0; y < option.length; y++){
		option[y].onmouseover = () =>{
			option[y].classList.add("hover");
		}
		option[y].onmouseout = () =>{
			option[y].classList.remove("hover");
		}
	}
}

function XO(){
	if(choice === 0){
		choice = 1;
	}
	else {
        (choice === 1)
		choice = 0;
    }
	const option = document.querySelectorAll("#board > div");
	for(let y = 0; y < option.length; y++){
		
		option[y].onclick = function(){
			if (option[y].innerHTML === ""){
				option[y].textContent = pick[choice];
				option[y].classList.add(pick[choice]);
				XO();
			}
		}
	}
}