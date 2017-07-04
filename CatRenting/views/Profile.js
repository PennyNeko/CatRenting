/**
 * Created by Dimitris on 4/30/2017.
 */
const profile = `
<row v-if="owner">
    <div class="col-lg-12" v-if="system.user.id === owner.id"> 
        <button class="btn btn-success"> <i class="fa fa-plus"></i> Car</button>
        <button class="btn btn-primary"> <i class=" fa fa-edit"> </i> Edit Details </button>
    </div>
    <div class="col-lg-3" v-if="owner">
        <card>  
            <card-head>  
                {{owner.fullname}}
            </card-head>
            <card-block> 
                <list-group> 
                    <list-item> age:{{owner.age}} </list-item>
                    <list-item> phone:{{owner.phone}}</list-item>
                    <list-item> address:{{owner.address}}</list-item>
                </list-group>
            </card-block>
        </card>
        <card-block v-if="system.user.id === owner.id"> 
                 <h4> Rentals </h4>   
        </card-block>
   
        <card-block> 
            <h4> Notes:</h4>
            {{owner.description}}
        </card-block>
    </div>  
    <div class="col-lg-9"> 
     <h2>Available Cars: </h2>
        <list-group> 
            <list-item  v-for="(car,i) in cars" class="row list-group-item-action ">
                <div class="col-lg-10 col-md-9"  @click="show('car',car.id)"> 
                    <span class="mr-2">{{i+1}}</span>
                    <span class="text-primary mr-3">{{car.brand}} {{car.model}}</span>
                    <span>  year: {{car.year}}</span>
                </div>
                <div class="col-lg-2 col-md-3" > 
                    <strong> {{car.price}} </strong>  <i class="fa fa-euro"> per hour</i>
                </div>
            </list-item>
        </list-group>
    </div>
</row>
`;

const Profile = {
    template:profile,
    data: () => {
        return {
            system : system,
            owner:  new Owner(app.$route.params.id),
            cars: [],
        }
    },
    created: function () {
       this.owner.getCars().then(cars =>{
               cars.map((item)=>{
               let car = new Car(item.ID);
                   this.cars.push(car);
               });
           });
    },

    methods: {
        stars(i){
            let stars = [];
            for(j=0;j<i;j++){
                stars.push("fa-star")
            }
            return stars
        },
        show:showPage
    }
};
