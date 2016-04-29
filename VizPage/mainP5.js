var mySound;
var myText;
var circleDiameter;
var dNumber;

// alert('Hello motherfucker');

function preload()
{
	mySound = loadSound('assets/Famous.mp3');
	myText = loadStrings('assets/Famous.mp3');
}

function setup() 
{
   createCanvas(1920, 1080);
   stroke(255);               // stroke() is the same
   noFill();
   
   circleDiameter = random(100);
   
   mySound.setVolume(0.5);
   //mySound.play();

   //print(myText);
   //print(myText[0]);
   //print(Number(myText[0]));

   var dNumber = parseInt(myText[]);
   print (dNumber);

   var myBuffer = new ArrayBuffer(dNumber);
   print (myBuffer);
   var dataView = new DataView(myBuffer);
   print (dataView.getInt32(0).toString(16));

}

function draw() 
{
  background(0);
  ellipse(100, 100, circleDiameter, circleDiameter);
  text("This is a fucking viz test!", 0, 0, 200, 200);
  rect(200, 200, dNumber, dNumber );

}
