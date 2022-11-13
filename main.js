right_wrist_x = 0;
left_wrist_y = 0;
difference = 0;
function setup()
{
    video = createCapture(VIDEO)
    video.size(550,550)
    canvas = createCanvas(550,550)
    canvas.position(750,160)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotResults)
    
}
function modelLoaded()
{
    console.log("Model Loaded Successfully")
}
function draw()
{
    background ("white")
    text("Hello!" , 40 , 300);
    textSize(difference);
}
function gotResults(results)
{
    if(results.length > 0)
    {
        console.log(results);
        rigth_wrist_x = results[0].pose.rightWrist.x
        left_wrist_x = results[0].pose.leftWrist.x
        console.log("rigth Wrist x =" + rigth_wrist_x);
        console.log("left Wrist x =" + left_wrist_x);
        difference = floor(left_wrist_x - rigth_wrist_x);
    }
}