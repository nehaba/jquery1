
function focusFirst() {

}
function loginValidation() {

    var uname = document.getElementById('txtuname');
    var password = document.getElementById('txtpword');
    var password1 = document.getElementById('txtpword1');
    if (uname.value == "" || uname.value == null) {
        alert("User Name must be filled out");
        uname.focus();
        return false;

    }
    else if (password.value == "" || password.value == null) {
        alert("password must be filled out");
        password.focus();
        return false;
    }
    else if (password1.value == "" || password1.value == null) {
        alert("fill out this field for varify the password");
        password1.focus();
        return false;
    }
    else if (uname.value != "neha") {

        alert("user name is incurrect");
        uname.focus();
        return false;
    }
    else if (password.value != "tatva123") {
        alert("password is incurrect");
        password.focus();
        return false;
    }
    else if (password1.value != "tatva123") {
        alert("both password is not matched");
        password1.focus();
        return false;
    }
    return true;
}

function contactValidation() {
    var name = document.getElementById('txtname');
    var email = document.getElementById('txtemail');
    var subject = document.getElementById('txtsubject');
    var massage = document.getElementById('txtmassage');
    if (name.value == "" || name.value == null) {
        alert("Name must be filled out");
        name.focus();
        return false;

    }
    else if (email.value == "" || email.value == null) {
        alert("Email must be filled out");
        email.focus();
        return false;
    }
    else if (subject.value == "" || subject.value == null) {
        alert("Subject must be filled out");
        subject.focus();
        return false;
    }
    else if (massage.value == "" || massage.value == null) {
        alert("Massage must be filled out");
        massage.focus();
        return false;
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
        alert("email is not valid");
        email.focus();
        return false;
    }
    return true;
}


function selectAll() {
    var items = document.getElementsByName('clothType');
    if (items[0].checked) {
        for (var i = 1; i < items.length; i++) {

            items[i].checked = true;
        }
    }
    else {
        for (var i = 1; i < items.length; i++) {

            items[i].checked = false;
        }
    }

}

function addbox() {
    if (document.getElementById('clothTypeOther').checked) {
        document.getElementById('txtintrest').style.display = 'block';
    } else {
        document.getElementById('txtintrest').style.display = 'none';
    }
}
function onloadregister() {
    document.getElementById('submit').disabled;
    document.getElementById('txtuname').focus();
}
function registerValidation() {

    var uname = document.getElementById('txtuname');
    var email = document.getElementById('txtemail');
    var password = document.getElementById('txtpword');
    var fname = document.getElementById('txtfname');
    var mobile = document.getElementById('txtpnumber');
    var bstreet = document.getElementById('txtstreet');
    var bcity = document.getElementById('txtcity');
    var bstate = document.getElementById('txtstate');
    var bcontry = document.getElementById('txtcontry');
    var sstreet = document.getElementById('txtstreet1');
    var scity = document.getElementById('txtcity1');
    var sstate = document.getElementById('txtstate1');
    var scontry = document.getElementById('txtcountry1');

    if (!(/^[A-Za-z0-9]{8,}$/.test(uname.value)) || uname.value == null) {
        alert("User Name must be 8 character long");
        uname.focus();
        return false;

    }
    else if (fname.value == "" || fname.value == null) {
        alert("First Name must be filled out");
        fname.focus();
        return false;

    }
    else if (password.value == null || (!(/^(?=.*[A-Z])(?=.*\d)(?=.*[~@#$!]).{8,}$/.test(password.value)))) {
        alert("password is 8 charcter long and Must Contains at least one Number, one Capital Letter and one symbol");
        password.focus();
        return false;
    }
    else if (email.value == null || (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)))) {
        alert("email is not valid");
        email.focus();
        return false;
    }
    else if (mobile.value == null || (!(/^[0-9]{10}$/.test(mobile.value)))) {
        alert("mobile number is having 10 digits");
        password.focus();
        return false;
    }
    else if ((document.getElementById('male').checked == false)
    && (document.getElementById('female').checked == false)) {
        alert("Please choose your Gender: Male or Female");
        valid = false;
    }
    else if (bstreet.value == "" || bstreet.value == null) {
        alert("street must be filled out");
        bstreet.focus();
        return false;

    }
    else if (sstreet.value == "" || sstreet.value == null) {
        alert("street must be filled out");
        sstreet.focus();
        return false;

    }
    else if (bcity.value == "" || bcity.value == null) {
        alert("city must be filled out");
        bcity.focus();
        return false;

    }
    else if (scity.value == "" || scity.value == null) {
        alert("city must be filled out");
        scity.focus();
        return false;

    }
    else if (bstate.value == "--select one--" || bstate.value == null) {
        alert("state must be filled out");
        bstate.focus();
        return false;

    }
    else if (sstate.value == "--select one--" || sstate.value == null) {
        alert("state must be filled out");
        sstate.focus();
        return false;

    }
    else if (scontry.value == "--select one--" || scontry.value == null) {
        alert("contry must be filled out");
        scontry.focus();
        return false;

    }
    else if (bcontry.value == "--select one--" || bcontry.value == null) {
        alert("contry must be filled out");
        bcontry.focus();
        return false;

    }

}
function shoppingFields() {
    var items = document.getElementById('chkbill');
    var bstreet = document.getElementById('txtstreet');
    var bcity = document.getElementById('txtcity');
    var bstate = document.getElementById('txtstate');
    var bcontry = document.getElementById('txtcontry');
    var sstreet = document.getElementById('txtstreet1');
    var scity = document.getElementById('txtcity1');
    var sstate = document.getElementById('txtstate1');
    var scontry = document.getElementById('txtcountry1');
    if (items.checked) {
        sstreet.value = bstreet.value;
        scity.value = bcity.value;
        sstate.value = bstate.value;
        scontry.value = bcontry.value;
    }
    else {
        sstreet.value = "";
        scity.value = "";
        sstate.value = "";
        scontry.value = "";
    }
}

function checkbox() {
    var items = document.getElementByName('clothType');
    var count = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i].checked == true) {
            count = count + 1;
        }
        if (count == 0) {
            alert("must checkout one field");
        }

    }
}

function abc() {
    var conditions = document.getElementById('chkterms');
    if (conditions.checked) {
        document.getElementById('submit').disabled = false;
    } else {
        document.getElementById('submit').disabled = true;
    }
}
function reset() {
    document.getElementById("myForm").reset();
}
function showMyImage1(element) {

    window.open("file:///D:/Projects/assignments/html/images/new-thumb-01-big.jpg");
}
function showMyImage2() {

    window.open("file:///D:/Projects/assignments/html/images/new-thumb-02-big.jpg");
}
function showMyImage3() {

    window.open("file:///D:/Projects/assignments/html/images/new-thumb-03-big.jpg");
}
function showMyImage4() {

    window.open("file:///D:/Projects/assignments/html/images/new-thumb-04-big.jpg");
}
function subtotal(element) {
    debugger;
    var td, tr, prize_element, prize, subtotal_element, qty, total;
    td = element.parentNode;
    tr = td.parentNode;
    prize_element = tr.childNodes[5];
    prize = prize_element.innerText.toString();
    prize = prize.replace("$", "");
    prize = parseFloat(prize);
    subtotal_element = tr.childNodes[9];
    qty = parseFloat(element.value);
    total = prize * qty;
    subtotal_element.innerText = "$" + total.toString();

}
function subtotalArray(element) {
    debugger;
    var td, tr, prize_element, prize, subtotal_element, qty, total;
    td = element.parentNode;
    tr = td.parentNode;
    prize_element = tr.childNodes[3].innerHTML;
    prize = prize_element.toString();
    prize = prize.replace("$", "");
    prize = parseFloat(prize);
    subtotal_element = tr.childNodes[5].innerHTML;
    qty = parseFloat(element.value);
    total = prize * qty;
    tr.childNodes[5].innerText = "$" + total.toString();

}
function removeItem(element) {

    var td, tr;
    td = element.parentNode;
    tr = td.parentNode;
    document.getElementById('product_detail').deleteRow(tr.rowIndex);
    updateShoppingCart(element);
}
function removeAll() {
    var i, num;

    num = document.getElementById('product_detail').rows.length;
    for (i = 1; i < num - 1; i++) {
        document.getElementById('row' + i).remove();
    }
}
function updateShoppingCart(element) {

    var td, value, num, i, total = 0.00, subtotal_element, subtotal, total, grandtotal;

    var num = document.getElementById('product_detail').rows.length;

    if (num > 2) {

        for (i = 1; i < num - 1; i++) {

            subtotal_element = document.getElementById('product_detail').rows[i].cells[4];
            subtotal = subtotal_element.innerText.toString();
            subtotal = subtotal.replace("$", "");
            subtotal = parseFloat(subtotal);
            total = total + subtotal;
        }
        grandtotal = "$" + total.toString();
        document.getElementById('subtotal').innerText = grandtotal;
        document.getElementById('total').innerText = grandtotal;
    }
    else {
        document.getElementById('subtotal').innerText = "$" + total.toString();
        document.getElementById('total').innerText = "$" + total.toString();
    }

}
function checkout() {
    
    var items_total = document.getElementById('product_detail').rows.length;
    var items = items_total - 2;
    var items_name = [];
    var total = document.getElementById('subtotal').innerText;
    var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();
    var delivery = new Date(+new Date + 1.728e+9);
    var delivery_date = delivery.getDate();
    var delivery_month = delivery.getMonth();
    var delivery_year = delivery.getFullYear();

    for (i = 1; i < items_total - 1; i++) {
        var itm = document.getElementById('row' + i).cells[1].childNodes[1].innerText;
        items_name.push(itm);
    }
    var xyz = confirm(" Are you sure you want to purchase this product? Your total bill amount is" + total);
    if (xyz = true) {
        alert("You selected " + items + "\n Item names are \n" + items_name.join("\n") + "\n Total bill amount is" + total + "\n Bill Date is" + curr_date + "/" + m_names[curr_month]
    + "/" + curr_year + "\n Expected Delivery Date - " + delivery_date + "/" + m_names[delivery_month] + "/" + delivery_year);
    }
}

function putArray() {
    
    var i;
    var cartArray = [['images/cart-img01.jpg', 'U.S. polo assn. full sleev plain tshirt for man', '$222.00'], ['images/new-thumb-02.jpg', 'Long sleeve polo shirt online in india-Myntra', '$89.75'], ['images/new-thumb-03.jpg', 'Mens hypernation black casual long sleeve full', '$460.23'], ['images/new-thumb-04.jpg', 'Addidas men teal green patterner round neck', '$356.00']]
    var trinnerhtml = "";
    for (i = 1; i < 5; i++) {
        
        trinnerhtml += "<tr id=row" + i + '><th scope="row"><img src="' + cartArray[i - 1][0] + '"style="height:94px;width:75px;"/></th> <td> <a onclick="showMyImage1()" style="color:black">"' + cartArray[i - 1][1] + '"</a><br /><b>Color</b><p>Blue</p><b>size</b><p>M</p></td><td class="color_red">' + cartArray[i - 1][2] + '</td><td><input type="number" min="0" name="" id="txtitem1" value="1" style="width:30px;" onchange="subtotalArray(this)"></td><td class="color_red">' + cartArray[i - 1][2] + '</td><td><img src="images/cross-dark.svg" class="svg_size" onclick="removeItem(this)" /></td></tr>\n';
    }
    document.getElementById('ttbody').innerHTML = trinnerhtml;

}
