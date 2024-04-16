function calculateAge() {
    let birthdate = new Date(document.getElementById('birthdate').value);
    let today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    let m = today.getMonth() - birthdate.getMonth();
    let d = today.getDate() - birthdate.getDate();
  
    if (d < 0) {
      m--;
      d += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    if (m < 0) {
      age--;
      m += 12;
    }
    
    
  
    document.getElementById('result').textContent = 'Your age is: ' + age + ' years, ' + m + ' months, and ' + d + ' days.';
    document.getElementById('birthdate').value = '';
    
  }
 