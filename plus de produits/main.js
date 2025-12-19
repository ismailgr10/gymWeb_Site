// Script pour la page principale
function navigateToProduct(productId) {
  // Navigation via un lien avec paramètre URL
  const link = document.createElement("a");
  link.href = `productDetails.html?product=${productId}`;
  link.click();
}

// Ajouter les événements de clic sur tous les produits
document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".prod");

  // Produits disponibles (cliquables)
  const availableProducts = [
    "prod1",
    "prod2",
    "prod3",
    "prod5",
    "prod6",
    "prod8",
  ];

  products.forEach((product) => {
    // recuperer ID du produit basé sur le grid-area
    const gridArea = product.style.gridArea;

    // Vérifier si le produit est disponible
    if (availableProducts.includes(gridArea)) {
      // Rendre le produit cliquable
      product.style.cursor = "pointer";

      // Ajouter l'événement de clic
      product.addEventListener("click", () => {
        navigateToProduct(gridArea);
      });
    } else {
      // Produit non disponible
      product.style.cursor = "not-allowed";
      product.style.opacity = "0.7";
    }
  });

  // Ajouter un effet visuel pour indiquer que les produits sont cliquables
  const style = document.createElement("style");
  style.textContent = `
    .prod {
      transition: all 0.3s ease;
    }
    .prod:active {
      transform: scale(0.98);
    }
  `;
  document.head.appendChild(style);
});
// Fonction pour ajouter un produit au panier
function addToCart(productName, productPrice) {
  // Afficher le message de succès
  showSuccessMessage(productName);

  // Rediriger après 1.5 secondes avec les paramètres dans l'URL
  setTimeout(function () {
    const url =
      "formulaire.html?product=" +
      encodeURIComponent(productName) +
      "&price=" +
      encodeURIComponent(productPrice);
    window.location.href = url;
  }, 1500);
}

// Fonction pour afficher le message de succès
function showSuccessMessage(productName) {
  // Créer l'élément de notification
  const notification = document.createElement("div");
  notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #28a745, #20c997);
          color: white;
          padding: 20px 30px;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(40, 167, 69, 0.5);
          z-index: 10000;
          animation: slideIn 0.5s ease-out;
          font-size: 1.1rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 15px;
        `;

  notification.innerHTML = `
          <i class="fas fa-check-circle" style="font-size: 1.5rem;"></i>
          <div>
            <div style="font-size: 1.2rem;">Produit ajouté avec succès!</div>
            <div style="font-size: 0.9rem; opacity: 0.9; margin-top: 5px;">${productName}</div>
          </div>
        `;

  const style = document.createElement("style");
  style.textContent = `
          @keyframes slideIn {
            from {
              transform: translateX(400px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `;
  document.head.appendChild(style);

  // Ajouter au body
  document.body.appendChild(notification);

  // Retirer après 1.5 secondes
  setTimeout(function () {
    notification.style.animation = "slideIn 0.5s ease-out reverse";
    setTimeout(function () {
      notification.remove();
    }, 500);
  }, 1000);
}

// Ajouter les gestionnaires d'événements pour tous les boutons "Ajouter au panier"
document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".btn-cart");

  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.stopPropagation();

      // Trouver la carte ou le produit parent
      const productCard = this.closest(".card") || this.closest(".prod");

      if (productCard) {
        // Extraire le nom du produit
        const productName =
          productCard.querySelector("h2")?.textContent ||
          productCard.querySelector(".product-title")?.textContent ||
          "Produit";

        // Extraire le prix
        let productPrice = "";
        const newPriceElement = productCard.querySelector(".new-price");
        const priceElement = productCard.querySelector(".product-price");

        if (newPriceElement) {
          productPrice = newPriceElement.textContent;
        } else if (priceElement) {
          productPrice = priceElement.textContent;
        } else {
          productPrice = "Prix non disponible";
        }

        // Ajouter au panier
        addToCart(productName, productPrice);
      }
    });
  });
});

// Afficher la section catalogue quand on clique sur "View more product"
document.getElementById("viewMoreBtn").addEventListener("click", function () {
  const catalogSection = document.getElementById("catalogSection");
  catalogSection.style.display = "block";
  // Animation d'apparition
  catalogSection.style.animation = "fadeInUp 0.8s ease-out";
});
