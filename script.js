
function scrollToSection(id) {

  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  

  document.getElementById('nav-links').classList.remove('active');
  document.getElementById('hamburger').classList.remove('active');
}


function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('active');
  document.getElementById('hamburger').classList.toggle('active');
}


function openTab(evt, tabName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  

  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}


const reveals = document.querySelectorAll('.reveal');

const revealOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, revealOptions);

reveals.forEach(reveal => {
  revealOnScroll.observe(reveal);
});

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {

    question.classList.toggle('active');
    
  
    const answer = question.nextElementSibling;
    
  
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('preloader').classList.add('hide');
  }, 1000); 
});

const cursorGlow = document.getElementById('cursor-glow');

if (window.matchMedia("(pointer: fine)").matches) {
  document.addEventListener('mousemove', (e) => {
  
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });
}


const cards = document.querySelectorAll('.floating-gallery img');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
 
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
 
    const rotateX = ((y - centerY) / centerY) * -15; 
    const rotateY = ((x - centerX) / centerX) * 15;  
  
    card.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.filter = "grayscale(0%) brightness(1.1)";
    card.style.borderColor = "var(--green)";
    card.style.boxShadow = "0 20px 40px rgba(0, 255, 136, 0.4)";
    card.style.zIndex = "20";
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = "";
    card.style.filter = "";
    card.style.borderColor = "";
    card.style.boxShadow = "";
    card.style.zIndex = "";
  });
});
