noseX=0;
noseY=0;

function preload() {
    moustache = loadImage('https://i.postimg.cc/7Yjm13xs/Moustache-PNG-Clipart.png')
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -15;
        noseY = results[0].pose.nose.y -15;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}