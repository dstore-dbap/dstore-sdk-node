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
goog.exportSymbol('proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response', null, global);
goog.exportSymbol('proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row', null, global);

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
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.displayName = 'proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters';
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
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    personIdentificationValues: (f = msg.getPersonIdentificationValues()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    personIdentificationValuesNull: msg.getPersonIdentificationValuesNull(),
    personTypeId: (f = msg.getPersonTypeId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    personTypeIdNull: msg.getPersonTypeIdNull(),
    uniqueId: (f = msg.getUniqueId()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    uniqueIdNull: msg.getUniqueIdNull(),
    relatedPersonId: (f = msg.getRelatedPersonId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    relatedPersonIdNull: msg.getRelatedPersonIdNull(),
    relationshipId: (f = msg.getRelationshipId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    relationshipIdNull: msg.getRelationshipIdNull(),
    accessLevel: (f = msg.getAccessLevel()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    accessLevelNull: msg.getAccessLevelNull(),
    relatedIdentificationValues: (f = msg.getRelatedIdentificationValues()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    relatedIdentificationValuesNull: msg.getRelatedIdentificationValuesNull(),
    separatorInIdentVals: (f = msg.getSeparatorInIdentVals()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    separatorInIdentValsNull: msg.getSeparatorInIdentValsNull()
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
 * @return {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters;
  return proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setPersonIdentificationValues(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPersonIdentificationValuesNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setPersonTypeId(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPersonTypeIdNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setUniqueId(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUniqueIdNull(value);
      break;
    case 4:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setRelatedPersonId(value);
      break;
    case 1004:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRelatedPersonIdNull(value);
      break;
    case 5:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setRelationshipId(value);
      break;
    case 1005:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRelationshipIdNull(value);
      break;
    case 6:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setAccessLevel(value);
      break;
    case 1006:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccessLevelNull(value);
      break;
    case 7:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setRelatedIdentificationValues(value);
      break;
    case 1007:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRelatedIdentificationValuesNull(value);
      break;
    case 8:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setSeparatorInIdentVals(value);
      break;
    case 1008:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSeparatorInIdentValsNull(value);
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
 * @param {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPersonIdentificationValues();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getPersonIdentificationValuesNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getPersonTypeId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getPersonTypeIdNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getUniqueId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getUniqueIdNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
  f = this.getRelatedPersonId();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getRelatedPersonIdNull();
  if (f) {
    writer.writeBool(
      1004,
      f
    );
  }
  f = this.getRelationshipId();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getRelationshipIdNull();
  if (f) {
    writer.writeBool(
      1005,
      f
    );
  }
  f = this.getAccessLevel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getAccessLevelNull();
  if (f) {
    writer.writeBool(
      1006,
      f
    );
  }
  f = this.getRelatedIdentificationValues();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getRelatedIdentificationValuesNull();
  if (f) {
    writer.writeBool(
      1007,
      f
    );
  }
  f = this.getSeparatorInIdentVals();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getSeparatorInIdentValsNull();
  if (f) {
    writer.writeBool(
      1008,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters} The clone.
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.values.stringValue person_identification_values = 1;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.getPersonIdentificationValues = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 1));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.setPersonIdentificationValues = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.clearPersonIdentificationValues = function() {
  this.setPersonIdentificationValues(undefined);
};


/**
 * optional bool person_identification_values_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.getPersonIdentificationValuesNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1001, false));
};


/** @param {boolean} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.setPersonIdentificationValuesNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.integerValue person_type_id = 2;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.getPersonTypeId = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 2));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.setPersonTypeId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.clearPersonTypeId = function() {
  this.setPersonTypeId(undefined);
};


/**
 * optional bool person_type_id_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.getPersonTypeIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1002, false));
};


/** @param {boolean} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.setPersonTypeIdNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.stringValue unique_id = 3;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.getUniqueId = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 3));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.setUniqueId = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.clearUniqueId = function() {
  this.setUniqueId(undefined);
};


/**
 * optional bool unique_id_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.getUniqueIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1003, false));
};


/** @param {boolean} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.setUniqueIdNull = function(value) {
  jspb.Message.setField(this, 1003, value);
};


/**
 * optional dstore.values.integerValue related_person_id = 4;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.getRelatedPersonId = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 4));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.setRelatedPersonId = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.clearRelatedPersonId = function() {
  this.setRelatedPersonId(undefined);
};


/**
 * optional bool related_person_id_null = 1004;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.getRelatedPersonIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1004, false));
};


/** @param {boolean} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.setRelatedPersonIdNull = function(value) {
  jspb.Message.setField(this, 1004, value);
};


/**
 * optional dstore.values.integerValue relationship_id = 5;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.getRelationshipId = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 5));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.setRelationshipId = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.clearRelationshipId = function() {
  this.setRelationshipId(undefined);
};


/**
 * optional bool relationship_id_null = 1005;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.getRelationshipIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1005, false));
};


/** @param {boolean} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.setRelationshipIdNull = function(value) {
  jspb.Message.setField(this, 1005, value);
};


/**
 * optional dstore.values.integerValue access_level = 6;
 * @return {proto.dstore.values.integerValue}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.getAccessLevel = function() {
  return /** @type{proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 6));
};


/** @param {proto.dstore.values.integerValue|undefined} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.setAccessLevel = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.clearAccessLevel = function() {
  this.setAccessLevel(undefined);
};


/**
 * optional bool access_level_null = 1006;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.getAccessLevelNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1006, false));
};


/** @param {boolean} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.setAccessLevelNull = function(value) {
  jspb.Message.setField(this, 1006, value);
};


/**
 * optional dstore.values.stringValue related_identification_values = 7;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.getRelatedIdentificationValues = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 7));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.setRelatedIdentificationValues = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.clearRelatedIdentificationValues = function() {
  this.setRelatedIdentificationValues(undefined);
};


/**
 * optional bool related_identification_values_null = 1007;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.getRelatedIdentificationValuesNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1007, false));
};


/** @param {boolean} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.setRelatedIdentificationValuesNull = function(value) {
  jspb.Message.setField(this, 1007, value);
};


/**
 * optional dstore.values.stringValue separator_in_ident_vals = 8;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.getSeparatorInIdentVals = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 8));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.setSeparatorInIdentVals = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.clearSeparatorInIdentVals = function() {
  this.setSeparatorInIdentVals(undefined);
};


/**
 * optional bool separator_in_ident_vals_null = 1008;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.getSeparatorInIdentValsNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1008, false));
};


/** @param {boolean} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Parameters.prototype.setSeparatorInIdentValsNull = function(value) {
  jspb.Message.setField(this, 1008, value);
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
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.displayName = 'proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && dstore_engine_error_pb.Error.toObject(includeInstance, f),
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_metainformation_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_message_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response;
  return proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row;
      reader.readMessage(value,proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response} The clone.
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.engine.error.Error error = 1;
 * @return {proto.dstore.engine.error.Error}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.prototype.getError = function() {
  return /** @type{proto.dstore.engine.error.Error} */ (
    jspb.Message.getWrapperField(this, dstore_engine_error_pb.Error, 1));
};


/** @param {proto.dstore.engine.error.Error|undefined} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.prototype.setError = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.prototype.clearError = function() {
  this.setError(undefined);
};


/**
 * repeated dstore.engine.metainformation.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.metainformation.MetaInformation>}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.metainformation.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_metainformation_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.metainformation.MetaInformation>|undefined} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.message.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.message.Message>}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.message.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_message_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.message.Message>|undefined} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row>}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row>|undefined} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row.displayName = 'proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row';
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
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row;
  return proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
 * @param {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
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
 * @return {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row} The clone.
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.pm_ModifyPersonRelationship_Pu.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


goog.object.extend(exports, proto.dstore.engine.pm_ModifyPersonRelationship_Pu);
