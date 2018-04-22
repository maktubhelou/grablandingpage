function dropMenu() {
	document.getElementById('sidebar_left').classList.toggle('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.dropDown')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}