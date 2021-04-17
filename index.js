const countdownDateContainer = document.querySelector('#countdownDateContainer')
const countdownDate = new Date('2021-06-01')

const updateCountdown = (now) => {
  let timeLeft = countdownDate - now

  const daysLeft = Math.floor(timeLeft / 1000 / 60 / 60 / 24)
  timeLeft -= daysLeft * 1000 * 60 * 60 * 24

  const hoursLeft = Math.floor(timeLeft / 1000 / 60 / 60)
  timeLeft -= hoursLeft * 1000 * 60 * 60

  const minutesLeft = Math.floor(timeLeft / 1000 / 60)
  timeLeft -= minutesLeft * 1000 * 60

  const secondsLeft = Math.floor(timeLeft / 1000)

  const DD = daysLeft
  const HH = String(hoursLeft).padStart(2, '0')
  const MM = String(minutesLeft).padStart(2, '0')
  const SS = String(secondsLeft).padStart(2, '0')

  countdownDateContainer.innerHTML = `${DD}:${HH}:${MM}:${SS}`

  setTimeout(() => { updateCountdown(Date.now()) }, 250)
}

setTimeout(() => { updateCountdown(Date.now()) }, 250)
