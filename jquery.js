var productValue = [['images/new-thumb-01.jpg', 'a.S. polo assn. full sleev plain tshirt for man', '120.00', '1'],
                    ['images/new-thumb-02.jpg', 'b.S. polo assn. full sleev plain tshirt for man', '123.00', '2'],
                    ['images/new-thumb-03.jpg', 'c.S. polo assn. full sleev plain tshirt for man', '129.00', '3'],
                    ['images/new-thumb-04.jpg', 'd.S. polo assn. full sleev plain tshirt for man', '125.00', '4'],
                    ['images/new-thumb-05.jpg', 'e.S. polo assn. full sleev plain tshirt for man', '128.00', '5'],
                    ['images/new-thumb-06.jpg', 'f.S. polo assn. full sleev plain tshirt for man', '121.00', '6'],
                    ['images/new-thumb-07.jpg', 'g.S. polo assn. full sleev plain tshirt for man', '131.00', '7'],
                    ['images/new-thumb-08.jpg', 'h.S. polo assn. full sleev plain tshirt for man', '130.00', '8'],
                    ['images/new-thumb-01.jpg', 'i.S. polo assn. full sleev plain tshirt for man', '124.00', '9'],
                    ['images/new-thumb-02.jpg', 'j.S. polo assn. full sleev plain tshirt for man', '127.00', '10'],
                    ['images/new-thumb-03.jpg', 'k.S. polo assn. full sleev plain tshirt for man', '122.00', '11'],
                    ['images/new-thumb-04.jpg', 'l.S. polo assn. full sleev plain tshirt for man', '126.00', '12']];

var cartArray = [['images/cart-img01.jpg', 'U.S. polo assn. full sleev plain tshirt for man', '$222.00'],
                     ['images/new-thumb-02.jpg', 'Long sleeve polo shirt online in india-Myntra', '$89.75'],
                     ['images/new-thumb-03.jpg', 'Mens hypernation black casual long sleeve full', '$460.23'],
                     ['images/new-thumb-04.jpg', 'Addidas men teal green patterner round neck', '$356.00'],
                     ['images/new-thumb-05.jpg', 'U.S. polo assn. full sleev plain tshirt for man', '$220.00']];

$(document).ready(function () {
    $('#txtintrest').hide();

    $("#InputUserName").prop("disabled", true);

    $("#InputEmail").prop("disabled", true);
    
    $('#txtuname').keydown(usernameSpaceValidation);

    $("#txtemail").change(emailValidation);

    $("#txtpword").change(passwordValidation);

    $('#chkbill').click(shoppingAddress);

    $('#clothTypeOther').change(addIntrest);

    $('#selectAll').click(selectInterest);

    $('#txtpnumber').change(phoneFunction);

    $('#txtmnumber').change(mobileFunction);

    $('#product_detail').find('input[type=number]').change(subtotal);

    $('#updateCart1').click(updateShoppingCart1);

    $('#updateCart').click(updateShoppingCart);

    $('.delete_item').click(deleteRow);

    $('#clearCart').click(clearAll);

    $('#productArray').click(productArray);

    $('#update').click(putArray);

    $('#ddlprice').change(function () {
        debugger;
        if ($('this').val('0')) {
            clickonPrize();
        }
        else
            clickonName();
    });

    $("#submit").click(function (e) {
        debugger;
        passwordValidation(e);
        emailValidation(e);
        phoneFunction(e);
        mobileFunction(e);
        var count = 0;
        $('div').find('input').each(function () {
            if ($(this).val('')) {
                count += 1;
                $(this).css("border-color") == "yellow";
            }
        });
        if (count > 0) {
            alert("please feel out all field");
            e.preventDefault();
        }
        if ($('#chkterms1').prop('checked') == false) {
            alert("Before register you must have to agree with terms and conditions");
        }
        e.preventDefault();
    });

    $("#update").click(function (e) {
        passwordValidation(e);
        phoneFunction(e);
        mobileFunction(e);
        var count = 0;
        $('div').find('input').each(function () {
            if ($(this).val('')) {
                count += 1;
                $(this).css("border-color") == "yellow";
            }
        });
        if (count > 0) {
            alert("please feel out all field");
            e.preventDefault();
        }
        if ($('#chkterms1').prop('checked') == false) {
            alert("Before register you must have to agree with terms and conditions");
        }
        e.preventDefault();
    });

    $("#datepicker").datepicker();

    $('#reset').click(reset);

});

function usernameSpaceValidation(e) {
    debugger;
    if (e.keyCode == 32) // 32 is the ASCII value for a space
    {
        e.preventDefault();
        alert("not allowed space");
    }
}
function emailValidation(e) {
    $('.validationEmail').empty();
    var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = $("#txtemail").val();
    if (!email_regex.test(email)) {

        {
            $("#txtemail").parent().after("<div class='validationEmail' style='color:red;margin-bottom: 20px;'>Please enter email address</div>");
        }
        this.focus();
        e.preventDefault();
    }
}
function radioChange() {
    if ($('input[name=gender]:checked').length <= 0) {
        {
            $("input[name=gender]").after("<div class='validation' style='color:red;margin-bottom: 20px;'>Please select your gender</div>");
        }
    }
}
function passwordValidation(e) {
    $('.validationPassword').empty();
    var password_regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[~@#$!]).{8,}$/;
    var password = $("#txtpword").val();
    if (!password_regex.test(password)) {
        {
            $("#txtpword").parent().after("<div class='validationPassword' style='color:red;margin-bottom: 20px;'>Please enter valid password</div>");
        }
        this.focus();
        e.preventDefault();
    }
}
function phoneFunction(e) {
    $('.validationPhone').empty();
    var phone_regex = /\([0-9]{3}\)+[0-9]{3}\-[0-9]{4}$/;
    var phone = $('#txtpnumber').val();
    
    if (!phone_regex.test(phone)) {
        $('#txtpnumber').parent().after("<div class='validationPhone' style='color:red;margin-bottom: 20px;'>Please enter valid phone number</div>");
    }
    e.preventDefault();
}
function mobileFunction(e) {
    $('.validationMobile').empty();
    var mobile_regex = /^[0-9]{10}$/;
    var mobile = $('#txtmnumber').val();
    if (!mobile_regex.test(mobile)) {
        $('#txtmnumber').parent().after("<div class='validationMobile' style='color:red;margin-bottom: 20px;'>Please enter valid mobile number</div>");
    }
    e.preventDefault();
}
function shoppingAddress() {
    debugger;
    var i = 1;
    if (this.checked) {

        $('.shipping').each(function () {
            debugger;
            if (i = 1) {
                $('#txtstreet1').val($('#txtstreet').val());
            }
            if (i = 2) {
                $('#txtcity1').val($('#txtcity').val());
            }
            if (i = 3) {
                $('#txtstate1').val($('#txtstate').val());
            }
            if (i = 4) {
                $('#txtcountry1').val($('#txtcontry').val());
            }
            i += 1;
        });
    }
    else {
        $('#txtstreet1').val("");
        $('#txtcity1').val("");
        $('#txtstate1').val("0");
        $('#txtcountry1').val("0");
    }
}
function selectInterest() {
    if (this.checked) {

        $('.clothType').not(this).prop('checked', this.checked);
    }
    else {
        $('.clothType').not(this).prop('checked', false);
    }
}
function addIntrest() {
    $('#txtintrest').toggle();
}
function reset() {
    $('div').find('input').each(function () {
        $(this).val('');
    }
        );
    $('.dropdown').val(0);
}
function subtotal() {
    debugger;
    var amount = 0;
    var qty = parseFloat($(this).val());
    var num = parseFloat($(this).closest('tr').children('td.prize').text().toString().replace("$", ""));
    amount = qty * num;
    $(this).closest('tr').children('td.finalTotal').text("$" + amount.toString());
}
function updateShoppingCart1() {
    debugger;
    var rowCount = $('#product_body tr').length;
    if (rowCount < 5) {
        $('#product_body').append('<tr id=row1><th scope="row"><img src="images/new-thumb-01.jpg" style="height:94px;width:75px;"/></th> <td> <a onclick="showMyImage1()" class="mouse_hover" style="color:black">a.S. polo assn. full sleev plain tshirt for man</a><br /><b>Color</b><p>Blue</p><b>size</b><p>M</p></td><td class="color_red prize">$120</td><td><input type="number" min="0" max="10" name="qty" id="txtitem1" value="1" style="width:30px;" onchange="subtotalArray(this)"></td><td class="color_red finalTotal" id="total">$120.00</td><td><img src="images/cross-dark.svg" class="svg_size mouse_hover delete_item" onclick="removeItem(this)" /></td></tr>\n');
    }
    else {
        alert('You dont allowed to add more than 5 rows');
    }
    updateShoppingCart();
}
function updateShoppingCart() {
    var amount = 0;
    $('#product_body').find('tr').each(function () {
        debugger;
        var num = parseFloat($(this).children('td#total').text().toString().replace("$", ""));
        amount = amount + num;
    })
    $('.subtotal').text("$" + amount.toString());
}
function deleteRow() {
    debugger;
    $(this).closest('tr').remove();
    updateShoppingCart();
}
function clearAll() {

    $('#product_body').find('tr').each(function total() {
        $(this).remove();
    })
    updateShoppingCart();
}
function productArray() {
    alert("hello");
    var i, j, count = 0; content = "";
    for (i = 0; i < 4; i++) {
        content += '<div class="row">';
        for (j = 0; j < 3; j++) {
            content += '<div class="col-sm-4 col-xs-12"><div class="show-image"><img src="' + productValue[i + j + (i * 2)][0] + '" class="image" alt=""/><input class="update" type="button" value="ADD TO CART" /></div><p class="items caption">' + productValue[i + j + (i * 2)][1] + '</p><p class="prize">$' + productValue[i + j + (i * 2)][2] + '</p></div>\n\n';
        }
        content += '</div>';
    }
    $('#addData').append(content);
    //p
    //var productByPrize = [];
    //console.log((productValue));
    //productByPrize = productByPrize.push(productValue);
    //console.log(productByPrize);
}

function clickonPrize() {
    debugger;
    var content = "";
    $('#addData').empty();
    productValue.sort(function (a, b) {
        // a and b will here be two objects from the array
        // thus a[1] and b[1] will equal the names

        // if they are equal, return 0 (no sorting)
        if (a[3] == b[3]) { return 0; }
        if (a[3] > b[3]) {
            // if a should come after b, return 1
            return 1;
        }
        else {
            // if b should come after a, return -1
            return -1;
        }
    });

    for (i = 0; i < 4; i++) {
        content += '<div class="row">';
        for (j = 0; j < 3; j++) {
            content += '<div class="col-sm-4 col-xs-12"><div class="show-image"><img src="' + productValue[i + j + (i * 2)][0] + '" class="image" alt=""/><input class="update" type="button" value="ADD TO CART" /></div><p class="items caption">' + productValue[i + j + (i * 2)][1] + '</p><p class="prize">$' + productValue[i + j + (i * 2)][2] + '</p></div>\n\n';
        }
        content += '</div>';
    }

    $('#addData').append(content);
}
function clickonName() {
    debugger;
    var content = "";
    $('#addData').empty();
    productValue.sort(function (a, b) {
        // a and b will here be two objects from the array
        // thus a[1] and b[1] will equal the names

        // if they are equal, return 0 (no sorting)
        if (a[1] == b[1]) { return 0; }
        if (a[1] > b[1]) {
            // if a should come after b, return 1
            return 1;
        }
        else {
            // if b should come after a, return -1
            return -1;
        }
    });

    for (i = 0; i < 4; i++) {
        content += '<div class="row">';
        for (j = 0; j < 3; j++) {
            content += '<div class="col-sm-4 col-xs-12"><div class="show-image"><img src="' + productValue[i + j + (i * 2)][0] + '" class="image" alt=""/><input class="update" type="button" value="ADD TO CART" /></div><p class="items caption">' + productValue[i + j + (i * 2)][1] + '</p><p class="prize">$' + productValue[i + j + (i * 2)][2] + '</p></div>\n\n';
        }
        content += '</div>';
    }

    $('#addData').append(content);
}

function SortByName(a, b) {
    debugger;
    var aName = a.name.toLowerCase();
    var bName = b.name.toLowerCase();
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}

function putArray() {
    var i;
    var trinnerhtml = "";
    for (i = 1; i < 5; i++) {
        trinnerhtml += "<tr id=row" + i + '><th scope="row"><img src="' + cartArray[i - 1][0] + '"style="height:94px;width:75px;"/></th> <td> <a class="mouse_hover" style="color:black">"' + cartArray[i - 1][1] + '"</a><br /><b>Color</b><p>Blue</p><b>size</b><p>M</p></td><td class="color_red prize">' + cartArray[i - 1][2] + '</td><td><input type="number" min="0" max="10" name="qty" id="txtitem1" value="1" style="width:30px;"></td><td class="color_red finalTotal" id="total">' + cartArray[i - 1][2] + '</td><td><img src="images/cross-dark.svg" class="svg_size mouse_hover delete_item" /></td></tr>\n';
    }
    $('#ttbody').append(trinnerhtml);
}