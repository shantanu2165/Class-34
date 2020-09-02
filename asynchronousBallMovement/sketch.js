var hypnoticball, firebase;

var Position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);

    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";

    var hypnoticballposition = database.ref('ball/Position');
    hypnoticballposition.on("value",readposition,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+1);
    }
    drawSprites();
}

function writeposition(x,y){
    database.ref('ball/Position').set({
        'x':Position.x + x,
        'y':Position.y + y
    })
}

function readposition(data){
Position = data.val();
hypnoticball.x = Position.x;
hypnoticball.y = Position.y;
}

function showerror(){
    console.log("something is wrong!!!!");
}