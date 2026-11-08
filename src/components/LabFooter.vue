<template>
  <footer>
    <figure class="nice-text">
      <figcaption>Laboratório Pixel Beads</figcaption>
      <ul>
        <li>🌟 As melhores beads do mercado</li>
        <li>📭 Somos de Olinda-PE</li>
        <li>🚚 Entregas para todo o Brasil</li>
        <li>🧪 Encomendas via DM no Insta ou Whatsapp</li>
      </ul>
    </figure>

    <figure>
      <figcaption>Nos contate</figcaption>
      <ul class="social-links">
        <li>
          <a href="https://www.instagram.com/laboratoriopixel/">
            <img class="footer-icons" src="../assets/icons/instagram-icon.svg">
            <span>@laboratoriopixel</span>
          </a>
        </li>

        <li>
          <a href="https://wa.me/5581996996117">
            <img class="footer-icons" src="../assets/icons/whatsapp-icon.svg">
            <span>+55 81 99699 6117</span>
          </a>
        </li>
      </ul>
    </figure>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--color-base);
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
}

figure {
  figcaption {
    font-size: 1.5rem;
    letter-spacing: 3px;
    font-family: "Jersey";
  }

  ul {
    margin-bottom: 0;
    padding: 0;
    list-style: none;

    li {
      margin-bottom: 8px;
    }

    &.social-links {
      a {
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        gap: 8px;

        color: black;
        text-transform: none;
        font-style: normal;

        @media screen and (max-width: 900px) {
          justify-content: center;
        }
      }

      .footer-icons {
        max-width: 30px;
      }
    }
  }

  &.nice-text {
    @media screen and (max-width: 900px) {
      display: none;
    }
  }
}
</style>
