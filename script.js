var text = document.getElementById('texts');

function timeout() {
  setTimeout(function () {
    text.innerHTML = getRandomText(texts);
    text.style.cssText = "font-size: 4vw";
    timeout();
  }, 5000);
}

function getRandomText(items)
{
  return items[Math.floor(Math.random()*items.length)];
}

timeout();