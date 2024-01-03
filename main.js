const tg = window.Telegram.WebApp


const id = tg.initTransferUnsafe.user.id
document.querySelector(".id").textContent = id


const username = tg.initTransferUnsafe.user.username
document.querySelector(".username").textContent = username

const name = tg.initTransferUnsafe.user.first_name
document.querySelector(".name").textContent = name