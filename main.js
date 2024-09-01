
const sections = document.querySelectorAll("section[id]");

const screenSize = window.matchMedia('(min-width: 1024px)')

screenSize.addEventListener("change", updateNavFunction)
updateNavFunction(screenSize)

function navHighlighter() {
  
  //console.log("Scroll Detected");

  //getting scroll position
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop -88; // - sign for color change to happen earlier. + sign for later
    let sectionId = current.getAttribute("id");

    let secClass = document.querySelector(".pc-nav a[href*=" + sectionId + "]").classList; //code motion optimization
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      secClass.add("active");
    } 
    else{
      secClass.remove("active");
    }
  });
}

function navChanger(){
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop -64; // - sign for color change to happen earlier. + sign for later
    let sectionId = current.getAttribute("id");

    //let navBarIndicator = document.querySelector(".mobile-nav p"); //code motion optimization
    let navBarIndicator = document.getElementById("nav-section")
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      let section = sectionId.split("-")[0]
      if(section === "home"){
        navBarIndicator.textContent = "Welcome"
      }
      else if(section === "projects"){
        navBarIndicator.textContent = "Projects"
      } 
      else if(section === "about"){
        navBarIndicator.textContent = "About Me"
      } 
      else{
        navBarIndicator.textContent = "My Socials"
      }
    } 
  });
}

function updateNavFunction(media){
  if(media.matches){
    window.addEventListener("scroll", navHighlighter);
  }
  else{
    window.addEventListener("scroll", navChanger)
  }
}
