$('#draggable1').draggable({
  handle: '#rotateable1',
  containment: '.imgbox',
  drag: function(){
    document.getElementById("draggable1").style.zIndex = 100;
    document.getElementById("draggable2").style.zIndex = 1;
    document.getElementById("draggable3").style.zIndex = 1;
    document.getElementById("draggable4").style.zIndex = 1;
    document.getElementById("draggable5").style.zIndex = 1;
    document.getElementById("draggable6").style.zIndex = 1;
    document.getElementById("draggable7").style.zIndex = 1;
    document.getElementById("draggable8").style.zIndex = 1;
    document.getElementById("draggable9").style.zIndex = 1;
    document.getElementById("draggable10").style.zIndex = 1;
  }
});

$('#rotateable1').draggable({
  handle: '#rotate1',
  opacity: 0.001,
  helper: 'clone',
  drag: function(event) {
    var // get center of div to rotate
      pw = document.getElementById('rotateable1'),
      pwBox = pw.getBoundingClientRect(),
      center_x = (pwBox.left + pwBox.right) / 2,
      center_y = (pwBox.top + pwBox.bottom) / 2,
      // get mouse position
      mouse_x = event.pageX,
      mouse_y = event.pageY,
      radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
      degree = Math.round((radians * (180 / Math.PI) * -1) + 100);

    var rotateCSS = 'rotate(' + (degree + 170) + 'deg)';
    $('#rotateable1').css({
      '-moz-transform': rotateCSS,
      '-webkit-transform': rotateCSS
    });
  }
});

$('#draggable2').draggable({
  handle: '#rotateable2',
  containment: '.imgbox',
  drag: function(){
    document.getElementById("draggable1").style.zIndex = 1;
    document.getElementById("draggable2").style.zIndex = 100;
    document.getElementById("draggable3").style.zIndex = 1;
    document.getElementById("draggable4").style.zIndex = 1;
    document.getElementById("draggable5").style.zIndex = 1;
    document.getElementById("draggable6").style.zIndex = 1;
    document.getElementById("draggable7").style.zIndex = 1;
    document.getElementById("draggable8").style.zIndex = 1;
    document.getElementById("draggable9").style.zIndex = 1;
    document.getElementById("draggable10").style.zIndex = 1;
  }
});

$('#rotateable2').draggable({
  handle: '#rotate2',
  opacity: 0.001,
  helper: 'clone',
  drag: function(event) {
    var // get center of div to rotate
      pw = document.getElementById('rotateable2'),
      pwBox = pw.getBoundingClientRect(),
      center_x = (pwBox.left + pwBox.right) / 2,
      center_y = (pwBox.top + pwBox.bottom) / 2,
      // get mouse position
      mouse_x = event.pageX,
      mouse_y = event.pageY,
      radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
      degree = Math.round((radians * (180 / Math.PI) * -1) + 100);

    var rotateCSS = 'rotate(' + (degree + 170) + 'deg)';
    $('#rotateable2').css({
      '-moz-transform': rotateCSS,
      '-webkit-transform': rotateCSS
    });
  }
});

$('#draggable4').draggable({
  handle: '#rotateable4',
  containment: '.imgbox',
  drag: function(){
    document.getElementById("draggable1").style.zIndex = 1;
    document.getElementById("draggable2").style.zIndex = 1;
    document.getElementById("draggable3").style.zIndex = 1;
    document.getElementById("draggable4").style.zIndex = 100;
    document.getElementById("draggable5").style.zIndex = 1;
    document.getElementById("draggable6").style.zIndex = 1;
    document.getElementById("draggable7").style.zIndex = 1;
    document.getElementById("draggable8").style.zIndex = 1;
    document.getElementById("draggable9").style.zIndex = 1;
    document.getElementById("draggable10").style.zIndex = 1;
  }
});

$('#rotateable4').draggable({
  handle: '#rotate4',
  opacity: 0.001,
  helper: 'clone',
  drag: function(event) {
    var // get center of div to rotate
      pw = document.getElementById('rotateable4'),
      pwBox = pw.getBoundingClientRect(),
      center_x = (pwBox.left + pwBox.right) / 2,
      center_y = (pwBox.top + pwBox.bottom) / 2,
      // get mouse position
      mouse_x = event.pageX,
      mouse_y = event.pageY,
      radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
      degree = Math.round((radians * (180 / Math.PI) * -1) + 100);

    var rotateCSS = 'rotate(' + (degree + 170) + 'deg)';
    $('#rotateable4').css({
      '-moz-transform': rotateCSS,
      '-webkit-transform': rotateCSS
    });


  }
});



$('#draggable3').draggable({
  handle: '#rotateable3',
  containment: '.imgbox',
  drag: function(){
    document.getElementById("draggable1").style.zIndex = 1;
    document.getElementById("draggable2").style.zIndex = 1;
    document.getElementById("draggable3").style.zIndex = 100;
    document.getElementById("draggable4").style.zIndex = 1;
    document.getElementById("draggable5").style.zIndex = 1;
    document.getElementById("draggable6").style.zIndex = 1;
    document.getElementById("draggable7").style.zIndex = 1;
    document.getElementById("draggable8").style.zIndex = 1;
    document.getElementById("draggable9").style.zIndex = 1;
    document.getElementById("draggable10").style.zIndex = 1;
  }
});

$('#rotateable3').draggable({
  handle: '#rotate3',
  opacity: 0.001,
  helper: 'clone',
  drag: function(event) {
    var // get center of div to rotate
      pw = document.getElementById('rotateable3'),
      pwBox = pw.getBoundingClientRect(),
      center_x = (pwBox.left + pwBox.right) / 2,
      center_y = (pwBox.top + pwBox.bottom) / 2,
      // get mouse position
      mouse_x = event.pageX,
      mouse_y = event.pageY,
      radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
      degree = Math.round((radians * (180 / Math.PI) * -1) + 100);

    var rotateCSS = 'rotate(' + (degree + 170) + 'deg)';
    $('#rotateable3').css({
      '-moz-transform': rotateCSS,
      '-webkit-transform': rotateCSS
    });
  }
});

$('#draggable5').draggable({
  handle: '#rotateable5',
  containment: '.imgbox',
  drag: function(){
    document.getElementById("draggable1").style.zIndex = 1;
    document.getElementById("draggable2").style.zIndex = 1;
    document.getElementById("draggable3").style.zIndex = 1;
    document.getElementById("draggable4").style.zIndex = 1;
    document.getElementById("draggable5").style.zIndex = 100;
    document.getElementById("draggable6").style.zIndex = 1;
    document.getElementById("draggable7").style.zIndex = 1;
    document.getElementById("draggable8").style.zIndex = 1;
    document.getElementById("draggable9").style.zIndex = 1;
    document.getElementById("draggable10").style.zIndex = 1;
  }
});

$('#rotateable5').draggable({
  handle: '#rotate5',
  opacity: 0.001,
  helper: 'clone',
  drag: function(event) {
    var // get center of div to rotate
      pw = document.getElementById('rotateable5'),
      pwBox = pw.getBoundingClientRect(),
      center_x = (pwBox.left + pwBox.right) / 2,
      center_y = (pwBox.top + pwBox.bottom) / 2,
      // get mouse position
      mouse_x = event.pageX,
      mouse_y = event.pageY,
      radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
      degree = Math.round((radians * (180 / Math.PI) * -1) + 100);

    var rotateCSS = 'rotate(' + (degree + 170) + 'deg)';
    $('#rotateable5').css({
      '-moz-transform': rotateCSS,
      '-webkit-transform': rotateCSS
    });
  }
});


$('#draggable6').draggable({
  handle: '#rotateable6',
  containment: '.imgbox',
  drag: function(){
    document.getElementById("draggable1").style.zIndex = 1;
    document.getElementById("draggable2").style.zIndex = 1;
    document.getElementById("draggable3").style.zIndex = 1;
    document.getElementById("draggable4").style.zIndex = 1;
    document.getElementById("draggable5").style.zIndex = 1;
    document.getElementById("draggable6").style.zIndex = 100;
    document.getElementById("draggable7").style.zIndex = 1;
    document.getElementById("draggable8").style.zIndex = 1;
    document.getElementById("draggable9").style.zIndex = 1;
    document.getElementById("draggable10").style.zIndex = 1;
  }
});

$('#rotateable6').draggable({
  handle: '#rotate6',
  opacity: 0.001,
  helper: 'clone',
  drag: function(event) {
    var // get center of div to rotate
      pw = document.getElementById('rotateable6'),
      pwBox = pw.getBoundingClientRect(),
      center_x = (pwBox.left + pwBox.right) / 2,
      center_y = (pwBox.top + pwBox.bottom) / 2,
      // get mouse position
      mouse_x = event.pageX,
      mouse_y = event.pageY,
      radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
      degree = Math.round((radians * (180 / Math.PI) * -1) + 100);

    var rotateCSS = 'rotate(' + (degree + 170) + 'deg)';
    $('#rotateable6').css({
      '-moz-transform': rotateCSS,
      '-webkit-transform': rotateCSS
    });
  }
});


$('#draggable7').draggable({
  handle: '#rotateable7',
  containment: '.imgbox',
  drag: function(){
    document.getElementById("draggable1").style.zIndex = 1;
    document.getElementById("draggable2").style.zIndex = 1;
    document.getElementById("draggable3").style.zIndex = 1;
    document.getElementById("draggable4").style.zIndex = 1;
    document.getElementById("draggable5").style.zIndex = 1;
    document.getElementById("draggable6").style.zIndex = 1;
    document.getElementById("draggable7").style.zIndex = 100;
    document.getElementById("draggable8").style.zIndex = 1;
    document.getElementById("draggable9").style.zIndex = 1;
    document.getElementById("draggable10").style.zIndex = 1;
  }
});

$('#rotateable7').draggable({
  handle: '#rotate7',
  opacity: 0.001,
  helper: 'clone',
  drag: function(event) {
    var // get center of div to rotate
      pw = document.getElementById('rotateable7'),
      pwBox = pw.getBoundingClientRect(),
      center_x = (pwBox.left + pwBox.right) / 2,
      center_y = (pwBox.top + pwBox.bottom) / 2,
      // get mouse position
      mouse_x = event.pageX,
      mouse_y = event.pageY,
      radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
      degree = Math.round((radians * (180 / Math.PI) * -1) + 100);

    var rotateCSS = 'rotate(' + (degree + 170) + 'deg)';
    $('#rotateable7').css({
      '-moz-transform': rotateCSS,
      '-webkit-transform': rotateCSS
    });
  }
});

$('#draggable8').draggable({
  handle: '#rotateable8',
  containment: '.imgbox',
  drag: function(){
    document.getElementById("draggable1").style.zIndex = 1;
    document.getElementById("draggable2").style.zIndex = 1;
    document.getElementById("draggable3").style.zIndex = 1;
    document.getElementById("draggable4").style.zIndex = 1;
    document.getElementById("draggable5").style.zIndex = 1;
    document.getElementById("draggable6").style.zIndex = 1;
    document.getElementById("draggable7").style.zIndex = 1;
    document.getElementById("draggable8").style.zIndex = 100;
    document.getElementById("draggable9").style.zIndex = 1;
    document.getElementById("draggable10").style.zIndex = 1;
  }
});

$('#rotateable8').draggable({
  handle: '#rotate8',
  opacity: 0.001,
  helper: 'clone',
  drag: function(event) {
    var // get center of div to rotate
      pw = document.getElementById('rotateable8'),
      pwBox = pw.getBoundingClientRect(),
      center_x = (pwBox.left + pwBox.right) / 2,
      center_y = (pwBox.top + pwBox.bottom) / 2,
      // get mouse position
      mouse_x = event.pageX,
      mouse_y = event.pageY,
      radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
      degree = Math.round((radians * (180 / Math.PI) * -1) + 100);

    var rotateCSS = 'rotate(' + (degree + 170) + 'deg)';
    $('#rotateable8').css({
      '-moz-transform': rotateCSS,
      '-webkit-transform': rotateCSS
    });
  }
});



$('#draggable9').draggable({
  handle: '#rotateable9',
  containment: '.imgbox',
  drag: function(){
    document.getElementById("draggable1").style.zIndex = 1;
    document.getElementById("draggable2").style.zIndex = 1;
    document.getElementById("draggable3").style.zIndex = 1;
    document.getElementById("draggable4").style.zIndex = 1;
    document.getElementById("draggable5").style.zIndex = 1;
    document.getElementById("draggable6").style.zIndex = 1;
    document.getElementById("draggable7").style.zIndex = 1;
    document.getElementById("draggable8").style.zIndex = 1;
    document.getElementById("draggable9").style.zIndex = 100;
    document.getElementById("draggable10").style.zIndex = 1;
  }
});

$('#rotateable9').draggable({
  handle: '#rotate9',
  opacity: 0.001,
  helper: 'clone',
  drag: function(event) {
    var // get center of div to rotate
      pw = document.getElementById('rotateable9'),
      pwBox = pw.getBoundingClientRect(),
      center_x = (pwBox.left + pwBox.right) / 2,
      center_y = (pwBox.top + pwBox.bottom) / 2,
      // get mouse position
      mouse_x = event.pageX,
      mouse_y = event.pageY,
      radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
      degree = Math.round((radians * (180 / Math.PI) * -1) + 100);

    var rotateCSS = 'rotate(' + (degree + 170) + 'deg)';
    $('#rotateable9').css({
      '-moz-transform': rotateCSS,
      '-webkit-transform': rotateCSS
    });
  }
});


$('#draggable10').draggable({
  handle: '#rotateable10',
  containment: '.imgbox',
  drag: function(){
    document.getElementById("draggable1").style.zIndex = 1;
    document.getElementById("draggable2").style.zIndex = 1;
    document.getElementById("draggable3").style.zIndex = 1;
    document.getElementById("draggable4").style.zIndex = 1;
    document.getElementById("draggable5").style.zIndex = 1;
    document.getElementById("draggable6").style.zIndex = 1;
    document.getElementById("draggable7").style.zIndex = 1;
    document.getElementById("draggable8").style.zIndex = 1;
    document.getElementById("draggable9").style.zIndex = 1;
    document.getElementById("draggable10").style.zIndex = 100;
  }
});

$('#rotateable10').draggable({
  handle: '#rotate10',
  opacity: 0.001,
  helper: 'clone',
  drag: function(event) {
    var // get center of div to rotate
      pw = document.getElementById('rotateable10'),
      pwBox = pw.getBoundingClientRect(),
      center_x = (pwBox.left + pwBox.right) / 2,
      center_y = (pwBox.top + pwBox.bottom) / 2,
      // get mouse position
      mouse_x = event.pageX,
      mouse_y = event.pageY,
      radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
      degree = Math.round((radians * (180 / Math.PI) * -1) + 100);

    var rotateCSS = 'rotate(' + (degree + 170) + 'deg)';
    $('#rotateable10').css({
      '-moz-transform': rotateCSS,
      '-webkit-transform': rotateCSS
    });
  }
});

$('#draggable11').draggable({
  handle: '#rotateable11',
  containment: '.imgbox',
  drag: function(){
    document.getElementById("draggable1").style.zIndex = 1;
    document.getElementById("draggable2").style.zIndex = 1;
    document.getElementById("draggable3").style.zIndex = 1;
    document.getElementById("draggable4").style.zIndex = 1;
    document.getElementById("draggable5").style.zIndex = 1;
    document.getElementById("draggable6").style.zIndex = 1;
    document.getElementById("draggable7").style.zIndex = 1;
    document.getElementById("draggable8").style.zIndex = 1;
    document.getElementById("draggable9").style.zIndex = 1;
    document.getElementById("draggable10").style.zIndex = 100;
  }
});

$('#rotateable11').draggable({
  handle: '#rotate11',
  opacity: 0.001,
  helper: 'clone',
  drag: function(event) {
    var // get center of div to rotate
      pw = document.getElementById('rotateable11'),
      pwBox = pw.getBoundingClientRect(),
      center_x = (pwBox.left + pwBox.right) / 2,
      center_y = (pwBox.top + pwBox.bottom) / 2,
      // get mouse position
      mouse_x = event.pageX,
      mouse_y = event.pageY,
      radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
      degree = Math.round((radians * (180 / Math.PI) * -1) + 100);

    var rotateCSS = 'rotate(' + (degree + 170) + 'deg)';
    $('#rotateable11').css({
      '-moz-transform': rotateCSS,
      '-webkit-transform': rotateCSS
    });
  }
});

$('#draggable12').draggable({
  handle: '#rotateable12',
  containment: '.imgbox',
  drag: function(){
    document.getElementById("draggable1").style.zIndex = 1;
    document.getElementById("draggable2").style.zIndex = 1;
    document.getElementById("draggable3").style.zIndex = 1;
    document.getElementById("draggable4").style.zIndex = 1;
    document.getElementById("draggable5").style.zIndex = 1;
    document.getElementById("draggable6").style.zIndex = 1;
    document.getElementById("draggable7").style.zIndex = 1;
    document.getElementById("draggable8").style.zIndex = 1;
    document.getElementById("draggable9").style.zIndex = 1;
    document.getElementById("draggable10").style.zIndex = 100;
  }
});

$('#rotateable12').draggable({
  handle: '#rotate12',
  opacity: 0.001,
  helper: 'clone',
  drag: function(event) {
    var // get center of div to rotate
      pw = document.getElementById('rotateable12'),
      pwBox = pw.getBoundingClientRect(),
      center_x = (pwBox.left + pwBox.right) / 2,
      center_y = (pwBox.top + pwBox.bottom) / 2,
      // get mouse position
      mouse_x = event.pageX,
      mouse_y = event.pageY,
      radians = Math.atan2(mouse_x - center_x, mouse_y - center_y),
      degree = Math.round((radians * (180 / Math.PI) * -1) + 100);

    var rotateCSS = 'rotate(' + (degree + 170) + 'deg)';
    $('#rotateable12').css({
      '-moz-transform': rotateCSS,
      '-webkit-transform': rotateCSS
    });
  }
});
