const nav = document.querySelector('nav');
    const toggleButton = document.getElementById('toggleButton');
    
    toggleButton.addEventListener('click', function() {
      if (nav.style.display === 'none') {
        nav.style.display = 'block';
      } else {
        nav.style.display = 'none';
      }
    });