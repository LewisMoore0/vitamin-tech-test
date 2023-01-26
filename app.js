function getInputFromForm() {
    let eventValue = document.getElementById("event").value;
    let dayValue = document.getElementById("day").value;
    let timeValue = document.getElementById("time").value;

    injectDataToTable(eventValue, dayValue, timeValue)
}

let injectDataToTable = (event, day, time) => {
    document.getElementById(time).children[day].innerHTML = event
}