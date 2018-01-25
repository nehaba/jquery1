$(document).ready(function () {
    $('#product_detail').find('input[type=number]').change(subtotal);

    $('#updateCart1').click(updateShoppingCart1);

    $('#updateCart').click(updateShoppingCart);

    $('.delete_item').click(deleteRow);

    $('#clearCart').click(clearAll);
});

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