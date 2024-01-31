// Function to update timer on main page
function updateTime() {
    let currentTime = new Date();
    document.getElementById("datetime").textContent = currentTime;
  }
  
updateTime()
setInterval(updateTime, 10);
