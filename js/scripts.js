
// $(document).ready(function(){
//     $("#work1").mouseover(function(){
//       $("#overlay1").show();
//     }).mouseout(function(){
//       $("#overlay1").hide();
//     });
//   });
//   $(document).ready(function(){
//     $("#work2").mouseover(function(){
//       $("#overlay2").show();
//     }).mouseout(function(){
//       $("#overlay2").hide();
//     });
//   });
//   $(document).ready(function(){
//     $("#work3").mouseover(function(){
//       $("#overlay3").show();
//     }).mouseout(function(){
//       $("#overlay3").hide();
//     });
//   });
//   $(document).ready(function(){
//     $("#work4").mouseover(function(){
//       $("#overlay4").show();
//     }).mouseout(function(){
//       $("#overlay4").hide();
//     });
//   });
//   $(document).ready(function(){
//     $("#work5").mouseover(function(){
//       $("#overlay5").show();
//     }).mouseout(function(){
//       $("#overlay5").hide();
//     });
//     $("#work6").mouseover(function(){
//       $("#overlay6").show();
//     }).mouseout(function(){
//       $("#overlay6").hide();
//     });
//     $("#work7").mouseover(function(){
//       $("#overlay7").show();
//     }).mouseout(function(){
//       $("#overlay7").hide();
//     });
//     $("#work8").mouseover(function(){
//       $("#overlay8").show();
//     }).mouseout(function(){
//       $("#overlay8").hide();
//     });
//   });
$(document).ready(function(){
  $("#dev_icon.png").click(function(){
  $("#dev_icon.png").toggle();
  $("#development").toggle();
});
    $("#development").click(function(){
      $("#development").slideUp();
      $("#dev-icon.png").slideDown();
    });
});
$(document).ready(function(){
  $("#design-img").click(function(){
  $("#design-img").toggle();
  $("#design").toggle();
});
    $("#design").click(function(){
      $("#design").slideUp();
      $("#design-icon.png").slideDown();
    });
});
$(document).ready(function(){
  $("#product-img").click(function(){
  $("#product-img").toggle();
  $("#product").toggle();
});
    $("#product").click(function(){
      $("#product").slideUp();
      $("#product-icon").slideDown();
    });
});
