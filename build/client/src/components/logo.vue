 <template>
  <div id="logo">
    <T class="logo-letter" />
    <O class="logo-letter" />
    <N class="logo-letter" />
    <E class="logo-letter" />
    <L class="logo-letter" />
  </div>
</template>
   
<script>
import T from "../../res/T.svg";
import O from "../../res/O.svg";
import N from "../../res/N.svg";
import E from "../../res/3.svg";
import L from "../../res/L.svg";
import anime from "animejs/lib/anime.es.js";

export default {
  components: {
    T,
    O,
    N,
    E,
    L
  },
  mounted() {
    console.log("ANIMATING");
    anime({
      targets: ".logo-letter",
      duration: 1000,
      elasticity: 400,
      width: 200
    });
  }
};
</script>