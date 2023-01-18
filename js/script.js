$(document).ready(() => {
   $('header').append(
      `
      <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <a class="navbar-brand logo" href="index.html"
            ><span class="main-heading">Pure</span
            ><span class="text-dark">Waters</span></a
         >
         <button
            class="navbar-toggler border-0 nav-btn"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="31"
               height="31"
               fill="currentColor"
               class="bi bi-filter-right"
               viewBox="0 0 16 16"
            >
               <path
                  d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"
               />
            </svg>
         </button>

         <div
            class="collapse navbar-collapse nav-links text-center"
            id="navbarSupportedContent"
         >
            <ul class="navbar-nav mr-auto">
               <li class="nav-item active">
                  <a class="nav-link" href="index.html">Home </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="about.html">About Us</a>
               </li>
               <li class="nav-item dropdown">
                  <a class="nav-link" href="contact.html">Contact</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="product.html">Products</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="services.html">Services</a>
               </li>
               <li class="nav-item">
                  <a
                     class="nav-link"
                     href="purchase-form.html"
                     style="color: #0d6efd"
                     >Purchase Item</a
                  >
               </li>
            </ul>
         </div>
      </nav>
   </div>
      `
   );

   $('.footer').append(`
      <div class="row p-4">
         <div class="col-sm-4">
            <div class="card border-0">
               <h5 class="text-decoration-underline">About And Address</h5>
            <p>
               Water is one of the leading spring water providers in the
               USA. We bottle and deliver bacteria-free spring water
               throughout the country covering all water needs and tastes.
               We are proud to be the nation’s #1 water provider!
            </p>
         <p style="text-align: left">
         <span
            ><span class="text-secondary">Address : </span> 12,New
            bombay colony road,juhu,mumbai-362251</span
         ><br />
         <span
            ><span class="text-secondary">Email : </span>
            info@purewaters.com</span
         ><br />
         <span
            ><span class="text-secondary">Contact : </span> +91 874
            717 4102</span
         >
         </p>
      </div>
      </div>

      <div class="col-sm-3">
      <div class="card border-0">
      <h5 class="text-decoration-underline">Useful links</h5>
      <ul style="display: flex; flex-direction: column">
         <li>
            <i class="fa-solid fa-link main-heading"></i
            ><a class="p-2" href="about.html">About</a>
         </li>
         <li>
            <i class="fa-solid fa-link main-heading"></i
            ><a class="p-2" href="contact.html">Contact</a>
         </li>
         <li>
            <i class="fa-solid fa-link main-heading"></i
            ><a class="p-2" href="services.html">Services</a>
         </li>
         <li>
            <i class="fa-solid fa-link main-heading"></i
            ><a class="p-2" href="product.html">Products</a>
         </li>
         <li>
            <i class="fa-solid fa-link main-heading"></i
            ><a class="p-2" href="purchase-form.html">Purchase </a>
         </li>
      </ul>
      </div>
      </div>

      <div class="col-sm-5">
      <div>
      <h5 class="text-decoration-underline">Post Comment</h5>
      <form>
         <div class="form-group">
            <input
               placeholder="Enter your name..."
               type="text"
               name="name"
               class="form-control"
            />
         </div>
         <div class="form-group my-2">
            <textarea
               placeholder="Write comment here..."
               name="comment"
               id="comment"
               cols="30"
               rows="5"
               class="form-control"
            ></textarea>
         </div>
         <div class="form-group" style="text-align: right">
            <button class="btn btn-secondary" type="button">
               Post Comment
            </button>
         </div>
         </form>
      </div>
      </div>
      </div>
      <footer class="text-center mt-2">
      202 © All Rights Reserved | Designed and Developed by purewaters.com
      </footer>
         `);

   $('.test').hide();

   setTimeout(() => {
      $('.test').slideDown('slow');
   }, 400);

   $('.nav-btn').click(() => {
      $('.nav-links').slideToggle('slow');
      $('#navbarSupportedContent').css('background-color', 'white');
   });

   //calling xml file
   $.ajax({
      type: 'GET',
      url: 'data.xml',
      dataType: 'xml',
      success: funcParseXml,
   });

   //calling json file
   $.getJSON('data.json', (res) => {
      // console.log(res);
      for (var i = 0; i < res.length; i++) {
         let image = res[i].image;
         let title = res[i].title;
         let price = res[i].price;
         $('.product-append').append(
            '<div class="col-sm-6 shadow-lg col-md-4 col-lg-3 mt-4">' +
               '<div class="card  text-center p-4 border-0">' +
               '<img src="' +
               image +
               '" class="card-img-top" alt="products_image">' +
               '<div class="card-body">' +
               '<h5 class="card-title">' +
               title +
               '</h5>' +
               '<p class="card-text">' +
               '<span>' +
               '<img src="./image/currency-rupee.svg"/>' +
               '</span>' +
               '<span>' +
               price +
               '</span>' +
               '</p>' +
               '<a href="purchase-form.html" target="_blank">' +
               '<button class="btn btn-primary" id="purchase" style="width:130px;">Buy Now</button>' +
               '</a>' +
               '</div>' +
               '</div>' +
               '</div>'
         );
      }
   });
});

//Parsing xml and showing in html
function funcParseXml(xml) {
   $(xml)
      .find('details')
      .each(function () {
         let imageurl = $(this).find('image').attr('imageurl');
         let title = $(this).find('title').text();
         let desc = $(this).find('desc').text();
         $('.service-append').append(
            '<div class="col-sm-6 col-md-6 col-lg-4 mt-4">' +
               '<div class="card shadow-lg text-center p-4">' +
               '<img src="' +
               imageurl +
               '" class="card-img-top" alt="serivces_image" style="width:100px;margin:auto;">' +
               '<div class="card-body">' +
               '<h5 class="card-title">' +
               title +
               '</h5>' +
               '<p class="card-text mt-4">' +
               desc +
               '</p>' +
               '</div>' +
               '</div>' +
               '</div>'
         );
      });
}
