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
goog.exportSymbol('proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response', null, global);
goog.exportSymbol('proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row', null, global);

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
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.displayName = 'proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters';
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
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    communityBinaryCategoryId: (f = msg.getCommunityBinaryCategoryId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    communityBinaryCategoryIdNull: msg.getCommunityBinaryCategoryIdNull(),
    communityId: (f = msg.getCommunityId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    communityIdNull: msg.getCommunityIdNull(),
    communityBinaryCategory: (f = msg.getCommunityBinaryCategory()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    communityBinaryCategoryNull: msg.getCommunityBinaryCategoryNull(),
    sortNo: (f = msg.getSortNo()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    sortNoNull: msg.getSortNoNull(),
    accessLevel: (f = msg.getAccessLevel()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    accessLevelNull: msg.getAccessLevelNull(),
    binaryQuotaInKB: (f = msg.getBinaryQuotaInKB()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    binaryQuotaInKBNull: msg.getBinaryQuotaInKBNull(),
    maxNumberOfBinaries: (f = msg.getMaxNumberOfBinaries()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    maxNumberOfBinariesNull: msg.getMaxNumberOfBinariesNull(),
    deleteBinaryCategory: (f = msg.getDeleteBinaryCategory()) && dstore_values_pb.BooleanValue.toObject(includeInstance, f),
    deleteBinaryCategoryNull: msg.getDeleteBinaryCategoryNull()
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
 * @return {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters;
  return proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setCommunityBinaryCategoryId(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommunityBinaryCategoryIdNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setCommunityId(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommunityIdNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setCommunityBinaryCategory(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommunityBinaryCategoryNull(value);
      break;
    case 4:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setSortNo(value);
      break;
    case 1004:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSortNoNull(value);
      break;
    case 5:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setAccessLevel(value);
      break;
    case 1005:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccessLevelNull(value);
      break;
    case 6:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setBinaryQuotaInKB(value);
      break;
    case 1006:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBinaryQuotaInKBNull(value);
      break;
    case 7:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setMaxNumberOfBinaries(value);
      break;
    case 1007:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMaxNumberOfBinariesNull(value);
      break;
    case 8:
      var value = new dstore_values_pb.BooleanValue;
      reader.readMessage(value,dstore_values_pb.BooleanValue.deserializeBinaryFromReader);
      msg.setDeleteBinaryCategory(value);
      break;
    case 1008:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleteBinaryCategoryNull(value);
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
 * @param {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCommunityBinaryCategoryId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getCommunityBinaryCategoryIdNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getCommunityId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getCommunityIdNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getCommunityBinaryCategory();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getCommunityBinaryCategoryNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
  f = this.getSortNo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getSortNoNull();
  if (f) {
    writer.writeBool(
      1004,
      f
    );
  }
  f = this.getAccessLevel();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getAccessLevelNull();
  if (f) {
    writer.writeBool(
      1005,
      f
    );
  }
  f = this.getBinaryQuotaInKB();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getBinaryQuotaInKBNull();
  if (f) {
    writer.writeBool(
      1006,
      f
    );
  }
  f = this.getMaxNumberOfBinaries();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getMaxNumberOfBinariesNull();
  if (f) {
    writer.writeBool(
      1007,
      f
    );
  }
  f = this.getDeleteBinaryCategory();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      dstore_values_pb.BooleanValue.serializeBinaryToWriter
    );
  }
  f = this.getDeleteBinaryCategoryNull();
  if (f) {
    writer.writeBool(
      1008,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters} The clone.
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.values.IntegerValue community_binary_category_id = 1;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.getCommunityBinaryCategoryId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 1));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.setCommunityBinaryCategoryId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.clearCommunityBinaryCategoryId = function() {
  this.setCommunityBinaryCategoryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.hasCommunityBinaryCategoryId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool community_binary_category_id_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.getCommunityBinaryCategoryIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1001, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.setCommunityBinaryCategoryIdNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.IntegerValue community_id = 2;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.getCommunityId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 2));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.setCommunityId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.clearCommunityId = function() {
  this.setCommunityId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.hasCommunityId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool community_id_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.getCommunityIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1002, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.setCommunityIdNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.StringValue community_binary_category = 3;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.getCommunityBinaryCategory = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 3));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.setCommunityBinaryCategory = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.clearCommunityBinaryCategory = function() {
  this.setCommunityBinaryCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.hasCommunityBinaryCategory = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool community_binary_category_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.getCommunityBinaryCategoryNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1003, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.setCommunityBinaryCategoryNull = function(value) {
  jspb.Message.setField(this, 1003, value);
};


/**
 * optional dstore.values.IntegerValue sort_no = 4;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.getSortNo = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 4));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.setSortNo = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.clearSortNo = function() {
  this.setSortNo(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.hasSortNo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool sort_no_null = 1004;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.getSortNoNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1004, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.setSortNoNull = function(value) {
  jspb.Message.setField(this, 1004, value);
};


/**
 * optional dstore.values.IntegerValue access_level = 5;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.getAccessLevel = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 5));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.setAccessLevel = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.clearAccessLevel = function() {
  this.setAccessLevel(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.hasAccessLevel = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool access_level_null = 1005;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.getAccessLevelNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1005, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.setAccessLevelNull = function(value) {
  jspb.Message.setField(this, 1005, value);
};


/**
 * optional dstore.values.IntegerValue binary_quota_in_k_b = 6;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.getBinaryQuotaInKB = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 6));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.setBinaryQuotaInKB = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.clearBinaryQuotaInKB = function() {
  this.setBinaryQuotaInKB(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.hasBinaryQuotaInKB = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool binary_quota_in_k_b_null = 1006;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.getBinaryQuotaInKBNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1006, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.setBinaryQuotaInKBNull = function(value) {
  jspb.Message.setField(this, 1006, value);
};


/**
 * optional dstore.values.IntegerValue max_number_of_binaries = 7;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.getMaxNumberOfBinaries = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 7));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.setMaxNumberOfBinaries = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.clearMaxNumberOfBinaries = function() {
  this.setMaxNumberOfBinaries(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.hasMaxNumberOfBinaries = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool max_number_of_binaries_null = 1007;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.getMaxNumberOfBinariesNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1007, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.setMaxNumberOfBinariesNull = function(value) {
  jspb.Message.setField(this, 1007, value);
};


/**
 * optional dstore.values.BooleanValue delete_binary_category = 8;
 * @return {proto.dstore.values.BooleanValue}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.getDeleteBinaryCategory = function() {
  return /** @type{proto.dstore.values.BooleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.BooleanValue, 8));
};


/** @param {proto.dstore.values.BooleanValue|undefined} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.setDeleteBinaryCategory = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.clearDeleteBinaryCategory = function() {
  this.setDeleteBinaryCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.hasDeleteBinaryCategory = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool delete_binary_category_null = 1008;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.getDeleteBinaryCategoryNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1008, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Parameters.prototype.setDeleteBinaryCategoryNull = function(value) {
  jspb.Message.setField(this, 1008, value);
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
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.displayName = 'proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_engine_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_engine_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response;
  return proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row;
      reader.readMessage(value,proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row.deserializeBinaryFromReader);
      msg.getRowList().push(value);
      msg.setRowList(msg.getRowList());
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
 * @param {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response} The clone.
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated dstore.engine.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.MetaInformation>}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.MetaInformation>} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.Message>}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.Message>} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row>}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row>} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.prototype.clearRowList = function() {
  this.setRowList([]);
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
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row.displayName = 'proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row';
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
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row;
  return proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
 * @param {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
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
 * @return {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row} The clone.
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.co_ModifyBinaryCategories_Ad.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


goog.object.extend(exports, proto.dstore.engine.co_ModifyBinaryCategories_Ad);
