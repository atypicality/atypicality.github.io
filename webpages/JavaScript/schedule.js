importantDates = [];
eventTypes = [];

let date = new Date();
var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
if(date.getMonth()==11) lastDay = new Date(date.getFullYear()+1, 0, 0);

var numberCount = 1;
var count = -1;
var ycount = 0;

let year = firstDay.getFullYear();
let month = firstDay.getMonth();
let day = firstDay.getDay();
let lday = lastDay.getDay();

// Array of month names
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

const dates = document.getElementsByTagName("li");

if(month+count==11) 
{
    count = 0-month-1;
    ycount++;
}
count++;
monthAndYear = document.getElementsByClassName("monthAndYear");
monthAndYear[0].innerHTML = months[month+count] + " - " + (year + ycount);

firstDay = new Date(year + ycount, month+count, 1);

if(month + count==11) lastDay = new Date(date.getFullYear()+1, 0, 0);
else{
    lastDay = new Date(year+ycount, month + count + 1, 0);
}

day = firstDay.getDay();
lday = lastDay.getDay();

//day 1;
dates[15+day].innerHTML = "1";
if(month == 11) numDays = new Date(year+ycount+1, 0, 0).getDate();
else
{
    numDays = new Date(year+ycount, month+count+1, 0).getDate();
}

numberCount = 1;

fetch('../webpages/JavaScript/dates.json') 
    .then(response => { 
        if (!response.ok) { 
            throw new Error('Network response was not ok'); 
        } 
        return response.json(); 
    }) 
    .then(data => { 
        data.dateItem.forEach(item => {
        // console.log(`Event: ${item.Event}`);
        // console.log(`Date: ${item.Date}`);
        // console.log('---');
        let newDate = new Date(item.Date);
        newDate.setDate(newDate.getDate()+1);
        importantDates.push(newDate);
        eventTypes.push(item.Event);
        });

        
        let date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        if(date.getMonth()==11) lastDay = new Date(date.getFullYear()+1, 0, 0);

        var numberCount = 1;
        var count = -1;
        var ycount = 0;

        let year = firstDay.getFullYear();
        let month = firstDay.getMonth();
        let day = firstDay.getDay();
        let lday = lastDay.getDay();

        // Array of month names
        const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
        ];

        const dates = document.getElementsByTagName("li");

        if(month+count==11) 
        {
            count = 0-month-1;
            ycount++;
        }
        count++;
        monthAndYear = document.getElementsByClassName("monthAndYear");
        monthAndYear[0].innerHTML = months[month+count] + " - " + (year + ycount);

        firstDay = new Date(year + ycount, month+count, 1);

        if(month + count==11) lastDay = new Date(date.getFullYear()+1, 0, 0);
        else{
            lastDay = new Date(year+ycount, month + count + 1, 0);
        }

        day = firstDay.getDay();
        lday = lastDay.getDay();

        //day 1;
        dates[15+day].innerHTML = "1";
        if(month == 11) numDays = new Date(year+ycount+1, 0, 0).getDate();
        else
        {
            numDays = new Date(year+ycount, month+count+1, 0).getDate();
        }

        numberCount = 1;
        for(var i = 15+day; i < 15+day+numDays; i++)
        {
            dates[i].innerHTML = numberCount;
            dates[i].style.color = "grey";
            dates[i].innerHTML = "<div onmouseover='resetEvent()'>" + numberCount + "</div>";
            for(var j = 0; j < importantDates.length; ++j)
            {
                if(new Date(year+ycount,month+count,numberCount).getDate()==importantDates[j].getDate()
                && new Date(year+ycount,month+count,numberCount).getMonth()==importantDates[j].getMonth()
                && new Date(year+ycount,month+count,numberCount).getYear()==importantDates[j].getYear())
                {
                    console.log(importantDates[j]);
                    if(eventTypes[j]=="Dance Workshop") dates[i].innerHTML = "<div class='workshop' onmouseover='workshopDes()'>" + numberCount + "</div>";
                    if(eventTypes[j]=="EBoard Meeting") dates[i].innerHTML = "<div class='eboard' onmouseover='eboardDes()'>" + numberCount + "</div>";
                    if(eventTypes[j]=="Youtube Upload") dates[i].innerHTML = "<div class='video' onmouseover='videoDes()'>" + numberCount + "</div>";
            
                } 
            }
                if(numberCount == date.getDate() && month+count==date.getMonth() && year+ycount==date.getFullYear())
                { 
                    dates[i].innerHTML = "<div class='active'>" + numberCount + "</div>";
                    if(new Date(year+ycount,month+count,numberCount).getDay()==0)
                    { 
                        dates[i].innerHTML = "<div class='active' onmouseover='workshopDes()'>" + numberCount + "</div>";
                    }
                    if(new Date(year+ycount,month+count,numberCount).getDay()==3 || new Date(year+ycount,month+count,numberCount).getDay()==5)
                    { 
                        dates[i].innerHTML = "<div class='active' onmouseover='videoDes()'>" + numberCount + "</div>";
                    }
                    if(new Date(year+ycount,month+count,numberCount).getDay()==4)
                    { 
                        dates[i].innerHTML = "<div class='active' onmouseover='eboardDes()'>" + numberCount + "</div>";
                    }
                }
                numberCount++;
            }
            
            //dates for next month
            numberCount = 1
            for(var i = 15+day+numDays; i < 57; i++)
            {
                dates[i].innerHTML = numberCount;
                dates[i].style.color = "whitesmoke";
                numberCount++;
            }

            if(month == 0) lastMonth = new Date(year+ycount-1, 11, 0).getDate();
            else 
            {
                lastMonth = new Date(year+ycount, month+count, 0).getDate();
            }
            
            //dates before this month
            numberCount = 0;
            for(var i = 14 + day; i >= 15; i--)
            {
                dates[i].innerHTML = lastMonth+numberCount;
                dates[i].style.color = "whitesmoke";
                --numberCount;
            }
    }) 
    .catch(error => { 
        console.error('There was a problem with the fetch operation:', error); 
    }); 

function next()
{
    if(month+count==11) 
    {
        count = 0-month-1;
        ycount++;
    }
    count++;
    monthAndYear = document.getElementsByClassName("monthAndYear");
    monthAndYear[0].innerHTML = months[month+count] + " - " + (year + ycount);

    firstDay = new Date(year + ycount, month+count, 1);
    if(month + count==11) lastDay = new Date(date.getFullYear()+1, 0, 0);
    else{
        lastDay = new Date(year+ycount, month + count + 1, 0);
    }

    day = firstDay.getDay();
    lday = lastDay.getDay();

    //day 1;
    dates[15+day].innerHTML = "1";
    if(month == 11) numDays = new Date(year+ycount+1, 0, 0).getDate();
    else
    {
        numDays = new Date(year+ycount, month+count+1, 0).getDate();
    }

    numberCount = 1
    for(var i = 15+day; i < 15+day+numDays; i++)
    {
        dates[i].innerHTML = numberCount;
        dates[i].style.color = "grey";
        dates[i].innerHTML = "<div onmouseover='resetEvent()'>" + numberCount + "</div>";
        for(var j = 0; j < importantDates.length; ++j)
        {
            if(new Date(year+ycount,month+count,numberCount).getDate()==importantDates[j].getDate()
            && new Date(year+ycount,month+count,numberCount).getMonth()==importantDates[j].getMonth()
            && new Date(year+ycount,month+count,numberCount).getYear()==importantDates[j].getYear())
            {
                console.log(importantDates[j]);
                if(eventTypes[j]=="Dance Workshop") dates[i].innerHTML = "<div class='workshop' onmouseover='workshopDes()'>" + numberCount + "</div>";
                if(eventTypes[j]=="EBoard Meeting") dates[i].innerHTML = "<div class='eboard' onmouseover='eboardDes()'>" + numberCount + "</div>";
                if(eventTypes[j]=="Youtube Upload") dates[i].innerHTML = "<div class='video' onmouseover='videoDes()'>" + numberCount + "</div>";
        
            } 
        }
        if(numberCount == date.getDate() && month+count==date.getMonth() && year+ycount==date.getFullYear())
        { 
            dates[i].innerHTML = "<div class='active'>" + numberCount + "</div>";
            if(new Date(year+ycount,month+count,numberCount).getDay()==0)
            { 
                dates[i].innerHTML = "<div class='active' onmouseover='workshopDes()'>" + numberCount + "</div>";
            }
            if(new Date(year+ycount,month+count,numberCount).getDay()==3 || new Date(year+ycount,month+count,numberCount).getDay()==5)
            { 
                dates[i].innerHTML = "<div class='active' onmouseover='videoDes()'>" + numberCount + "</div>";
            }
            if(new Date(year+ycount,month+count,numberCount).getDay()==4)
            { 
                dates[i].innerHTML = "<div class='active' onmouseover='eboardDes()'>" + numberCount + "</div>";
            }
        }
        
        numberCount++;
    }

    //dates for next month
    numberCount = 1
    for(var i = 15+day+numDays; i < 57; i++)
    {
        dates[i].innerHTML = numberCount;
        dates[i].style.color = "whitesmoke";
        numberCount++;
    }

    if(month == 0) lastMonth = new Date(year+ycount-1, 11, 0).getDate();
    else 
    {
        lastMonth = new Date(year+ycount, month+count, 0).getDate();
    }

    //dates before this month
    numberCount = 0;
    for(var i = 14 + day; i >= 15; i--)
    {
        dates[i].innerHTML = lastMonth+numberCount;
        dates[i].style.color = "whitesmoke";
        --numberCount;
    }

}

function prev()
{
    if(month+count==0) 
    {
        count = 12-month;
        ycount--;
    }
    count--;
    monthAndYear = document.getElementsByClassName("monthAndYear");
    monthAndYear[0].innerHTML = months[month+count] + " - " + (year + ycount);

    firstDay = new Date(year + ycount, month+count, 1);
    if(month + count==0) lastDay = new Date(date.getFullYear()-1, 11, 0);
    else{
        lastDay = new Date(year+ycount, month + count - 1, 0);
    }

    day = firstDay.getDay();
    lday = lastDay.getDay();

    //day 1;
    dates[15+day].innerHTML = "1";
    if(month == 11) numDays = new Date(year+ycount+1, 0, 0).getDate();
    else
    {
        numDays = new Date(year+ycount, month+count+1, 0).getDate();
    }

    numberCount = 1
    for(var i = 15+day; i < 15+day+numDays; i++)
    {
        dates[i].innerHTML = numberCount;
        dates[i].style.color = "grey";
        dates[i].innerHTML = "<div onmouseover='resetEvent()'>" + numberCount + "</div>";
        for(var j = 0; j < importantDates.length; ++j)
        {
            if(new Date(year+ycount,month+count,numberCount).getDate()==importantDates[j].getDate()
            && new Date(year+ycount,month+count,numberCount).getMonth()==importantDates[j].getMonth()
            && new Date(year+ycount,month+count,numberCount).getYear()==importantDates[j].getYear())
            {
                console.log(importantDates[j]);
                if(eventTypes[j]=="Dance Workshop") dates[i].innerHTML = "<div class='workshop' onmouseover='workshopDes()'>" + numberCount + "</div>";
                if(eventTypes[j]=="EBoard Meeting") dates[i].innerHTML = "<div class='eboard' onmouseover='eboardDes()'>" + numberCount + "</div>";
                if(eventTypes[j]=="Youtube Upload") dates[i].innerHTML = "<div class='video' onmouseover='videoDes()'>" + numberCount + "</div>";
            
            } 
        }
        if(numberCount == date.getDate() && month+count==date.getMonth() && year+ycount==date.getFullYear())
        { 
            dates[i].innerHTML = "<div class='active'>" + numberCount + "</div>";
            if(new Date(year+ycount,month+count,numberCount).getDay()==0)
            { 
                dates[i].innerHTML = "<div class='active' onmouseover='workshopDes()'>" + numberCount + "</div>";
            }
            if(new Date(year+ycount,month+count,numberCount).getDay()==3 || new Date(year+ycount,month+count,numberCount).getDay()==5)
            { 
                dates[i].innerHTML = "<div class='active' onmouseover='videoDes()'>" + numberCount + "</div>";
            }
            if(new Date(year+ycount,month+count,numberCount).getDay()==4)
            { 
                dates[i].innerHTML = "<div class='active' onmouseover='eboardDes()'>" + numberCount + "</div>";
            }
        }
        numberCount++;
    }

    //dates for next month
    numberCount = 1
    for(var i = 15+day+numDays; i < 57; i++)
    {
        dates[i].innerHTML = numberCount;
        dates[i].style.color = "whitesmoke";
        numberCount++;
    }

    if(month == 0) lastMonth = new Date(year+ycount-1, 11, 0).getDate();
    else 
    {
        lastMonth = new Date(year+ycount, month+count, 0).getDate();
    }

    //dates before this month
    numberCount = 0;
    for(var i = 14 + day; i >= 15; i--)
    {
        dates[i].innerHTML = lastMonth+numberCount;
        dates[i].style.color = "whitesmoke";
        --numberCount;
    }
}

var eventDes = document.getElementById("eventDescription");
function videoDes()
{
    eventDes.innerHTML = "Youtube Videos posted <a href='https://www.youtube.com/@RPIEighthWonder'> here </a> ";
}

function workshopDes()
{
    eventDes.innerHTML = "Hosted 2pm weekly at <a href='https://union.rpi.edu/campus-recreation/'> RPI Mueller Center </a> ";
}

function eboardDes()
{
    eventDes.innerHTML = "6-8 Eboard meeting at <a href='https://union.rpi.edu/campus-recreation/'> RPI Mueller Center </a> ";
}
function resetEvent()
{
    eventDes.innerHTML = "No event happening at this date.";
}