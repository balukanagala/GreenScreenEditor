var greenImage;
var backgroundImage;
var imgFile;
var canvas1; // for input(greenImage)
var canvas2; // for input2(backgroundImage)

function upload(inputNumber) {
    if (inputNumber === 1) {
        canvas1 = document.getElementById("canvas1");
        imgFile = document.getElementById("greenInput");
        greenImage = new SimpleImage(imgFile); // Creating object for image input
        greenImage.drawTo(canvas1);
    } 
    else if (inputNumber === 2) {
        canvas2 = document.getElementById("canvas2");
        imgFile = document.getElementById("backgroundInput");
        backgroundImage = new SimpleImage(imgFile); // Creating object for image input
        backgroundImage.drawTo(canvas2);
    }
}

function greenFilter() {
    var magicImage = greenImage; // creating a copy of the original image so that the original img remains the samebackgroundImage;
    for (var pixel1 of magicImage.values()) {
        if (pixel1.getGreen() > pixel1.getRed() + pixel1.getBlue()) {
           let x=pixel1.getX();
           let y=pixel1.getY();
           let newPixel=backgroundImage.getPixel(x,y);
           magicImage.setPixel(x,y,newPixel);
        }
    }
    var canvas3 = document.getElementById("canvas3");
    magicImage.drawTo(canvas3);
}
