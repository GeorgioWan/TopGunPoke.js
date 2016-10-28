$(document).ready(()=>{
	TopGunPokeGO();
});

function TopGunPokeGO(){
	let hostName = location.host.split('.')[0];
	let sourceURL ;

	if (hostName === 'pkget')
		sourceURL = "https://rawgit.com/GeorgioWan/TopGunPoke.js/master/src/TopGunPK.js";
	else if (hostName === 'poke5566')
		sourceURL = "https://rawgit.com/GeorgioWan/TopGunPoke.js/master/src/TopGun56.js";
	else if (hostName === 'findpkm')
		sourceURL = "https://rawgit.com/GeorgioWan/TopGunPoke.js/master/src/TopGunFP.js";
	else
	{
		alert('Sorry, TopGunPoke only for pkget, poke5566 & findpkm now :)');
		return true;
	}

	$.getScript(sourceURL, function(){
	   console.log("== TopGunPok GO! ==");
	});
}