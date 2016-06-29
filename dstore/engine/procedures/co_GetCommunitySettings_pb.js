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
goog.exportSymbol('proto.dstore.engine.co_GetCommunitySettings.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.co_GetCommunitySettings.Response', null, global);
goog.exportSymbol('proto.dstore.engine.co_GetCommunitySettings.Response.Row', null, global);

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
proto.dstore.engine.co_GetCommunitySettings.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.co_GetCommunitySettings.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.co_GetCommunitySettings.Parameters.displayName = 'proto.dstore.engine.co_GetCommunitySettings.Parameters';
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
proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.co_GetCommunitySettings.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.co_GetCommunitySettings.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.co_GetCommunitySettings.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    communityId: (f = msg.getCommunityId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    communityIdNull: msg.getCommunityIdNull(),
    keyVariable: (f = msg.getKeyVariable()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    keyVariableNull: msg.getKeyVariableNull(),
    resultOnlyInOutputParam: (f = msg.getResultOnlyInOutputParam()) && dstore_values_pb.booleanValue.toObject(includeInstance, f),
    resultOnlyInOutputParamNull: msg.getResultOnlyInOutputParamNull()
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
 * @return {!proto.dstore.engine.co_GetCommunitySettings.Parameters}
 */
proto.dstore.engine.co_GetCommunitySettings.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.co_GetCommunitySettings.Parameters;
  return proto.dstore.engine.co_GetCommunitySettings.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.co_GetCommunitySettings.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.co_GetCommunitySettings.Parameters}
 */
proto.dstore.engine.co_GetCommunitySettings.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setCommunityId(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommunityIdNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setKeyVariable(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKeyVariableNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.booleanValue;
      reader.readMessage(value,dstore_values_pb.booleanValue.deserializeBinaryFromReader);
      msg.setResultOnlyInOutputParam(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResultOnlyInOutputParamNull(value);
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
 * @param {!proto.dstore.engine.co_GetCommunitySettings.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_GetCommunitySettings.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCommunityId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getCommunityIdNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getKeyVariable();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getKeyVariableNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getResultOnlyInOutputParam();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.booleanValue.serializeBinaryToWriter
    );
  }
  f = this.getResultOnlyInOutputParamNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.co_GetCommunitySettings.Parameters} The clone.
 */
proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.co_GetCommunitySettings.Parameters} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.values.integerValue community_id = 1;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.getCommunityId = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 1));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.setCommunityId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.clearCommunityId = function() {
  this.setCommunityId(undefined);
};


/**
 * optional bool community_id_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.getCommunityIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1001, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.setCommunityIdNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.stringValue key_variable = 2;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.getKeyVariable = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 2));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.setKeyVariable = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.clearKeyVariable = function() {
  this.setKeyVariable(undefined);
};


/**
 * optional bool key_variable_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.getKeyVariableNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1002, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.setKeyVariableNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.booleanValue result_only_in_output_param = 3;
 * @return {proto.dstore.values.booleanValue}
 */
proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.getResultOnlyInOutputParam = function() {
  return /** @type{proto.dstore.values.booleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.booleanValue, 3));
};


/** @param {proto.dstore.values.booleanValue|undefined} value  */
proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.setResultOnlyInOutputParam = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.clearResultOnlyInOutputParam = function() {
  this.setResultOnlyInOutputParam(undefined);
};


/**
 * optional bool result_only_in_output_param_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.getResultOnlyInOutputParamNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1003, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_GetCommunitySettings.Parameters.prototype.setResultOnlyInOutputParamNull = function(value) {
  jspb.Message.setField(this, 1003, value);
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
proto.dstore.engine.co_GetCommunitySettings.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.co_GetCommunitySettings.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.co_GetCommunitySettings.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.co_GetCommunitySettings.Response.displayName = 'proto.dstore.engine.co_GetCommunitySettings.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.co_GetCommunitySettings.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.co_GetCommunitySettings.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.co_GetCommunitySettings.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.co_GetCommunitySettings.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.co_GetCommunitySettings.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && dstore_engine_error_pb.Error.toObject(includeInstance, f),
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_metainformation_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_message_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.co_GetCommunitySettings.Response.Row.toObject, includeInstance),
    value: (f = msg.getValue()) && dstore_values_pb.stringValue.toObject(includeInstance, f)
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
 * @return {!proto.dstore.engine.co_GetCommunitySettings.Response}
 */
proto.dstore.engine.co_GetCommunitySettings.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.co_GetCommunitySettings.Response;
  return proto.dstore.engine.co_GetCommunitySettings.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.co_GetCommunitySettings.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.co_GetCommunitySettings.Response}
 */
proto.dstore.engine.co_GetCommunitySettings.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.co_GetCommunitySettings.Response.Row;
      reader.readMessage(value,proto.dstore.engine.co_GetCommunitySettings.Response.Row.deserializeBinaryFromReader);
      msg.getRowList().push(value);
      msg.setRowList(msg.getRowList());
      break;
    case 101:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setValue(value);
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
 * @param {!proto.dstore.engine.co_GetCommunitySettings.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_GetCommunitySettings.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.co_GetCommunitySettings.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_GetCommunitySettings.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.co_GetCommunitySettings.Response.Row.serializeBinaryToWriter
    );
  }
  f = this.getValue();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.co_GetCommunitySettings.Response} The clone.
 */
proto.dstore.engine.co_GetCommunitySettings.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.co_GetCommunitySettings.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.engine.error.Error error = 1;
 * @return {proto.dstore.engine.error.Error}
 */
proto.dstore.engine.co_GetCommunitySettings.Response.prototype.getError = function() {
  return /** @type{proto.dstore.engine.error.Error} */ (
    jspb.Message.getWrapperField(this, dstore_engine_error_pb.Error, 1));
};


/** @param {proto.dstore.engine.error.Error|undefined} value  */
proto.dstore.engine.co_GetCommunitySettings.Response.prototype.setError = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.co_GetCommunitySettings.Response.prototype.clearError = function() {
  this.setError(undefined);
};


/**
 * repeated dstore.engine.metainformation.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.metainformation.MetaInformation>}
 */
proto.dstore.engine.co_GetCommunitySettings.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.metainformation.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_metainformation_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.metainformation.MetaInformation>|undefined} value  */
proto.dstore.engine.co_GetCommunitySettings.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.co_GetCommunitySettings.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.message.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.message.Message>}
 */
proto.dstore.engine.co_GetCommunitySettings.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.message.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_message_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.message.Message>|undefined} value  */
proto.dstore.engine.co_GetCommunitySettings.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.co_GetCommunitySettings.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.co_GetCommunitySettings.Response.Row>}
 */
proto.dstore.engine.co_GetCommunitySettings.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.co_GetCommunitySettings.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.co_GetCommunitySettings.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.co_GetCommunitySettings.Response.Row>|undefined} value  */
proto.dstore.engine.co_GetCommunitySettings.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.co_GetCommunitySettings.Response.prototype.clearRowList = function() {
  this.setRowList([]);
};


/**
 * optional dstore.values.stringValue value = 101;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.co_GetCommunitySettings.Response.prototype.getValue = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 101));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.co_GetCommunitySettings.Response.prototype.setValue = function(value) {
  jspb.Message.setWrapperField(this, 101, value);
};


proto.dstore.engine.co_GetCommunitySettings.Response.prototype.clearValue = function() {
  this.setValue(undefined);
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
proto.dstore.engine.co_GetCommunitySettings.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.co_GetCommunitySettings.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.co_GetCommunitySettings.Response.Row.displayName = 'proto.dstore.engine.co_GetCommunitySettings.Response.Row';
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
proto.dstore.engine.co_GetCommunitySettings.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.co_GetCommunitySettings.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.co_GetCommunitySettings.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.co_GetCommunitySettings.Response.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowId: msg.getRowId(),
    communityId: (f = msg.getCommunityId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    value: (f = msg.getValue()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    communityName: (f = msg.getCommunityName()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    keyVariable: (f = msg.getKeyVariable()) && dstore_values_pb.stringValue.toObject(includeInstance, f)
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
 * @return {!proto.dstore.engine.co_GetCommunitySettings.Response.Row}
 */
proto.dstore.engine.co_GetCommunitySettings.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.co_GetCommunitySettings.Response.Row;
  return proto.dstore.engine.co_GetCommunitySettings.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.co_GetCommunitySettings.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.co_GetCommunitySettings.Response.Row}
 */
proto.dstore.engine.co_GetCommunitySettings.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCommunityId(value);
      break;
    case 10002:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 10003:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setCommunityName(value);
      break;
    case 10004:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setKeyVariable(value);
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
 * @param {!proto.dstore.engine.co_GetCommunitySettings.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_GetCommunitySettings.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.co_GetCommunitySettings.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_GetCommunitySettings.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRowId();
  if (f !== 0) {
    writer.writeInt32(
      10000,
      f
    );
  }
  f = this.getCommunityId();
  if (f != null) {
    writer.writeMessage(
      10001,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getValue();
  if (f != null) {
    writer.writeMessage(
      10002,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getCommunityName();
  if (f != null) {
    writer.writeMessage(
      10003,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getKeyVariable();
  if (f != null) {
    writer.writeMessage(
      10004,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.co_GetCommunitySettings.Response.Row} The clone.
 */
proto.dstore.engine.co_GetCommunitySettings.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.co_GetCommunitySettings.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.co_GetCommunitySettings.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.co_GetCommunitySettings.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


/**
 * optional dstore.values.integerValue community_id = 10001;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.co_GetCommunitySettings.Response.Row.prototype.getCommunityId = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10001));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.co_GetCommunitySettings.Response.Row.prototype.setCommunityId = function(value) {
  jspb.Message.setWrapperField(this, 10001, value);
};


proto.dstore.engine.co_GetCommunitySettings.Response.Row.prototype.clearCommunityId = function() {
  this.setCommunityId(undefined);
};


/**
 * optional dstore.values.stringValue value = 10002;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.co_GetCommunitySettings.Response.Row.prototype.getValue = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10002));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.co_GetCommunitySettings.Response.Row.prototype.setValue = function(value) {
  jspb.Message.setWrapperField(this, 10002, value);
};


proto.dstore.engine.co_GetCommunitySettings.Response.Row.prototype.clearValue = function() {
  this.setValue(undefined);
};


/**
 * optional dstore.values.stringValue community_name = 10003;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.co_GetCommunitySettings.Response.Row.prototype.getCommunityName = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10003));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.co_GetCommunitySettings.Response.Row.prototype.setCommunityName = function(value) {
  jspb.Message.setWrapperField(this, 10003, value);
};


proto.dstore.engine.co_GetCommunitySettings.Response.Row.prototype.clearCommunityName = function() {
  this.setCommunityName(undefined);
};


/**
 * optional dstore.values.stringValue key_variable = 10004;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.co_GetCommunitySettings.Response.Row.prototype.getKeyVariable = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10004));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.co_GetCommunitySettings.Response.Row.prototype.setKeyVariable = function(value) {
  jspb.Message.setWrapperField(this, 10004, value);
};


proto.dstore.engine.co_GetCommunitySettings.Response.Row.prototype.clearKeyVariable = function() {
  this.setKeyVariable(undefined);
};


goog.object.extend(exports, proto.dstore.engine.co_GetCommunitySettings);
