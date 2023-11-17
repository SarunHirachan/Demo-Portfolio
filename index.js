
document.addEventListener("DOMContentLoaded", function () {
  // Scroll to the top of the page on page load
  window.scrollTo(0, 0);
});


//intro
const intro = document.querySelector('.intro');
    const wordDisplay = document.getElementById('word-display');

    document.addEventListener('DOMContentLoaded', (e) => {
      const words = ["नमस्ते", "こんにちは", "Hola", "你好", "Привет", "Hello"];
      let currentIndex = 0;

  function displayWords() {
    if (currentIndex < words.length) {
      setTimeout(() => {
        wordDisplay.textContent = words[currentIndex];
        fadeInWord();
      }, 50);
    } else {
      setTimeout(() => {
        intro.classList.add('intro-sliding-up');
        showNavbarAndProfile();
      }, (words.length - 1) * 50);
    }
  }

  function fadeInWord() {
    setTimeout(() => {
      wordDisplay.classList.add('fade-in-word');
      setTimeout(() => {
        wordDisplay.classList.remove('fade-in-word');
        currentIndex++;
        displayWords();
      }, 100);
    }, 50);
  }

  function showNavbarAndProfile() {
    navbar.style.opacity = '1';
    profile.style.opacity = '1';
    progressbar.style.opacity = '1';
  }

  // Initially hide the content by setting opacity to 0
  navbar.style.opacity = '0';
      profile.style.opacity = '0';
      progressbar.style.opacity = '0';

  displayWords();
});


// progress bar

function updateProgressBar(){
  const {scrollTop, scrollHeight} = document.documentElement;
  const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
  document.querySelector('#progressbar').style.setProperty('--progress', scrollPercent);
}

document.addEventListener('scroll', updateProgressBar);




 
// form section
        
// let form = document.getElementById("formId");
// let data = document.getElementById("userdata");
//       let opTag = document.getElementById("thanku");
//       function submitForm(event) {
//          event.preventDefault();
//          data.style.display = "<b>Form submit successful</b>";
//          opTag.innerHTML = "<b>Form submit successful</b>";
//       }
//       form.addEventListener('submit', submitForm);

 function submitForm() {
    // Get the userdata div
    var userdataDiv = document.getElementById("userdata");

    // Replace the content with a thank you message
    userdataDiv.innerHTML = "<p id='thankYouMsg'>Thank you for your response!</p>";

    // Prevent the page from reloading
    event.preventDefault();
}


//new scroll animation

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-from-bottom");

  function handleScrollAnimations() {
    elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight * 0.75 && position > -screenHeight * 0.25) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  }

  // Trigger handleScrollAnimations on page load and scroll
  handleScrollAnimations();
  window.addEventListener("scroll", handleScrollAnimations);
});



 // tech

const circularProgressBars = document.querySelectorAll(".circular-progress");

const progressEndValues = [75, 69, 70, 60, 45, 33];
const speed = 20;

// Function to update progress value
function updateProgress(bar, index) {
    let progressStartValue = 0;
    const progressValue = bar.querySelector(".progress-value");

    const progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        bar.style.background = `conic-gradient(#0077b6 ${progressStartValue * 3.6}deg, #393939 0deg)`;

        if (progressStartValue === progressEndValues[index]) {
            clearInterval(progress);
        }
    }, speed);
}

// Create an Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(circularProgressBars).indexOf(entry.target);
            updateProgress(entry.target, index);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe each circular-progress element
circularProgressBars.forEach(bar => {
    observer.observe(bar);
});

// Initial check in case some progress bars are already in view
circularProgressBars.forEach((bar, index) => {
    if (isInViewport(bar)) {
        updateProgress(bar, index);
        observer.unobserve(bar);
    }
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// project slideshow

document.addEventListener("DOMContentLoaded", function() {
      var currentIndex = 0;
      var images = Array.from(document.querySelectorAll("#sampleProject img"));

      function showImage(index) {
        images.forEach(function(img) {
          img.style.display = "none";
        });

        images[index].style.display = "block";
        currentIndex = index;
      }

      function changeImage(offset) {
        var newIndex = (currentIndex + offset + images.length) % images.length;
        showImage(newIndex);
      }

      function showNextImage() {
        changeImage(1);
      }

      function showPreviousImage() {
        changeImage(-1);
      }

      document.querySelector(".arrow.left").addEventListener("click", showPreviousImage);
      document.querySelector(".arrow.right").addEventListener("click", showNextImage);

      showImage(currentIndex);
      setInterval(showNextImage, 2500);
    });