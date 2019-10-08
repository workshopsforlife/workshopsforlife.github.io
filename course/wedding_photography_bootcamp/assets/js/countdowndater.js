//console.log(document.getElementsByClassName("boxed-countdown")[0].setAttribute("data-countdown","07/20/2019 15:51:00"));
//console.log(Date.now()/1000);
var currentdate = new Date();
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
//console.log(datetime);

var currentyear = currentdate.getFullYear();
var currentmonth = currentdate.getMonth()+1;
var currentday = currentdate.getDate()


var currenthour = currentdate.getHours()
//console.log(currenthour);
for(var addhour = 0; addhour < 5; addhour++){
    //console.log(addhour);
    if(currenthour >= 24){
        //console.log(currenthour);
		currenthour = 0;
        if(currentday == 31 && currentmonth == 12){
            currentyear = currentyear + 1;
            currentday = 1;
            currentmonth = 1;
        }else{
            var cday = 0;
            switch(currentmonth){
                case 1:
                    cday = 31;
                    break;
                case 2:
                    cday = 28;
                    break;
                case 3:
                    cday = 31;
                    break;
                case 4:
                    cday = 30;
                    break;
                case 5:
                    cday = 31;
                    break;
                case 6:
                    cday = 30;
                    break;
                case 7:
                    cday = 31;
                    break;
                case 8:
                    cday = 31;
                    break;
                case 9:
                    cday = 30;
                    break;
                case 10:
                    cday = 31;
                    break;
                case 11:
                    cday = 30;
                    break;
                case 12:
                    cday = 31;
                    break;   
            }
            if(currentday == cday){
                currentday = 1
                if(currentmonth == 12){
                    currentmonth = 1;
                }
                else{
                    currentmonth + 1;
                }
            }
            else{
                currentday = currentday + 1;
                if(currentmonth == 12){
                    currentmonth = 1;
                }
                else{
                    currentmonth + 1;
                }
            }
        }
        
    }
    currenthour = currenthour + 1;
	//console.log(currenthour);
}

//console.log(currenthour);


if(currenthour >= 24){
    //console.log(currenthour);
    currenthour = 0;
    if(currentday == 31 && currentmonth == 12){
        currentyear = currentyear + 1;
        currentday = 1;
        currentmonth = 1;
    }else{
        var cday = 0;
        switch(currentmonth){
            case 1:
                cday = 31;
                break;
            case 2:
                cday = 28;
                break;
            case 3:
                cday = 31;
                break;
            case 4:
                cday = 30;
                break;
            case 5:
                cday = 31;
                break;
            case 6:
                cday = 30;
                break;
            case 7:
                cday = 31;
                break;
            case 8:
                cday = 31;
                break;
            case 9:
                cday = 30;
                break;
            case 10:
                cday = 31;
                break;
            case 11:
                cday = 30;
                break;
            case 12:
                cday = 31;
                break;
        }
        if(currentday == cday){
            currentday = 1
            if(currentmonth == 12){
                currentmonth = 1;
            }
            else{
                currentmonth + 1;
            }
        }
        else{
            currentday = currentday + 1;
            if(currentmonth == 12){
                currentmonth = 1;
            }
            else{
                currentmonth + 1;
            }
        }
    }

}



var currentminute = currentdate.getMinutes();
for(var addminute = 0; addminute < 30; addminute++){
    if (currentminute > 59){
        currentminute = 0;
    }
    currentminute = currentminute + 1;
}
var currentseconds = currentdate.getSeconds();
//console.log(currentseconds);
var datetime = "";
    if(currentmonth < 10){
        datetime = datetime + "0" + currentmonth  + "/";  
    }else{
        datetime = datetime + currentmonth  + "/";
    }
	if(currentday<10){
        datetime = datetime + "0" + currentday + "/";
    }else{
        datetime = datetime + currentday + "/";
    }
    

datetime = datetime + currentyear + " ";

if(currenthour < 10){
    datetime = datetime + "0" + currenthour + ":";
}
else{
    datetime = datetime + currenthour + ":";
}
if(currentminute < 10){
    datetime = datetime + "0" + currentminute + ":";
}else{
    datetime = datetime + currentminute + ":";
}
if(currentseconds < 10){
    datetime = datetime + "0" + currentseconds;
}else{
    datetime = datetime + currentseconds;
}
//console.log(datetime);
//console.log(document.getElementsByClassName("boxed-countdown")[0].getAttribute("data-countdown"));
            document.getElementsByClassName("boxed-countdown")[0].setAttribute("data-countdown",datetime);
//console.log(datetime);
