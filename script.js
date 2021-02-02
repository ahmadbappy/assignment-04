// variables
let ticketBooked, ticketCount, newTicketCount, subTotal, firstClassCount, economyClassCount, tax, totalPrice;

// ticket booking increasing decreasing function
function handleTicketBooking(place, isIncrease) {
    ticketCount = getBookedTicketValue(place);

    if (isIncrease == true)
        newTicketCount = ticketCount + 1;
    if (isIncrease == false && ticketCount > 0)
        newTicketCount = ticketCount - 1;

    document.getElementById(place + "-ticket").value = newTicketCount;
    document.getElementById(place + "-ticket").innerText = newTicketCount;
    calculatePricing();
}

// taking booked ticket values
function getBookedTicketValue(place) {
    ticketBooked = document.getElementById(place + "-ticket");
    ticketCount = parseInt(ticketBooked.value);
    return ticketCount;
}

// price calculation of tickets
function calculatePricing() {
    firstClassCount = getBookedTicketValue('firstClass');
    economyClassCount = getBookedTicketValue('economyClass');

    subTotal = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById("sub-total").innerText = '$' + subTotal;

    tax = Math.round(subTotal * 0.10);
    document.getElementById("tax-total").innerText = '$' + tax;

    totalPrice = subTotal + tax;
    document.getElementById("total-price").innerText = '$' + totalPrice;
}

// book now button click event
document.getElementById("book-now").addEventListener("click", function () {
    document.getElementById("welcome-text").style.display = "none";
    document.getElementById("form").style.display = "none";
    document.getElementById("thanks-giving").style.display = "block";
});
