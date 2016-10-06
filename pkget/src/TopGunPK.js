/*
  DOM
*/
var ctl, ig, sp, el;
ctl = document.createElement('span');

ig = document.createElement('div');
ig.className = 'input-group input-group-sm';
ig.style.position = 'absolute';
ig.style.bottom = '70px';
ig.style.width = '110px';
sp = document.createElement('span');
sp.id = 'addon-iv';
sp.className = 'input-group-addon';
sp.innerHTML = 'IV';
el = document.createElement('input');
el.className = 'form-control';
el.id = 'input-iv';
el.placeholder = 'IV';
el.value = '90';
el.setAttribute("aria-describedby", "addon-iv");
ig.appendChild(sp);
ig.appendChild(el);
ctl.appendChild(ig);

ig = document.createElement('div');
ig.className = 'input-group input-group-sm';
ig.style.position = 'absolute';
ig.style.bottom = '40px';
ig.style.width = '110px';
sp = document.createElement('span');
sp.id = 'addon-star';
sp.className = 'input-group-addon';
sp.innerHTML = '<span class="glyphicon glyphicon-star"></span>';
el = document.createElement('input');
el.className = 'form-control';
el.id = 'input-star';
el.placeholder = 'STAR';
el.value = '1';
el.setAttribute("aria-describedby", "addon-star");
ig.appendChild(sp);
ig.appendChild(el);
ctl.appendChild(ig);

el = document.createElement('button');
el.className = 'btn btn-sm btn-success';
el.id = 'get-custom';
el.style.position = 'absolute';
el.style.bottom = '10px';
el.style.width = '110px';
sp = document.createElement('span');
sp.className = 'glyphicon glyphicon-play';
el.appendChild(sp);
ctl.appendChild(el);
map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(ctl);
/*
  GLOBAL VAR
*/
var gStar = 1, 
		gIV = 90;
/*
  Document ready
*/
$(document).ready(function() {
    google.maps.event.addListener(map, "idle", on_idle), checkMarkerTimeout(), getLocation(),
    $("#get-custom").on("click", function() {
        gStar = parseInt($("#input-star")[0].value),
        gIV   = parseInt($("#input-iv")[0].value);
        try {
            for (var a = markers.length - 1; a >= 0; a--) {
            	if ( markers[a].iv === undefined || markers[a].iv < gIV && !(markers[a].text === '卡比獸' || markers[a].text === '乘龍' || parseInt(k.d1) === '快龍'))
            	{
            		markers[a].setMap(null), markers.splice(a, 1);
            	}
            }
        } catch (a) {}
        on_idle();
    });

    //timeout every 5 seconds
    setTimeout(findBestPokemon, 5000);
});
/*
	OVERWITE
*/
function SetMarkers(a, b, d) {
    var g, e, f = 0, c, l, h = "Y";
    $.each(b.pk123, function(b, k) {
        if ("78787878" != k.d8 && "^^^^^" != k.d9) {
        	_g = k.d9.split("^");
        	if ( (parseInt(k.d7) >= gStar || (_g[0] || _g[1] || _g[2])) && parseInt(_g[5]) >= gIV || parseInt(k.d1) === 131 || parseInt(k.d1) === 143 || parseInt(k.d1) === 149) {
	            h = "Y";
	            l = new google.maps.LatLng(k.d4,k.d5);
	            if (0 < markers.length)
	                for (var m = 0; m < markers.length; m++)
	                    if (k.d3 == markers[m].getTitle() && l.lat() == markers[m].getPosition().lat() && l.lng() == markers[m].getPosition().lng()) {
	                        h = "N";
	                        break
	                    }
	            if ("Y" == h) {
	                g = "";
	                e = 0;
	                c = right("00" + k.d1, 3);
	                "^^^^^" != k.d9 ? (m = k.d9.split("^"),
	                f = parseInt(m[5])) : f = 0;
	                switch (k.d7) {
	                case "5":
	                    80 <= f ? (g = "/images/blue_l/" + c + "_l.png",
	                    e = parseInt("6" + c)) : (g = "/images/" + c + ".png",
	                    e = parseInt("5" + c));
	                    break;
	                case "3":
	                    "004" == c ? 85 <= f ? (g = "/images/blue_m/" + c + "_m.png",
	                    e = parseInt("4" + c)) : (g = "/images/mm/" + c + ".png",
	                    e = parseInt("3" + c)) : 90 <= f ? (g = "/images/blue_m/" + c + "_m.png",
	                    e = parseInt("4" + c)) : (g = "/images/mm/" + c + ".png",
	                    e = parseInt("3" + c));
	                    break;
	                case "1":
	                    "001" == c || "007" == c ? 85 <= f ? (g = "/images/blue_s/" + c + "_s.png",
	                    e = parseInt("2" + c)) : (g = "/images/ss/" + c + ".png",
	                    e = parseInt(c)) : 95 <= f ? (g = "/images/blue_s/" + c + "_s.png",
	                    e = parseInt("2" + c)) : (g = "/images/ss/" + c + ".png",
	                    e = parseInt(c));
	                    break;
	                default:
	                    g = "/images/ss/" + c + ".png",
	                    e = parseInt(c)
	                }
	                m = new google.maps.Marker({
	                    text: pkms.pkms[k.d1].pokemon_name_zhtw,
	                    position: l,
	                    map: a,
	                    icon: g,
	                    title: k.d3,
	                    zIndex: e,
	                    iv: f
	                });
	                google.maps.event.addListener(m, "click", function(b, c) {
	                    return function() {
	                        var c = 0;
	                        isNaN(parseInt(k.d3)) || (c = new Date,
	                        myEndTime = new Date(parseInt(k.d3)),
	                        c = c.dateDiff("s", myEndTime),
	                        0 > c && (c = 0,
	                        b.setMap(null )));
	                        0 < c && (d.setContent(Get_infowindow(k, formatSecond(c))),
	                        isNaN(parseInt(k.d3)) || getSecs(b),
	                        d.open(a, b),
	                        clicktype = "click",
	                        google.maps.event.addListener(a, "click", function() {
	                            d.close()
	                        }))
	                    }
	                }(m, b));
	                navigator.userAgent.match(/android/i) || navigator.userAgent.match(/(iphone|ipod|ipad);?/i) || (google.maps.event.addListener(m, "mouseover", function(b, c) {
	                    return function() {
	                        if ("" == clicktype) {
	                            clearTimeout(myTimer);
	                            var c = 0;
	                            isNaN(parseInt(k.d3)) || (c = new Date,
	                            myEndTime = new Date(parseInt(k.d3)),
	                            c = c.dateDiff("s", myEndTime),
	                            0 > c && (c = 0,
	                            b.setMap(null )));
	                            0 < c && (d.setContent(Get_infowindow(k, formatSecond(c))),
	                            isNaN(parseInt(k.d3)) || getSecs(b),
	                            d.open(a, b),
	                            clicktype = "mouseover")
	                        }
	                    }
	                }(m, b)),
	                google.maps.event.addListener(m, "mouseout", function(a, b) {
	                    return function() {
	                        "mouseover" == clicktype && (clicktype = "",
	                        d.close())
	                    }
	                }(m, b)));
	                google.maps.event.addListener(d, "closeclick", function() {
	                    "click" == clicktype && (clicktype = "")
	                });
	                if (0 == sh && lookLat && lookLng && lookLat == k.d4 && lookLng == k.d5) {
	                    var n = 0;
	                    isNaN(parseInt(k.d3)) || (n = new Date,
	                    myEndTime = new Date(parseInt(k.d3)),
	                    n = n.dateDiff("s", myEndTime),
	                    0 > n && (n = 0,
	                    m.setMap(null )));
	                    0 < n && (d.setContent(Get_infowindow(k, formatSecond(n))),
	                    isNaN(parseInt(k.d3)) || getSecs(m),
	                    d.open(a, m));
	                    sh = 1;
	                }
	                markers.push(m);
                }
            }
        }
    })
}
/*
  CUSTOM VAR
*/
var gLastNotifPokemon = new Array();
var gArrBestMove = [["none", "none"], ["Vine Whip", "Sludge Bomb"], ["Vine Whip", "Solar Beam"], ["Vine Whip", "Solar Beam"], ["Scratch", "Flamethrower"], ["Scratch", "Flamethrower"], ["Wing Attack", "Fire Blast"], ["Bubble", "Aqua Tail"], ["Water Gun", "Hydro Pump"], ["Water Gun", "Hydro Pump"], ["Bug Bite", "Struggle"], ["Bug Bite", "Struggle"], ["Bug Bite", "Bug Buzz"], ["Bug Bite", "Struggle"], ["Bug Bite", "Struggle"], ["Poison Jab", "Sludge Bomb"], ["Tackle", "Aerial Ace"], ["Wing Attack", "Aerial Ace"], ["Wing Attack", "Hurricane"], ["Tackle", "Body Slam"], ["Bite", "Hyper Beam"], ["Peck", "Drill Peck"], ["Steel Wing", "Drill Run"], ["Poison Sting", "Gunk Shot"], ["Bite", "Gunk Shot"], ["Thunder Shock", "Thunder"], ["Spark", "Thunder"], ["Mud Shot", "Rock Slide"], ["Mud Shot", "Earthquake"], ["Poison Sting", "Sludge Bomb"], ["Poison Sting", "Sludge Bomb"], ["Poison Jab", "Earthquake"], ["Poison Sting", "Sludge Bomb"], ["Poison Jab", "Sludge Bomb"], ["Poison Jab", "Earthquake"], ["Pound", "Moonblast"], ["Pound", "Moonblast"], ["Ember", "Body Slam"], ["Ember", "Fire Blast"], ["Pound", "Body Slam"], ["Pound", "Hyper Beam"], ["Bite", "Sludge Bomb"], ["Wing Attack", "Poison Fang"], ["Razor Leaf", "Sludge Bomb"], ["Razor Leaf", "Sludge Bomb"], ["Razor Leaf", "Solar Beam"], ["Bug Bite", "Seed Bomb"], ["Bug Bite", "Solar Beam"], ["Bug Bite", "Signal Beam"], ["Bug Bite", "Bug Buzz"], ["Mud Shot", "Dig"], ["Mud Shot", "Earthquake"], ["Scratch", "Body Slam"], ["Scratch", "Play Rough"], ["Water Gun", "Cross Chop"], ["Water Gun", "Hydro Pump"], ["Scratch", "Cross Chop"], ["Low Kick", "Cross Chop"], ["Bite", "Body Slam"], ["Fire Fang", "Fire Blast"], ["Bubble", "Body Slam"], ["Bubble", "Scald"], ["Bubble", "Hydro Pump"], ["Zen Headbutt", "Psyshock"], ["Psycho Cut", "Shadow Ball"], ["Psycho Cut", "Psychic"], ["Low Kick", "Cross Chop"], ["Low Kick", "Cross Chop"], ["Karate Chop", "Cross Chop"], ["Vine Whip", "Power Whip"], ["Razor Leaf", "Power Whip"], ["Razor Leaf", "Solar Beam"], ["Bubble", "Water Pulse"], ["Poison Jab", "Hydro Pump"], ["Rock Throw", "Rock Slide"], ["Mud Shot", "Stone Edge"], ["Mud Shot", "Stone Edge"], ["Ember", "Fire Blast"], ["Ember", "Fire Blast"], ["Water Gun", "Psychic"], ["Water Gun", "Psychic"], ["Spark", "Thunderbolt"], ["Spark", "Flash Cannon"], ["Cut", "Leaf Blade"], ["Peck", "Drill Peck"], ["Feint Attack", "Drill Peck"], ["Water Gun", "Aqua Tail"], ["Frost Breath", "Blizzard"], ["Acid", "Sludge Bomb"], ["Poison Jab", "Sludge Bomb"], ["Tackle", "Water Pulse"], ["Frost Breath", "Blizzard"], ["Lick", "Sludge Bomb"], ["Shadow Claw", "Sludge Bomb"], ["Shadow Claw", "Sludge Wave"], ["Rock Throw", "Stone Edge"], ["Pound", "Psychic"], ["Zen Headbutt", "Psychic"], ["Bubble", "Water Pulse"], ["Metal Claw", "X Scissor"], ["Spark", "Thunderbolt"], ["Spark", "Thunderbolt"], ["Confusion", "Psychic"], ["Zen Headbutt", "Solar Beam"], ["Mud Slap", "Bone Club"], ["Mud Slap", "Earthquake"], ["Rock Smash", "Stone Edge"], ["Rock Smash", "Brick Break"], ["Zen Headbutt", "Hyper Beam"], ["Acid", "Sludge Bomb"], ["Acid", "Sludge Bomb"], ["Mud Slap", "Stomp"], ["Mud Slap", "Stone Edge"], ["Pound", "Psychic"], ["Vine Whip", "Power Whip"], ["Mud Slap", "Earthquake"], ["Water Gun", "Dragon Pulse"], ["Water Gun", "Hydro Pump"], ["Mud Shot", "Aqua Tail"], ["Poison Jab", "Megahorn"], ["Water Gun", "Power Gem"], ["Water Gun", "Hydro Pump"], ["Zen Headbutt", "Psychic"], ["Steel Wing", "Bug Buzz"], ["Frost Breath", "Psyshock"], ["Thunder Shock", "Thunder"], ["Ember", "Fire Blast"], ["Rock Smash", "X Scissor"], ["Tackle", "Earthquake"], ["Splash", "Struggle"], ["Bite", "Hydro Pump"], ["Frost Breath", "Blizzard"], ["Pound", "Struggle"], ["Tackle", "Body Slam"], ["Water Gun", "Hydro Pump"], ["Thunder Shock", "Thunder"], ["Ember", "Fire Blast"], ["Tackle", "Signal Beam"], ["Water Gun", "Brine"], ["Water Gun", "Hydro Pump"], ["Scratch", "Aqua Jet"], ["Mud Shot", "Stone Edge"], ["Bite", "Hyper Beam"], ["Zen Headbutt", "Body Slam"], ["Frost Breath", "Blizzard"], ["Thunder Shock", "Thunder"], ["Ember", "Fire Blast"], ["Dragon Breath", "Aqua Tail"], ["Dragon Breath", "Dragon Pulse"], ["Dragon Breath", "Dragon Claw"], ["Psycho Cut", "Psychic"], ["Pound", "Hurricane"]];
/*
  CUSTOM FUNC
*/
function findBestPokemon() {
  $.ajax({
    url: md("pkm333"),
    async: !0,
    dataType: "JSON",
    success: function(a) {
      if (a)
        if ("error" == a.pk123[0].d1)
          alert(a.pk123[0].d2);
        else if ("error2" != a.pk123[0].d1) {
          if ("out" == a.pk123[0].d1)
              alert(a.pk123[0].d2);
          else 
            SendEmailIfGoodPokemon(map, a, infowindow);
        }
    },
    error: function(a) {
      //nothing...
    }
  });
  setTimeout(findBestPokemon, 5000);
}
function SendEmailIfGoodPokemon(a, b, c) {
  var arrCurrentNotifPokemon = new Array();

  $.each(b.pk123, function(b, g) {
    var aCurrentNotifPokemon = new Object();
    var _d9 = g.d9.split("^");
    var fIV = parseFloat(_d9[5]);
    fIV = fIV.toPrecision(4);

    if ((parseInt(g.d7) >= gStar || (_d9[0] || _d9[1] || _d9[2])) && fIV >= gIV || parseInt(g.d1) === 131 || parseInt(g.d1) === 143 || parseInt(g.d1) === 149) {
      var sStar1 = (getpkskByID(parseInt(_d9[3]))[0].Name == gArrBestMove[parseInt(g.d1)][0]) ? "★★★" : '',
          sStar2 = (getpkskByID(parseInt(_d9[4]))[0].Name == gArrBestMove[parseInt(g.d1)][1]) ? "★★★" : '';

      //a good pokemon!!!
      aCurrentNotifPokemon['isSended'] = isSended(g);
      aCurrentNotifPokemon['index']    = parseInt(g.d1);
      aCurrentNotifPokemon['name']     = pkms.pkms[parseInt(g.d1)].pokemon_name + " (" + pkms.pkms[parseInt(g.d1)].pokemon_name_zhtw + ") ";
      aCurrentNotifPokemon['i']        = parseInt(g.d1);
      aCurrentNotifPokemon['s']        = parseInt(g.d7);
      aCurrentNotifPokemon['n']        = parseInt(g.d4); // position for diff pokemon alert or not
      aCurrentNotifPokemon['iv']       = fIV;
      aCurrentNotifPokemon['t']        = formatSecond((new Date).dateDiff("s", new Date(parseInt(g.d3))));
      aCurrentNotifPokemon['iv_s']     = fIV + "% (" + parseInt(_d9[0]) + "/" + parseInt(_d9[1]) + "/" + parseInt(_d9[2]) + ")";
      aCurrentNotifPokemon['m1']       = getpkskByID(parseInt(_d9[3]))[0].Name + " ( " + getpkskByID(parseInt(_d9[3]))[0].NameCH + ") " + sStar1;
      aCurrentNotifPokemon['m2']       = getpkskByID(parseInt(_d9[4]))[0].Name + " ( " + getpkskByID(parseInt(_d9[4]))[0].NameCH + ") " + sStar2;

      //ofcourse need to save it
      arrCurrentNotifPokemon.push(aCurrentNotifPokemon);
    }
  });

  //do send email
  if(arrCurrentNotifPokemon.length) 
    doSendNotif(arrCurrentNotifPokemon);

  gLastNotifPokemon = arrCurrentNotifPokemon;
  on_idle();
}

function isSended(g) {
  var isSended = false;
  gLastNotifPokemon.forEach((pm) => {
    if ( pm.index === parseInt(g.d1) && pm.n === parseInt(g.d4) )
    {
      isSended = true;
      return true;
    }
  });
  return isSended;
}

function doSendNotif(arrCurrentNotifPokemon){
  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    arrCurrentNotifPokemon.forEach((pm, index)=>{
      if ( pm.isSended === false ){
        var notification = new Notification("【大家找寶貝】發現超猛 Pokemon", {
          icon: "https://pkget.com/images/" + right("00" + pm.index, 3) + ".png",
          body: pm.name +
                '\n- iv: ' + pm.iv_s +
                '\n- ' + pm.m1 +
                '\n- ' + pm.m2 + 
                '\n距通知後 ' + pm.t + ' 即將消失',
        });
        notification.onclick = function(){
            window.focus();
        };
        setTimeout(function(){
            notification.close();
        }, 20000);
      }
    });
      
  }
}

window.addEventListener('load', function () {
  // At first, let's check if we have permission for notification
  // If not, let's ask for it
  if (Notification && Notification.permission !== "granted") {
    Notification.requestPermission(function (status) {
      if (Notification.permission !== status) {
        Notification.permission = status;
      }
    });
  }
});