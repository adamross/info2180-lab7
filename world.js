$(document).ready(function(){
    var lookup = $("#lookup");
    var checkBox = $("#all");
    
    lookup.click(function(){
        if(checkBox.is(":checked")){
            $.ajax({
                type: "GET",
                url: "world.php",
                datatype: "html",
                data: {
                    all: $("#all").val()
                },
                success: function(text){
                    $("#result").html(text);
                }
            })
        }else{
            $.ajax({
                type: 'GET',
                url: 'world.php',
                datatype: 'html',
                data: {
                    country: $("#country").val()
                },
                success: function(text){
                    $("#result").html(text);
                }
            });
        }
    });
});