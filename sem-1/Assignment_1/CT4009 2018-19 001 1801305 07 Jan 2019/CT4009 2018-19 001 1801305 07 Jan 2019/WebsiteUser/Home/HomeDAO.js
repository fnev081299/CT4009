function showAll() {
    // selects all
	selectAll(function(results) {
		if(!results || !results.length) {
		
		}
		else {
			var len = results.length, i;
			for(i = 0; i < len; i++) {
				//try and catch depending on the user wentering an image or not
                //if the player enters an image it does one if not it sets the image as "none"
			 try {
                var img_id = 'image-' + results[i].id;
				var img = $('<img id="' + img_id + '"/>');

				var obj_url = window.URL.createObjectURL(results[i].Image);
				console.log(obj_url);
				//places the results within the table to be seen by the user			
				$('#tposts').append(
					'<tr id="' + results[i].id + '">\
						<td>' + results[i].id + '</td>\
						<td class="username">' + results[i].Username + '</td>\
						<td class="postname">' + results[i].postName + '</td>\
						<td class="userpost">' + results[i].userPost + '</td>\
						<td class="image"> ' + '<img id=' + img_id + ' height="100" width="100"/>' + ' </td>\
						<td><a href="#" class="Block">Block</a></td>\
					</tr>'
				)
				
				$('#' + img_id).attr('src', obj_url);
				//window.URL.revokeObjectURL(obj_url);
             }
            catch (err) {
               $('#tposts').append(
					'<tr id="' + results[i].id + '">\
						<td>' + results[i].id + '</td>\
						<td class="username">' + results[i].Username + '</td>\
						<td class="postname">' + results[i].postName + '</td>\
						<td class="userpost">' + results[i].userPost + '</td>\
						<td class="image">None</td>\
						<td><a href="#" class="Block">Block</a></td>\
					</tr>'
				)
				 
            }
                
			}
		}
	});
}
