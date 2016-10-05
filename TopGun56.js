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

el = document.createElement('button');
el.className = 'btn btn-primary';
el.id = 'hideme';
el.style.position = 'absolute';
el.style.bottom = '10px';
el.style.left = '290px';
sp = document.createElement('span');
sp.className = 'glyphicon glyphicon-stop';
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
    $("#hideme").on("click", function() {
        el = document.createElement('div');
        el.style.position = 'fixed';
        el.style.top = '0px';
        el.style.left = '0px';
        el.style.width = '100%';
        el.style.height = '100%';
        el.style.backgroundColor  = 'white';
        _body.appendChild(el);
    }); 

    //timeout every 5 seconds
    setTimeout(findBestPokemon, 5000);
});
/*
  CUSTOM FUNC
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

var gLastNotifPokemon = new Array();

function SendEmailIfGoodPokemon(a, b, c) {
  var sFinalEmail = "";
  var nIVThreshold = parseInt($.cookie('iv'));
  var arrCurrentNotifPokemon = new Array();

  $.each(b.pokemons, function(b, g) {
    var aCurrentNotifPokemon = new Object();
    var fIV = (g.v[0] + g.v[1] + g.v[2]) / 45 * 100;
    fIV = fIV.toPrecision(4);

    if ((g.s >= star || (g.v[0] || g.v[1] || g.v[2])) && fIV >= nIVThreshold || g.i === 131 || g.i === 143 || g.i === 149) {

      //a good pokemon!!!
      aCurrentNotifPokemon['isSended'] = isSended(g);
      aCurrentNotifPokemon['index']    = pokemonEn[g.i];
      aCurrentNotifPokemon['i']        = g.i;
      aCurrentNotifPokemon['s']        = g.s;
      aCurrentNotifPokemon['n']        = g.n; // position for diff pokemon alert or not
      aCurrentNotifPokemon['iv']       = fIV;
      aCurrentNotifPokemon['t']        = formatSecond((new Date).dateDiff("s", new Date(parseInt(g.t))));
      aCurrentNotifPokemon['iv_s']     = fIV + "% (" + g.v[0] + "/" + g.v[1] + "/" + g.v[2] + ")";
      aCurrentNotifPokemon['m1']       = pokemonMovesZh[g.m[0]].en + " ( " + pokemonMovesZh[g.m[0]].zh + ")";
      aCurrentNotifPokemon['m2']       = pokemonMovesZh[g.m[1]].en + " ( " + pokemonMovesZh[g.m[1]].zh + ")";

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
        var notification = new Notification("第 " + (index+1) + " 隻超猛 POKEMON (共 " + _total + " 隻)", {
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