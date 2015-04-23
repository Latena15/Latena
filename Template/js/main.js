(function(){

var total = [

		{
			name: 'American Sniper',
			total: 347753000,
			theaters: 3885,
			opening: 633456,
			image: 'sniper.png'
		},
		{
			name: 'Hunger Games',
			total: 337135885,
			theaters: 4151,
			opening: 121897634,
			image: 'hunger.png'
		},
		{
			name: 'Guardians of the Galaxy',
			total: 333176600,
			theaters: 4088,
			opening: 94320883,
			image: 'gog.png'
		},
		{
			name: 'Captain America: The Winter Soldier',
			total: 259766572,
			theaters: 3938,
			opening: 95023721,
			image: 'captain.png'
		},
		{
			name: 'The Lego Movie',
			total: 257760692,
			theaters: 3890,
			opening: 69050279,
			image: 'lego.png'

		},
		{
			name: 'The Hobbit: The Battle of Five Armies',
			total: '255119788',
			theaters: '3875',
			opening: '54724334',
			image: 'hobbit.png'
		}
	];

var templateHtml = $('#movie-template').html();
var templateFactory =_.template(templateHtml);

total.forEach(function(result){
		$('#container').append(templateFactory(result));
});

}).call(this);