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
goog.exportSymbol('proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response', null, global);
goog.exportSymbol('proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row', null, global);

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
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.displayName = 'proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters';
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
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    triggerId: (f = msg.getTriggerId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    triggerIdNull: msg.getTriggerIdNull(),
    workStepNo: (f = msg.getWorkStepNo()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    workStepNoNull: msg.getWorkStepNoNull(),
    iterationList: (f = msg.getIterationList()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    iterationListNull: msg.getIterationListNull(),
    workStep: (f = msg.getWorkStep()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    workStepNull: msg.getWorkStepNull(),
    description: (f = msg.getDescription()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    descriptionNull: msg.getDescriptionNull(),
    cancelOnError: (f = msg.getCancelOnError()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    cancelOnErrorNull: msg.getCancelOnErrorNull(),
    deleteWorkStep: (f = msg.getDeleteWorkStep()) && dstore_values_pb.BooleanValue.toObject(includeInstance, f),
    deleteWorkStepNull: msg.getDeleteWorkStepNull()
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
 * @return {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters;
  return proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setTriggerId(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTriggerIdNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setWorkStepNo(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWorkStepNoNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setIterationList(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIterationListNull(value);
      break;
    case 4:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setWorkStep(value);
      break;
    case 1004:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWorkStepNull(value);
      break;
    case 5:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setDescription(value);
      break;
    case 1005:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDescriptionNull(value);
      break;
    case 6:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setCancelOnError(value);
      break;
    case 1006:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCancelOnErrorNull(value);
      break;
    case 7:
      var value = new dstore_values_pb.BooleanValue;
      reader.readMessage(value,dstore_values_pb.BooleanValue.deserializeBinaryFromReader);
      msg.setDeleteWorkStep(value);
      break;
    case 1007:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleteWorkStepNull(value);
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
 * @param {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTriggerId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getTriggerIdNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getWorkStepNo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getWorkStepNoNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getIterationList();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getIterationListNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
  f = this.getWorkStep();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getWorkStepNull();
  if (f) {
    writer.writeBool(
      1004,
      f
    );
  }
  f = this.getDescription();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getDescriptionNull();
  if (f) {
    writer.writeBool(
      1005,
      f
    );
  }
  f = this.getCancelOnError();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getCancelOnErrorNull();
  if (f) {
    writer.writeBool(
      1006,
      f
    );
  }
  f = this.getDeleteWorkStep();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      dstore_values_pb.BooleanValue.serializeBinaryToWriter
    );
  }
  f = this.getDeleteWorkStepNull();
  if (f) {
    writer.writeBool(
      1007,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters} The clone.
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.values.IntegerValue trigger_id = 1;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.getTriggerId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 1));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.setTriggerId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.clearTriggerId = function() {
  this.setTriggerId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.hasTriggerId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool trigger_id_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.getTriggerIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1001, false));
};


/** @param {boolean} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.setTriggerIdNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.IntegerValue work_step_no = 2;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.getWorkStepNo = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 2));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.setWorkStepNo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.clearWorkStepNo = function() {
  this.setWorkStepNo(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.hasWorkStepNo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool work_step_no_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.getWorkStepNoNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1002, false));
};


/** @param {boolean} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.setWorkStepNoNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.StringValue iteration_list = 3;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.getIterationList = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 3));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.setIterationList = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.clearIterationList = function() {
  this.setIterationList(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.hasIterationList = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool iteration_list_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.getIterationListNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1003, false));
};


/** @param {boolean} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.setIterationListNull = function(value) {
  jspb.Message.setField(this, 1003, value);
};


/**
 * optional dstore.values.StringValue work_step = 4;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.getWorkStep = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 4));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.setWorkStep = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.clearWorkStep = function() {
  this.setWorkStep(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.hasWorkStep = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool work_step_null = 1004;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.getWorkStepNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1004, false));
};


/** @param {boolean} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.setWorkStepNull = function(value) {
  jspb.Message.setField(this, 1004, value);
};


/**
 * optional dstore.values.StringValue description = 5;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.getDescription = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 5));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.setDescription = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.clearDescription = function() {
  this.setDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool description_null = 1005;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.getDescriptionNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1005, false));
};


/** @param {boolean} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.setDescriptionNull = function(value) {
  jspb.Message.setField(this, 1005, value);
};


/**
 * optional dstore.values.IntegerValue cancel_on_error = 6;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.getCancelOnError = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 6));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.setCancelOnError = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.clearCancelOnError = function() {
  this.setCancelOnError(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.hasCancelOnError = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool cancel_on_error_null = 1006;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.getCancelOnErrorNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1006, false));
};


/** @param {boolean} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.setCancelOnErrorNull = function(value) {
  jspb.Message.setField(this, 1006, value);
};


/**
 * optional dstore.values.BooleanValue delete_work_step = 7;
 * @return {proto.dstore.values.BooleanValue}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.getDeleteWorkStep = function() {
  return /** @type{proto.dstore.values.BooleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.BooleanValue, 7));
};


/** @param {proto.dstore.values.BooleanValue|undefined} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.setDeleteWorkStep = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.clearDeleteWorkStep = function() {
  this.setDeleteWorkStep(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.hasDeleteWorkStep = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool delete_work_step_null = 1007;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.getDeleteWorkStepNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1007, false));
};


/** @param {boolean} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Parameters.prototype.setDeleteWorkStepNull = function(value) {
  jspb.Message.setField(this, 1007, value);
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
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.displayName = 'proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_engine_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_engine_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row.toObject, includeInstance),
    workStepNo: (f = msg.getWorkStepNo()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f)
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
 * @return {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response;
  return proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row;
      reader.readMessage(value,proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row.deserializeBinaryFromReader);
      msg.getRowList().push(value);
      msg.setRowList(msg.getRowList());
      break;
    case 101:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setWorkStepNo(value);
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
 * @param {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row.serializeBinaryToWriter
    );
  }
  f = this.getWorkStepNo();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response} The clone.
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated dstore.engine.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.MetaInformation>}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.MetaInformation>} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.Message>}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.Message>} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row>}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row>} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.prototype.clearRowList = function() {
  this.setRowList([]);
};


/**
 * optional dstore.values.IntegerValue work_step_no = 101;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.prototype.getWorkStepNo = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 101));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.prototype.setWorkStepNo = function(value) {
  jspb.Message.setWrapperField(this, 101, value);
};


proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.prototype.clearWorkStepNo = function() {
  this.setWorkStepNo(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.prototype.hasWorkStepNo = function() {
  return jspb.Message.getField(this, 101) != null;
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
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row.displayName = 'proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row';
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
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row;
  return proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
 * @param {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
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
 * @return {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row} The clone.
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


goog.object.extend(exports, proto.dstore.engine.mi_ModifyTRITriggerWorkflow_Ad);
