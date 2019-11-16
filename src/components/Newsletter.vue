<template>
      <b-jumbotron bg-variant="primary" text-variant="light" header="START.CODE Newsletter" lead="News rund ums lernen der Programmierung und digitale Weiterbildung. Von Tutorials bishin zu Kursaktionen. Jetzt nichts mehr verpassen!">
      <form action="https://start-code.us20.list-manage.com/subscribe/post?u=e8429b1b1cc6f7df4af8fbf90&amp;id=2e53d86122" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <b-input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email Addresse" style="width: 80%" required></b-input>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e8429b1b1cc6f7df4af8fbf90_2e53d86122" tabindex="-1" value=""></div>
        <p class="mini-info">
          <input type="checkbox" required>
          Ich stimme zu, Informationen und kommerzielle Angebote über START.CODE zu erhalten (z.B. Newsletter, die Veröffentlichung von Kurs- oder Blog-Posts, das Auslaufen von Tickets, ...) in Übereinstimmung mit der <g-link to="/data-privacy"> Datenschutzerklärung</g-link>
        </p>
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-warning">
      </form>
      </b-jumbotron>
</template>

<script>

export default {
  name: 'Newsletter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.display-3 {
    font-size: 3.5em;
}

@media (max-width: 768px) {
    .display-3 {
        font-size: 2em;
    }
}
</style>