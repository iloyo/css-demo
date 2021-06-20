const buttons = document.querySelectorAll("a");

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    let x = event.clientX - event.target.offsetLeft;
    let y = event.clientY - event.target.offsetTop;

    let span;
    span && span.remove();

    span = document.createElement("span");
    span.style.left = x + "px";
    span.style.top = y + "px";
    button.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 1000);
  });
});
