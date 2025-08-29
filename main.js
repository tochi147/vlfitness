document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const icon = item.querySelector('i');
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        } else {
            answer.style.display = 'block';
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        }
    });
});


// const menuicon = document.getElementById('menu-icon');
// const navbars = document.getElementById('nav-bar');
// menuicon.addEventListener('click', () => { console.log('menu icon clicked!');  navbars.classList.toggle('sidebar');
// if (navbars.classList.contains('sidebar')){
//     menuicon.innerHTML = '&times;';
//     document.body.classList.add('no-scroll');
// document.documentElement.classList.add('no-scroll');
// } else {
//     menuicon.innerHTML = '&#9776;';
// document.body.classList.remove('no-scroll');
// document.documentElement.classList.remove('no-scroll');
// }
// });

const menuicon = document.getElementById('menu-icon');
const navbars = document.getElementById('nav-bar');

menuicon.addEventListener('click', () => {
  console.log('menu icon clicked!');
  navbars.classList.toggle('active');   // ✅ match CSS

  if (navbars.classList.contains('active')) {
    menuicon.innerHTML = '&times;'; // Close icon
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
  } else {
    menuicon.innerHTML = '&#9776;'; // Hamburger icon
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
  }
});

//  const menuBtn = document.getElementById("menu-icon");
//   const navBar = document.getElementById("nav-bar");

//   menuBtn.addEventListener("click", () => {
//     navBar.classList.toggle("active");

//   });