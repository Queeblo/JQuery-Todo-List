$("ul").on("click", "li", function(){
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     $(this).css("color", "black");
    //     $(this).css({
    //         color: "black",
    //         textDecoration: ""
    //     })
    // } else{
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    //     }
    $(this).toggleClass("strike");
    });

    $("ul").on("click", "span", function(event){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        event.stopPropagation();
    })

    $('input[type="text"]').keypress(function(event){
        if(event.which === 13){
           var todoText = $(this).val();
           $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
           $(this).val("");
        }
    });

    $(".fa-plus").click(function(){
        $("input[type='text']").fadeToggle()
    });