  // ********** responsive header ********** //

$('.header .menu li').on('click', function () {
  $('.header .menu li').removeClass('self');
  $(this).addClass('self');
});

$(".menuIcon").on('click', function () {
  $("nav").toggleClass("active");
  return false;
});

// $(".signUp").on('click', function () {
//   $("nav").removeClass("active");
// });

/////////////////////////////////////////////////
  
  
  
  // <!-- ==================start section_5 jscode================== -->

function initialize() {
    var myLatlng = new google.maps.LatLng(36.567027, 53.062355);
    var mapOptions = {
    zoom: 18,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    var contentString = '<div style="direction: rtl; text-align: right;font-family: Tahoma;">' +
                                '<h4> آکادمی سپهر </h4>' +
                                '</div>';
    
    var infowindow = new google.maps.InfoWindow({
    content: contentString
    });
    
    var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Sepehr Academy'
    });
    
    infowindow.open(map, marker);
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
    });
}
    // <!-- ==================end section_5 jscode================== -->
