let now = moment();
let currentDate = now.format("dddd, MMMM Do");
$("#currentDay").text(currentDate);

// function to audit time
// pass element containing date to function as argument
// create a variable to hold the information needed from the element (maybe add an ID or value to compare time)
// use the information from the element to create a moment() and set the time for the past, present and future
// depending on if the current time or moment is with in or past the set times for past present and future classes should be added and removed
// past(grey), current(red), future(green)

const checkHour = () => {
    // get the current hour
    
    // let hour = play with the idea of using an id to set the time and use attribute to retrieve that id
    console.log(hour);
    // for each hour get the id and text
    // if the hour is greater than the past, add .past class
    // if the hour is equal to present, add .present class
    // if the hour is greater than future, add .future class

    let past = moment().subtract(1, 'hour');
    let present = moment();
    let future = moment().add(1, 'hour');
    
}

checkHour();




// save function to save tasks to local storage
// function localstorage takes 2 arguments (name of array, JSON.stringify(arrayName))