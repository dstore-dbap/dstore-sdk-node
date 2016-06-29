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
goog.exportSymbol('proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.mi_DeletedStoreUser_Ad.Response', null, global);
goog.exportSymbol('proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row', null, global);

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
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.displayName = 'proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters';
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
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    userName: (f = msg.getUserName()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    userNameNull: msg.getUserNameNull(),
    invalidateUserInUserInfo: (f = msg.getInvalidateUserInUserInfo()) && dstore_values_pb.booleanValue.toObject(includeInstance, f),
    invalidateUserInUserInfoNull: msg.getInvalidateUserInUserInfoNull(),
    onlyDeleteUserFromThisEngine: (f = msg.getOnlyDeleteUserFromThisEngine()) && dstore_values_pb.booleanValue.toObject(includeInstance, f),
    onlyDeleteUserFromThisEngineNull: msg.getOnlyDeleteUserFromThisEngineNull(),
    dropLoginWhenDBIsNotAvailable: (f = msg.getDropLoginWhenDBIsNotAvailable()) && dstore_values_pb.booleanValue.toObject(includeInstance, f),
    dropLoginWhenDBIsNotAvailableNull: msg.getDropLoginWhenDBIsNotAvailableNull(),
    killProcessesForUserFirst: (f = msg.getKillProcessesForUserFirst()) && dstore_values_pb.booleanValue.toObject(includeInstance, f),
    killProcessesForUserFirstNull: msg.getKillProcessesForUserFirstNull()
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
 * @return {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters;
  return proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setUserName(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUserNameNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.booleanValue;
      reader.readMessage(value,dstore_values_pb.booleanValue.deserializeBinaryFromReader);
      msg.setInvalidateUserInUserInfo(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInvalidateUserInUserInfoNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.booleanValue;
      reader.readMessage(value,dstore_values_pb.booleanValue.deserializeBinaryFromReader);
      msg.setOnlyDeleteUserFromThisEngine(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnlyDeleteUserFromThisEngineNull(value);
      break;
    case 4:
      var value = new dstore_values_pb.booleanValue;
      reader.readMessage(value,dstore_values_pb.booleanValue.deserializeBinaryFromReader);
      msg.setDropLoginWhenDBIsNotAvailable(value);
      break;
    case 1004:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDropLoginWhenDBIsNotAvailableNull(value);
      break;
    case 5:
      var value = new dstore_values_pb.booleanValue;
      reader.readMessage(value,dstore_values_pb.booleanValue.deserializeBinaryFromReader);
      msg.setKillProcessesForUserFirst(value);
      break;
    case 1005:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKillProcessesForUserFirstNull(value);
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
 * @param {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUserName();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getUserNameNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getInvalidateUserInUserInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.booleanValue.serializeBinaryToWriter
    );
  }
  f = this.getInvalidateUserInUserInfoNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getOnlyDeleteUserFromThisEngine();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.booleanValue.serializeBinaryToWriter
    );
  }
  f = this.getOnlyDeleteUserFromThisEngineNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
  f = this.getDropLoginWhenDBIsNotAvailable();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      dstore_values_pb.booleanValue.serializeBinaryToWriter
    );
  }
  f = this.getDropLoginWhenDBIsNotAvailableNull();
  if (f) {
    writer.writeBool(
      1004,
      f
    );
  }
  f = this.getKillProcessesForUserFirst();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      dstore_values_pb.booleanValue.serializeBinaryToWriter
    );
  }
  f = this.getKillProcessesForUserFirstNull();
  if (f) {
    writer.writeBool(
      1005,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters} The clone.
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.values.stringValue user_name = 1;
 * @return {proto.dstore.values.stringValue}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.getUserName = function() {
  return /** @type{proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 1));
};


/** @param {proto.dstore.values.stringValue|undefined} value  */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.setUserName = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.clearUserName = function() {
  this.setUserName(undefined);
};


/**
 * optional bool user_name_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.getUserNameNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1001, false));
};


/** @param {boolean} value  */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.setUserNameNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.booleanValue invalidate_user_in_user_info = 2;
 * @return {proto.dstore.values.booleanValue}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.getInvalidateUserInUserInfo = function() {
  return /** @type{proto.dstore.values.booleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.booleanValue, 2));
};


/** @param {proto.dstore.values.booleanValue|undefined} value  */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.setInvalidateUserInUserInfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.clearInvalidateUserInUserInfo = function() {
  this.setInvalidateUserInUserInfo(undefined);
};


/**
 * optional bool invalidate_user_in_user_info_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.getInvalidateUserInUserInfoNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1002, false));
};


/** @param {boolean} value  */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.setInvalidateUserInUserInfoNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.booleanValue only_delete_user_from_this_engine = 3;
 * @return {proto.dstore.values.booleanValue}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.getOnlyDeleteUserFromThisEngine = function() {
  return /** @type{proto.dstore.values.booleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.booleanValue, 3));
};


/** @param {proto.dstore.values.booleanValue|undefined} value  */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.setOnlyDeleteUserFromThisEngine = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.clearOnlyDeleteUserFromThisEngine = function() {
  this.setOnlyDeleteUserFromThisEngine(undefined);
};


/**
 * optional bool only_delete_user_from_this_engine_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.getOnlyDeleteUserFromThisEngineNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1003, false));
};


/** @param {boolean} value  */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.setOnlyDeleteUserFromThisEngineNull = function(value) {
  jspb.Message.setField(this, 1003, value);
};


/**
 * optional dstore.values.booleanValue drop_login_when_d_b_is_not_available = 4;
 * @return {proto.dstore.values.booleanValue}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.getDropLoginWhenDBIsNotAvailable = function() {
  return /** @type{proto.dstore.values.booleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.booleanValue, 4));
};


/** @param {proto.dstore.values.booleanValue|undefined} value  */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.setDropLoginWhenDBIsNotAvailable = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.clearDropLoginWhenDBIsNotAvailable = function() {
  this.setDropLoginWhenDBIsNotAvailable(undefined);
};


/**
 * optional bool drop_login_when_d_b_is_not_available_null = 1004;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.getDropLoginWhenDBIsNotAvailableNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1004, false));
};


/** @param {boolean} value  */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.setDropLoginWhenDBIsNotAvailableNull = function(value) {
  jspb.Message.setField(this, 1004, value);
};


/**
 * optional dstore.values.booleanValue kill_processes_for_user_first = 5;
 * @return {proto.dstore.values.booleanValue}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.getKillProcessesForUserFirst = function() {
  return /** @type{proto.dstore.values.booleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.booleanValue, 5));
};


/** @param {proto.dstore.values.booleanValue|undefined} value  */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.setKillProcessesForUserFirst = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.clearKillProcessesForUserFirst = function() {
  this.setKillProcessesForUserFirst(undefined);
};


/**
 * optional bool kill_processes_for_user_first_null = 1005;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.getKillProcessesForUserFirstNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1005, false));
};


/** @param {boolean} value  */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Parameters.prototype.setKillProcessesForUserFirstNull = function(value) {
  jspb.Message.setField(this, 1005, value);
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
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.mi_DeletedStoreUser_Ad.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.displayName = 'proto.dstore.engine.mi_DeletedStoreUser_Ad.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && dstore_engine_error_pb.Error.toObject(includeInstance, f),
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_metainformation_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_message_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Response}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.mi_DeletedStoreUser_Ad.Response;
  return proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Response}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row;
      reader.readMessage(value,proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Response} The clone.
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.engine.error.Error error = 1;
 * @return {proto.dstore.engine.error.Error}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.prototype.getError = function() {
  return /** @type{proto.dstore.engine.error.Error} */ (
    jspb.Message.getWrapperField(this, dstore_engine_error_pb.Error, 1));
};


/** @param {proto.dstore.engine.error.Error|undefined} value  */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.prototype.setError = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.prototype.clearError = function() {
  this.setError(undefined);
};


/**
 * repeated dstore.engine.metainformation.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.metainformation.MetaInformation>}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.metainformation.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_metainformation_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.metainformation.MetaInformation>|undefined} value  */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.message.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.message.Message>}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.message.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_message_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.message.Message>|undefined} value  */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row>}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row>|undefined} value  */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row.displayName = 'proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row';
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
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row;
  return proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
 * @param {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
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
 * @return {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row} The clone.
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.mi_DeletedStoreUser_Ad.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


goog.object.extend(exports, proto.dstore.engine.mi_DeletedStoreUser_Ad);
