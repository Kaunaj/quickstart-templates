(() => {
    document.getElementById("app").style.display = "block";
})();

var app = new Vue({
    el: '#app',
    data: {
        stage: "loading",
    },
    methods: {
        init: function () {
            this.stage = "init";
        },
        // Add other methods as needed below
    },
    watch: {
    },
    mounted() {
        this.init();
    }
});
