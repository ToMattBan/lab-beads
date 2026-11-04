<template>
  <header>
    <RouterLink class="logo" to="/">
      <img src="../assets/lab-icon.jpg" />
      <span>BEADS</span>
    </RouterLink>

    <div class="cart">
      <img src="../assets/icons/cart-icon.svg" />
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: var(--color-base);
  padding: 12px;

  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    font-size: 3rem;
    font-family: "Jersey";
    color: #4d5078;
    text-decoration: none;
    text-shadow: 1px 1px 0px #FFB210;

    img {
      height: 70px;
    }
  }

  .cart {
    padding-right: 12px;

    img {
      height: 50px;
    }
  }

  @media screen and (min-width: 1600px) {
    justify-content: space-around;
  }
}
</style>