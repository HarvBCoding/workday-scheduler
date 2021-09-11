$(document).ready(function () {
    const hours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    let body = document.body;
    const now = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric'};
    const currentHour = now.getHours();
    
  
    $("#currentDay").text(getFormattedDate());
    function getFormattedDate() {
      return now.toLocaleDateString("en-US", options);
    }
    
    function displayHour(hour) {
        if (hour > 12) {
        return (hour - 12) + "PM";
        } else if (hour === 12) {
            return "12PM";
        } else {
            return hour + "AM";
        }
        
    }
  
    function getRow(hour) {
        let rowDiv = document.createElement("div");
        rowDiv.setAttribute("class", "row time-block");
        rowDiv.setAttribute("id", `hour-${hour}`);

        let labelDiv = document.createElement("div");
        labelDiv.setAttribute("class", "col-md-1 hour");
        labelDiv.setAttribute("id", `hour-${hour}-label`);
        labelDiv.textContent = displayHour(hour);


        let textArea = document.createElement("textarea");
        textArea.setAttribute("class", "col-md-10 description past");
        textArea.setAttribute("id", `textarea-${hour}`);
        if (localStorage.getItem(hour)){
            textArea.textContent = localStorage.getItem(hour);
        }

        
        if (hour === currentHour) {
            textArea.classList.remove("past")
            textArea.classList.add("present");
        } else if (hour > currentHour) {
            textArea.classList.remove("past", "present")
            textArea.classList.add("future");
        }


        let saveBtn = document.createElement("button");
        saveBtn.setAttribute("id", `btn-${hour}`);
        saveBtn.setAttribute("class", "btn saveBtn col-md-1");
        saveBtn.addEventListener("click", function(){
            const appointment = document.querySelector(`#textarea-${hour}`).value;
            localStorage.setItem(hour, appointment);
        })
        
        let icon = document.createElement("i");
        icon.setAttribute("class", "fas fa-save");

        body.appendChild(rowDiv);

        rowDiv.appendChild(labelDiv);
        rowDiv.appendChild(textArea);
        rowDiv.appendChild(saveBtn);
        saveBtn.appendChild(icon);
        
    }

    // function to check time and apply past, present or future

    
    for (let i = 0; i < hours.length; i++) {
      getRow(hours[i]);
    }
  });