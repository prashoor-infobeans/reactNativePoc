const Platform = (function() {
    return function(obj, failure) {
        if (obj.ios && typeof obj.ios == "function") {
            obj.ios();
        }
        else if (obj.native && typeof obj.native == "function") {
            obj.native('ios');
        }
        else if (typeof failure == "function") {
            failure()
        }
    };
})();

export default Platform;