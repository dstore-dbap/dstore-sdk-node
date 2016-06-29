/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.dstore.elastic.error.Error', null, global);
goog.exportSymbol('proto.dstore.elastic.error.Types', null, global);

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
proto.dstore.elastic.error.Error = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.elastic.error.Error, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.elastic.error.Error.displayName = 'proto.dstore.elastic.error.Error';
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
proto.dstore.elastic.error.Error.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.elastic.error.Error.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.elastic.error.Error} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.elastic.error.Error.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: msg.getType(),
    message: msg.getMessage(),
    details: msg.getDetails(),
    request: msg.getRequest()
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
 * @return {!proto.dstore.elastic.error.Error}
 */
proto.dstore.elastic.error.Error.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.elastic.error.Error;
  return proto.dstore.elastic.error.Error.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.elastic.error.Error} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.elastic.error.Error}
 */
proto.dstore.elastic.error.Error.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.dstore.elastic.error.Types} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDetails(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequest(value);
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
 * @param {!proto.dstore.elastic.error.Error} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.elastic.error.Error.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.elastic.error.Error.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.elastic.error.Error.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = this.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getDetails();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getRequest();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.elastic.error.Error} The clone.
 */
proto.dstore.elastic.error.Error.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.elastic.error.Error} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Types type = 1;
 * @return {!proto.dstore.elastic.error.Types}
 */
proto.dstore.elastic.error.Error.prototype.getType = function() {
  return /** @type {!proto.dstore.elastic.error.Types} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {!proto.dstore.elastic.error.Types} value  */
proto.dstore.elastic.error.Error.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.dstore.elastic.error.Error.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.dstore.elastic.error.Error.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string details = 3;
 * @return {string}
 */
proto.dstore.elastic.error.Error.prototype.getDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.dstore.elastic.error.Error.prototype.setDetails = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string request = 4;
 * @return {string}
 */
proto.dstore.elastic.error.Error.prototype.getRequest = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.dstore.elastic.error.Error.prototype.setRequest = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.dstore.elastic.error.Types = {
  UNKOWN: 0,
  IO_EXCEPTION: 1
};

goog.object.extend(exports, proto.dstore.elastic.error);
