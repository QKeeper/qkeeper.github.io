const tg = window.Telegram.WebApp;

const id = tg.initDataUnsafe.user.id;
document.querySelector("#id").textContent = id;

const username = tg.initDataUnsafe.user.username;
document.querySelector("#username").textContent = username;

const first_name = tg.initDataUnsafe.user.first_name;
document.querySelector("#name").textContent = first_name;

data = {
	mail: document.querySelector("#user-input").textContent,
	foo: "bar",
};

document.querySelector("#send").addEventListener("click", () => {
	tg.sendData(JSON.stringify(data));
});
