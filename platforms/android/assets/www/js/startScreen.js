/**
 * This function updates main content with Event Info
 *Displays:  Event Name , Check-in Progress Bar, Event Attendance Information and
 *  An last Checked in Attendee
 */
 
function createEventPage(eventName, eventID){
$('#mypanel').panel('toggle');
content ='<h3><center>'+ eventName +'</center></h3>';	
 content += '<table class="table"><tr>';
 content += '<tr><td colspan="2"><center><h4>Last Check-in</h4></center></td></tr>';
    content += '<td style="min-width: 300px;" colspan="2" class="lastcheckin"><center><div id = "lastCheckinContent"></div></center></td></tr>' 
    content += '<p><center><button id="Scan" type="button" class="btn btn-primary" onclick="scanCode('+eventID+')">Scan Code</button></center></p></tr></table>';
$("#mainContainer").html(content);


}
function updateContentLastCheckin (scannedInfo){
var content='';
//content += '	Erik Montoya <br>  Student Id: 00857892 <br> Time: 5:13 PM';
content += scannedInfo;

$("#lastCheckinContent").html(content);
}


	<!--------------------- Left Panel --------------------------->
// Creating panel                  
	$(document).one('click', '#create', createPanel);
	
function validPasscode(data){
		if (data == "Invalid Passcode" || data.length < 1)  { 
			alert("Not a Valid Passcode")
			}
			else{
				createPanel(data);
				}
		
		}
	
function createPanel (data) {
    var panel = '<div data-role="panel" id="mypanel" data-position="left" data-display="reveal" data-dismissible="false" data-theme="g">';
	panel += '<table width="100%" border="0" cellspacing="0"><tr><td><img src="img/user.png" width="32" height="22"></td><td><h5>Demo User</h5></td></tr></table></div>';
    if ($('[data-role=panel]').length === 0) {
        $('[data-role=header]').before(panel);
    }
   $('[data-role=page]').trigger('pagecreate');
   
   var retrievedJSON ='[{"eventID":"59","eventName":"Spring%202014%20Graduate%20Orientation%20-%20Afternoon%20Session","eventDate":"2014-01-15 13:30:00"},{"eventID":"66","eventName":"Dance%20Party","eventDate":"2014-04-10 21:00:00"},{"eventID":"58","eventName":"Test%20Event","eventDate":"2014-04-15 00:00:00"},{"eventID":"69","eventName":"Root%20Beer%20Kegger","eventDate":"2014-04-25 19:31:00"}]';
   
   
   var myArray = JSON.parse(data);
   
   		updatePanelList(myArray);

    setTimeout(function () {
        $('#mypanel').panel('open');
        $('#create').hide('slow');
    }, 200);
}


function updatePanelList(data) {
	var listview = updateEventsList(data);
	listview += updateTools();
    $('div.ui-panel-inner').append('<div class="panel-content" />');
    $('div.panel-content').append(listview).trigger('create');
	
}



/**
 * adds detail in Panel
 */
$(document).one('panelcreate', '#mypanel', function () {
	//var listview = updateEventsList();
	//listview += updateTools();
    //$('div.ui-panel-inner').append('<div class="panel-content" />');
    //$('div.panel-content').append(listview).trigger('create');
});

/**
 * Toggle myPanel
 */
$(document).on('click', 'a.toggle-panel', function () {
    $('#mypanel').panel('toggle');
});


/**
 * This function generates My Events with event buttons
 */

function  updateEventsList(data) {

	var content ='<div data-role="list-divider" ><hr><center> <h5>My Events</h5> </center><hr></div>';
	content += '<ul data-role="listview" data-inset="true">';
	for ( i=0;i<data.length;i++){
	content += List(data[i]['eventID'], "createEventPage",decodeURIComponent(data[i]['eventName']));	
	}
	content += '</ul>';
	return content;	
}     
 
 /**
 * This function creates lists for panel
 */
 function  List(id, onClick, data) {
  	var content =  ' <li><a id="' + id + '" onclick = "';
	content += onClick + "('"+ data +"',this.id"; 
	content += ')" >';
	content += data + '</a></li>';	
	return content;
  } 

/**
 * This function generates Tools with help and team contact button
 */   
  
  function  updateTools() {
	var content ='<br><div data-role="list-divider" ><hr><center> <h5>Tools</h5> </center><hr></div>'; 
	content += '<ul data-role="listview" data-inset="true">';
	content += List('helpButton',"upDatedesignTeamContent();" ,"Help");	
	content += List('contactButton',"upDateAboutContent();" ,"About");	
	content += '</ul>';
	
	return content;	
}     



/**
 * This function updates main content with design Team Info
 */
 
function upDateAboutContent(){
content ='<div ><b>SJSU Event Organizer</b> <BR/> <p>';
content +='SJSU Event Organizer is a San Jose State University developed event organizer and check-in system. The application helps create events, manage check-ins and provide real-time event statistics including total guests and other meaningful data to help the event organizers provide a world-class experience to the San Jose State University events.</p> ';
content += '<div class="alert alert-info" id="create"><div class="container"  style="width: auto;">';
content += '<h3><center>Please Scan Passcode to view Events</h3>';
content += '<a data-role="button" href="#"  data-icon="info">scan</a></center> </div></div>';

content +="<img src='img/sampleTicket.png' width='90%'><BR/><p><center>  </img></center></p></div>";
$("#mainContainer").html(content);
}


 /**
 * This function updates main content with Project Information
 * I believe it gives App a better GUI feel
 */
function upDatedesignTeamContent(){
content ='';
content +='<table id="checkedInTableId" class="table table-hover">';
content +='    <tr><td colspan="2"><center>';
content +='      <h4>Design Team</h4></center></td></tr>';
content +='    <tr>';
content +='      </tr>';
content +='    <tr class="active">';
content +='      <td>Arturo Montoya</td>';
content +='      <td>Web & Mobile Developer</td></tr>';
content +='    <tr class="active">';
content +='      <td>Erik Montoya</td>';
content +='    <td>Web & Mobile Developer</td></tr>';
content +='    <tr class="active">';
content +='      <td>Darryl DelaCruz</td>';
content +='    <td>Web & Mobile Developer</td></tr>';
content +='    <tr class="active">';
content +='      <td>Phuoc Tran</td>';
content +='    <td>Web & Mobile Developer</td></tr>';
content +='    <tr><td colspan="2">&nbsp;</td></tr>';
content +='    <tr><td colspan="2"><center><h4>Advisor</h4></center></td></tr>';
content +='    <tr class="active">';
content +='      <td>Preetpal Kang</td>';
content +='    <td>Embedded Systems Professor</td></tr>';
content +='    </table>';

$("#mainContainer").html(content);
}





