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
goog.exportSymbol('proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response', null, global);
goog.exportSymbol('proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row', null, global);

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
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.displayName = 'proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters';
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
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    benefitId: (f = msg.getBenefitId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    benefitIdNull: msg.getBenefitIdNull(),
    itemSetId: (f = msg.getItemSetId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    itemSetIdNull: msg.getItemSetIdNull()
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
 * @return {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters;
  return proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setBenefitId(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBenefitIdNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setItemSetId(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setItemSetIdNull(value);
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
 * @param {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getBenefitId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getBenefitIdNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getItemSetId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getItemSetIdNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters} The clone.
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.values.IntegerValue benefit_id = 1;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.prototype.getBenefitId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 1));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.prototype.setBenefitId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.prototype.clearBenefitId = function() {
  this.setBenefitId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.prototype.hasBenefitId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool benefit_id_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.prototype.getBenefitIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1001, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.prototype.setBenefitIdNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.IntegerValue item_set_id = 2;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.prototype.getItemSetId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 2));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.prototype.setItemSetId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.prototype.clearItemSetId = function() {
  this.setItemSetId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.prototype.hasItemSetId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool item_set_id_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.prototype.getItemSetIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1002, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Parameters.prototype.setItemSetIdNull = function(value) {
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
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.displayName = 'proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_engine_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_engine_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response;
  return proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row;
      reader.readMessage(value,proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response} The clone.
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated dstore.engine.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.MetaInformation>}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.MetaInformation>} value  */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.Message>}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.Message>} value  */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row>}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row>} value  */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.displayName = 'proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row';
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
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowId: msg.getRowId(),
    itemConditionId: (f = msg.getItemConditionId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    benefitId: (f = msg.getBenefitId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    itemSetId: (f = msg.getItemSetId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    quantity: (f = msg.getQuantity()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    itemConditionDescription: (f = msg.getItemConditionDescription()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    sortNo: (f = msg.getSortNo()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f)
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
 * @return {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row;
  return proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setItemConditionId(value);
      break;
    case 10002:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setBenefitId(value);
      break;
    case 10003:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setItemSetId(value);
      break;
    case 10004:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setQuantity(value);
      break;
    case 10005:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setItemConditionDescription(value);
      break;
    case 10006:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setSortNo(value);
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
 * @param {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRowId();
  if (f !== 0) {
    writer.writeInt32(
      10000,
      f
    );
  }
  f = this.getItemConditionId();
  if (f != null) {
    writer.writeMessage(
      10001,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getBenefitId();
  if (f != null) {
    writer.writeMessage(
      10002,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getItemSetId();
  if (f != null) {
    writer.writeMessage(
      10003,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getQuantity();
  if (f != null) {
    writer.writeMessage(
      10004,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getItemConditionDescription();
  if (f != null) {
    writer.writeMessage(
      10005,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getSortNo();
  if (f != null) {
    writer.writeMessage(
      10006,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row} The clone.
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


/**
 * optional dstore.values.IntegerValue item_condition_id = 10001;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.getItemConditionId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 10001));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.setItemConditionId = function(value) {
  jspb.Message.setWrapperField(this, 10001, value);
};


proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.clearItemConditionId = function() {
  this.setItemConditionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.hasItemConditionId = function() {
  return jspb.Message.getField(this, 10001) != null;
};


/**
 * optional dstore.values.IntegerValue benefit_id = 10002;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.getBenefitId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 10002));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.setBenefitId = function(value) {
  jspb.Message.setWrapperField(this, 10002, value);
};


proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.clearBenefitId = function() {
  this.setBenefitId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.hasBenefitId = function() {
  return jspb.Message.getField(this, 10002) != null;
};


/**
 * optional dstore.values.IntegerValue item_set_id = 10003;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.getItemSetId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 10003));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.setItemSetId = function(value) {
  jspb.Message.setWrapperField(this, 10003, value);
};


proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.clearItemSetId = function() {
  this.setItemSetId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.hasItemSetId = function() {
  return jspb.Message.getField(this, 10003) != null;
};


/**
 * optional dstore.values.IntegerValue quantity = 10004;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.getQuantity = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 10004));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.setQuantity = function(value) {
  jspb.Message.setWrapperField(this, 10004, value);
};


proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.clearQuantity = function() {
  this.setQuantity(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 10004) != null;
};


/**
 * optional dstore.values.StringValue item_condition_description = 10005;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.getItemConditionDescription = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 10005));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.setItemConditionDescription = function(value) {
  jspb.Message.setWrapperField(this, 10005, value);
};


proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.clearItemConditionDescription = function() {
  this.setItemConditionDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.hasItemConditionDescription = function() {
  return jspb.Message.getField(this, 10005) != null;
};


/**
 * optional dstore.values.IntegerValue sort_no = 10006;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.getSortNo = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 10006));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.setSortNo = function(value) {
  jspb.Message.setWrapperField(this, 10006, value);
};


proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.clearSortNo = function() {
  this.setSortNo(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetSetsForBundleBenefits_Ad.Response.Row.prototype.hasSortNo = function() {
  return jspb.Message.getField(this, 10006) != null;
};


goog.object.extend(exports, proto.dstore.engine.om_GetSetsForBundleBenefits_Ad);
