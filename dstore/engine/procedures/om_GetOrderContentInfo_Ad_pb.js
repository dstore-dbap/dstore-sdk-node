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
var dstore_engine_error_pb = require('../../../dstore/engine/error_pb.js');
var dstore_engine_message_pb = require('../../../dstore/engine/message_pb.js');
var dstore_engine_metainformation_pb = require('../../../dstore/engine/metainformation_pb.js');
goog.exportSymbol('proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.om_GetOrderContentInfo_Ad.Response', null, global);
goog.exportSymbol('proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row', null, global);

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
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.displayName = 'proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters';
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
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: (f = msg.getOrderId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    orderIdNull: msg.getOrderIdNull(),
    orderContentId: (f = msg.getOrderContentId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    orderContentIdNull: msg.getOrderContentIdNull(),
    informationTypeId: (f = msg.getInformationTypeId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    informationTypeIdNull: msg.getInformationTypeIdNull(),
    ignoreInformationTypeIdList: (f = msg.getIgnoreInformationTypeIdList()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    ignoreInformationTypeIdListNull: msg.getIgnoreInformationTypeIdListNull()
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
 * @return {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters;
  return proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setOrderId(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOrderIdNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setOrderContentId(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOrderContentIdNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setInformationTypeId(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInformationTypeIdNull(value);
      break;
    case 4:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setIgnoreInformationTypeIdList(value);
      break;
    case 1004:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIgnoreInformationTypeIdListNull(value);
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
 * @param {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getOrderId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getOrderIdNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getOrderContentId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getOrderContentIdNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getInformationTypeId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getInformationTypeIdNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
  f = this.getIgnoreInformationTypeIdList();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getIgnoreInformationTypeIdListNull();
  if (f) {
    writer.writeBool(
      1004,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters} The clone.
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.values.integerValue order_id = 1;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.getOrderId = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 1));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.setOrderId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.clearOrderId = function() {
  this.setOrderId(undefined);
};


/**
 * optional bool order_id_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.getOrderIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1001, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.setOrderIdNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.integerValue order_content_id = 2;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.getOrderContentId = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 2));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.setOrderContentId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.clearOrderContentId = function() {
  this.setOrderContentId(undefined);
};


/**
 * optional bool order_content_id_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.getOrderContentIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1002, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.setOrderContentIdNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.integerValue information_type_id = 3;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.getInformationTypeId = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 3));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.setInformationTypeId = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.clearInformationTypeId = function() {
  this.setInformationTypeId(undefined);
};


/**
 * optional bool information_type_id_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.getInformationTypeIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1003, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.setInformationTypeIdNull = function(value) {
  jspb.Message.setField(this, 1003, value);
};


/**
 * optional dstore.values.stringValue ignore_information_type_id_list = 4;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.getIgnoreInformationTypeIdList = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 4));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.setIgnoreInformationTypeIdList = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.clearIgnoreInformationTypeIdList = function() {
  this.setIgnoreInformationTypeIdList(undefined);
};


/**
 * optional bool ignore_information_type_id_list_null = 1004;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.getIgnoreInformationTypeIdListNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1004, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Parameters.prototype.setIgnoreInformationTypeIdListNull = function(value) {
  jspb.Message.setField(this, 1004, value);
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
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.om_GetOrderContentInfo_Ad.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.displayName = 'proto.dstore.engine.om_GetOrderContentInfo_Ad.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && dstore_engine_error_pb.Error.toObject(includeInstance, f),
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_metainformation_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_message_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Response}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_GetOrderContentInfo_Ad.Response;
  return proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Response}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_engine_error_pb.Error;
      reader.readMessage(value,dstore_engine_error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 2:
      var value = new dstore_engine_metainformation_pb.MetaInformation;
      reader.readMessage(value,dstore_engine_metainformation_pb.MetaInformation.deserializeBinaryFromReader);
      msg.getMetaInformationList().push(value);
      msg.setMetaInformationList(msg.getMetaInformationList());
      break;
    case 3:
      var value = new dstore_engine_message_pb.Message;
      reader.readMessage(value,dstore_engine_message_pb.Message.deserializeBinaryFromReader);
      msg.getMessageList().push(value);
      msg.setMessageList(msg.getMessageList());
      break;
    case 4:
      var value = new proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row;
      reader.readMessage(value,proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_engine_error_pb.Error.serializeBinaryToWriter
    );
  }
  f = this.getMetaInformationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      dstore_engine_metainformation_pb.MetaInformation.serializeBinaryToWriter
    );
  }
  f = this.getMessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      dstore_engine_message_pb.Message.serializeBinaryToWriter
    );
  }
  f = this.getRowList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Response} The clone.
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.engine.error.Error error = 1;
 * @return {proto.dstore.engine.error.Error}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.prototype.getError = function() {
  return /** @type{proto.dstore.engine.error.Error} */ (
    jspb.Message.getWrapperField(this, dstore_engine_error_pb.Error, 1));
};


/** @param {proto.dstore.engine.error.Error|undefined} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.prototype.setError = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.prototype.clearError = function() {
  this.setError(undefined);
};


/**
 * repeated dstore.engine.metainformation.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.metainformation.MetaInformation>}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.metainformation.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_metainformation_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.metainformation.MetaInformation>|undefined} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.message.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.message.Message>}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.message.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_message_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.message.Message>|undefined} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row>}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row>|undefined} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.displayName = 'proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row';
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
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowId: msg.getRowId(),
    informationTypeId: (f = msg.getInformationTypeId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    position: (f = msg.getPosition()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    orderId: (f = msg.getOrderId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    informationType: (f = msg.getInformationType()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    information: (f = msg.getInformation()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    orderContentId: (f = msg.getOrderContentId()) && dstore_values_pb.integerValue.toObject(includeInstance, f)
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
 * @return {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row;
  return proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setInformationTypeId(value);
      break;
    case 10002:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 10003:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setOrderId(value);
      break;
    case 10004:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setInformationType(value);
      break;
    case 10005:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setInformation(value);
      break;
    case 10006:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setOrderContentId(value);
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
 * @param {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRowId();
  if (f !== 0) {
    writer.writeInt32(
      10000,
      f
    );
  }
  f = this.getInformationTypeId();
  if (f != null) {
    writer.writeMessage(
      10001,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getPosition();
  if (f != null) {
    writer.writeMessage(
      10002,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getOrderId();
  if (f != null) {
    writer.writeMessage(
      10003,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getInformationType();
  if (f != null) {
    writer.writeMessage(
      10004,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getInformation();
  if (f != null) {
    writer.writeMessage(
      10005,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getOrderContentId();
  if (f != null) {
    writer.writeMessage(
      10006,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row} The clone.
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


/**
 * optional dstore.values.integerValue information_type_id = 10001;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.getInformationTypeId = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10001));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.setInformationTypeId = function(value) {
  jspb.Message.setWrapperField(this, 10001, value);
};


proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.clearInformationTypeId = function() {
  this.setInformationTypeId(undefined);
};


/**
 * optional dstore.values.integerValue position = 10002;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.getPosition = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10002));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.setPosition = function(value) {
  jspb.Message.setWrapperField(this, 10002, value);
};


proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.clearPosition = function() {
  this.setPosition(undefined);
};


/**
 * optional dstore.values.integerValue order_id = 10003;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.getOrderId = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10003));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.setOrderId = function(value) {
  jspb.Message.setWrapperField(this, 10003, value);
};


proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.clearOrderId = function() {
  this.setOrderId(undefined);
};


/**
 * optional dstore.values.stringValue information_type = 10004;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.getInformationType = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10004));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.setInformationType = function(value) {
  jspb.Message.setWrapperField(this, 10004, value);
};


proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.clearInformationType = function() {
  this.setInformationType(undefined);
};


/**
 * optional dstore.values.stringValue information = 10005;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.getInformation = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10005));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.setInformation = function(value) {
  jspb.Message.setWrapperField(this, 10005, value);
};


proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.clearInformation = function() {
  this.setInformation(undefined);
};


/**
 * optional dstore.values.integerValue order_content_id = 10006;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.getOrderContentId = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10006));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.setOrderContentId = function(value) {
  jspb.Message.setWrapperField(this, 10006, value);
};


proto.dstore.engine.om_GetOrderContentInfo_Ad.Response.Row.prototype.clearOrderContentId = function() {
  this.setOrderContentId(undefined);
};


goog.object.extend(exports, proto.dstore.engine.om_GetOrderContentInfo_Ad);
