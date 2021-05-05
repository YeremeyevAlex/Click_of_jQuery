let pictures = ["ford.jpg","ma.jpg","ultra.jpg","rashi.jpg","jquery.jpg"];
$(document).ready( () => {
	$(".small").append(pictures.map((pic) => '<img src="'+"img/"+pic+'">'));
	$("img").click(function() {
		let show = $(this).attr('src');
		$(".large").html('<img src="'+show+'">');
	});
});