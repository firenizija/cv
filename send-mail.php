<?php
$msg = $_POST['mailText'];
$msg = wordwrap($msg, 70);
$sub = $_POST['subject'];
$mail = $_POST['myMail'];
mail("firenizija@gmail.com",$sub, $msg."<br>".$mail);
echo "Email pomyślnie wysłany! Trwa przekierowanie spowrotem do strony";
header("Location: index.html")
?>