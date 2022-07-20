$(document).ready(function(){
  $(".decrypted-1").hide();
});

function startdecrypt(decrypted, encrypted) {
    // Original text, split into an array and reversed (for faster pop())
    var originalText = decrypted.text().split('').reverse();
    var decryptedText = "";
    var i = 0;

    decrypted.text("");

    var shuffleInterval = setInterval(function(){

      // Generate random strings. You can modify the generator function range
      // (Math.random()*(to-from+1)+from);
      var shuffledText = '';
      var j = originalText.length;
      while(j--) {
        shuffledText += String.fromCharCode((Math.random()*94+33) | 0);
        if(j%32){
          shuffledText += " ";
          j--
        }
      };
      // You can also use this generator to use only the remaining letters
      // while(j--) shuffledText += originalText[(Math.random()*j) | 0];

      // On every 10 cycles, remove a character from the original text to the decoded text
      if(i++ % 2 === 0) decryptedText += originalText.pop();

      // Display
      decrypted.text(decryptedText);
      decrypted.show();
      encrypted.text(shuffledText);

      // Stop when done
      if(!shuffledText.length) clearInterval(shuffleInterval);

    // 50ms looks more dramatic
  },5);
}