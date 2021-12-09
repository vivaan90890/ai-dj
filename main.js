song="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
isplaying="";
isplaying2="";
function preload(){
song=loadSound("music.mp3");
song2=loadSound("music2.mp3");
}
function setup(){
canvas=createCanvas(450,450);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("poseNet model is intialised");
    }
    function gotPoses(results){
        if(results.length>0){
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWrist="+leftWristX+"leftWristY="+leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWrist="+rightWristX+"rightWristY="+rightWristY);
        }
        }
function draw(){
image(video,0,0,450,450);
fill("red");
stroke("black");
isplaying=song.isplaying();
}
function play(){
song.play();
isplaying2=song2.isplaying();
if(scoreLeftWrist>0.2){
    circle(leftWristX,leftWristY,20);
song.stop();
song2.stop();
}
if(isplaying=='true'){
song2.stop();
}
}