function expandDiv(tid, pid){
  
  var tabel = document.getElementById(tid);
  //console.log(tabel);
  if(tabel.style.display === "block"){
    tabel.style.display = "none";
    document.getElementById(pid).innerHTML = "Too see all press here &dArr;";
  }
  else if(tabel.style.display === "none"){
    tabel.style.display = "block";
    document.getElementById(pid).innerHTML = "Too hidden all press here &uArr;";
  }
  else{
    console.error("We have a problem: expandDiv " + tid);
  }
}