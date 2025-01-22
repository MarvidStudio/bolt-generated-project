let currentButtonId = null;

    function openEditMenu(buttonId) {
      currentButtonId = buttonId;
      const button = document.getElementById(buttonId);
      const buttonLink = button.querySelector('.button-link');
      
      document.getElementById('buttonText').value = buttonLink.textContent;
      document.getElementById('buttonLink').value = buttonLink.href;

      document.getElementById('sideMenu').classList.add('active');
    }

    document.getElementById('saveButton').addEventListener('click', function() {
      const buttonText = document.getElementById('buttonText').value;
      const buttonLink = document.getElementById('buttonLink').value;

      const button = document.getElementById(currentButtonId);
      const buttonLinkElement = button.querySelector('.button-link');

      buttonLinkElement.textContent = buttonText;
      buttonLinkElement.href = buttonLink;

      document.getElementById('sideMenu').classList.remove('active'); // Hide side menu
    });

    document.getElementById('logoContainer').addEventListener('click', function() {
      document.getElementById('logoUpload').click();
    });

    document.getElementById('logoUpload').addEventListener('change', function(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      
      reader.onload = function(e) {
        document.getElementById('logo').src = e.target.result;
        document.getElementById('logo').style.display = 'block'; // Show logo
        document.getElementById('uploadIcon').style.display = 'none'; // Hide icon
      }
      
      if (file) {
        reader.readAsDataURL(file);
      }
    });
