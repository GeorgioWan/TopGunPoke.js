/*
  DOM
*/
var dv, ig, sp, el,
    ctl = document.createElement('div'),
    _body = document.getElementsByTagName('body')[0],
    _head = document.getElementsByTagName('head')[0];

var g_ver  = 'v1.3.1';

el = document.createElement('div');
el.id = 'tgp_log_toggle'
el.className = 'btn btn-warning';
el.style.position = "absolute";
el.style.zIndex = '500';
el.style.position = 'absolute';
el.style.right = '0px';
el.style.margin = '110px 20px';
el.style.padding = '9px 14px';
el.setAttribute('data-toggle', 'collapse');
el.setAttribute('data-target', '#tgp_log');
el.setAttribute('aria-expanded', 'false');
el.setAttribute('aria-controls', 'tgp_log');
sp = document.createElement('span');
sp.className = 'glyphicon glyphicon-screenshot';
el.appendChild(sp);

dv = document.createElement('div');
dv.id = 'tgp_log';
dv.className = 'panel panel-default collapse';
dv.style.zIndex = '500';
dv.style.position = 'absolute';
dv.style.right = '0px';
dv.style.margin = '160px 20px';
dv.style.backgroundColor = 'rgba(0,0,0,.5)';

ig = document.createElement('div');
ig.className = 'panel-heading';
ig.style.textAlign = 'center';
ig.style.backgroundColor = 'rgba(240,173,78,.8)';
ig.style.color = 'whitesmoke';
ig.innerHTML = '追蹤紀錄(beta)';
dv.appendChild(ig);

ig = document.createElement('ul');
ig.id = 'tgp_log_list';
ig.className = 'list-group';
ig.style.maxHeight = '270px';
ig.style.overflowY = 'auto';
dv.appendChild(ig);

$('#filter').after(el);
$('#tgp_log_toggle').after(dv);

el = document.createElement('div');
el.style.width = '200px';
el.style.marginBottom = '6px';
el.style.paddingBottom = '3px';
el.style.borderBottom = '1px solid rgba(0,0,0,.3)';
el.innerHTML = `<b style="vertical-align: middle; text-shadow: .5px .5px 4px rgba(0,0,0,.3);">
                  <a href="https://github.com/GeorgioWan/TopGunPoke.js" target="_blank" style="text-decoration: none; color: gray;">TopGunPoke</a>
                </b> 
                <span class="label label-primary">` + g_ver + '</span>';
ctl.appendChild(el);

dv = document.createElement('div');
dv.style.display = 'inline-flex';

ig = document.createElement('span');
ig.className = 'input-group input-group-sm';
ig.style.width = '126px';
sp = document.createElement('span');
sp.id = 'addon-iv';
sp.className = 'input-group-addon';
sp.innerHTML = 'IV';
el = document.createElement('input');
el.className = 'form-control';
el.id = 'input-iv';
el.style.textAlign = 'center';
el.placeholder = 'IV';
el.value = $.cookie("tgp_iv") || '90';
el.setAttribute("aria-describedby", "addon-iv");
ig.appendChild(sp);
ig.appendChild(el);

el = document.createElement('button');
el.className = 'btn btn-sm btn-warning';
el.id = 'get-custom';
el.style.width = '70px';
el.style.marginLeft = '4px';
sp = document.createElement('span');
sp.className = 'glyphicon glyphicon-play';
el.appendChild(sp);

dv.appendChild(ig);
dv.appendChild(el);
ctl.appendChild(dv);

/** Bootstrap-select **/
ig = document.createElement('link');
ig.rel = "stylesheet";
ig.href = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.11.2/css/bootstrap-select.min.css";
_head.appendChild(ig);
ig = document.createElement('script');
ig.src = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.11.2/js/bootstrap-select.min.js";
_head.appendChild(ig);

sp = document.createElement('div');

ig = document.createElement('select');
ig.className = 'selectpicker';
ig.title = '無視 IV 追蹤 Pokemon...'
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

    if ( isSelectedPokemon(parseInt(el.value)) )
      el.setAttribute('selected', true);

    ig.appendChild(el);
  }
});

sp.appendChild(ig);
ctl.appendChild(sp);
/*********************/

ctl.style.zIndex = 9999;
ctl.style.position = 'fixed';
ctl.style.left = '20px';
ctl.style.bottom = '20px';
ctl.style.textAlign = 'center';

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
  $("#get-custom").on("click", function() {
    $("#get-custom span")[0].classList.toggle("glyphicon-stop");
    $("#get-custom span")[0].classList.toggle("glyphicon-play");
    gRun = !gRun;

    if (gRun){
      gda();
      gInterval = setInterval(gda, 5000);
    }
    else
      clearInterval(gInterval);
  });

  $(".list-group").on("click", "img", (e)=>{
  	var _m = new L.marker([$(e.target).data('lnt'), $(e.target).data('lng')],{
      icon: createIcon(0, e.target.src, 30),
      opacity: 0.7
    });
    map.addLayer(_m);

    setTimeout(()=>{map.removeLayer(_m);}, 5000);
  });

  $("#input-iv").on("change", function(e){
    gda();
    $.cookie("tgp_iv", e.target.value, {
        path: "/",
        expires: 90
    });
  });

  $('.selectpicker').on("change", function(e){
    let selectedPokeArr = new Array(), 
        selectedPoke = e.target.selectedOptions;
  
    if(selectedPoke.length !== 0)
      for(let i = 0 ; i < selectedPoke.length ; i++)
        selectedPokeArr.push(selectedPoke[i].value);
        
    $.cookie("tgp_selectedPoke", selectedPokeArr, {
        path: "/",
        expires: 90
    });
  });
});
/*
  OVERWRITE FUNC
*/
var _iv = 0 ;
function SetMarkers(e, t) {
    var r, n, i, a = 0, o = "Y", s = "";
    $.each(t.fp, function(t, c) {
        if (o = "Y",
        markers.length > 0)
            for (var p = 0; p < markers.length; p++)
                if (dec(c.a) == markers[p].pokeid && c.c == markers[p].lat && c.d == markers[p].lng) {
                    o = "N";
                    break
                }
        if (CheckMySec(parseInt(c.b) - 1e3 * parseInt(c.a)) > 1 || (o = "N"),
        "Y" == o) {
            if (r = "",
            n = 0,
            i = right("00" + dec(c.a), 3),
            "^^^^^" != c.f) {
                var l = c.f.split("^");
                a = parseInt(l[5]);
                _iv = parseFloat(l[5]);
            } else{
              a = 0;
              _iv = 0;
            }
            switch (c.e) {
            case "5":
                80 > a ? (r = "/images/" + i + ".png",
                n = parseInt("5" + i),
                s = "65") : (r = "/images/blue_l/" + i + "_l.png",
                n = parseInt("6" + i),
                s = "85");
                break;
            case "3":
                "004" == i ? 85 > a ? (r = "/images/mm/" + i + ".png",
                n = parseInt("3" + i),
                s = "50") : (r = "/images/blue_m/" + i + "_m.png",
                n = parseInt("4" + i),
                s = "65") : 90 > a ? (r = "/images/mm/" + i + ".png",
                n = parseInt("3" + i),
                s = "50") : (r = "/images/blue_m/" + i + "_m.png",
                n = parseInt("4" + i),
                s = "65");
                break;
            case "1":
                "001" == i || "007" == i ? 85 > a ? (r = "/images/ss/" + i + ".png",
                n = parseInt(i),
                s = "30") : (r = "/images/blue_s/" + i + "_s.png",
                n = parseInt("2" + i),
                s = "45") : 95 > a ? (r = "/images/mm/" + i + ".png",
                n = parseInt(i),
                s = "30") : (r = "/images/blue_s/" + i + "_s.png",
                n = parseInt("2" + i),
                s = "45");
                break;
            default:
                r = "/images/ss/" + i + ".png",
                n = parseInt(i),
                s = "30"
            }
            var h = new L.LatLng(c.c,c.d)
              , u = dec(c.a)
              , d = new L.marker(h,{
                icon: createIcon(u, r, s),
                times: "" + (parseInt(c.b) - 1e3 * parseInt(c.a))
            });
            d.setZIndexOffset(parseInt(s));
            var g = L.popup({
                maxWidth: 500,
                maxHeight: 400
            });
            d.bindPopup(g),
            d.on("click", function(t) {
                var r = 0;
                if (!isNaN(parseInt(c.b) - 1e3 * parseInt(c.a))) {
                    var n = new Date;
                    myEndTime = new Date(parseInt(c.b) - 1e3 * parseInt(c.a)),
                    r = n.dateDiff("s", myEndTime),
                    0 > r && (r = 0,
                    e.removeLayer(d))
                }
                if (r > 0) {
                    getSecs();
                    var i = t.target.getPopup();
                    i.setContent(showpopup(c, formatSecond(r))),
                    i.update(),
                    this.openPopup(),
                    clicktype = "click"
                }
            }),
            d.on("popupclose", function() {
                clicktype = "",
                window.clearTimeout(myTimer)
            }),
            d.on("mouseover", function(t) {
                if ("" == clicktype) {
                    var r = 0;
                    if (!isNaN(parseInt(c.b) - 1e3 * parseInt(c.a))) {
                        var n = new Date;
                        myEndTime = new Date(parseInt(c.b) - 1e3 * parseInt(c.a)),
                        r = n.dateDiff("s", myEndTime),
                        0 > r && (r = 0,
                        e.removeLayer(d))
                    }
                    if (r > 0 && "" == clicktype) {
                        getSecs();
                        var i = t.target.getPopup();
                        i.setContent(showpopup(c, formatSecond(r))),
                        i.update(),
                        this.openPopup(),
                        clicktype = "mouseover"
                    }
                }
            }),
            d.on("mouseout", function() {
                "mouseover" == clicktype && (this.closePopup(),
                window.clearTimeout(myTimer),
                clicktype = "")
            }),
            markers.push({
                marker: d,
                pokeid: u,
                lat: c.c,
                lng: c.d,
                times: "" + (parseInt(c.b) - 1e3 * parseInt(c.a)),
                active: !0,
                iv: _iv
            }),
            e.addLayer(d),
            d.setLatLng(h)
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
            var o = "fp.ashx?a=" + lat0 + "&b=" + lng0 + "&c=" + lat1 + "&d=" + lng1 + "&e=" + LimitItem + "&f=" + i + "&g=" + a + "&h=" + h + "&j=765";
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
  let selectedPoke = $.cookie('tgp_selectedPoke') ? $.cookie('tgp_selectedPoke').split(",") : '' ;

	if(selectedPoke.length !== 0)
	  for(let i = 0 ; i < selectedPoke.length ; i++)
	  	if(parseInt(selectedPoke[i]) === id)
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
      aCurrentNotifPokemon['t']        = formatSecond((new Date).dateDiff("s", new Date(parseInt("" + (parseInt(g.b) - 1e3 * parseInt(g.a))))));
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

function pokemonHistoryLog(pm){
  const dt = new Date();
  const label_style = "display: inline-block; margin: 0 3px; font-size: x-small;";
  ig = document.createElement('li');
  ig.className = 'list-group-item';
  ig.style.backgroundColor = 'transparent';
  ig.style.color = 'whitesmoke';
  
  ig.innerHTML = '<span class="label" style="' + label_style + ' background-color: rgba(0,0,0,.5)">' + dt.toLocaleDateString() + ' ' + dt.toLocaleTimeString() + '</span>' + 
                 '<img src="https://pkget.com/images/mm/' + right("00" + pm.index, 3) + '.png" data-lnt="' + pm.lnt + '" data-lng="' + pm.lng + '" style="width: 30px; height: 30px; cursor: pointer;"></img>' +
                 '<span class="label label-danger" style="' + label_style + ' min-width: 122px;">' + pm.iv_s + '</span>' +
                 '<span class="label label-primary" style="' + label_style + '">' + pm.m1 + '</span>' +
                 '<span class="label label-primary" style="' + label_style + '">' + pm.m2 + '</span>';

  $("#tgp_log_list").append(ig);
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
        pokemonHistoryLog(pm);
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
