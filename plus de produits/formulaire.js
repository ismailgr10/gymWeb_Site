// Récupérer les informations depuis l'URL
window.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get("product");
  const productPrice = urlParams.get("price");

  const cartItemsContainer = document.getElementById("cartItems");
  const totalPriceElement = document.getElementById("totalPrice");

  if (!productName || !productPrice) {
    cartItemsContainer.innerHTML =
      '<p style="color: #ccc; text-align: center;">Votre panier est vide</p>';
    totalPriceElement.textContent = "0,00€";
    return;
  }

  // Afficher le produit
  const itemDiv = document.createElement("div");
  itemDiv.className = "cart-item";
  itemDiv.innerHTML = `
          <span>${productName}</span>
          <span>${productPrice}</span>
        `;
  cartItemsContainer.appendChild(itemDiv);

  // Afficher le prix total
  totalPriceElement.textContent = productPrice;

  totalPriceElement.textContent = total.toFixed(2).replace(".", ",") + "€";
});

// Gérer la soumission du formulaire
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Récupérer les infos du produit depuis l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const productName = urlParams.get("product");
  const productPrice = urlParams.get("price");

  // Récupérer les données du formulaire
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const postalCode = document.getElementById("postalCode").value;
  const country = document.getElementById("country").value;
  const notes = document.getElementById("notes").value;

  // Ici vous pouvez envoyer les données à un serveur
  console.log("Commande confirmée:");
  console.log("Produit:", productName, "-", productPrice);
  console.log("Client:", firstName, lastName);
  console.log("Email:", email);

  // Afficher un message de confirmation
  alert(
    "✅ Commande confirmée avec succès!\n\n" +
      "Merci " +
      firstName +
      " pour votre commande.\n" +
      "Produit: " +
      productName +
      "\n" +
      "Vous recevrez un email de confirmation à " +
      email
  );

  // Rediriger vers la boutique
  window.location.href = "store.html";
});
