angular.module("alanloffler.filters", [])
.filter("camelcase", function() {
	return function(text, type) {
		var type = type || "all";
		var filtered;
		
		switch(type) {
			case "all":
				var words = text.split(" ");
				for(var i = 0; i < words.length; i++) {
					words[i] = words[i].substr(0, 1).toUpperCase() + words[i].slice(1);
				};
				filtered = words.join(" ");
			break;
			
			case "first":
				filtered = text.substr(0, 1).toUpperCase() + text.slice(1);
			break;
		};
		
		return filtered;
	};
});