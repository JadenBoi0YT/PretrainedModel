var Background = document.getElementById("Body")

function preload(){
}

function setup(){
    canvas = createCanvas(400, 350);
    canvas.center();
}

function draw(){

}

function TakeSnap(){
    save("Picture.png");
}

function ChangeToMustache(){
    document.body.Background ="Mustache.jpg";
}