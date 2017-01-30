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
goog.exportSymbol('proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response', null, global);
goog.exportSymbol('proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row', null, global);

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
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.displayName = 'proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters';
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
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    ort: (f = msg.getOrt()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    ortNull: msg.getOrtNull(),
    pLZ: (f = msg.getPLZ()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    pLZNull: msg.getPLZNull(),
    returnResult: (f = msg.getReturnResult()) && dstore_values_pb.BooleanValue.toObject(includeInstance, f),
    returnResultNull: msg.getReturnResultNull()
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
 * @return {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters;
  return proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setOrt(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOrtNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setPLZ(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPLZNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.BooleanValue;
      reader.readMessage(value,dstore_values_pb.BooleanValue.deserializeBinaryFromReader);
      msg.setReturnResult(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReturnResultNull(value);
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
 * @param {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getOrt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getOrtNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getPLZ();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getPLZNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getReturnResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.BooleanValue.serializeBinaryToWriter
    );
  }
  f = this.getReturnResultNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters} The clone.
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.values.StringValue ort = 1;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.getOrt = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 1));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.setOrt = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.clearOrt = function() {
  this.setOrt(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.hasOrt = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool ort_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.getOrtNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1001, false));
};


/** @param {boolean} value  */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.setOrtNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.StringValue p_l_z = 2;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.getPLZ = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 2));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.setPLZ = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.clearPLZ = function() {
  this.setPLZ(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.hasPLZ = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool p_l_z_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.getPLZNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1002, false));
};


/** @param {boolean} value  */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.setPLZNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.BooleanValue return_result = 3;
 * @return {proto.dstore.values.BooleanValue}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.getReturnResult = function() {
  return /** @type{proto.dstore.values.BooleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.BooleanValue, 3));
};


/** @param {proto.dstore.values.BooleanValue|undefined} value  */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.setReturnResult = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.clearReturnResult = function() {
  this.setReturnResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.hasReturnResult = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool return_result_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.getReturnResultNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1003, false));
};


/** @param {boolean} value  */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Parameters.prototype.setReturnResultNull = function(value) {
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
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.displayName = 'proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_engine_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_engine_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response;
  return proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row;
      reader.readMessage(value,proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response} The clone.
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated dstore.engine.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.MetaInformation>}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.MetaInformation>} value  */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.Message>}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.Message>} value  */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row>}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row>} value  */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.displayName = 'proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row';
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
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowId: msg.getRowId(),
    ort: (f = msg.getOrt()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    ortZusatz: (f = msg.getOrtZusatz()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    pLZ: (f = msg.getPLZ()) && dstore_values_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row;
  return proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setOrt(value);
      break;
    case 10002:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setOrtZusatz(value);
      break;
    case 10003:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setPLZ(value);
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
 * @param {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRowId();
  if (f !== 0) {
    writer.writeInt32(
      10000,
      f
    );
  }
  f = this.getOrt();
  if (f != null) {
    writer.writeMessage(
      10001,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getOrtZusatz();
  if (f != null) {
    writer.writeMessage(
      10002,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getPLZ();
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
 * @return {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row} The clone.
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


/**
 * optional dstore.values.StringValue ort = 10001;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.prototype.getOrt = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 10001));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.prototype.setOrt = function(value) {
  jspb.Message.setWrapperField(this, 10001, value);
};


proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.prototype.clearOrt = function() {
  this.setOrt(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.prototype.hasOrt = function() {
  return jspb.Message.getField(this, 10001) != null;
};


/**
 * optional dstore.values.StringValue ort_zusatz = 10002;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.prototype.getOrtZusatz = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 10002));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.prototype.setOrtZusatz = function(value) {
  jspb.Message.setWrapperField(this, 10002, value);
};


proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.prototype.clearOrtZusatz = function() {
  this.setOrtZusatz(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.prototype.hasOrtZusatz = function() {
  return jspb.Message.getField(this, 10002) != null;
};


/**
 * optional dstore.values.StringValue p_l_z = 10003;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.prototype.getPLZ = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 10003));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.prototype.setPLZ = function(value) {
  jspb.Message.setWrapperField(this, 10003, value);
};


proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.prototype.clearPLZ = function() {
  this.setPLZ(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu.Response.Row.prototype.hasPLZ = function() {
  return jspb.Message.getField(this, 10003) != null;
};


goog.object.extend(exports, proto.dstore.engine.pm_PostleitzahlenZumOrt_Pu);
