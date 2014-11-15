/*function scanCode(){

  var scanner = cordova.require("com.phonegap.plugins.barcodescanner.barcodescanner");
  scanner.scan(
    function (result) {     
       sendCodeToServer(result.text);
    },
    function (error) {
        alert("Scanning failed: " + error);
    }    
  );    
}	*/
function scanCode(eventId){
 //alert (eventId);
    cordova.plugins.barcodeScanner.scan(
                                        function (result) {
                                        sendCodeToServer(result.text,eventId);
                                        }, 
                                        function (error) {
                                        update("Scanning failed: " + error);
                                        });
    
/*
 var scanner = cordova.require("com.phonegap.plugins.barcodescanner.barcodescanner");
  scanner.scan(
    function (result) {  
       sendCodeToServer(result.text,eventId);
    },
    function (error) {
        update("Scanning failed: " + error);
    }    
  );*/
}	
function test(Turn_Off_Event,Event){
var el = document.getElementById(Turn_Off_Event);
  el.style['display'] = false ? 'block' : 'none';
  scanCode_Event (Event);
//$("#Body").html(  Turn_Off_Event);
}
var pictureSource;   // picture source
var destinationType; // sets the format of returned value
// Wait for device API libraries to load



document.addEventListener("deviceready",onDeviceReady,false);// device APIs are available

function onDeviceReady() {
  pictureSource=navigator.camera.PictureSourceType;
  destinationType=navigator.camera.DestinationType;  
}





function onPhotoDataSuccess(imageData) { 
    // Called when a photo is successfully retrieved// Uncomment to view the base64-encoded image data  // console.log(imageData); 
    // Get image handle
    var smallImage = document.getElementById('smallImage'); // Unhide image elements
    smallImage.style.display = 'block';// Show the captured photo// The inline CSS rules are used to resize the image
    smallImage.src = "data:image/jpeg;base64," + imageData;
}		


function capturePhoto() {// A button will call this function
// Take picture using device camera and retrieve image as base64-encoded string
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { 
      quality: 50,
      destinationType: destinationType.DATA_URL 
    }
  );
}


function onFail(message) {    // Called if something bad happens.
    alert('Failed because: ' + message);
}


function sendCodeToServer (qrcode, eventId) {
  data = {'qrcode': qrcode , 'event': eventId};
  $.post(
    "http://54.215.194.44/app_checkin.php", 
    data,
    function (data){
      updateContentLastCheckin (data);
    }
  );
}
/*
function sendCodeToServer_Event (qrcode) {
  //alert(qrcode + Event );
  data = {'qrcode': qrcode};
  $.post(
    "http://54.215.194.44/dummyAjaxReceive.php", 
    data,
    function (data){
      alert (data );
      //scanCode();
      
    }
  );
}
*/