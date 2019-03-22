
// $(".audio_controls").find(".fas").click(function(){
//     $(this).siblings().removeClass("disabled_mus_buts");
//     $(this).addClass("disabled_mus_buts");
   
// }); 


//----------------------------------------
$(".faq_main").siblings("header").addClass("faq_header");
$(".about_main").siblings("header").addClass("faq_header");
$(".contact_main").siblings("header").addClass("faq_header");
$(".contact_main , .about_main, .faq_main").siblings("footer").find(".social_network").addClass("bordernone");
$(".contact_main, .about_main, .faq_main").siblings("footer").find("nav").hide();
$(".faq_title").on("click", function(){
    $(this).siblings(".faq_description").toggleClass("active_faq_description");
    $(this).toggleClass("active_faq_title");
});
$(".header_hamburg").on("click", function(){
  $("header ul").toggleClass("header_ul_active");
});

$(".exit_video").on("click", function(){
  var leg=$("#info_video").attr("src");
    $("#info_video").attr("src",leg); 

  $(".full_video").toggleClass("active_full_video");
  $(".full_video").toggleClass("video_h");
  setTimeout(function(){ $(".full_video").toggleClass("video_w"); }, 500);
});
$(".show_video").on("click", function(){
  
  $(".full_video").toggleClass("active_full_video");
  setTimeout(function(){ $(".full_video").toggleClass("video_w"); }, 500);
  setTimeout(function(){ $(".full_video").toggleClass("video_h"); }, 1000);
});
var aosAn;
var faqLength = document.getElementsByClassName("faq_tab");
var faqQuant=0;
for( aosAn=100; aosAn<=(faqLength.length * 50); aosAn+=50)
{
  faqLength[faqQuant].setAttribute("data-aos-delay", aosAn);
  faqQuant++;
}

/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 400
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  
  /* ---- stats.js config ---- */
  
  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
//   -------------------------------------------------------
//   -------------------------------------------------------

