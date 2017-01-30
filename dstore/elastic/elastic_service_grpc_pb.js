// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var dstore_elastic_item_item_get_pb = require('../../dstore/elastic/item/item_get_pb.js');
var dstore_elastic_item_item_suggest_pb = require('../../dstore/elastic/item/item_suggest_pb.js');
var dstore_elastic_item_item_export_pb = require('../../dstore/elastic/item/item_export_pb.js');

function serialize_dstore_elastic_item_item_export_Request(arg) {
  if (!(arg instanceof dstore_elastic_item_item_export_pb.Request)) {
    throw new Error('Expected argument of type dstore.elastic.item.item_export.Request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dstore_elastic_item_item_export_Request(buffer_arg) {
  return dstore_elastic_item_item_export_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dstore_elastic_item_item_export_Response(arg) {
  if (!(arg instanceof dstore_elastic_item_item_export_pb.Response)) {
    throw new Error('Expected argument of type dstore.elastic.item.item_export.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dstore_elastic_item_item_export_Response(buffer_arg) {
  return dstore_elastic_item_item_export_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dstore_elastic_item_item_get_Request(arg) {
  if (!(arg instanceof dstore_elastic_item_item_get_pb.Request)) {
    throw new Error('Expected argument of type dstore.elastic.item.item_get.Request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dstore_elastic_item_item_get_Request(buffer_arg) {
  return dstore_elastic_item_item_get_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dstore_elastic_item_item_get_Response(arg) {
  if (!(arg instanceof dstore_elastic_item_item_get_pb.Response)) {
    throw new Error('Expected argument of type dstore.elastic.item.item_get.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dstore_elastic_item_item_get_Response(buffer_arg) {
  return dstore_elastic_item_item_get_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dstore_elastic_item_item_suggest_Request(arg) {
  if (!(arg instanceof dstore_elastic_item_item_suggest_pb.Request)) {
    throw new Error('Expected argument of type dstore.elastic.item.item_suggest.Request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dstore_elastic_item_item_suggest_Request(buffer_arg) {
  return dstore_elastic_item_item_suggest_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dstore_elastic_item_item_suggest_Response(arg) {
  if (!(arg instanceof dstore_elastic_item_item_suggest_pb.Response)) {
    throw new Error('Expected argument of type dstore.elastic.item.item_suggest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dstore_elastic_item_item_suggest_Response(buffer_arg) {
  return dstore_elastic_item_item_suggest_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var ElasticService = exports.ElasticService = {
  itemGet: {
    path: '/dstore.elastic.Elastic/ItemGet',
    requestStream: false,
    responseStream: true,
    requestType: dstore_elastic_item_item_get_pb.Request,
    responseType: dstore_elastic_item_item_get_pb.Response,
    requestSerialize: serialize_dstore_elastic_item_item_get_Request,
    requestDeserialize: deserialize_dstore_elastic_item_item_get_Request,
    responseSerialize: serialize_dstore_elastic_item_item_get_Response,
    responseDeserialize: deserialize_dstore_elastic_item_item_get_Response,
  },
  itemSuggest: {
    path: '/dstore.elastic.Elastic/ItemSuggest',
    requestStream: false,
    responseStream: false,
    requestType: dstore_elastic_item_item_suggest_pb.Request,
    responseType: dstore_elastic_item_item_suggest_pb.Response,
    requestSerialize: serialize_dstore_elastic_item_item_suggest_Request,
    requestDeserialize: deserialize_dstore_elastic_item_item_suggest_Request,
    responseSerialize: serialize_dstore_elastic_item_item_suggest_Response,
    responseDeserialize: deserialize_dstore_elastic_item_item_suggest_Response,
  },
  itemExport: {
    path: '/dstore.elastic.Elastic/ItemExport',
    requestStream: false,
    responseStream: true,
    requestType: dstore_elastic_item_item_export_pb.Request,
    responseType: dstore_elastic_item_item_export_pb.Response,
    requestSerialize: serialize_dstore_elastic_item_item_export_Request,
    requestDeserialize: deserialize_dstore_elastic_item_item_export_Request,
    responseSerialize: serialize_dstore_elastic_item_item_export_Response,
    responseDeserialize: deserialize_dstore_elastic_item_item_export_Response,
  },
};

exports.ElasticClient = grpc.makeGenericClientConstructor(ElasticService);
