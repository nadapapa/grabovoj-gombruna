
function timeout() {
  setTimeout(function () {
    var text = $("#texts");
    text.html('<span>' + getRandomText(texts) + '</span>');
    text.textfill({ 
        maxFontPixels: 200
    });
    timeout();
  }, 30 * 1000);
}

function getRandomText(items)
{
  return items[Math.floor(Math.random()*items.length)];
}

timeout();
