/**
 * Get Weather Information
 * @author: edit by ChuwxNTC
 */

/**
 * Callback function to show weather information
 */
function showWeatherCallback(data) {
	var channel = data.query.results.weather.rss.channel,
		img = channel.item.description.match(/http:\/\/[^"']*/),
		html = '<img style="vertical-align:bottom" height="52" width="52" src="' + img + '" /> <span style="font-size:44px">' + channel.item.condition.temp + '&deg;C</span><br />' + 
				'<strong>Độ ẩm:</strong> ' + channel.atmosphere.humidity + '%<br />' + 
				'<strong>Tốc độ gió:</strong> ' + channel.wind.speed + ' km/h<br />';
		document.write(html);
}

/**
 * Show weather information. Use YQL to get information
 * location: in format "city, country"
 *
 * Ex: showWeather('hanoi,vietnam');
 */
function showWeather(location) {
	var baseUrl = 'http://query.yahooapis.com/v1/public/yql?q=', 
		q = 'use "http://github.com/yql/yql-tables/raw/master/weather/weather.bylocation.xml" as we;' + 
			'select * from we where location="' + location + '" and unit="c"',
		url = baseUrl + encodeURIComponent(q) + '&format=json&diagnostics=false&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=showWeatherCallback';

	document.write('<script type="text/javascript" src="' + url + '"></' + 'script>');
}