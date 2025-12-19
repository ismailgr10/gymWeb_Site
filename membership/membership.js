// Gestion de l'accordéon FAQ
      const faqItems = document.querySelectorAll(".faq-item");

      faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", () => {
          // Fermer les autres
          faqItems.forEach((otherItem) => {
            if (otherItem !== item) otherItem.classList.remove("active");
          });
          // Basculer l'actuel
          item.classList.toggle("active");
        });
      });