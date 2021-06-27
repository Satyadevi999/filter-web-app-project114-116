
noseX=0;
noseY=0;
function preload() {
img=loadImage("https://i.postimg.cc/8CBwwJPJ/lips-imga.jpg");
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',getPoses);

}
function modelLoaded()
{
    console.log('Model loaded');
}

function draw() {
image(video,0,0,300,300);
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX,noseY,20);
image(img,noseX,noseY,30,30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
function getPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log('nose x = ' + noseX);
        console.log('nose y = ' + noseY);
    }
}