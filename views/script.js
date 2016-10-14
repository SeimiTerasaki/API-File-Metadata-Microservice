$('#file').change(function (e) {
	$("form").data({files: e.target.files});
});

$("form").submit(function (e) {
	var files = $("form").data().files;

	var data = new FormData();
	$.each(files, function (key, value) {
		data.append(key, value);
	});

	$.ajax({
		url: '/get-file-size/',
		type: 'POST',
		data: data,
		cache: false,
		processData: false,
		contentType: false,
		error: function (jXhr, status) {
			alert('error: ' + status);
		},
		success: function (data) {
			console.log(data);
		}
	});

	e.preventDefault();
	return false;
});