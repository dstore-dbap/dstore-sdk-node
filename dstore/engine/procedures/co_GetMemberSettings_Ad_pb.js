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
goog.exportSymbol('proto.dstore.engine.co_GetMemberSettings_Ad.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.co_GetMemberSettings_Ad.Response', null, global);
goog.exportSymbol('proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row', null, global);

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
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.co_GetMemberSettings_Ad.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.displayName = 'proto.dstore.engine.co_GetMemberSettings_Ad.Parameters';
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
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.co_GetMemberSettings_Ad.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    communityId: (f = msg.getCommunityId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    communityIdNull: msg.getCommunityIdNull(),
    communityMemberId: (f = msg.getCommunityMemberId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    communityMemberIdNull: msg.getCommunityMemberIdNull(),
    keyVariable: (f = msg.getKeyVariable()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    keyVariableNull: msg.getKeyVariableNull()
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
 * @return {!proto.dstore.engine.co_GetMemberSettings_Ad.Parameters}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.co_GetMemberSettings_Ad.Parameters;
  return proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.co_GetMemberSettings_Ad.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.co_GetMemberSettings_Ad.Parameters}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setCommunityMemberId(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommunityMemberIdNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setKeyVariable(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKeyVariableNull(value);
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
 * @param {!proto.dstore.engine.co_GetMemberSettings_Ad.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.serializeBinaryToWriter = function (writer) {
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
  f = this.getCommunityMemberId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getCommunityMemberIdNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getKeyVariable();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getKeyVariableNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.co_GetMemberSettings_Ad.Parameters} The clone.
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.co_GetMemberSettings_Ad.Parameters} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.values.integerValue community_id = 1;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.getCommunityId = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 1));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.setCommunityId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.clearCommunityId = function() {
  this.setCommunityId(undefined);
};


/**
 * optional bool community_id_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.getCommunityIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1001, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.setCommunityIdNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.integerValue community_member_id = 2;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.getCommunityMemberId = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 2));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.setCommunityMemberId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.clearCommunityMemberId = function() {
  this.setCommunityMemberId(undefined);
};


/**
 * optional bool community_member_id_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.getCommunityMemberIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1002, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.setCommunityMemberIdNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.stringValue key_variable = 3;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.getKeyVariable = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 3));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.setKeyVariable = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.clearKeyVariable = function() {
  this.setKeyVariable(undefined);
};


/**
 * optional bool key_variable_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.getKeyVariableNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1003, false));
};


/** @param {boolean} value  */
proto.dstore.engine.co_GetMemberSettings_Ad.Parameters.prototype.setKeyVariableNull = function(value) {
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
proto.dstore.engine.co_GetMemberSettings_Ad.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.co_GetMemberSettings_Ad.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.co_GetMemberSettings_Ad.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.co_GetMemberSettings_Ad.Response.displayName = 'proto.dstore.engine.co_GetMemberSettings_Ad.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.co_GetMemberSettings_Ad.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.co_GetMemberSettings_Ad.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.co_GetMemberSettings_Ad.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && dstore_engine_error_pb.Error.toObject(includeInstance, f),
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_metainformation_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_message_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.co_GetMemberSettings_Ad.Response}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.co_GetMemberSettings_Ad.Response;
  return proto.dstore.engine.co_GetMemberSettings_Ad.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.co_GetMemberSettings_Ad.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.co_GetMemberSettings_Ad.Response}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row;
      reader.readMessage(value,proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.co_GetMemberSettings_Ad.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.co_GetMemberSettings_Ad.Response} The clone.
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.co_GetMemberSettings_Ad.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.engine.error.Error error = 1;
 * @return {proto.dstore.engine.error.Error}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.prototype.getError = function() {
  return /** @type{proto.dstore.engine.error.Error} */ (
    jspb.Message.getWrapperField(this, dstore_engine_error_pb.Error, 1));
};


/** @param {proto.dstore.engine.error.Error|undefined} value  */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.prototype.setError = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.co_GetMemberSettings_Ad.Response.prototype.clearError = function() {
  this.setError(undefined);
};


/**
 * repeated dstore.engine.metainformation.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.metainformation.MetaInformation>}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.metainformation.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_metainformation_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.metainformation.MetaInformation>|undefined} value  */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.co_GetMemberSettings_Ad.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.message.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.message.Message>}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.message.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_message_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.message.Message>|undefined} value  */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.co_GetMemberSettings_Ad.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row>}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row>|undefined} value  */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.co_GetMemberSettings_Ad.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.displayName = 'proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row';
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
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowId: msg.getRowId(),
    communityId: (f = msg.getCommunityId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    communityMemberId: (f = msg.getCommunityMemberId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
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
 * @return {!proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row;
  return proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setCommunityMemberId(value);
      break;
    case 10003:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 10004:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setCommunityName(value);
      break;
    case 10005:
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
 * @param {!proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
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
  f = this.getCommunityMemberId();
  if (f != null) {
    writer.writeMessage(
      10002,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getValue();
  if (f != null) {
    writer.writeMessage(
      10003,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getCommunityName();
  if (f != null) {
    writer.writeMessage(
      10004,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getKeyVariable();
  if (f != null) {
    writer.writeMessage(
      10005,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row} The clone.
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


/**
 * optional dstore.values.integerValue community_id = 10001;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.getCommunityId = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10001));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.setCommunityId = function(value) {
  jspb.Message.setWrapperField(this, 10001, value);
};


proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.clearCommunityId = function() {
  this.setCommunityId(undefined);
};


/**
 * optional dstore.values.integerValue community_member_id = 10002;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.getCommunityMemberId = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10002));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.setCommunityMemberId = function(value) {
  jspb.Message.setWrapperField(this, 10002, value);
};


proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.clearCommunityMemberId = function() {
  this.setCommunityMemberId(undefined);
};


/**
 * optional dstore.values.stringValue value = 10003;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.getValue = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10003));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.setValue = function(value) {
  jspb.Message.setWrapperField(this, 10003, value);
};


proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.clearValue = function() {
  this.setValue(undefined);
};


/**
 * optional dstore.values.stringValue community_name = 10004;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.getCommunityName = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10004));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.setCommunityName = function(value) {
  jspb.Message.setWrapperField(this, 10004, value);
};


proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.clearCommunityName = function() {
  this.setCommunityName(undefined);
};


/**
 * optional dstore.values.stringValue key_variable = 10005;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.getKeyVariable = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10005));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.setKeyVariable = function(value) {
  jspb.Message.setWrapperField(this, 10005, value);
};


proto.dstore.engine.co_GetMemberSettings_Ad.Response.Row.prototype.clearKeyVariable = function() {
  this.setKeyVariable(undefined);
};


goog.object.extend(exports, proto.dstore.engine.co_GetMemberSettings_Ad);
