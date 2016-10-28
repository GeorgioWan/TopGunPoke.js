/*
  GLOBAL VAR
*/
var gStar = 5;
/*
  Document ready
*/
$(document).ready(function() {
    //timeout every 5 seconds
    setTimeout(findBestPokemon, 5000);
});
var gO;
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
        var r = lng1 - lng0;
        if (0 > r && (r = -1 * r),
        size = navigator.userAgent.match(/android/i) ? .07 : navigator.userAgent.match(/(iphone|ipod|ipad);?/i) ? .07 : .14,
        plus(),
        size > r) {
            $icon.addClass(animateClass),
            $("#update").attr("disabled", !0);
            var n = (64 * Math.random() + 1,
            64 * Math.random() + 1,
            (new Date).Format("yyyy-MM-dd hh:mm:ss"))
              , i = ed.Encrypt("" + lat0 + "^" + n)
              , a = ed.Encrypt("" + lng1 + "^" + tf);
            i = encodeURIComponent(i),
            a = encodeURIComponent(a);
            var o = "fp.ashx?a=" + lat0 + "&b=" + lng0 + "&c=" + lat1 + "&d=" + lng1 + "&e=" + LimitItem + "&f=" + i + "&g=" + a;
            gO = o;
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
                            for (var t = [], r = 0; r < markers.length; r++)
                                markers[r].lat < lat0 && markers[r].lat > lat1 && markers[r].lng < lng0 && markers[r].lng > lng1 ? t.push(markers[r]) : map.removeLayer(markers[r].marker);
                            markers = t
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
function findBestPokemon() {
  $.ajax({
    url: gO,
    async: !0,
    dataType: "JSON",
    success: function(a) {
      if (a)
        if ("error" == a.fp[0].a)
          alert(a.pk123[0].d2);
        else if ("error2" != a.fp[0].a) {
          if ("out" == a.fp[0].a)
              alert(a.fp[0].b);
          else 
            SendEmailIfGoodPokemon(map, a);
        }
    },
    error: function(a) {
      //nothing...
    }
  });
  setTimeout(findBestPokemon, 5000);
}
function SendEmailIfGoodPokemon(a, b) {
  var arrCurrentNotifPokemon = new Array();

  $.each(b.fp, function(b, g) {

    var aCurrentNotifPokemon = new Object();

    if (parseInt(g.e) >= gStar || parseInt(g.a) === 131 || parseInt(g.a) === 143 || parseInt(g.a) === 149) {
      //a good pokemon!!!
      aCurrentNotifPokemon['isSended'] = isSended(g);
      aCurrentNotifPokemon['index']    = parseInt(g.a);
      aCurrentNotifPokemon['name']     = poke.poke[parseInt(g.a)].name + " (" + poke.poke[parseInt(g.a)].zhtw + ") ";
      aCurrentNotifPokemon['i']        = parseInt(g.a);
      aCurrentNotifPokemon['s']        = parseInt(g.e);
      aCurrentNotifPokemon['n']        = parseInt(g.c); // position for diff pokemon alert or not
      aCurrentNotifPokemon['t']        = formatSecond((new Date).dateDiff("s", new Date(parseInt(g.b))));

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
    if ( pm.index === parseInt(g.a) && pm.n === parseInt(g.c) )
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
        var notification = new Notification("【FINDPKM】發現稀有 Pokemon", {
          icon: "https://findpkm.com/images/NS/" + right("00" + pm.index, 3) + ".png",
          body: pm.name +
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
