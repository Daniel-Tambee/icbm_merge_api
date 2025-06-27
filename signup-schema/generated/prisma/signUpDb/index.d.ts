
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model StudentApplication
 * 
 */
export type StudentApplication = $Result.DefaultSelection<Prisma.$StudentApplicationPayload>
/**
 * Model StudentApplicationPayment
 * 
 */
export type StudentApplicationPayment = $Result.DefaultSelection<Prisma.$StudentApplicationPaymentPayload>
/**
 * Model SocialRegister
 * 
 */
export type SocialRegister = $Result.DefaultSelection<Prisma.$SocialRegisterPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  male: 'male',
  female: 'female',
  other: 'other'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const EducationLevel: {
  none: 'none',
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  postgraduate: 'postgraduate'
};

export type EducationLevel = (typeof EducationLevel)[keyof typeof EducationLevel]


export const AreaOfStudy: {
  science: 'science',
  arts: 'arts',
  social_science: 'social_science',
  engineering: 'engineering',
  medical: 'medical',
  other: 'other'
};

export type AreaOfStudy = (typeof AreaOfStudy)[keyof typeof AreaOfStudy]


export const PreferredTrack: {
  software: 'software',
  data: 'data',
  design: 'design',
  product: 'product',
  cybersecurity_ai: 'cybersecurity_ai'
};

export type PreferredTrack = (typeof PreferredTrack)[keyof typeof PreferredTrack]


export const EmploymentStatus: {
  employed: 'employed',
  unemployed: 'unemployed',
  student: 'student'
};

export type EmploymentStatus = (typeof EmploymentStatus)[keyof typeof EmploymentStatus]


export const Availability: {
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  weekend: 'weekend'
};

export type Availability = (typeof Availability)[keyof typeof Availability]


export const NYSCStatus: {
  completed: 'completed',
  currently_serving: 'currently_serving',
  exempted: 'exempted',
  not_applicable: 'not_applicable'
};

export type NYSCStatus = (typeof NYSCStatus)[keyof typeof NYSCStatus]


export const ApplicationFeeStatus: {
  PAID: 'PAID',
  WAIVED: 'WAIVED',
  UNPAID: 'UNPAID'
};

export type ApplicationFeeStatus = (typeof ApplicationFeeStatus)[keyof typeof ApplicationFeeStatus]


export const PaymentStatus: {
  PAID: 'PAID',
  PENDING: 'PENDING',
  FAILED: 'FAILED',
  WAIVED: 'WAIVED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentMethod: {
  CARD: 'CARD',
  TRANSFER: 'TRANSFER',
  USSD: 'USSD',
  MANUAL: 'MANUAL',
  WAIVER: 'WAIVER'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type EducationLevel = $Enums.EducationLevel

export const EducationLevel: typeof $Enums.EducationLevel

export type AreaOfStudy = $Enums.AreaOfStudy

export const AreaOfStudy: typeof $Enums.AreaOfStudy

export type PreferredTrack = $Enums.PreferredTrack

export const PreferredTrack: typeof $Enums.PreferredTrack

export type EmploymentStatus = $Enums.EmploymentStatus

export const EmploymentStatus: typeof $Enums.EmploymentStatus

export type Availability = $Enums.Availability

export const Availability: typeof $Enums.Availability

export type NYSCStatus = $Enums.NYSCStatus

export const NYSCStatus: typeof $Enums.NYSCStatus

export type ApplicationFeeStatus = $Enums.ApplicationFeeStatus

export const ApplicationFeeStatus: typeof $Enums.ApplicationFeeStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more StudentApplications
 * const studentApplications = await prisma.studentApplication.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more StudentApplications
   * const studentApplications = await prisma.studentApplication.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.studentApplication`: Exposes CRUD operations for the **StudentApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentApplications
    * const studentApplications = await prisma.studentApplication.findMany()
    * ```
    */
  get studentApplication(): Prisma.StudentApplicationDelegate<ExtArgs>;

  /**
   * `prisma.studentApplicationPayment`: Exposes CRUD operations for the **StudentApplicationPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentApplicationPayments
    * const studentApplicationPayments = await prisma.studentApplicationPayment.findMany()
    * ```
    */
  get studentApplicationPayment(): Prisma.StudentApplicationPaymentDelegate<ExtArgs>;

  /**
   * `prisma.socialRegister`: Exposes CRUD operations for the **SocialRegister** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialRegisters
    * const socialRegisters = await prisma.socialRegister.findMany()
    * ```
    */
  get socialRegister(): Prisma.SocialRegisterDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.17.0
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    StudentApplication: 'StudentApplication',
    StudentApplicationPayment: 'StudentApplicationPayment',
    SocialRegister: 'SocialRegister'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "studentApplication" | "studentApplicationPayment" | "socialRegister"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      StudentApplication: {
        payload: Prisma.$StudentApplicationPayload<ExtArgs>
        fields: Prisma.StudentApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          findFirst: {
            args: Prisma.StudentApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          findMany: {
            args: Prisma.StudentApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>[]
          }
          create: {
            args: Prisma.StudentApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          createMany: {
            args: Prisma.StudentApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>[]
          }
          delete: {
            args: Prisma.StudentApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          update: {
            args: Prisma.StudentApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          deleteMany: {
            args: Prisma.StudentApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          aggregate: {
            args: Prisma.StudentApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentApplication>
          }
          groupBy: {
            args: Prisma.StudentApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<StudentApplicationCountAggregateOutputType> | number
          }
        }
      }
      StudentApplicationPayment: {
        payload: Prisma.$StudentApplicationPaymentPayload<ExtArgs>
        fields: Prisma.StudentApplicationPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentApplicationPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentApplicationPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPaymentPayload>
          }
          findFirst: {
            args: Prisma.StudentApplicationPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentApplicationPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPaymentPayload>
          }
          findMany: {
            args: Prisma.StudentApplicationPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPaymentPayload>[]
          }
          create: {
            args: Prisma.StudentApplicationPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPaymentPayload>
          }
          createMany: {
            args: Prisma.StudentApplicationPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentApplicationPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPaymentPayload>[]
          }
          delete: {
            args: Prisma.StudentApplicationPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPaymentPayload>
          }
          update: {
            args: Prisma.StudentApplicationPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPaymentPayload>
          }
          deleteMany: {
            args: Prisma.StudentApplicationPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentApplicationPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentApplicationPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPaymentPayload>
          }
          aggregate: {
            args: Prisma.StudentApplicationPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentApplicationPayment>
          }
          groupBy: {
            args: Prisma.StudentApplicationPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentApplicationPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentApplicationPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentApplicationPaymentCountAggregateOutputType> | number
          }
        }
      }
      SocialRegister: {
        payload: Prisma.$SocialRegisterPayload<ExtArgs>
        fields: Prisma.SocialRegisterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialRegisterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialRegisterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterPayload>
          }
          findFirst: {
            args: Prisma.SocialRegisterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialRegisterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterPayload>
          }
          findMany: {
            args: Prisma.SocialRegisterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterPayload>[]
          }
          create: {
            args: Prisma.SocialRegisterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterPayload>
          }
          createMany: {
            args: Prisma.SocialRegisterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialRegisterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterPayload>[]
          }
          delete: {
            args: Prisma.SocialRegisterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterPayload>
          }
          update: {
            args: Prisma.SocialRegisterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterPayload>
          }
          deleteMany: {
            args: Prisma.SocialRegisterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialRegisterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SocialRegisterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterPayload>
          }
          aggregate: {
            args: Prisma.SocialRegisterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialRegister>
          }
          groupBy: {
            args: Prisma.SocialRegisterGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialRegisterGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialRegisterCountArgs<ExtArgs>
            result: $Utils.Optional<SocialRegisterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentApplicationCountOutputType
   */

  export type StudentApplicationCountOutputType = {
    payments: number
  }

  export type StudentApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | StudentApplicationCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * StudentApplicationCountOutputType without action
   */
  export type StudentApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplicationCountOutputType
     */
    select?: StudentApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentApplicationCountOutputType without action
   */
  export type StudentApplicationCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentApplicationPaymentWhereInput
  }


  /**
   * Count Type SocialRegisterCountOutputType
   */

  export type SocialRegisterCountOutputType = {
    applicationPayments: number
  }

  export type SocialRegisterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicationPayments?: boolean | SocialRegisterCountOutputTypeCountApplicationPaymentsArgs
  }

  // Custom InputTypes
  /**
   * SocialRegisterCountOutputType without action
   */
  export type SocialRegisterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegisterCountOutputType
     */
    select?: SocialRegisterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SocialRegisterCountOutputType without action
   */
  export type SocialRegisterCountOutputTypeCountApplicationPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentApplicationPaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model StudentApplication
   */

  export type AggregateStudentApplication = {
    _count: StudentApplicationCountAggregateOutputType | null
    _avg: StudentApplicationAvgAggregateOutputType | null
    _sum: StudentApplicationSumAggregateOutputType | null
    _min: StudentApplicationMinAggregateOutputType | null
    _max: StudentApplicationMaxAggregateOutputType | null
  }

  export type StudentApplicationAvgAggregateOutputType = {
    englishReading: number | null
    englishWriting: number | null
    englishSpeaking: number | null
    typingSpeed: number | null
    zoomConfidence: number | null
    slackConfidence: number | null
    emailConfidence: number | null
    docsConfidence: number | null
    odooId: number | null
  }

  export type StudentApplicationSumAggregateOutputType = {
    englishReading: number | null
    englishWriting: number | null
    englishSpeaking: number | null
    typingSpeed: number | null
    zoomConfidence: number | null
    slackConfidence: number | null
    emailConfidence: number | null
    docsConfidence: number | null
    odooId: number | null
  }

  export type StudentApplicationMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phoneNumber: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    stateOfOrigin: string | null
    currentResidence: string | null
    educationLevel: $Enums.EducationLevel | null
    areaOfStudy: $Enums.AreaOfStudy | null
    preferredTrack: $Enums.PreferredTrack | null
    englishReading: number | null
    englishWriting: number | null
    englishSpeaking: number | null
    typingSpeed: number | null
    zoomConfidence: number | null
    slackConfidence: number | null
    emailConfidence: number | null
    docsConfidence: number | null
    needsLoan: boolean | null
    employmentStatus: $Enums.EmploymentStatus | null
    willingToRelocate: boolean | null
    hasLaptop: boolean | null
    availability: $Enums.Availability | null
    motivationEssay: string | null
    futureGoals: string | null
    willingToCommit: boolean | null
    nyscStatus: $Enums.NYSCStatus | null
    wantsMentor: boolean | null
    applicationFeeStatus: $Enums.ApplicationFeeStatus | null
    frappeId: string | null
    odooId: number | null
    socialRegisterId: string | null
    createdAt: Date | null
  }

  export type StudentApplicationMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phoneNumber: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    stateOfOrigin: string | null
    currentResidence: string | null
    educationLevel: $Enums.EducationLevel | null
    areaOfStudy: $Enums.AreaOfStudy | null
    preferredTrack: $Enums.PreferredTrack | null
    englishReading: number | null
    englishWriting: number | null
    englishSpeaking: number | null
    typingSpeed: number | null
    zoomConfidence: number | null
    slackConfidence: number | null
    emailConfidence: number | null
    docsConfidence: number | null
    needsLoan: boolean | null
    employmentStatus: $Enums.EmploymentStatus | null
    willingToRelocate: boolean | null
    hasLaptop: boolean | null
    availability: $Enums.Availability | null
    motivationEssay: string | null
    futureGoals: string | null
    willingToCommit: boolean | null
    nyscStatus: $Enums.NYSCStatus | null
    wantsMentor: boolean | null
    applicationFeeStatus: $Enums.ApplicationFeeStatus | null
    frappeId: string | null
    odooId: number | null
    socialRegisterId: string | null
    createdAt: Date | null
  }

  export type StudentApplicationCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    phoneNumber: number
    dateOfBirth: number
    gender: number
    stateOfOrigin: number
    currentResidence: number
    educationLevel: number
    areaOfStudy: number
    preferredTrack: number
    englishReading: number
    englishWriting: number
    englishSpeaking: number
    basicITSkills: number
    typingSpeed: number
    zoomConfidence: number
    slackConfidence: number
    emailConfidence: number
    docsConfidence: number
    problemSolvingAnswers: number
    needsLoan: number
    employmentStatus: number
    willingToRelocate: number
    hasLaptop: number
    availability: number
    motivationEssay: number
    futureGoals: number
    willingToCommit: number
    nyscStatus: number
    wantsMentor: number
    cybersecurityAnswers: number
    applicationFeeStatus: number
    frappeId: number
    odooId: number
    socialRegisterId: number
    createdAt: number
    _all: number
  }


  export type StudentApplicationAvgAggregateInputType = {
    englishReading?: true
    englishWriting?: true
    englishSpeaking?: true
    typingSpeed?: true
    zoomConfidence?: true
    slackConfidence?: true
    emailConfidence?: true
    docsConfidence?: true
    odooId?: true
  }

  export type StudentApplicationSumAggregateInputType = {
    englishReading?: true
    englishWriting?: true
    englishSpeaking?: true
    typingSpeed?: true
    zoomConfidence?: true
    slackConfidence?: true
    emailConfidence?: true
    docsConfidence?: true
    odooId?: true
  }

  export type StudentApplicationMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    dateOfBirth?: true
    gender?: true
    stateOfOrigin?: true
    currentResidence?: true
    educationLevel?: true
    areaOfStudy?: true
    preferredTrack?: true
    englishReading?: true
    englishWriting?: true
    englishSpeaking?: true
    typingSpeed?: true
    zoomConfidence?: true
    slackConfidence?: true
    emailConfidence?: true
    docsConfidence?: true
    needsLoan?: true
    employmentStatus?: true
    willingToRelocate?: true
    hasLaptop?: true
    availability?: true
    motivationEssay?: true
    futureGoals?: true
    willingToCommit?: true
    nyscStatus?: true
    wantsMentor?: true
    applicationFeeStatus?: true
    frappeId?: true
    odooId?: true
    socialRegisterId?: true
    createdAt?: true
  }

  export type StudentApplicationMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    dateOfBirth?: true
    gender?: true
    stateOfOrigin?: true
    currentResidence?: true
    educationLevel?: true
    areaOfStudy?: true
    preferredTrack?: true
    englishReading?: true
    englishWriting?: true
    englishSpeaking?: true
    typingSpeed?: true
    zoomConfidence?: true
    slackConfidence?: true
    emailConfidence?: true
    docsConfidence?: true
    needsLoan?: true
    employmentStatus?: true
    willingToRelocate?: true
    hasLaptop?: true
    availability?: true
    motivationEssay?: true
    futureGoals?: true
    willingToCommit?: true
    nyscStatus?: true
    wantsMentor?: true
    applicationFeeStatus?: true
    frappeId?: true
    odooId?: true
    socialRegisterId?: true
    createdAt?: true
  }

  export type StudentApplicationCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phoneNumber?: true
    dateOfBirth?: true
    gender?: true
    stateOfOrigin?: true
    currentResidence?: true
    educationLevel?: true
    areaOfStudy?: true
    preferredTrack?: true
    englishReading?: true
    englishWriting?: true
    englishSpeaking?: true
    basicITSkills?: true
    typingSpeed?: true
    zoomConfidence?: true
    slackConfidence?: true
    emailConfidence?: true
    docsConfidence?: true
    problemSolvingAnswers?: true
    needsLoan?: true
    employmentStatus?: true
    willingToRelocate?: true
    hasLaptop?: true
    availability?: true
    motivationEssay?: true
    futureGoals?: true
    willingToCommit?: true
    nyscStatus?: true
    wantsMentor?: true
    cybersecurityAnswers?: true
    applicationFeeStatus?: true
    frappeId?: true
    odooId?: true
    socialRegisterId?: true
    createdAt?: true
    _all?: true
  }

  export type StudentApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentApplication to aggregate.
     */
    where?: StudentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplications to fetch.
     */
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentApplications
    **/
    _count?: true | StudentApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentApplicationMaxAggregateInputType
  }

  export type GetStudentApplicationAggregateType<T extends StudentApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentApplication[P]>
      : GetScalarType<T[P], AggregateStudentApplication[P]>
  }




  export type StudentApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentApplicationWhereInput
    orderBy?: StudentApplicationOrderByWithAggregationInput | StudentApplicationOrderByWithAggregationInput[]
    by: StudentApplicationScalarFieldEnum[] | StudentApplicationScalarFieldEnum
    having?: StudentApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentApplicationCountAggregateInputType | true
    _avg?: StudentApplicationAvgAggregateInputType
    _sum?: StudentApplicationSumAggregateInputType
    _min?: StudentApplicationMinAggregateInputType
    _max?: StudentApplicationMaxAggregateInputType
  }

  export type StudentApplicationGroupByOutputType = {
    id: string
    fullName: string
    email: string
    phoneNumber: string
    dateOfBirth: Date
    gender: $Enums.Gender
    stateOfOrigin: string
    currentResidence: string | null
    educationLevel: $Enums.EducationLevel
    areaOfStudy: $Enums.AreaOfStudy
    preferredTrack: $Enums.PreferredTrack
    englishReading: number
    englishWriting: number
    englishSpeaking: number
    basicITSkills: string[]
    typingSpeed: number
    zoomConfidence: number
    slackConfidence: number
    emailConfidence: number
    docsConfidence: number
    problemSolvingAnswers: string[]
    needsLoan: boolean
    employmentStatus: $Enums.EmploymentStatus
    willingToRelocate: boolean
    hasLaptop: boolean
    availability: $Enums.Availability
    motivationEssay: string
    futureGoals: string
    willingToCommit: boolean
    nyscStatus: $Enums.NYSCStatus
    wantsMentor: boolean
    cybersecurityAnswers: string[]
    applicationFeeStatus: $Enums.ApplicationFeeStatus
    frappeId: string | null
    odooId: number | null
    socialRegisterId: string | null
    createdAt: Date
    _count: StudentApplicationCountAggregateOutputType | null
    _avg: StudentApplicationAvgAggregateOutputType | null
    _sum: StudentApplicationSumAggregateOutputType | null
    _min: StudentApplicationMinAggregateOutputType | null
    _max: StudentApplicationMaxAggregateOutputType | null
  }

  type GetStudentApplicationGroupByPayload<T extends StudentApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], StudentApplicationGroupByOutputType[P]>
        }
      >
    >


  export type StudentApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    stateOfOrigin?: boolean
    currentResidence?: boolean
    educationLevel?: boolean
    areaOfStudy?: boolean
    preferredTrack?: boolean
    englishReading?: boolean
    englishWriting?: boolean
    englishSpeaking?: boolean
    basicITSkills?: boolean
    typingSpeed?: boolean
    zoomConfidence?: boolean
    slackConfidence?: boolean
    emailConfidence?: boolean
    docsConfidence?: boolean
    problemSolvingAnswers?: boolean
    needsLoan?: boolean
    employmentStatus?: boolean
    willingToRelocate?: boolean
    hasLaptop?: boolean
    availability?: boolean
    motivationEssay?: boolean
    futureGoals?: boolean
    willingToCommit?: boolean
    nyscStatus?: boolean
    wantsMentor?: boolean
    cybersecurityAnswers?: boolean
    applicationFeeStatus?: boolean
    frappeId?: boolean
    odooId?: boolean
    socialRegisterId?: boolean
    createdAt?: boolean
    payments?: boolean | StudentApplication$paymentsArgs<ExtArgs>
    _count?: boolean | StudentApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentApplication"]>

  export type StudentApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    stateOfOrigin?: boolean
    currentResidence?: boolean
    educationLevel?: boolean
    areaOfStudy?: boolean
    preferredTrack?: boolean
    englishReading?: boolean
    englishWriting?: boolean
    englishSpeaking?: boolean
    basicITSkills?: boolean
    typingSpeed?: boolean
    zoomConfidence?: boolean
    slackConfidence?: boolean
    emailConfidence?: boolean
    docsConfidence?: boolean
    problemSolvingAnswers?: boolean
    needsLoan?: boolean
    employmentStatus?: boolean
    willingToRelocate?: boolean
    hasLaptop?: boolean
    availability?: boolean
    motivationEssay?: boolean
    futureGoals?: boolean
    willingToCommit?: boolean
    nyscStatus?: boolean
    wantsMentor?: boolean
    cybersecurityAnswers?: boolean
    applicationFeeStatus?: boolean
    frappeId?: boolean
    odooId?: boolean
    socialRegisterId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["studentApplication"]>

  export type StudentApplicationSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    phoneNumber?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    stateOfOrigin?: boolean
    currentResidence?: boolean
    educationLevel?: boolean
    areaOfStudy?: boolean
    preferredTrack?: boolean
    englishReading?: boolean
    englishWriting?: boolean
    englishSpeaking?: boolean
    basicITSkills?: boolean
    typingSpeed?: boolean
    zoomConfidence?: boolean
    slackConfidence?: boolean
    emailConfidence?: boolean
    docsConfidence?: boolean
    problemSolvingAnswers?: boolean
    needsLoan?: boolean
    employmentStatus?: boolean
    willingToRelocate?: boolean
    hasLaptop?: boolean
    availability?: boolean
    motivationEssay?: boolean
    futureGoals?: boolean
    willingToCommit?: boolean
    nyscStatus?: boolean
    wantsMentor?: boolean
    cybersecurityAnswers?: boolean
    applicationFeeStatus?: boolean
    frappeId?: boolean
    odooId?: boolean
    socialRegisterId?: boolean
    createdAt?: boolean
  }

  export type StudentApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | StudentApplication$paymentsArgs<ExtArgs>
    _count?: boolean | StudentApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentApplication"
    objects: {
      payments: Prisma.$StudentApplicationPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      phoneNumber: string
      dateOfBirth: Date
      gender: $Enums.Gender
      stateOfOrigin: string
      currentResidence: string | null
      educationLevel: $Enums.EducationLevel
      areaOfStudy: $Enums.AreaOfStudy
      preferredTrack: $Enums.PreferredTrack
      englishReading: number
      englishWriting: number
      englishSpeaking: number
      basicITSkills: string[]
      typingSpeed: number
      zoomConfidence: number
      slackConfidence: number
      emailConfidence: number
      docsConfidence: number
      problemSolvingAnswers: string[]
      needsLoan: boolean
      employmentStatus: $Enums.EmploymentStatus
      willingToRelocate: boolean
      hasLaptop: boolean
      availability: $Enums.Availability
      motivationEssay: string
      futureGoals: string
      willingToCommit: boolean
      nyscStatus: $Enums.NYSCStatus
      wantsMentor: boolean
      cybersecurityAnswers: string[]
      applicationFeeStatus: $Enums.ApplicationFeeStatus
      frappeId: string | null
      odooId: number | null
      socialRegisterId: string | null
      createdAt: Date
    }, ExtArgs["result"]["studentApplication"]>
    composites: {}
  }

  type StudentApplicationGetPayload<S extends boolean | null | undefined | StudentApplicationDefaultArgs> = $Result.GetResult<Prisma.$StudentApplicationPayload, S>

  type StudentApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentApplicationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentApplicationCountAggregateInputType | true
    }

  export interface StudentApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentApplication'], meta: { name: 'StudentApplication' } }
    /**
     * Find zero or one StudentApplication that matches the filter.
     * @param {StudentApplicationFindUniqueArgs} args - Arguments to find a StudentApplication
     * @example
     * // Get one StudentApplication
     * const studentApplication = await prisma.studentApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentApplicationFindUniqueArgs>(args: SelectSubset<T, StudentApplicationFindUniqueArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StudentApplication that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StudentApplicationFindUniqueOrThrowArgs} args - Arguments to find a StudentApplication
     * @example
     * // Get one StudentApplication
     * const studentApplication = await prisma.studentApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StudentApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationFindFirstArgs} args - Arguments to find a StudentApplication
     * @example
     * // Get one StudentApplication
     * const studentApplication = await prisma.studentApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentApplicationFindFirstArgs>(args?: SelectSubset<T, StudentApplicationFindFirstArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StudentApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationFindFirstOrThrowArgs} args - Arguments to find a StudentApplication
     * @example
     * // Get one StudentApplication
     * const studentApplication = await prisma.studentApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StudentApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentApplications
     * const studentApplications = await prisma.studentApplication.findMany()
     * 
     * // Get first 10 StudentApplications
     * const studentApplications = await prisma.studentApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentApplicationWithIdOnly = await prisma.studentApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentApplicationFindManyArgs>(args?: SelectSubset<T, StudentApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StudentApplication.
     * @param {StudentApplicationCreateArgs} args - Arguments to create a StudentApplication.
     * @example
     * // Create one StudentApplication
     * const StudentApplication = await prisma.studentApplication.create({
     *   data: {
     *     // ... data to create a StudentApplication
     *   }
     * })
     * 
     */
    create<T extends StudentApplicationCreateArgs>(args: SelectSubset<T, StudentApplicationCreateArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StudentApplications.
     * @param {StudentApplicationCreateManyArgs} args - Arguments to create many StudentApplications.
     * @example
     * // Create many StudentApplications
     * const studentApplication = await prisma.studentApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentApplicationCreateManyArgs>(args?: SelectSubset<T, StudentApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentApplications and returns the data saved in the database.
     * @param {StudentApplicationCreateManyAndReturnArgs} args - Arguments to create many StudentApplications.
     * @example
     * // Create many StudentApplications
     * const studentApplication = await prisma.studentApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentApplications and only return the `id`
     * const studentApplicationWithIdOnly = await prisma.studentApplication.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StudentApplication.
     * @param {StudentApplicationDeleteArgs} args - Arguments to delete one StudentApplication.
     * @example
     * // Delete one StudentApplication
     * const StudentApplication = await prisma.studentApplication.delete({
     *   where: {
     *     // ... filter to delete one StudentApplication
     *   }
     * })
     * 
     */
    delete<T extends StudentApplicationDeleteArgs>(args: SelectSubset<T, StudentApplicationDeleteArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StudentApplication.
     * @param {StudentApplicationUpdateArgs} args - Arguments to update one StudentApplication.
     * @example
     * // Update one StudentApplication
     * const studentApplication = await prisma.studentApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentApplicationUpdateArgs>(args: SelectSubset<T, StudentApplicationUpdateArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StudentApplications.
     * @param {StudentApplicationDeleteManyArgs} args - Arguments to filter StudentApplications to delete.
     * @example
     * // Delete a few StudentApplications
     * const { count } = await prisma.studentApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentApplicationDeleteManyArgs>(args?: SelectSubset<T, StudentApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentApplications
     * const studentApplication = await prisma.studentApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentApplicationUpdateManyArgs>(args: SelectSubset<T, StudentApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentApplication.
     * @param {StudentApplicationUpsertArgs} args - Arguments to update or create a StudentApplication.
     * @example
     * // Update or create a StudentApplication
     * const studentApplication = await prisma.studentApplication.upsert({
     *   create: {
     *     // ... data to create a StudentApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentApplication we want to update
     *   }
     * })
     */
    upsert<T extends StudentApplicationUpsertArgs>(args: SelectSubset<T, StudentApplicationUpsertArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StudentApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationCountArgs} args - Arguments to filter StudentApplications to count.
     * @example
     * // Count the number of StudentApplications
     * const count = await prisma.studentApplication.count({
     *   where: {
     *     // ... the filter for the StudentApplications we want to count
     *   }
     * })
    **/
    count<T extends StudentApplicationCountArgs>(
      args?: Subset<T, StudentApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentApplicationAggregateArgs>(args: Subset<T, StudentApplicationAggregateArgs>): Prisma.PrismaPromise<GetStudentApplicationAggregateType<T>>

    /**
     * Group by StudentApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentApplicationGroupByArgs['orderBy'] }
        : { orderBy?: StudentApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentApplication model
   */
  readonly fields: StudentApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends StudentApplication$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplication$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentApplicationPaymentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentApplication model
   */ 
  interface StudentApplicationFieldRefs {
    readonly id: FieldRef<"StudentApplication", 'String'>
    readonly fullName: FieldRef<"StudentApplication", 'String'>
    readonly email: FieldRef<"StudentApplication", 'String'>
    readonly phoneNumber: FieldRef<"StudentApplication", 'String'>
    readonly dateOfBirth: FieldRef<"StudentApplication", 'DateTime'>
    readonly gender: FieldRef<"StudentApplication", 'Gender'>
    readonly stateOfOrigin: FieldRef<"StudentApplication", 'String'>
    readonly currentResidence: FieldRef<"StudentApplication", 'String'>
    readonly educationLevel: FieldRef<"StudentApplication", 'EducationLevel'>
    readonly areaOfStudy: FieldRef<"StudentApplication", 'AreaOfStudy'>
    readonly preferredTrack: FieldRef<"StudentApplication", 'PreferredTrack'>
    readonly englishReading: FieldRef<"StudentApplication", 'Int'>
    readonly englishWriting: FieldRef<"StudentApplication", 'Int'>
    readonly englishSpeaking: FieldRef<"StudentApplication", 'Int'>
    readonly basicITSkills: FieldRef<"StudentApplication", 'String[]'>
    readonly typingSpeed: FieldRef<"StudentApplication", 'Int'>
    readonly zoomConfidence: FieldRef<"StudentApplication", 'Int'>
    readonly slackConfidence: FieldRef<"StudentApplication", 'Int'>
    readonly emailConfidence: FieldRef<"StudentApplication", 'Int'>
    readonly docsConfidence: FieldRef<"StudentApplication", 'Int'>
    readonly problemSolvingAnswers: FieldRef<"StudentApplication", 'String[]'>
    readonly needsLoan: FieldRef<"StudentApplication", 'Boolean'>
    readonly employmentStatus: FieldRef<"StudentApplication", 'EmploymentStatus'>
    readonly willingToRelocate: FieldRef<"StudentApplication", 'Boolean'>
    readonly hasLaptop: FieldRef<"StudentApplication", 'Boolean'>
    readonly availability: FieldRef<"StudentApplication", 'Availability'>
    readonly motivationEssay: FieldRef<"StudentApplication", 'String'>
    readonly futureGoals: FieldRef<"StudentApplication", 'String'>
    readonly willingToCommit: FieldRef<"StudentApplication", 'Boolean'>
    readonly nyscStatus: FieldRef<"StudentApplication", 'NYSCStatus'>
    readonly wantsMentor: FieldRef<"StudentApplication", 'Boolean'>
    readonly cybersecurityAnswers: FieldRef<"StudentApplication", 'String[]'>
    readonly applicationFeeStatus: FieldRef<"StudentApplication", 'ApplicationFeeStatus'>
    readonly frappeId: FieldRef<"StudentApplication", 'String'>
    readonly odooId: FieldRef<"StudentApplication", 'Int'>
    readonly socialRegisterId: FieldRef<"StudentApplication", 'String'>
    readonly createdAt: FieldRef<"StudentApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentApplication findUnique
   */
  export type StudentApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplication to fetch.
     */
    where: StudentApplicationWhereUniqueInput
  }

  /**
   * StudentApplication findUniqueOrThrow
   */
  export type StudentApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplication to fetch.
     */
    where: StudentApplicationWhereUniqueInput
  }

  /**
   * StudentApplication findFirst
   */
  export type StudentApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplication to fetch.
     */
    where?: StudentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplications to fetch.
     */
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentApplications.
     */
    cursor?: StudentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentApplications.
     */
    distinct?: StudentApplicationScalarFieldEnum | StudentApplicationScalarFieldEnum[]
  }

  /**
   * StudentApplication findFirstOrThrow
   */
  export type StudentApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplication to fetch.
     */
    where?: StudentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplications to fetch.
     */
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentApplications.
     */
    cursor?: StudentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentApplications.
     */
    distinct?: StudentApplicationScalarFieldEnum | StudentApplicationScalarFieldEnum[]
  }

  /**
   * StudentApplication findMany
   */
  export type StudentApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplications to fetch.
     */
    where?: StudentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplications to fetch.
     */
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentApplications.
     */
    cursor?: StudentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplications.
     */
    skip?: number
    distinct?: StudentApplicationScalarFieldEnum | StudentApplicationScalarFieldEnum[]
  }

  /**
   * StudentApplication create
   */
  export type StudentApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentApplication.
     */
    data: XOR<StudentApplicationCreateInput, StudentApplicationUncheckedCreateInput>
  }

  /**
   * StudentApplication createMany
   */
  export type StudentApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentApplications.
     */
    data: StudentApplicationCreateManyInput | StudentApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentApplication createManyAndReturn
   */
  export type StudentApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StudentApplications.
     */
    data: StudentApplicationCreateManyInput | StudentApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentApplication update
   */
  export type StudentApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentApplication.
     */
    data: XOR<StudentApplicationUpdateInput, StudentApplicationUncheckedUpdateInput>
    /**
     * Choose, which StudentApplication to update.
     */
    where: StudentApplicationWhereUniqueInput
  }

  /**
   * StudentApplication updateMany
   */
  export type StudentApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentApplications.
     */
    data: XOR<StudentApplicationUpdateManyMutationInput, StudentApplicationUncheckedUpdateManyInput>
    /**
     * Filter which StudentApplications to update
     */
    where?: StudentApplicationWhereInput
  }

  /**
   * StudentApplication upsert
   */
  export type StudentApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentApplication to update in case it exists.
     */
    where: StudentApplicationWhereUniqueInput
    /**
     * In case the StudentApplication found by the `where` argument doesn't exist, create a new StudentApplication with this data.
     */
    create: XOR<StudentApplicationCreateInput, StudentApplicationUncheckedCreateInput>
    /**
     * In case the StudentApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentApplicationUpdateInput, StudentApplicationUncheckedUpdateInput>
  }

  /**
   * StudentApplication delete
   */
  export type StudentApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter which StudentApplication to delete.
     */
    where: StudentApplicationWhereUniqueInput
  }

  /**
   * StudentApplication deleteMany
   */
  export type StudentApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentApplications to delete
     */
    where?: StudentApplicationWhereInput
  }

  /**
   * StudentApplication.payments
   */
  export type StudentApplication$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplicationPayment
     */
    select?: StudentApplicationPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationPaymentInclude<ExtArgs> | null
    where?: StudentApplicationPaymentWhereInput
    orderBy?: StudentApplicationPaymentOrderByWithRelationInput | StudentApplicationPaymentOrderByWithRelationInput[]
    cursor?: StudentApplicationPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentApplicationPaymentScalarFieldEnum | StudentApplicationPaymentScalarFieldEnum[]
  }

  /**
   * StudentApplication without action
   */
  export type StudentApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
  }


  /**
   * Model StudentApplicationPayment
   */

  export type AggregateStudentApplicationPayment = {
    _count: StudentApplicationPaymentCountAggregateOutputType | null
    _avg: StudentApplicationPaymentAvgAggregateOutputType | null
    _sum: StudentApplicationPaymentSumAggregateOutputType | null
    _min: StudentApplicationPaymentMinAggregateOutputType | null
    _max: StudentApplicationPaymentMaxAggregateOutputType | null
  }

  export type StudentApplicationPaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type StudentApplicationPaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type StudentApplicationPaymentMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    amount: number | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    method: $Enums.PaymentMethod | null
    reference: string | null
    socialRegisterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentApplicationPaymentMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    amount: number | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    method: $Enums.PaymentMethod | null
    reference: string | null
    socialRegisterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentApplicationPaymentCountAggregateOutputType = {
    id: number
    applicationId: number
    amount: number
    currency: number
    status: number
    method: number
    reference: number
    socialRegisterId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentApplicationPaymentAvgAggregateInputType = {
    amount?: true
  }

  export type StudentApplicationPaymentSumAggregateInputType = {
    amount?: true
  }

  export type StudentApplicationPaymentMinAggregateInputType = {
    id?: true
    applicationId?: true
    amount?: true
    currency?: true
    status?: true
    method?: true
    reference?: true
    socialRegisterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentApplicationPaymentMaxAggregateInputType = {
    id?: true
    applicationId?: true
    amount?: true
    currency?: true
    status?: true
    method?: true
    reference?: true
    socialRegisterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentApplicationPaymentCountAggregateInputType = {
    id?: true
    applicationId?: true
    amount?: true
    currency?: true
    status?: true
    method?: true
    reference?: true
    socialRegisterId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentApplicationPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentApplicationPayment to aggregate.
     */
    where?: StudentApplicationPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplicationPayments to fetch.
     */
    orderBy?: StudentApplicationPaymentOrderByWithRelationInput | StudentApplicationPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentApplicationPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplicationPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplicationPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentApplicationPayments
    **/
    _count?: true | StudentApplicationPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentApplicationPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentApplicationPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentApplicationPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentApplicationPaymentMaxAggregateInputType
  }

  export type GetStudentApplicationPaymentAggregateType<T extends StudentApplicationPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentApplicationPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentApplicationPayment[P]>
      : GetScalarType<T[P], AggregateStudentApplicationPayment[P]>
  }




  export type StudentApplicationPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentApplicationPaymentWhereInput
    orderBy?: StudentApplicationPaymentOrderByWithAggregationInput | StudentApplicationPaymentOrderByWithAggregationInput[]
    by: StudentApplicationPaymentScalarFieldEnum[] | StudentApplicationPaymentScalarFieldEnum
    having?: StudentApplicationPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentApplicationPaymentCountAggregateInputType | true
    _avg?: StudentApplicationPaymentAvgAggregateInputType
    _sum?: StudentApplicationPaymentSumAggregateInputType
    _min?: StudentApplicationPaymentMinAggregateInputType
    _max?: StudentApplicationPaymentMaxAggregateInputType
  }

  export type StudentApplicationPaymentGroupByOutputType = {
    id: string
    applicationId: string
    amount: number
    currency: string
    status: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    reference: string | null
    socialRegisterId: string | null
    createdAt: Date
    updatedAt: Date
    _count: StudentApplicationPaymentCountAggregateOutputType | null
    _avg: StudentApplicationPaymentAvgAggregateOutputType | null
    _sum: StudentApplicationPaymentSumAggregateOutputType | null
    _min: StudentApplicationPaymentMinAggregateOutputType | null
    _max: StudentApplicationPaymentMaxAggregateOutputType | null
  }

  type GetStudentApplicationPaymentGroupByPayload<T extends StudentApplicationPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentApplicationPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentApplicationPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentApplicationPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentApplicationPaymentGroupByOutputType[P]>
        }
      >
    >


  export type StudentApplicationPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    reference?: boolean
    socialRegisterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    socialRegister?: boolean | StudentApplicationPayment$socialRegisterArgs<ExtArgs>
  }, ExtArgs["result"]["studentApplicationPayment"]>

  export type StudentApplicationPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    reference?: boolean
    socialRegisterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    socialRegister?: boolean | StudentApplicationPayment$socialRegisterArgs<ExtArgs>
  }, ExtArgs["result"]["studentApplicationPayment"]>

  export type StudentApplicationPaymentSelectScalar = {
    id?: boolean
    applicationId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    reference?: boolean
    socialRegisterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentApplicationPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    socialRegister?: boolean | StudentApplicationPayment$socialRegisterArgs<ExtArgs>
  }
  export type StudentApplicationPaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    socialRegister?: boolean | StudentApplicationPayment$socialRegisterArgs<ExtArgs>
  }

  export type $StudentApplicationPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentApplicationPayment"
    objects: {
      application: Prisma.$StudentApplicationPayload<ExtArgs>
      socialRegister: Prisma.$SocialRegisterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      amount: number
      currency: string
      status: $Enums.PaymentStatus
      method: $Enums.PaymentMethod
      reference: string | null
      socialRegisterId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentApplicationPayment"]>
    composites: {}
  }

  type StudentApplicationPaymentGetPayload<S extends boolean | null | undefined | StudentApplicationPaymentDefaultArgs> = $Result.GetResult<Prisma.$StudentApplicationPaymentPayload, S>

  type StudentApplicationPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentApplicationPaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentApplicationPaymentCountAggregateInputType | true
    }

  export interface StudentApplicationPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentApplicationPayment'], meta: { name: 'StudentApplicationPayment' } }
    /**
     * Find zero or one StudentApplicationPayment that matches the filter.
     * @param {StudentApplicationPaymentFindUniqueArgs} args - Arguments to find a StudentApplicationPayment
     * @example
     * // Get one StudentApplicationPayment
     * const studentApplicationPayment = await prisma.studentApplicationPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentApplicationPaymentFindUniqueArgs>(args: SelectSubset<T, StudentApplicationPaymentFindUniqueArgs<ExtArgs>>): Prisma__StudentApplicationPaymentClient<$Result.GetResult<Prisma.$StudentApplicationPaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StudentApplicationPayment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StudentApplicationPaymentFindUniqueOrThrowArgs} args - Arguments to find a StudentApplicationPayment
     * @example
     * // Get one StudentApplicationPayment
     * const studentApplicationPayment = await prisma.studentApplicationPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentApplicationPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentApplicationPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentApplicationPaymentClient<$Result.GetResult<Prisma.$StudentApplicationPaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StudentApplicationPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationPaymentFindFirstArgs} args - Arguments to find a StudentApplicationPayment
     * @example
     * // Get one StudentApplicationPayment
     * const studentApplicationPayment = await prisma.studentApplicationPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentApplicationPaymentFindFirstArgs>(args?: SelectSubset<T, StudentApplicationPaymentFindFirstArgs<ExtArgs>>): Prisma__StudentApplicationPaymentClient<$Result.GetResult<Prisma.$StudentApplicationPaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StudentApplicationPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationPaymentFindFirstOrThrowArgs} args - Arguments to find a StudentApplicationPayment
     * @example
     * // Get one StudentApplicationPayment
     * const studentApplicationPayment = await prisma.studentApplicationPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentApplicationPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentApplicationPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentApplicationPaymentClient<$Result.GetResult<Prisma.$StudentApplicationPaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StudentApplicationPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentApplicationPayments
     * const studentApplicationPayments = await prisma.studentApplicationPayment.findMany()
     * 
     * // Get first 10 StudentApplicationPayments
     * const studentApplicationPayments = await prisma.studentApplicationPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentApplicationPaymentWithIdOnly = await prisma.studentApplicationPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentApplicationPaymentFindManyArgs>(args?: SelectSubset<T, StudentApplicationPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentApplicationPaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StudentApplicationPayment.
     * @param {StudentApplicationPaymentCreateArgs} args - Arguments to create a StudentApplicationPayment.
     * @example
     * // Create one StudentApplicationPayment
     * const StudentApplicationPayment = await prisma.studentApplicationPayment.create({
     *   data: {
     *     // ... data to create a StudentApplicationPayment
     *   }
     * })
     * 
     */
    create<T extends StudentApplicationPaymentCreateArgs>(args: SelectSubset<T, StudentApplicationPaymentCreateArgs<ExtArgs>>): Prisma__StudentApplicationPaymentClient<$Result.GetResult<Prisma.$StudentApplicationPaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StudentApplicationPayments.
     * @param {StudentApplicationPaymentCreateManyArgs} args - Arguments to create many StudentApplicationPayments.
     * @example
     * // Create many StudentApplicationPayments
     * const studentApplicationPayment = await prisma.studentApplicationPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentApplicationPaymentCreateManyArgs>(args?: SelectSubset<T, StudentApplicationPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentApplicationPayments and returns the data saved in the database.
     * @param {StudentApplicationPaymentCreateManyAndReturnArgs} args - Arguments to create many StudentApplicationPayments.
     * @example
     * // Create many StudentApplicationPayments
     * const studentApplicationPayment = await prisma.studentApplicationPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentApplicationPayments and only return the `id`
     * const studentApplicationPaymentWithIdOnly = await prisma.studentApplicationPayment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentApplicationPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentApplicationPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentApplicationPaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StudentApplicationPayment.
     * @param {StudentApplicationPaymentDeleteArgs} args - Arguments to delete one StudentApplicationPayment.
     * @example
     * // Delete one StudentApplicationPayment
     * const StudentApplicationPayment = await prisma.studentApplicationPayment.delete({
     *   where: {
     *     // ... filter to delete one StudentApplicationPayment
     *   }
     * })
     * 
     */
    delete<T extends StudentApplicationPaymentDeleteArgs>(args: SelectSubset<T, StudentApplicationPaymentDeleteArgs<ExtArgs>>): Prisma__StudentApplicationPaymentClient<$Result.GetResult<Prisma.$StudentApplicationPaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StudentApplicationPayment.
     * @param {StudentApplicationPaymentUpdateArgs} args - Arguments to update one StudentApplicationPayment.
     * @example
     * // Update one StudentApplicationPayment
     * const studentApplicationPayment = await prisma.studentApplicationPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentApplicationPaymentUpdateArgs>(args: SelectSubset<T, StudentApplicationPaymentUpdateArgs<ExtArgs>>): Prisma__StudentApplicationPaymentClient<$Result.GetResult<Prisma.$StudentApplicationPaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StudentApplicationPayments.
     * @param {StudentApplicationPaymentDeleteManyArgs} args - Arguments to filter StudentApplicationPayments to delete.
     * @example
     * // Delete a few StudentApplicationPayments
     * const { count } = await prisma.studentApplicationPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentApplicationPaymentDeleteManyArgs>(args?: SelectSubset<T, StudentApplicationPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentApplicationPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentApplicationPayments
     * const studentApplicationPayment = await prisma.studentApplicationPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentApplicationPaymentUpdateManyArgs>(args: SelectSubset<T, StudentApplicationPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentApplicationPayment.
     * @param {StudentApplicationPaymentUpsertArgs} args - Arguments to update or create a StudentApplicationPayment.
     * @example
     * // Update or create a StudentApplicationPayment
     * const studentApplicationPayment = await prisma.studentApplicationPayment.upsert({
     *   create: {
     *     // ... data to create a StudentApplicationPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentApplicationPayment we want to update
     *   }
     * })
     */
    upsert<T extends StudentApplicationPaymentUpsertArgs>(args: SelectSubset<T, StudentApplicationPaymentUpsertArgs<ExtArgs>>): Prisma__StudentApplicationPaymentClient<$Result.GetResult<Prisma.$StudentApplicationPaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StudentApplicationPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationPaymentCountArgs} args - Arguments to filter StudentApplicationPayments to count.
     * @example
     * // Count the number of StudentApplicationPayments
     * const count = await prisma.studentApplicationPayment.count({
     *   where: {
     *     // ... the filter for the StudentApplicationPayments we want to count
     *   }
     * })
    **/
    count<T extends StudentApplicationPaymentCountArgs>(
      args?: Subset<T, StudentApplicationPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentApplicationPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentApplicationPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentApplicationPaymentAggregateArgs>(args: Subset<T, StudentApplicationPaymentAggregateArgs>): Prisma.PrismaPromise<GetStudentApplicationPaymentAggregateType<T>>

    /**
     * Group by StudentApplicationPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationPaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentApplicationPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentApplicationPaymentGroupByArgs['orderBy'] }
        : { orderBy?: StudentApplicationPaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentApplicationPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentApplicationPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentApplicationPayment model
   */
  readonly fields: StudentApplicationPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentApplicationPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentApplicationPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends StudentApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplicationDefaultArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    socialRegister<T extends StudentApplicationPayment$socialRegisterArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplicationPayment$socialRegisterArgs<ExtArgs>>): Prisma__SocialRegisterClient<$Result.GetResult<Prisma.$SocialRegisterPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentApplicationPayment model
   */ 
  interface StudentApplicationPaymentFieldRefs {
    readonly id: FieldRef<"StudentApplicationPayment", 'String'>
    readonly applicationId: FieldRef<"StudentApplicationPayment", 'String'>
    readonly amount: FieldRef<"StudentApplicationPayment", 'Float'>
    readonly currency: FieldRef<"StudentApplicationPayment", 'String'>
    readonly status: FieldRef<"StudentApplicationPayment", 'PaymentStatus'>
    readonly method: FieldRef<"StudentApplicationPayment", 'PaymentMethod'>
    readonly reference: FieldRef<"StudentApplicationPayment", 'String'>
    readonly socialRegisterId: FieldRef<"StudentApplicationPayment", 'String'>
    readonly createdAt: FieldRef<"StudentApplicationPayment", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentApplicationPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentApplicationPayment findUnique
   */
  export type StudentApplicationPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplicationPayment
     */
    select?: StudentApplicationPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationPaymentInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplicationPayment to fetch.
     */
    where: StudentApplicationPaymentWhereUniqueInput
  }

  /**
   * StudentApplicationPayment findUniqueOrThrow
   */
  export type StudentApplicationPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplicationPayment
     */
    select?: StudentApplicationPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationPaymentInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplicationPayment to fetch.
     */
    where: StudentApplicationPaymentWhereUniqueInput
  }

  /**
   * StudentApplicationPayment findFirst
   */
  export type StudentApplicationPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplicationPayment
     */
    select?: StudentApplicationPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationPaymentInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplicationPayment to fetch.
     */
    where?: StudentApplicationPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplicationPayments to fetch.
     */
    orderBy?: StudentApplicationPaymentOrderByWithRelationInput | StudentApplicationPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentApplicationPayments.
     */
    cursor?: StudentApplicationPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplicationPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplicationPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentApplicationPayments.
     */
    distinct?: StudentApplicationPaymentScalarFieldEnum | StudentApplicationPaymentScalarFieldEnum[]
  }

  /**
   * StudentApplicationPayment findFirstOrThrow
   */
  export type StudentApplicationPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplicationPayment
     */
    select?: StudentApplicationPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationPaymentInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplicationPayment to fetch.
     */
    where?: StudentApplicationPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplicationPayments to fetch.
     */
    orderBy?: StudentApplicationPaymentOrderByWithRelationInput | StudentApplicationPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentApplicationPayments.
     */
    cursor?: StudentApplicationPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplicationPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplicationPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentApplicationPayments.
     */
    distinct?: StudentApplicationPaymentScalarFieldEnum | StudentApplicationPaymentScalarFieldEnum[]
  }

  /**
   * StudentApplicationPayment findMany
   */
  export type StudentApplicationPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplicationPayment
     */
    select?: StudentApplicationPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationPaymentInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplicationPayments to fetch.
     */
    where?: StudentApplicationPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplicationPayments to fetch.
     */
    orderBy?: StudentApplicationPaymentOrderByWithRelationInput | StudentApplicationPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentApplicationPayments.
     */
    cursor?: StudentApplicationPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplicationPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplicationPayments.
     */
    skip?: number
    distinct?: StudentApplicationPaymentScalarFieldEnum | StudentApplicationPaymentScalarFieldEnum[]
  }

  /**
   * StudentApplicationPayment create
   */
  export type StudentApplicationPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplicationPayment
     */
    select?: StudentApplicationPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentApplicationPayment.
     */
    data: XOR<StudentApplicationPaymentCreateInput, StudentApplicationPaymentUncheckedCreateInput>
  }

  /**
   * StudentApplicationPayment createMany
   */
  export type StudentApplicationPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentApplicationPayments.
     */
    data: StudentApplicationPaymentCreateManyInput | StudentApplicationPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentApplicationPayment createManyAndReturn
   */
  export type StudentApplicationPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplicationPayment
     */
    select?: StudentApplicationPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StudentApplicationPayments.
     */
    data: StudentApplicationPaymentCreateManyInput | StudentApplicationPaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationPaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentApplicationPayment update
   */
  export type StudentApplicationPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplicationPayment
     */
    select?: StudentApplicationPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentApplicationPayment.
     */
    data: XOR<StudentApplicationPaymentUpdateInput, StudentApplicationPaymentUncheckedUpdateInput>
    /**
     * Choose, which StudentApplicationPayment to update.
     */
    where: StudentApplicationPaymentWhereUniqueInput
  }

  /**
   * StudentApplicationPayment updateMany
   */
  export type StudentApplicationPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentApplicationPayments.
     */
    data: XOR<StudentApplicationPaymentUpdateManyMutationInput, StudentApplicationPaymentUncheckedUpdateManyInput>
    /**
     * Filter which StudentApplicationPayments to update
     */
    where?: StudentApplicationPaymentWhereInput
  }

  /**
   * StudentApplicationPayment upsert
   */
  export type StudentApplicationPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplicationPayment
     */
    select?: StudentApplicationPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentApplicationPayment to update in case it exists.
     */
    where: StudentApplicationPaymentWhereUniqueInput
    /**
     * In case the StudentApplicationPayment found by the `where` argument doesn't exist, create a new StudentApplicationPayment with this data.
     */
    create: XOR<StudentApplicationPaymentCreateInput, StudentApplicationPaymentUncheckedCreateInput>
    /**
     * In case the StudentApplicationPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentApplicationPaymentUpdateInput, StudentApplicationPaymentUncheckedUpdateInput>
  }

  /**
   * StudentApplicationPayment delete
   */
  export type StudentApplicationPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplicationPayment
     */
    select?: StudentApplicationPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationPaymentInclude<ExtArgs> | null
    /**
     * Filter which StudentApplicationPayment to delete.
     */
    where: StudentApplicationPaymentWhereUniqueInput
  }

  /**
   * StudentApplicationPayment deleteMany
   */
  export type StudentApplicationPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentApplicationPayments to delete
     */
    where?: StudentApplicationPaymentWhereInput
  }

  /**
   * StudentApplicationPayment.socialRegister
   */
  export type StudentApplicationPayment$socialRegisterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegister
     */
    select?: SocialRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterInclude<ExtArgs> | null
    where?: SocialRegisterWhereInput
  }

  /**
   * StudentApplicationPayment without action
   */
  export type StudentApplicationPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplicationPayment
     */
    select?: StudentApplicationPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationPaymentInclude<ExtArgs> | null
  }


  /**
   * Model SocialRegister
   */

  export type AggregateSocialRegister = {
    _count: SocialRegisterCountAggregateOutputType | null
    _avg: SocialRegisterAvgAggregateOutputType | null
    _sum: SocialRegisterSumAggregateOutputType | null
    _min: SocialRegisterMinAggregateOutputType | null
    _max: SocialRegisterMaxAggregateOutputType | null
  }

  export type SocialRegisterAvgAggregateOutputType = {
    age: number | null
  }

  export type SocialRegisterSumAggregateOutputType = {
    age: number | null
  }

  export type SocialRegisterMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    nationalId: string | null
    lga: string | null
    state: string | null
    gender: $Enums.Gender | null
    age: number | null
    email: string | null
    phone: string | null
  }

  export type SocialRegisterMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    nationalId: string | null
    lga: string | null
    state: string | null
    gender: $Enums.Gender | null
    age: number | null
    email: string | null
    phone: string | null
  }

  export type SocialRegisterCountAggregateOutputType = {
    id: number
    fullName: number
    nationalId: number
    lga: number
    state: number
    gender: number
    age: number
    email: number
    phone: number
    _all: number
  }


  export type SocialRegisterAvgAggregateInputType = {
    age?: true
  }

  export type SocialRegisterSumAggregateInputType = {
    age?: true
  }

  export type SocialRegisterMinAggregateInputType = {
    id?: true
    fullName?: true
    nationalId?: true
    lga?: true
    state?: true
    gender?: true
    age?: true
    email?: true
    phone?: true
  }

  export type SocialRegisterMaxAggregateInputType = {
    id?: true
    fullName?: true
    nationalId?: true
    lga?: true
    state?: true
    gender?: true
    age?: true
    email?: true
    phone?: true
  }

  export type SocialRegisterCountAggregateInputType = {
    id?: true
    fullName?: true
    nationalId?: true
    lga?: true
    state?: true
    gender?: true
    age?: true
    email?: true
    phone?: true
    _all?: true
  }

  export type SocialRegisterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialRegister to aggregate.
     */
    where?: SocialRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialRegisters to fetch.
     */
    orderBy?: SocialRegisterOrderByWithRelationInput | SocialRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialRegisters
    **/
    _count?: true | SocialRegisterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialRegisterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialRegisterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialRegisterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialRegisterMaxAggregateInputType
  }

  export type GetSocialRegisterAggregateType<T extends SocialRegisterAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialRegister]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialRegister[P]>
      : GetScalarType<T[P], AggregateSocialRegister[P]>
  }




  export type SocialRegisterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialRegisterWhereInput
    orderBy?: SocialRegisterOrderByWithAggregationInput | SocialRegisterOrderByWithAggregationInput[]
    by: SocialRegisterScalarFieldEnum[] | SocialRegisterScalarFieldEnum
    having?: SocialRegisterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialRegisterCountAggregateInputType | true
    _avg?: SocialRegisterAvgAggregateInputType
    _sum?: SocialRegisterSumAggregateInputType
    _min?: SocialRegisterMinAggregateInputType
    _max?: SocialRegisterMaxAggregateInputType
  }

  export type SocialRegisterGroupByOutputType = {
    id: string
    fullName: string
    nationalId: string
    lga: string
    state: string
    gender: $Enums.Gender
    age: number
    email: string | null
    phone: string | null
    _count: SocialRegisterCountAggregateOutputType | null
    _avg: SocialRegisterAvgAggregateOutputType | null
    _sum: SocialRegisterSumAggregateOutputType | null
    _min: SocialRegisterMinAggregateOutputType | null
    _max: SocialRegisterMaxAggregateOutputType | null
  }

  type GetSocialRegisterGroupByPayload<T extends SocialRegisterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialRegisterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialRegisterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialRegisterGroupByOutputType[P]>
            : GetScalarType<T[P], SocialRegisterGroupByOutputType[P]>
        }
      >
    >


  export type SocialRegisterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    nationalId?: boolean
    lga?: boolean
    state?: boolean
    gender?: boolean
    age?: boolean
    email?: boolean
    phone?: boolean
    applicationPayments?: boolean | SocialRegister$applicationPaymentsArgs<ExtArgs>
    _count?: boolean | SocialRegisterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialRegister"]>

  export type SocialRegisterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    nationalId?: boolean
    lga?: boolean
    state?: boolean
    gender?: boolean
    age?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["socialRegister"]>

  export type SocialRegisterSelectScalar = {
    id?: boolean
    fullName?: boolean
    nationalId?: boolean
    lga?: boolean
    state?: boolean
    gender?: boolean
    age?: boolean
    email?: boolean
    phone?: boolean
  }

  export type SocialRegisterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicationPayments?: boolean | SocialRegister$applicationPaymentsArgs<ExtArgs>
    _count?: boolean | SocialRegisterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SocialRegisterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SocialRegisterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialRegister"
    objects: {
      applicationPayments: Prisma.$StudentApplicationPaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      nationalId: string
      lga: string
      state: string
      gender: $Enums.Gender
      age: number
      email: string | null
      phone: string | null
    }, ExtArgs["result"]["socialRegister"]>
    composites: {}
  }

  type SocialRegisterGetPayload<S extends boolean | null | undefined | SocialRegisterDefaultArgs> = $Result.GetResult<Prisma.$SocialRegisterPayload, S>

  type SocialRegisterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SocialRegisterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SocialRegisterCountAggregateInputType | true
    }

  export interface SocialRegisterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialRegister'], meta: { name: 'SocialRegister' } }
    /**
     * Find zero or one SocialRegister that matches the filter.
     * @param {SocialRegisterFindUniqueArgs} args - Arguments to find a SocialRegister
     * @example
     * // Get one SocialRegister
     * const socialRegister = await prisma.socialRegister.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialRegisterFindUniqueArgs>(args: SelectSubset<T, SocialRegisterFindUniqueArgs<ExtArgs>>): Prisma__SocialRegisterClient<$Result.GetResult<Prisma.$SocialRegisterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SocialRegister that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SocialRegisterFindUniqueOrThrowArgs} args - Arguments to find a SocialRegister
     * @example
     * // Get one SocialRegister
     * const socialRegister = await prisma.socialRegister.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialRegisterFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialRegisterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialRegisterClient<$Result.GetResult<Prisma.$SocialRegisterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SocialRegister that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialRegisterFindFirstArgs} args - Arguments to find a SocialRegister
     * @example
     * // Get one SocialRegister
     * const socialRegister = await prisma.socialRegister.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialRegisterFindFirstArgs>(args?: SelectSubset<T, SocialRegisterFindFirstArgs<ExtArgs>>): Prisma__SocialRegisterClient<$Result.GetResult<Prisma.$SocialRegisterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SocialRegister that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialRegisterFindFirstOrThrowArgs} args - Arguments to find a SocialRegister
     * @example
     * // Get one SocialRegister
     * const socialRegister = await prisma.socialRegister.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialRegisterFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialRegisterFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialRegisterClient<$Result.GetResult<Prisma.$SocialRegisterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SocialRegisters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialRegisterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialRegisters
     * const socialRegisters = await prisma.socialRegister.findMany()
     * 
     * // Get first 10 SocialRegisters
     * const socialRegisters = await prisma.socialRegister.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialRegisterWithIdOnly = await prisma.socialRegister.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialRegisterFindManyArgs>(args?: SelectSubset<T, SocialRegisterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialRegisterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SocialRegister.
     * @param {SocialRegisterCreateArgs} args - Arguments to create a SocialRegister.
     * @example
     * // Create one SocialRegister
     * const SocialRegister = await prisma.socialRegister.create({
     *   data: {
     *     // ... data to create a SocialRegister
     *   }
     * })
     * 
     */
    create<T extends SocialRegisterCreateArgs>(args: SelectSubset<T, SocialRegisterCreateArgs<ExtArgs>>): Prisma__SocialRegisterClient<$Result.GetResult<Prisma.$SocialRegisterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SocialRegisters.
     * @param {SocialRegisterCreateManyArgs} args - Arguments to create many SocialRegisters.
     * @example
     * // Create many SocialRegisters
     * const socialRegister = await prisma.socialRegister.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialRegisterCreateManyArgs>(args?: SelectSubset<T, SocialRegisterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialRegisters and returns the data saved in the database.
     * @param {SocialRegisterCreateManyAndReturnArgs} args - Arguments to create many SocialRegisters.
     * @example
     * // Create many SocialRegisters
     * const socialRegister = await prisma.socialRegister.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialRegisters and only return the `id`
     * const socialRegisterWithIdOnly = await prisma.socialRegister.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialRegisterCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialRegisterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialRegisterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SocialRegister.
     * @param {SocialRegisterDeleteArgs} args - Arguments to delete one SocialRegister.
     * @example
     * // Delete one SocialRegister
     * const SocialRegister = await prisma.socialRegister.delete({
     *   where: {
     *     // ... filter to delete one SocialRegister
     *   }
     * })
     * 
     */
    delete<T extends SocialRegisterDeleteArgs>(args: SelectSubset<T, SocialRegisterDeleteArgs<ExtArgs>>): Prisma__SocialRegisterClient<$Result.GetResult<Prisma.$SocialRegisterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SocialRegister.
     * @param {SocialRegisterUpdateArgs} args - Arguments to update one SocialRegister.
     * @example
     * // Update one SocialRegister
     * const socialRegister = await prisma.socialRegister.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialRegisterUpdateArgs>(args: SelectSubset<T, SocialRegisterUpdateArgs<ExtArgs>>): Prisma__SocialRegisterClient<$Result.GetResult<Prisma.$SocialRegisterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SocialRegisters.
     * @param {SocialRegisterDeleteManyArgs} args - Arguments to filter SocialRegisters to delete.
     * @example
     * // Delete a few SocialRegisters
     * const { count } = await prisma.socialRegister.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialRegisterDeleteManyArgs>(args?: SelectSubset<T, SocialRegisterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialRegisters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialRegisterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialRegisters
     * const socialRegister = await prisma.socialRegister.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialRegisterUpdateManyArgs>(args: SelectSubset<T, SocialRegisterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SocialRegister.
     * @param {SocialRegisterUpsertArgs} args - Arguments to update or create a SocialRegister.
     * @example
     * // Update or create a SocialRegister
     * const socialRegister = await prisma.socialRegister.upsert({
     *   create: {
     *     // ... data to create a SocialRegister
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialRegister we want to update
     *   }
     * })
     */
    upsert<T extends SocialRegisterUpsertArgs>(args: SelectSubset<T, SocialRegisterUpsertArgs<ExtArgs>>): Prisma__SocialRegisterClient<$Result.GetResult<Prisma.$SocialRegisterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SocialRegisters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialRegisterCountArgs} args - Arguments to filter SocialRegisters to count.
     * @example
     * // Count the number of SocialRegisters
     * const count = await prisma.socialRegister.count({
     *   where: {
     *     // ... the filter for the SocialRegisters we want to count
     *   }
     * })
    **/
    count<T extends SocialRegisterCountArgs>(
      args?: Subset<T, SocialRegisterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialRegisterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialRegister.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialRegisterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SocialRegisterAggregateArgs>(args: Subset<T, SocialRegisterAggregateArgs>): Prisma.PrismaPromise<GetSocialRegisterAggregateType<T>>

    /**
     * Group by SocialRegister.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialRegisterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SocialRegisterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialRegisterGroupByArgs['orderBy'] }
        : { orderBy?: SocialRegisterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SocialRegisterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialRegisterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialRegister model
   */
  readonly fields: SocialRegisterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialRegister.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialRegisterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applicationPayments<T extends SocialRegister$applicationPaymentsArgs<ExtArgs> = {}>(args?: Subset<T, SocialRegister$applicationPaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentApplicationPaymentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SocialRegister model
   */ 
  interface SocialRegisterFieldRefs {
    readonly id: FieldRef<"SocialRegister", 'String'>
    readonly fullName: FieldRef<"SocialRegister", 'String'>
    readonly nationalId: FieldRef<"SocialRegister", 'String'>
    readonly lga: FieldRef<"SocialRegister", 'String'>
    readonly state: FieldRef<"SocialRegister", 'String'>
    readonly gender: FieldRef<"SocialRegister", 'Gender'>
    readonly age: FieldRef<"SocialRegister", 'Int'>
    readonly email: FieldRef<"SocialRegister", 'String'>
    readonly phone: FieldRef<"SocialRegister", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SocialRegister findUnique
   */
  export type SocialRegisterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegister
     */
    select?: SocialRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterInclude<ExtArgs> | null
    /**
     * Filter, which SocialRegister to fetch.
     */
    where: SocialRegisterWhereUniqueInput
  }

  /**
   * SocialRegister findUniqueOrThrow
   */
  export type SocialRegisterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegister
     */
    select?: SocialRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterInclude<ExtArgs> | null
    /**
     * Filter, which SocialRegister to fetch.
     */
    where: SocialRegisterWhereUniqueInput
  }

  /**
   * SocialRegister findFirst
   */
  export type SocialRegisterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegister
     */
    select?: SocialRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterInclude<ExtArgs> | null
    /**
     * Filter, which SocialRegister to fetch.
     */
    where?: SocialRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialRegisters to fetch.
     */
    orderBy?: SocialRegisterOrderByWithRelationInput | SocialRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialRegisters.
     */
    cursor?: SocialRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialRegisters.
     */
    distinct?: SocialRegisterScalarFieldEnum | SocialRegisterScalarFieldEnum[]
  }

  /**
   * SocialRegister findFirstOrThrow
   */
  export type SocialRegisterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegister
     */
    select?: SocialRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterInclude<ExtArgs> | null
    /**
     * Filter, which SocialRegister to fetch.
     */
    where?: SocialRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialRegisters to fetch.
     */
    orderBy?: SocialRegisterOrderByWithRelationInput | SocialRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialRegisters.
     */
    cursor?: SocialRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialRegisters.
     */
    distinct?: SocialRegisterScalarFieldEnum | SocialRegisterScalarFieldEnum[]
  }

  /**
   * SocialRegister findMany
   */
  export type SocialRegisterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegister
     */
    select?: SocialRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterInclude<ExtArgs> | null
    /**
     * Filter, which SocialRegisters to fetch.
     */
    where?: SocialRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialRegisters to fetch.
     */
    orderBy?: SocialRegisterOrderByWithRelationInput | SocialRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialRegisters.
     */
    cursor?: SocialRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialRegisters.
     */
    skip?: number
    distinct?: SocialRegisterScalarFieldEnum | SocialRegisterScalarFieldEnum[]
  }

  /**
   * SocialRegister create
   */
  export type SocialRegisterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegister
     */
    select?: SocialRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialRegister.
     */
    data: XOR<SocialRegisterCreateInput, SocialRegisterUncheckedCreateInput>
  }

  /**
   * SocialRegister createMany
   */
  export type SocialRegisterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialRegisters.
     */
    data: SocialRegisterCreateManyInput | SocialRegisterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialRegister createManyAndReturn
   */
  export type SocialRegisterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegister
     */
    select?: SocialRegisterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SocialRegisters.
     */
    data: SocialRegisterCreateManyInput | SocialRegisterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialRegister update
   */
  export type SocialRegisterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegister
     */
    select?: SocialRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialRegister.
     */
    data: XOR<SocialRegisterUpdateInput, SocialRegisterUncheckedUpdateInput>
    /**
     * Choose, which SocialRegister to update.
     */
    where: SocialRegisterWhereUniqueInput
  }

  /**
   * SocialRegister updateMany
   */
  export type SocialRegisterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialRegisters.
     */
    data: XOR<SocialRegisterUpdateManyMutationInput, SocialRegisterUncheckedUpdateManyInput>
    /**
     * Filter which SocialRegisters to update
     */
    where?: SocialRegisterWhereInput
  }

  /**
   * SocialRegister upsert
   */
  export type SocialRegisterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegister
     */
    select?: SocialRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialRegister to update in case it exists.
     */
    where: SocialRegisterWhereUniqueInput
    /**
     * In case the SocialRegister found by the `where` argument doesn't exist, create a new SocialRegister with this data.
     */
    create: XOR<SocialRegisterCreateInput, SocialRegisterUncheckedCreateInput>
    /**
     * In case the SocialRegister was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialRegisterUpdateInput, SocialRegisterUncheckedUpdateInput>
  }

  /**
   * SocialRegister delete
   */
  export type SocialRegisterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegister
     */
    select?: SocialRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterInclude<ExtArgs> | null
    /**
     * Filter which SocialRegister to delete.
     */
    where: SocialRegisterWhereUniqueInput
  }

  /**
   * SocialRegister deleteMany
   */
  export type SocialRegisterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialRegisters to delete
     */
    where?: SocialRegisterWhereInput
  }

  /**
   * SocialRegister.applicationPayments
   */
  export type SocialRegister$applicationPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplicationPayment
     */
    select?: StudentApplicationPaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationPaymentInclude<ExtArgs> | null
    where?: StudentApplicationPaymentWhereInput
    orderBy?: StudentApplicationPaymentOrderByWithRelationInput | StudentApplicationPaymentOrderByWithRelationInput[]
    cursor?: StudentApplicationPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentApplicationPaymentScalarFieldEnum | StudentApplicationPaymentScalarFieldEnum[]
  }

  /**
   * SocialRegister without action
   */
  export type SocialRegisterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegister
     */
    select?: SocialRegisterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StudentApplicationScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    stateOfOrigin: 'stateOfOrigin',
    currentResidence: 'currentResidence',
    educationLevel: 'educationLevel',
    areaOfStudy: 'areaOfStudy',
    preferredTrack: 'preferredTrack',
    englishReading: 'englishReading',
    englishWriting: 'englishWriting',
    englishSpeaking: 'englishSpeaking',
    basicITSkills: 'basicITSkills',
    typingSpeed: 'typingSpeed',
    zoomConfidence: 'zoomConfidence',
    slackConfidence: 'slackConfidence',
    emailConfidence: 'emailConfidence',
    docsConfidence: 'docsConfidence',
    problemSolvingAnswers: 'problemSolvingAnswers',
    needsLoan: 'needsLoan',
    employmentStatus: 'employmentStatus',
    willingToRelocate: 'willingToRelocate',
    hasLaptop: 'hasLaptop',
    availability: 'availability',
    motivationEssay: 'motivationEssay',
    futureGoals: 'futureGoals',
    willingToCommit: 'willingToCommit',
    nyscStatus: 'nyscStatus',
    wantsMentor: 'wantsMentor',
    cybersecurityAnswers: 'cybersecurityAnswers',
    applicationFeeStatus: 'applicationFeeStatus',
    frappeId: 'frappeId',
    odooId: 'odooId',
    socialRegisterId: 'socialRegisterId',
    createdAt: 'createdAt'
  };

  export type StudentApplicationScalarFieldEnum = (typeof StudentApplicationScalarFieldEnum)[keyof typeof StudentApplicationScalarFieldEnum]


  export const StudentApplicationPaymentScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    method: 'method',
    reference: 'reference',
    socialRegisterId: 'socialRegisterId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentApplicationPaymentScalarFieldEnum = (typeof StudentApplicationPaymentScalarFieldEnum)[keyof typeof StudentApplicationPaymentScalarFieldEnum]


  export const SocialRegisterScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    nationalId: 'nationalId',
    lga: 'lga',
    state: 'state',
    gender: 'gender',
    age: 'age',
    email: 'email',
    phone: 'phone'
  };

  export type SocialRegisterScalarFieldEnum = (typeof SocialRegisterScalarFieldEnum)[keyof typeof SocialRegisterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'EducationLevel'
   */
  export type EnumEducationLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EducationLevel'>
    


  /**
   * Reference to a field of type 'EducationLevel[]'
   */
  export type ListEnumEducationLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EducationLevel[]'>
    


  /**
   * Reference to a field of type 'AreaOfStudy'
   */
  export type EnumAreaOfStudyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AreaOfStudy'>
    


  /**
   * Reference to a field of type 'AreaOfStudy[]'
   */
  export type ListEnumAreaOfStudyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AreaOfStudy[]'>
    


  /**
   * Reference to a field of type 'PreferredTrack'
   */
  export type EnumPreferredTrackFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PreferredTrack'>
    


  /**
   * Reference to a field of type 'PreferredTrack[]'
   */
  export type ListEnumPreferredTrackFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PreferredTrack[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EmploymentStatus'
   */
  export type EnumEmploymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentStatus'>
    


  /**
   * Reference to a field of type 'EmploymentStatus[]'
   */
  export type ListEnumEmploymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentStatus[]'>
    


  /**
   * Reference to a field of type 'Availability'
   */
  export type EnumAvailabilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Availability'>
    


  /**
   * Reference to a field of type 'Availability[]'
   */
  export type ListEnumAvailabilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Availability[]'>
    


  /**
   * Reference to a field of type 'NYSCStatus'
   */
  export type EnumNYSCStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NYSCStatus'>
    


  /**
   * Reference to a field of type 'NYSCStatus[]'
   */
  export type ListEnumNYSCStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NYSCStatus[]'>
    


  /**
   * Reference to a field of type 'ApplicationFeeStatus'
   */
  export type EnumApplicationFeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationFeeStatus'>
    


  /**
   * Reference to a field of type 'ApplicationFeeStatus[]'
   */
  export type ListEnumApplicationFeeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationFeeStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    
  /**
   * Deep Input Types
   */


  export type StudentApplicationWhereInput = {
    AND?: StudentApplicationWhereInput | StudentApplicationWhereInput[]
    OR?: StudentApplicationWhereInput[]
    NOT?: StudentApplicationWhereInput | StudentApplicationWhereInput[]
    id?: StringFilter<"StudentApplication"> | string
    fullName?: StringFilter<"StudentApplication"> | string
    email?: StringFilter<"StudentApplication"> | string
    phoneNumber?: StringFilter<"StudentApplication"> | string
    dateOfBirth?: DateTimeFilter<"StudentApplication"> | Date | string
    gender?: EnumGenderFilter<"StudentApplication"> | $Enums.Gender
    stateOfOrigin?: StringFilter<"StudentApplication"> | string
    currentResidence?: StringNullableFilter<"StudentApplication"> | string | null
    educationLevel?: EnumEducationLevelFilter<"StudentApplication"> | $Enums.EducationLevel
    areaOfStudy?: EnumAreaOfStudyFilter<"StudentApplication"> | $Enums.AreaOfStudy
    preferredTrack?: EnumPreferredTrackFilter<"StudentApplication"> | $Enums.PreferredTrack
    englishReading?: IntFilter<"StudentApplication"> | number
    englishWriting?: IntFilter<"StudentApplication"> | number
    englishSpeaking?: IntFilter<"StudentApplication"> | number
    basicITSkills?: StringNullableListFilter<"StudentApplication">
    typingSpeed?: IntFilter<"StudentApplication"> | number
    zoomConfidence?: IntFilter<"StudentApplication"> | number
    slackConfidence?: IntFilter<"StudentApplication"> | number
    emailConfidence?: IntFilter<"StudentApplication"> | number
    docsConfidence?: IntFilter<"StudentApplication"> | number
    problemSolvingAnswers?: StringNullableListFilter<"StudentApplication">
    needsLoan?: BoolFilter<"StudentApplication"> | boolean
    employmentStatus?: EnumEmploymentStatusFilter<"StudentApplication"> | $Enums.EmploymentStatus
    willingToRelocate?: BoolFilter<"StudentApplication"> | boolean
    hasLaptop?: BoolFilter<"StudentApplication"> | boolean
    availability?: EnumAvailabilityFilter<"StudentApplication"> | $Enums.Availability
    motivationEssay?: StringFilter<"StudentApplication"> | string
    futureGoals?: StringFilter<"StudentApplication"> | string
    willingToCommit?: BoolFilter<"StudentApplication"> | boolean
    nyscStatus?: EnumNYSCStatusFilter<"StudentApplication"> | $Enums.NYSCStatus
    wantsMentor?: BoolFilter<"StudentApplication"> | boolean
    cybersecurityAnswers?: StringNullableListFilter<"StudentApplication">
    applicationFeeStatus?: EnumApplicationFeeStatusFilter<"StudentApplication"> | $Enums.ApplicationFeeStatus
    frappeId?: StringNullableFilter<"StudentApplication"> | string | null
    odooId?: IntNullableFilter<"StudentApplication"> | number | null
    socialRegisterId?: StringNullableFilter<"StudentApplication"> | string | null
    createdAt?: DateTimeFilter<"StudentApplication"> | Date | string
    payments?: StudentApplicationPaymentListRelationFilter
  }

  export type StudentApplicationOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    stateOfOrigin?: SortOrder
    currentResidence?: SortOrderInput | SortOrder
    educationLevel?: SortOrder
    areaOfStudy?: SortOrder
    preferredTrack?: SortOrder
    englishReading?: SortOrder
    englishWriting?: SortOrder
    englishSpeaking?: SortOrder
    basicITSkills?: SortOrder
    typingSpeed?: SortOrder
    zoomConfidence?: SortOrder
    slackConfidence?: SortOrder
    emailConfidence?: SortOrder
    docsConfidence?: SortOrder
    problemSolvingAnswers?: SortOrder
    needsLoan?: SortOrder
    employmentStatus?: SortOrder
    willingToRelocate?: SortOrder
    hasLaptop?: SortOrder
    availability?: SortOrder
    motivationEssay?: SortOrder
    futureGoals?: SortOrder
    willingToCommit?: SortOrder
    nyscStatus?: SortOrder
    wantsMentor?: SortOrder
    cybersecurityAnswers?: SortOrder
    applicationFeeStatus?: SortOrder
    frappeId?: SortOrderInput | SortOrder
    odooId?: SortOrderInput | SortOrder
    socialRegisterId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    payments?: StudentApplicationPaymentOrderByRelationAggregateInput
  }

  export type StudentApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    frappeId?: string
    odooId?: number
    socialRegisterId?: string
    AND?: StudentApplicationWhereInput | StudentApplicationWhereInput[]
    OR?: StudentApplicationWhereInput[]
    NOT?: StudentApplicationWhereInput | StudentApplicationWhereInput[]
    fullName?: StringFilter<"StudentApplication"> | string
    phoneNumber?: StringFilter<"StudentApplication"> | string
    dateOfBirth?: DateTimeFilter<"StudentApplication"> | Date | string
    gender?: EnumGenderFilter<"StudentApplication"> | $Enums.Gender
    stateOfOrigin?: StringFilter<"StudentApplication"> | string
    currentResidence?: StringNullableFilter<"StudentApplication"> | string | null
    educationLevel?: EnumEducationLevelFilter<"StudentApplication"> | $Enums.EducationLevel
    areaOfStudy?: EnumAreaOfStudyFilter<"StudentApplication"> | $Enums.AreaOfStudy
    preferredTrack?: EnumPreferredTrackFilter<"StudentApplication"> | $Enums.PreferredTrack
    englishReading?: IntFilter<"StudentApplication"> | number
    englishWriting?: IntFilter<"StudentApplication"> | number
    englishSpeaking?: IntFilter<"StudentApplication"> | number
    basicITSkills?: StringNullableListFilter<"StudentApplication">
    typingSpeed?: IntFilter<"StudentApplication"> | number
    zoomConfidence?: IntFilter<"StudentApplication"> | number
    slackConfidence?: IntFilter<"StudentApplication"> | number
    emailConfidence?: IntFilter<"StudentApplication"> | number
    docsConfidence?: IntFilter<"StudentApplication"> | number
    problemSolvingAnswers?: StringNullableListFilter<"StudentApplication">
    needsLoan?: BoolFilter<"StudentApplication"> | boolean
    employmentStatus?: EnumEmploymentStatusFilter<"StudentApplication"> | $Enums.EmploymentStatus
    willingToRelocate?: BoolFilter<"StudentApplication"> | boolean
    hasLaptop?: BoolFilter<"StudentApplication"> | boolean
    availability?: EnumAvailabilityFilter<"StudentApplication"> | $Enums.Availability
    motivationEssay?: StringFilter<"StudentApplication"> | string
    futureGoals?: StringFilter<"StudentApplication"> | string
    willingToCommit?: BoolFilter<"StudentApplication"> | boolean
    nyscStatus?: EnumNYSCStatusFilter<"StudentApplication"> | $Enums.NYSCStatus
    wantsMentor?: BoolFilter<"StudentApplication"> | boolean
    cybersecurityAnswers?: StringNullableListFilter<"StudentApplication">
    applicationFeeStatus?: EnumApplicationFeeStatusFilter<"StudentApplication"> | $Enums.ApplicationFeeStatus
    createdAt?: DateTimeFilter<"StudentApplication"> | Date | string
    payments?: StudentApplicationPaymentListRelationFilter
  }, "id" | "email" | "frappeId" | "odooId" | "socialRegisterId">

  export type StudentApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    stateOfOrigin?: SortOrder
    currentResidence?: SortOrderInput | SortOrder
    educationLevel?: SortOrder
    areaOfStudy?: SortOrder
    preferredTrack?: SortOrder
    englishReading?: SortOrder
    englishWriting?: SortOrder
    englishSpeaking?: SortOrder
    basicITSkills?: SortOrder
    typingSpeed?: SortOrder
    zoomConfidence?: SortOrder
    slackConfidence?: SortOrder
    emailConfidence?: SortOrder
    docsConfidence?: SortOrder
    problemSolvingAnswers?: SortOrder
    needsLoan?: SortOrder
    employmentStatus?: SortOrder
    willingToRelocate?: SortOrder
    hasLaptop?: SortOrder
    availability?: SortOrder
    motivationEssay?: SortOrder
    futureGoals?: SortOrder
    willingToCommit?: SortOrder
    nyscStatus?: SortOrder
    wantsMentor?: SortOrder
    cybersecurityAnswers?: SortOrder
    applicationFeeStatus?: SortOrder
    frappeId?: SortOrderInput | SortOrder
    odooId?: SortOrderInput | SortOrder
    socialRegisterId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StudentApplicationCountOrderByAggregateInput
    _avg?: StudentApplicationAvgOrderByAggregateInput
    _max?: StudentApplicationMaxOrderByAggregateInput
    _min?: StudentApplicationMinOrderByAggregateInput
    _sum?: StudentApplicationSumOrderByAggregateInput
  }

  export type StudentApplicationScalarWhereWithAggregatesInput = {
    AND?: StudentApplicationScalarWhereWithAggregatesInput | StudentApplicationScalarWhereWithAggregatesInput[]
    OR?: StudentApplicationScalarWhereWithAggregatesInput[]
    NOT?: StudentApplicationScalarWhereWithAggregatesInput | StudentApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentApplication"> | string
    fullName?: StringWithAggregatesFilter<"StudentApplication"> | string
    email?: StringWithAggregatesFilter<"StudentApplication"> | string
    phoneNumber?: StringWithAggregatesFilter<"StudentApplication"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"StudentApplication"> | Date | string
    gender?: EnumGenderWithAggregatesFilter<"StudentApplication"> | $Enums.Gender
    stateOfOrigin?: StringWithAggregatesFilter<"StudentApplication"> | string
    currentResidence?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    educationLevel?: EnumEducationLevelWithAggregatesFilter<"StudentApplication"> | $Enums.EducationLevel
    areaOfStudy?: EnumAreaOfStudyWithAggregatesFilter<"StudentApplication"> | $Enums.AreaOfStudy
    preferredTrack?: EnumPreferredTrackWithAggregatesFilter<"StudentApplication"> | $Enums.PreferredTrack
    englishReading?: IntWithAggregatesFilter<"StudentApplication"> | number
    englishWriting?: IntWithAggregatesFilter<"StudentApplication"> | number
    englishSpeaking?: IntWithAggregatesFilter<"StudentApplication"> | number
    basicITSkills?: StringNullableListFilter<"StudentApplication">
    typingSpeed?: IntWithAggregatesFilter<"StudentApplication"> | number
    zoomConfidence?: IntWithAggregatesFilter<"StudentApplication"> | number
    slackConfidence?: IntWithAggregatesFilter<"StudentApplication"> | number
    emailConfidence?: IntWithAggregatesFilter<"StudentApplication"> | number
    docsConfidence?: IntWithAggregatesFilter<"StudentApplication"> | number
    problemSolvingAnswers?: StringNullableListFilter<"StudentApplication">
    needsLoan?: BoolWithAggregatesFilter<"StudentApplication"> | boolean
    employmentStatus?: EnumEmploymentStatusWithAggregatesFilter<"StudentApplication"> | $Enums.EmploymentStatus
    willingToRelocate?: BoolWithAggregatesFilter<"StudentApplication"> | boolean
    hasLaptop?: BoolWithAggregatesFilter<"StudentApplication"> | boolean
    availability?: EnumAvailabilityWithAggregatesFilter<"StudentApplication"> | $Enums.Availability
    motivationEssay?: StringWithAggregatesFilter<"StudentApplication"> | string
    futureGoals?: StringWithAggregatesFilter<"StudentApplication"> | string
    willingToCommit?: BoolWithAggregatesFilter<"StudentApplication"> | boolean
    nyscStatus?: EnumNYSCStatusWithAggregatesFilter<"StudentApplication"> | $Enums.NYSCStatus
    wantsMentor?: BoolWithAggregatesFilter<"StudentApplication"> | boolean
    cybersecurityAnswers?: StringNullableListFilter<"StudentApplication">
    applicationFeeStatus?: EnumApplicationFeeStatusWithAggregatesFilter<"StudentApplication"> | $Enums.ApplicationFeeStatus
    frappeId?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    odooId?: IntNullableWithAggregatesFilter<"StudentApplication"> | number | null
    socialRegisterId?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StudentApplication"> | Date | string
  }

  export type StudentApplicationPaymentWhereInput = {
    AND?: StudentApplicationPaymentWhereInput | StudentApplicationPaymentWhereInput[]
    OR?: StudentApplicationPaymentWhereInput[]
    NOT?: StudentApplicationPaymentWhereInput | StudentApplicationPaymentWhereInput[]
    id?: StringFilter<"StudentApplicationPayment"> | string
    applicationId?: StringFilter<"StudentApplicationPayment"> | string
    amount?: FloatFilter<"StudentApplicationPayment"> | number
    currency?: StringFilter<"StudentApplicationPayment"> | string
    status?: EnumPaymentStatusFilter<"StudentApplicationPayment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodFilter<"StudentApplicationPayment"> | $Enums.PaymentMethod
    reference?: StringNullableFilter<"StudentApplicationPayment"> | string | null
    socialRegisterId?: StringNullableFilter<"StudentApplicationPayment"> | string | null
    createdAt?: DateTimeFilter<"StudentApplicationPayment"> | Date | string
    updatedAt?: DateTimeFilter<"StudentApplicationPayment"> | Date | string
    application?: XOR<StudentApplicationRelationFilter, StudentApplicationWhereInput>
    socialRegister?: XOR<SocialRegisterNullableRelationFilter, SocialRegisterWhereInput> | null
  }

  export type StudentApplicationPaymentOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    reference?: SortOrderInput | SortOrder
    socialRegisterId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    application?: StudentApplicationOrderByWithRelationInput
    socialRegister?: SocialRegisterOrderByWithRelationInput
  }

  export type StudentApplicationPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentApplicationPaymentWhereInput | StudentApplicationPaymentWhereInput[]
    OR?: StudentApplicationPaymentWhereInput[]
    NOT?: StudentApplicationPaymentWhereInput | StudentApplicationPaymentWhereInput[]
    applicationId?: StringFilter<"StudentApplicationPayment"> | string
    amount?: FloatFilter<"StudentApplicationPayment"> | number
    currency?: StringFilter<"StudentApplicationPayment"> | string
    status?: EnumPaymentStatusFilter<"StudentApplicationPayment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodFilter<"StudentApplicationPayment"> | $Enums.PaymentMethod
    reference?: StringNullableFilter<"StudentApplicationPayment"> | string | null
    socialRegisterId?: StringNullableFilter<"StudentApplicationPayment"> | string | null
    createdAt?: DateTimeFilter<"StudentApplicationPayment"> | Date | string
    updatedAt?: DateTimeFilter<"StudentApplicationPayment"> | Date | string
    application?: XOR<StudentApplicationRelationFilter, StudentApplicationWhereInput>
    socialRegister?: XOR<SocialRegisterNullableRelationFilter, SocialRegisterWhereInput> | null
  }, "id">

  export type StudentApplicationPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    reference?: SortOrderInput | SortOrder
    socialRegisterId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentApplicationPaymentCountOrderByAggregateInput
    _avg?: StudentApplicationPaymentAvgOrderByAggregateInput
    _max?: StudentApplicationPaymentMaxOrderByAggregateInput
    _min?: StudentApplicationPaymentMinOrderByAggregateInput
    _sum?: StudentApplicationPaymentSumOrderByAggregateInput
  }

  export type StudentApplicationPaymentScalarWhereWithAggregatesInput = {
    AND?: StudentApplicationPaymentScalarWhereWithAggregatesInput | StudentApplicationPaymentScalarWhereWithAggregatesInput[]
    OR?: StudentApplicationPaymentScalarWhereWithAggregatesInput[]
    NOT?: StudentApplicationPaymentScalarWhereWithAggregatesInput | StudentApplicationPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentApplicationPayment"> | string
    applicationId?: StringWithAggregatesFilter<"StudentApplicationPayment"> | string
    amount?: FloatWithAggregatesFilter<"StudentApplicationPayment"> | number
    currency?: StringWithAggregatesFilter<"StudentApplicationPayment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"StudentApplicationPayment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodWithAggregatesFilter<"StudentApplicationPayment"> | $Enums.PaymentMethod
    reference?: StringNullableWithAggregatesFilter<"StudentApplicationPayment"> | string | null
    socialRegisterId?: StringNullableWithAggregatesFilter<"StudentApplicationPayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StudentApplicationPayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentApplicationPayment"> | Date | string
  }

  export type SocialRegisterWhereInput = {
    AND?: SocialRegisterWhereInput | SocialRegisterWhereInput[]
    OR?: SocialRegisterWhereInput[]
    NOT?: SocialRegisterWhereInput | SocialRegisterWhereInput[]
    id?: StringFilter<"SocialRegister"> | string
    fullName?: StringFilter<"SocialRegister"> | string
    nationalId?: StringFilter<"SocialRegister"> | string
    lga?: StringFilter<"SocialRegister"> | string
    state?: StringFilter<"SocialRegister"> | string
    gender?: EnumGenderFilter<"SocialRegister"> | $Enums.Gender
    age?: IntFilter<"SocialRegister"> | number
    email?: StringNullableFilter<"SocialRegister"> | string | null
    phone?: StringNullableFilter<"SocialRegister"> | string | null
    applicationPayments?: StudentApplicationPaymentListRelationFilter
  }

  export type SocialRegisterOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    nationalId?: SortOrder
    lga?: SortOrder
    state?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    applicationPayments?: StudentApplicationPaymentOrderByRelationAggregateInput
  }

  export type SocialRegisterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nationalId?: string
    AND?: SocialRegisterWhereInput | SocialRegisterWhereInput[]
    OR?: SocialRegisterWhereInput[]
    NOT?: SocialRegisterWhereInput | SocialRegisterWhereInput[]
    fullName?: StringFilter<"SocialRegister"> | string
    lga?: StringFilter<"SocialRegister"> | string
    state?: StringFilter<"SocialRegister"> | string
    gender?: EnumGenderFilter<"SocialRegister"> | $Enums.Gender
    age?: IntFilter<"SocialRegister"> | number
    email?: StringNullableFilter<"SocialRegister"> | string | null
    phone?: StringNullableFilter<"SocialRegister"> | string | null
    applicationPayments?: StudentApplicationPaymentListRelationFilter
  }, "id" | "nationalId">

  export type SocialRegisterOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    nationalId?: SortOrder
    lga?: SortOrder
    state?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: SocialRegisterCountOrderByAggregateInput
    _avg?: SocialRegisterAvgOrderByAggregateInput
    _max?: SocialRegisterMaxOrderByAggregateInput
    _min?: SocialRegisterMinOrderByAggregateInput
    _sum?: SocialRegisterSumOrderByAggregateInput
  }

  export type SocialRegisterScalarWhereWithAggregatesInput = {
    AND?: SocialRegisterScalarWhereWithAggregatesInput | SocialRegisterScalarWhereWithAggregatesInput[]
    OR?: SocialRegisterScalarWhereWithAggregatesInput[]
    NOT?: SocialRegisterScalarWhereWithAggregatesInput | SocialRegisterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialRegister"> | string
    fullName?: StringWithAggregatesFilter<"SocialRegister"> | string
    nationalId?: StringWithAggregatesFilter<"SocialRegister"> | string
    lga?: StringWithAggregatesFilter<"SocialRegister"> | string
    state?: StringWithAggregatesFilter<"SocialRegister"> | string
    gender?: EnumGenderWithAggregatesFilter<"SocialRegister"> | $Enums.Gender
    age?: IntWithAggregatesFilter<"SocialRegister"> | number
    email?: StringNullableWithAggregatesFilter<"SocialRegister"> | string | null
    phone?: StringNullableWithAggregatesFilter<"SocialRegister"> | string | null
  }

  export type StudentApplicationCreateInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    stateOfOrigin: string
    currentResidence?: string | null
    educationLevel: $Enums.EducationLevel
    areaOfStudy: $Enums.AreaOfStudy
    preferredTrack: $Enums.PreferredTrack
    englishReading: number
    englishWriting: number
    englishSpeaking: number
    basicITSkills?: StudentApplicationCreatebasicITSkillsInput | string[]
    typingSpeed: number
    zoomConfidence: number
    slackConfidence: number
    emailConfidence: number
    docsConfidence: number
    problemSolvingAnswers?: StudentApplicationCreateproblemSolvingAnswersInput | string[]
    needsLoan: boolean
    employmentStatus: $Enums.EmploymentStatus
    willingToRelocate: boolean
    hasLaptop: boolean
    availability: $Enums.Availability
    motivationEssay: string
    futureGoals: string
    willingToCommit: boolean
    nyscStatus: $Enums.NYSCStatus
    wantsMentor: boolean
    cybersecurityAnswers?: StudentApplicationCreatecybersecurityAnswersInput | string[]
    applicationFeeStatus?: $Enums.ApplicationFeeStatus
    frappeId?: string | null
    odooId?: number | null
    socialRegisterId?: string | null
    createdAt?: Date | string
    payments?: StudentApplicationPaymentCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    stateOfOrigin: string
    currentResidence?: string | null
    educationLevel: $Enums.EducationLevel
    areaOfStudy: $Enums.AreaOfStudy
    preferredTrack: $Enums.PreferredTrack
    englishReading: number
    englishWriting: number
    englishSpeaking: number
    basicITSkills?: StudentApplicationCreatebasicITSkillsInput | string[]
    typingSpeed: number
    zoomConfidence: number
    slackConfidence: number
    emailConfidence: number
    docsConfidence: number
    problemSolvingAnswers?: StudentApplicationCreateproblemSolvingAnswersInput | string[]
    needsLoan: boolean
    employmentStatus: $Enums.EmploymentStatus
    willingToRelocate: boolean
    hasLaptop: boolean
    availability: $Enums.Availability
    motivationEssay: string
    futureGoals: string
    willingToCommit: boolean
    nyscStatus: $Enums.NYSCStatus
    wantsMentor: boolean
    cybersecurityAnswers?: StudentApplicationCreatecybersecurityAnswersInput | string[]
    applicationFeeStatus?: $Enums.ApplicationFeeStatus
    frappeId?: string | null
    odooId?: number | null
    socialRegisterId?: string | null
    createdAt?: Date | string
    payments?: StudentApplicationPaymentUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    stateOfOrigin?: StringFieldUpdateOperationsInput | string
    currentResidence?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    areaOfStudy?: EnumAreaOfStudyFieldUpdateOperationsInput | $Enums.AreaOfStudy
    preferredTrack?: EnumPreferredTrackFieldUpdateOperationsInput | $Enums.PreferredTrack
    englishReading?: IntFieldUpdateOperationsInput | number
    englishWriting?: IntFieldUpdateOperationsInput | number
    englishSpeaking?: IntFieldUpdateOperationsInput | number
    basicITSkills?: StudentApplicationUpdatebasicITSkillsInput | string[]
    typingSpeed?: IntFieldUpdateOperationsInput | number
    zoomConfidence?: IntFieldUpdateOperationsInput | number
    slackConfidence?: IntFieldUpdateOperationsInput | number
    emailConfidence?: IntFieldUpdateOperationsInput | number
    docsConfidence?: IntFieldUpdateOperationsInput | number
    problemSolvingAnswers?: StudentApplicationUpdateproblemSolvingAnswersInput | string[]
    needsLoan?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    willingToRelocate?: BoolFieldUpdateOperationsInput | boolean
    hasLaptop?: BoolFieldUpdateOperationsInput | boolean
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    motivationEssay?: StringFieldUpdateOperationsInput | string
    futureGoals?: StringFieldUpdateOperationsInput | string
    willingToCommit?: BoolFieldUpdateOperationsInput | boolean
    nyscStatus?: EnumNYSCStatusFieldUpdateOperationsInput | $Enums.NYSCStatus
    wantsMentor?: BoolFieldUpdateOperationsInput | boolean
    cybersecurityAnswers?: StudentApplicationUpdatecybersecurityAnswersInput | string[]
    applicationFeeStatus?: EnumApplicationFeeStatusFieldUpdateOperationsInput | $Enums.ApplicationFeeStatus
    frappeId?: NullableStringFieldUpdateOperationsInput | string | null
    odooId?: NullableIntFieldUpdateOperationsInput | number | null
    socialRegisterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: StudentApplicationPaymentUpdateManyWithoutApplicationNestedInput
  }

  export type StudentApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    stateOfOrigin?: StringFieldUpdateOperationsInput | string
    currentResidence?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    areaOfStudy?: EnumAreaOfStudyFieldUpdateOperationsInput | $Enums.AreaOfStudy
    preferredTrack?: EnumPreferredTrackFieldUpdateOperationsInput | $Enums.PreferredTrack
    englishReading?: IntFieldUpdateOperationsInput | number
    englishWriting?: IntFieldUpdateOperationsInput | number
    englishSpeaking?: IntFieldUpdateOperationsInput | number
    basicITSkills?: StudentApplicationUpdatebasicITSkillsInput | string[]
    typingSpeed?: IntFieldUpdateOperationsInput | number
    zoomConfidence?: IntFieldUpdateOperationsInput | number
    slackConfidence?: IntFieldUpdateOperationsInput | number
    emailConfidence?: IntFieldUpdateOperationsInput | number
    docsConfidence?: IntFieldUpdateOperationsInput | number
    problemSolvingAnswers?: StudentApplicationUpdateproblemSolvingAnswersInput | string[]
    needsLoan?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    willingToRelocate?: BoolFieldUpdateOperationsInput | boolean
    hasLaptop?: BoolFieldUpdateOperationsInput | boolean
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    motivationEssay?: StringFieldUpdateOperationsInput | string
    futureGoals?: StringFieldUpdateOperationsInput | string
    willingToCommit?: BoolFieldUpdateOperationsInput | boolean
    nyscStatus?: EnumNYSCStatusFieldUpdateOperationsInput | $Enums.NYSCStatus
    wantsMentor?: BoolFieldUpdateOperationsInput | boolean
    cybersecurityAnswers?: StudentApplicationUpdatecybersecurityAnswersInput | string[]
    applicationFeeStatus?: EnumApplicationFeeStatusFieldUpdateOperationsInput | $Enums.ApplicationFeeStatus
    frappeId?: NullableStringFieldUpdateOperationsInput | string | null
    odooId?: NullableIntFieldUpdateOperationsInput | number | null
    socialRegisterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: StudentApplicationPaymentUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type StudentApplicationCreateManyInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    stateOfOrigin: string
    currentResidence?: string | null
    educationLevel: $Enums.EducationLevel
    areaOfStudy: $Enums.AreaOfStudy
    preferredTrack: $Enums.PreferredTrack
    englishReading: number
    englishWriting: number
    englishSpeaking: number
    basicITSkills?: StudentApplicationCreatebasicITSkillsInput | string[]
    typingSpeed: number
    zoomConfidence: number
    slackConfidence: number
    emailConfidence: number
    docsConfidence: number
    problemSolvingAnswers?: StudentApplicationCreateproblemSolvingAnswersInput | string[]
    needsLoan: boolean
    employmentStatus: $Enums.EmploymentStatus
    willingToRelocate: boolean
    hasLaptop: boolean
    availability: $Enums.Availability
    motivationEssay: string
    futureGoals: string
    willingToCommit: boolean
    nyscStatus: $Enums.NYSCStatus
    wantsMentor: boolean
    cybersecurityAnswers?: StudentApplicationCreatecybersecurityAnswersInput | string[]
    applicationFeeStatus?: $Enums.ApplicationFeeStatus
    frappeId?: string | null
    odooId?: number | null
    socialRegisterId?: string | null
    createdAt?: Date | string
  }

  export type StudentApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    stateOfOrigin?: StringFieldUpdateOperationsInput | string
    currentResidence?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    areaOfStudy?: EnumAreaOfStudyFieldUpdateOperationsInput | $Enums.AreaOfStudy
    preferredTrack?: EnumPreferredTrackFieldUpdateOperationsInput | $Enums.PreferredTrack
    englishReading?: IntFieldUpdateOperationsInput | number
    englishWriting?: IntFieldUpdateOperationsInput | number
    englishSpeaking?: IntFieldUpdateOperationsInput | number
    basicITSkills?: StudentApplicationUpdatebasicITSkillsInput | string[]
    typingSpeed?: IntFieldUpdateOperationsInput | number
    zoomConfidence?: IntFieldUpdateOperationsInput | number
    slackConfidence?: IntFieldUpdateOperationsInput | number
    emailConfidence?: IntFieldUpdateOperationsInput | number
    docsConfidence?: IntFieldUpdateOperationsInput | number
    problemSolvingAnswers?: StudentApplicationUpdateproblemSolvingAnswersInput | string[]
    needsLoan?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    willingToRelocate?: BoolFieldUpdateOperationsInput | boolean
    hasLaptop?: BoolFieldUpdateOperationsInput | boolean
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    motivationEssay?: StringFieldUpdateOperationsInput | string
    futureGoals?: StringFieldUpdateOperationsInput | string
    willingToCommit?: BoolFieldUpdateOperationsInput | boolean
    nyscStatus?: EnumNYSCStatusFieldUpdateOperationsInput | $Enums.NYSCStatus
    wantsMentor?: BoolFieldUpdateOperationsInput | boolean
    cybersecurityAnswers?: StudentApplicationUpdatecybersecurityAnswersInput | string[]
    applicationFeeStatus?: EnumApplicationFeeStatusFieldUpdateOperationsInput | $Enums.ApplicationFeeStatus
    frappeId?: NullableStringFieldUpdateOperationsInput | string | null
    odooId?: NullableIntFieldUpdateOperationsInput | number | null
    socialRegisterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    stateOfOrigin?: StringFieldUpdateOperationsInput | string
    currentResidence?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    areaOfStudy?: EnumAreaOfStudyFieldUpdateOperationsInput | $Enums.AreaOfStudy
    preferredTrack?: EnumPreferredTrackFieldUpdateOperationsInput | $Enums.PreferredTrack
    englishReading?: IntFieldUpdateOperationsInput | number
    englishWriting?: IntFieldUpdateOperationsInput | number
    englishSpeaking?: IntFieldUpdateOperationsInput | number
    basicITSkills?: StudentApplicationUpdatebasicITSkillsInput | string[]
    typingSpeed?: IntFieldUpdateOperationsInput | number
    zoomConfidence?: IntFieldUpdateOperationsInput | number
    slackConfidence?: IntFieldUpdateOperationsInput | number
    emailConfidence?: IntFieldUpdateOperationsInput | number
    docsConfidence?: IntFieldUpdateOperationsInput | number
    problemSolvingAnswers?: StudentApplicationUpdateproblemSolvingAnswersInput | string[]
    needsLoan?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    willingToRelocate?: BoolFieldUpdateOperationsInput | boolean
    hasLaptop?: BoolFieldUpdateOperationsInput | boolean
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    motivationEssay?: StringFieldUpdateOperationsInput | string
    futureGoals?: StringFieldUpdateOperationsInput | string
    willingToCommit?: BoolFieldUpdateOperationsInput | boolean
    nyscStatus?: EnumNYSCStatusFieldUpdateOperationsInput | $Enums.NYSCStatus
    wantsMentor?: BoolFieldUpdateOperationsInput | boolean
    cybersecurityAnswers?: StudentApplicationUpdatecybersecurityAnswersInput | string[]
    applicationFeeStatus?: EnumApplicationFeeStatusFieldUpdateOperationsInput | $Enums.ApplicationFeeStatus
    frappeId?: NullableStringFieldUpdateOperationsInput | string | null
    odooId?: NullableIntFieldUpdateOperationsInput | number | null
    socialRegisterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentApplicationPaymentCreateInput = {
    id?: string
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    application: StudentApplicationCreateNestedOneWithoutPaymentsInput
    socialRegister?: SocialRegisterCreateNestedOneWithoutApplicationPaymentsInput
  }

  export type StudentApplicationPaymentUncheckedCreateInput = {
    id?: string
    applicationId: string
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    reference?: string | null
    socialRegisterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentApplicationPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: StudentApplicationUpdateOneRequiredWithoutPaymentsNestedInput
    socialRegister?: SocialRegisterUpdateOneWithoutApplicationPaymentsNestedInput
  }

  export type StudentApplicationPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    socialRegisterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentApplicationPaymentCreateManyInput = {
    id?: string
    applicationId: string
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    reference?: string | null
    socialRegisterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentApplicationPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentApplicationPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    socialRegisterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialRegisterCreateInput = {
    id?: string
    fullName: string
    nationalId: string
    lga: string
    state: string
    gender: $Enums.Gender
    age: number
    email?: string | null
    phone?: string | null
    applicationPayments?: StudentApplicationPaymentCreateNestedManyWithoutSocialRegisterInput
  }

  export type SocialRegisterUncheckedCreateInput = {
    id?: string
    fullName: string
    nationalId: string
    lga: string
    state: string
    gender: $Enums.Gender
    age: number
    email?: string | null
    phone?: string | null
    applicationPayments?: StudentApplicationPaymentUncheckedCreateNestedManyWithoutSocialRegisterInput
  }

  export type SocialRegisterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    applicationPayments?: StudentApplicationPaymentUpdateManyWithoutSocialRegisterNestedInput
  }

  export type SocialRegisterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    applicationPayments?: StudentApplicationPaymentUncheckedUpdateManyWithoutSocialRegisterNestedInput
  }

  export type SocialRegisterCreateManyInput = {
    id?: string
    fullName: string
    nationalId: string
    lga: string
    state: string
    gender: $Enums.Gender
    age: number
    email?: string | null
    phone?: string | null
  }

  export type SocialRegisterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SocialRegisterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumEducationLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEducationLevelFilter<$PrismaModel> | $Enums.EducationLevel
  }

  export type EnumAreaOfStudyFilter<$PrismaModel = never> = {
    equals?: $Enums.AreaOfStudy | EnumAreaOfStudyFieldRefInput<$PrismaModel>
    in?: $Enums.AreaOfStudy[] | ListEnumAreaOfStudyFieldRefInput<$PrismaModel>
    notIn?: $Enums.AreaOfStudy[] | ListEnumAreaOfStudyFieldRefInput<$PrismaModel>
    not?: NestedEnumAreaOfStudyFilter<$PrismaModel> | $Enums.AreaOfStudy
  }

  export type EnumPreferredTrackFilter<$PrismaModel = never> = {
    equals?: $Enums.PreferredTrack | EnumPreferredTrackFieldRefInput<$PrismaModel>
    in?: $Enums.PreferredTrack[] | ListEnumPreferredTrackFieldRefInput<$PrismaModel>
    notIn?: $Enums.PreferredTrack[] | ListEnumPreferredTrackFieldRefInput<$PrismaModel>
    not?: NestedEnumPreferredTrackFilter<$PrismaModel> | $Enums.PreferredTrack
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumEmploymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentStatus | EnumEmploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentStatusFilter<$PrismaModel> | $Enums.EmploymentStatus
  }

  export type EnumAvailabilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Availability | EnumAvailabilityFieldRefInput<$PrismaModel>
    in?: $Enums.Availability[] | ListEnumAvailabilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Availability[] | ListEnumAvailabilityFieldRefInput<$PrismaModel>
    not?: NestedEnumAvailabilityFilter<$PrismaModel> | $Enums.Availability
  }

  export type EnumNYSCStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NYSCStatus | EnumNYSCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NYSCStatus[] | ListEnumNYSCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NYSCStatus[] | ListEnumNYSCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNYSCStatusFilter<$PrismaModel> | $Enums.NYSCStatus
  }

  export type EnumApplicationFeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationFeeStatus | EnumApplicationFeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationFeeStatus[] | ListEnumApplicationFeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationFeeStatus[] | ListEnumApplicationFeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationFeeStatusFilter<$PrismaModel> | $Enums.ApplicationFeeStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StudentApplicationPaymentListRelationFilter = {
    every?: StudentApplicationPaymentWhereInput
    some?: StudentApplicationPaymentWhereInput
    none?: StudentApplicationPaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentApplicationPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    stateOfOrigin?: SortOrder
    currentResidence?: SortOrder
    educationLevel?: SortOrder
    areaOfStudy?: SortOrder
    preferredTrack?: SortOrder
    englishReading?: SortOrder
    englishWriting?: SortOrder
    englishSpeaking?: SortOrder
    basicITSkills?: SortOrder
    typingSpeed?: SortOrder
    zoomConfidence?: SortOrder
    slackConfidence?: SortOrder
    emailConfidence?: SortOrder
    docsConfidence?: SortOrder
    problemSolvingAnswers?: SortOrder
    needsLoan?: SortOrder
    employmentStatus?: SortOrder
    willingToRelocate?: SortOrder
    hasLaptop?: SortOrder
    availability?: SortOrder
    motivationEssay?: SortOrder
    futureGoals?: SortOrder
    willingToCommit?: SortOrder
    nyscStatus?: SortOrder
    wantsMentor?: SortOrder
    cybersecurityAnswers?: SortOrder
    applicationFeeStatus?: SortOrder
    frappeId?: SortOrder
    odooId?: SortOrder
    socialRegisterId?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentApplicationAvgOrderByAggregateInput = {
    englishReading?: SortOrder
    englishWriting?: SortOrder
    englishSpeaking?: SortOrder
    typingSpeed?: SortOrder
    zoomConfidence?: SortOrder
    slackConfidence?: SortOrder
    emailConfidence?: SortOrder
    docsConfidence?: SortOrder
    odooId?: SortOrder
  }

  export type StudentApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    stateOfOrigin?: SortOrder
    currentResidence?: SortOrder
    educationLevel?: SortOrder
    areaOfStudy?: SortOrder
    preferredTrack?: SortOrder
    englishReading?: SortOrder
    englishWriting?: SortOrder
    englishSpeaking?: SortOrder
    typingSpeed?: SortOrder
    zoomConfidence?: SortOrder
    slackConfidence?: SortOrder
    emailConfidence?: SortOrder
    docsConfidence?: SortOrder
    needsLoan?: SortOrder
    employmentStatus?: SortOrder
    willingToRelocate?: SortOrder
    hasLaptop?: SortOrder
    availability?: SortOrder
    motivationEssay?: SortOrder
    futureGoals?: SortOrder
    willingToCommit?: SortOrder
    nyscStatus?: SortOrder
    wantsMentor?: SortOrder
    applicationFeeStatus?: SortOrder
    frappeId?: SortOrder
    odooId?: SortOrder
    socialRegisterId?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    stateOfOrigin?: SortOrder
    currentResidence?: SortOrder
    educationLevel?: SortOrder
    areaOfStudy?: SortOrder
    preferredTrack?: SortOrder
    englishReading?: SortOrder
    englishWriting?: SortOrder
    englishSpeaking?: SortOrder
    typingSpeed?: SortOrder
    zoomConfidence?: SortOrder
    slackConfidence?: SortOrder
    emailConfidence?: SortOrder
    docsConfidence?: SortOrder
    needsLoan?: SortOrder
    employmentStatus?: SortOrder
    willingToRelocate?: SortOrder
    hasLaptop?: SortOrder
    availability?: SortOrder
    motivationEssay?: SortOrder
    futureGoals?: SortOrder
    willingToCommit?: SortOrder
    nyscStatus?: SortOrder
    wantsMentor?: SortOrder
    applicationFeeStatus?: SortOrder
    frappeId?: SortOrder
    odooId?: SortOrder
    socialRegisterId?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentApplicationSumOrderByAggregateInput = {
    englishReading?: SortOrder
    englishWriting?: SortOrder
    englishSpeaking?: SortOrder
    typingSpeed?: SortOrder
    zoomConfidence?: SortOrder
    slackConfidence?: SortOrder
    emailConfidence?: SortOrder
    docsConfidence?: SortOrder
    odooId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumEducationLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEducationLevelWithAggregatesFilter<$PrismaModel> | $Enums.EducationLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEducationLevelFilter<$PrismaModel>
    _max?: NestedEnumEducationLevelFilter<$PrismaModel>
  }

  export type EnumAreaOfStudyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AreaOfStudy | EnumAreaOfStudyFieldRefInput<$PrismaModel>
    in?: $Enums.AreaOfStudy[] | ListEnumAreaOfStudyFieldRefInput<$PrismaModel>
    notIn?: $Enums.AreaOfStudy[] | ListEnumAreaOfStudyFieldRefInput<$PrismaModel>
    not?: NestedEnumAreaOfStudyWithAggregatesFilter<$PrismaModel> | $Enums.AreaOfStudy
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAreaOfStudyFilter<$PrismaModel>
    _max?: NestedEnumAreaOfStudyFilter<$PrismaModel>
  }

  export type EnumPreferredTrackWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PreferredTrack | EnumPreferredTrackFieldRefInput<$PrismaModel>
    in?: $Enums.PreferredTrack[] | ListEnumPreferredTrackFieldRefInput<$PrismaModel>
    notIn?: $Enums.PreferredTrack[] | ListEnumPreferredTrackFieldRefInput<$PrismaModel>
    not?: NestedEnumPreferredTrackWithAggregatesFilter<$PrismaModel> | $Enums.PreferredTrack
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPreferredTrackFilter<$PrismaModel>
    _max?: NestedEnumPreferredTrackFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumEmploymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentStatus | EnumEmploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmploymentStatusFilter<$PrismaModel>
    _max?: NestedEnumEmploymentStatusFilter<$PrismaModel>
  }

  export type EnumAvailabilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Availability | EnumAvailabilityFieldRefInput<$PrismaModel>
    in?: $Enums.Availability[] | ListEnumAvailabilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Availability[] | ListEnumAvailabilityFieldRefInput<$PrismaModel>
    not?: NestedEnumAvailabilityWithAggregatesFilter<$PrismaModel> | $Enums.Availability
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAvailabilityFilter<$PrismaModel>
    _max?: NestedEnumAvailabilityFilter<$PrismaModel>
  }

  export type EnumNYSCStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NYSCStatus | EnumNYSCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NYSCStatus[] | ListEnumNYSCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NYSCStatus[] | ListEnumNYSCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNYSCStatusWithAggregatesFilter<$PrismaModel> | $Enums.NYSCStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNYSCStatusFilter<$PrismaModel>
    _max?: NestedEnumNYSCStatusFilter<$PrismaModel>
  }

  export type EnumApplicationFeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationFeeStatus | EnumApplicationFeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationFeeStatus[] | ListEnumApplicationFeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationFeeStatus[] | ListEnumApplicationFeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationFeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationFeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationFeeStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationFeeStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type StudentApplicationRelationFilter = {
    is?: StudentApplicationWhereInput
    isNot?: StudentApplicationWhereInput
  }

  export type SocialRegisterNullableRelationFilter = {
    is?: SocialRegisterWhereInput | null
    isNot?: SocialRegisterWhereInput | null
  }

  export type StudentApplicationPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    socialRegisterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentApplicationPaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StudentApplicationPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    socialRegisterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentApplicationPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    socialRegisterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentApplicationPaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type SocialRegisterCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    nationalId?: SortOrder
    lga?: SortOrder
    state?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type SocialRegisterAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type SocialRegisterMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    nationalId?: SortOrder
    lga?: SortOrder
    state?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type SocialRegisterMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    nationalId?: SortOrder
    lga?: SortOrder
    state?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type SocialRegisterSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type StudentApplicationCreatebasicITSkillsInput = {
    set: string[]
  }

  export type StudentApplicationCreateproblemSolvingAnswersInput = {
    set: string[]
  }

  export type StudentApplicationCreatecybersecurityAnswersInput = {
    set: string[]
  }

  export type StudentApplicationPaymentCreateNestedManyWithoutApplicationInput = {
    create?: XOR<StudentApplicationPaymentCreateWithoutApplicationInput, StudentApplicationPaymentUncheckedCreateWithoutApplicationInput> | StudentApplicationPaymentCreateWithoutApplicationInput[] | StudentApplicationPaymentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: StudentApplicationPaymentCreateOrConnectWithoutApplicationInput | StudentApplicationPaymentCreateOrConnectWithoutApplicationInput[]
    createMany?: StudentApplicationPaymentCreateManyApplicationInputEnvelope
    connect?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
  }

  export type StudentApplicationPaymentUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<StudentApplicationPaymentCreateWithoutApplicationInput, StudentApplicationPaymentUncheckedCreateWithoutApplicationInput> | StudentApplicationPaymentCreateWithoutApplicationInput[] | StudentApplicationPaymentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: StudentApplicationPaymentCreateOrConnectWithoutApplicationInput | StudentApplicationPaymentCreateOrConnectWithoutApplicationInput[]
    createMany?: StudentApplicationPaymentCreateManyApplicationInputEnvelope
    connect?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumEducationLevelFieldUpdateOperationsInput = {
    set?: $Enums.EducationLevel
  }

  export type EnumAreaOfStudyFieldUpdateOperationsInput = {
    set?: $Enums.AreaOfStudy
  }

  export type EnumPreferredTrackFieldUpdateOperationsInput = {
    set?: $Enums.PreferredTrack
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentApplicationUpdatebasicITSkillsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type StudentApplicationUpdateproblemSolvingAnswersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumEmploymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmploymentStatus
  }

  export type EnumAvailabilityFieldUpdateOperationsInput = {
    set?: $Enums.Availability
  }

  export type EnumNYSCStatusFieldUpdateOperationsInput = {
    set?: $Enums.NYSCStatus
  }

  export type StudentApplicationUpdatecybersecurityAnswersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumApplicationFeeStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationFeeStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentApplicationPaymentUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<StudentApplicationPaymentCreateWithoutApplicationInput, StudentApplicationPaymentUncheckedCreateWithoutApplicationInput> | StudentApplicationPaymentCreateWithoutApplicationInput[] | StudentApplicationPaymentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: StudentApplicationPaymentCreateOrConnectWithoutApplicationInput | StudentApplicationPaymentCreateOrConnectWithoutApplicationInput[]
    upsert?: StudentApplicationPaymentUpsertWithWhereUniqueWithoutApplicationInput | StudentApplicationPaymentUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: StudentApplicationPaymentCreateManyApplicationInputEnvelope
    set?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
    disconnect?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
    delete?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
    connect?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
    update?: StudentApplicationPaymentUpdateWithWhereUniqueWithoutApplicationInput | StudentApplicationPaymentUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: StudentApplicationPaymentUpdateManyWithWhereWithoutApplicationInput | StudentApplicationPaymentUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: StudentApplicationPaymentScalarWhereInput | StudentApplicationPaymentScalarWhereInput[]
  }

  export type StudentApplicationPaymentUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<StudentApplicationPaymentCreateWithoutApplicationInput, StudentApplicationPaymentUncheckedCreateWithoutApplicationInput> | StudentApplicationPaymentCreateWithoutApplicationInput[] | StudentApplicationPaymentUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: StudentApplicationPaymentCreateOrConnectWithoutApplicationInput | StudentApplicationPaymentCreateOrConnectWithoutApplicationInput[]
    upsert?: StudentApplicationPaymentUpsertWithWhereUniqueWithoutApplicationInput | StudentApplicationPaymentUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: StudentApplicationPaymentCreateManyApplicationInputEnvelope
    set?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
    disconnect?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
    delete?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
    connect?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
    update?: StudentApplicationPaymentUpdateWithWhereUniqueWithoutApplicationInput | StudentApplicationPaymentUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: StudentApplicationPaymentUpdateManyWithWhereWithoutApplicationInput | StudentApplicationPaymentUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: StudentApplicationPaymentScalarWhereInput | StudentApplicationPaymentScalarWhereInput[]
  }

  export type StudentApplicationCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<StudentApplicationCreateWithoutPaymentsInput, StudentApplicationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutPaymentsInput
    connect?: StudentApplicationWhereUniqueInput
  }

  export type SocialRegisterCreateNestedOneWithoutApplicationPaymentsInput = {
    create?: XOR<SocialRegisterCreateWithoutApplicationPaymentsInput, SocialRegisterUncheckedCreateWithoutApplicationPaymentsInput>
    connectOrCreate?: SocialRegisterCreateOrConnectWithoutApplicationPaymentsInput
    connect?: SocialRegisterWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type StudentApplicationUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutPaymentsInput, StudentApplicationUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutPaymentsInput
    upsert?: StudentApplicationUpsertWithoutPaymentsInput
    connect?: StudentApplicationWhereUniqueInput
    update?: XOR<XOR<StudentApplicationUpdateToOneWithWhereWithoutPaymentsInput, StudentApplicationUpdateWithoutPaymentsInput>, StudentApplicationUncheckedUpdateWithoutPaymentsInput>
  }

  export type SocialRegisterUpdateOneWithoutApplicationPaymentsNestedInput = {
    create?: XOR<SocialRegisterCreateWithoutApplicationPaymentsInput, SocialRegisterUncheckedCreateWithoutApplicationPaymentsInput>
    connectOrCreate?: SocialRegisterCreateOrConnectWithoutApplicationPaymentsInput
    upsert?: SocialRegisterUpsertWithoutApplicationPaymentsInput
    disconnect?: SocialRegisterWhereInput | boolean
    delete?: SocialRegisterWhereInput | boolean
    connect?: SocialRegisterWhereUniqueInput
    update?: XOR<XOR<SocialRegisterUpdateToOneWithWhereWithoutApplicationPaymentsInput, SocialRegisterUpdateWithoutApplicationPaymentsInput>, SocialRegisterUncheckedUpdateWithoutApplicationPaymentsInput>
  }

  export type StudentApplicationPaymentCreateNestedManyWithoutSocialRegisterInput = {
    create?: XOR<StudentApplicationPaymentCreateWithoutSocialRegisterInput, StudentApplicationPaymentUncheckedCreateWithoutSocialRegisterInput> | StudentApplicationPaymentCreateWithoutSocialRegisterInput[] | StudentApplicationPaymentUncheckedCreateWithoutSocialRegisterInput[]
    connectOrCreate?: StudentApplicationPaymentCreateOrConnectWithoutSocialRegisterInput | StudentApplicationPaymentCreateOrConnectWithoutSocialRegisterInput[]
    createMany?: StudentApplicationPaymentCreateManySocialRegisterInputEnvelope
    connect?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
  }

  export type StudentApplicationPaymentUncheckedCreateNestedManyWithoutSocialRegisterInput = {
    create?: XOR<StudentApplicationPaymentCreateWithoutSocialRegisterInput, StudentApplicationPaymentUncheckedCreateWithoutSocialRegisterInput> | StudentApplicationPaymentCreateWithoutSocialRegisterInput[] | StudentApplicationPaymentUncheckedCreateWithoutSocialRegisterInput[]
    connectOrCreate?: StudentApplicationPaymentCreateOrConnectWithoutSocialRegisterInput | StudentApplicationPaymentCreateOrConnectWithoutSocialRegisterInput[]
    createMany?: StudentApplicationPaymentCreateManySocialRegisterInputEnvelope
    connect?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
  }

  export type StudentApplicationPaymentUpdateManyWithoutSocialRegisterNestedInput = {
    create?: XOR<StudentApplicationPaymentCreateWithoutSocialRegisterInput, StudentApplicationPaymentUncheckedCreateWithoutSocialRegisterInput> | StudentApplicationPaymentCreateWithoutSocialRegisterInput[] | StudentApplicationPaymentUncheckedCreateWithoutSocialRegisterInput[]
    connectOrCreate?: StudentApplicationPaymentCreateOrConnectWithoutSocialRegisterInput | StudentApplicationPaymentCreateOrConnectWithoutSocialRegisterInput[]
    upsert?: StudentApplicationPaymentUpsertWithWhereUniqueWithoutSocialRegisterInput | StudentApplicationPaymentUpsertWithWhereUniqueWithoutSocialRegisterInput[]
    createMany?: StudentApplicationPaymentCreateManySocialRegisterInputEnvelope
    set?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
    disconnect?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
    delete?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
    connect?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
    update?: StudentApplicationPaymentUpdateWithWhereUniqueWithoutSocialRegisterInput | StudentApplicationPaymentUpdateWithWhereUniqueWithoutSocialRegisterInput[]
    updateMany?: StudentApplicationPaymentUpdateManyWithWhereWithoutSocialRegisterInput | StudentApplicationPaymentUpdateManyWithWhereWithoutSocialRegisterInput[]
    deleteMany?: StudentApplicationPaymentScalarWhereInput | StudentApplicationPaymentScalarWhereInput[]
  }

  export type StudentApplicationPaymentUncheckedUpdateManyWithoutSocialRegisterNestedInput = {
    create?: XOR<StudentApplicationPaymentCreateWithoutSocialRegisterInput, StudentApplicationPaymentUncheckedCreateWithoutSocialRegisterInput> | StudentApplicationPaymentCreateWithoutSocialRegisterInput[] | StudentApplicationPaymentUncheckedCreateWithoutSocialRegisterInput[]
    connectOrCreate?: StudentApplicationPaymentCreateOrConnectWithoutSocialRegisterInput | StudentApplicationPaymentCreateOrConnectWithoutSocialRegisterInput[]
    upsert?: StudentApplicationPaymentUpsertWithWhereUniqueWithoutSocialRegisterInput | StudentApplicationPaymentUpsertWithWhereUniqueWithoutSocialRegisterInput[]
    createMany?: StudentApplicationPaymentCreateManySocialRegisterInputEnvelope
    set?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
    disconnect?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
    delete?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
    connect?: StudentApplicationPaymentWhereUniqueInput | StudentApplicationPaymentWhereUniqueInput[]
    update?: StudentApplicationPaymentUpdateWithWhereUniqueWithoutSocialRegisterInput | StudentApplicationPaymentUpdateWithWhereUniqueWithoutSocialRegisterInput[]
    updateMany?: StudentApplicationPaymentUpdateManyWithWhereWithoutSocialRegisterInput | StudentApplicationPaymentUpdateManyWithWhereWithoutSocialRegisterInput[]
    deleteMany?: StudentApplicationPaymentScalarWhereInput | StudentApplicationPaymentScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumEducationLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEducationLevelFilter<$PrismaModel> | $Enums.EducationLevel
  }

  export type NestedEnumAreaOfStudyFilter<$PrismaModel = never> = {
    equals?: $Enums.AreaOfStudy | EnumAreaOfStudyFieldRefInput<$PrismaModel>
    in?: $Enums.AreaOfStudy[] | ListEnumAreaOfStudyFieldRefInput<$PrismaModel>
    notIn?: $Enums.AreaOfStudy[] | ListEnumAreaOfStudyFieldRefInput<$PrismaModel>
    not?: NestedEnumAreaOfStudyFilter<$PrismaModel> | $Enums.AreaOfStudy
  }

  export type NestedEnumPreferredTrackFilter<$PrismaModel = never> = {
    equals?: $Enums.PreferredTrack | EnumPreferredTrackFieldRefInput<$PrismaModel>
    in?: $Enums.PreferredTrack[] | ListEnumPreferredTrackFieldRefInput<$PrismaModel>
    notIn?: $Enums.PreferredTrack[] | ListEnumPreferredTrackFieldRefInput<$PrismaModel>
    not?: NestedEnumPreferredTrackFilter<$PrismaModel> | $Enums.PreferredTrack
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumEmploymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentStatus | EnumEmploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentStatusFilter<$PrismaModel> | $Enums.EmploymentStatus
  }

  export type NestedEnumAvailabilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Availability | EnumAvailabilityFieldRefInput<$PrismaModel>
    in?: $Enums.Availability[] | ListEnumAvailabilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Availability[] | ListEnumAvailabilityFieldRefInput<$PrismaModel>
    not?: NestedEnumAvailabilityFilter<$PrismaModel> | $Enums.Availability
  }

  export type NestedEnumNYSCStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NYSCStatus | EnumNYSCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NYSCStatus[] | ListEnumNYSCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NYSCStatus[] | ListEnumNYSCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNYSCStatusFilter<$PrismaModel> | $Enums.NYSCStatus
  }

  export type NestedEnumApplicationFeeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationFeeStatus | EnumApplicationFeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationFeeStatus[] | ListEnumApplicationFeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationFeeStatus[] | ListEnumApplicationFeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationFeeStatusFilter<$PrismaModel> | $Enums.ApplicationFeeStatus
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumEducationLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EducationLevel | EnumEducationLevelFieldRefInput<$PrismaModel>
    in?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.EducationLevel[] | ListEnumEducationLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumEducationLevelWithAggregatesFilter<$PrismaModel> | $Enums.EducationLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEducationLevelFilter<$PrismaModel>
    _max?: NestedEnumEducationLevelFilter<$PrismaModel>
  }

  export type NestedEnumAreaOfStudyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AreaOfStudy | EnumAreaOfStudyFieldRefInput<$PrismaModel>
    in?: $Enums.AreaOfStudy[] | ListEnumAreaOfStudyFieldRefInput<$PrismaModel>
    notIn?: $Enums.AreaOfStudy[] | ListEnumAreaOfStudyFieldRefInput<$PrismaModel>
    not?: NestedEnumAreaOfStudyWithAggregatesFilter<$PrismaModel> | $Enums.AreaOfStudy
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAreaOfStudyFilter<$PrismaModel>
    _max?: NestedEnumAreaOfStudyFilter<$PrismaModel>
  }

  export type NestedEnumPreferredTrackWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PreferredTrack | EnumPreferredTrackFieldRefInput<$PrismaModel>
    in?: $Enums.PreferredTrack[] | ListEnumPreferredTrackFieldRefInput<$PrismaModel>
    notIn?: $Enums.PreferredTrack[] | ListEnumPreferredTrackFieldRefInput<$PrismaModel>
    not?: NestedEnumPreferredTrackWithAggregatesFilter<$PrismaModel> | $Enums.PreferredTrack
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPreferredTrackFilter<$PrismaModel>
    _max?: NestedEnumPreferredTrackFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumEmploymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentStatus | EnumEmploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentStatus[] | ListEnumEmploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmploymentStatusFilter<$PrismaModel>
    _max?: NestedEnumEmploymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumAvailabilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Availability | EnumAvailabilityFieldRefInput<$PrismaModel>
    in?: $Enums.Availability[] | ListEnumAvailabilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Availability[] | ListEnumAvailabilityFieldRefInput<$PrismaModel>
    not?: NestedEnumAvailabilityWithAggregatesFilter<$PrismaModel> | $Enums.Availability
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAvailabilityFilter<$PrismaModel>
    _max?: NestedEnumAvailabilityFilter<$PrismaModel>
  }

  export type NestedEnumNYSCStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NYSCStatus | EnumNYSCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NYSCStatus[] | ListEnumNYSCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.NYSCStatus[] | ListEnumNYSCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumNYSCStatusWithAggregatesFilter<$PrismaModel> | $Enums.NYSCStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNYSCStatusFilter<$PrismaModel>
    _max?: NestedEnumNYSCStatusFilter<$PrismaModel>
  }

  export type NestedEnumApplicationFeeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationFeeStatus | EnumApplicationFeeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationFeeStatus[] | ListEnumApplicationFeeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationFeeStatus[] | ListEnumApplicationFeeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationFeeStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationFeeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationFeeStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationFeeStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type StudentApplicationPaymentCreateWithoutApplicationInput = {
    id?: string
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    socialRegister?: SocialRegisterCreateNestedOneWithoutApplicationPaymentsInput
  }

  export type StudentApplicationPaymentUncheckedCreateWithoutApplicationInput = {
    id?: string
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    reference?: string | null
    socialRegisterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentApplicationPaymentCreateOrConnectWithoutApplicationInput = {
    where: StudentApplicationPaymentWhereUniqueInput
    create: XOR<StudentApplicationPaymentCreateWithoutApplicationInput, StudentApplicationPaymentUncheckedCreateWithoutApplicationInput>
  }

  export type StudentApplicationPaymentCreateManyApplicationInputEnvelope = {
    data: StudentApplicationPaymentCreateManyApplicationInput | StudentApplicationPaymentCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type StudentApplicationPaymentUpsertWithWhereUniqueWithoutApplicationInput = {
    where: StudentApplicationPaymentWhereUniqueInput
    update: XOR<StudentApplicationPaymentUpdateWithoutApplicationInput, StudentApplicationPaymentUncheckedUpdateWithoutApplicationInput>
    create: XOR<StudentApplicationPaymentCreateWithoutApplicationInput, StudentApplicationPaymentUncheckedCreateWithoutApplicationInput>
  }

  export type StudentApplicationPaymentUpdateWithWhereUniqueWithoutApplicationInput = {
    where: StudentApplicationPaymentWhereUniqueInput
    data: XOR<StudentApplicationPaymentUpdateWithoutApplicationInput, StudentApplicationPaymentUncheckedUpdateWithoutApplicationInput>
  }

  export type StudentApplicationPaymentUpdateManyWithWhereWithoutApplicationInput = {
    where: StudentApplicationPaymentScalarWhereInput
    data: XOR<StudentApplicationPaymentUpdateManyMutationInput, StudentApplicationPaymentUncheckedUpdateManyWithoutApplicationInput>
  }

  export type StudentApplicationPaymentScalarWhereInput = {
    AND?: StudentApplicationPaymentScalarWhereInput | StudentApplicationPaymentScalarWhereInput[]
    OR?: StudentApplicationPaymentScalarWhereInput[]
    NOT?: StudentApplicationPaymentScalarWhereInput | StudentApplicationPaymentScalarWhereInput[]
    id?: StringFilter<"StudentApplicationPayment"> | string
    applicationId?: StringFilter<"StudentApplicationPayment"> | string
    amount?: FloatFilter<"StudentApplicationPayment"> | number
    currency?: StringFilter<"StudentApplicationPayment"> | string
    status?: EnumPaymentStatusFilter<"StudentApplicationPayment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodFilter<"StudentApplicationPayment"> | $Enums.PaymentMethod
    reference?: StringNullableFilter<"StudentApplicationPayment"> | string | null
    socialRegisterId?: StringNullableFilter<"StudentApplicationPayment"> | string | null
    createdAt?: DateTimeFilter<"StudentApplicationPayment"> | Date | string
    updatedAt?: DateTimeFilter<"StudentApplicationPayment"> | Date | string
  }

  export type StudentApplicationCreateWithoutPaymentsInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    stateOfOrigin: string
    currentResidence?: string | null
    educationLevel: $Enums.EducationLevel
    areaOfStudy: $Enums.AreaOfStudy
    preferredTrack: $Enums.PreferredTrack
    englishReading: number
    englishWriting: number
    englishSpeaking: number
    basicITSkills?: StudentApplicationCreatebasicITSkillsInput | string[]
    typingSpeed: number
    zoomConfidence: number
    slackConfidence: number
    emailConfidence: number
    docsConfidence: number
    problemSolvingAnswers?: StudentApplicationCreateproblemSolvingAnswersInput | string[]
    needsLoan: boolean
    employmentStatus: $Enums.EmploymentStatus
    willingToRelocate: boolean
    hasLaptop: boolean
    availability: $Enums.Availability
    motivationEssay: string
    futureGoals: string
    willingToCommit: boolean
    nyscStatus: $Enums.NYSCStatus
    wantsMentor: boolean
    cybersecurityAnswers?: StudentApplicationCreatecybersecurityAnswersInput | string[]
    applicationFeeStatus?: $Enums.ApplicationFeeStatus
    frappeId?: string | null
    odooId?: number | null
    socialRegisterId?: string | null
    createdAt?: Date | string
  }

  export type StudentApplicationUncheckedCreateWithoutPaymentsInput = {
    id?: string
    fullName: string
    email: string
    phoneNumber: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    stateOfOrigin: string
    currentResidence?: string | null
    educationLevel: $Enums.EducationLevel
    areaOfStudy: $Enums.AreaOfStudy
    preferredTrack: $Enums.PreferredTrack
    englishReading: number
    englishWriting: number
    englishSpeaking: number
    basicITSkills?: StudentApplicationCreatebasicITSkillsInput | string[]
    typingSpeed: number
    zoomConfidence: number
    slackConfidence: number
    emailConfidence: number
    docsConfidence: number
    problemSolvingAnswers?: StudentApplicationCreateproblemSolvingAnswersInput | string[]
    needsLoan: boolean
    employmentStatus: $Enums.EmploymentStatus
    willingToRelocate: boolean
    hasLaptop: boolean
    availability: $Enums.Availability
    motivationEssay: string
    futureGoals: string
    willingToCommit: boolean
    nyscStatus: $Enums.NYSCStatus
    wantsMentor: boolean
    cybersecurityAnswers?: StudentApplicationCreatecybersecurityAnswersInput | string[]
    applicationFeeStatus?: $Enums.ApplicationFeeStatus
    frappeId?: string | null
    odooId?: number | null
    socialRegisterId?: string | null
    createdAt?: Date | string
  }

  export type StudentApplicationCreateOrConnectWithoutPaymentsInput = {
    where: StudentApplicationWhereUniqueInput
    create: XOR<StudentApplicationCreateWithoutPaymentsInput, StudentApplicationUncheckedCreateWithoutPaymentsInput>
  }

  export type SocialRegisterCreateWithoutApplicationPaymentsInput = {
    id?: string
    fullName: string
    nationalId: string
    lga: string
    state: string
    gender: $Enums.Gender
    age: number
    email?: string | null
    phone?: string | null
  }

  export type SocialRegisterUncheckedCreateWithoutApplicationPaymentsInput = {
    id?: string
    fullName: string
    nationalId: string
    lga: string
    state: string
    gender: $Enums.Gender
    age: number
    email?: string | null
    phone?: string | null
  }

  export type SocialRegisterCreateOrConnectWithoutApplicationPaymentsInput = {
    where: SocialRegisterWhereUniqueInput
    create: XOR<SocialRegisterCreateWithoutApplicationPaymentsInput, SocialRegisterUncheckedCreateWithoutApplicationPaymentsInput>
  }

  export type StudentApplicationUpsertWithoutPaymentsInput = {
    update: XOR<StudentApplicationUpdateWithoutPaymentsInput, StudentApplicationUncheckedUpdateWithoutPaymentsInput>
    create: XOR<StudentApplicationCreateWithoutPaymentsInput, StudentApplicationUncheckedCreateWithoutPaymentsInput>
    where?: StudentApplicationWhereInput
  }

  export type StudentApplicationUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: StudentApplicationWhereInput
    data: XOR<StudentApplicationUpdateWithoutPaymentsInput, StudentApplicationUncheckedUpdateWithoutPaymentsInput>
  }

  export type StudentApplicationUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    stateOfOrigin?: StringFieldUpdateOperationsInput | string
    currentResidence?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    areaOfStudy?: EnumAreaOfStudyFieldUpdateOperationsInput | $Enums.AreaOfStudy
    preferredTrack?: EnumPreferredTrackFieldUpdateOperationsInput | $Enums.PreferredTrack
    englishReading?: IntFieldUpdateOperationsInput | number
    englishWriting?: IntFieldUpdateOperationsInput | number
    englishSpeaking?: IntFieldUpdateOperationsInput | number
    basicITSkills?: StudentApplicationUpdatebasicITSkillsInput | string[]
    typingSpeed?: IntFieldUpdateOperationsInput | number
    zoomConfidence?: IntFieldUpdateOperationsInput | number
    slackConfidence?: IntFieldUpdateOperationsInput | number
    emailConfidence?: IntFieldUpdateOperationsInput | number
    docsConfidence?: IntFieldUpdateOperationsInput | number
    problemSolvingAnswers?: StudentApplicationUpdateproblemSolvingAnswersInput | string[]
    needsLoan?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    willingToRelocate?: BoolFieldUpdateOperationsInput | boolean
    hasLaptop?: BoolFieldUpdateOperationsInput | boolean
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    motivationEssay?: StringFieldUpdateOperationsInput | string
    futureGoals?: StringFieldUpdateOperationsInput | string
    willingToCommit?: BoolFieldUpdateOperationsInput | boolean
    nyscStatus?: EnumNYSCStatusFieldUpdateOperationsInput | $Enums.NYSCStatus
    wantsMentor?: BoolFieldUpdateOperationsInput | boolean
    cybersecurityAnswers?: StudentApplicationUpdatecybersecurityAnswersInput | string[]
    applicationFeeStatus?: EnumApplicationFeeStatusFieldUpdateOperationsInput | $Enums.ApplicationFeeStatus
    frappeId?: NullableStringFieldUpdateOperationsInput | string | null
    odooId?: NullableIntFieldUpdateOperationsInput | number | null
    socialRegisterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentApplicationUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    stateOfOrigin?: StringFieldUpdateOperationsInput | string
    currentResidence?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: EnumEducationLevelFieldUpdateOperationsInput | $Enums.EducationLevel
    areaOfStudy?: EnumAreaOfStudyFieldUpdateOperationsInput | $Enums.AreaOfStudy
    preferredTrack?: EnumPreferredTrackFieldUpdateOperationsInput | $Enums.PreferredTrack
    englishReading?: IntFieldUpdateOperationsInput | number
    englishWriting?: IntFieldUpdateOperationsInput | number
    englishSpeaking?: IntFieldUpdateOperationsInput | number
    basicITSkills?: StudentApplicationUpdatebasicITSkillsInput | string[]
    typingSpeed?: IntFieldUpdateOperationsInput | number
    zoomConfidence?: IntFieldUpdateOperationsInput | number
    slackConfidence?: IntFieldUpdateOperationsInput | number
    emailConfidence?: IntFieldUpdateOperationsInput | number
    docsConfidence?: IntFieldUpdateOperationsInput | number
    problemSolvingAnswers?: StudentApplicationUpdateproblemSolvingAnswersInput | string[]
    needsLoan?: BoolFieldUpdateOperationsInput | boolean
    employmentStatus?: EnumEmploymentStatusFieldUpdateOperationsInput | $Enums.EmploymentStatus
    willingToRelocate?: BoolFieldUpdateOperationsInput | boolean
    hasLaptop?: BoolFieldUpdateOperationsInput | boolean
    availability?: EnumAvailabilityFieldUpdateOperationsInput | $Enums.Availability
    motivationEssay?: StringFieldUpdateOperationsInput | string
    futureGoals?: StringFieldUpdateOperationsInput | string
    willingToCommit?: BoolFieldUpdateOperationsInput | boolean
    nyscStatus?: EnumNYSCStatusFieldUpdateOperationsInput | $Enums.NYSCStatus
    wantsMentor?: BoolFieldUpdateOperationsInput | boolean
    cybersecurityAnswers?: StudentApplicationUpdatecybersecurityAnswersInput | string[]
    applicationFeeStatus?: EnumApplicationFeeStatusFieldUpdateOperationsInput | $Enums.ApplicationFeeStatus
    frappeId?: NullableStringFieldUpdateOperationsInput | string | null
    odooId?: NullableIntFieldUpdateOperationsInput | number | null
    socialRegisterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialRegisterUpsertWithoutApplicationPaymentsInput = {
    update: XOR<SocialRegisterUpdateWithoutApplicationPaymentsInput, SocialRegisterUncheckedUpdateWithoutApplicationPaymentsInput>
    create: XOR<SocialRegisterCreateWithoutApplicationPaymentsInput, SocialRegisterUncheckedCreateWithoutApplicationPaymentsInput>
    where?: SocialRegisterWhereInput
  }

  export type SocialRegisterUpdateToOneWithWhereWithoutApplicationPaymentsInput = {
    where?: SocialRegisterWhereInput
    data: XOR<SocialRegisterUpdateWithoutApplicationPaymentsInput, SocialRegisterUncheckedUpdateWithoutApplicationPaymentsInput>
  }

  export type SocialRegisterUpdateWithoutApplicationPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SocialRegisterUncheckedUpdateWithoutApplicationPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nationalId?: StringFieldUpdateOperationsInput | string
    lga?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    age?: IntFieldUpdateOperationsInput | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentApplicationPaymentCreateWithoutSocialRegisterInput = {
    id?: string
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    application: StudentApplicationCreateNestedOneWithoutPaymentsInput
  }

  export type StudentApplicationPaymentUncheckedCreateWithoutSocialRegisterInput = {
    id?: string
    applicationId: string
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentApplicationPaymentCreateOrConnectWithoutSocialRegisterInput = {
    where: StudentApplicationPaymentWhereUniqueInput
    create: XOR<StudentApplicationPaymentCreateWithoutSocialRegisterInput, StudentApplicationPaymentUncheckedCreateWithoutSocialRegisterInput>
  }

  export type StudentApplicationPaymentCreateManySocialRegisterInputEnvelope = {
    data: StudentApplicationPaymentCreateManySocialRegisterInput | StudentApplicationPaymentCreateManySocialRegisterInput[]
    skipDuplicates?: boolean
  }

  export type StudentApplicationPaymentUpsertWithWhereUniqueWithoutSocialRegisterInput = {
    where: StudentApplicationPaymentWhereUniqueInput
    update: XOR<StudentApplicationPaymentUpdateWithoutSocialRegisterInput, StudentApplicationPaymentUncheckedUpdateWithoutSocialRegisterInput>
    create: XOR<StudentApplicationPaymentCreateWithoutSocialRegisterInput, StudentApplicationPaymentUncheckedCreateWithoutSocialRegisterInput>
  }

  export type StudentApplicationPaymentUpdateWithWhereUniqueWithoutSocialRegisterInput = {
    where: StudentApplicationPaymentWhereUniqueInput
    data: XOR<StudentApplicationPaymentUpdateWithoutSocialRegisterInput, StudentApplicationPaymentUncheckedUpdateWithoutSocialRegisterInput>
  }

  export type StudentApplicationPaymentUpdateManyWithWhereWithoutSocialRegisterInput = {
    where: StudentApplicationPaymentScalarWhereInput
    data: XOR<StudentApplicationPaymentUpdateManyMutationInput, StudentApplicationPaymentUncheckedUpdateManyWithoutSocialRegisterInput>
  }

  export type StudentApplicationPaymentCreateManyApplicationInput = {
    id?: string
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    reference?: string | null
    socialRegisterId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentApplicationPaymentUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialRegister?: SocialRegisterUpdateOneWithoutApplicationPaymentsNestedInput
  }

  export type StudentApplicationPaymentUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    socialRegisterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentApplicationPaymentUncheckedUpdateManyWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    socialRegisterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentApplicationPaymentCreateManySocialRegisterInput = {
    id?: string
    applicationId: string
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    method: $Enums.PaymentMethod
    reference?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentApplicationPaymentUpdateWithoutSocialRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: StudentApplicationUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type StudentApplicationPaymentUncheckedUpdateWithoutSocialRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentApplicationPaymentUncheckedUpdateManyWithoutSocialRegisterInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StudentApplicationCountOutputTypeDefaultArgs instead
     */
    export type StudentApplicationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentApplicationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SocialRegisterCountOutputTypeDefaultArgs instead
     */
    export type SocialRegisterCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SocialRegisterCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentApplicationDefaultArgs instead
     */
    export type StudentApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentApplicationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentApplicationPaymentDefaultArgs instead
     */
    export type StudentApplicationPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentApplicationPaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SocialRegisterDefaultArgs instead
     */
    export type SocialRegisterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SocialRegisterDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}