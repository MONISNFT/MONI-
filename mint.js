// Wait for the marketplace iframe to load
window.addEventListener('load', function () {
  var marketplaceFrame = document.getElementById('marketplaceFrame');
  
  // Listen for the minting event within the marketplace iframe
  marketplaceFrame.addEventListener('load', function () {
    var marketplaceDocument = marketplaceFrame.contentWindow.document;

    // Find the minted NFT element in the marketplace page (adjust the selector according to your actual HTML structure)
    var mintedElement = marketplaceDocument.querySelector('.txCompleted');

    // Check if the minted element exists
    if (mintedElement) {
      var mintedContent = mintedElement.innerHTML;
      var referralLink = window.location.href; // Get the referral link from the current URL

      // Send an HTTP request to your server-side script to send an email with the minted content and referral link
      // You will need to implement this part using a server-side scripting language of your choice
      sendEmailNotification(mintedContent, referralLink);
    }
  });
});

function sendEmailNotification(mintedContent, referralLink) {
  // Create an AJAX request to the PHP script
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'send_email.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  // Prepare the data to be sent in the request
  var data = 'mintedContent=' + encodeURIComponent(mintedContent) + '&referralLink=' + encodeURIComponent(referralLink);

  // Send the AJAX request
  xhr.send(data);
}
