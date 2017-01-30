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

function serialize_dstore_values_BooleanValue(arg) {
  if (!(arg instanceof dstore_values_pb.BooleanValue)) {
    throw new Error('Expected argument of type dstore.values.BooleanValue');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dstore_values_BooleanValue(buffer_arg) {
  return dstore_values_pb.BooleanValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dstore_values_StringValue(arg) {
  if (!(arg instanceof dstore_values_pb.StringValue)) {
    throw new Error('Expected argument of type dstore.values.StringValue');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_dstore_values_StringValue(buffer_arg) {
  return dstore_values_pb.StringValue.deserializeBinary(new Uint8Array(buffer_arg));
}


var EngineService = exports.EngineService = {
  execProcedure: {
    path: '/dstore.engine.Engine/ExecProcedure',
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
    path: '/dstore.engine.Engine/ExecBatch',
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
    path: '/dstore.engine.Engine/CreateUniqueID',
    requestStream: false,
    responseStream: false,
    requestType: dstore_values_pb.StringValue,
    responseType: dstore_values_pb.StringValue,
    requestSerialize: serialize_dstore_values_StringValue,
    requestDeserialize: deserialize_dstore_values_StringValue,
    responseSerialize: serialize_dstore_values_StringValue,
    responseDeserialize: deserialize_dstore_values_StringValue,
  },
  isValidUniqueID: {
    path: '/dstore.engine.Engine/IsValidUniqueID',
    requestStream: false,
    responseStream: false,
    requestType: dstore_values_pb.StringValue,
    responseType: dstore_values_pb.BooleanValue,
    requestSerialize: serialize_dstore_values_StringValue,
    requestDeserialize: deserialize_dstore_values_StringValue,
    responseSerialize: serialize_dstore_values_BooleanValue,
    responseDeserialize: deserialize_dstore_values_BooleanValue,
  },
};

exports.EngineClient = grpc.makeGenericClientConstructor(EngineService);
