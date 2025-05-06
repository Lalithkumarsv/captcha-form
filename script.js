function generateRandomString(length = 6) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  function generateCaptcha() {
    const captchaString = generateRandomString();
    const canvas = document.getElementById('captchaCanvas');
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#4CAF50';
    
    for (let i = 0; i < captchaString.length; i++) {
      const angle = Math.random() * 0.4 - 0.2; 
      const x = 30 + i * 30; 
      const y = 30 + Math.random() * 10; 
  
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.fillText(captchaString[i], 0, 0);
      ctx.restore();
    }
  
    window.correctCaptcha = captchaString;
  }
  
  function validateCaptcha() {
    const userInput = document.getElementById('captchaInput').value;
    const messageElement = document.getElementById('captchaMessage');
  
    if (userInput === window.correctCaptcha) {
      messageElement.textContent = 'Captcha verified successfully!';
      messageElement.style.color = 'green';
    } else {
      messageElement.textContent = 'Incorrect CAPTCHA, please try again.';
      messageElement.style.color = 'red';
      generateCaptcha();  
    }
  }
  
  window.onload = generateCaptcha;
  