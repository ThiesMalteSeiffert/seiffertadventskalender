/*-----------------------------------------------------------Bildwechsel-------------------------------------------*/
<script language="javascript" type="text/javascript">
var typ = 0;
var bild = 0;
window.setInterval("bildwechsel()", 1000);
 
function bildwechsel () {
 
bilder = new Array("bilder/4.jpg", "bilder/5.jpg", "bilder/6.jpg", "bilder/1.jpg", "bilder/2.jpg", "bilder/3.jpg");
 
if (typ == 0) {
    document.getElementById("bild" + (bild+1)).src = bilder[bild];
} else {
    document.getElementById("bild" + (bild+1)).src = bilder[(bild + 4)];
}
 
if (bild < 0) {
    bild++;
} else {
    bild = 0;
    if (typ == 0) {
        typ = 1;
    } else if (typ == 1) {
        typ = 0;
    }
}

}
</script>
<img src="bilder/1.jpg" width="100" height="100" style="border: 0px;" id="bild1"/>
<img src="bilder/2.jpg" width="100" height="100" style="border: 0px;" id="bild2"/>
<img src="bilder/3.jpg" width="100" height="100" style="border: 0px;" id="bild3"/>
