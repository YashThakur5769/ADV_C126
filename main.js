music = "";
music2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;


function preload()
{
    music = loadSound("music2.mp3");
    music2 = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);
            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y;
            rightWristX = results[0].pose.rightWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
        }
}

function modelLoaded()
{
    console.log('Model has been initialized.')
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    music.play();
}
