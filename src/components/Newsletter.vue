<template>
      <b-jumbotron bg-variant="primary" text-variant="light" header="START.CODE Newsletter" lead="Erhalte alle News rund ums Programmieren lernen und digitale Weiterbildung direkt in dein Postfach!">
      <form action="https://start-code.us20.list-manage.com/subscribe/post?u=e8429b1b1cc6f7df4af8fbf90&amp;id=2e53d86122" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <b-input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="Email Addresse" style="width: 80%" required></b-input>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e8429b1b1cc6f7df4af8fbf90_2e53d86122" tabindex="-1" value=""></div>
        <div class="my-3">
          <small>
          <input type="checkbox" required>
          Ich stimme zu, Informationen und kommerzielle Angebote über START.CODE zu erhalten (z.B. Newsletter, die Veröffentlichung von Kurs- oder Blog-Posts, das Auslaufen von Tickets, ...) in Übereinstimmung mit der <g-link to="/data-privacy" class="text-warning"> Datenschutzerklärung</g-link>
          </small>
        </div>
        <div class="py-3">
          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-warning">
        </div>
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
    font-size: 2.5em;
}

p.lead {
  font-size: 1.1em;
}

.jumbotron {
  padding: 2rem;
}

@media (max-width: 768px) {
    .display-3 {
        font-size: 1em;
    }
    .jumbotron {
      padding: 2rem;
    }

}
</style>