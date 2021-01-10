const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-data.p.rapidapi.com/totals",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "", //paste api key here
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	}
};
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    $("#confirmed").html(response[0].confirmed);
    $("#recovered").html(response[0].recovered);
    $("#deaths").html(response[0].deaths);
  });

