/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var dstore_elastic_elastic_pb = require('../../../dstore/elastic/elastic_pb.js');
goog.exportSymbol('proto.dstore.elastic.node.Node', null, global);
goog.exportSymbol('proto.dstore.elastic.node.Node.FieldsEntry', null, global);

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
proto.dstore.elastic.node.Node = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.elastic.node.Node.repeatedFields_, null);
};
goog.inherits(proto.dstore.elastic.node.Node, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.elastic.node.Node.displayName = 'proto.dstore.elastic.node.Node';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.elastic.node.Node.repeatedFields_ = [6,20];



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
proto.dstore.elastic.node.Node.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.elastic.node.Node.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.elastic.node.Node} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.elastic.node.Node.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: msg.getDescription(),
    treeNodeId: msg.getTreeNodeId(),
    active: msg.getActive(),
    levelId: msg.getLevelId(),
    sortNo: msg.getSortNo(),
    predecessorTreeNodeIdList: jspb.Message.getField(msg, 6),
    fieldsList: jspb.Message.toObjectList(msg.getFieldsList(),
    proto.dstore.elastic.node.Node.FieldsEntry.toObject, includeInstance)
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
 * @return {!proto.dstore.elastic.node.Node}
 */
proto.dstore.elastic.node.Node.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.elastic.node.Node;
  return proto.dstore.elastic.node.Node.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.elastic.node.Node} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.elastic.node.Node}
 */
proto.dstore.elastic.node.Node.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTreeNodeId(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActive(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevelId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSortNo(value);
      break;
    case 6:
      var value = /** @type {!Array.<number>} */ (reader.readPackedInt32());
      msg.setPredecessorTreeNodeIdList(value);
      break;
    case 20:
      var value = new proto.dstore.elastic.node.Node.FieldsEntry;
      reader.readMessage(value,proto.dstore.elastic.node.Node.FieldsEntry.deserializeBinaryFromReader);
      msg.getFieldsList().push(value);
      msg.setFieldsList(msg.getFieldsList());
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
 * @param {!proto.dstore.elastic.node.Node} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.elastic.node.Node.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.elastic.node.Node.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.elastic.node.Node.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getTreeNodeId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getActive();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = this.getLevelId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = this.getSortNo();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = this.getPredecessorTreeNodeIdList();
  if (f.length > 0) {
    writer.writePackedInt32(
      6,
      f
    );
  }
  f = this.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto.dstore.elastic.node.Node.FieldsEntry.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.elastic.node.Node} The clone.
 */
proto.dstore.elastic.node.Node.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.elastic.node.Node} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.dstore.elastic.node.Node.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.dstore.elastic.node.Node.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 tree_node_id = 2;
 * @return {number}
 */
proto.dstore.elastic.node.Node.prototype.getTreeNodeId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.dstore.elastic.node.Node.prototype.setTreeNodeId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bool active = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.elastic.node.Node.prototype.getActive = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 3, false));
};


/** @param {boolean} value  */
proto.dstore.elastic.node.Node.prototype.setActive = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 level_id = 4;
 * @return {number}
 */
proto.dstore.elastic.node.Node.prototype.getLevelId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.dstore.elastic.node.Node.prototype.setLevelId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int32 sort_no = 5;
 * @return {number}
 */
proto.dstore.elastic.node.Node.prototype.getSortNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.dstore.elastic.node.Node.prototype.setSortNo = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * repeated int32 predecessor_tree_node_id = 6;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.dstore.elastic.node.Node.prototype.getPredecessorTreeNodeIdList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 6));
};


/** @param {Array.<number>} value  */
proto.dstore.elastic.node.Node.prototype.setPredecessorTreeNodeIdList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * repeated FieldsEntry fields = 20;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.elastic.node.Node.FieldsEntry>}
 */
proto.dstore.elastic.node.Node.prototype.getFieldsList = function() {
  return /** @type{!Array.<!proto.dstore.elastic.node.Node.FieldsEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.elastic.node.Node.FieldsEntry, 20));
};


/** @param {Array.<!proto.dstore.elastic.node.Node.FieldsEntry>|undefined} value  */
proto.dstore.elastic.node.Node.prototype.setFieldsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 20, value);
};


proto.dstore.elastic.node.Node.prototype.clearFieldsList = function() {
  this.setFieldsList([]);
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
proto.dstore.elastic.node.Node.FieldsEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.elastic.node.Node.FieldsEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.elastic.node.Node.FieldsEntry.displayName = 'proto.dstore.elastic.node.Node.FieldsEntry';
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
proto.dstore.elastic.node.Node.FieldsEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.elastic.node.Node.FieldsEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.elastic.node.Node.FieldsEntry} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.elastic.node.Node.FieldsEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: msg.getKey(),
    value: (f = msg.getValue()) && dstore_elastic_elastic_pb.Field.toObject(includeInstance, f)
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
 * @return {!proto.dstore.elastic.node.Node.FieldsEntry}
 */
proto.dstore.elastic.node.Node.FieldsEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.elastic.node.Node.FieldsEntry;
  return proto.dstore.elastic.node.Node.FieldsEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.elastic.node.Node.FieldsEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.elastic.node.Node.FieldsEntry}
 */
proto.dstore.elastic.node.Node.FieldsEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = new dstore_elastic_elastic_pb.Field;
      reader.readMessage(value,dstore_elastic_elastic_pb.Field.deserializeBinaryFromReader);
      msg.setValue(value);
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
 * @param {!proto.dstore.elastic.node.Node.FieldsEntry} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.elastic.node.Node.FieldsEntry.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.elastic.node.Node.FieldsEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.elastic.node.Node.FieldsEntry.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_elastic_elastic_pb.Field.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.elastic.node.Node.FieldsEntry} The clone.
 */
proto.dstore.elastic.node.Node.FieldsEntry.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.elastic.node.Node.FieldsEntry} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.dstore.elastic.node.Node.FieldsEntry.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.dstore.elastic.node.Node.FieldsEntry.prototype.setKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional dstore.elastic.Field value = 2;
 * @return {proto.dstore.elastic.Field}
 */
proto.dstore.elastic.node.Node.FieldsEntry.prototype.getValue = function() {
  return /** @type{proto.dstore.elastic.Field} */ (
    jspb.Message.getWrapperField(this, dstore_elastic_elastic_pb.Field, 2));
};


/** @param {proto.dstore.elastic.Field|undefined} value  */
proto.dstore.elastic.node.Node.FieldsEntry.prototype.setValue = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.elastic.node.Node.FieldsEntry.prototype.clearValue = function() {
  this.setValue(undefined);
};


goog.object.extend(exports, proto.dstore.elastic.node);
