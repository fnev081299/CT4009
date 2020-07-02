$.ajax({
	method: 'GET',
	url:'HomeDAO.php?functionCalled=Posts',
	success: function(response){
		let posts = JSON.parse(response);

		$.each(posts, function (index, post) {
			let element = `<li class="postlist-item" data-id="${post.id}">
				<h id="person">${post.first_name} ${post.last_name}</h> <br> <p id="pcontent">${post.Post_content}</p> <br>
			<input id="setting" type="submit" value="..."><button class="like-post">Like</button>
			<p class="likenumber">Likes: </p>
			<p class="likenum">${post.likes}</p>
			</li>`;

			$('#showPosts').append($.parseHTML(element));

			if ((index + 1) === posts.length) {
				$('.like-post').on('click', function (e) {
					e.preventDefault();

					let id = $(this).parents('.postlist-item').data('id');

					$.ajax({
						method: 'POST',
						url:'HomeDAO.php?functionCalled=addLikes',
						data: {postId: id},
						success: function(response){
							console.log('Done');
							let oldNum = $('.postlist-item[data-id=' + id + ']').find('.likenum').html();

							$('.postlist-item[data-id=' + id + ']').find('.likenum').html(parseInt(oldNum) + 1);
						},
						error: function(msg){
							console.log(msg);
						}
					});
				});
			}
		});
	},
	error: function(msg){
		console.log(msg);
	}
});

