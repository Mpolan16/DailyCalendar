// date and time and refreshing every second
function refreshTime() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(refreshTime, 1000);

// Click event when you save the writing

$(".saveBtn").on("click", function() {

    var input = $(this).siblings(".textareawrapper").find("textarea").val().trim();
    var rowHour = $(this).parent().attr("id");

    localStorage.setItem(rowHour, input)

});

// for loop shorter version of:
//  $("#row9 .description").val(localStorage.getItem("row9"));
//  $("#row10 .description").val(localStorage.getItem("row10"));
function getStoredInput() {
    for (var i = 9; i < 18; i++) {
        $("#row" + i + " .description").val(localStorage.getItem("row" + i));
    };
};

getStoredInput();


var currentHour = moment().hours();
console.log(currentHour);
//color coordination
function colorTextArea() {
    $(".description").each(function() {
        var rowId = $(this).parent().parent().attr("id");
        var rowHour = rowId.substring(3);
        console.log(rowHour);
        $(this).removeClass("future past present");

        if (currentHour < rowHour) {
            $(this).addClass("future")
        } else if (currentHour > rowHour) {
            $(this).addClass("past")
        } else {
            $(this).addClass("present")
        };

    });
}

colorTextArea();
setInterval(colorTextArea, 1000);






