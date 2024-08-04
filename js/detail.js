const BASE_URL = "http://localhost:8080";

function getProduct() {

    fetch(BASE_URL+"/api/product/")
    .then((res) => res.json())
    .then(res => {

    });
}