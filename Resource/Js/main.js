function submitForm() {
    var optionPicked = document.getElementById("userType").value;
    if (optionPicked == "p") {
        window.location.href = "http://www.fb.com";
    }else{
        window.location.href = "http://www.gmail.com";
    }
    // alert(`submitting for ${optionPicked}`);
return false;
}

