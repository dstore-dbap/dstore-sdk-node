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
goog.exportSymbol('proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response', null, global);
goog.exportSymbol('proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row', null, global);

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
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.displayName = 'proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters';
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
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    personId: (f = msg.getPersonId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    personIdNull: msg.getPersonIdNull(),
    cashAccountTypeId: (f = msg.getCashAccountTypeId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    cashAccountTypeIdNull: msg.getCashAccountTypeIdNull(),
    currencyId: (f = msg.getCurrencyId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    currencyIdNull: msg.getCurrencyIdNull(),
    accountStatus: (f = msg.getAccountStatus()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    accountStatusNull: msg.getAccountStatusNull(),
    minAccountBalance: (f = msg.getMinAccountBalance()) && dstore_values_pb.DecimalValue.toObject(includeInstance, f),
    minAccountBalanceNull: msg.getMinAccountBalanceNull(),
    deleteAccount: (f = msg.getDeleteAccount()) && dstore_values_pb.BooleanValue.toObject(includeInstance, f),
    deleteAccountNull: msg.getDeleteAccountNull()
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
 * @return {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters;
  return proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setPersonId(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPersonIdNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setCashAccountTypeId(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCashAccountTypeIdNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setCurrencyId(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCurrencyIdNull(value);
      break;
    case 4:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setAccountStatus(value);
      break;
    case 1004:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAccountStatusNull(value);
      break;
    case 5:
      var value = new dstore_values_pb.DecimalValue;
      reader.readMessage(value,dstore_values_pb.DecimalValue.deserializeBinaryFromReader);
      msg.setMinAccountBalance(value);
      break;
    case 1005:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMinAccountBalanceNull(value);
      break;
    case 6:
      var value = new dstore_values_pb.BooleanValue;
      reader.readMessage(value,dstore_values_pb.BooleanValue.deserializeBinaryFromReader);
      msg.setDeleteAccount(value);
      break;
    case 1006:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleteAccountNull(value);
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
 * @param {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPersonId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getPersonIdNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getCashAccountTypeId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getCashAccountTypeIdNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getCurrencyId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getCurrencyIdNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
  f = this.getAccountStatus();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getAccountStatusNull();
  if (f) {
    writer.writeBool(
      1004,
      f
    );
  }
  f = this.getMinAccountBalance();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      dstore_values_pb.DecimalValue.serializeBinaryToWriter
    );
  }
  f = this.getMinAccountBalanceNull();
  if (f) {
    writer.writeBool(
      1005,
      f
    );
  }
  f = this.getDeleteAccount();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      dstore_values_pb.BooleanValue.serializeBinaryToWriter
    );
  }
  f = this.getDeleteAccountNull();
  if (f) {
    writer.writeBool(
      1006,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters} The clone.
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.values.IntegerValue person_id = 1;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.getPersonId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 1));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.setPersonId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.clearPersonId = function() {
  this.setPersonId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.hasPersonId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool person_id_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.getPersonIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1001, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.setPersonIdNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.IntegerValue cash_account_type_id = 2;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.getCashAccountTypeId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 2));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.setCashAccountTypeId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.clearCashAccountTypeId = function() {
  this.setCashAccountTypeId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.hasCashAccountTypeId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool cash_account_type_id_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.getCashAccountTypeIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1002, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.setCashAccountTypeIdNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.IntegerValue currency_id = 3;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.getCurrencyId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 3));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.setCurrencyId = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.clearCurrencyId = function() {
  this.setCurrencyId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.hasCurrencyId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool currency_id_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.getCurrencyIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1003, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.setCurrencyIdNull = function(value) {
  jspb.Message.setField(this, 1003, value);
};


/**
 * optional dstore.values.IntegerValue account_status = 4;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.getAccountStatus = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 4));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.setAccountStatus = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.clearAccountStatus = function() {
  this.setAccountStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.hasAccountStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool account_status_null = 1004;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.getAccountStatusNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1004, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.setAccountStatusNull = function(value) {
  jspb.Message.setField(this, 1004, value);
};


/**
 * optional dstore.values.DecimalValue min_account_balance = 5;
 * @return {proto.dstore.values.DecimalValue}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.getMinAccountBalance = function() {
  return /** @type{proto.dstore.values.DecimalValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.DecimalValue, 5));
};


/** @param {proto.dstore.values.DecimalValue|undefined} value  */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.setMinAccountBalance = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.clearMinAccountBalance = function() {
  this.setMinAccountBalance(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.hasMinAccountBalance = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool min_account_balance_null = 1005;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.getMinAccountBalanceNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1005, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.setMinAccountBalanceNull = function(value) {
  jspb.Message.setField(this, 1005, value);
};


/**
 * optional dstore.values.BooleanValue delete_account = 6;
 * @return {proto.dstore.values.BooleanValue}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.getDeleteAccount = function() {
  return /** @type{proto.dstore.values.BooleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.BooleanValue, 6));
};


/** @param {proto.dstore.values.BooleanValue|undefined} value  */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.setDeleteAccount = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.clearDeleteAccount = function() {
  this.setDeleteAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.hasDeleteAccount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool delete_account_null = 1006;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.getDeleteAccountNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1006, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Parameters.prototype.setDeleteAccountNull = function(value) {
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
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.displayName = 'proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_engine_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_engine_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response;
  return proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row;
      reader.readMessage(value,proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response} The clone.
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated dstore.engine.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.MetaInformation>}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.MetaInformation>} value  */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.Message>}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.Message>} value  */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row>}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row>} value  */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row.displayName = 'proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row';
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
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row;
  return proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
 * @param {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
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
 * @return {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row} The clone.
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.om_ModifyCustomerCashAcc_Ad.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


goog.object.extend(exports, proto.dstore.engine.om_ModifyCustomerCashAcc_Ad);
