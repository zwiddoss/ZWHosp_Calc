function updateYearlyRevenue() {
    // Retrieve input values
    const hotelRooms = parseInt(document.getElementById("hotelRooms").value) || 0;
    const hotelOccupancyRate = parseInt(document.getElementById("hotelOccupancy").value) / 100 || 0;
    const driveInRate = parseInt(document.getElementById("driveInRate").value) / 100 || 0;
    const overnightRate1 = parseInt(document.getElementById("overnightRate").value) || 0;
    const overnightRate2 = parseInt(document.getElementById("PriceTwo").value) || 0;

    // Calculate daily and yearly revenue for each price
    const occupiedRooms = hotelRooms * hotelOccupancyRate;
    const guestsWhoDrive = occupiedRooms * driveInRate;
    const dailyRevenue1 = guestsWhoDrive * overnightRate1;
    const dailyRevenue2 = guestsWhoDrive * overnightRate2;
    const yearlyRevenue1 = dailyRevenue1 * 365;
    const yearlyRevenue2 = dailyRevenue2 * 365;

    // Calculate profit, RevPar, and RevPor for each price
    const profit1 = yearlyRevenue1 * 0.8; // 80% of revenue as profit
    const profit2 = yearlyRevenue2 * 0.8; // 80% of revenue as profit
    const revPar1 = yearlyRevenue1 / 365 / hotelRooms;
    const revPar2 = yearlyRevenue2 / 365 / hotelRooms;
    const revPor1 = yearlyRevenue1 / 365 / occupiedRooms;
    const revPor2 = yearlyRevenue2 / 365 / occupiedRooms;

    // Calculate profit difference
    const profitDifference = profit2 - profit1;

    // Update UI elements for Price One
    document.getElementById("calculatedRevenue").innerText = `Yearly Revenue: $${yearlyRevenue1.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById("profit").innerText = `Profit: $${profit1.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById("revPar").innerText = `RevPar: $${revPar1.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById("revPor").innerText = `RevPor: $${revPor1.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

    // Update UI elements for Price Two
    document.getElementById("calculatedRevenue2").innerText = `Yearly Revenue: $${yearlyRevenue2.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById("profit2").innerText = `Profit: $${profit2.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById("revPar2").innerText = `RevPar: $${revPar2.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById("revPor2").innerText = `RevPor: $${revPor2.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

    // Update UI element for Profit Difference
    document.getElementById("profitDifference").innerText = `Profit Difference: $${profitDifference.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

// Initial update on page load
document.addEventListener('DOMContentLoaded', updateYearlyRevenue);

// Attach event listeners to inputs for real-time updates
document.getElementById("hotelRooms").addEventListener("input", updateYearlyRevenue);
document.getElementById("hotelOccupancy").addEventListener("input", updateYearlyRevenue);
document.getElementById("driveInRate").addEventListener("input", updateYearlyRevenue);
document.getElementById("overnightRate").addEventListener("input", function() {
    document.getElementById('overnightRateDisplay').innerText = this.value;
    updateYearlyRevenue(); // Call to update calculations when the slider changes
});
document.getElementById("PriceTwo").addEventListener("input", function() {
    document.getElementById('overnightRateDisplay2').innerText = this.value;
    updateYearlyRevenue(); // Call to update calculations when the slider changes
});
