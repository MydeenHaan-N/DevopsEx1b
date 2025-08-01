let cart = [];

function addElement() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("productInput").value = "";
    document.getElementById("quantityInput").value = "";
}

function confirmAdd() {
    const product = document.getElementById("productInput").value.trim();
    const quantity = parseInt(document.getElementById("quantityInput").value);

    if (product && quantity > 0) {
        cart.push({ product, quantity });
        alert(`Added ${quantity} of ${product} to cart.`);
        closePopup();
    } else {
        alert("Please enter valid product and quantity.");
    }
}

function viewelement() {
    const cartBody = document.getElementById("cartBody");
    if (!cartBody) {
        alert("Elements not found.");
        return;
    }

    cartBody.innerHTML = "";

    if (cart.length === 0) {
        cartBody.innerHTML = "<tr><td colspan='2'>Cart is empty</td></tr>";
    } else {
        cart.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${item.product}</td><td>${item.quantity}</td>`;
            cartBody.appendChild(row);
        });
    }

    document.querySelector("#popup2 .modal").style.display = "block";
}

function closePopup2() {
    document.querySelector("#popup2 .modal").style.display = "none";
}

function removeelement()
{
    document.getElementById("popup3").style.display="block";
}
function confirmRemove()
{
    const productname=document.getElementById("product").value.trim();
    const quantity=parseInt(document.getElementById("quantity").value);
    if(!productname || quantity<=0 || isNaN(quantity))
    {
        alert("Invalid product name or quantity");
        return;
    }
    const index=cart.findIndex(item=>item.product.toLowerCase() == productname.toLowerCase());
    if(index != -1)
    {
        cart[index].quantity-=quantity;
        if(cart[index].quantity <= 0)
        {
            cart.splice(index,1);
            alert(`${productname} is removed from cart`);
            return;
        }
        else{
            alert(`${quantity} reduced from product`);
            return;
        }
    }
    else
    {
        alert("Enter Valid product name or quantity");
        return;
    }
}
function closePopup3()
{
    document.getElementById("popup3").style.display="none";
    document.getElementById("product").value="";
    document.getElementById("quantity").value="";
}