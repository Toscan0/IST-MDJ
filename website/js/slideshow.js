function getCards() {
  var cards = document.getElementsByClassName("carTop10");
  console.log("cards", cards);
  return cards;
}

function getDots() {
  var dots = document.getElementsByClassName("dot");
  console.log("dots", dots);
  return dots;
}


function getBefore(n){
  if(cardActivated == 1){
    before = 10;
  }
  else{
    before = n-1;
  }
  return before;
}

function getAfter(n){
  if(cardActivated == 10){
    after = 1;
  }
  else{
    after = n+1;
  }
  return after;
}

var cardActivated = 1;
function updateSlide(update){
  if(update === "next"){
    console.log("next");
    if(cardActivated == 10){
      currentSlide(1);
    }else{
      currentSlide(cardActivated + 1);
    }
  }
  else if(update === "prev"){
    console.log("prev");
    if(cardActivated == 1){
      currentSlide(10);
    }else{
      currentSlide(cardActivated - 1);
    }
  }
  else{
    console.warn("Shit...");
  }
}

function currentSlide(n){
  console.log("n", n);
  if(n == cardActivated){ 
    console.log("nothing to do")
  }
  else{
    /*get cards and dots */
    var lst_cards = getCards();
    var lst_dots = getDots();

    /*create id of dot*/
    var idDotActivated = "dot" + cardActivated;
    var idCardActivated = "car" + cardActivated;

    /* Get before and after slides to show*/
    var before = getBefore(cardActivated);
    console.log("before", before);
    var after = getAfter(cardActivated);
    console.log("after", after);

    //Remove class;
    lst_cards[before-1].classList.remove("left");
    lst_cards[cardActivated-1].classList.remove("center");
    lst_cards[cardActivated-1].classList.remove("activate");
    lst_cards[after-1].classList.remove("right");
    

    /*new card active */
    cardActivated = n;
    var idDotToActivate = "dot" + n;
    var idCardToActivate = "car" + n;
    /* replace activate dot */
    lst_dots[idDotActivated].className = lst_dots[idDotActivated].className.replace(" activate", "");
    lst_dots[idDotToActivate].className = lst_dots[idDotToActivate].className.replace("dot", "dot activate");
    
    /* Get before and after slides to show*/
    var beforeNew = getBefore(cardActivated);
    console.log("beforeNew", beforeNew);
    var afterNew = getAfter(cardActivated);
    console.log("afterNew", afterNew);

    /* update slideshow */
    showSlides(beforeNew, afterNew);
  }

}

function showSlides(before, after){

  var lst_cards = getCards();
  //console.log(before, activate, after)

  for (i = 0; i < lst_cards.length; i++) {
    lst_cards[i].style.display = "none";  
  }
  
  var screenSize = screen.width
  console.log("screenSize", screen.width);
  if(screenSize >= 800 ){
    lst_cards[before-1].style.display = "flex";  
    lst_cards[before-1].classList.add("left");

    lst_cards[cardActivated-1].style.display = "inline-block";
    lst_cards[cardActivated-1].classList.add("center");
    lst_cards[cardActivated-1].classList.add("activate");

    lst_cards[after-1].style.display = "flex";
    lst_cards[after-1].classList.add("right");
  }
  else{
    lst_cards[cardActivated-1].style.display = "inline-block";
    lst_cards[cardActivated-1].classList.add("center");
    lst_cards[cardActivated-1].classList.add("activate");
  }
}