function updateYearlyRevenue() {
    const hotelRooms = parseInt(document.getElementById("hotelRooms").value) || 0;
    const hotelOccupancyRate = parseInt(document.getElementById("hotelOccupancy").value) / 100 || 0;
    const driveInRate = parseInt(document.getElementById("driveInRate").value) / 100 || 0;
    const overnightRate = parseInt(document.getElementById("overnightRate").value) || 0;

    const occupiedRooms = hotelRooms * hotelOccupancyRate;
    const guestsWhoDrive = occupiedRooms * driveInRate;
    // Apply sales tax to the overnight rate for the final charge per night
    const finalChargePerNight = overnightRate;
    const dailyRevenue = guestsWhoDrive * finalChargePerNight;
    const yearlyRevenue = (dailyRevenue * 365) *.97;

    const profit = yearlyRevenue * 0.8; // Assuming profit calculation does not change
    const revPar = yearlyRevenue / 365 / hotelRooms;
    // Use occupiedRooms for revPor calculation to reflect revenue per occupied room
    const revPor = yearlyRevenue / 365 / occupiedRooms;

    document.getElementById("calculatedRevenue").innerText = `$${yearlyRevenue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById("profit").innerText = `$${profit.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById("revPar").innerText = `$${revPar.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById("revPor").innerText = `$${revPor.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

// Initial update on page load
document.addEventListener('DOMContentLoaded', updateYearlyRevenue);

// Attach event listeners to inputs for real-time updates
document.getElementById("hotelRooms").addEventListener("input", updateYearlyRevenue);
document.getElementById("hotelOccupancy").addEventListener("input", updateYearlyRevenue);
document.getElementById("driveInRate").addEventListener("input", updateYearlyRevenue);
document.getElementById("salestax").addEventListener("input", updateYearlyRevenue); // Add this line
document.getElementById("overnightRate").addEventListener("input", function() {
    document.getElementById('overnightRateDisplay').innerText = this.value;
    updateYearlyRevenue(); // Call to update calculations when the slider changes
});
