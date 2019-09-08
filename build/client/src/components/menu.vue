<template>
<div id="menu-bar">
    <Logo />
</div>
</template>

<script>
import Logo from "./logo.vue"

export default {
    components: {
      Logo
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
