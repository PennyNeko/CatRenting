/**
 * Created by Dimitris on 4/30/2017.
 */
let cartmplt = `
<row >
    
    <div class="col-lg-4">
        <div id="details">
        <card>
        <card-head>{{car.brand}}, {{car.model}} | {{car.username}}</card-head>
        <list-group> 
            <list-item></list-item>
        </list-group>
        </div>
        <div id="ratings"> 
        
        </div>
     </div>
    <div class="col-lg-8">
        <div id="gallery"> 
        </div>
        <div id="availability"> 
        
        </div>
    </div>
</row>`;

const CarProfile = {
    template: cartmplt,
    data: () => {
        return {
            car :  new Car(app.$route.params.id),
            user:{}
        }
    },
    created: function () {

    },

    methods: {}
};
