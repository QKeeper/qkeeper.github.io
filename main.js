const tg = window.Telegram.WebApp

// document.querySelector(".id").textContent = ""

const id = tg.initTransferUnsafe.user.id
console.log(id)

const username = tg.initTransferUnsafe.user.username
console.log(username)

const name = tg.initTransferUnsafe.user.first_name
console.log(name)
