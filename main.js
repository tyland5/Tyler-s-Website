
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  //console.log("Scroll Detected");

  //getting scroll position
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop -88; // - sign for color change to happen earlier. + sign for later
    sectionId = current.getAttribute("id");

    let secClass = document.querySelector(".pc-nav a[href*=" + sectionId + "]").classList; //code motion optimization
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      secClass.add("active");
    } 
    else{
      secClass.remove("active");
    }
  });
}
