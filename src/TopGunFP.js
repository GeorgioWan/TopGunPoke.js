/*
  DOM
*/
var ig, sp, el,
    ctl = document.createElement('span'),
    _body = document.getElementsByTagName('body')[0],
    _head = document.getElementsByTagName('head')[0];

var g_ver  = '1.2.4',
    g_date = '20161115';

/** Bootstrap-select **/
ig = document.createElement('link');
ig.rel = "stylesheet";
ig.href = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.11.2/css/bootstrap-select.min.css";
_head.appendChild(ig);
ig = document.createElement('script');
ig.src = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.11.2/js/bootstrap-select.min.js";
_head.appendChild(ig);

sp = document.createElement('span');
sp.style.position = 'absolute';
sp.style.bottom = '5px';

ig = document.createElement('select');
ig.className = 'selectpicker';
ig.title = '追蹤哪些 Pokemon...'
ig.setAttribute('data-size', '10');
ig.setAttribute('multiple', 'true');
ig.setAttribute('data-width', '200px');
ig.setAttribute('data-selected-text-format', 'count');
ig.setAttribute('data-actions-box', 'true');
ig.setAttribute('data-live-search', 'true');

poke.poke.forEach((p, index) => {
  if ( p.id !== "" ) {
    el = document.createElement('option');
    el.value = p.id;
    el.setAttribute('data-content', 
                    '<img src="/images/mm/' + right("00" + p.id, 3) + '.png" style="width: 30px; height: 30px;">' + 
                    '<span style="display: inline-block; width: 60px;text-align: center;">' + p.zhtw + '</span>' + 
                    '<span class="label label-default">' + p.name + '</span>');
    ig.appendChild(el);
  }
});

sp.appendChild(ig);
ctl.appendChild(sp);
/*********************/

ig = document.createElement('div');
ig.className = 'input-group input-group-sm';
ig.style.position = 'absolute';
ig.style.width = '120px';
sp = document.createElement('span');
sp.id = 'addon-iv';
sp.className = 'input-group-addon';
sp.innerHTML = 'IV';
el = document.createElement('input');
el.className = 'form-control';
el.id = 'input-iv';
el.style.textAlign = 'center';
el.placeholder = 'IV';
el.value = '90';
el.setAttribute("aria-describedby", "addon-iv");
ig.appendChild(sp);
ig.appendChild(el);
ctl.appendChild(ig);

el = document.createElement('button');
el.className = 'btn btn-sm btn-warning';
el.id = 'get-custom';
el.style.position = 'absolute';
el.style.left = '143px';
el.style.width = '70px';
sp = document.createElement('span');
sp.className = 'glyphicon glyphicon-play';
el.appendChild(sp);
ctl.appendChild(el);

ctl.className = 'col-md-2';
ctl.style.zIndex = 9999;
ctl.style.position = 'fixed';
ctl.style.left = '5px';
ctl.style.bottom = '45px';
_body.appendChild(ctl);
/*
  GLOBAL VAR
*/
var gRun = false,
    gInterval;
/*
  Document ready
*/
$(document).ready(function() {
  console.log("== " + g_ver + " / " + g_date + " ==" );

  $("#get-custom").on("click", function() {
    $("#get-custom span")[0].classList.toggle("glyphicon-stop");
    $("#get-custom span")[0].classList.toggle("glyphicon-play");
    gRun = !gRun;

    if (gRun){
      gInterval = setInterval(gda, 5000);
      gda();
    }
    else
      clearInterval(gInterval);
  });
});
/*
  OVERWRITE FUNC
*/
var _iv = 0 ;
function SetMarkers(e, t) {
    var n, r, i, a = 0, o = "Y", s = "";
    $.each(t.fp, function(t, c) {
        if (o = "Y",
        markers.length > 0)
            for (var p = 0; p < markers.length; p++)
                if (dec(c.a) == markers[p].pokeid && c.c == markers[p].lat && c.d == markers[p].lng) {
                    o = "N";
                    break
                }
        if (CheckMySec(c.b) > 1 || (o = "N"),
        "Y" == o) {
            if (n = "",
            r = 0,
            i = right("00" + dec(c.a), 3),
            "^^^^^" != c.f) {
                var l = c.f.split("^");
                a = parseInt(l[5]);
                _iv = parseFloat(l[5]);
            } else {
                a = 0;
                _iv = 0;
            }
            switch (c.e) {
            case "5":
                80 > a ? (n = "/images/" + i + ".png",
                r = parseInt("5" + i),
                s = "65") : (n = "/images/blue_l/" + i + "_l.png",
                r = parseInt("6" + i),
                s = "85");
                break;
            case "3":
                "004" == i ? 85 > a ? (n = "/images/mm/" + i + ".png",
                r = parseInt("3" + i),
                s = "50") : (n = "/images/blue_m/" + i + "_m.png",
                r = parseInt("4" + i),
                s = "65") : 90 > a ? (n = "/images/mm/" + i + ".png",
                r = parseInt("3" + i),
                s = "50") : (n = "/images/blue_m/" + i + "_m.png",
                r = parseInt("4" + i),
                s = "65");
                break;
            case "1":
                "001" == i || "007" == i ? 85 > a ? (n = "/images/ss/" + i + ".png",
                r = parseInt(i),
                s = "30") : (n = "/images/blue_s/" + i + "_s.png",
                r = parseInt("2" + i),
                s = "45") : 95 > a ? (n = "/images/mm/" + i + ".png",
                r = parseInt(i),
                s = "30") : (n = "/images/blue_s/" + i + "_s.png",
                r = parseInt("2" + i),
                s = "45");
                break;
            default:
                n = "/images/ss/" + i + ".png",
                r = parseInt(i),
                s = "30"
            }
            var h = new L.LatLng(c.c,c.d)
              , u = dec(c.a)
              , g = new L.marker(h,{
                icon: createIcon(u, n, s),
                times: c.b
            });
            g.setZIndexOffset(parseInt(s));
            var d = L.popup({
                maxWidth: 500,
                maxHeight: 400
            });
            g.bindPopup(d),
            g.on("click", function(t) {
                var n = 0;
                if (!isNaN(parseInt(c.b))) {
                    var r = new Date;
                    myEndTime = new Date(parseInt(c.b)),
                    n = r.dateDiff("s", myEndTime),
                    0 > n && (n = 0,
                    e.removeLayer(g))
                }
                if (n > 0) {
                    getSecs();
                    var i = t.target.getPopup();
                    i.setContent(showpopup(c, formatSecond(n))),
                    i.update(),
                    this.openPopup(),
                    clicktype = "click"
                }
            }),
            g.on("popupclose", function() {
                clicktype = "",
                window.clearTimeout(myTimer)
            }),
            g.on("mouseover", function(t) {
                var n = 0;
                if (!isNaN(parseInt(c.b))) {
                    var r = new Date;
                    myEndTime = new Date(parseInt(c.b)),
                    n = r.dateDiff("s", myEndTime),
                    0 > n && (n = 0,
                    e.removeLayer(g))
                }
                if (n > 0 && "" == clicktype) {
                    getSecs();
                    var i = t.target.getPopup();
                    i.setContent(showpopup(c, formatSecond(n))),
                    i.update(),
                    this.openPopup(),
                    clicktype = "mouseover"
                }
            }),
            g.on("mouseout", function() {
                "mouseover" == clicktype && (this.closePopup(),
                window.clearTimeout(myTimer),
                clicktype = "")
            }),
            markers.push({
                marker: g,
                pokeid: u,
                lat: c.c,
                lng: c.d,
                times: c.b,
                active: !0,
                iv: _iv
            }),
            e.addLayer(g),
            g.setLatLng(h)
        }
    })
}
function gda() {
    lat0 = map.getBounds().getNorthEast().lat,
    lng0 = map.getBounds().getNorthEast().lng,
    lat1 = map.getBounds().getSouthWest().lat,
    lng1 = map.getBounds().getSouthWest().lng;
    var e = blat0 - lat0;
    0 > e && (e = -1 * e);
    var t = blng0 - lng0;
    if (0 > t && (t = -1 * t),
    1 == animateGo && (e = .1),
    e = .1,
    e > 5e-4 || 1 == DDLidchange) {
        var n = lng1 - lng0;
        if (0 > n && (n = -1 * n),
        size = navigator.userAgent.match(/android/i) ? .07 : navigator.userAgent.match(/(iphone|ipod|ipad);?/i) ? .07 : .14,
        plus(),
        size > n) {
            $icon.addClass(animateClass),
            $("#update").attr("disabled", !0);
            var r = (64 * Math.random() + 1,
            64 * Math.random() + 1,
            (new Date).Format("yyyy-MM-dd hh:mm:ss"))
              , i = ed.Encrypt("" + lat0 + "^" + r)
              , a = ed.Encrypt("" + lng1 + "^" + tf);
            i = encodeURIComponent(i),
            a = encodeURIComponent(a);
            var o = "fp.ashx?a=" + lat0 + "&b=" + lng0 + "&c=" + lat1 + "&d=" + lng1 + "&e=" + LimitItem + "&f=" + i + "&g=" + a + "&h=" + h + "&j=456";
            $.ajax({
                url: o,
                async: !0,
                dataType: "JSON",
                success: function(e) {
                    if (e)
                        if ("error" == e.fp[0].a)
                            alert(e.fp[0].b);
                        else if ("error2" == e.fp[0].a)
                            ;
                        else if ("out" == e.fp[0].a)
                            alert(e.fp[0].b);
                        else {
                          SetMarkers(map, e);
                          for (var t = [], n = 0; n < markers.length; n++)
                            if(gRun)
                            	markers[n].lat < lat0 && markers[n].lat > lat1 && markers[n].lng < lng0 && markers[n].lng > lng1 && (markers[n].iv >= parseInt($("#input-iv")[0].value) || isSelectedPokemon(markers[n].pokeid)) ? t.push(markers[n]) : map.removeLayer(markers[n].marker);
                          	else
                          		markers[n].lat < lat0 && markers[n].lat > lat1 && markers[n].lng < lng0 && markers[n].lng > lng1 ? t.push(markers[n]) : map.removeLayer(markers[n].marker);
                              
                          markers = t

                          if (gRun)
                            SendEmailIfGoodPokemon(map, e);
                        }
                    $icon.removeClass(animateClass),
                    $("#update").attr("disabled", !1)
                },
                error: function() {
                    $icon.removeClass(animateClass),
                    $("#update").attr("disabled", !1)
                }
            })
        }
        DDLidchange = 0
    }
    blat0 = lat0,
    blng0 = lng0,
    blat1 = lat1,
    blng1 = lng1,
    SetCookie()
}
/*
  CUSTOM VAR
*/
var gLastNotifPokemon = new Array();
var gArrBestMove = [["none", "none"], ["Vine Whip", "Sludge Bomb"], ["Vine Whip", "Solar Beam"], ["Vine Whip", "Solar Beam"], ["Scratch", "Flamethrower"], ["Scratch", "Flamethrower"], ["Wing Attack", "Fire Blast"], ["Bubble", "Aqua Tail"], ["Water Gun", "Hydro Pump"], ["Water Gun", "Hydro Pump"], ["Bug Bite", "Struggle"], ["Bug Bite", "Struggle"], ["Bug Bite", "Bug Buzz"], ["Bug Bite", "Struggle"], ["Bug Bite", "Struggle"], ["Poison Jab", "Sludge Bomb"], ["Tackle", "Aerial Ace"], ["Wing Attack", "Aerial Ace"], ["Wing Attack", "Hurricane"], ["Tackle", "Body Slam"], ["Bite", "Hyper Beam"], ["Peck", "Drill Peck"], ["Steel Wing", "Drill Run"], ["Poison Sting", "Gunk Shot"], ["Bite", "Gunk Shot"], ["Thunder Shock", "Thunder"], ["Spark", "Thunder"], ["Mud Shot", "Rock Slide"], ["Mud Shot", "Earthquake"], ["Poison Sting", "Sludge Bomb"], ["Poison Sting", "Sludge Bomb"], ["Poison Jab", "Earthquake"], ["Poison Sting", "Sludge Bomb"], ["Poison Jab", "Sludge Bomb"], ["Poison Jab", "Earthquake"], ["Pound", "Moonblast"], ["Pound", "Moonblast"], ["Ember", "Body Slam"], ["Ember", "Fire Blast"], ["Pound", "Body Slam"], ["Pound", "Hyper Beam"], ["Bite", "Sludge Bomb"], ["Wing Attack", "Poison Fang"], ["Razor Leaf", "Sludge Bomb"], ["Razor Leaf", "Sludge Bomb"], ["Razor Leaf", "Solar Beam"], ["Bug Bite", "Seed Bomb"], ["Bug Bite", "Solar Beam"], ["Bug Bite", "Signal Beam"], ["Bug Bite", "Bug Buzz"], ["Mud Shot", "Dig"], ["Mud Shot", "Earthquake"], ["Scratch", "Body Slam"], ["Scratch", "Play Rough"], ["Water Gun", "Cross Chop"], ["Water Gun", "Hydro Pump"], ["Scratch", "Cross Chop"], ["Low Kick", "Cross Chop"], ["Bite", "Body Slam"], ["Fire Fang", "Fire Blast"], ["Bubble", "Body Slam"], ["Bubble", "Scald"], ["Bubble", "Hydro Pump"], ["Zen Headbutt", "Psyshock"], ["Psycho Cut", "Shadow Ball"], ["Psycho Cut", "Psychic"], ["Low Kick", "Cross Chop"], ["Low Kick", "Cross Chop"], ["Karate Chop", "Cross Chop"], ["Vine Whip", "Power Whip"], ["Razor Leaf", "Power Whip"], ["Razor Leaf", "Solar Beam"], ["Bubble", "Water Pulse"], ["Poison Jab", "Hydro Pump"], ["Rock Throw", "Rock Slide"], ["Mud Shot", "Stone Edge"], ["Mud Shot", "Stone Edge"], ["Ember", "Fire Blast"], ["Ember", "Fire Blast"], ["Water Gun", "Psychic"], ["Water Gun", "Psychic"], ["Spark", "Thunderbolt"], ["Spark", "Flash Cannon"], ["Cut", "Leaf Blade"], ["Peck", "Drill Peck"], ["Feint Attack", "Drill Peck"], ["Water Gun", "Aqua Tail"], ["Frost Breath", "Blizzard"], ["Acid", "Sludge Bomb"], ["Poison Jab", "Sludge Bomb"], ["Tackle", "Water Pulse"], ["Frost Breath", "Blizzard"], ["Lick", "Sludge Bomb"], ["Shadow Claw", "Sludge Bomb"], ["Shadow Claw", "Sludge Wave"], ["Rock Throw", "Stone Edge"], ["Pound", "Psychic"], ["Zen Headbutt", "Psychic"], ["Bubble", "Water Pulse"], ["Metal Claw", "X Scissor"], ["Spark", "Thunderbolt"], ["Spark", "Thunderbolt"], ["Confusion", "Psychic"], ["Zen Headbutt", "Solar Beam"], ["Mud Slap", "Bone Club"], ["Mud Slap", "Earthquake"], ["Rock Smash", "Stone Edge"], ["Rock Smash", "Brick Break"], ["Zen Headbutt", "Hyper Beam"], ["Acid", "Sludge Bomb"], ["Acid", "Sludge Bomb"], ["Mud Slap", "Stomp"], ["Mud Slap", "Stone Edge"], ["Pound", "Psychic"], ["Vine Whip", "Power Whip"], ["Mud Slap", "Earthquake"], ["Water Gun", "Dragon Pulse"], ["Water Gun", "Hydro Pump"], ["Mud Shot", "Aqua Tail"], ["Poison Jab", "Megahorn"], ["Water Gun", "Power Gem"], ["Water Gun", "Hydro Pump"], ["Zen Headbutt", "Psychic"], ["Steel Wing", "Bug Buzz"], ["Frost Breath", "Psyshock"], ["Thunder Shock", "Thunder"], ["Ember", "Fire Blast"], ["Rock Smash", "X Scissor"], ["Tackle", "Earthquake"], ["Splash", "Struggle"], ["Bite", "Hydro Pump"], ["Frost Breath", "Blizzard"], ["Pound", "Struggle"], ["Tackle", "Body Slam"], ["Water Gun", "Hydro Pump"], ["Thunder Shock", "Thunder"], ["Ember", "Fire Blast"], ["Tackle", "Signal Beam"], ["Water Gun", "Brine"], ["Water Gun", "Hydro Pump"], ["Scratch", "Aqua Jet"], ["Mud Shot", "Stone Edge"], ["Bite", "Hyper Beam"], ["Zen Headbutt", "Body Slam"], ["Frost Breath", "Blizzard"], ["Thunder Shock", "Thunder"], ["Ember", "Fire Blast"], ["Dragon Breath", "Aqua Tail"], ["Dragon Breath", "Dragon Pulse"], ["Dragon Breath", "Dragon Claw"], ["Psycho Cut", "Psychic"], ["Pound", "Hurricane"]];
/*
  CUSTOM FUNC
*/
function timeDifference(previous) {

  let msPerMinute = 60 * 1000;
  let msPerHour = msPerMinute * 60;
  let msPerDay = msPerHour * 24;
  let msPerMonth = msPerDay * 30;
  let msPerYear = msPerDay * 365;

  var elapsed = new Date() - previous;

  if (elapsed < msPerMinute) {
       return Math.round(elapsed/1000) + ' seconds ago';   
  }

  else if (elapsed < msPerHour) {
       return Math.round(elapsed/msPerMinute) + ' minutes ago';   
  }

  else if (elapsed < msPerDay ) {
       return Math.round(elapsed/msPerHour ) + ' hours ago';   
  }

  else if (elapsed < msPerMonth) {
      return Math.round(elapsed/msPerDay) + ' days ago';   
  }

  else if (elapsed < msPerYear) {
      return Math.round(elapsed/msPerMonth) + ' months ago';   
  }
  else {
      return Math.round(elapsed/msPerYear ) + ' years ago';   
  }
}

function isSelectedPokemon(id){
	let selectedPoke = $('.selectpicker').find("option:selected");
	
	if(selectedPoke.length !== 0)
	  for(let i = 0 ; i < selectedPoke.length ; i++)
	  	if(parseInt(selectedPoke[i].value) === id)
	  		return true;

  return false;
}
function SendEmailIfGoodPokemon(a, b) {
  var arrCurrentNotifPokemon = new Array();

  $.each(b.fp, function(b, g) {
    var aCurrentNotifPokemon = new Object();
    var _f = g.f.split("^");
    var fIV = parseFloat(_f[5]);
    fIV = fIV.toPrecision(4);

    if (fIV >= parseInt($("#input-iv")[0].value) || isSelectedPokemon(dec(g.a))) {
      //a good pokemon!!!
      aCurrentNotifPokemon['isSended'] = isSended(g);
      aCurrentNotifPokemon['index']    = dec(g.a);
      aCurrentNotifPokemon['name']     = poke.poke[dec(g.a)].name + " (" + poke.poke[dec(g.a)].zhtw + ") ";
      aCurrentNotifPokemon['i']        = dec(g.a);
      aCurrentNotifPokemon['s']        = parseInt(g.e);
      aCurrentNotifPokemon['lnt']      = parseFloat(g.c); // position for diff pokemon alert or not
      aCurrentNotifPokemon['lng']      = parseFloat(g.d); // position for diff pokemon alert or not
      aCurrentNotifPokemon['t']        = formatSecond((new Date).dateDiff("s", new Date(parseInt(g.b))));
      aCurrentNotifPokemon['iv']       = fIV || '未提供';
      aCurrentNotifPokemon['iv_s']     = _f[0] ? (fIV + "% (" + parseInt(_f[0]) + "/" + parseInt(_f[1]) + "/" + parseInt(_f[2]) + ")") : '未提供';

      if ( _f[3].length ){
      	var sStar1 = (getpkskByID(parseInt(_f[3]))[0].name === gArrBestMove[dec(g.a)][0]) ? "★★★" : '',
          	sStar2 = (getpkskByID(parseInt(_f[4]))[0].name === gArrBestMove[dec(g.a)][1]) ? "★★★" : '';

        aCurrentNotifPokemon['m1']     = getpkskByID(parseInt(_f[3]))[0].name + " ( " + getpkskByID(parseInt(_f[3]))[0].zhtw + ") " + sStar1 ;
	      aCurrentNotifPokemon['m2']     = getpkskByID(parseInt(_f[4]))[0].name + " ( " + getpkskByID(parseInt(_f[4]))[0].zhtw + ") " + sStar2 ;
      }
      else
      	aCurrentNotifPokemon['m1'] = aCurrentNotifPokemon['m2'] = '未提供';

      //ofcourse need to save it
      arrCurrentNotifPokemon.push(aCurrentNotifPokemon);
    }
  });

  //do send email
  if(arrCurrentNotifPokemon.length) 
    doSendNotif(arrCurrentNotifPokemon);

  gLastNotifPokemon = arrCurrentNotifPokemon;  
}

function isSended(g) {
  var isSended = false;
  gLastNotifPokemon.forEach((pm) => {
    if ( pm.index === dec(g.a) && pm.lnt === parseFloat(g.c) )
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
          icon: "https://pkget.com/images/mm/" + right("00" + pm.index, 3) + ".png",
          body: pm.name +
                '\n- IV: ' + pm.iv_s +
                '\n- ' + pm.m1 +
                '\n- ' + pm.m2 +
                '\n距通知後 ' + pm.t + ' 即將消失',
        });
        notification.onclick = function(){
          window.focus();
          map.panTo(new L.LatLng(pm.lnt, pm.lng));
        };
        setTimeout(function(){
            notification.close();
        }, 20000);

        // History log
        const dt = new Date();
        console.info(
          '[' + dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString() + '] ' +
          pm.name + 'IV: ' + pm.iv_s + ' ' + pm.m1 + ', ' + pm.m2
        );
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
