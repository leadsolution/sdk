"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function source(defaultSource) {
    var query = new URLSearchParams(window.location.search);
    var source = query.get("source");
    if (source === null) {
        return defaultSource;
    }
    return source;
}
exports.source = source;
function formDataToUrlSearchParams(formData) {
    var params = new URLSearchParams();
    formData.forEach(function (val, key) {
        params.set(key, val.valueOf().toString());
    });
    return params;
}
exports.formDataToUrlSearchParams = formDataToUrlSearchParams;
