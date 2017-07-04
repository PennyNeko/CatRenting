/**
 * @file Το component για το /Home
 */

/**
 * @desc δυναμικό html template
 * @type {string}
 */
const tmpl = `
<card-group>
<jumbotron-full>
    <!--<form-search></form-search> -->
</jumbotron-full> 
<div class="container"> 
  
</div>
</div>




`;
const Home = {
    template: tmpl,
    data: () => {
        return {
            isLoggedIn:false
        }
    },
    beforeCreate: function () {
    },

    methods: {}
};
