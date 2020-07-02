//Retrieves all the data (objects) from indexeddb database
//and show the data in an HTML table

function showAllItems() {
	selectAll(function(results) {
		if(!results || !results.length) {
		
		}
		else {
			var len = results.length, i;
			for(i = 0; i < len; i++) {
				//========================
			
				var img_id = 'image-' + results[i].id;
				var img = $('<img id="' + img_id + '"/>');
				
				
				//$(this).contents().find('body').html(img);
				var obj_url = window.URL.createObjectURL(results[i].itemImage);
				console.log(obj_url);
				//$(this).contents().find('#' + img_id).attr('src', obj_url);
				//window.URL.revokeObjectURL(obj_url);
			//=========================================
			
				
				$('#tableAllItems').append(
					'<tr id="' + results[i].id + '">\
						<td>' + results[i].id + '</td>\
						<td class="sellerID">' + results[i].sellerID + '</td>\
						<td class="itemName">' + results[i].itemName + '</td>\
						<td class="itemDesc">' + results[i].itemDesc + '</td>\
						<td class="image"> ' + '<img id=' + img_id + ' height="100" width="100"/>' + ' </td>\
						<td class="price">' + results[i].price + '</td>\
						<td class="Location">' + results[i].areaName + ', ' + results[i].cityName + '</td>\
						<td class="latitude">' + results[i].latitude + '</td>\
						<td class="longitude">' + results[i].longitude + '</td>\
						<td><a href="#" class="actionContactSeller">Contact Seller</a></td>\
						<td><a href="#" class="actionShowDetails">Show Details</a></td>\
					</tr>'
				)
				
				$('#' + img_id).attr('src', obj_url);
				//window.URL.revokeObjectURL(obj_url);
			}
			
			//Event handler for each "show details" link in the table created earlier
			$('.actionShowDetails').click(function() {
				var itemID = parseInt($(this).parent().parent().attr('id'));
				alert("Retreiving item details ... Item ID : " + itemID);
					
				return false;
			});
			
			//Event handler for each "Contact Seller" link in the table created earlier
			$('.actionContactSeller').click (function() {
				var sellerID = $(this).closest('td').siblings('.sellerID').text();
					
				alert("Contacting seller ... Seller ID : " + sellerID);
					
				return false;
			});
		}
	});
}

