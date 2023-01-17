$(document).ready(() => {
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
      url: './data/data.xml',
      dataType: 'xml',
      success: funcParseXml,
   });

   //calling json file
   $.getJSON('./data/data.json', (res) => {
      // console.log(res);
      for (var i = 0; i < res.length; i++) {
         let image = res[i].image;
         let title = res[i].title;
         let price = res[i].price;
         $('.product-append').append(
            '<div class="col-sm-6 col-md-4 col-lg-3 mt-4">' +
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
               '<p class="card-text">' +
               desc +
               '</p>' +
               '</div>' +
               '</div>' +
               '</div>'
         );
      });
}
