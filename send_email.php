<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get the minted content and referral link from the AJAX request
  $mintedContent = $_POST['mintedContent'];
  $referralLink = $_POST['referralLink'];

  // Compose the email
  $to = 'nft@monis.wtf'; // Enter your email address here
  $subject = 'New NFT Minted';
  $message = 'A new NFT has been minted.\n\nMinted Content: ' . $mintedContent . '\nReferral Link: ' . $referralLink;
  $headers = 'From: nft@monis.wtf'; // Enter the "From" email address here

  // Send the email
  $result = mail($to, $subject, $message, $headers);

  // Check if the email was sent successfully
  if ($result) {
    echo 'Email sent successfully.';
  } else {
    echo 'Failed to send email.';
  }
}
?>
