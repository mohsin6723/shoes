let products = [
    {
        title: "Joggers",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis minus quos atque iure dolores mollitia cupiditate, libero magni aliquam. Magnam id quisquam quod, assumenda veniam hic voluptate explicabo perspiciatis earum.",
        price: 100,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Formal Shoes",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis minus quos atque iure dolores mollitia cupiditate, libero magni aliquam. Magnam id quisquam quod, assumenda veniam hic voluptate explicabo perspiciatis earum.",
        price: 100,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "School Shoes",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis minus quos atque iure dolores mollitia cupiditate, libero magni aliquam. Magnam id quisquam quod, assumenda veniam hic voluptate explicabo perspiciatis earum.",
        price: 100,
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww"
    },
    {
        title: "School Shoes",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis minus quos atque iure dolores mollitia cupiditate, libero magni aliquam. Magnam id quisquam quod, assumenda veniam hic voluptate explicabo perspiciatis earum.",
        price: 100,
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww"
    },
    {
        title: "School Shoes",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis minus quos atque iure dolores mollitia cupiditate, libero magni aliquam. Magnam id quisquam quod, assumenda veniam hic voluptate explicabo perspiciatis earum.",
        price: 100,
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww"
    },
    {
        title: "School Shoes",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis minus quos atque iure dolores mollitia cupiditate, libero magni aliquam. Magnam id quisquam quod, assumenda veniam hic voluptate explicabo perspiciatis earum.",
        price: 100,
        image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww"
    },
]

function showProducts() {
    
    products.forEach(function (productData) {
    let clutter = `<div class="products">
    <img class="productImg" src="${productData.image}">
    <h5 class="productTitle">${productData.title}</h5>
    <p>${productData.description}</p>
    <p class="price">Price: ${productData.price}</p>
    </div>`
    document.querySelector(".container").innerHTML += clutter;
    })
    
}

showProducts();