var email;
var adresa;
var problem;
var resenje;


function salji(){

email = (document.getElementById('mejl').value);

adresa = (document.getElementById('adr').value);

problem = (document.getElementById('problem').value);

resenje = (document.getElementById('resenje').value);
console.log(resenje);

$.post("http://10.120.192.2:8081/open-data/api",
	{
	"email":email,
	"latitude":lat.
	"longitude":lng,
	"problem":problem,
	"solution": resenje,
	"status" : false;
	}
	
};

console.log(email);
console.log(adresa);
console.log(problem);
console.log(resenje);