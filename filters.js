angular.module("alanloffler.filters", [])
.filter("camelcase", function() {
	return function(text, type) {
		var type = type || "all";
		var filtered;
		if(!text) return;
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
})
.filter("truncate", function() {
	return function(text, len, type, end) {
		var type = type || "chars";
		var end = end || "...";
		if(len < end.length + 1) len = end.length + 1;
		if(!text) return;
		var toFilter = len - (end.length + 1);
		if(text.length > toFilter) {
			switch(type) {
				case "chars":
					return text.slice(0, toFilter) + " " + end;
				break;
				case "words":
					var tmp = [], words = text.split(" ");
					for(var i = 0; i < len; i++) {
						tmp[i] = words[i];
					};
					return tmp.join(" ") + " " + end;
				break;
			};
		} else {
			return end;
		};
	};
});