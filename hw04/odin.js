var Odin = {
    define: function (className, config) {
        window[className] = function () {
        }
        for (var st_field in config.staticFields) {
            window[className][st_field] = config.staticFields[st_field];
        }
        for (var st_method in config.staticMethods) {
            window[className][st_method] = config.staticMethods[st_method];
        }
        for (var method in config.methods) {
            window[className].prototype[method] = config.methods[method];
        }
        for (var field in config.fields) {
            window[className].prototype[field] = config.fields[field];
        }
    },
    create: function(className, config){
        var object = new window[className]();
        for(var argument in config) {
            object[argument] = config[argument];
        }
        return object;
    }
}