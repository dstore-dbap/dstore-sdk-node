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
goog.exportSymbol('proto.dstore.engine.pm_ModifyGroups_Ad.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.pm_ModifyGroups_Ad.Response', null, global);
goog.exportSymbol('proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row', null, global);

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
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.pm_ModifyGroups_Ad.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.displayName = 'proto.dstore.engine.pm_ModifyGroups_Ad.Parameters';
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
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.pm_ModifyGroups_Ad.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupId: (f = msg.getGroupId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    groupIdNull: msg.getGroupIdNull(),
    groupDescription: (f = msg.getGroupDescription()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    groupDescriptionNull: msg.getGroupDescriptionNull(),
    sortNo: (f = msg.getSortNo()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    sortNoNull: msg.getSortNoNull(),
    personTypeId: (f = msg.getPersonTypeId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    personTypeIdNull: msg.getPersonTypeIdNull(),
    conditionId: (f = msg.getConditionId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    conditionIdNull: msg.getConditionIdNull(),
    deleteGroup: (f = msg.getDeleteGroup()) && dstore_values_pb.BooleanValue.toObject(includeInstance, f),
    deleteGroupNull: msg.getDeleteGroupNull()
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
 * @return {!proto.dstore.engine.pm_ModifyGroups_Ad.Parameters}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.pm_ModifyGroups_Ad.Parameters;
  return proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.pm_ModifyGroups_Ad.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.pm_ModifyGroups_Ad.Parameters}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setGroupId(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGroupIdNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setGroupDescription(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGroupDescriptionNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setSortNo(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSortNoNull(value);
      break;
    case 4:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setPersonTypeId(value);
      break;
    case 1004:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPersonTypeIdNull(value);
      break;
    case 5:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setConditionId(value);
      break;
    case 1005:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConditionIdNull(value);
      break;
    case 6:
      var value = new dstore_values_pb.BooleanValue;
      reader.readMessage(value,dstore_values_pb.BooleanValue.deserializeBinaryFromReader);
      msg.setDeleteGroup(value);
      break;
    case 1006:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleteGroupNull(value);
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
 * @param {!proto.dstore.engine.pm_ModifyGroups_Ad.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getGroupId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getGroupIdNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getGroupDescription();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getGroupDescriptionNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getSortNo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getSortNoNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
  f = this.getPersonTypeId();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getPersonTypeIdNull();
  if (f) {
    writer.writeBool(
      1004,
      f
    );
  }
  f = this.getConditionId();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getConditionIdNull();
  if (f) {
    writer.writeBool(
      1005,
      f
    );
  }
  f = this.getDeleteGroup();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      dstore_values_pb.BooleanValue.serializeBinaryToWriter
    );
  }
  f = this.getDeleteGroupNull();
  if (f) {
    writer.writeBool(
      1006,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.pm_ModifyGroups_Ad.Parameters} The clone.
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.pm_ModifyGroups_Ad.Parameters} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.values.IntegerValue group_id = 1;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.getGroupId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 1));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.setGroupId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.clearGroupId = function() {
  this.setGroupId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.hasGroupId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool group_id_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.getGroupIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1001, false));
};


/** @param {boolean} value  */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.setGroupIdNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.StringValue group_description = 2;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.getGroupDescription = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 2));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.setGroupDescription = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.clearGroupDescription = function() {
  this.setGroupDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.hasGroupDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool group_description_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.getGroupDescriptionNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1002, false));
};


/** @param {boolean} value  */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.setGroupDescriptionNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.IntegerValue sort_no = 3;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.getSortNo = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 3));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.setSortNo = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.clearSortNo = function() {
  this.setSortNo(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.hasSortNo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool sort_no_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.getSortNoNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1003, false));
};


/** @param {boolean} value  */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.setSortNoNull = function(value) {
  jspb.Message.setField(this, 1003, value);
};


/**
 * optional dstore.values.IntegerValue person_type_id = 4;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.getPersonTypeId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 4));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.setPersonTypeId = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.clearPersonTypeId = function() {
  this.setPersonTypeId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.hasPersonTypeId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool person_type_id_null = 1004;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.getPersonTypeIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1004, false));
};


/** @param {boolean} value  */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.setPersonTypeIdNull = function(value) {
  jspb.Message.setField(this, 1004, value);
};


/**
 * optional dstore.values.IntegerValue condition_id = 5;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.getConditionId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 5));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.setConditionId = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.clearConditionId = function() {
  this.setConditionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.hasConditionId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool condition_id_null = 1005;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.getConditionIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1005, false));
};


/** @param {boolean} value  */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.setConditionIdNull = function(value) {
  jspb.Message.setField(this, 1005, value);
};


/**
 * optional dstore.values.BooleanValue delete_group = 6;
 * @return {proto.dstore.values.BooleanValue}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.getDeleteGroup = function() {
  return /** @type{proto.dstore.values.BooleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.BooleanValue, 6));
};


/** @param {proto.dstore.values.BooleanValue|undefined} value  */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.setDeleteGroup = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.clearDeleteGroup = function() {
  this.setDeleteGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.hasDeleteGroup = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool delete_group_null = 1006;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.getDeleteGroupNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1006, false));
};


/** @param {boolean} value  */
proto.dstore.engine.pm_ModifyGroups_Ad.Parameters.prototype.setDeleteGroupNull = function(value) {
  jspb.Message.setField(this, 1006, value);
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
proto.dstore.engine.pm_ModifyGroups_Ad.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.pm_ModifyGroups_Ad.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.pm_ModifyGroups_Ad.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.pm_ModifyGroups_Ad.Response.displayName = 'proto.dstore.engine.pm_ModifyGroups_Ad.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.pm_ModifyGroups_Ad.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.pm_ModifyGroups_Ad.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.pm_ModifyGroups_Ad.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_engine_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_engine_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.pm_ModifyGroups_Ad.Response}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.pm_ModifyGroups_Ad.Response;
  return proto.dstore.engine.pm_ModifyGroups_Ad.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.pm_ModifyGroups_Ad.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.pm_ModifyGroups_Ad.Response}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row;
      reader.readMessage(value,proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.pm_ModifyGroups_Ad.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.pm_ModifyGroups_Ad.Response} The clone.
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.pm_ModifyGroups_Ad.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated dstore.engine.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.MetaInformation>}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.MetaInformation>} value  */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.pm_ModifyGroups_Ad.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.Message>}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.Message>} value  */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.pm_ModifyGroups_Ad.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row>}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row>} value  */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.pm_ModifyGroups_Ad.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row.displayName = 'proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row';
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
proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row;
  return proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
 * @param {!proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
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
 * @return {!proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row} The clone.
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.pm_ModifyGroups_Ad.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


goog.object.extend(exports, proto.dstore.engine.pm_ModifyGroups_Ad);
