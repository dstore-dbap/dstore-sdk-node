// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var dstore_engine_procedure_pb = require('../../dstore/engine/procedure_pb.js');
var dstore_values_pb = require('../../dstore/values_pb.js');

function serialize_dstore_engine_procedure_Call(arg) {
  if (!(arg instanceof dstore_engine_procedure_pb.Call)) {
    throw new Error('Expected argument of type dstore.engine.procedure.Call');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dstore_engine_procedure_Call(buffer_arg) {
  return dstore_engine_procedure_pb.Call.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dstore_engine_procedure_Response(arg) {
  if (!(arg instanceof dstore_engine_procedure_pb.Response)) {
    throw new Error('Expected argument of type dstore.engine.procedure.Response');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dstore_engine_procedure_Response(buffer_arg) {
  return dstore_engine_procedure_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dstore_values_booleanValue(arg) {
  if (!(arg instanceof dstore_values_pb.booleanValue)) {
    throw new Error('Expected argument of type dstore.values.booleanValue');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dstore_values_booleanValue(buffer_arg) {
  return dstore_values_pb.booleanValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dstore_values_stringValue(arg) {
  if (!(arg instanceof dstore_values_pb.stringValue)) {
    throw new Error('Expected argument of type dstore.values.stringValue');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dstore_values_stringValue(buffer_arg) {
  return dstore_values_pb.stringValue.deserializeBinary(new Uint8Array(buffer_arg));
}


var EngineService = exports.EngineService = {
  execProcedure: {
    path: '/dstore.engine.Engine/execProcedure',
    requestStream: false,
    responseStream: true,
    requestType: dstore_engine_procedure_pb.Call,
    responseType: dstore_engine_procedure_pb.Response,
    requestSerialize: serialize_dstore_engine_procedure_Call,
    requestDeserialize: deserialize_dstore_engine_procedure_Call,
    responseSerialize: serialize_dstore_engine_procedure_Response,
    responseDeserialize: deserialize_dstore_engine_procedure_Response,
  },
  execBatch: {
    path: '/dstore.engine.Engine/execBatch',
    requestStream: true,
    responseStream: true,
    requestType: dstore_engine_procedure_pb.Call,
    responseType: dstore_engine_procedure_pb.Response,
    requestSerialize: serialize_dstore_engine_procedure_Call,
    requestDeserialize: deserialize_dstore_engine_procedure_Call,
    responseSerialize: serialize_dstore_engine_procedure_Response,
    responseDeserialize: deserialize_dstore_engine_procedure_Response,
  },
  createUniqueID: {
    path: '/dstore.engine.Engine/createUniqueID',
    requestStream: false,
    responseStream: false,
    requestType: dstore_values_pb.stringValue,
    responseType: dstore_values_pb.stringValue,
    requestSerialize: serialize_dstore_values_stringValue,
    requestDeserialize: deserialize_dstore_values_stringValue,
    responseSerialize: serialize_dstore_values_stringValue,
    responseDeserialize: deserialize_dstore_values_stringValue,
  },
  isValidUniqueID: {
    path: '/dstore.engine.Engine/isValidUniqueID',
    requestStream: false,
    responseStream: false,
    requestType: dstore_values_pb.stringValue,
    responseType: dstore_values_pb.booleanValue,
    requestSerialize: serialize_dstore_values_stringValue,
    requestDeserialize: deserialize_dstore_values_stringValue,
    responseSerialize: serialize_dstore_values_booleanValue,
    responseDeserialize: deserialize_dstore_values_booleanValue,
  },
};

exports.EngineClient = grpc.makeGenericClientConstructor(EngineService);
