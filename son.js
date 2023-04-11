function laydulieu(x) {
    var box = x.parentElement.parentElement.children;
    var sanpham = box[0].children[0].src;
    var mota = box[2].innerText;
    var gia = box[3].innerText;
    // console.log(gia, mota, sanpham);
    // alert(box[2].innerText);
    // alert(box[3].innerText);
    // alert(box[0].children[0].src);
    addcart(sanpham, mota, gia)
}

function addcart(sanpham, mota, gia) {
    var addcart = document.createElement("tr")
    var trcontent = `<tr>
    <td><img src="`+sanpham+`" alt=""></td>
    <td class="mota"><p>`+mota+`</p></td>
    <td><p class="gia">`+gia+`</p></td>
    <td><input type="number" value="1" min="1"></td>
    <td></td>
    <td><i class="fa-sharp fa-solid fa-trash-can"></i></td>
   </tr>`
   addcart.innerHTML = trcontent
   var cart = document.querySelector("tbody")
   cart.append(addcart)
}