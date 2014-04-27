/* Arrays are zero index! Change the activity[num] to corresond 
 * to the number of the image name. The random generator randomly
 * generates an image that is between 8-as many as there are 0-3 
 * are reserved for the first set of questions and 4-7 are reserved
 * for the second set of questions */

var arrayImg = new Array();

/* Change 38 to however many images you have */
for (var i = 1; i <= 39; i++) { 
	arrayImg[i] = "image" + i + ".png";
}

var activity = new Array(); 
activity[0] = "Blank";
activity[1] = "Blank";
activity[2] = "Blank";
activity[3] = "Blank";
activity[4] = "Blank";
activity[5] = "Blank";
activity[6] = "Blank";
activity[7] = "Blank";
activity[8] = "Kickball!";
activity[9] = "Soccer!";
activity[10] = "Football!";
activity[11] = "Tennis!";
activity[12] = "Circus!";
activity[13] = "Dragonboat racing!";
activity[14] = "Start a Company!";
activity[15] = "Skydiving!";
activity[16] = "Run!";
activity[17] = "Start a Company!";
activity[18] = "Music Festival!";
activity[19] = "Run!";
activity[20] = "Run!";
activity[21] = "Start a Company!";
activity[22] = "Music Festival!";
activity[23] = "Run!";
activity[24] = "Start a Company!";
activity[25] = "Music Festival!";
activity[26] = "Run!";
activity[27] = "Start a Company!";
activity[28] = "Music Festival!";
activity[29] = "Run!";
activity[30] = "Run!";
activity[31] = "Start a Company!";
activity[32] = "Music Festival!";
activity[33] = "Run!";
activity[34] = "Start a Company!";
activity[35] = "Start a Company!";
activity[36] = "Run!";
activity[37] = "Start a Company!";
activity[38] = "Music Festival!";
activity[39] = "Music Festival!";


/*var choiceOne = null; 
var choiceTwo = null; 

document.onclick = clickListener;

function clickListener(e) {   
    var clickedElement = (window.event)
                        ? window.event.srcElement
                        : e.target,
        tags = document.getElementsByTagName(clickedElement.tagName);
                         
    for(var i = 0; i < tags.length; ++i) {
      if(tags[i]==clickedElement) {
        arrayWithElements.push({tag:clickedElement.tagName,index:i}); 
        //console.log(arrayWithElements);
      }    
    }
}*/

var choice = 0 

function changeImage() {

	switch(choice) {
		case 0: 
			document.getElementById('img1').src = 'image4.png';
			document.getElementById('img2').src = 'image5.png';
			document.getElementById('img3').src = 'image6.png';
			document.getElementById('img4').src = 'image7.png';
			document.getElementById('cap1').innerHTML ='Activize';
			document.getElementById('cap2').innerHTML ='Activize';
			document.getElementById('cap3').innerHTML ='Activize';
			document.getElementById('cap4').innerHTML ='Activize';
			document.getElementById('instruct').innerHTML ='Activize!';
			choice = 1; 
			break;
		case 1: 
			getRandomActivity('img1', 'cap1');
			getRandomActivity('img2', 'cap2');
			getRandomActivity('img3', 'cap3');
			getRandomActivity('img4', 'cap4');
			document.getElementById('instruct').innerHTML ='Activize!';
			choice = 2;
			break;
		case 2: 
			document.getElementById('img1').src = 'image0.png';
			document.getElementById('img2').src = 'image1.png';
			document.getElementById('img3').src = 'image2.png';
			document.getElementById('img4').src = 'image3.png';
			document.getElementById('cap1').innerHTML ='Activize!';
			document.getElementById('cap2').innerHTML ='Activize!';
			document.getElementById('cap3').innerHTML ='Activize!';
			document.getElementById('cap4').innerHTML ='Activize!';
			document.getElementById('instruct').innerHTML ='Pick your mood and Activize!';
			choice = 0;
			break;
		default:
			break;
	}
}

function intro() {
	var d=new Date();
	var h=d.getHours();
	var weekday=new Array(7);

		weekday[0]="Sunday";
		weekday[1]="Monday";
		weekday[2]="Tuesday";
		weekday[3]="Wednesday";
		weekday[4]="Thursday";
		weekday[5]="Friday";
		weekday[6]="Saturday";
	
	var n = weekday[d.getDay()];
	var time = "";
	
	if (h >= 5 && h < 12) {
		time = "morning";
	} else if (h >= 12 && h <= 17) {
		time = "afternoon";
	} else if (h >= 18 && h <= 21) {
		time = "evening";
	} else {
		time = "night";
	}
	
	document.write("It's a beautiful " + n + " " + time + "!");
}

function getRandomImage(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = 8 + Math.floor(Math.random() * (imgAr.length-8));
    var img = imgAr[num];
    var imgStr = '<img src="' + path + img + '" width="400" height="400">';
    document.write(imgStr); 
    document.write('<h3>' + activity[num] + '</h3>'); 
    document.close();
}

function getRandomActivity(imageId, capId) {
    var num = 8 + Math.floor(Math.random() * (arrayImg.length-8));
    var img = arrayImg[num];

    document.getElementById(imageId).src = img; 
    document.getElementById(capId).innerHTML = activity[num];
}

