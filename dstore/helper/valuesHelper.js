var Decimal = require('decimal.js');

exports.toDate = function (timestampValue) {
    if (!timestampValue instanceof proto.dstore.values.TimestampValue)
        throw "expected a TimestampValue";
    return /** @type {Date}  */ new Date(timestampValue.getValue().getSeconds() * 1000 + timestampValue.getValue().getNanos() / 1000000);
};

exports.toDecimal = function (decimalValue) {
    if (!decimalValue instanceof proto.dstore.values.DecimalValue)
        throw "expected a DecimalValue";
    return /** @type {Decimal}  */ new Decimal(decimalValue.getValue());
};