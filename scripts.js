$(document).ready(function() {
    $('.card-body a').click(function(event) {
      event.preventDefault();
  
      var iframeSrc = $(this).data('iframe-src');
  
      // Create and append iframe to modal body
      var iframe = $('<iframe>').attr('src', iframeSrc).attr('width', '95%').attr('height', '800');
      $('#iframe-container').html(iframe);
  
      $('#iframeModal').modal('show'); // Show the modal
    });
  });
  

// $(document).ready(function() {
//     $('.card-body a').click(function(event) {
//         event.preventDefault(); // Prevent default link behavior

//         var iframeSrc = $(this).data('iframe-src');
//         var iframe = $('<iframe>').attr('src', iframeSrc).attr('width', '95%').attr('height', '800');

//         $('#iframe-container').html(iframe); // Add iframe to container
//     });
// });
// $(document).ready(function() {
//     // ربط الأحداث بالعناصر
//     $("a").click(function() {
//       // تحويل الزائر إلى الرابط
//       window.location.href = $(this).attr("href");
//     });
//   });
  

//   function toggleCardBody(header) {
//     const cardBody = header.nextElementSibling;
//     cardBody.style.display = cardBody.style.display === 'none' ? 'block' : 'none';
// }


// $(document).ready(function() {
//     $('[data-bs-toggle="collapse"]').collapse();
// });


// function toggleCardBody(header) {
//     const cardBody = header.nextElementSibling;
//     if (cardBody.style.maxHeight === '0px') {
//       cardBody.style.maxHeight = cardBody.scrollHeight + 'px';
//     } else {
//       cardBody.style.maxHeight = '0px';
//     }
//   }
  
// $(document).ready(function() {
//     $('#testModal').modal({
//         show: false
//     });
// });



