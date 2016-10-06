/*
  DOM
*/
var _body = document.getElementsByTagName('body')[0];
var ig, sp, el;

ig = document.createElement('div');
ig.className = 'input-group';
ig.style.position = 'absolute';
ig.style.bottom = '10px';
ig.style.left = '60px';
ig.style.width = '80px';
sp = document.createElement('span');
sp.id = 'addon-iv';
sp.className = 'input-group-addon';
sp.innerHTML = 'IV';
el = document.createElement('input');
el.className = 'form-control';
el.id = 'input-iv';
el.placeholder = 'IV';
el.value = $.cookie('iv') ? $.cookie('iv') : '';
el.setAttribute("aria-describedby", "addon-iv");
ig.appendChild(sp);
ig.appendChild(el);
_body.appendChild(ig);

ig = document.createElement('div');
ig.className = 'input-group';
ig.style.position = 'absolute';
ig.style.bottom = '10px';
ig.style.left = '150px';
ig.style.width = '80px';
sp = document.createElement('span');
sp.id = 'addon-star';
sp.className = 'input-group-addon';
sp.innerHTML = '<span class="glyphicon glyphicon-star"></span>';
el = document.createElement('input');
el.className = 'form-control';
el.id = 'input-star';
el.placeholder = 'STAR';
el.value = $.cookie('star') ? $.cookie('star') : '';
el.setAttribute("aria-describedby", "addon-star");
ig.appendChild(sp);
ig.appendChild(el);
_body.appendChild(ig);

el = document.createElement('button');
el.className = 'btn btn-primary';
el.id = 'get-custom';
el.style.position = 'absolute';
el.style.bottom = '10px';
el.style.left = '240px';
sp = document.createElement('span');
sp.className = 'glyphicon glyphicon-play';
el.appendChild(sp);
_body.appendChild(el);
/*
  Document ready
*/
$(document).ready(function() {
    google.maps.event.addListener(map, "idle", get), checkMarkerTimeout(), getLocation(),
    $("#get-custom").on("click", function() {
        star = parseInt($("#input-star")[0].value),
        iv   = parseInt($("#input-iv")[0].value);
        
        $.cookie("star", star, { path: "/" });
        $.cookie("iv", iv, { path: "/" });
        try {
            for (var a = markers.length - 1; a >= 0; a--)  markers[a].iv < iv && (markers[a].setMap(null), markers.splice(a, 1));
        } catch (a) {}
        get();
    });

    //timeout every 5 seconds
    setTimeout(findBestPokemon, 5000);
});
/*
  CUSTOM VAR
*/
var gLastNotifPokemon = new Array();
var gArrBestMove = [["none", "none"], ["Vine Whip", "Sludge Bomb"], ["Vine Whip", "Solar Beam"], ["Vine Whip", "Solar Beam"], ["Scratch", "Flamethrower"], ["Scratch", "Flamethrower"], ["Wing Attack", "Fire Blast"], ["Bubble", "Aqua Tail"], ["Water Gun", "Hydro Pump"], ["Water Gun", "Hydro Pump"], ["Bug Bite", "Struggle"], ["Bug Bite", "Struggle"], ["Bug Bite", "Bug Buzz"], ["Bug Bite", "Struggle"], ["Bug Bite", "Struggle"], ["Poison Jab", "Sludge Bomb"], ["Tackle", "Aerial Ace"], ["Wing Attack", "Aerial Ace"], ["Wing Attack", "Hurricane"], ["Tackle", "Body Slam"], ["Bite", "Hyper Beam"], ["Peck", "Drill Peck"], ["Steel Wing", "Drill Run"], ["Poison Sting", "Gunk Shot"], ["Bite", "Gunk Shot"], ["Thunder Shock", "Thunder"], ["Spark", "Thunder"], ["Mud Shot", "Rock Slide"], ["Mud Shot", "Earthquake"], ["Poison Sting", "Sludge Bomb"], ["Poison Sting", "Sludge Bomb"], ["Poison Jab", "Earthquake"], ["Poison Sting", "Sludge Bomb"], ["Poison Jab", "Sludge Bomb"], ["Poison Jab", "Earthquake"], ["Pound", "Moonblast"], ["Pound", "Moonblast"], ["Ember", "Body Slam"], ["Ember", "Fire Blast"], ["Pound", "Body Slam"], ["Pound", "Hyper Beam"], ["Bite", "Sludge Bomb"], ["Wing Attack", "Poison Fang"], ["Razor Leaf", "Sludge Bomb"], ["Razor Leaf", "Sludge Bomb"], ["Razor Leaf", "Solar Beam"], ["Bug Bite", "Seed Bomb"], ["Bug Bite", "Solar Beam"], ["Bug Bite", "Signal Beam"], ["Bug Bite", "Bug Buzz"], ["Mud Shot", "Dig"], ["Mud Shot", "Earthquake"], ["Scratch", "Body Slam"], ["Scratch", "Play Rough"], ["Water Gun", "Cross Chop"], ["Water Gun", "Hydro Pump"], ["Scratch", "Cross Chop"], ["Low Kick", "Cross Chop"], ["Bite", "Body Slam"], ["Fire Fang", "Fire Blast"], ["Bubble", "Body Slam"], ["Bubble", "Scald"], ["Bubble", "Hydro Pump"], ["Zen Headbutt", "Psyshock"], ["Psycho Cut", "Shadow Ball"], ["Psycho Cut", "Psychic"], ["Low Kick", "Cross Chop"], ["Low Kick", "Cross Chop"], ["Karate Chop", "Cross Chop"], ["Vine Whip", "Power Whip"], ["Razor Leaf", "Power Whip"], ["Razor Leaf", "Solar Beam"], ["Bubble", "Water Pulse"], ["Poison Jab", "Hydro Pump"], ["Rock Throw", "Rock Slide"], ["Mud Shot", "Stone Edge"], ["Mud Shot", "Stone Edge"], ["Ember", "Fire Blast"], ["Ember", "Fire Blast"], ["Water Gun", "Psychic"], ["Water Gun", "Psychic"], ["Spark", "Thunderbolt"], ["Spark", "Flash Cannon"], ["Cut", "Leaf Blade"], ["Peck", "Drill Peck"], ["Feint Attack", "Drill Peck"], ["Water Gun", "Aqua Tail"], ["Frost Breath", "Blizzard"], ["Acid", "Sludge Bomb"], ["Poison Jab", "Sludge Bomb"], ["Tackle", "Water Pulse"], ["Frost Breath", "Blizzard"], ["Lick", "Sludge Bomb"], ["Shadow Claw", "Sludge Bomb"], ["Shadow Claw", "Sludge Wave"], ["Rock Throw", "Stone Edge"], ["Pound", "Psychic"], ["Zen Headbutt", "Psychic"], ["Bubble", "Water Pulse"], ["Metal Claw", "X Scissor"], ["Spark", "Thunderbolt"], ["Spark", "Thunderbolt"], ["Confusion", "Psychic"], ["Zen Headbutt", "Solar Beam"], ["Mud Slap", "Bone Club"], ["Mud Slap", "Earthquake"], ["Rock Smash", "Stone Edge"], ["Rock Smash", "Brick Break"], ["Zen Headbutt", "Hyper Beam"], ["Acid", "Sludge Bomb"], ["Acid", "Sludge Bomb"], ["Mud Slap", "Stomp"], ["Mud Slap", "Stone Edge"], ["Pound", "Psychic"], ["Vine Whip", "Power Whip"], ["Mud Slap", "Earthquake"], ["Water Gun", "Dragon Pulse"], ["Water Gun", "Hydro Pump"], ["Mud Shot", "Aqua Tail"], ["Poison Jab", "Megahorn"], ["Water Gun", "Power Gem"], ["Water Gun", "Hydro Pump"], ["Zen Headbutt", "Psychic"], ["Steel Wing", "Bug Buzz"], ["Frost Breath", "Psyshock"], ["Thunder Shock", "Thunder"], ["Ember", "Fire Blast"], ["Rock Smash", "X Scissor"], ["Tackle", "Earthquake"], ["Splash", "Struggle"], ["Bite", "Hydro Pump"], ["Frost Breath", "Blizzard"], ["Pound", "Struggle"], ["Tackle", "Body Slam"], ["Water Gun", "Hydro Pump"], ["Thunder Shock", "Thunder"], ["Ember", "Fire Blast"], ["Tackle", "Signal Beam"], ["Water Gun", "Brine"], ["Water Gun", "Hydro Pump"], ["Scratch", "Aqua Jet"], ["Mud Shot", "Stone Edge"], ["Bite", "Hyper Beam"], ["Zen Headbutt", "Body Slam"], ["Frost Breath", "Blizzard"], ["Thunder Shock", "Thunder"], ["Ember", "Fire Blast"], ["Dragon Breath", "Aqua Tail"], ["Dragon Breath", "Dragon Pulse"], ["Dragon Breath", "Dragon Claw"], ["Psycho Cut", "Psychic"], ["Pound", "Hurricane"]];
/*
  OVERWITE FUNC
*/
function SetMarkers(a, b, c) {
  var d, e, f = "Y";
  $.each(b.pokemons, function(b, g) {
      if ((g.s >= star || (g.v[0] || g.v[1] || g.v[2])) && (g.v[0] + g.v[1] + g.v[2]) / 45 * 100 >= iv || g.i === 131 || g.i === 143 || g.i === 149) {
          if (f = "Y",
          e = new google.maps.LatLng(g.a,g.n),
          0 < markers.length)
              for (var h = 0; h < markers.length; h++)
                  if (g.t == markers[h].time && e.lat() == markers[h].getPosition().lat() && e.lng() == markers[h].getPosition().lng()) {
                      f = "N";
                      break
                  }
          "Y" == f && (d = (g.v[0] || g.v[1] || g.v[2]) && (g.v[0] + g.v[1] + g.v[2]) / 45 * 100 > 80 ? "https://s3-ap-northeast-1.amazonaws.com/download.poke5566.com/photos/" + right("00" + g.i, 3) + ".png" : g.s >= 3 ? "https://s3-ap-northeast-1.amazonaws.com/download.poke5566.com/images/" + right("00" + g.i, 3) + ".png" : "https://s3-ap-northeast-1.amazonaws.com/download.poke5566.com/icons/" + g.i + ".png",
          marker = new google.maps.Marker({
              text: pokemonEn[g.i],
              position: e,
              map: a,
              icon: d,
              time: g.t.toString(),
              zIndex: g.s,
              iv: (g.v[0] + g.v[1] + g.v[2]) / 45 * 100
          }),
          google.maps.event.addListener(marker, "click", function(b, d) {
              return function() {
                  var d = 0;
                  isNaN(parseInt(g.t)) || (d = new Date,
                  myEndTime = new Date(parseInt(g.t)),
                  d = d.dateDiff("s", myEndTime),
                  0 > d && (d = 0,
                  b.setMap(null ))),
                  0 < d && (c.setContent(Get_infowindow(g, formatSecond(d))),
                  isNaN(parseInt(g.t)) || getSecs(b),
                  c.open(a, b),
                  clicktype = "click")
              }
          }(marker, b)),
          navigator.userAgent.match(/android/i) || navigator.userAgent.match(/(iphone|ipod);?/i) || (google.maps.event.addListener(marker, "mouseover", function(b, d) {
              return function() {
                  if ("" == clicktype) {
                      clearTimeout(myTimer);
                      var d = 0;
                      isNaN(parseInt(g.t)) || (d = new Date,
                      myEndTime = new Date(parseInt(g.t)),
                      d = d.dateDiff("s", myEndTime),
                      0 > d && (d = 0,
                      b.setMap(null ))),
                      0 < d && (c.setContent(Get_infowindow(g, formatSecond(d))),
                      isNaN(parseInt(g.t)) || getSecs(b),
                      c.open(a, b),
                      clicktype = "mouseover")
                  }
              }
          }(marker, b)),
          google.maps.event.addListener(marker, "mouseout", function(a, b) {
              return function() {
                  "mouseover" == clicktype && (clicktype = "",
                  c.close())
              }
          }(marker, b))),
          google.maps.event.addListener(c, "closeclick", function() {
              "click" == clicktype && (clicktype = "")
          }),
          0 == sh && lookLat && lookLng && lookLat == g.a && lookLng == g.n && (h = 0,
          isNaN(parseInt(g.t)) || (h = new Date,
          myEndTime = new Date(parseInt(g.t)),
          h = h.dateDiff("s", myEndTime),
          0 > h && (h = 0,
          marker.setMap(null ))),
          0 < h && (c.setContent(Get_infowindow(g, formatSecond(h))),
          isNaN(parseInt(g.t)) || getSecs(marker),
          c.open(a, marker)),
          sh = 1),
          markers.push(marker))
      }
  })
}
function Get_infowindow(a, b) {
    var c = "";
    if (!isNaN(parseInt(a.t))) {
        var sStar1 = (pokemonMoves[a.m[0]].name == gArrBestMove[a.i][0]) ? "&#9757" : '';
        var sStar2 = (pokemonMoves[a.m[1]].name == gArrBestMove[a.i][1]) ? "&#9757" : '';
        var h, e = (new Date(parseInt(a.t)),
        "https://maps.google.com/?q=" + a.a + "," + a.n), f = "https://poke5566.com/?lat=" + a.a + "&lng=" + a.n, g = "【寶可五六雷達】發現【" + pokemonZhTw[pokemonEn[a.i]] + "】囉！剩下" + b + "，消失時間" + new Date(a.t).getHours() + "時" + new Date(a.t).getMinutes() + "分，快來看看他在哪裡？";
        h = navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("Android") != -1 ? "http://line.me/R/msg/text/?" + g + f + "&referral=line" : "https://www.facebook.com/dialog/share?app_id=1680267198959582&quote=" + g + "&href=" + encodeURIComponent(f + "&referral=facebook");
        var i;
        a.v[0] || a.v[1] || a.v[2] || a.m[0] || a.m[1] ? (i = '<span class="myfont_line">IV <strong>' + ((a.v[0] + a.v[1] + a.v[2]) / 45 * 100).toFixed(2) + "% </strong>(" + String(a.v[0]) + "/" + String(a.v[1]) + "/" + String(a.v[2]) + ")</span><br>",
        i += '<span class="myfont_line"><strong>' + pokemonMoves[a.m[0]].name + " </strong> (" + pokemonMovesZh[a.m[0]].zh + ')' + sStar1 + '</span>&nbsp;<span class="pull-right">' + pokemonMoves[a.m[0]].dps + " dps</span><br>",
        i += '<span class="myfont_line"><strong>' + pokemonMoves[a.m[1]].name + " </strong> (" + pokemonMovesZh[a.m[1]].zh + ')' + sStar2 + '</span>&nbsp;<span class="pull-right">' + pokemonMoves[a.m[1]].dps + " dps</span><br>") : i = "",
        c = "<div class=myfont_title_m><span class=myfont_line><b>" + pokemonEn[a.i] + "</b>&nbsp;(" + pokemonZhTw[pokemonEn[a.i]] + ')</span><span class="pull-right" style="padding-left: 4px; font-weight: bold"><span id=countdown>' + b + "</span></span><br>",
        c += i,
        c += '<span class="myfont_line">' + parseFloat(a.a.toFixed(10)) + ", " + parseFloat(a.n.toFixed(10)) + "</span></div>",
        c += '<div style="margin-top: 2px;"><a class="btn btn-primary btn-sm" href="' + e + '" role="button" target="_blank" style="margin-right:5px;">導航&nbsp;&nbsp;<span class="glyphicon glyphicon-circle-arrow-right" aria-hidden="true"></span></a>',
        c += '<a class="btn btn-success btn-sm" href="' + h + '" role="button" target="_blank">分享&nbsp;&nbsp;<span class="glyphicon glyphicon-bullhorn" aria-hidden="true"></span></a></div>',
        c += '<span style="position:absolute; bottom:0; right:0; font-size:10px !important;"><b>poke5566.com</b></span>'
    }
    return c
}
/*
  CUSTOM FUNC
*/
function findBestPokemon() {
  $.ajax({
    url: url(),
    async: !0,
    dataType: "JSON",
    success: function(b) {
      if (b)
        if (b.pokemons.length) {
            SendEmailIfGoodPokemon(map, b, infowindow);
        } 
    },
    error: function(a) {
      //nothing...
    }
  });
  setTimeout(findBestPokemon, 5000);
}
function SendEmailIfGoodPokemon(a, b, c) {
  var nIVThreshold = parseInt($.cookie('iv'));
  var arrCurrentNotifPokemon = new Array();

  $.each(b.pokemons, function(b, g) {
    var aCurrentNotifPokemon = new Object();
    var fIV = (g.v[0] + g.v[1] + g.v[2]) / 45 * 100;
    fIV = fIV.toPrecision(4);

    if ((g.s >= star || (g.v[0] || g.v[1] || g.v[2])) && fIV >= nIVThreshold || g.i === 131 || g.i === 143 || g.i === 149) {
      var sStar1 = (pokemonMoves[g.m[0]].name == gArrBestMove[g.i][0]) ? "★★★" : '',
          sStar2 = (pokemonMoves[g.m[1]].name == gArrBestMove[g.i][1]) ? "★★★" : '';

      //a good pokemon!!!
      aCurrentNotifPokemon['isSended'] = isSended(g);
      aCurrentNotifPokemon['index']    = pokemonEn[g.i];
      aCurrentNotifPokemon['i']        = g.i;
      aCurrentNotifPokemon['s']        = g.s;
      aCurrentNotifPokemon['n']        = g.n; // position for diff pokemon alert or not
      aCurrentNotifPokemon['iv']       = fIV;
      aCurrentNotifPokemon['t']        = formatSecond((new Date).dateDiff("s", new Date(parseInt(g.t))));
      aCurrentNotifPokemon['iv_s']     = fIV + "% (" + g.v[0] + "/" + g.v[1] + "/" + g.v[2] + ")";
      aCurrentNotifPokemon['m1']       = pokemonMovesZh[g.m[0]].en + " ( " + pokemonMovesZh[g.m[0]].zh + ") " + sStar1;
      aCurrentNotifPokemon['m2']       = pokemonMovesZh[g.m[1]].en + " ( " + pokemonMovesZh[g.m[1]].zh + ") " + sStar2;

      //ofcourse need to save it
      arrCurrentNotifPokemon.push(aCurrentNotifPokemon);
    }
  });

  //do send email
  if(arrCurrentNotifPokemon.length) 
    doSendNotif(arrCurrentNotifPokemon);

  gLastNotifPokemon = arrCurrentNotifPokemon;
  get();
}

function isSended(g) {
  var isSended = false;
  gLastNotifPokemon.forEach((pm) => {
    if ( pm.index === pokemonEn[g.i] && pm.n === g.n )
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
    var _total = arrCurrentNotifPokemon.length;

    arrCurrentNotifPokemon.forEach((pm, index)=>{
      if ( pm.isSended === false ){
        var notification = new Notification("【寶可56】發現超猛 Pokemon！", {
          icon: pm.s >= 3 ? "https://s3-ap-northeast-1.amazonaws.com/download.poke5566.com/images/" + right("00" + pm.i, 3) + ".png" : "https://s3-ap-northeast-1.amazonaws.com/download.poke5566.com/icons/" + pm.i + ".png",
          body: pm.index + " ( " + pokemonZhTw[pokemonEn[pm.i]] + " )"+
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