var canvas = new fabric.Canvas ('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_image_object = "";

function draw_player(){
    fabric.Image.fromURL("player.png",function (Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top : player_y,
            left : player_x
        });
        canvas.add(player_object);
    });
}

function draw_block(get_image){
    fabric.Image.fromURL(get_image,function (Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top : player_y,
            left : player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    key_pressed = e.keyCode;
    console.log(key_pressed);
    if (e.shiftKey && key_pressed == '80'){
        console.log("p and shift pressed together");
        block_image_width +=10;
        block_image_height +=10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey && key_pressed == '77'){
        console.log("m and shift pressed together");
        block_image_width -=10;
        block_image_height -=10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (key_pressed =='38'){
        //up();
        console.log("up");
    }
    if (key_pressed =='40'){
        //down();
        console.log("down");
    }
    if (key_pressed =='37'){
        //left();
        console.log("left");
    }
    if (key_pressed =='39'){
        //right();
        console.log("right");
    }
    if (key_pressed =='70'){
        draw_block('spiderman_face.png');
        console.log("f");
    }
    if (key_pressed =='66'){
        draw_block('ironman_body.png');
        console.log("b");
    }
    if (key_pressed =='76'){
        draw_block('captain_legs.jpg');
        console.log("l");
    }
    if (key_pressed =='82'){
        draw_block('thor_right_hand.png');
        console.log("r");
    }
    if (key_pressed =='72'){
        draw_block('hulk_left_hand.png');
        console.log("h");
    }
}