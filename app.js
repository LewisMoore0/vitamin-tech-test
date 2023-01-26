function getInputFromForm() {
    let eventValue = document.getElementById("event").value;
    let dayValue = document.getElementById("day").value;
    let timeValue = document.getElementById("time").value;

    injectDataToTable(eventValue, dayValue, timeValue)
}

const injectDataToTable = (event, day, time) => {
    document.getElementById(time).children[day].innerHTML = event
    changeBackgroundColour(day, time)
}

const changeBackgroundColour = (day, time) => {
    document.getElementById(time).children[day].style.backgroundColor = 'cyan'
}