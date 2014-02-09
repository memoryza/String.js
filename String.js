;(function(){
    function isType(type) {
        return function(obj) {
            return {}.toString(obj) == "[Object" + type + "]";
        }
    }
    var isFunction = isType("Function"),
        _StrProtoCache = String.prototype;

    if(!isFunction(_StrProtoCache.trim)) {
        _StrProtoCache.trim = function() {
            return this.trimLeft().trimRight();
        }
    }
    if(!isFunction(_StrProtoCache.trimLeft)) {
        _StrProtoCache.trimLeft = function() {
            var str = '',
                char;
            for(var i = 0,len = this.length; i < len; i++) {
                char = this.charAt(i);
                if(char !== ' ') {
                    str = this.slice(i);
                    break;
                }
            }
            return str;
        }
    }
    if(!isFunction(_StrProtoCache.trimRight)) {
        _StrProtoCache.trimRight = function() {
            var str = '',
                char;
            for(var i = this.length - 1; i > 0; i--) {
                char = this.charAt(i);
                if(char !== ' ') {
                    str = this.substring(i + 1, -1);
                    break;
                }
            }
            return str;
        }
    }
})();
