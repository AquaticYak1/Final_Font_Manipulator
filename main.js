function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560,100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#C0C0C0');
    document.getElementById("square_side").innerHTML="The size of the font is currently =  " + difference + "px";
    fill('#F5F5DC');
    text("Testificate", noseX, noseY);
    textSize(difference);
}

function modelLoaded(){
    console.log('PoseNet Is Initialised!');
}

function gotPoses(results){
    if(results.length  > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = "+ noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor (leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + "difference = " + difference);
    }
}
noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
