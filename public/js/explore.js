$("#search i").click(function(){
	$("#search input").toggleClass("toggleDisplay");
	$("#search input").toggleClass("correctPosition2");
	$("#search i").toggleClass("correctPosition2");
	$("#search i").toggleClass("correctPosition");
});
$("#imageshow > div:gt(0)").hide();

setInterval(function() { 
  $('#imageshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#imageshow');
},  3000);





$(".subDiv").on("click",".bulbImage",function(){

	var text1=$(this).parent().find(".bulbText");
	var value=(Number)(text1.text());
	value=value+1;
	text1.text((String)(value));
});
$(".subDiv").on("click",".howImage",function(){

	var text1=$(this).parent().find(".howText");
	var value=(Number)(text1.text());
	value=value+1;
	text1.text((String)(value));
});
$(".subDiv").on("click",".likeImage",function(){

	var text1=$(this).parent().find(".likeText");
	var value=(Number)(text1.text());
	value=value+1;
	text1.text((String)(value));
});


// $(".subDiv").on("click",".bulbImage",function(){
// 	console.log($(this).find(".bulbText").text());
// })