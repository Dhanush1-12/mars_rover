canvas=document.getElementById ("myCanvas");
cntx=canvas.getContext("2d");

bg_image="mars.jpg";
rover_image="rover.png";
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;

function add(){
    bg_imagetag=new Image();
    bg_imagetag.src=bg_image;
    bg_imagetag.onload=uploadBackground;

    rover_imagetag=new Image();
    rover_imagetag.src=rover_image;
    rover_imagetag.onload=uploadrover;
    
}
function uploadBackground(){
    cntx.drawImage(bg_imagetag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    cntx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed==38){
        console.log("up");
        up();
    }
    if(keypressed==40){
        console.log("down");
        down();
    }
    if(keypressed==37){
        console.log("left");
        left();
    }
    if(keypressed==39){
        console.log("right");
        right();
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("rover x=",rover_x," y=",rover_y);
        uploadBackground();
        uploadrover();
    }
}
function down(){
    if(rover_y<=400){
        rover_y=rover_y+10;
        console.log("rover x=",rover_x," y=",rover_y);
        uploadBackground();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("rover x=",rover_x," y=",rover_y);
        uploadBackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("rover x=",rover_x," y=",rover_y);
        uploadBackground();
        uploadrover();
    }
}