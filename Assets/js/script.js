let now = moment();
let currentDate = now.format("dddd, MMMM Do");
$("#currentDay").text(currentDate);

// depending on if the current time or moment is with in or past the set times for past present and future classes should be added and removed
// past(grey), current(red), future(green)

const checkHour = () => {
    // get the current hour
    let currentHour = moment().hour();
    $(".description").each(function(){
        let hourSection = parseInt($(this).attr("id").split("-")[1]);
        
        if(hourSection < currentHour){
            $(this)
                .addClass("past")
        } else if (hourSection === currentHour){
            $(this)
                .removeClass("past")
            $(this)
                .addClass("present")
        } else if (hourSection > currentHour){
            $(this)
                .removeClass("past present")
            $(this)
                .addClass("future");
        }
    })
}

checkHour();




// save function to save tasks to local storage
// function localstorage takes 2 arguments (name of array, JSON.stringify(arrayName))