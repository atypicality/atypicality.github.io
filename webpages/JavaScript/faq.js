$(document).ready(function () {
  $("#accordion").accordion({
    header: ".question",
    activate: function (event, ui) {
      $(ui.newHeader).find(".plusButton").text("-");
      $(ui.oldHeader).find(".plusButton").text("+");
    },
    heightStyle: "content",
    collapsible: "true"
  });
});

let scrollTimer;
let navbar = document.getElementById("nav");

window.onscroll = function() {
  scrollFunction();
};

//adjusts the opacity when scrolling
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.opacity = "0.8";
    console.log("test");
  }
}

//this is a function that keeps track of where the mouse is and allows us to reset the opacity of the
//navigation bar when we are finished scrolling
(function() {
    document.onmousemove = handleMouseMove;

    function handleMouseMove(event) {
        var eventDoc, doc, body;

        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        var screenWidth = document.documentElement.clientWidth;

        if (event.pageX > screenWidth) {
        } else {
            navbar.style.opacity = "1"; 
        }
    }
})();