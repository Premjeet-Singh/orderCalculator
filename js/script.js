function OrderFormController($scope){

	$scope.services = [
		{
			name: 'Harry Potter',
			price: 580,
			active:false
		},{
			name: 'Powerof the MIND',
			price: 235,
			active:false
		},{
			name: 'Conversation with GOD',
			price: 259,
			active:false
		},{
			name: 'Principal Upanisads',
			price: 699,
			active:false
		},{
			name: 'Naruto Vol.42',
			price: 306.85,
			active:false
		},{
			name: 'The Immortal Prince of Egypt',
			price: 285.50,
			active:false
		},{
			name: 'Gray Shadows',
			price: 302,
			active:false
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	$scope.total = function(){

		var total = 0;

		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}
