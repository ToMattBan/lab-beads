<template>
  <footer>
    <figure>
      <figcaption>Laboratório Pixel Beads</figcaption>
      <ul>
        <li>🌟 Peças feitas à mão com todo carinho</li>
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
            <img src="../assets/icons/instagram-icon.svg" class="footer-icons"/>
            <span>@laboratoriopixel</span>
          </a>
        </li>

        <li>
          <a href="https://wa.me/5581996996117">
            <img src="../assets/icons/whatsapp-icon.svg" class="footer-icons"/>
            <span>+55 81 99699 6117</span>
          </a>
        </li>
      </ul>
    </figure>
  </footer>
</template>

<style scoped>
footer {
  background-color: #cbdbfc;
  display: flex;
  justify-content: space-around;
}

figure {
  figcaption {
    font-weight: bold;
    font-size: 1.2rem;
  }

  ul {
    margin-bottom: 0;
    padding: 0;
    list-style: none;

    &.social-links {
      a {
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        gap: 8px;

        color: black;
        text-transform: none;
        font-style: normal;
      }

      .footer-icons {
        max-width: 30px;
      }
    }
  }
}
</style>