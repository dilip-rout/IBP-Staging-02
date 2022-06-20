	$(function(){
							// bind change event to select
							$('#minimal').on('change', function () {
							var url = $(this).val(); // get selected value
							if (url) { // require a URL
							window.location = url; // redirect
							}
							return false;
							});
							});