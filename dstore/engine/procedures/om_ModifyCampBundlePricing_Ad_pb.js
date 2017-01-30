/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var dstore_values_pb = require('../../../dstore/values_pb.js');
var dstore_engine_engine_pb = require('../../../dstore/engine/engine_pb.js');
goog.exportSymbol('proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response', null, global);
goog.exportSymbol('proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.displayName = 'proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    absDiscountSurchargeTypeId: (f = msg.getAbsDiscountSurchargeTypeId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    absDiscountSurchargeTypeIdNull: msg.getAbsDiscountSurchargeTypeIdNull(),
    benefitId: (f = msg.getBenefitId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    benefitIdNull: msg.getBenefitIdNull(),
    bundlePricingTypeId: (f = msg.getBundlePricingTypeId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    bundlePricingTypeIdNull: msg.getBundlePricingTypeIdNull(),
    bundlePriceOrDiscount: (f = msg.getBundlePriceOrDiscount()) && dstore_values_pb.DecimalValue.toObject(includeInstance, f),
    bundlePriceOrDiscountNull: msg.getBundlePriceOrDiscountNull(),
    netBasedPricing: (f = msg.getNetBasedPricing()) && dstore_values_pb.BooleanValue.toObject(includeInstance, f),
    netBasedPricingNull: msg.getNetBasedPricingNull(),
    deleteBenefit: (f = msg.getDeleteBenefit()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    deleteBenefitNull: msg.getDeleteBenefitNull()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters;
  return proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setAbsDiscountSurchargeTypeId(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAbsDiscountSurchargeTypeIdNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setBenefitId(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBenefitIdNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setBundlePricingTypeId(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBundlePricingTypeIdNull(value);
      break;
    case 4:
      var value = new dstore_values_pb.DecimalValue;
      reader.readMessage(value,dstore_values_pb.DecimalValue.deserializeBinaryFromReader);
      msg.setBundlePriceOrDiscount(value);
      break;
    case 1004:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBundlePriceOrDiscountNull(value);
      break;
    case 5:
      var value = new dstore_values_pb.BooleanValue;
      reader.readMessage(value,dstore_values_pb.BooleanValue.deserializeBinaryFromReader);
      msg.setNetBasedPricing(value);
      break;
    case 1005:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNetBasedPricingNull(value);
      break;
    case 6:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setDeleteBenefit(value);
      break;
    case 1006:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleteBenefitNull(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getAbsDiscountSurchargeTypeId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getAbsDiscountSurchargeTypeIdNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getBenefitId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getBenefitIdNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getBundlePricingTypeId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getBundlePricingTypeIdNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
  f = this.getBundlePriceOrDiscount();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      dstore_values_pb.DecimalValue.serializeBinaryToWriter
    );
  }
  f = this.getBundlePriceOrDiscountNull();
  if (f) {
    writer.writeBool(
      1004,
      f
    );
  }
  f = this.getNetBasedPricing();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      dstore_values_pb.BooleanValue.serializeBinaryToWriter
    );
  }
  f = this.getNetBasedPricingNull();
  if (f) {
    writer.writeBool(
      1005,
      f
    );
  }
  f = this.getDeleteBenefit();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getDeleteBenefitNull();
  if (f) {
    writer.writeBool(
      1006,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters} The clone.
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.values.IntegerValue abs_discount_surcharge_type_id = 1;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.getAbsDiscountSurchargeTypeId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 1));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.setAbsDiscountSurchargeTypeId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.clearAbsDiscountSurchargeTypeId = function() {
  this.setAbsDiscountSurchargeTypeId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.hasAbsDiscountSurchargeTypeId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool abs_discount_surcharge_type_id_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.getAbsDiscountSurchargeTypeIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1001, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.setAbsDiscountSurchargeTypeIdNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.IntegerValue benefit_id = 2;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.getBenefitId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 2));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.setBenefitId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.clearBenefitId = function() {
  this.setBenefitId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.hasBenefitId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool benefit_id_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.getBenefitIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1002, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.setBenefitIdNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.IntegerValue bundle_pricing_type_id = 3;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.getBundlePricingTypeId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 3));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.setBundlePricingTypeId = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.clearBundlePricingTypeId = function() {
  this.setBundlePricingTypeId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.hasBundlePricingTypeId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool bundle_pricing_type_id_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.getBundlePricingTypeIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1003, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.setBundlePricingTypeIdNull = function(value) {
  jspb.Message.setField(this, 1003, value);
};


/**
 * optional dstore.values.DecimalValue bundle_price_or_discount = 4;
 * @return {proto.dstore.values.DecimalValue}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.getBundlePriceOrDiscount = function() {
  return /** @type{proto.dstore.values.DecimalValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.DecimalValue, 4));
};


/** @param {proto.dstore.values.DecimalValue|undefined} value  */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.setBundlePriceOrDiscount = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.clearBundlePriceOrDiscount = function() {
  this.setBundlePriceOrDiscount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.hasBundlePriceOrDiscount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool bundle_price_or_discount_null = 1004;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.getBundlePriceOrDiscountNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1004, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.setBundlePriceOrDiscountNull = function(value) {
  jspb.Message.setField(this, 1004, value);
};


/**
 * optional dstore.values.BooleanValue net_based_pricing = 5;
 * @return {proto.dstore.values.BooleanValue}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.getNetBasedPricing = function() {
  return /** @type{proto.dstore.values.BooleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.BooleanValue, 5));
};


/** @param {proto.dstore.values.BooleanValue|undefined} value  */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.setNetBasedPricing = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.clearNetBasedPricing = function() {
  this.setNetBasedPricing(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.hasNetBasedPricing = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool net_based_pricing_null = 1005;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.getNetBasedPricingNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1005, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.setNetBasedPricingNull = function(value) {
  jspb.Message.setField(this, 1005, value);
};


/**
 * optional dstore.values.IntegerValue delete_benefit = 6;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.getDeleteBenefit = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 6));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.setDeleteBenefit = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.clearDeleteBenefit = function() {
  this.setDeleteBenefit(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.hasDeleteBenefit = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool delete_benefit_null = 1006;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.getDeleteBenefitNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1006, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Parameters.prototype.setDeleteBenefitNull = function(value) {
  jspb.Message.setField(this, 1006, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.displayName = 'proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_engine_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_engine_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row.toObject, includeInstance),
    benefitId: (f = msg.getBenefitId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response;
  return proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new dstore_engine_engine_pb.MetaInformation;
      reader.readMessage(value,dstore_engine_engine_pb.MetaInformation.deserializeBinaryFromReader);
      msg.getMetaInformationList().push(value);
      msg.setMetaInformationList(msg.getMetaInformationList());
      break;
    case 3:
      var value = new dstore_engine_engine_pb.Message;
      reader.readMessage(value,dstore_engine_engine_pb.Message.deserializeBinaryFromReader);
      msg.getMessageList().push(value);
      msg.setMessageList(msg.getMessageList());
      break;
    case 4:
      var value = new proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row;
      reader.readMessage(value,proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row.deserializeBinaryFromReader);
      msg.getRowList().push(value);
      msg.setRowList(msg.getRowList());
      break;
    case 101:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setBenefitId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMetaInformationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      dstore_engine_engine_pb.MetaInformation.serializeBinaryToWriter
    );
  }
  f = this.getMessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      dstore_engine_engine_pb.Message.serializeBinaryToWriter
    );
  }
  f = this.getRowList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row.serializeBinaryToWriter
    );
  }
  f = this.getBenefitId();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response} The clone.
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated dstore.engine.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.MetaInformation>}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.MetaInformation>} value  */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.Message>}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.Message>} value  */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row>}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row>} value  */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.prototype.clearRowList = function() {
  this.setRowList([]);
};


/**
 * optional dstore.values.IntegerValue benefit_id = 101;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.prototype.getBenefitId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 101));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.prototype.setBenefitId = function(value) {
  jspb.Message.setWrapperField(this, 101, value);
};


proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.prototype.clearBenefitId = function() {
  this.setBenefitId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.prototype.hasBenefitId = function() {
  return jspb.Message.getField(this, 101) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row.displayName = 'proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowId: msg.getRowId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row;
  return proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 10000:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRowId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRowId();
  if (f !== 0) {
    writer.writeInt32(
      10000,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row} The clone.
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.om_ModifyCampBundlePricing_Ad.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


goog.object.extend(exports, proto.dstore.engine.om_ModifyCampBundlePricing_Ad);
