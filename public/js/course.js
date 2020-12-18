$("#search i").click(function(){
	$("#search input").toggleClass("toggleDisplay");
	$("#search input").toggleClass("correctPosition2");
	$("#search i").toggleClass("correctPosition2");
	$("#search i").toggleClass("correctPosition");
});

$(".comment").on("click",".bulbImage",function(){

	var text1=$(this).parent().find(".bulbText");
	var value=(Number)(text1.text());
	value=value+1;
	text1.text((String)(value));
});
$(".comment").on("click",".howImage",function(){

	var text1=$(this).parent().find(".howText");
	var value=(Number)(text1.text());
	value=value+1;
	text1.text((String)(value));
});
$(".comment").on("click",".likeImage",function(){

	var text1=$(this).parent().find(".likeText");
	var value=(Number)(text1.text());
	value=value+1;
	text1.text((String)(value));
});