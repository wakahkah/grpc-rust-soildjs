/* eslint-disable */
import { grpc } from '@improbable-eng/grpc-web'
import { BrowserHeaders } from 'browser-headers'
import _m0 from 'protobufjs/minimal'

export const protobufPackage = 'auth.v1'

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginReply {
  usertoken: string
}

export interface LogoutRequest {}

export interface LogoutReply {}

function createBaseLoginRequest(): LoginRequest {
  return { email: '', password: '' }
}

export const LoginRequest = {
  encode(
    message: LoginRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.email !== '') {
      writer.uint32(10).string(message.email)
    }
    if (message.password !== '') {
      writer.uint32(18).string(message.password)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseLoginRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break
          }

          message.email = reader.string()
          continue
        case 2:
          if (tag != 18) {
            break
          }

          message.password = reader.string()
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): LoginRequest {
    return {
      email: isSet(object.email) ? String(object.email) : '',
      password: isSet(object.password) ? String(object.password) : '',
    }
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {}
    message.email !== undefined && (obj.email = message.email)
    message.password !== undefined && (obj.password = message.password)
    return obj
  },

  create<I extends Exact<DeepPartial<LoginRequest>, I>>(
    base?: I
  ): LoginRequest {
    return LoginRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<LoginRequest>, I>>(
    object: I
  ): LoginRequest {
    const message = createBaseLoginRequest()
    message.email = object.email ?? ''
    message.password = object.password ?? ''
    return message
  },
}

function createBaseLoginReply(): LoginReply {
  return { usertoken: '' }
}

export const LoginReply = {
  encode(
    message: LoginReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.usertoken !== '') {
      writer.uint32(10).string(message.usertoken)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoginReply {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseLoginReply()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break
          }

          message.usertoken = reader.string()
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): LoginReply {
    return {
      usertoken: isSet(object.usertoken) ? String(object.usertoken) : '',
    }
  },

  toJSON(message: LoginReply): unknown {
    const obj: any = {}
    message.usertoken !== undefined && (obj.usertoken = message.usertoken)
    return obj
  },

  create<I extends Exact<DeepPartial<LoginReply>, I>>(base?: I): LoginReply {
    return LoginReply.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<LoginReply>, I>>(
    object: I
  ): LoginReply {
    const message = createBaseLoginReply()
    message.usertoken = object.usertoken ?? ''
    return message
  },
}

function createBaseLogoutRequest(): LogoutRequest {
  return {}
}

export const LogoutRequest = {
  encode(
    _: LogoutRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogoutRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseLogoutRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(_: any): LogoutRequest {
    return {}
  },

  toJSON(_: LogoutRequest): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<LogoutRequest>, I>>(
    base?: I
  ): LogoutRequest {
    return LogoutRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<LogoutRequest>, I>>(
    _: I
  ): LogoutRequest {
    const message = createBaseLogoutRequest()
    return message
  },
}

function createBaseLogoutReply(): LogoutReply {
  return {}
}

export const LogoutReply = {
  encode(_: LogoutReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogoutReply {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseLogoutReply()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(_: any): LogoutReply {
    return {}
  },

  toJSON(_: LogoutReply): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<LogoutReply>, I>>(base?: I): LogoutReply {
    return LogoutReply.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<LogoutReply>, I>>(_: I): LogoutReply {
    const message = createBaseLogoutReply()
    return message
  },
}

export interface Authentication {
  Login(
    request: DeepPartial<LoginRequest>,
    metadata?: grpc.Metadata
  ): Promise<LoginReply>
  Logout(
    request: DeepPartial<LogoutRequest>,
    metadata?: grpc.Metadata
  ): Promise<LogoutReply>
}

export class AuthenticationClientImpl implements Authentication {
  private readonly rpc: Rpc

  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.Login = this.Login.bind(this)
    this.Logout = this.Logout.bind(this)
  }

  Login(
    request: DeepPartial<LoginRequest>,
    metadata?: grpc.Metadata
  ): Promise<LoginReply> {
    return this.rpc.unary(
      AuthenticationLoginDesc,
      LoginRequest.fromPartial(request),
      metadata
    )
  }

  Logout(
    request: DeepPartial<LogoutRequest>,
    metadata?: grpc.Metadata
  ): Promise<LogoutReply> {
    return this.rpc.unary(
      AuthenticationLogoutDesc,
      LogoutRequest.fromPartial(request),
      metadata
    )
  }
}

export const AuthenticationDesc = { serviceName: 'auth.v1.Authentication' }

export const AuthenticationLoginDesc: UnaryMethodDefinitionish = {
  methodName: 'Login',
  service: AuthenticationDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return LoginRequest.encode(this).finish()
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = LoginReply.decode(data)
      return {
        ...value,
        toObject() {
          return value
        },
      }
    },
  } as any,
}

export const AuthenticationLogoutDesc: UnaryMethodDefinitionish = {
  methodName: 'Logout',
  service: AuthenticationDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return LogoutRequest.encode(this).finish()
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = LogoutReply.decode(data)
      return {
        ...value,
        toObject() {
          return value
        },
      }
    },
  } as any,
}

interface UnaryMethodDefinitionishR
  extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any
  responseStream: any
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any>
}

export class GrpcWebImpl {
  private host: string
  private options: {
    transport?: grpc.TransportFactory

    debug?: boolean
    metadata?: grpc.Metadata
    upStreamRetryCodes?: number[]
  }

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory

      debug?: boolean
      metadata?: grpc.Metadata
      upStreamRetryCodes?: number[]
    }
  ) {
    this.host = host
    this.options = options
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType }
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({
            ...this.options?.metadata.headersMap,
            ...metadata?.headersMap,
          })
        : metadata || this.options.metadata
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message!.toObject())
          } else {
            const err = new GrpcWebError(
              response.statusMessage,
              response.status,
              response.trailers
            )
            reject(err)
          }
        },
      })
    })
  }
}

declare var self: any | undefined
declare var window: any | undefined
declare var global: any | undefined
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== 'undefined') {
    return globalThis
  }
  if (typeof self !== 'undefined') {
    return self
  }
  if (typeof window !== 'undefined') {
    return window
  }
  if (typeof global !== 'undefined') {
    return global
  }
  throw 'Unable to locate global object'
})()

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

type KeysOfUnion<T> = T extends T ? keyof T : never
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never
    }

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(
    message: string,
    public code: grpc.Code,
    public metadata: grpc.Metadata
  ) {
    super(message)
  }
}
