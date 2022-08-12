var sociallinks ="Facebook : https://www.facebook.com/kyrillos.co , instagram: https://www.instagram.com/kyrillos_dev/?utm_source=qr , twitter : https://twitter.com/kyrillos_ayman?s=09> , whatsapp : https://wa.me//+201014994743 , snapchat : https://www.snapchat.com/add/im_kero?share_id=1PjWL23W00A&locale=en-US .";
let copybtn = document.getElementById("copybtn");
let sharelink = document.getElementById("share-link");
let statushare = document.getElementById("statu-share");
let statucopy = document.getElementById("statu-copy");
copybtn.onclick = function(){
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(sociallinks);
  }

  sharelink.onclick = function(){
    /* Copy the text inside the text field */
   navigator.clipboard.writeText("https://kyrilos.repl.co");
 }