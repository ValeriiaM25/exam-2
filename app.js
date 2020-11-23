// Slider

$(function() {
  $('.rev_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      responsive: [
                {
                    breakpoint: 1199.98,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      arrows: false
                    }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                  }
              }
            ]
      
  })
})

//Google Maps

let map;

      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });
      }

      function initMap() {
        const ny = { lat: 40.74862742262786, lng: -73.98556784266994 }; 
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: ny,
    });
        const marker = new google.maps.Marker({
            position: ny,
            map: map,
            title: "Commercial Center",
            icon: 'marker.png'
        
        });
}