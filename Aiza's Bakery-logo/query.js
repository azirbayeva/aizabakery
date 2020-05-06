function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               //alert("hi")
               if(pair[0] == variable){return pair[1];}
       }
       return undefined;
}
var isComingFromIndex = getQueryVariable('fromIndex')
var isFormHidden = false
if (isComingFromIndex != undefined) {
    var f = document.getElementById('feedbackForm')
    if (f != undefined) {
        isFormHidden = true
        f.remove()
    }
}

if (!isFormHidden) {
    var f = document.getElementById('lookingForward')
    f.remove()
}