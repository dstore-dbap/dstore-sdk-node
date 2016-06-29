// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var dstore_engine_procedure_pb = require('../../dstore/engine/procedure_pb.js');
var dstore_values_pb = require('../../dstore/values_pb.js');

function serialize_Call(arg) {
  if (!(arg instanceof dstore_engine_procedure_pb.Call)) {
    throw new Error('Expected argument of type Call');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Call(buffer_arg) {
  return dstore_engine_procedure_pb.Call.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Response(arg) {
  if (!(arg instanceof dstore_engine_procedure_pb.Response)) {
    throw new Error('Expected argument of type Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Response(buffer_arg) {
  return dstore_engine_procedure_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_booleanValue(arg) {
  if (!(arg instanceof dstore_values_pb.booleanValue)) {
    throw new Error('Expected argument of type booleanValue');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_booleanValue(buffer_arg) {
  return dstore_values_pb.booleanValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_stringValue(arg) {
  if (!(arg instanceof dstore_values_pb.stringValue)) {
    throw new Error('Expected argument of type stringValue');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_stringValue(buffer_arg) {
  return dstore_values_pb.stringValue.deserializeBinary(new Uint8Array(buffer_arg));
}


var EngineService = exports.EngineService = {
  execProcedure: {
    path: '/dstore.engine.Engine/execProcedure',
    requestStream: false,
    responseStream: true,
    requestType: dstore_engine_procedure_pb.Call,
    responseType: dstore_engine_procedure_pb.Response,
    requestSerialize: serialize_Call,
    requestDeserialize: deserialize_Call,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
  execBatch: {
    path: '/dstore.engine.Engine/execBatch',
    requestStream: true,
    responseStream: true,
    requestType: dstore_engine_procedure_pb.Call,
    responseType: dstore_engine_procedure_pb.Response,
    requestSerialize: serialize_Call,
    requestDeserialize: deserialize_Call,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
  createUniqueID: {
    path: '/dstore.engine.Engine/createUniqueID',
    requestStream: false,
    responseStream: false,
    requestType: dstore_values_pb.stringValue,
    responseType: dstore_values_pb.stringValue,
    requestSerialize: serialize_stringValue,
    requestDeserialize: deserialize_stringValue,
    responseSerialize: serialize_stringValue,
    responseDeserialize: deserialize_stringValue,
  },
  isValidUniqueID: {
    path: '/dstore.engine.Engine/isValidUniqueID',
    requestStream: false,
    responseStream: false,
    requestType: dstore_values_pb.stringValue,
    responseType: dstore_values_pb.booleanValue,
    requestSerialize: serialize_stringValue,
    requestDeserialize: deserialize_stringValue,
    responseSerialize: serialize_booleanValue,
    responseDeserialize: deserialize_booleanValue,
  },
};

exports.EngineClient = grpc.makeGenericClientConstructor(EngineService);
