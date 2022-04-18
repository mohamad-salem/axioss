// const url = 'https://fakestoreapi.com/products';
// for (i=0; i < Array.length; i++) {
//   axios.get(url).then((res) => 
//   // document.querySelector("#demo h1").innerHTML = res.data[i].title
//         document.querySelector("#demo img").src = res.data[i].image
//   )
// }

 
// for (i=0; i < Array.length; i++) {
//   axios.get(url).then((res) => 
//   // document.querySelector("#demo h1").innerHTML = res.data[i].title
//         document.querySelector(".demo h1").innerHTML = res.data[i].title
//   )
// }


const url = 'https://fakestoreapi.com/products';
for (i=0; i < Array.length; i++) {
  axios.get(url).then((res) => 
  // document.querySelector("#demo h1").innerHTML = res.data[i].title
        document.querySelector("#demo").innerHTML = `
        
     


      <section style="background-color: #eee;">
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-4" style="width: 50%;">
        <div class="card" style="border-radius: 15px; width="72%">
          <div
            class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light"
          >
            <img
              src="${res.data[i].image}"
              style="border-top-left-radius: 15px; border-top-right-radius: 15px;"
              class="img-fluid"
              alt="Laptop"
            />
            <a href="#!">
              <div class="mask"></div>
            </a>
          </div>
          <div class="card-body pb-0">
            <div class="d-flex justify-content-between">
              <div>
                <p><a href="#!" class="text-dark">${res.data[i].title}</a></p>
                
              </div>
              <div>
                <div class="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
               
              </div>
            </div>
          </div>
          <hr class="my-0" />
          <div class="card-body pb-0">
            <div class="d-flex justify-content-between">
              <p><a href="#!" class="text-dark">category</a></p>
              <p class="text-dark">${res.data[i].price}$</p>
            </div>
            <p class="small text-muted">${res.data[i].category}</p>
          </div>
          <hr class="my-0" />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
              <a href="#!" class="text-dark fw-bold">Cancel</a>
              <button type="button" class="btn btn-primary">Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        
        `



  )
}