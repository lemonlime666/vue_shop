Vue.config.devtools = true;
let products = new Vue({
    el: '#pdBox',
    data: {
        books: [],
        a: 0,
        b: 5,
        cart: JSON.parse(localStorage.getItem('toBuy')) || [], //一開始就先抓localStorage裡的東西，如果為空就是空陣列
        inCartNum:0,
    },
    methods: {
        changePage(i) {
            this.a = (i - 1) * 5;
            this.b = i * 5;
            for(j=0; j<this.books.length; j++){
                this.books[j].count = 1;
            }
        },
        store(e) {
            let num = e.target.dataset.num;
            let storeItem = this.books[num];
            let addItem = {
                content: storeItem,
            }
            this.cart.push(addItem);
            localStorage.setItem('toBuy', JSON.stringify(this.cart));
            this.inCartNum = this.cart.length;
        },
    },
    mounted() {
        fetch('./bookData.json').then(response => response.json()).then(data => this.books = data); 
        this.inCartNum = this.cart.length;
    }
})