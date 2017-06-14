document.body.style.backgroundColor = "red";

document.getElementsByTagName("H1")[0].style.backgroundColor = "blue";

document.body.style.fontFamily = "sans-serif";

document.getElementById("nickname").innerHTML = "P";

document.getElementById("favorites").innerHTML = "Cycling, learning to code, mountain biking";

document.getElementById("hometown").innerHTML = "Vacaville, California";

var x = document.getElementsByTagName('li');

for (var i = 0; i < x.length; i++){
	x[i].className = 'listitem';
}

document.querySelector('ul').style.color = "red";

var x = document.createElement('img');
x.setAttribute("src", "https://avatars0.githubusercontent.com/u/21691118?v=3&s=460");
document.body.appendChild(x);

