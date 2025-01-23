const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDown = document.querySelector('.dropdown')

toggleBtn.onclick = function () {
  dropDown.classList.toggle('open')
  const isOpen = dropDown.classList.contains('open')

toggleBtnIcon.classList = isOpen
? 'fa-solid fa-xmark'
: 'fa-solid fa-bars' 
}





const navLinks = document.querySelectorAll(".links li a");

const currentPage = window.location.pathname.split("/").pop(); 

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active"); 
  }
});







const targetDate = new Date("2025-02-08T00:00:00").getTime(); 


const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now; 

  if (timeLeft >= 0) {
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // تحديث العناصر في الصفحة
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  } else {
    // 
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Countdown Finished!";
  }
}, 1000);
