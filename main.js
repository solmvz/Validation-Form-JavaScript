function isPersian(event){
    var p = /^[\u0600-\u06FF\s]*$/;
    if(event.match(p)){
        return true;
    }
    return false;
}
function isNumber(event) {
    if (event.keyCode < 48 || event.keyCode > 57) {
        return false;
    }
    return true;
}
function isNumberID(event) {
    if (event.keyCode == 45)
        return true;
    else if (event.keyCode >= 48 && event.keyCode <= 57)
        return true;
    return false;
}
function toFarsiPhone() {

    var input = document.getElementById("phone").value;
    input = input.replace('0','۰');
    input = input.replace('1','۱');
    input = input.replace('2','۲');
    input = input.replace('3','۳');
    input = input.replace('4','۴');
    input = input.replace('5','۵');
    input = input.replace('6','۶');
    input = input.replace('7','۷');
    input = input.replace('8','۸');
    input = input.replace('9','۹');
    document.getElementById("phone").value = input;
}
  function toFarsiId() {
    var input = document.getElementById("nid").value;
    input = input.replace('0','۰');
    input = input.replace('1','۱');
    input = input.replace('2','۲');
    input = input.replace('3','۳');
    input = input.replace('4','۴');
    input = input.replace('5','۵');
    input = input.replace('6','۶');
    input = input.replace('7','۷');
    input = input.replace('8','۸');
    input = input.replace('9','۹');
    document.getElementById("nid").value = input;
}
function toFarsiBD() {
    var input = document.getElementById("day").value;
    input = input.replace('0','۰');
    input = input.replace('1','۱');
    input = input.replace('2','۲');
    input = input.replace('3','۳');
    input = input.replace('4','۴');
    input = input.replace('5','۵');
    input = input.replace('6','۶');
    input = input.replace('7','۷');
    input = input.replace('8','۸');
    input = input.replace('9','۹');
    document.getElementById("day").value = input;

    var input = document.getElementById("month").value;
    input = input.replace('0','۰');
    input = input.replace('1','۱');
    input = input.replace('2','۲');
    input = input.replace('3','۳');
    input = input.replace('4','۴');
    input = input.replace('5','۵');
    input = input.replace('6','۶');
    input = input.replace('7','۷');
    input = input.replace('8','۸');
    input = input.replace('9','۹');
    document.getElementById("month").value = input;

    var input = document.getElementById("year").value;
    input = input.replace('0','۰');
    input = input.replace('1','۱');
    input = input.replace('2','۲');
    input = input.replace('3','۳');
    input = input.replace('4','۴');
    input = input.replace('5','۵');
    input = input.replace('6','۶');
    input = input.replace('7','۷');
    input = input.replace('8','۸');
    input = input.replace('9','۹');
    document.getElementById("year").value = input;
  }
function EnglishName(event) {
    if (event.keyCode == 32 ) { //space
        return true;
    }
    if (event.keyCode >= 65 && event.keyCode <= 90) { //upperrcase letters
        return true;
    }
    if (event.keyCode >= 97 && event.keyCode <= 122) { //lowercase letters
        return true;
    }
    return false;
}
function EnglishMail(event) {
    if (event.keyCode == 64 || event.keyCode == 46) { //@ or .
        return true;
    }
    if (event.keyCode >= 48 && event.keyCode <= 57) { //numbers
        return true;
    }
    if (event.keyCode >= 97 && event.keyCode <= 122) { //lowercase letters
        return true;
    }
    return false;
}
function Password(event) {
    if (event.keyCode >= 48 && event.keyCode <= 57) { //numbers
        return true;
    }
    if (event.keyCode >= 65 && event.keyCode <= 90) { //upperrcase letters
        return true;
    }
    if (event.keyCode >= 97 && event.keyCode <= 122) { //lowercase letters
        return true;
    }
    if (event.keyCode == 91 || event.keyCode == 45 || event.keyCode == 43 || event.keyCode == 33 || //[-+!#$*=]
         event.keyCode == 35 ||event.keyCode == 36 || event.keyCode == 42 || event.keyCode == 61 || event.keyCode == 93){
        return true;
    }
    return false;
}
function ValidateEmail(inputText)
{
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.match(mailformat)){
        return true;
    }
    return false;
}
function formValidation() {

   var title= null;
    for (var i=0; i < document.getElementsByName("uiTitle").length; i++) {
        if (document.getElementsByName("uiTitle")[i].checked) {
            title = document.getElementsByName("uiTitle")[i].value;
        }
    }
    var name = document.getElementsByName("uiName")[0].value;
    var family = document.getElementsByName("uiFamily")[0].value;
    var engname = document.getElementsByName("uiEngname")[0].value;
    var email = document.getElementsByName("uiEmail")[0].value;
    var phone = document.getElementsByName("uiPhonenumber")[0].value;
    var nid = document.getElementsByName("uiNationalId")[0].value;
    var password = document.getElementsByName("uiPassword")[0].value;  
    var password_confirm = document.getElementsByName("uiPasswordConfirm")[0].value;  
    var address = document.getElementsByName("uiAddress")[0].value;  
    var dateofbirth = document.getElementsByName("year")[0].value + "-" +
                      document.getElementsByName("month")[0].value + "-" +
                      document.getElementsByName("day")[0].value;

    var marital_status = null;
    for (var i=0; i < document.getElementsByName("uiMaritalStatus").length; i++) {
        if (document.getElementsByName("uiMaritalStatus")[i].checked) {
            marital_status = document.getElementsByName("uiMaritalStatus")[i].value;
        }
    }

    var interest = "";
    for (var i=0; i < document.getElementsByName("uiInterest").length; i++) {
        if (document.getElementsByName("uiInterest")[i].checked) {
            interest += document.getElementsByName("uiInterest")[i].value + "-";
        }
    }
    
    
    var errorMessage = "";

    // name
    if (name.length < 3)
        errorMessage += ".نام باید بیشتر از 3 حرف باشد -<br/>";

    else if (!isPersian(name))
        errorMessage += ".نام را فارسی وارد کنید -<br/>";

    else if (name.length > 50)
        errorMessage += ".نام باید کمتر از 50 حرف باشد -<br/>";
    
    // family
    if (family.length < 3)
        errorMessage += ".نام خانوادگی باید بیشتر از 3 حرف باشد -<br/>";

    else if (!isPersian(family))
        errorMessage += ".نام خانوادگی را فارسی وارد کنید -<br/>";

    else if (family.length > 100)
        errorMessage += ".نام خانوادگی باید کمتر از 100 حرف باشد -<br/>";
    
    // english name
    if (engname.length > 150)
        errorMessage += ".نام انگلیسی باید کمتر از 150 حرف باشد -<br/>";

    // email
    if (email == "")
       errorMessage += ".ایمیل خود را وارد کنید -<br/>";
    
    else if (!ValidateEmail(email))
       errorMessage += ".فرمت ایمیل نادرست است -<br/>";

    // phone number
    if (phone.length < 11)
       errorMessage += ".شماره تلفن خود را صحیح وارد کنید -<br/>";

    // national id
    if (nid.length < 12)
       errorMessage += ".کد ملی خود را صحیح وارد کنید -<br/>";

    // password
    if (password.length < 8)
       errorMessage += ".رمز عبور باید بیشتر از 8 حرف باشد -<br/>";

    if (password.length > 24)
       errorMessage += ".رمز عبور باید کمتر از 24 حرف باشد -<br/>";

    if (password != password_confirm)
        errorMessage += ".عدم مطابقت تایید رمز عبور -<br/>";

    // address
    if (address.length > 250)
       errorMessage += ".آدرس باید کمتر از 250 حرف باشد -<br/>";

    if (!isPersian(address))
        errorMessage += ".آدرس را فارسی وارد کنید -<br/>";

    // date of birth
    if (dateofbirth < "۱۳۱۰-۰۱-۰۱" || dateofbirth > "۱۳۹۰-۱۲-۲۹" )
        errorMessage += ".تاریخ تولد نادرست است -<br/>";

    // marital status
    if (marital_status == null)
       errorMessage += ".وضعیت تأهل را وارد کنید -<br/>";
    

    if (errorMessage != "") {
        document.getElementById("uiMessage").innerHTML = errorMessage;
        return false;
    }

    return true;
}