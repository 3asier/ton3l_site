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
      targets: ".logo_path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInSine",
      duration: 5500,
      delay: anime.stagger(100)
    });
    anime({
      targets: ".logo_t",
      delay: 5500,
      duration: 5500,
      fill: ["rgba(0,0,0,0)", "#fefefe"]
    });
    anime({
      targets: ".logo_o",
      delay: 5600,
      duration: 5500,
      fill: ["rgba(0,0,0,0)", "#fefefe"]
    });
    anime({
      targets: ".logo_n",
      delay: 5700,
      duration: 5500,
      fill: ["rgba(0,0,0,0)", "#b2b2b2"]
    });
    anime({
      targets: ".logo_3",
      delay: 5800,
      duration: 5500,
      fill: ["rgba(0,0,0,0)", "#707070"],
      stroke: ["#fefefe", "#707070"]
    });
    anime({
      targets: ".logo_l",
      delay: 5900,
      duration: 5500,
      fill: ["rgba(0,0,0,0)", "#232223"],
      stroke: ["#fefefe", "#232223"]
    });
  }
};
</script>