const Platform = (function() {
    return function(obj, failure) {
        if (obj.web && typeof obj.web == "function") {
            obj.web();
        }
        else if (typeof failure == "function") {
            failure()
        }
    };
})();

export default Platform;