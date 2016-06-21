$(document).ready(function(){



// $("[data-toggle=popover]").popover();

$(".sub_line").hover(function(){

		$(this).addClass("sub_btn");



});




$(".sub_btn").click(function(){




	console.log("hi");
	// $(this).css({

	// 		marginLeft : "30px" ,
	// 		width : '300px'

	// });



	// $(this).animate({   

	// 		marginLeft : "30px" ,
	// 		width : '300px'

	// },500);
	
	$(this).addClass("animated heartBeat")
		   .delay(2000)
		   .queue(function(){

		   			$(this).removeClass("animated heartBeat");

   			});







})



























});