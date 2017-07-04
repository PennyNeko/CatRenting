/**
 * @file Αρχικοποιήσεις και global σταθέρες που έχουν  εφάρμογη σε όλο το πρόγραμμα
 * @author Δημήτρης Τζιλιβάκης
 * @version 0.0.0
 */

/**
 * @constant
 * @desc Το url του api στο οποίο θα βλέπει η εφαρμογή
 * @type {string}
 */
const url = "http://localhost/api/v1.php?";
const userData= [
    {   id:0,
        experience: null,
        description: ' You can also contact me on messenger: Dimitris Tzilivakis and WU by the same name!! Happy driving',
        type: 'owner',
        username: 'Primeval',
        fullname: 'Dimitris Tzilivakis',
        age: 25,
        phone: 6948116611,
        address: 'Σινώπης 45, Νέα ιωνία Αττική',
        password: 12345678
    },
    {   experience:2017,
        id:1,
        description: ' You can also contact me on messenger: Dimitris Tzilivakis and WU by the same name!! Happy driving',
        type: 'renter',
        username: 'Primeval',
        fullname: 'Dimitris Tzilivakis',
        age: 25,
        phone: 6948116611,
        address: 'Σινώπης 45, Νέα ιωνία Αττική',

    }
];

const carData = [
    { id:0, user:0, brand:'Toyota',year:2007, model:'Yaris', price:10,description:'', location:{lat: 0, long:0}, rating:{score:3,votes:31} },
    { id:1, user:0, brand:'Nissan',year: 2013, model:'Qassquai', price:15, description:'',location:{lat: 0, long:0}, rating:{score:5,votes:41} },
    { id:2, user:0, brand:'Toyota',year:2000 ,model:'Corolla', price:8, description:'',location:{lat: 0, long:0}, rating:{score:3,votes:40} }
];

const ratings = {

};


CarPhotos = [
    {id:0, cadID:1 ,link:''}
];
const rentingData = [
    {id:0, dateSubmited:'10/7/2017 14:23:23', car:1, price:60, extrahours:0 ,extraprice:10 ,notes:'', status:'accepted', times:[
        { id:0, owner:0, renter:1, orderID:0, date:'12/7/2017', time:'20:00 - 21:00'},
        { id:1, owner:0, renter:1, orderID:0, date:'12/7/2017', time:'21:00 - 22:00'},
        { id:2, owner:0, renter:1, orderID:0, date:'12/7/2017', time:'23:00 - 00:00'},
        { id:3, owner:0, renter:1, orderID:0, date:'13/7/2017', time:'00:00 - 01:00'},
    ]}
];



/**
 * @constant {array}
 * @desc Ο πινάκας με τα αντικείμενα τα οποία ορίζουμε τα Paths και συνδέουμε
 * τα components
 */
const routes = [
    { name:'home', path: '/', component: Home },
    { name:'owner', path:'/owner/:id', component: Profile},
    { name:'car',path:'/car/:id', component: CarProfile},
    { name: 'register',path: '/Register', component: Register },
    { name:'login', path: '/Login', component: Login},
    { name:'addcar', path: '/AddCar', component:  NewCar},
    /* { path: '/Login', component: Login },
    { path: '/Profile/:id', component: Profile ,name: 'profile' },
    { path: '/Car/:id', component: Car, name: 'car' },
    { path: '/Search', component: Search }*/
];

let system = new System();

/**
 * @constant
 * @type {VueRouter}
 * @desc αντικείμενο τύπου VueRouter το οποίο θα εισαχθεί στο αντικειμενο Vue
 */
const router = new VueRouter({
    routes
});

 Vue.use(VueGoogleMaps, {
 load: {
 key: 'AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw',
 libraries: 'places'
 },
 });


/**
 * @constant
 * @type {Vue}
 * @borrows router
 * @desc Αρχικοποιέι την εφαρμογή
 */
const app = new Vue({
    router
}).$mount('#app'); /** Φορτώνει την εφαρμογή στο div με id #app */



