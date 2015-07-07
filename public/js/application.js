// Una manera corta de escribir document.ready
$(function(){

	//Function that shows a form
	$("#new_comment_button").on("click",function(event){
		var stringHTML = "<form id='new_comment' action='/db' method='post'><textarea name='text'></textarea><input name='author' placeholder='autor'><input type='submit'></form>";
		$("#comment_list").append(stringHTML);
		$("#new_comment_button").hide();
	});

	//Function that puts the comments inside the +ul+ and sends it to the DB
	$("#comment_area").on("submit", "#new_comment", function(event){
		event.preventDefault();
		var text = $(this).find("textarea").val();
		var author = $(this).find("input").val();
		if (text.length != 0 && author.length != 0) {
			$("#comment_list").append("<li>" + text + "<span class='author'>" + author +"</span></li>");
			$("#new_comment_button").show();
			var ser = $("#new_comment").serialize();
			url = $("#new_comment").attr("action");
			var post = $.post(url, ser).done(function(){
				alert("Exito");
			});
			$("#new_comment").remove();
		}
	});
});