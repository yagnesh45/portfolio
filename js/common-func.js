$(document).ready(function() {
    $("#scrollToTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
const cursor = document.querySelector(".cursor");
if (window.innerWidth <= 1024) {
  document.getElementsByTagName("BODY")[0].style.cursor = "default";
  cursor.setAttribute("style", "display:none");
} else {
  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      "display:block; top:" + e.pageY + "px; left:" + e.pageX + "px"
    );
  });
}

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 105) {
        $('#scrollToTop').fadeIn();
    } else {
        $('#scrollToTop').fadeOut();
    }
});