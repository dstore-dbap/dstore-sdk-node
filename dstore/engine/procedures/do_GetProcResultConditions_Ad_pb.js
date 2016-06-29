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
goog.exportSymbol('proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.do_GetProcResultConditions_Ad.Response', null, global);
goog.exportSymbol('proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row', null, global);

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
proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.displayName = 'proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters';
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
proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    procedureName: (f = msg.getProcedureName()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    procedureNameNull: msg.getProcedureNameNull(),
    procedureResultConditionId: (f = msg.getProcedureResultConditionId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    procedureResultConditionIdNull: msg.getProcedureResultConditionIdNull()
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
 * @return {!proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters;
  return proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setProcedureName(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProcedureNameNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setProcedureResultConditionId(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProcedureResultConditionIdNull(value);
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
 * @param {!proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getProcedureName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getProcedureNameNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getProcedureResultConditionId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getProcedureResultConditionIdNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters} The clone.
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.values.stringValue procedure_name = 1;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.prototype.getProcedureName = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 1));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.prototype.setProcedureName = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.prototype.clearProcedureName = function() {
  this.setProcedureName(undefined);
};


/**
 * optional bool procedure_name_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.prototype.getProcedureNameNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1001, false));
};


/** @param {boolean} value  */
proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.prototype.setProcedureNameNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.integerValue procedure_result_condition_id = 2;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.prototype.getProcedureResultConditionId = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 2));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.prototype.setProcedureResultConditionId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.prototype.clearProcedureResultConditionId = function() {
  this.setProcedureResultConditionId(undefined);
};


/**
 * optional bool procedure_result_condition_id_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.prototype.getProcedureResultConditionIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1002, false));
};


/** @param {boolean} value  */
proto.dstore.engine.do_GetProcResultConditions_Ad.Parameters.prototype.setProcedureResultConditionIdNull = function(value) {
  jspb.Message.setField(this, 1002, value);
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
proto.dstore.engine.do_GetProcResultConditions_Ad.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.do_GetProcResultConditions_Ad.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.do_GetProcResultConditions_Ad.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.do_GetProcResultConditions_Ad.Response.displayName = 'proto.dstore.engine.do_GetProcResultConditions_Ad.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.do_GetProcResultConditions_Ad.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.do_GetProcResultConditions_Ad.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && dstore_engine_error_pb.Error.toObject(includeInstance, f),
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_metainformation_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_message_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.do_GetProcResultConditions_Ad.Response}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.do_GetProcResultConditions_Ad.Response;
  return proto.dstore.engine.do_GetProcResultConditions_Ad.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.do_GetProcResultConditions_Ad.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.do_GetProcResultConditions_Ad.Response}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row;
      reader.readMessage(value,proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.do_GetProcResultConditions_Ad.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.do_GetProcResultConditions_Ad.Response} The clone.
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.do_GetProcResultConditions_Ad.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.engine.error.Error error = 1;
 * @return {proto.dstore.engine.error.Error}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.prototype.getError = function() {
  return /** @type{proto.dstore.engine.error.Error} */ (
    jspb.Message.getWrapperField(this, dstore_engine_error_pb.Error, 1));
};


/** @param {proto.dstore.engine.error.Error|undefined} value  */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.prototype.setError = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.do_GetProcResultConditions_Ad.Response.prototype.clearError = function() {
  this.setError(undefined);
};


/**
 * repeated dstore.engine.metainformation.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.metainformation.MetaInformation>}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.metainformation.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_metainformation_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.metainformation.MetaInformation>|undefined} value  */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.do_GetProcResultConditions_Ad.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.message.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.message.Message>}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.message.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_message_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.message.Message>|undefined} value  */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.do_GetProcResultConditions_Ad.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row>}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row>|undefined} value  */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.do_GetProcResultConditions_Ad.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.displayName = 'proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row';
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
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowId: msg.getRowId(),
    conditionDescription: (f = msg.getConditionDescription()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    condition: (f = msg.getCondition()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    procedureResultConditionId: (f = msg.getProcedureResultConditionId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    procedureName: (f = msg.getProcedureName()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    parameterName: (f = msg.getParameterName()) && dstore_values_pb.stringValue.toObject(includeInstance, f)
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
 * @return {!proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row;
  return proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setConditionDescription(value);
      break;
    case 10002:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setCondition(value);
      break;
    case 10003:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setProcedureResultConditionId(value);
      break;
    case 10004:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setProcedureName(value);
      break;
    case 10005:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setParameterName(value);
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
 * @param {!proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRowId();
  if (f !== 0) {
    writer.writeInt32(
      10000,
      f
    );
  }
  f = this.getConditionDescription();
  if (f != null) {
    writer.writeMessage(
      10001,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getCondition();
  if (f != null) {
    writer.writeMessage(
      10002,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getProcedureResultConditionId();
  if (f != null) {
    writer.writeMessage(
      10003,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getProcedureName();
  if (f != null) {
    writer.writeMessage(
      10004,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getParameterName();
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
 * @return {!proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row} The clone.
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


/**
 * optional dstore.values.stringValue condition_description = 10001;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.getConditionDescription = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10001));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.setConditionDescription = function(value) {
  jspb.Message.setWrapperField(this, 10001, value);
};


proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.clearConditionDescription = function() {
  this.setConditionDescription(undefined);
};


/**
 * optional dstore.values.stringValue condition = 10002;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.getCondition = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10002));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.setCondition = function(value) {
  jspb.Message.setWrapperField(this, 10002, value);
};


proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.clearCondition = function() {
  this.setCondition(undefined);
};


/**
 * optional dstore.values.integerValue procedure_result_condition_id = 10003;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.getProcedureResultConditionId = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10003));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.setProcedureResultConditionId = function(value) {
  jspb.Message.setWrapperField(this, 10003, value);
};


proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.clearProcedureResultConditionId = function() {
  this.setProcedureResultConditionId(undefined);
};


/**
 * optional dstore.values.stringValue procedure_name = 10004;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.getProcedureName = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10004));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.setProcedureName = function(value) {
  jspb.Message.setWrapperField(this, 10004, value);
};


proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.clearProcedureName = function() {
  this.setProcedureName(undefined);
};


/**
 * optional dstore.values.stringValue parameter_name = 10005;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.getParameterName = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10005));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.setParameterName = function(value) {
  jspb.Message.setWrapperField(this, 10005, value);
};


proto.dstore.engine.do_GetProcResultConditions_Ad.Response.Row.prototype.clearParameterName = function() {
  this.setParameterName(undefined);
};


goog.object.extend(exports, proto.dstore.engine.do_GetProcResultConditions_Ad);