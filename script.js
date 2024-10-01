 // Get the elements
 const openPopupBtn = document.querySelector('.btn-login');
 const closePopupBtn = document.querySelector('.close-popup-btn');
 const popupOverlay = document.getElementById('popup');

 // Function to open the popup
 openPopupBtn.addEventListener('click', () => {
     popupOverlay.style.display = 'flex';
 });

 // Function to close the popup
 closePopupBtn.addEventListener('click', () => {
     popupOverlay.style.display = 'none';
 });

 // Optional: Close the popup when clicking outside of it
 window.addEventListener('click', (event) => {
     if (event.target === popupOverlay) {
         popupOverlay.style.display = 'none';
     }
 });

