
song1 = "";
song2 = "";
leftWristX= 0;
leftWristY= 0;

rightWristX = 0;
rightWristY = 0;

scoreleftWrist = 0;

function preload()
{
    song1 = loadSound();
    song2 = loadSound();
}

function setup()
{
canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Posenet is initialized")
}

function draw()
{
    image(video, 0, 0, 600, 500);

    fill('#D1CFB2');
    stroke('#D1CFB2');
    
}
   




function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses( results)
{
if(results.length>0)
{
    scoreleftWrist = results[0].pose.keypoints[9].score;
    console.log("scoreleftWrist = " + scoreleftWrist);

    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("left WristX = " +leftWristX +"left WristY = " + leftWristY );

    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("right WristX = " +rightWristX +"right WristY = " +rightWristY);

}
}