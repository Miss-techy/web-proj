<script>
  
  $('.portfolio-item').isotope({
	    itemSelector : '.item',
	    layoutMode: 'fitRows'
	  });

	$('.portfolio-item ul li').click(function() {
		$('.portfolio-item ul li').removeClass('active');
	   $(this).addClass('active');
	   
	  var selector = $ (this).attr('data-filter');
		$('.portfolio-item').isotope({
		filter:selector
		
		)};
		return false;
		
		)};
  
  </script>
  
  
  
 
  
  
  
  
  <script>

   $('#text-slide').owlCarousel({
    autoplay:true,
    loop:true,
    margin:20,
    nav:false,
	smartSpeed:1000,
	dots:true ['<i class="owl-dots"></i>'],
    responsive: {

        0:{
            items:1

        },
        600:{
            items:1

        },
        1000:{
            items:1

        }
    }
})
   
</script>