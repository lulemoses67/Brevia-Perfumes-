const renderBlogs = (x,data,container) => {
    let template = '';
    data = x ? data.filter(item => item.for === x) : data;
    data.forEach(item => {
        template +=`
        <div class="product">
            <img src="${item.img}">
            <h3>${item.title}</h3>
            <p>${item.price} UGX</p>
            <p class="tag-danger"><small>${item.for}</small></p>
            <p><small>aviable</small></p><br/>
            <button class="btn-warning"><i class="fa fa-shopping-cart"></i> Add</button>
        </div>`;

    });
    blogContainer.innerHTML = template;
}
const perfumes = [
    {
        "id" : 0,
        "title" : "Black",
        "price" : 45000,
        "img" : "./assets/imgs/d.png",
        "for" : "men"
    },
    {
        "id" : 1,
        "title" : "Noir",
        "price" : 35000,
        "img" : "./assets/imgs/w.jpeg",
        "for" : "women"
    },
    {
        "id" : 2,
        "title" : "Brevia Noir",
        "price" : 75000,
        "img" : "./assets/imgs/e.png",
        "for" : "women"
    },
    {
        "id" : 3,
        "title" : "Noir",
        "price" : 35000,
        "img" : "./assets/imgs/w.jpeg",
        "for" : "men"
    }
]