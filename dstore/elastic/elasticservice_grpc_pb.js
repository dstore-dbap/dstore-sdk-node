// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var dstore_elastic_item_facetednavigation_pb = require('../../dstore/elastic/item/facetednavigation_pb.js');
var dstore_elastic_item_suggest_pb = require('../../dstore/elastic/item/suggest_pb.js');

function serialize_Request(arg) {
  if (!(arg instanceof dstore_elastic_item_suggest_pb.Request)) {
    throw new Error('Expected argument of type Request');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Request(buffer_arg) {
  return dstore_elastic_item_suggest_pb.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Response(arg) {
  if (!(arg instanceof dstore_elastic_item_suggest_pb.Response)) {
    throw new Error('Expected argument of type Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Response(buffer_arg) {
  return dstore_elastic_item_suggest_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var ElasticServiceService = exports.ElasticServiceService = {
  facetedNavigation: {
    path: '/dstore.elastic.ElasticService/facetedNavigation',
    requestStream: false,
    responseStream: true,
    requestType: dstore_elastic_item_facetednavigation_pb.Request,
    responseType: dstore_elastic_item_facetednavigation_pb.Response,
    requestSerialize: serialize_Request,
    requestDeserialize: deserialize_Request,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
  itemSuggest: {
    path: '/dstore.elastic.ElasticService/itemSuggest',
    requestStream: false,
    responseStream: false,
    requestType: dstore_elastic_item_suggest_pb.Request,
    responseType: dstore_elastic_item_suggest_pb.Response,
    requestSerialize: serialize_Request,
    requestDeserialize: deserialize_Request,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
};

exports.ElasticServiceClient = grpc.makeGenericClientConstructor(ElasticServiceService);
