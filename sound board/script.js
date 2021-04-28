const sounds = ["applause","boo","wrong","gasp","tada","victory"];


sounds.forEach((sound)=>{
	const btn = document.createElement("button");
	btn.classList.add("btn");

	btn.innerText = sound;

	btn.addEventListener("click",()=>{

		stopsongs();

		document.getElementById(sound).play();

	});
	document.body.appendchild("btn");


});


function stopsongs(){
	sounds.forEach((sound)=>{
		const song = document.getElementByid(sound);

		song.pause();
		song.currentime=0;




		});
	













});