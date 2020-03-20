$(document).ready(()=>{
	TopGunPokeGO();
});

function TopGunPokeGO(){
	let hostName = location.host.split('.')[0];
	let sourceURL ;

	if (hostName === 'pkget')
		sourceURL = "https://cdn.jsdelivr.net/gh/GeorgioWan/TopGunPoke.js@master/src/TopGunFP.js";
	else
	{
		alert('Sorry, TopGunPoke only for pkget now :)');
		return true;
	}

	$.getScript(sourceURL, function(){
	   console.log("== TopGunPok GO! ==");
	});
}