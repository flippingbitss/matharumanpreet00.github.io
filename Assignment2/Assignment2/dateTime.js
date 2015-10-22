
var date = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function dayCreate(day) {
    var assign;
    var currentDate;
    if (day === 1 || day === 21 || day === 31)
        assign = "st";
    else if (day === 3 || day === 23)
        assign = "rd";
    else
        assign = "th";
    currentDate = day + assign;
    return currentDate;
}
var currentMonth = months[date.getMonth()];


