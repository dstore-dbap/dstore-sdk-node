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
goog.exportSymbol('proto.dstore.engine.om_GetOrderStatesInCats.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.om_GetOrderStatesInCats.Response', null, global);
goog.exportSymbol('proto.dstore.engine.om_GetOrderStatesInCats.Response.Row', null, global);

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
proto.dstore.engine.om_GetOrderStatesInCats.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.om_GetOrderStatesInCats.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_GetOrderStatesInCats.Parameters.displayName = 'proto.dstore.engine.om_GetOrderStatesInCats.Parameters';
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
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_GetOrderStatesInCats.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_GetOrderStatesInCats.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderStateCategoryId: (f = msg.getOrderStateCategoryId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    orderStateCategoryIdNull: msg.getOrderStateCategoryIdNull(),
    orderBy: (f = msg.getOrderBy()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    orderByNull: msg.getOrderByNull(),
    active: (f = msg.getActive()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    activeNull: msg.getActiveNull()
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
 * @return {!proto.dstore.engine.om_GetOrderStatesInCats.Parameters}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_GetOrderStatesInCats.Parameters;
  return proto.dstore.engine.om_GetOrderStatesInCats.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_GetOrderStatesInCats.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_GetOrderStatesInCats.Parameters}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setOrderStateCategoryId(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOrderStateCategoryIdNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setOrderBy(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOrderByNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setActive(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActiveNull(value);
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
 * @param {!proto.dstore.engine.om_GetOrderStatesInCats.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getOrderStateCategoryId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getOrderStateCategoryIdNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getOrderBy();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getOrderByNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getActive();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getActiveNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_GetOrderStatesInCats.Parameters} The clone.
 */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_GetOrderStatesInCats.Parameters} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.values.IntegerValue order_state_category_id = 1;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.getOrderStateCategoryId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 1));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.setOrderStateCategoryId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.clearOrderStateCategoryId = function() {
  this.setOrderStateCategoryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.hasOrderStateCategoryId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool order_state_category_id_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.getOrderStateCategoryIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1001, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.setOrderStateCategoryIdNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.IntegerValue order_by = 2;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.getOrderBy = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 2));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.setOrderBy = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.clearOrderBy = function() {
  this.setOrderBy(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.hasOrderBy = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool order_by_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.getOrderByNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1002, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.setOrderByNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.IntegerValue active = 3;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.getActive = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 3));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.setActive = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.clearActive = function() {
  this.setActive(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.hasActive = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool active_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.getActiveNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1003, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_GetOrderStatesInCats.Parameters.prototype.setActiveNull = function(value) {
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
proto.dstore.engine.om_GetOrderStatesInCats.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.om_GetOrderStatesInCats.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.om_GetOrderStatesInCats.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_GetOrderStatesInCats.Response.displayName = 'proto.dstore.engine.om_GetOrderStatesInCats.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.om_GetOrderStatesInCats.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_GetOrderStatesInCats.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_GetOrderStatesInCats.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_engine_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_engine_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.om_GetOrderStatesInCats.Response}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_GetOrderStatesInCats.Response;
  return proto.dstore.engine.om_GetOrderStatesInCats.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_GetOrderStatesInCats.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_GetOrderStatesInCats.Response}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.om_GetOrderStatesInCats.Response.Row;
      reader.readMessage(value,proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.om_GetOrderStatesInCats.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_GetOrderStatesInCats.Response} The clone.
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_GetOrderStatesInCats.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated dstore.engine.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.MetaInformation>}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.MetaInformation>} value  */
proto.dstore.engine.om_GetOrderStatesInCats.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.om_GetOrderStatesInCats.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.Message>}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.Message>} value  */
proto.dstore.engine.om_GetOrderStatesInCats.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.om_GetOrderStatesInCats.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.om_GetOrderStatesInCats.Response.Row>}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.om_GetOrderStatesInCats.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.om_GetOrderStatesInCats.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.om_GetOrderStatesInCats.Response.Row>} value  */
proto.dstore.engine.om_GetOrderStatesInCats.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.om_GetOrderStatesInCats.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.om_GetOrderStatesInCats.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.displayName = 'proto.dstore.engine.om_GetOrderStatesInCats.Response.Row';
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
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_GetOrderStatesInCats.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowId: msg.getRowId(),
    orderStateCategoryDescription: (f = msg.getOrderStateCategoryDescription()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    active: (f = msg.getActive()) && dstore_values_pb.BooleanValue.toObject(includeInstance, f),
    orderStateId: (f = msg.getOrderStateId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    publicDescription: (f = msg.getPublicDescription()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    orderStateCategoryId: (f = msg.getOrderStateCategoryId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    orderState: (f = msg.getOrderState()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    orderStateCategory: (f = msg.getOrderStateCategory()) && dstore_values_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.dstore.engine.om_GetOrderStatesInCats.Response.Row}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_GetOrderStatesInCats.Response.Row;
  return proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_GetOrderStatesInCats.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_GetOrderStatesInCats.Response.Row}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setOrderStateCategoryDescription(value);
      break;
    case 10002:
      var value = new dstore_values_pb.BooleanValue;
      reader.readMessage(value,dstore_values_pb.BooleanValue.deserializeBinaryFromReader);
      msg.setActive(value);
      break;
    case 10003:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setOrderStateId(value);
      break;
    case 10004:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setPublicDescription(value);
      break;
    case 10005:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setOrderStateCategoryId(value);
      break;
    case 10006:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setOrderState(value);
      break;
    case 10007:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setOrderStateCategory(value);
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
 * @param {!proto.dstore.engine.om_GetOrderStatesInCats.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRowId();
  if (f !== 0) {
    writer.writeInt32(
      10000,
      f
    );
  }
  f = this.getOrderStateCategoryDescription();
  if (f != null) {
    writer.writeMessage(
      10001,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getActive();
  if (f != null) {
    writer.writeMessage(
      10002,
      f,
      dstore_values_pb.BooleanValue.serializeBinaryToWriter
    );
  }
  f = this.getOrderStateId();
  if (f != null) {
    writer.writeMessage(
      10003,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getPublicDescription();
  if (f != null) {
    writer.writeMessage(
      10004,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getOrderStateCategoryId();
  if (f != null) {
    writer.writeMessage(
      10005,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getOrderState();
  if (f != null) {
    writer.writeMessage(
      10006,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getOrderStateCategory();
  if (f != null) {
    writer.writeMessage(
      10007,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_GetOrderStatesInCats.Response.Row} The clone.
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_GetOrderStatesInCats.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


/**
 * optional dstore.values.StringValue order_state_category_description = 10001;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.getOrderStateCategoryDescription = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 10001));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.setOrderStateCategoryDescription = function(value) {
  jspb.Message.setWrapperField(this, 10001, value);
};


proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.clearOrderStateCategoryDescription = function() {
  this.setOrderStateCategoryDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.hasOrderStateCategoryDescription = function() {
  return jspb.Message.getField(this, 10001) != null;
};


/**
 * optional dstore.values.BooleanValue active = 10002;
 * @return {proto.dstore.values.BooleanValue}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.getActive = function() {
  return /** @type{proto.dstore.values.BooleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.BooleanValue, 10002));
};


/** @param {proto.dstore.values.BooleanValue|undefined} value  */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.setActive = function(value) {
  jspb.Message.setWrapperField(this, 10002, value);
};


proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.clearActive = function() {
  this.setActive(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.hasActive = function() {
  return jspb.Message.getField(this, 10002) != null;
};


/**
 * optional dstore.values.IntegerValue order_state_id = 10003;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.getOrderStateId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 10003));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.setOrderStateId = function(value) {
  jspb.Message.setWrapperField(this, 10003, value);
};


proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.clearOrderStateId = function() {
  this.setOrderStateId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.hasOrderStateId = function() {
  return jspb.Message.getField(this, 10003) != null;
};


/**
 * optional dstore.values.StringValue public_description = 10004;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.getPublicDescription = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 10004));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.setPublicDescription = function(value) {
  jspb.Message.setWrapperField(this, 10004, value);
};


proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.clearPublicDescription = function() {
  this.setPublicDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.hasPublicDescription = function() {
  return jspb.Message.getField(this, 10004) != null;
};


/**
 * optional dstore.values.IntegerValue order_state_category_id = 10005;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.getOrderStateCategoryId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 10005));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.setOrderStateCategoryId = function(value) {
  jspb.Message.setWrapperField(this, 10005, value);
};


proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.clearOrderStateCategoryId = function() {
  this.setOrderStateCategoryId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.hasOrderStateCategoryId = function() {
  return jspb.Message.getField(this, 10005) != null;
};


/**
 * optional dstore.values.StringValue order_state = 10006;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.getOrderState = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 10006));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.setOrderState = function(value) {
  jspb.Message.setWrapperField(this, 10006, value);
};


proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.clearOrderState = function() {
  this.setOrderState(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.hasOrderState = function() {
  return jspb.Message.getField(this, 10006) != null;
};


/**
 * optional dstore.values.StringValue order_state_category = 10007;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.getOrderStateCategory = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 10007));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.setOrderStateCategory = function(value) {
  jspb.Message.setWrapperField(this, 10007, value);
};


proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.clearOrderStateCategory = function() {
  this.setOrderStateCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetOrderStatesInCats.Response.Row.prototype.hasOrderStateCategory = function() {
  return jspb.Message.getField(this, 10007) != null;
};


goog.object.extend(exports, proto.dstore.engine.om_GetOrderStatesInCats);
