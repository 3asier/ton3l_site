<template>
<div id="menu-bar">
 <div id="logo">
    <T class="logo-letter" />
    <O class="logo-letter" />
    <N class="logo-letter" />
    <E class="logo-letter" />
    <L class="logo-letter" />
  </div>
</div>
</template>

<script>
import T from '../../res/T.svg';
import O from '../../res/O.svg';
import N from '../../res/N.svg';
import E from '../../res/3.svg';
import L from '../../res/L.svg';

export default {
    components: {
        T,
        O,
        N,
        E,
        L
    },
    data() {
        return {
            hello: "Hello World!"    
        }        
    },
    methods: {
        hello_world: function() {
            this.hello = "uWu";
        }
    }
}
</script>
