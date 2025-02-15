function goBack() {
  window.history.back();
}
function openAddForm() {
  alert("Feature to add new cattle coming soon!");
}

fetch("cattle_data.json")
  .then(response => response.json())
  .then(cows => {
      const tableBody = document.getElementById("animal-table-body");
      const totalCattle = document.getElementById("total-cattle");
      const totalLiving = document.getElementById("total-living");
      const totalDead = document.getElementById("total-dead");
      const totalHeifers = document.getElementById("total-heifers");
      const totalBulls = document.getElementById("total-bulls");
      const totalCows = document.getElementById("total-cows");

      let livingCount = 0, deadCount = 0, heifersCount = 0, bullsCount = 0, cowsCount = 0;

      cows.forEach(cow => {
          const row = `<tr>
              <td>${cow.name}</td>
              <td>${cow.id}</td>
              <td>${cow.tag}</td>
              <td>${cow.breed}</td>
              <td><button class="details-btn" onclick="viewDetails('${cow.id}')">Details</button></td>
          </tr>`;
          tableBody.innerHTML += row;

          if (cow.status === "living") livingCount++;
          else if (cow.status === "deceased") deadCount++;

          if (cow.gender === "female") heifersCount++;
          else if (cow.gender === "male") bullsCount++;

          cowsCount++;
      });

      totalCattle.textContent = cows.length;
      totalLiving.textContent = livingCount;
      totalDead.textContent = deadCount;
      totalHeifers.textContent = heifersCount;
      totalBulls.textContent = bullsCount;
      totalCows.textContent = cowsCount;
  })
  .catch(error => console.error("Error loading cattle data:", error));

function viewDetails(cowId) {
  window.location.href = `animal_profile.html?id=${cowId}`;
}