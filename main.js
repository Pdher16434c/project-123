function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(140, 543);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    function draw(){
    background('#969A97');
    }
    function modelLoaded(){
    console.log('PoseNet is loaded and working');
    }
    function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    }
    }