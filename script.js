const timeSpan = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  const now = new Date();
  // Format as HH:MM:SS
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  timeSpan.textContent = `Current Time: ${hours}:${minutes}:${seconds}`;
}

// Initial call
updateTime();
// Update every second
setInterval(updateTime, 1000);
