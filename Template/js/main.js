(function(){

	var movies = [
		{
			name: 'American Sniper',
			Total Gross: $347753000,
			theaters: 3885,
			opening gross: $633456,
			image: 'Sniper.png'
		},
		{
			name: 'Hunger Games',
			Total Gross: $337135885,
			theaters: 4151,
			opening gross: $121897634,
			image: 'hunger.png'
		},
		{
			name: 'Guardians of the Galaxy',
			Total Gross: $333176600,
			theaters: 4088,
			opening gross: $94320883,
			image: 'gog.png'
		},
		{
			name: 'Captain America: The Winter Soldier',
			Total Gross: $259766572,
			theaters: 3938,
			opening gross: $95023721,
			image: 'captain.png'
		},
		{
			name: 'The Lego Movie',
			Total Gross: $257760692,
			theaters: 3890,
			opening gross: $69050279,
			image: 'lego.png'

		},
		{
			name: 'The Hobbit: The Battle of Five Armies',
			Total Gross: $255119788,
			theaters: 3875,
			opening gross: $54724334,
			image: 'hobbit.png'
		}
	];


	// Step 1: in the JavaScript, load the html from the template we made in index.html
	var templateHtml = $('#movie-template').html();
	console.log(templateHtml)

	// Step 2: Take our templateHtml and turn it into a template factory
	var templateFactory = _.template(templateHtml);

	// Step 3: Loop through our data and bake out all of our elements
	movies.forEach(function(movieData){
		var this_movie_html_plus_data = templateFactory(movieData);
		console.log(this_movie_html_plus_data)
		console.log('-----');
		$('#container').append(this_movie_html_plus_data);
	});

}).call(this);