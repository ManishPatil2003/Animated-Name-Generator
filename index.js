function setName() {
    var result = document.getElementById("result");
    var name = document.getElementById("name").value;
    var animationType = document.getElementById("animation-type").value;
    var boxElement = document.createElement("div");
    boxElement.classList.add("box");

    var animationProperties = {};
    if (animationType === "fadeIn") {
        animationProperties = {
            animationName: "fadeIn",
            animationDuration: "1.1s",
            animationIterationCount: "1",
            transition: "transform 0.2s"
        };
    } else if (animationType === "scaleIn") {
        animationProperties = {
            animationName: "scaleIn",
            animationDuration: "2s",
            animationIterationCount: "1",
            transition: "transform 0.5s"
        };
    } else if (animationType === "rotateIn") {
        animationProperties = {
            animationName: "rotateIn",
            animationDuration: "1s",
            animationIterationCount: "1",
            transition: "transform 0.4s"
        };
    }

    for (var i = 0; i < name.length; i++) {
        var spanElement = document.createElement("span");

        spanElement.textContent = name[i];
        spanElement.style.animationDelay = (0.5 + i * 0.5) + 's';
        spanElement.style.animationName = animationType;

        Object.keys(animationProperties).forEach(function (property) {
            spanElement.style[property] = animationProperties[property];
        });

        boxElement.appendChild(spanElement);
    }
    result.innerHTML = ' ';
    result.appendChild(boxElement);


    var video = document.getElementById("backgroundVideo");
    var backgroundVideoSelect = document.getElementById("background-video");
    var fontColorSelect = document.getElementById("favcolor");
    var shadowColor = document.getElementById("shadow-color");
     var fontSizeInput = document.getElementById("font-size-input").value;

    video.src = backgroundVideoSelect.value;
    video.play();

    var spanElements = document.querySelectorAll('.box span');
    spanElements.forEach(function (spanElement) {
        spanElement.style.color = fontColorSelect.value;
        spanElement.style.textShadow = `2px 8px 3px ${shadowColor.value}`;
        spanElement.style.fontSize = fontSizeInput + 'px';
    });

    var video = document.getElementById("backgroundVideo");
    video.play();

}
