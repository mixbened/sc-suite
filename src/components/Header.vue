<template>
  <header class="header">
    <b-navbar class="p-0" toggleable="md" type="light">
      <b-navbar-brand>
        <g-link class="logo-home logo-desktop" to="/">
          <img alt="start.code logo" class="logo" src="../assets/images/logo_19.png">
        </g-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto d-flex align-items-center">
          <g-link class="nav--link" to="/">Start</g-link>
          <g-link class="nav--link" to="/kurse">Kurse</g-link>
          <g-link class="nav--link" to="/fuer-unternehmen">Für Unternehmen</g-link>
          <g-link class="nav--link" to="/blog">News</g-link>
          <g-link class="nav--link" to="/partner">Partner</g-link>
          <g-link class="nav--link" to="/faqs">FAQ</g-link>
          <g-link class="nav--link" to="/contact">Kontakt</g-link>
          <g-link class="nav--link" to="/class"><b-button variant="primary">Students</b-button></g-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
nav {
  width: 100%;
  padding-top: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.logo-home {
  font-size: 24px;
  max-width: 75%;
  font-weight: bold;
  &:hover {
    text-decoration: none;
  }
}


.logo–mobile {
  @media(max-width: 419px) {
    display: default;
  }
  @media (min-width: 420px) {
    display: none;
  }
}

.logo-image {
  width: 40px;
}

.nav--link {
  margin-left: 20px;
  @media (max-width: 419px) {
    margin: 0;
    padding: 15px 10px 10px 0;
  }
}

.active--exact {
  font-weight: bold;
}

.logo {
  width: 130px;
}
</style>
