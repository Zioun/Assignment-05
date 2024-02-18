// All Elements
let seats = document.getElementsByClassName("seat");
let totalSeatsElement = document.getElementById("total-seat");
let selectList = document.getElementById("select-list");
let totalPrice = document.getElementById("total-price");
let totalSelectElement = document.getElementById("total-select");

let discountPrice = document.getElementById("discount-price");
let couponInput = document.getElementById("coupon-input");
let couponButton = document.getElementById("coupon-button");
let grandTotal = document.getElementById("grand-total");
let invalidCoupon = document.getElementById("invalid-coupon");
let submitBtn = document.getElementById("submit-btn");
let phoneNumber = document.getElementById("phone-number");

// All Storage
let totalSeats = 40;
let totalSelect = 0;
let totalPriceStore = 0;

// Convert
let totalSeatsInner = totalSeatsElement.innerText = totalSeats;
let totalSeatsNum = parseInt(totalSeatsInner);

for (let seat of seats) {
    seat.addEventListener("click", function() {
        if(totalSelect < 4){
            // selected list
            seat.classList.add("bg-[#1DD100]","text-[#FFFFFF]");
            seat.classList.remove("bg-[#F7F8F8]");
            seat.setAttribute("disabled", "disabled");
            // count list
            totalSelect += 1;
            totalSelectElement.innerText = totalSelect;
            // seats left
            totalSeats -= 1;
            if(totalSeats >= 0){
                totalSeatsElement.innerText = totalSeats;
            }
            // appendlist
            let div = document.createElement("div");
            div.classList.add("flex", "justify-between", "mt-[10px]");
            div.innerHTML = `
            <h3>${seat.innerText}</h3>
            <h3>Economoy</h3>
            <h3>550</h3> `;
            selectList.appendChild(div);
            totalPriceStore += 550;
            totalPrice.innerText = totalPriceStore;
            grandTotal.innerText = totalPriceStore;
        }else{
            alert("You can't buy more than 4 tickets")
        }
        // submit button show
        let numberValue = phoneNumber;
        numberValue.addEventListener("keyup",function(){
            let getnumbervalue = numberValue.value;
            if(totalSelect > 0 && getnumbervalue > 0){
                submitBtn.removeAttribute("disabled","disabled");
            }
        })

        // coupon section show
        if(totalSelect > 3){
            couponInput.removeAttribute("disabled","disabled");
            couponButton.removeAttribute("disabled","disabled");
        }
    });
}
// calculat coupon

couponButton.addEventListener("click",function(){
    let couponText = couponInput.value;
    if(couponText == "NEW15"){
        let getTotal = totalPrice.innerText;
        let discount = getTotal * 0.15;
        discountPrice.innerText = discount;
        grandTotal.innerText = getTotal - discount;
        invalidCoupon.classList.add("class","hidden");
        couponInput.classList.add("class","hidden");
        couponButton.classList.add("class","hidden");
    }else if(couponText == "Couple 20"){
        let getTotal = totalPrice.innerText;
        let discount = getTotal * 0.20;
        discountPrice.innerText = discount;
        grandTotal.innerText = getTotal - discount;
        invalidCoupon.classList.add("class","hidden");
        couponInput.classList.add("class","hidden");
        couponButton.classList.add("class","hidden");
    }else{
        invalidCoupon.classList.remove("class","hidden");
    }
})



