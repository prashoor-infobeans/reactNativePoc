const Platform = (function() {
    return function(obj, failure) {
        if (obj.android && typeof obj.android == "function") {
            obj.android();
        }
        else if (obj.native && typeof obj.native == "function") {
            obj.native('android');
        }
        else if (typeof failure == "function") {
            failure()
        }
    };
})();

export default Platform;