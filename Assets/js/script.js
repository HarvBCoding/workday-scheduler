let now = moment();
let currentDate = now.format("dddd, MMMM Do");
$("#currentDay").text(currentDate);

// depending on if the current time or moment is with in or past the set times for past present and future classes should be added and removed
// past(grey), current(red), future(green)

const checkHour = () => {
    // get the current hour
    let currentHour = moment().hour();

    // for each hour element turn it into an int
    // let hourEl = $(".hour")
    //  .attr("id")
    //  .replace("hour", "");
    // let hour = parseInt(hourEl)

    $(".hour").each(function(){
        let hourEl = $(".hour")
            .attr("id")
            .replace("hour", "");
        let hour = parseInt(hourEl)
        console.log(hour);
    })
    // console.log(hour);

    
    // if the hour is less than the current hour, add .past class
    // if the hour is equal to the current hour, add .present class
    // if the hour is greater than current hour, add .future class
    
}

checkHour();




// save function to save tasks to local storage
// function localstorage takes 2 arguments (name of array, JSON.stringify(arrayName))