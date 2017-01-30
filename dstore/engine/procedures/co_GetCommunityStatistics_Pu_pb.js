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
goog.exportSymbol('proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.co_GetCommunityStatistics_Pu.Response', null, global);
goog.exportSymbol('proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row', null, global);

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
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.displayName = 'proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters';
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
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    uniqueId: (f = msg.getUniqueId()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    uniqueIdNull: msg.getUniqueIdNull(),
    personIdentificationValues: (f = msg.getPersonIdentificationValues()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    personIdentificationValuesNull: msg.getPersonIdentificationValuesNull(),
    communityId: (f = msg.getCommunityId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    communityIdNull: msg.getCommunityIdNull(),
    listOfStatisticInformationIds: (f = msg.getListOfStatisticInformationIds()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    listOfStatisticInformationIdsNull: msg.getListOfStatisticInformationIdsNull(),
    separatorInIdentVals: (f = msg.getSeparatorInIdentVals()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    separatorInIdentValsNull: msg.getSeparatorInIdentValsNull()
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
 * @return {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters;
  return proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setUniqueId(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUniqueIdNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setPersonIdentificationValues(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPersonIdentificationValuesNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setCommunityId(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommunityIdNull(value);
      break;
    case 4:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setListOfStatisticInformationIds(value);
      break;
    case 1004:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setListOfStatisticInformationIdsNull(value);
      break;
    case 5:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setSeparatorInIdentVals(value);
      break;
    case 1005:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSeparatorInIdentValsNull(value);
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
 * @param {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUniqueId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getUniqueIdNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getPersonIdentificationValues();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getPersonIdentificationValuesNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getCommunityId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getCommunityIdNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
  f = this.getListOfStatisticInformationIds();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getListOfStatisticInformationIdsNull();
  if (f) {
    writer.writeBool(
      1004,
      f
    );
  }
  f = this.getSeparatorInIdentVals();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getSeparatorInIdentValsNull();
  if (f) {
    writer.writeBool(
      1005,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters} The clone.
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.values.StringValue unique_id = 1;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.getUniqueId = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 1));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.setUniqueId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.clearUniqueId = function() {
  this.setUniqueId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.hasUniqueId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool unique_id_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.getUniqueIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1001, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.setUniqueIdNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.StringValue person_identification_values = 2;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.getPersonIdentificationValues = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 2));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.setPersonIdentificationValues = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.clearPersonIdentificationValues = function() {
  this.setPersonIdentificationValues(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.hasPersonIdentificationValues = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool person_identification_values_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.getPersonIdentificationValuesNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1002, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.setPersonIdentificationValuesNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.IntegerValue community_id = 3;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.getCommunityId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 3));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.setCommunityId = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.clearCommunityId = function() {
  this.setCommunityId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.hasCommunityId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool community_id_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.getCommunityIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1003, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.setCommunityIdNull = function(value) {
  jspb.Message.setField(this, 1003, value);
};


/**
 * optional dstore.values.StringValue list_of_statistic_information_ids = 4;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.getListOfStatisticInformationIds = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 4));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.setListOfStatisticInformationIds = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.clearListOfStatisticInformationIds = function() {
  this.setListOfStatisticInformationIds(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.hasListOfStatisticInformationIds = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool list_of_statistic_information_ids_null = 1004;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.getListOfStatisticInformationIdsNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1004, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.setListOfStatisticInformationIdsNull = function(value) {
  jspb.Message.setField(this, 1004, value);
};


/**
 * optional dstore.values.StringValue separator_in_ident_vals = 5;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.getSeparatorInIdentVals = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 5));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.setSeparatorInIdentVals = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.clearSeparatorInIdentVals = function() {
  this.setSeparatorInIdentVals(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.hasSeparatorInIdentVals = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool separator_in_ident_vals_null = 1005;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.getSeparatorInIdentValsNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1005, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Parameters.prototype.setSeparatorInIdentValsNull = function(value) {
  jspb.Message.setField(this, 1005, value);
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
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.co_GetCommunityStatistics_Pu.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.displayName = 'proto.dstore.engine.co_GetCommunityStatistics_Pu.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_engine_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_engine_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Response}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.co_GetCommunityStatistics_Pu.Response;
  return proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Response}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row;
      reader.readMessage(value,proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Response} The clone.
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated dstore.engine.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.MetaInformation>}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.MetaInformation>} value  */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.Message>}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.Message>} value  */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row>}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row>} value  */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.displayName = 'proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row';
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
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowId: msg.getRowId(),
    value: (f = msg.getValue()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    statisticInformationId: (f = msg.getStatisticInformationId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    statisticInformation: (f = msg.getStatisticInformation()) && dstore_values_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row;
  return proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10001:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 10002:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setStatisticInformationId(value);
      break;
    case 10003:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setStatisticInformation(value);
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
 * @param {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRowId();
  if (f !== 0) {
    writer.writeInt32(
      10000,
      f
    );
  }
  f = this.getValue();
  if (f != null) {
    writer.writeMessage(
      10001,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getStatisticInformationId();
  if (f != null) {
    writer.writeMessage(
      10002,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getStatisticInformation();
  if (f != null) {
    writer.writeMessage(
      10003,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row} The clone.
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


/**
 * optional dstore.values.StringValue value = 10001;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.prototype.getValue = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 10001));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.prototype.setValue = function(value) {
  jspb.Message.setWrapperField(this, 10001, value);
};


proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.prototype.clearValue = function() {
  this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.prototype.hasValue = function() {
  return jspb.Message.getField(this, 10001) != null;
};


/**
 * optional dstore.values.IntegerValue statistic_information_id = 10002;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.prototype.getStatisticInformationId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 10002));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.prototype.setStatisticInformationId = function(value) {
  jspb.Message.setWrapperField(this, 10002, value);
};


proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.prototype.clearStatisticInformationId = function() {
  this.setStatisticInformationId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.prototype.hasStatisticInformationId = function() {
  return jspb.Message.getField(this, 10002) != null;
};


/**
 * optional dstore.values.StringValue statistic_information = 10003;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.prototype.getStatisticInformation = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 10003));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.prototype.setStatisticInformation = function(value) {
  jspb.Message.setWrapperField(this, 10003, value);
};


proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.prototype.clearStatisticInformation = function() {
  this.setStatisticInformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.co_GetCommunityStatistics_Pu.Response.Row.prototype.hasStatisticInformation = function() {
  return jspb.Message.getField(this, 10003) != null;
};


goog.object.extend(exports, proto.dstore.engine.co_GetCommunityStatistics_Pu);
