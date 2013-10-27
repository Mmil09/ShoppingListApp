$(document).ready(function() {

// -------------- Functions and Variables

var shoppingList = [];


var submitItem = function() {

	var listItem = $('#inputText').val();
	if (listItem != "") {
		var insert = "<li class='pending'><p>" + listItem + "</p><div class='li-icon edit'></div><div class='li-icon delete'></div></li>"
		shoppingList.push(listItem);
		$('#items').append(insert);
		$('#inputText').val("").focus();
		}
	}

var changeStatus = function() {
	$(this).parent().toggleClass("completed");
}

var editItem = function() {
	var valueCurrent = $(this).prev().text();
	var valueNew = window.prompt("Change Item: ", valueCurrent);
	

	if (valueNew !== "" && valueNew !== null) {
		$(this).prev().text(valueNew);
	}


}

var deleteItem = function() {
	$(this).parent().fadeOut();
}



// ------------ Start of program

$('#buttonSubmit').click(submitItem);

$(document).on('click', 'p', changeStatus);

$(document).on('click', '.edit', editItem);

$(document).on('click', '.delete', deleteItem);

$('#items').sortable();

$('#inputText').keyup(function(e) {
	 	if (e.keyCode == 13) {
	 		submitItem();
	 	}
	});



});
