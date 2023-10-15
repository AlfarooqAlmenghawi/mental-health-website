// SITE BUTTONS

// Add click event to all clickable spans

/* document.addEventListener("DOMContentLoaded", function() {
  var clickableSpans = document.querySelectorAll(".blogs-button, .contact-button");

  clickableSpans.forEach(function(span) {
    span.addEventListener("click", function() {
      var url = this.getAttribute("data-href");
      var target = this.getAttribute("target");
      
      if (target === "_blank") {
        window.open(url, '_blank');
      } else {
        window.location.href = url;
      }
    });
  });
}); */