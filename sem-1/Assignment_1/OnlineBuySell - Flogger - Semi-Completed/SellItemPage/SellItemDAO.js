//Save item details in a indexeddb database

function saveItemData() {
	var itemName = $('#txtItemName').val();
	var itemDesc = $('#txtItemDesc').val();
	var price = $('#txtPrice').val();
	var houseNameOrNo = $('#txtHouseNameOrNo').val();
	var streetName = $('#txtStreetName').val();
	var areaName = $('#txtAreaName').val();
	var cityName = $('#txtCityName').val();
	var countyName = $('#txtCountyName').val();
	var countryName = $('#txtCountryName').val();
	var postCode = $('#txtPostCode').val();	
	var latitude = $('#txtLatitude').val();
	var longitude = $('#txtLongitude').val();
			
	var data = {
		'sellerID' : sessionStorage.getItem('userEmail'),
		'itemName': itemName, 
		'itemDesc': itemDesc,
		'price': price,
		'houseNameOrNo': houseNameOrNo, 
		'streetName': streetName,
		'areaName': reaName,
		'cityName': cityName,
		'countyName': countyName,
		'countryName': countryName,
		'postCode': postCode,
		'latitude': latitude,
		'longitude': longitude
	};
	
	//image
	
	var fileInput = $('#fileItemImage');
    var selectedFile = fileInput.get(0).files[0];
	console.log("selectedFile:", selectedFile);
	
	if (typeof selectedFile != 'undefined')
      data.itemImage = selectedFile;
										
	insertOne(data, function(lastID) {
		event.preventDefault();
		return false;
	});
}

