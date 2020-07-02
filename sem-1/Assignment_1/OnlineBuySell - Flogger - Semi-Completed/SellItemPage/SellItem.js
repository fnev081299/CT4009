//Event handler for file input
//shows selected image in a image container
$(document).on('change', '#fileItemImage', function(event) {
	previewFile();
});

//To show the selected file in an image container
function previewFile(){
	var preview = document.querySelector('img'); //selects the query named img
    var file    = document.querySelector('input[type=file]').files[0]; //sames as here
    var reader  = new FileReader();

    reader.onloadend = function () {
		preview.src = reader.result;
    }

    if (file) {
		reader.readAsDataURL(file); //reads the data as a URL
    } else {
		preview.src = "";
    }
}

//Event handler for sell item form submit
$('#formSellItem').submit(function(event){
    // cancels the form submission
    event.preventDefault();

	setDatabaseName('dbFlogger', ['UsersObjectStore', 'ItemsObjectStore']);
	setCurrObjectStoreName('ItemsObjectStore');
	startDB(function () {
		saveItemData();
		alert("Your item has been saved successfully!")
		//window.location.href = "../LoginPage/Login.html";
		//event.preventDefault();
	});
});

//Google map
var map;
var marker;
var myLatlng = new google.maps.LatLng(51.8979988098144,-2.0838599205017);
var geocoder = new google.maps.Geocoder();
var infowindow = new google.maps.InfoWindow();

//Show a intial map in the page
//created marker and infor window in the map
function initialize(){
	var mapOptions = {
		zoom: 15,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
    };
		       
	map = new google.maps.Map(document.getElementById("mapInput"), mapOptions);
                
    marker = new google.maps.Marker({
		map: map,
        position: myLatlng,
        draggable: true 
    });     
                
	geocoder.geocode({'latLng': myLatlng }, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			if (results[0]) {
				showAddress(results);
                $('#txtLatitude').val(marker.getPosition().lat());
                $('#txtLongitude').val(marker.getPosition().lng());
                infowindow.setContent(results[0].formatted_address);
                infowindow.open(map, marker);
            }
        }
	});
                           
    google.maps.event.addListener(marker, 'dragend', function() {

	geocoder.geocode({'latLng': marker.getPosition()}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			if (results[0]) {
				showAddress(results);
                $('#txtLatitude').val(marker.getPosition().lat());
                $('#txtLongitude').val(marker.getPosition().lng());
                infowindow.setContent(results[0].formatted_address);
                infowindow.open(map, marker);
                }
            }
		});
	});
            
 }
 
 //Show the address details selected by user  
 function showAddress(results) {
	 $('#txtHouseNameOrNo').val(results[0].address_components[0].long_name);
	 $('#txtStreetName').val(results[0].address_components[1].long_name);
	 $('#txtAreaName').val(results[0].address_components[2].long_name);
	 $('#txtCityName').val(results[0].address_components[3].long_name);
	 $('#txtCountyName').val(results[0].address_components[4].long_name);
	 $('#txtCountryName').val(results[0].address_components[5].long_name + ', ' + results[0].address_components[6].long_name);
	 $('#txtPostCode').val(results[0].address_components[7].long_name);
 }
            
 google.maps.event.addDomListener(window, 'load', initialize);