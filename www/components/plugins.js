// This is a JavaScript file
$(document).on("click","#naoclique",function(){
  navigator.notification.alert("Falei para você não clicar, pague 1000 flexões!",null,"Aviso", "Aceito!" );
});
$(document).on("click","#clique",function(){
  navigator.notification.alert("Boa garoto, merece um biscoitinho!",null,"Parabéns!", "Aceito!" );
});
$(document).on("click","#beep",function(){
  navigator.notification.beep(5);
});
$(document).on("click","#viber",function(){
  navigator.vibrate(4000);

  function MostraMapa(lat, long){
        L.mapquest.key = 'y1RqHFXNAX2VVI9ccx3YoeAQXCf4qxYi';
        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });

        map.addControl(L.mapquest.control());
      }
});
$(document).on("click","#local",function(){
   var onSuccess = function(position) {
        MostraMapa(position.coords.latitude, position.coords.longitude);
    };
  

    function onError(error) {
       alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});