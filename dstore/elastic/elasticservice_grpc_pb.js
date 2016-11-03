// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var dstore_elastic_item_facetednavigation_pb = require('../../dstore/elastic/item/facetednavigation_pb.js');
var dstore_elastic_item_suggest_pb = require('../../dstore/elastic/item/suggest_pb.js');

function serialize_dstore_elastic_facetednavigation_Request(arg) {
  if (!(arg instanceof dstore_elastic_item_facetednavigation_pb.Request)) {
    throw new Error('Expected argument of type dstore.elastic.facetednavigation.Request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dstore_elastic_facetednavigation_Request(buffer_arg) {
  return dstore_elastic_item_facetednavigation_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dstore_elastic_facetednavigation_Response(arg) {
  if (!(arg instanceof dstore_elastic_item_facetednavigation_pb.Response)) {
    throw new Error('Expected argument of type dstore.elastic.facetednavigation.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dstore_elastic_facetednavigation_Response(buffer_arg) {
  return dstore_elastic_item_facetednavigation_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dstore_elastic_suggest_Request(arg) {
  if (!(arg instanceof dstore_elastic_item_suggest_pb.Request)) {
    throw new Error('Expected argument of type dstore.elastic.suggest.Request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dstore_elastic_suggest_Request(buffer_arg) {
  return dstore_elastic_item_suggest_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dstore_elastic_suggest_Response(arg) {
  if (!(arg instanceof dstore_elastic_item_suggest_pb.Response)) {
    throw new Error('Expected argument of type dstore.elastic.suggest.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dstore_elastic_suggest_Response(buffer_arg) {
  return dstore_elastic_item_suggest_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var ElasticServiceService = exports.ElasticServiceService = {
  facetedNavigation: {
    path: '/dstore.elastic.ElasticService/facetedNavigation',
    requestStream: false,
    responseStream: true,
    requestType: dstore_elastic_item_facetednavigation_pb.Request,
    responseType: dstore_elastic_item_facetednavigation_pb.Response,
    requestSerialize: serialize_dstore_elastic_facetednavigation_Request,
    requestDeserialize: deserialize_dstore_elastic_facetednavigation_Request,
    responseSerialize: serialize_dstore_elastic_facetednavigation_Response,
    responseDeserialize: deserialize_dstore_elastic_facetednavigation_Response,
  },
  itemSuggest: {
    path: '/dstore.elastic.ElasticService/itemSuggest',
    requestStream: false,
    responseStream: false,
    requestType: dstore_elastic_item_suggest_pb.Request,
    responseType: dstore_elastic_item_suggest_pb.Response,
    requestSerialize: serialize_dstore_elastic_suggest_Request,
    requestDeserialize: deserialize_dstore_elastic_suggest_Request,
    responseSerialize: serialize_dstore_elastic_suggest_Response,
    responseDeserialize: deserialize_dstore_elastic_suggest_Response,
  },
};

exports.ElasticServiceClient = grpc.makeGenericClientConstructor(ElasticServiceService);
