function changeActivelink(l_id){
	var current = document.getElementsByClassName("active");
	current[0].classList.remove("active");
	//console.log(current[0])

	var nextCurrent = document.getElementById(l_id);
	nextCurrent.classList.add("active");
	//console.log(nextCurrent)

}

function activeDropLink(a_id){
	var current = document.getElementsByClassName("dropdown-item");
	for(i = 0; i < current.length; i++){
		current[i].style.opacity = 0.5;
	}
	var element = document.getElementById(a_id);
	element.style.opacity = 1;
}