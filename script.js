checkDecember();

$.getJSON( "texts.json", function( data ) {
  showRandomNumber(data);
  setInterval(function () {
    showRandomNumber(data);
  }, 15 * 1000);
});

function showRandomNumber(data) {
  var number = random(data);

  var text = $("#texts"),
      numberDom = $("#number");
  text.html('<span>' + data[number] + '</span>');
  text.textfill({
    maxFontPixels: 200
  });

  numberDom.html(function(i, html) {
  var chars = $.trim(number).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
}).textfill({
    maxFontPixels: 200
  });
}

function random(obj) {
  var keys = Object.keys(obj);
  return keys[ keys.length * Math.random() << 0];
}

function checkDecember() {
  var d = new Date();
  n = d.getMonth();

  if (n == 11) {
    $.fn.snow();
  }
}
