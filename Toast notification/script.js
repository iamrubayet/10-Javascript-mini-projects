const btn = document.getElementById("btn")
const container = document.getElementById("contaier")


btn.addEventListener("click",()=>{
	createNotification();

});


function createNotification()
{
	const notif = document.createElement("div")
	notif.addClassList.add("toast");

	notif.innerText = "this is crazy";

	container.appendChild(notif);

	setTimeout(()=>{
		notif.remove();

	},300);

}