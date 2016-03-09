var etch_a_sketch = function() {
    $('#grid_container').html("");
        
    var input = prompt('Select the size of your sketch pad', 'Small, Medium or Large');
    input.toLowerCase();
    
    if(input === "small") {
            var square_size = $('#grid_container').width()/30;
            for(var i = 1; i <= 32; i++) {
                for(var k = 1; k <= 32; i++) {
                    $('#grid_container').append('<div class="grid_square"></div>');
                }
                $('#grid_container').append('<div class="new_row"></div>');
            }
            $('.grid_square').css('width', square_size);
            $('.grid_square').css('height', square_size);
    }
    else if(input === "medium") {
            var square_size = $('#grid_container').width()/62;
            for(var i = 1; i <= 64; i++) {
                for(var k = 1; k <= 64; i++) {
                    $('#grid_container').append('<div class="grid_square"></div>');
                }
                $('#grid_container').append('<div class="new_row"></div>');
            }
            $('.grid_square').css('width', square_size);
            $('.grid_square').css('height', square_size);
    }
    else if(input === "large") {
            var square_size = $('#grid_container').width()/126;
            for(var i = 1; i <= 128; i++) {
                for(var k = 1; k <= 128; i++) {
                    $('#grid_container').append('<div class="grid_square"></div>');
                }
                $('#grid_container').append('<div class="new_row"></div>');
            }
            $('.grid_square').css('width', square_size);
            $('.grid_square').css('height', square_size);
    }
    else {
            console.log("You didn't pick a valid option");
            etch_a_sketch();
    }
}