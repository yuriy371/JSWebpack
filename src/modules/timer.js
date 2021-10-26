const timer = (deadline) => {
    let timersHours = document.getElementById("timer-hours")
    let timersMinutes = document.getElementById("timer-minutes")
    let timersSeconds = document.getElementById("timer-seconds")

    let getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let hours = Math.floor(timeRemaining / 60 / 60)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return { timeRemaining, hours, minutes, seconds }
    }

    let zeroNumber = (n) => {
        if (n < 10)
            return "0" + n;
        return n;
    }

    let updateClock = setInterval(() => {
        let getTime = getTimeRemaining()

        timersHours.textContent = zeroNumber(getTime.hours)
        timersMinutes.textContent = zeroNumber(getTime.minutes)
        timersSeconds.textContent = zeroNumber(getTime.seconds)

        if (getTime.timeRemaining < 0) {
            timersHours.textContent = zeroNumber(0)
            timersMinutes.textContent = zeroNumber(0)
            timersSeconds.textContent = zeroNumber(0)
            clearInterval(updateClock)
        }
    }, 1000)
}

export default timer