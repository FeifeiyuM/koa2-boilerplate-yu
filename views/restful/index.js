$(document).ready(function(){

	$('#delUser').click(
		function() {
			var id = document.getElementById('userNo').value
			console.log('id: ' + id)

			url = '/restful/deleteUser/' + id

			$.ajax({
				url: url,
				type: 'DELETE',
				success: function(msg) {
					console.log('success: ' + msg)
				}
			})
			location.reload(true)
	})
})