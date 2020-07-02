function Messages() {
	selectAll(function(results) {
		if(!results || !results.length) {
		
		}
		else {
			var len = results.length, i;
			for(i = 0; i < len; i++) {
				//try function if they have an img
			 try {
                var img_id = 'image-' + results[i].id;
				var img = $('<img id="' + img_id + '"/>');

				var obj_url = window.URL.createObjectURL(results[i].Image);
				console.log(obj_url);
			
				$('#tposts').append(
					'<tr id="' + results[i].id + '">\
						<td>' + results[i].id + '</td>\
						<td class="username">' + results[i].Username + '</td>\
						<td class="Message">' + results[i].message + '</td>\
						<td class="image"> ' + '<img id=' + img_id + ' height="100" width="100"/>' + ' </td>\
						<td><a href="#" class="Block">Block</a></td>\
					</tr>'
				)
				
				$('#' + img_id).attr('src', obj_url);
             }
            //catch any errors
            catch (err) {
               $('#tposts').append(
					'<tr id="' + results[i].id + '">\
						<td>' + results[i].id + '</td>\
						<td class="username">' + results[i].Username + '</td>\
						<td class="Message">' + results[i].message + '</td>\
						<td class="image">None</td>\
						<td><a href="#" class="Block">Block</a></td>\
					</tr>'
				)
				 
            }
                
			}
		}
	});
}
