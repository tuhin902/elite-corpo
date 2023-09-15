const showHealthProducts = () => {
    const healthItems = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            name: "green veg",
            price: 100,
            review: 4.5
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRoJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            name: "green veg",
            price: 100,
            review: 4.5
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            name: "green veg",
            price: 100,
            review: 4.5
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            name: "green veg",
            price: 100,
            review: 4.5
        },
    ]

    const healthProducts = document.getElementById('health-products');
    const healthItem = healthItems.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="item " style="width: 20rem;">
        <img src=${item.image} class="card-img-top" alt="...">
        <div class="card-body pt-3 ps-4">
            <h5 class="card-title text-uppercase fw-bold mb-2 border-bottom pb-2">${item.name}</h5>
            <p class="card-text mb-0 text-decoration-line-through d-inline">${item.price}TK</p><span class='ms-2'>100Tk<span/>
            <div class="mt-3">
            <button type="button" class="btn btn-dark px-4 py-2">Review</button>
            <div/>
        </div>
        </div>
        `;
        healthProducts.appendChild(div);
    })
};
const showCosmaticsProducts = () => {
    const CosmaticsItems = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            name: "green veg",
            price: 100,
            review: 4.5
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRoJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            name: "green veg",
            price: 100,
            review: 4.5
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            name: "green veg",
            price: 100,
            review: 4.5
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            name: "green veg",
            price: 100,
            review: 4.5
        },
    ]

    const cosmaticsProducts = document.getElementById('cosmatics-products');
    const CosmaticsItem = CosmaticsItems.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="item " style="width: 20rem;">
        <img src=${item.image} class="card-img-top" alt="...">
        <div class="card-body pt-3 ps-4">
            <h5 class="card-title text-uppercase fw-bold mb-2 border-bottom pb-2">${item.name}</h5>
            <p class="card-text mb-0 text-decoration-line-through d-inline">${item.price}TK</p><span class='ms-2'>100Tk<span/>
            <div class="mt-3">
            <button type="button" class="btn btn-dark px-4 py-2">Review</button>
            <div/>
        </div>
        </div>
        `;
        cosmaticsProducts.appendChild(div);
    })
};
const showMensProducts = () => {
    const menItems = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            name: "green veg",
            price: 100,
            review: 4.5
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRoJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            name: "green veg",
            price: 100,
            review: 4.5
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            name: "green veg",
            price: 100,
            review: 4.5
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            name: "green veg",
            price: 100,
            review: 4.5
        },
    ]

    const menProducts = document.getElementById('men-products');
    const menItem = menItems.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card item " style="width: 20rem;">
        <img src=${item.image} class="card-img-top" alt="...">
        <div class="card-body pt-3 ps-4 ">
            <h5 class="card-title text-uppercase fw-bold mb-2 border-bottom pb-2">${item.name}</h5>
            <p class="card-text mb-0 text-decoration-line-through d-inline">${item.price}TK</p><span class='ms-2'>100Tk<span/>
            <div class="mt-3">
            <button type="button" class="btn btn-dark px-4 py-2">Review</button>
            <div/>
        </div>
        </div>
        `;
        menProducts.appendChild(div);
    })
};

showHealthProducts();
showCosmaticsProducts();
showMensProducts();