// TODO total seats section start
let seats = document.getElementsByClassName("seat");
let totalSeatsElement = document.getElementById("total-seat");

let totalSeats = 40;
let totalSeatsInner = totalSeatsElement.innerText = totalSeats;
let totalSeatsNum = parseInt(totalSeatsInner);
for (let seat of seats) {
    seat.addEventListener("click", function() {
        totalSeats -= 1;
        if(totalSeats >= 0){
            totalSeatsElement.innerText = totalSeats;
        }
    });
}
// TODO total seats section end
// TODO added background color start
for (let seat of seats) {
    seat.addEventListener("click", function() {
        seat.classList.add("bg-[#1DD100]");
        seat.classList.remove("bg-[#E6E6E7]");
    });
}
// TODO added background color end
// TODO selected seats start
let selectList = document.getElementById("select-list");
let totalSelected = 0;
for (let seat of seats) {
    seat.addEventListener("click", function() {
        let div = document.createElement("div");
        div.classList.add("flex", "justify-between", "mt-[10px]");
        div.innerHTML = `
        <h3>${seat.innerText}</h3>
        <h3>Economoy</h3>
        <h3>550</h3> `;
        selectList.appendChild(div);
        totalSelected += 550;
        console.log(totalSelected);
    });
}
// TODO selected seats end




