$.getJSON( "texts.json", function( data ) {
  setInterval(function () {

    var random = function (obj) {
      var keys = Object.keys(obj);
      return keys[ keys.length * Math.random() << 0];
    };

    var number = random(data);

    var text = $("#texts"),
        numberDom = $("#number");
    text.html('<span>' + data[number] + '</span>');
    text.textfill({
      maxFontPixels: 200
    });

    numberDom.html(number).textfill({
      maxFontPixels: 200
    });
  }, 30 * 1000);

});
