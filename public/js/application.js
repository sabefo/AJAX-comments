// $(document).ready(function() {
	// Este código corre después de que `document` fue cargado(loaded) 
	// completamente. 
	// Esto garantiza que si amarramos(bind) una función a un elemento 
	// de HTML este exista ya en la página.

// });

// Una manera corta de escribir document.ready
$(function(){

	//Function that shows a form
	$("#new_comment_button").on("click",function(event){
		var stringHTML = "<form id='new_comment'><textarea></textarea><input placeholder='autor'><input type='submit'></form>";
		$("#comment_list").append(stringHTML);
		$("#new_comment_button").hide();
	});

	//Function that puts the comments inside the +ul+
	$("#comment_area").on("submit", "#new_comment", function(event){
		event.preventDefault();
		var text = $(this).find("textarea").val();
		var author = $(this).find("input").val();
		if (text.length != 0 && author.length != 0) {
			$("#new_comment").remove();
			$("#comment_list").append("<li>" + text + "<span class='author'>" + author +"</span></li>");
			$("#new_comment_button").show();
		}
	});
});