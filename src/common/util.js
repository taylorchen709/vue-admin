var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
var DEFAULT_PATTERN = 'yyyy-MM-dd hh:mm:ss';
function padding(s, len) {
    var len = len - (s + '').length;
    for (var i = 0; i < len; i++) {
        s = '0' + s;
    }
    return s;
};

export default {
    getQueryStringByName: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        var context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    },
    formatDate: {
        format: formatter,
        parse: function (dateString, pattern) {
            var matchs1 = pattern.match(SIGN_REGEXP);
            var matchs2 = dateString.match(/(\d)+/g);
            if (matchs1.length == matchs2.length) {
                var _date = new Date(1970, 0, 1);
                for (var i = 0; i < matchs1.length; i++) {
                    var _int = parseInt(matchs2[i]);
                    var sign = matchs1[i];
                    switch (sign.charAt(0)) {
                        case 'y':
                            _date.setFullYear(_int);
                            break;
                        case 'M':
                            _date.setMonth(_int - 1);
                            break;
                        case 'd':
                            _date.setDate(_int);
                            break;
                        case 'h':
                            _date.setHours(_int);
                            break;
                        case 'm':
                            _date.setMinutes(_int);
                            break;
                        case 's':
                            _date.setSeconds(_int);
                            break;
                    }
                }
                return _date;
            }
            return null;
        }

    },
    deepInspectWithDateObject: function (input) {
        inspectString2Date(input);
        return input;
    },
    deepInTranWithDateObject: function (input, format) {
        inspectString2Date(input, format);
        return input;
    },
    tryDateParse: tryDateParse
};


function inspectString2Date(input, format) {

    // Ignore things that aren't objects.
    if (typeof input !== "object") return;

    for (var key in input) {
        if (!input.hasOwnProperty(key)) continue;
        var value = input[key];
        if (typeof value === "string") {
            var v = tryDateParse(value);
            if (v instanceof (Date) && !!format) {
                input[key] = formatter(v, format)
            }
            else {
                input[key] = v;
            }
        } else if (typeof value === "object") {

            // Recurse into object
            inspectString2Date(value, format);
        }
    }

}

var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
var reMsAjax = /^\/Date\((d|-|.*)\)[\/|\\]$/;

function tryDateParse(value) {
    // then, use regex to see if it's an ISO-formatted string
    var a = reISO.exec(value);
    if (a) {
        // if so, Date() can parse it:
        return new Date(value);
    }
    // otherwise, see if it's a wacky Microsoft-format string:
    a = reMsAjax.exec(value);
    if (a) {
        // and perform some jujitsu to make use of it:
        var b = a[1].split(/[-+,.]/);
        return new Date(b[0] ? +b[0] : 0 - +b[1]);
    }
    // here, you could insert any additional tests and parse instructions you like, for other date syntaxes...
    // important: you need to return any values you're not parsing, or they die...
    return value;
};
function formatter(date, pattern) {
    pattern = pattern || DEFAULT_PATTERN;
    return pattern.replace(SIGN_REGEXP, function ($0) {
        switch ($0.charAt(0)) {
            case 'y':
                return padding(date.getFullYear(), $0.length);
            case 'M':
                return padding(date.getMonth() + 1, $0.length);
            case 'd':
                return padding(date.getDate(), $0.length);
            case 'w':
                return date.getDay() + 1;
            case 'h':
                return padding(date.getHours(), $0.length);
            case 'm':
                return padding(date.getMinutes(), $0.length);
            case 's':
                return padding(date.getSeconds(), $0.length);
        }
    });
}