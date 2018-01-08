var ammount = 0.01;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  noiseDetail(4,0.5);
  //my name in ascii
  //noiseSeed(76117107101);
}
function draw() {

	  var yoff = 0;
	  loadPixels();
	  for (var y = 0; y < height; y+=1) {
		var xoff = 0;
		for (var x = 0; x < width; x+=1) {
		  var index = (x + y * width) * 4;
		  var r = noise(xoff, yoff) * 200;
		  //deep deep ocean
		  if (r<60) {
			pixels[index + 0] = 0;
			pixels[index + 1] = 0;
			pixels[index + 2] = 150-random(30);
			pixels[index + 3] = 255;
		  //deep ocean
		  } else if (r<80) {
			pixels[index + 0] = 0;
			pixels[index + 1] = 0;
			pixels[index + 2] = 200-random(30);
			pixels[index + 3] = 255;
		  //ocean
		  } else if (r<100) {
			pixels[index + 0] = 0;
			pixels[index + 1] = 0;
			pixels[index + 2] = 255-random(30);
			pixels[index + 3] = 255;
		  //ocean_surf
		  } else if (r<104) {
			pixels[index + 0] = 0;
			pixels[index + 1] = 100-random(30);
			pixels[index + 2] = 255-random(30);
			pixels[index + 3] = 255;
		  //surf
		  } else if (r<107) {
			  c = floor(random(6));
			  if (c==0) {
				  pixels[index + 0] = 255;
				  pixels[index + 1] = 154;
				  pixels[index + 2] = 162;
				  pixels[index + 3] = 255;
			  } else if (c==1) {
				  pixels[index + 0] = 0;
				  pixels[index + 1] = 255;
				  pixels[index + 2] = 50;
				  pixels[index + 3] = 255;
			  } else {
				  pixels[index + 0] = 0;
				  pixels[index + 1] = 255;
				  pixels[index + 2] = 255;
				  pixels[index + 3] = 255;
			  }
		  //beach
		  } else if (r<110){
			pixels[index + 0] = 255-random(30);
			pixels[index + 1] = 255-random(30);
			pixels[index + 2] = 0;
			pixels[index + 3] = 255;
		  //grass1
		  } else if (r<120){
			pixels[index + 0] = 0;
			pixels[index + 1] = 255-random(30);
			pixels[index + 2] = 0;
			pixels[index + 3] = 255;
		  //grass2
		  } else if (r<130){
			pixels[index + 0] = 0;
			pixels[index + 1] = 225-random(30);
			pixels[index + 2] = 0;
			pixels[index + 3] = 255;
		  //hills
		  } else if (r<140){
			pixels[index + 0] = 0;
			pixels[index + 1] = 200-random(30);
			pixels[index + 2] = 0;
			pixels[index + 3] = 255;
		  //mountains
		  } else if (r<150) {
			c = random(0,30);
			pixels[index + 0] = 180-c;
			pixels[index + 1] = 180-c;
			pixels[index + 2] = 180-c;
			pixels[index + 3] = 255;
		  //upper mountains
		  } else if (r<160){
			c = random(0,30);
			pixels[index + 0] = 200-c;
			pixels[index + 1] = 200-c;
			pixels[index + 2] = 200-c;
			pixels[index + 3] = 255;
		  //upper upper mountains
		  } else if (r<170){
			c = random(0,30);
			pixels[index + 0] = 220-c;
			pixels[index + 1] = 220-c;
			pixels[index + 2] = 220-c;
			pixels[index + 3] = 255-c;
		  //snow mountains
		  } else {
			c = random(0,30);
			pixels[index + 0] = 255-c;
			pixels[index + 1] = 255-c;
			pixels[index + 2] = 255-c;
			pixels[index + 3] = 255-c;
		  }
		  xoff += ammount;
		}
		yoff += ammount;
	  }
	  updatePixels();
	noLoop();
  
}
