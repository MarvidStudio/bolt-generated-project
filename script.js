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
