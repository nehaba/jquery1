function loginValidation() {
    var loginArray = [document.getElementById('txtuname'), document.getElementById('txtpword'), document.getElementById('txtpword1')];
    var i, str = "";
    for (i = 0; i < 3; i++) {
        if (loginArray[i].value == "" || loginArray[i].value == null) {
            str += "" + loginArray[i].name + " , ";
            loginArray[i].focus();
        }
    }
    if (str != "") {
        alert(str + " field must be filled out");
        return false;
    }
    if (loginArray[0].value != "neha" || loginArray[1].value != "tatva123" || loginArray[2].value != "tatva123") {
        alert("Your username or password is not matched");
        loginArray[0].focus();
        return false;
    }
}
function contactValidation() {
    var contactArray = [document.getElementById('txtname'), document.getElementById('txtemail'), document.getElementById('txtsubject'), document.getElementById('txtmassage')];
    var regex = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    var i, str = "";
    for (i = 0; i < 4; i++) {
        if (contactArray[i].value == "" || contactArray[i].value == null) {
            str += "" + contactArray[i].name + " , ";
            contactArray[i].focus();
        }
    }
    if (str != "") {
        alert(str + " field must be filled out");
        return false;
    }
    if (!(regex[0].test(contactArray[1].value))) {
        alert("email is not valid");
        //contactArray[i].style.borderColor = "blue";
        contactArray[1].focus();
        return false;
    }
}
function registerValidation() {
    var registterArray = [document.getElementById('txtuname'), document.getElementById('txtpword'), document.getElementById('txtemail'), document.getElementById('txtpnumber'), document.getElementById('txtfname'), document.getElementById('txtstreet'), document.getElementById('txtcity'), document.getElementById('txtstreet1'), document.getElementById('txtcity1'), document.getElementById('txtstate'), document.getElementById('txtcontry'), document.getElementById('txtstate1'), document.getElementById('txtcountry1')];
    var regex = [/^[A-Za-z0-9]{8,}$/, /^(?=.*[A-Z])(?=.*\d)(?=.*[~@#$!]).{8,}$/, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, /^[0-9]{10}$/];
    var i, str = "", str1 = "";
    for (i = 0; i < 9; i++) {
        if (registterArray[i].value == "" || registterArray[i].value == null) {
            str += "" + registterArray[i].name + " , ";
            registterArray[i].focus();
        }
    }
    for (i = 9; i < 13; i++) {
        if (registterArray[i].value == "--select one--" || registterArray[i].value == null) {
            str += "" + registterArray[i].name + " , ";
            registterArray[i].focus();
        }
    }
    if (str != "") {
        alert(str + " field must be filled out");
        return false;
    }
    for (i = 0; i < 4; i++) {
        if (!(regex[i].test(registterArray[i].value))) {
            str1 += "" + registterArray[i].name + " , ";
            registterArray[i].focus();
        }
    }
    if (str != "") {
        alert(" Enter valid value for" + str1);
        return false;
    }
    if ((document.getElementById('male').checked == false)
    && (document.getElementById('female').checked == false)) {
        alert("Please choose your Gender: Male or Female");
        return false;
    }
    return true;

}
function shoppingFields() {
    var registterArray = [document.getElementById('txtuname'), document.getElementById('txtpword'), document.getElementById('txtemail'), document.getElementById('txtpnumber'), document.getElementById('txtfname'), document.getElementById('txtstreet'), document.getElementById('txtcity'), document.getElementById('txtstreet1'), document.getElementById('txtcity1'), document.getElementById('txtstate'), document.getElementById('txtcontry'), document.getElementById('txtstate1'), document.getElementById('txtcountry1')];
    if (document.getElementById('chkbill').checked) {
        registterArray[7].value = registterArray[5].value;
        registterArray[8].value = registterArray[6].value;
        registterArray[11].value = registterArray[9].value;
        registterArray[12].value = registterArray[10].value;
    }
    else {
        registterArray[7].value = "";
        registterArray[8].value = "";
        registterArray[11].value = "";
        registterArray[12].value = "";
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
function selectAll() {
    var i, items;
    items = document.getElementsByName('clothType');
    if (items[0].checked) {
        for (i = 1; i < items.length; i++) {
            items[i].checked = true;
        }
    }
    else {
        for (i = 1; i < items.length; i++) {
            items[i].checked = false;
        }
    }
}
function abc() {
    if (document.getElementById('chkterms').checked) {
        document.getElementById('submit').disabled = false;
    } else {
        document.getElementById('submit').disabled = true;
    }
}
function reset() {
    document.getElementById("myForm").reset();
}
function subtotal(element) {
    var prize, subtotal_element, total;
    prize = parseFloat(element.parentNode.parentNode.childNodes[5].innerHTML.toString().replace("$", ""));
    subtotal_element = element.parentNode.parentNode.childNodes[9].innerHTML;
    total = prize * parseFloat(element.value);
    element.parentNode.parentNode.childNodes[9].innerText = "$" + total.toString();
}
function subtotalArray(element) {
    var prize, subtotal_element, total;
    prize = parseFloat(element.parentNode.parentNode.childNodes[3].innerHTML.toString().replace("$", ""));
    subtotal_element = element.parentNode.parentNode.childNodes[5].innerHTML;
    total = prize * parseFloat(element.value);
    element.parentNode.parentNode.childNodes[5].innerText = "$" + total.toString();
}
function removeItem(element) {
    document.getElementById('product_detail').deleteRow(element.parentNode.parentNode.rowIndex);
    updateShoppingCart(element);
}
function removeAll() {
    var i, num;
    num = document.getElementById('product_detail').rows.length;
    for (i = 1; i < num - 1; i++) {
        document.getElementById('row' + i).remove();
    }
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
function updateShoppingCart(element) {
    var num, i, total = 0.00, subtotal;
    var num = document.getElementById('product_detail').rows.length;
    if (num > 2) {
        for (i = 1; i < num - 1; i++) {
            subtotal = parseFloat(document.getElementById('product_detail').rows[i].cells[4].innerText.toString().replace("$", ""));
            total = total + subtotal;
        }
        document.getElementById('subtotal').innerText = "$" + total.toString();
        document.getElementById('total').innerText = "$" + total.toString();
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
    var delivery = new Date(+new Date + 1.728e+9);
    for (i = 1; i < items_total - 1; i++) {
        var itm = document.getElementById('row' + i).cells[1].childNodes[1].innerText;
        items_name.push(itm);
    }
    var xyz = confirm(" Are you sure you want to purchase this product? Your total bill amount is" + total);
    if (xyz = true) {
        alert("You selected " + items + " items\n Item names are \n" + items_name.join(" , ") + "\n Total bill amount is" + total + "\n Bill Date is" + d.getDate() + "/" + m_names[d.getMonth()]
    + "/" + d.getFullYear() + "\n Expected Delivery Date - " + delivery.getDate() + "/" + m_names[delivery.getMonth()] + "/" + delivery.getFullYear());
    }
}
function putArray() {
    var i;
    var cartArray = [['images/cart-img01.jpg', 'U.S. polo assn. full sleev plain tshirt for man', '$222.00'], ['images/new-thumb-02.jpg', 'Long sleeve polo shirt online in india-Myntra', '$89.75'], ['images/new-thumb-03.jpg', 'Mens hypernation black casual long sleeve full', '$460.23'], ['images/new-thumb-04.jpg', 'Addidas men teal green patterner round neck', '$356.00']]
    var trinnerhtml = "";
    for (i = 1; i < 5; i++) {
        trinnerhtml += "<tr id=row" + i + '><th scope="row"><img src="' + cartArray[i - 1][0] + '"style="height:94px;width:75px;"/></th> <td> <a onclick="showMyImage1()" class="mouse_hover" style="color:black">"' + cartArray[i - 1][1] + '"</a><br /><b>Color</b><p>Blue</p><b>size</b><p>M</p></td><td class="color_red">' + cartArray[i - 1][2] + '</td><td><input type="number" min="0" name="" id="txtitem1" value="1" style="width:30px;" onchange="subtotalArray(this)"></td><td class="color_red">' + cartArray[i - 1][2] + '</td><td><img src="images/cross-dark.svg" class="svg_size mouse_hover" onclick="removeItem(this)" /></td></tr>\n';
    }
    document.getElementById('ttbody').innerHTML = trinnerhtml;
}
