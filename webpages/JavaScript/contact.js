let scrollTimer;
let navbar = document.getElementById("nav");

//this is a function to aid in revealing the hidden text on about-us page
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
        entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el));

window.onscroll = function() {
  scrollFunction();
};

//adjusts the opacity when scrolling
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.opacity = "0.8";
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

function validate(form) {
    let errors = '';
    let focus = '';

    if (form.firstName.value.trim() == '') {
        errors += '• Please enter a first name\n';
        if (!focus) focus = 'firstName';
    }

    if (form.lastName.value.trim() == '') {
        errors += '• Please enter a last name\n';
        if (!focus) focus = 'lastName';
    }

    if (form.email.value.trim() == '') {
        errors += '• Please enter an email address\n';
        if (!focus) focus = 'email';
    } 
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value.trim())) {
        errors += '• Please enter a valid email address (name@domain.com)\n';
        if (!focus) focus = 'email';
    }

    if (form.discord.value.trim() == '') {
        errors += '• Please enter a discord handle\n';
        if (!focus) focus = 'discord';
    }

    if (form.gradyear.value.trim() == '') {
        errors += '• Please enter a graduation year\n';
        if (!focus) focus = 'gradyear';
    } 
    else if (!/^20\d{2}$/.test(form.gradyear.value.trim())) {
        errors += '• Please enter a valid graduation year (20xx)\n';
        if (!focus) focus = 'gradyear';
    }

    if (errors !== '') {
        alert('Please fix the following errors:\n\n' + errors);
        document.getElementById(focus)?.focus();
        return false;
    }

    return true;
}
