/* eslint-disable */
import { grpc } from '@improbable-eng/grpc-web'
import { BrowserHeaders } from 'browser-headers'
import Long from 'long'
import _m0 from 'protobufjs/minimal'

export const protobufPackage = 'shop.v1'

export interface GetPetsRequest {}

export interface GetPetsReply {
  pets: Pet[]
}

export interface Pet {
  id: number
  age: number
  name: string
}

export interface BuyPetRequest {
  id: number
}

export interface BuyPetReply {}

function createBaseGetPetsRequest(): GetPetsRequest {
  return {}
}

export const GetPetsRequest = {
  encode(
    _: GetPetsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPetsRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseGetPetsRequest()
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

  fromJSON(_: any): GetPetsRequest {
    return {}
  },

  toJSON(_: GetPetsRequest): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<GetPetsRequest>, I>>(
    base?: I
  ): GetPetsRequest {
    return GetPetsRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<GetPetsRequest>, I>>(
    _: I
  ): GetPetsRequest {
    const message = createBaseGetPetsRequest()
    return message
  },
}

function createBaseGetPetsReply(): GetPetsReply {
  return { pets: [] }
}

export const GetPetsReply = {
  encode(
    message: GetPetsReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pets) {
      Pet.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPetsReply {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseGetPetsReply()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break
          }

          message.pets.push(Pet.decode(reader, reader.uint32()))
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): GetPetsReply {
    return {
      pets: Array.isArray(object?.pets)
        ? object.pets.map((e: any) => Pet.fromJSON(e))
        : [],
    }
  },

  toJSON(message: GetPetsReply): unknown {
    const obj: any = {}
    if (message.pets) {
      obj.pets = message.pets.map((e) => (e ? Pet.toJSON(e) : undefined))
    } else {
      obj.pets = []
    }
    return obj
  },

  create<I extends Exact<DeepPartial<GetPetsReply>, I>>(
    base?: I
  ): GetPetsReply {
    return GetPetsReply.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<GetPetsReply>, I>>(
    object: I
  ): GetPetsReply {
    const message = createBaseGetPetsReply()
    message.pets = object.pets?.map((e) => Pet.fromPartial(e)) || []
    return message
  },
}

function createBasePet(): Pet {
  return { id: 0, age: 0, name: '' }
}

export const Pet = {
  encode(message: Pet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id)
    }
    if (message.age !== 0) {
      writer.uint32(16).int32(message.age)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pet {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBasePet()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break
          }

          message.id = longToNumber(reader.int64() as Long)
          continue
        case 2:
          if (tag != 16) {
            break
          }

          message.age = reader.int32()
          continue
        case 3:
          if (tag != 26) {
            break
          }

          message.name = reader.string()
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): Pet {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      age: isSet(object.age) ? Number(object.age) : 0,
      name: isSet(object.name) ? String(object.name) : '',
    }
  },

  toJSON(message: Pet): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    message.age !== undefined && (obj.age = Math.round(message.age))
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  create<I extends Exact<DeepPartial<Pet>, I>>(base?: I): Pet {
    return Pet.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<Pet>, I>>(object: I): Pet {
    const message = createBasePet()
    message.id = object.id ?? 0
    message.age = object.age ?? 0
    message.name = object.name ?? ''
    return message
  },
}

function createBaseBuyPetRequest(): BuyPetRequest {
  return { id: 0 }
}

export const BuyPetRequest = {
  encode(
    message: BuyPetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int64(message.id)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuyPetRequest {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseBuyPetRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break
          }

          message.id = longToNumber(reader.int64() as Long)
          continue
      }
      if ((tag & 7) == 4 || tag == 0) {
        break
      }
      reader.skipType(tag & 7)
    }
    return message
  },

  fromJSON(object: any): BuyPetRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 }
  },

  toJSON(message: BuyPetRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = Math.round(message.id))
    return obj
  },

  create<I extends Exact<DeepPartial<BuyPetRequest>, I>>(
    base?: I
  ): BuyPetRequest {
    return BuyPetRequest.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<BuyPetRequest>, I>>(
    object: I
  ): BuyPetRequest {
    const message = createBaseBuyPetRequest()
    message.id = object.id ?? 0
    return message
  },
}

function createBaseBuyPetReply(): BuyPetReply {
  return {}
}

export const BuyPetReply = {
  encode(_: BuyPetReply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuyPetReply {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseBuyPetReply()
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

  fromJSON(_: any): BuyPetReply {
    return {}
  },

  toJSON(_: BuyPetReply): unknown {
    const obj: any = {}
    return obj
  },

  create<I extends Exact<DeepPartial<BuyPetReply>, I>>(base?: I): BuyPetReply {
    return BuyPetReply.fromPartial(base ?? {})
  },

  fromPartial<I extends Exact<DeepPartial<BuyPetReply>, I>>(_: I): BuyPetReply {
    const message = createBaseBuyPetReply()
    return message
  },
}

export interface PetShop {
  GetPets(
    request: DeepPartial<GetPetsRequest>,
    metadata?: grpc.Metadata
  ): Promise<GetPetsReply>
  BuyPet(
    request: DeepPartial<BuyPetRequest>,
    metadata?: grpc.Metadata
  ): Promise<BuyPetReply>
}

export class PetShopClientImpl implements PetShop {
  private readonly rpc: Rpc

  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.GetPets = this.GetPets.bind(this)
    this.BuyPet = this.BuyPet.bind(this)
  }

  GetPets(
    request: DeepPartial<GetPetsRequest>,
    metadata?: grpc.Metadata
  ): Promise<GetPetsReply> {
    return this.rpc.unary(
      PetShopGetPetsDesc,
      GetPetsRequest.fromPartial(request),
      metadata
    )
  }

  BuyPet(
    request: DeepPartial<BuyPetRequest>,
    metadata?: grpc.Metadata
  ): Promise<BuyPetReply> {
    return this.rpc.unary(
      PetShopBuyPetDesc,
      BuyPetRequest.fromPartial(request),
      metadata
    )
  }
}

export const PetShopDesc = { serviceName: 'shop.v1.PetShop' }

export const PetShopGetPetsDesc: UnaryMethodDefinitionish = {
  methodName: 'GetPets',
  service: PetShopDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return GetPetsRequest.encode(this).finish()
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = GetPetsReply.decode(data)
      return {
        ...value,
        toObject() {
          return value
        },
      }
    },
  } as any,
}

export const PetShopBuyPetDesc: UnaryMethodDefinitionish = {
  methodName: 'BuyPet',
  service: PetShopDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return BuyPetRequest.encode(this).finish()
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = BuyPetReply.decode(data)
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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error(
      'Value is larger than Number.MAX_SAFE_INTEGER'
    )
  }
  return long.toNumber()
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
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
