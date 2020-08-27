Vue.config.devtools = true;
Vue.component('pdCard', {
    props:['book'],
    data(){
        return{
            quan:1,
            
        };
    },
    methods: {
        buyMore(e){
            this.quan = e.target.value;
        },
    },
    template:
    `
        <div class="pdcard">
            <div class="pdimg">img</div>
            <div class="pdinfo">
                <h2>{{book.title}}</h2>
                <select name="quan" id="quan" @change="buyMore">
                    <option :value="i+1" v-for="(val,i) in 10">{{val}}</option>
                </select>
                <span>{{book.price*quan}}
                    <slot name="cartButton"></slot>
                </span>
            </div>
        </div>
    `,
})

let products = new Vue({
    el:'#pdBox',
    data:{
        books:[
            {title:'aaa',price:'150',},
            {title:'bbb',price:'150',},
            {title:'ccc',price:'150',},
            {title:'ddd',price:'150',},
            {title:'eee',price:'150',},
            {title:'fff',price:'150',},
            {title:'ggg',price:'150',},
            {title:'hhh',price:'150',},
            {title:'iii',price:'150',},
            {title:'jjj',price:'150',},
            {title:'kkk',price:'150',},
            {title:'lll',price:'150',},
            {title:'mmm',price:'150',},
            {title:'nnn',price:'150',},
        ],
        a:0,
        b:5,
    },
    methods: {
        changePage(i){
            this.a = (i-1)*5;
            this.b = i*5;
        },
        storeItem(e){
            let pdName = e.target.offsetParent.parentElement.firstChild.innerText; //h2.bookTitle
            let pdQuan = e.target.offsetParent.parentElement.children.quan.value; //quantity
            let pdprice = e.target.parentElement.childNodes[0]; //price
            
        },
    },
    
})