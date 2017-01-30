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
goog.exportSymbol('proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.mi_GetBinaryProperties_Pu.Response', null, global);
goog.exportSymbol('proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row', null, global);

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
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.displayName = 'proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters';
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
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    binaryCodeId: (f = msg.getBinaryCodeId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    binaryCodeIdNull: msg.getBinaryCodeIdNull(),
    binaryCharacteristicId: (f = msg.getBinaryCharacteristicId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    binaryCharacteristicIdNull: msg.getBinaryCharacteristicIdNull()
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
 * @return {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters;
  return proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setBinaryCodeId(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBinaryCodeIdNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setBinaryCharacteristicId(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBinaryCharacteristicIdNull(value);
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
 * @param {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getBinaryCodeId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getBinaryCodeIdNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getBinaryCharacteristicId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getBinaryCharacteristicIdNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters} The clone.
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.values.IntegerValue binary_code_id = 1;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.prototype.getBinaryCodeId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 1));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.prototype.setBinaryCodeId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.prototype.clearBinaryCodeId = function() {
  this.setBinaryCodeId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.prototype.hasBinaryCodeId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool binary_code_id_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.prototype.getBinaryCodeIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1001, false));
};


/** @param {boolean} value  */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.prototype.setBinaryCodeIdNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.IntegerValue binary_characteristic_id = 2;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.prototype.getBinaryCharacteristicId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 2));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.prototype.setBinaryCharacteristicId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.prototype.clearBinaryCharacteristicId = function() {
  this.setBinaryCharacteristicId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.prototype.hasBinaryCharacteristicId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool binary_characteristic_id_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.prototype.getBinaryCharacteristicIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1002, false));
};


/** @param {boolean} value  */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Parameters.prototype.setBinaryCharacteristicIdNull = function(value) {
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
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.mi_GetBinaryProperties_Pu.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.displayName = 'proto.dstore.engine.mi_GetBinaryProperties_Pu.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_engine_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_engine_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Response}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.mi_GetBinaryProperties_Pu.Response;
  return proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Response}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row;
      reader.readMessage(value,proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Response} The clone.
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated dstore.engine.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.MetaInformation>}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.MetaInformation>} value  */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.Message>}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.Message>} value  */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row>}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row>} value  */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.displayName = 'proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row';
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
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowId: msg.getRowId(),
    characteristicDescription: (f = msg.getCharacteristicDescription()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    binaryCharacteristicId: (f = msg.getBinaryCharacteristicId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    value: (f = msg.getValue()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    valueId: (f = msg.getValueId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    modify: (f = msg.getModify()) && dstore_values_pb.BooleanValue.toObject(includeInstance, f),
    predefinedValues: (f = msg.getPredefinedValues()) && dstore_values_pb.BooleanValue.toObject(includeInstance, f)
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
 * @return {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row;
  return proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCharacteristicDescription(value);
      break;
    case 10002:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setBinaryCharacteristicId(value);
      break;
    case 10003:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 10004:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setValueId(value);
      break;
    case 10005:
      var value = new dstore_values_pb.BooleanValue;
      reader.readMessage(value,dstore_values_pb.BooleanValue.deserializeBinaryFromReader);
      msg.setModify(value);
      break;
    case 10006:
      var value = new dstore_values_pb.BooleanValue;
      reader.readMessage(value,dstore_values_pb.BooleanValue.deserializeBinaryFromReader);
      msg.setPredefinedValues(value);
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
 * @param {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRowId();
  if (f !== 0) {
    writer.writeInt32(
      10000,
      f
    );
  }
  f = this.getCharacteristicDescription();
  if (f != null) {
    writer.writeMessage(
      10001,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getBinaryCharacteristicId();
  if (f != null) {
    writer.writeMessage(
      10002,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getValue();
  if (f != null) {
    writer.writeMessage(
      10003,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getValueId();
  if (f != null) {
    writer.writeMessage(
      10004,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getModify();
  if (f != null) {
    writer.writeMessage(
      10005,
      f,
      dstore_values_pb.BooleanValue.serializeBinaryToWriter
    );
  }
  f = this.getPredefinedValues();
  if (f != null) {
    writer.writeMessage(
      10006,
      f,
      dstore_values_pb.BooleanValue.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row} The clone.
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


/**
 * optional dstore.values.StringValue characteristic_description = 10001;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.getCharacteristicDescription = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 10001));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.setCharacteristicDescription = function(value) {
  jspb.Message.setWrapperField(this, 10001, value);
};


proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.clearCharacteristicDescription = function() {
  this.setCharacteristicDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.hasCharacteristicDescription = function() {
  return jspb.Message.getField(this, 10001) != null;
};


/**
 * optional dstore.values.IntegerValue binary_characteristic_id = 10002;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.getBinaryCharacteristicId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 10002));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.setBinaryCharacteristicId = function(value) {
  jspb.Message.setWrapperField(this, 10002, value);
};


proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.clearBinaryCharacteristicId = function() {
  this.setBinaryCharacteristicId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.hasBinaryCharacteristicId = function() {
  return jspb.Message.getField(this, 10002) != null;
};


/**
 * optional dstore.values.StringValue value = 10003;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.getValue = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 10003));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.setValue = function(value) {
  jspb.Message.setWrapperField(this, 10003, value);
};


proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.clearValue = function() {
  this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.hasValue = function() {
  return jspb.Message.getField(this, 10003) != null;
};


/**
 * optional dstore.values.IntegerValue value_id = 10004;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.getValueId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 10004));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.setValueId = function(value) {
  jspb.Message.setWrapperField(this, 10004, value);
};


proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.clearValueId = function() {
  this.setValueId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.hasValueId = function() {
  return jspb.Message.getField(this, 10004) != null;
};


/**
 * optional dstore.values.BooleanValue modify = 10005;
 * @return {proto.dstore.values.BooleanValue}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.getModify = function() {
  return /** @type{proto.dstore.values.BooleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.BooleanValue, 10005));
};


/** @param {proto.dstore.values.BooleanValue|undefined} value  */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.setModify = function(value) {
  jspb.Message.setWrapperField(this, 10005, value);
};


proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.clearModify = function() {
  this.setModify(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.hasModify = function() {
  return jspb.Message.getField(this, 10005) != null;
};


/**
 * optional dstore.values.BooleanValue predefined_values = 10006;
 * @return {proto.dstore.values.BooleanValue}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.getPredefinedValues = function() {
  return /** @type{proto.dstore.values.BooleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.BooleanValue, 10006));
};


/** @param {proto.dstore.values.BooleanValue|undefined} value  */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.setPredefinedValues = function(value) {
  jspb.Message.setWrapperField(this, 10006, value);
};


proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.clearPredefinedValues = function() {
  this.setPredefinedValues(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.mi_GetBinaryProperties_Pu.Response.Row.prototype.hasPredefinedValues = function() {
  return jspb.Message.getField(this, 10006) != null;
};


goog.object.extend(exports, proto.dstore.engine.mi_GetBinaryProperties_Pu);
