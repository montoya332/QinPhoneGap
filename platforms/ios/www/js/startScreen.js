/**
 * This function updates main content with Event Info
 *Displays:  Event Name , Check-in Progress Bar, Event Attendance Information and
 *  An last Checked in Attendee
 */
function upDateContent(Event){
var eventId = 57;
if (Event == "International Student Arrival Program") {eventId=56;}

content ='<h3><center>'+ Event +'</center></h3>';	
 content += '<table class="table table-bordered"><tr>';
 content += '<tr><td colspan="2"><center><h4>Last Check-in</h4></center></td></tr>';
    content += '<td style="min-width: 300px;" colspan="2" class="lastcheckin"><center><div id = "lastCheckinContent"></div></center></td></tr>' 
    content += '<p><center><button id="Scan" type="button" class="btn btn-primary" onclick="scanCode('+eventId+')">Scan Code</button></center></p></tr></table>';
$("#mainContainer").html(content);


}
function updateContentLastCheckin (scannedInfo){
var content='';
//content += '	Erik Montoya <br>  Student Id: 00857892 <br> Time: 5:13 PM';
content += scannedInfo;

$("#lastCheckinContent").html(content);
}

/**
 * This retrieves the HTML content of bar-graph and table that displays
 * the number of expecting attendees, the remaining count, and actual count
 */
function evGetCheckinCountAndBarGraph(checkinCount, totalCount)
{
    var content = "";
    
    content += '\
    <table id="checkedInTableId" class="table table-hover">\
    <tr><td colspan="2"><center><h4>Checkin Progress</h4></center></td></tr>\
    <tr><td class="progbar" colspan="2"><span id="barGraphTableId">' + evGetProgressBar(100 * checkinCount / totalCount) + '</span></td></tr>\
    <tr class="warning"><td><B>Expecting :</B></td><td><span class="badge" id="checkedInTableTotalCount">' + totalCount + '</span></td></tr>\
    <tr class="success"><td><B>Actual :</B></td><td><span class="badge" id="checkedInTableCheckinCount">' + checkinCount + '</span></td></tr>\
    <tr class="active"><td><B>Remaining :</B></td><td><span class="badge" id="checkedInTableRemainingCount">' + (totalCount - checkinCount) + '</span></td></tr>\
    <tr><td colspan="2">&nbsp;</td></tr>\
    <tr><td colspan="2"><center><h4>Last Check-ins</h4></center></td></tr>\
    <tr><td colspan="2" class="lastcheckin"><center><no one>';
	
content += '	Erik Montoya <br>  Student Id: 00857892 <br> Time: 5:13 PM</center></td></tr>\
    </table>';
    
    return content;
}
/**
 * This function returns the bar graph HTML content that displays the bargraph to the user
 *$("#barGraphTableId").html(evGetProgressBar(100 * count / total));
 */
function evGetProgressBar(percentFill)
{
    var content = "";
    
    if (percentFill >= 80) {
        content += '<div class="progress progress-striped">\
                        <div class="progress-bar progress-bar-success"  role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">\
                            <span class="sr-only">100% Complete</span>\
                        </div>\
                    </div>';
    }
    else {
        /* Empty bargraph doesn't look good :( */
        if (percentFill < 3) {
            percentFill = 3;
        }
        
        content += '<div class="progress progress-striped active">\
                        <div class="progress-bar"  role="progressbar" aria-valuenow="' + percentFill + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + percentFill + '%">\
                            <span class="sr-only">' + percentFill + '% Complete</span>\
                        </div>\
                    </div>';
    }

    return content;
}

/**
 * This function updates main content with design Team Info
 */
function upDateAboutContent(){
content ='<div ><b>SJSU Event Organizer</b> <BR/> <p>';
content +='SJSU Event Organizer is a San Jose State University developed event organizer and check-in system. The application helps create events, manage check-ins and provide real-time event statistics including total guests and other meaningful data to help the event organizers provide a world-class experience to the San Jose State University events.';
content +="</p> <img src='img/sampleTicket.png' width='90%'><BR/><p><center>  </img></center></p></div>";
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

/*

window.onload=function(){
    barContent = "";
   barContent += ' <div >';
    barContent += '<form name="signInForm" class="navbar-form navbar-left" role="form">';
     barContent += '<div class="form-group" name="fname">';
   barContent += '<input type="text" placeholder="Email" class="form-control">';
    barContent += '</div>';
   barContent += '<div class="form-group" name="password">';
   barContent += ' <input type="password" placeholder="Password" class="form-control">';
    barContent += ' </div>';
     barContent += ' <button type="submit" class="btn btn-success" onClick="Login(this.fname)" value="Submit form">Sign in</button>  <!--onclick="attemptLogin()"-->';
     barContent += ' </form>';
    barContent += ' </div><!--/.navbar-collapse -->' ;
    barContent += '<ul class="nav navbar-nav">';
	bodyContent = "";
   bodyContent += 	'<div class="sidebar">';
   bodyContent +=   ' <div class="alert alert-info">';
   bodyContent +=    '<div id="sideBarSiteDiv">';


	bodyContent += 	'<div id ="logInBar" ></div>';
	//bodyContent += 	'<img height="50%" width="90%" src="img/spartan_logo.gif">';
	bodyContent += '<hr>';
	bodyContent += '<p>Please login . . .</p>';
	bodyContent += 	'<hr>';
	bodyContent += 	'<br>';
    bodyContent +=  '</div>';
    bodyContent +=  '</div>';
    bodyContent += '</div>';
	
	
//	$("#bodyContainer").html(bodyContent);
//	$("#logInBar").html(barContent);
    //$("#leftside").html('<a href="#nav-panel" class="glyphicon glyphicon-list" "> </a>Events');
}

function Login(gg) { 
	
    barContent = "";
    barContent += '<a class="navbar-brand navbar-right">';
   barContent +=JSON.stringify('User = '+ gg) ;//document.getElementById("Info").submit();
	barContent +='</a>';
	bodyContent=""
	bodyContent+="<h1><center>Morning Event</center></h1><hr>"
	bodyContent+="<h3>Last Attendee Checked-In: </h3>"
	bodyContent+="<h3>Arturo Montoya  </h3>"
	bodyContent+="<h3>Student Id: 00857892  </h3>"
	bodyContent+="<h3>Time: 5:13 PM </h3><hr>"

	bodyContent+='<p><center><button id="Scan" type="button" class="btn btn-primary" onclick="scanCode()">Scan Code</button></center></p>';
  	$("#logInBar").html(barContent);
	$("#bodyContainer").html(bodyContent);

}
*/

