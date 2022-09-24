'use strict'

const li        = document.querySelectorAll('.li')
const bloque    = document.querySelectorAll('.bloque')

// CLICK en li
    // TODOS .li quitar la clase activo
    // TODOS .bloque quitar la clase activo
    // .li con la posicion se añadimos la clase activo
    // .bloque con la posicion se añadimos la clase activo

// Recorriendo todos los LI
li.forEach( ( cadaLi , i )=>{
    // Asignando un CLICK a CADALI
    li[i].addEventListener('click',()=>{

        // Recorrer TODOS los .li
        li.forEach( ( cadaLi , i )=>{
            // Quitando la clase activo de cada li
            li[i].classList.remove('activo')
            // Quitando la clase activo de cada bloque
            bloque[i].classList.remove('activo')
        })

        // En el li que hemos click le añadimos la clase activo
        li[i].classList.add('activo')
        // En el bloque con la misma posición le añadimos la clase activo
        bloque[i].classList.add('activo')

    })
})






$(document).ready(function () {
    AOS.init();



    $('.whatsapp-button').click(function (e) {
        //Evento Whatsapp - Abrir
        e.preventDefault();
        $('.ws-chat').fadeIn();
    });

    $('.close-link').click(function (e) {
        e.preventDefault();
        $('.ws-chat').fadeOut();
    });


    $('.close-button').click(function () {

        var $el = $(this);

        setTimeout(function () {

            $el.toggleClass('active');

            $('.menu-fullscreen').toggleClass('open');

            $('.menu-principal li').each(function (i) {
                (function (self, j) {
                    setTimeout(function () {
                        $(self).toggleClass('animated fadeInUp');
                    }, (j * 300) + 300);
                })(this, i);
            });


        }, 300);

    });

    $(document).mouseup(function (e) {
        var container = $(".ws-chat");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.fadeOut();
        }
    });

    $('.send').click(function () {
        //Evento Whatsapp - Enviar

        var mensaje = $('#mensaje').val();
        var telefono = $(this).data("tel");

        window.open('https://api.whatsapp.com/send?phone=' + telefono + '&text=' + encodeURIComponent(mensaje));

        $('#mensaje').val('');
    });


    menuScroll();

    $(window).scroll(menuScroll);
});


function menuScroll() {


    if ($(window).scrollTop() >= 100) { // this refers to window
        $('.nav-top').addClass('active');
    } else {
        $('.nav-top').removeClass('active');
    }

}


var locations = [
    ['Sede Principal: M 24 - Urb. Los Cipreses', -11.121223792587912, -77.59522107947434, 1]
];

//var icon = ['public/img/marker-menorca.png','public/img/marker-map.png'];



// Initialize and add the map
function initMap() {

    var icon = [{
        url: path + "assets/img/marker.svg", // url
        scaledSize: new google.maps.Size(70, 70), // scaled size
    }];

    // The location of Uluru , ,,-11.121081, -77.594825
    var uluru = { lat: -11.121266, lng: -77.595039 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
        zoom: 16,
        center: uluru,
        disableDefaultUI: true,
        fullscreenControl: true,
        zoomControl: false,
        scaleControl: false,
        gestureHandling: 'greedy',
        scrollwheel: false,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f8f8f9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#e8e9ec"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d9d9d9"
                    }
                ]
            }
        ]
    });
    // The marker, positioned at Uluru
    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            icon: icon[i],
            map: map

        });

        /*google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                var content = '<div class="infowin">'+
                    '<p>'+locations[i][0]+'</p>'+


                    '</div>';
                infowindow.setContent(content);
                infowindow.open(map, marker);
            }
        })(marker, i));*/
    }

}




$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });