function getStation() {
    return http.get('/station.json')
        .then(function (result) {
            return result.data;
        });
}


var objectStation = {
    get: function (identifier) {
        return getStation().then(function (station) {
            if (identifier.key === 'sky360station') {
                return {
                    identifier: identifier,
                    name: station.name,
                    type: 'folder',
                    location: 'ROOT'
                };
            }
        });
    }
};


function StationPlugin() {
    return function install(openmct) {
        //console.log("I've been installed -yay!!");
        openmct.objects.addRoot({
        	namespace: 'sample2.taxonomy',
        	key: 'sky360station'
        });
        
        openmct.objects.addProvider('sample2.taxonomy', objectStation);
    }
};
