<?php
if($_POST){
    $mail = $_POST['mail'];
    $name = $_POST['name'];
    $nameAbweichend = $_POST['nameAbweichend'];
    $strasse = $_POST['strasse'];
    $plz = $_POST['plz'];
    $ort = $_POST['ort'];
    $land = $_POST['land'];
    $msg = $_POST['msg'];


    $text = "Neue Adventskalender Bestellung!\n\n" . $name . "\nEmail:" . $mail . "\nAbweichender Name:" . $nameAbweichend . "\nLieferadresse:" . $strasse . ", " . $plz . " "  . $ort . ", " . $land . "\nGrusstext (optional):" . $msg;
    $bestellerText = "Guten Tag " . $name . ",\n\n" . "vielen Dank für Ihre Bestellung bei Seiffert's Adventskalender.\n\nFrohe Adventszeit, \n\n Seiffert's";

    

    mail("info@seifferts.com", "Neue Adventskalender Bestellung", $text  , $header);
    mail($mail, " Seiffert's Adventskalender Bestellung", $header, $bestellerText);
}
?>