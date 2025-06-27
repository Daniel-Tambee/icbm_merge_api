
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
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model SocialRegisterEntry
 * 
 */
export type SocialRegisterEntry = $Result.DefaultSelection<Prisma.$SocialRegisterEntryPayload>
/**
 * Model Program
 * 
 */
export type Program = $Result.DefaultSelection<Prisma.$ProgramPayload>
/**
 * Model ProgramApplication
 * 
 */
export type ProgramApplication = $Result.DefaultSelection<Prisma.$ProgramApplicationPayload>
/**
 * Model SubsidyProvider
 * 
 */
export type SubsidyProvider = $Result.DefaultSelection<Prisma.$SubsidyProviderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProviderType: {
  GOVERNMENT: 'GOVERNMENT',
  NGO: 'NGO'
};

export type ProviderType = (typeof ProviderType)[keyof typeof ProviderType]

}

export type ProviderType = $Enums.ProviderType

export const ProviderType: typeof $Enums.ProviderType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
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
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
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
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs>;

  /**
   * `prisma.socialRegisterEntry`: Exposes CRUD operations for the **SocialRegisterEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialRegisterEntries
    * const socialRegisterEntries = await prisma.socialRegisterEntry.findMany()
    * ```
    */
  get socialRegisterEntry(): Prisma.SocialRegisterEntryDelegate<ExtArgs>;

  /**
   * `prisma.program`: Exposes CRUD operations for the **Program** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programs
    * const programs = await prisma.program.findMany()
    * ```
    */
  get program(): Prisma.ProgramDelegate<ExtArgs>;

  /**
   * `prisma.programApplication`: Exposes CRUD operations for the **ProgramApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgramApplications
    * const programApplications = await prisma.programApplication.findMany()
    * ```
    */
  get programApplication(): Prisma.ProgramApplicationDelegate<ExtArgs>;

  /**
   * `prisma.subsidyProvider`: Exposes CRUD operations for the **SubsidyProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubsidyProviders
    * const subsidyProviders = await prisma.subsidyProvider.findMany()
    * ```
    */
  get subsidyProvider(): Prisma.SubsidyProviderDelegate<ExtArgs>;
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
    Student: 'Student',
    SocialRegisterEntry: 'SocialRegisterEntry',
    Program: 'Program',
    ProgramApplication: 'ProgramApplication',
    SubsidyProvider: 'SubsidyProvider'
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
      modelProps: "student" | "socialRegisterEntry" | "program" | "programApplication" | "subsidyProvider"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      SocialRegisterEntry: {
        payload: Prisma.$SocialRegisterEntryPayload<ExtArgs>
        fields: Prisma.SocialRegisterEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialRegisterEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialRegisterEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterEntryPayload>
          }
          findFirst: {
            args: Prisma.SocialRegisterEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialRegisterEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterEntryPayload>
          }
          findMany: {
            args: Prisma.SocialRegisterEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterEntryPayload>[]
          }
          create: {
            args: Prisma.SocialRegisterEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterEntryPayload>
          }
          createMany: {
            args: Prisma.SocialRegisterEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialRegisterEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterEntryPayload>[]
          }
          delete: {
            args: Prisma.SocialRegisterEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterEntryPayload>
          }
          update: {
            args: Prisma.SocialRegisterEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterEntryPayload>
          }
          deleteMany: {
            args: Prisma.SocialRegisterEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialRegisterEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SocialRegisterEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialRegisterEntryPayload>
          }
          aggregate: {
            args: Prisma.SocialRegisterEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialRegisterEntry>
          }
          groupBy: {
            args: Prisma.SocialRegisterEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialRegisterEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialRegisterEntryCountArgs<ExtArgs>
            result: $Utils.Optional<SocialRegisterEntryCountAggregateOutputType> | number
          }
        }
      }
      Program: {
        payload: Prisma.$ProgramPayload<ExtArgs>
        fields: Prisma.ProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findFirst: {
            args: Prisma.ProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findMany: {
            args: Prisma.ProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          create: {
            args: Prisma.ProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          createMany: {
            args: Prisma.ProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          delete: {
            args: Prisma.ProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          update: {
            args: Prisma.ProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          deleteMany: {
            args: Prisma.ProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          aggregate: {
            args: Prisma.ProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgram>
          }
          groupBy: {
            args: Prisma.ProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramCountAggregateOutputType> | number
          }
        }
      }
      ProgramApplication: {
        payload: Prisma.$ProgramApplicationPayload<ExtArgs>
        fields: Prisma.ProgramApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramApplicationPayload>
          }
          findFirst: {
            args: Prisma.ProgramApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramApplicationPayload>
          }
          findMany: {
            args: Prisma.ProgramApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramApplicationPayload>[]
          }
          create: {
            args: Prisma.ProgramApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramApplicationPayload>
          }
          createMany: {
            args: Prisma.ProgramApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgramApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramApplicationPayload>[]
          }
          delete: {
            args: Prisma.ProgramApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramApplicationPayload>
          }
          update: {
            args: Prisma.ProgramApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ProgramApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgramApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramApplicationPayload>
          }
          aggregate: {
            args: Prisma.ProgramApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgramApplication>
          }
          groupBy: {
            args: Prisma.ProgramApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramApplicationCountAggregateOutputType> | number
          }
        }
      }
      SubsidyProvider: {
        payload: Prisma.$SubsidyProviderPayload<ExtArgs>
        fields: Prisma.SubsidyProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubsidyProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsidyProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubsidyProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsidyProviderPayload>
          }
          findFirst: {
            args: Prisma.SubsidyProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsidyProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubsidyProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsidyProviderPayload>
          }
          findMany: {
            args: Prisma.SubsidyProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsidyProviderPayload>[]
          }
          create: {
            args: Prisma.SubsidyProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsidyProviderPayload>
          }
          createMany: {
            args: Prisma.SubsidyProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubsidyProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsidyProviderPayload>[]
          }
          delete: {
            args: Prisma.SubsidyProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsidyProviderPayload>
          }
          update: {
            args: Prisma.SubsidyProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsidyProviderPayload>
          }
          deleteMany: {
            args: Prisma.SubsidyProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubsidyProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubsidyProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubsidyProviderPayload>
          }
          aggregate: {
            args: Prisma.SubsidyProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubsidyProvider>
          }
          groupBy: {
            args: Prisma.SubsidyProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubsidyProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubsidyProviderCountArgs<ExtArgs>
            result: $Utils.Optional<SubsidyProviderCountAggregateOutputType> | number
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
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    applications: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | StudentCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramApplicationWhereInput
  }


  /**
   * Count Type ProgramCountOutputType
   */

  export type ProgramCountOutputType = {
    applications: number
  }

  export type ProgramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | ProgramCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramCountOutputType
     */
    select?: ProgramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramApplicationWhereInput
  }


  /**
   * Count Type SubsidyProviderCountOutputType
   */

  export type SubsidyProviderCountOutputType = {
    entries: number
  }

  export type SubsidyProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | SubsidyProviderCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * SubsidyProviderCountOutputType without action
   */
  export type SubsidyProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsidyProviderCountOutputType
     */
    select?: SubsidyProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubsidyProviderCountOutputType without action
   */
  export type SubsidyProviderCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialRegisterEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    studentId: string | null
    registeredAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    studentId: string | null
    registeredAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    phone: number
    studentId: number
    registeredAt: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    studentId?: true
    registeredAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    studentId?: true
    registeredAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    studentId?: true
    registeredAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    fullName: string
    email: string
    phone: string | null
    studentId: string
    registeredAt: Date
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    studentId?: boolean
    registeredAt?: boolean
    socialRegisterEntry?: boolean | Student$socialRegisterEntryArgs<ExtArgs>
    applications?: boolean | Student$applicationsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    studentId?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    studentId?: boolean
    registeredAt?: boolean
  }

  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socialRegisterEntry?: boolean | Student$socialRegisterEntryArgs<ExtArgs>
    applications?: boolean | Student$applicationsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      socialRegisterEntry: Prisma.$SocialRegisterEntryPayload<ExtArgs> | null
      applications: Prisma.$ProgramApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      phone: string | null
      studentId: string
      registeredAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    socialRegisterEntry<T extends Student$socialRegisterEntryArgs<ExtArgs> = {}>(args?: Subset<T, Student$socialRegisterEntryArgs<ExtArgs>>): Prisma__SocialRegisterEntryClient<$Result.GetResult<Prisma.$SocialRegisterEntryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    applications<T extends Student$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Student$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramApplicationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Student model
   */ 
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly fullName: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly phone: FieldRef<"Student", 'String'>
    readonly studentId: FieldRef<"Student", 'String'>
    readonly registeredAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
  }

  /**
   * Student.socialRegisterEntry
   */
  export type Student$socialRegisterEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegisterEntry
     */
    select?: SocialRegisterEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterEntryInclude<ExtArgs> | null
    where?: SocialRegisterEntryWhereInput
  }

  /**
   * Student.applications
   */
  export type Student$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramApplication
     */
    select?: ProgramApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramApplicationInclude<ExtArgs> | null
    where?: ProgramApplicationWhereInput
    orderBy?: ProgramApplicationOrderByWithRelationInput | ProgramApplicationOrderByWithRelationInput[]
    cursor?: ProgramApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramApplicationScalarFieldEnum | ProgramApplicationScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model SocialRegisterEntry
   */

  export type AggregateSocialRegisterEntry = {
    _count: SocialRegisterEntryCountAggregateOutputType | null
    _min: SocialRegisterEntryMinAggregateOutputType | null
    _max: SocialRegisterEntryMaxAggregateOutputType | null
  }

  export type SocialRegisterEntryMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    providerId: string | null
    dateAdded: Date | null
  }

  export type SocialRegisterEntryMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    providerId: string | null
    dateAdded: Date | null
  }

  export type SocialRegisterEntryCountAggregateOutputType = {
    id: number
    studentId: number
    providerId: number
    dateAdded: number
    _all: number
  }


  export type SocialRegisterEntryMinAggregateInputType = {
    id?: true
    studentId?: true
    providerId?: true
    dateAdded?: true
  }

  export type SocialRegisterEntryMaxAggregateInputType = {
    id?: true
    studentId?: true
    providerId?: true
    dateAdded?: true
  }

  export type SocialRegisterEntryCountAggregateInputType = {
    id?: true
    studentId?: true
    providerId?: true
    dateAdded?: true
    _all?: true
  }

  export type SocialRegisterEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialRegisterEntry to aggregate.
     */
    where?: SocialRegisterEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialRegisterEntries to fetch.
     */
    orderBy?: SocialRegisterEntryOrderByWithRelationInput | SocialRegisterEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialRegisterEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialRegisterEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialRegisterEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialRegisterEntries
    **/
    _count?: true | SocialRegisterEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialRegisterEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialRegisterEntryMaxAggregateInputType
  }

  export type GetSocialRegisterEntryAggregateType<T extends SocialRegisterEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialRegisterEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialRegisterEntry[P]>
      : GetScalarType<T[P], AggregateSocialRegisterEntry[P]>
  }




  export type SocialRegisterEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialRegisterEntryWhereInput
    orderBy?: SocialRegisterEntryOrderByWithAggregationInput | SocialRegisterEntryOrderByWithAggregationInput[]
    by: SocialRegisterEntryScalarFieldEnum[] | SocialRegisterEntryScalarFieldEnum
    having?: SocialRegisterEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialRegisterEntryCountAggregateInputType | true
    _min?: SocialRegisterEntryMinAggregateInputType
    _max?: SocialRegisterEntryMaxAggregateInputType
  }

  export type SocialRegisterEntryGroupByOutputType = {
    id: string
    studentId: string
    providerId: string
    dateAdded: Date
    _count: SocialRegisterEntryCountAggregateOutputType | null
    _min: SocialRegisterEntryMinAggregateOutputType | null
    _max: SocialRegisterEntryMaxAggregateOutputType | null
  }

  type GetSocialRegisterEntryGroupByPayload<T extends SocialRegisterEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialRegisterEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialRegisterEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialRegisterEntryGroupByOutputType[P]>
            : GetScalarType<T[P], SocialRegisterEntryGroupByOutputType[P]>
        }
      >
    >


  export type SocialRegisterEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    providerId?: boolean
    dateAdded?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    provider?: boolean | SubsidyProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialRegisterEntry"]>

  export type SocialRegisterEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    providerId?: boolean
    dateAdded?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    provider?: boolean | SubsidyProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialRegisterEntry"]>

  export type SocialRegisterEntrySelectScalar = {
    id?: boolean
    studentId?: boolean
    providerId?: boolean
    dateAdded?: boolean
  }

  export type SocialRegisterEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    provider?: boolean | SubsidyProviderDefaultArgs<ExtArgs>
  }
  export type SocialRegisterEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    provider?: boolean | SubsidyProviderDefaultArgs<ExtArgs>
  }

  export type $SocialRegisterEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialRegisterEntry"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      provider: Prisma.$SubsidyProviderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      providerId: string
      dateAdded: Date
    }, ExtArgs["result"]["socialRegisterEntry"]>
    composites: {}
  }

  type SocialRegisterEntryGetPayload<S extends boolean | null | undefined | SocialRegisterEntryDefaultArgs> = $Result.GetResult<Prisma.$SocialRegisterEntryPayload, S>

  type SocialRegisterEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SocialRegisterEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SocialRegisterEntryCountAggregateInputType | true
    }

  export interface SocialRegisterEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialRegisterEntry'], meta: { name: 'SocialRegisterEntry' } }
    /**
     * Find zero or one SocialRegisterEntry that matches the filter.
     * @param {SocialRegisterEntryFindUniqueArgs} args - Arguments to find a SocialRegisterEntry
     * @example
     * // Get one SocialRegisterEntry
     * const socialRegisterEntry = await prisma.socialRegisterEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialRegisterEntryFindUniqueArgs>(args: SelectSubset<T, SocialRegisterEntryFindUniqueArgs<ExtArgs>>): Prisma__SocialRegisterEntryClient<$Result.GetResult<Prisma.$SocialRegisterEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SocialRegisterEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SocialRegisterEntryFindUniqueOrThrowArgs} args - Arguments to find a SocialRegisterEntry
     * @example
     * // Get one SocialRegisterEntry
     * const socialRegisterEntry = await prisma.socialRegisterEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialRegisterEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialRegisterEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialRegisterEntryClient<$Result.GetResult<Prisma.$SocialRegisterEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SocialRegisterEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialRegisterEntryFindFirstArgs} args - Arguments to find a SocialRegisterEntry
     * @example
     * // Get one SocialRegisterEntry
     * const socialRegisterEntry = await prisma.socialRegisterEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialRegisterEntryFindFirstArgs>(args?: SelectSubset<T, SocialRegisterEntryFindFirstArgs<ExtArgs>>): Prisma__SocialRegisterEntryClient<$Result.GetResult<Prisma.$SocialRegisterEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SocialRegisterEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialRegisterEntryFindFirstOrThrowArgs} args - Arguments to find a SocialRegisterEntry
     * @example
     * // Get one SocialRegisterEntry
     * const socialRegisterEntry = await prisma.socialRegisterEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialRegisterEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialRegisterEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialRegisterEntryClient<$Result.GetResult<Prisma.$SocialRegisterEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SocialRegisterEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialRegisterEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialRegisterEntries
     * const socialRegisterEntries = await prisma.socialRegisterEntry.findMany()
     * 
     * // Get first 10 SocialRegisterEntries
     * const socialRegisterEntries = await prisma.socialRegisterEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialRegisterEntryWithIdOnly = await prisma.socialRegisterEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialRegisterEntryFindManyArgs>(args?: SelectSubset<T, SocialRegisterEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialRegisterEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SocialRegisterEntry.
     * @param {SocialRegisterEntryCreateArgs} args - Arguments to create a SocialRegisterEntry.
     * @example
     * // Create one SocialRegisterEntry
     * const SocialRegisterEntry = await prisma.socialRegisterEntry.create({
     *   data: {
     *     // ... data to create a SocialRegisterEntry
     *   }
     * })
     * 
     */
    create<T extends SocialRegisterEntryCreateArgs>(args: SelectSubset<T, SocialRegisterEntryCreateArgs<ExtArgs>>): Prisma__SocialRegisterEntryClient<$Result.GetResult<Prisma.$SocialRegisterEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SocialRegisterEntries.
     * @param {SocialRegisterEntryCreateManyArgs} args - Arguments to create many SocialRegisterEntries.
     * @example
     * // Create many SocialRegisterEntries
     * const socialRegisterEntry = await prisma.socialRegisterEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialRegisterEntryCreateManyArgs>(args?: SelectSubset<T, SocialRegisterEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialRegisterEntries and returns the data saved in the database.
     * @param {SocialRegisterEntryCreateManyAndReturnArgs} args - Arguments to create many SocialRegisterEntries.
     * @example
     * // Create many SocialRegisterEntries
     * const socialRegisterEntry = await prisma.socialRegisterEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialRegisterEntries and only return the `id`
     * const socialRegisterEntryWithIdOnly = await prisma.socialRegisterEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialRegisterEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialRegisterEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialRegisterEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SocialRegisterEntry.
     * @param {SocialRegisterEntryDeleteArgs} args - Arguments to delete one SocialRegisterEntry.
     * @example
     * // Delete one SocialRegisterEntry
     * const SocialRegisterEntry = await prisma.socialRegisterEntry.delete({
     *   where: {
     *     // ... filter to delete one SocialRegisterEntry
     *   }
     * })
     * 
     */
    delete<T extends SocialRegisterEntryDeleteArgs>(args: SelectSubset<T, SocialRegisterEntryDeleteArgs<ExtArgs>>): Prisma__SocialRegisterEntryClient<$Result.GetResult<Prisma.$SocialRegisterEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SocialRegisterEntry.
     * @param {SocialRegisterEntryUpdateArgs} args - Arguments to update one SocialRegisterEntry.
     * @example
     * // Update one SocialRegisterEntry
     * const socialRegisterEntry = await prisma.socialRegisterEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialRegisterEntryUpdateArgs>(args: SelectSubset<T, SocialRegisterEntryUpdateArgs<ExtArgs>>): Prisma__SocialRegisterEntryClient<$Result.GetResult<Prisma.$SocialRegisterEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SocialRegisterEntries.
     * @param {SocialRegisterEntryDeleteManyArgs} args - Arguments to filter SocialRegisterEntries to delete.
     * @example
     * // Delete a few SocialRegisterEntries
     * const { count } = await prisma.socialRegisterEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialRegisterEntryDeleteManyArgs>(args?: SelectSubset<T, SocialRegisterEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialRegisterEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialRegisterEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialRegisterEntries
     * const socialRegisterEntry = await prisma.socialRegisterEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialRegisterEntryUpdateManyArgs>(args: SelectSubset<T, SocialRegisterEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SocialRegisterEntry.
     * @param {SocialRegisterEntryUpsertArgs} args - Arguments to update or create a SocialRegisterEntry.
     * @example
     * // Update or create a SocialRegisterEntry
     * const socialRegisterEntry = await prisma.socialRegisterEntry.upsert({
     *   create: {
     *     // ... data to create a SocialRegisterEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialRegisterEntry we want to update
     *   }
     * })
     */
    upsert<T extends SocialRegisterEntryUpsertArgs>(args: SelectSubset<T, SocialRegisterEntryUpsertArgs<ExtArgs>>): Prisma__SocialRegisterEntryClient<$Result.GetResult<Prisma.$SocialRegisterEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SocialRegisterEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialRegisterEntryCountArgs} args - Arguments to filter SocialRegisterEntries to count.
     * @example
     * // Count the number of SocialRegisterEntries
     * const count = await prisma.socialRegisterEntry.count({
     *   where: {
     *     // ... the filter for the SocialRegisterEntries we want to count
     *   }
     * })
    **/
    count<T extends SocialRegisterEntryCountArgs>(
      args?: Subset<T, SocialRegisterEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialRegisterEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialRegisterEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialRegisterEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialRegisterEntryAggregateArgs>(args: Subset<T, SocialRegisterEntryAggregateArgs>): Prisma.PrismaPromise<GetSocialRegisterEntryAggregateType<T>>

    /**
     * Group by SocialRegisterEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialRegisterEntryGroupByArgs} args - Group by arguments.
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
      T extends SocialRegisterEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialRegisterEntryGroupByArgs['orderBy'] }
        : { orderBy?: SocialRegisterEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialRegisterEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialRegisterEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialRegisterEntry model
   */
  readonly fields: SocialRegisterEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialRegisterEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialRegisterEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    provider<T extends SubsidyProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubsidyProviderDefaultArgs<ExtArgs>>): Prisma__SubsidyProviderClient<$Result.GetResult<Prisma.$SubsidyProviderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SocialRegisterEntry model
   */ 
  interface SocialRegisterEntryFieldRefs {
    readonly id: FieldRef<"SocialRegisterEntry", 'String'>
    readonly studentId: FieldRef<"SocialRegisterEntry", 'String'>
    readonly providerId: FieldRef<"SocialRegisterEntry", 'String'>
    readonly dateAdded: FieldRef<"SocialRegisterEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialRegisterEntry findUnique
   */
  export type SocialRegisterEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegisterEntry
     */
    select?: SocialRegisterEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterEntryInclude<ExtArgs> | null
    /**
     * Filter, which SocialRegisterEntry to fetch.
     */
    where: SocialRegisterEntryWhereUniqueInput
  }

  /**
   * SocialRegisterEntry findUniqueOrThrow
   */
  export type SocialRegisterEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegisterEntry
     */
    select?: SocialRegisterEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterEntryInclude<ExtArgs> | null
    /**
     * Filter, which SocialRegisterEntry to fetch.
     */
    where: SocialRegisterEntryWhereUniqueInput
  }

  /**
   * SocialRegisterEntry findFirst
   */
  export type SocialRegisterEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegisterEntry
     */
    select?: SocialRegisterEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterEntryInclude<ExtArgs> | null
    /**
     * Filter, which SocialRegisterEntry to fetch.
     */
    where?: SocialRegisterEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialRegisterEntries to fetch.
     */
    orderBy?: SocialRegisterEntryOrderByWithRelationInput | SocialRegisterEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialRegisterEntries.
     */
    cursor?: SocialRegisterEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialRegisterEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialRegisterEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialRegisterEntries.
     */
    distinct?: SocialRegisterEntryScalarFieldEnum | SocialRegisterEntryScalarFieldEnum[]
  }

  /**
   * SocialRegisterEntry findFirstOrThrow
   */
  export type SocialRegisterEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegisterEntry
     */
    select?: SocialRegisterEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterEntryInclude<ExtArgs> | null
    /**
     * Filter, which SocialRegisterEntry to fetch.
     */
    where?: SocialRegisterEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialRegisterEntries to fetch.
     */
    orderBy?: SocialRegisterEntryOrderByWithRelationInput | SocialRegisterEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialRegisterEntries.
     */
    cursor?: SocialRegisterEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialRegisterEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialRegisterEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialRegisterEntries.
     */
    distinct?: SocialRegisterEntryScalarFieldEnum | SocialRegisterEntryScalarFieldEnum[]
  }

  /**
   * SocialRegisterEntry findMany
   */
  export type SocialRegisterEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegisterEntry
     */
    select?: SocialRegisterEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterEntryInclude<ExtArgs> | null
    /**
     * Filter, which SocialRegisterEntries to fetch.
     */
    where?: SocialRegisterEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialRegisterEntries to fetch.
     */
    orderBy?: SocialRegisterEntryOrderByWithRelationInput | SocialRegisterEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialRegisterEntries.
     */
    cursor?: SocialRegisterEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialRegisterEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialRegisterEntries.
     */
    skip?: number
    distinct?: SocialRegisterEntryScalarFieldEnum | SocialRegisterEntryScalarFieldEnum[]
  }

  /**
   * SocialRegisterEntry create
   */
  export type SocialRegisterEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegisterEntry
     */
    select?: SocialRegisterEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialRegisterEntry.
     */
    data: XOR<SocialRegisterEntryCreateInput, SocialRegisterEntryUncheckedCreateInput>
  }

  /**
   * SocialRegisterEntry createMany
   */
  export type SocialRegisterEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialRegisterEntries.
     */
    data: SocialRegisterEntryCreateManyInput | SocialRegisterEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialRegisterEntry createManyAndReturn
   */
  export type SocialRegisterEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegisterEntry
     */
    select?: SocialRegisterEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SocialRegisterEntries.
     */
    data: SocialRegisterEntryCreateManyInput | SocialRegisterEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialRegisterEntry update
   */
  export type SocialRegisterEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegisterEntry
     */
    select?: SocialRegisterEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialRegisterEntry.
     */
    data: XOR<SocialRegisterEntryUpdateInput, SocialRegisterEntryUncheckedUpdateInput>
    /**
     * Choose, which SocialRegisterEntry to update.
     */
    where: SocialRegisterEntryWhereUniqueInput
  }

  /**
   * SocialRegisterEntry updateMany
   */
  export type SocialRegisterEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialRegisterEntries.
     */
    data: XOR<SocialRegisterEntryUpdateManyMutationInput, SocialRegisterEntryUncheckedUpdateManyInput>
    /**
     * Filter which SocialRegisterEntries to update
     */
    where?: SocialRegisterEntryWhereInput
  }

  /**
   * SocialRegisterEntry upsert
   */
  export type SocialRegisterEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegisterEntry
     */
    select?: SocialRegisterEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialRegisterEntry to update in case it exists.
     */
    where: SocialRegisterEntryWhereUniqueInput
    /**
     * In case the SocialRegisterEntry found by the `where` argument doesn't exist, create a new SocialRegisterEntry with this data.
     */
    create: XOR<SocialRegisterEntryCreateInput, SocialRegisterEntryUncheckedCreateInput>
    /**
     * In case the SocialRegisterEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialRegisterEntryUpdateInput, SocialRegisterEntryUncheckedUpdateInput>
  }

  /**
   * SocialRegisterEntry delete
   */
  export type SocialRegisterEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegisterEntry
     */
    select?: SocialRegisterEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterEntryInclude<ExtArgs> | null
    /**
     * Filter which SocialRegisterEntry to delete.
     */
    where: SocialRegisterEntryWhereUniqueInput
  }

  /**
   * SocialRegisterEntry deleteMany
   */
  export type SocialRegisterEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialRegisterEntries to delete
     */
    where?: SocialRegisterEntryWhereInput
  }

  /**
   * SocialRegisterEntry without action
   */
  export type SocialRegisterEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegisterEntry
     */
    select?: SocialRegisterEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterEntryInclude<ExtArgs> | null
  }


  /**
   * Model Program
   */

  export type AggregateProgram = {
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  export type ProgramAvgAggregateOutputType = {
    feeUSD: number | null
  }

  export type ProgramSumAggregateOutputType = {
    feeUSD: number | null
  }

  export type ProgramMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    feeUSD: number | null
    createdAt: Date | null
  }

  export type ProgramMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    feeUSD: number | null
    createdAt: Date | null
  }

  export type ProgramCountAggregateOutputType = {
    id: number
    name: number
    description: number
    feeUSD: number
    createdAt: number
    _all: number
  }


  export type ProgramAvgAggregateInputType = {
    feeUSD?: true
  }

  export type ProgramSumAggregateInputType = {
    feeUSD?: true
  }

  export type ProgramMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    feeUSD?: true
    createdAt?: true
  }

  export type ProgramMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    feeUSD?: true
    createdAt?: true
  }

  export type ProgramCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    feeUSD?: true
    createdAt?: true
    _all?: true
  }

  export type ProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Program to aggregate.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Programs
    **/
    _count?: true | ProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramMaxAggregateInputType
  }

  export type GetProgramAggregateType<T extends ProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgram[P]>
      : GetScalarType<T[P], AggregateProgram[P]>
  }




  export type ProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithAggregationInput | ProgramOrderByWithAggregationInput[]
    by: ProgramScalarFieldEnum[] | ProgramScalarFieldEnum
    having?: ProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramCountAggregateInputType | true
    _avg?: ProgramAvgAggregateInputType
    _sum?: ProgramSumAggregateInputType
    _min?: ProgramMinAggregateInputType
    _max?: ProgramMaxAggregateInputType
  }

  export type ProgramGroupByOutputType = {
    id: string
    name: string
    description: string | null
    feeUSD: number
    createdAt: Date
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  type GetProgramGroupByPayload<T extends ProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramGroupByOutputType[P]>
        }
      >
    >


  export type ProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    feeUSD?: boolean
    createdAt?: boolean
    applications?: boolean | Program$applicationsArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    feeUSD?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    feeUSD?: boolean
    createdAt?: boolean
  }

  export type ProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | Program$applicationsArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProgramIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Program"
    objects: {
      applications: Prisma.$ProgramApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      feeUSD: number
      createdAt: Date
    }, ExtArgs["result"]["program"]>
    composites: {}
  }

  type ProgramGetPayload<S extends boolean | null | undefined | ProgramDefaultArgs> = $Result.GetResult<Prisma.$ProgramPayload, S>

  type ProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProgramFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProgramCountAggregateInputType | true
    }

  export interface ProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Program'], meta: { name: 'Program' } }
    /**
     * Find zero or one Program that matches the filter.
     * @param {ProgramFindUniqueArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramFindUniqueArgs>(args: SelectSubset<T, ProgramFindUniqueArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Program that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProgramFindUniqueOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Program that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramFindFirstArgs>(args?: SelectSubset<T, ProgramFindFirstArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Program that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programs
     * const programs = await prisma.program.findMany()
     * 
     * // Get first 10 Programs
     * const programs = await prisma.program.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programWithIdOnly = await prisma.program.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramFindManyArgs>(args?: SelectSubset<T, ProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Program.
     * @param {ProgramCreateArgs} args - Arguments to create a Program.
     * @example
     * // Create one Program
     * const Program = await prisma.program.create({
     *   data: {
     *     // ... data to create a Program
     *   }
     * })
     * 
     */
    create<T extends ProgramCreateArgs>(args: SelectSubset<T, ProgramCreateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Programs.
     * @param {ProgramCreateManyArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramCreateManyArgs>(args?: SelectSubset<T, ProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Programs and returns the data saved in the database.
     * @param {ProgramCreateManyAndReturnArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgramCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Program.
     * @param {ProgramDeleteArgs} args - Arguments to delete one Program.
     * @example
     * // Delete one Program
     * const Program = await prisma.program.delete({
     *   where: {
     *     // ... filter to delete one Program
     *   }
     * })
     * 
     */
    delete<T extends ProgramDeleteArgs>(args: SelectSubset<T, ProgramDeleteArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Program.
     * @param {ProgramUpdateArgs} args - Arguments to update one Program.
     * @example
     * // Update one Program
     * const program = await prisma.program.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramUpdateArgs>(args: SelectSubset<T, ProgramUpdateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Programs.
     * @param {ProgramDeleteManyArgs} args - Arguments to filter Programs to delete.
     * @example
     * // Delete a few Programs
     * const { count } = await prisma.program.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramDeleteManyArgs>(args?: SelectSubset<T, ProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramUpdateManyArgs>(args: SelectSubset<T, ProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Program.
     * @param {ProgramUpsertArgs} args - Arguments to update or create a Program.
     * @example
     * // Update or create a Program
     * const program = await prisma.program.upsert({
     *   create: {
     *     // ... data to create a Program
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Program we want to update
     *   }
     * })
     */
    upsert<T extends ProgramUpsertArgs>(args: SelectSubset<T, ProgramUpsertArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramCountArgs} args - Arguments to filter Programs to count.
     * @example
     * // Count the number of Programs
     * const count = await prisma.program.count({
     *   where: {
     *     // ... the filter for the Programs we want to count
     *   }
     * })
    **/
    count<T extends ProgramCountArgs>(
      args?: Subset<T, ProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramAggregateArgs>(args: Subset<T, ProgramAggregateArgs>): Prisma.PrismaPromise<GetProgramAggregateType<T>>

    /**
     * Group by Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGroupByArgs} args - Group by arguments.
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
      T extends ProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramGroupByArgs['orderBy'] }
        : { orderBy?: ProgramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Program model
   */
  readonly fields: ProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Program.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends Program$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Program$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramApplicationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Program model
   */ 
  interface ProgramFieldRefs {
    readonly id: FieldRef<"Program", 'String'>
    readonly name: FieldRef<"Program", 'String'>
    readonly description: FieldRef<"Program", 'String'>
    readonly feeUSD: FieldRef<"Program", 'Float'>
    readonly createdAt: FieldRef<"Program", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Program findUnique
   */
  export type ProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findUniqueOrThrow
   */
  export type ProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findFirst
   */
  export type ProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findFirstOrThrow
   */
  export type ProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findMany
   */
  export type ProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Programs to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program create
   */
  export type ProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a Program.
     */
    data: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
  }

  /**
   * Program createMany
   */
  export type ProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Program createManyAndReturn
   */
  export type ProgramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Program update
   */
  export type ProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a Program.
     */
    data: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
    /**
     * Choose, which Program to update.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program updateMany
   */
  export type ProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
  }

  /**
   * Program upsert
   */
  export type ProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the Program to update in case it exists.
     */
    where: ProgramWhereUniqueInput
    /**
     * In case the Program found by the `where` argument doesn't exist, create a new Program with this data.
     */
    create: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
    /**
     * In case the Program was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
  }

  /**
   * Program delete
   */
  export type ProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter which Program to delete.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program deleteMany
   */
  export type ProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programs to delete
     */
    where?: ProgramWhereInput
  }

  /**
   * Program.applications
   */
  export type Program$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramApplication
     */
    select?: ProgramApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramApplicationInclude<ExtArgs> | null
    where?: ProgramApplicationWhereInput
    orderBy?: ProgramApplicationOrderByWithRelationInput | ProgramApplicationOrderByWithRelationInput[]
    cursor?: ProgramApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramApplicationScalarFieldEnum | ProgramApplicationScalarFieldEnum[]
  }

  /**
   * Program without action
   */
  export type ProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
  }


  /**
   * Model ProgramApplication
   */

  export type AggregateProgramApplication = {
    _count: ProgramApplicationCountAggregateOutputType | null
    _min: ProgramApplicationMinAggregateOutputType | null
    _max: ProgramApplicationMaxAggregateOutputType | null
  }

  export type ProgramApplicationMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    programId: string | null
    feeWaived: boolean | null
    appliedAt: Date | null
  }

  export type ProgramApplicationMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    programId: string | null
    feeWaived: boolean | null
    appliedAt: Date | null
  }

  export type ProgramApplicationCountAggregateOutputType = {
    id: number
    studentId: number
    programId: number
    feeWaived: number
    appliedAt: number
    _all: number
  }


  export type ProgramApplicationMinAggregateInputType = {
    id?: true
    studentId?: true
    programId?: true
    feeWaived?: true
    appliedAt?: true
  }

  export type ProgramApplicationMaxAggregateInputType = {
    id?: true
    studentId?: true
    programId?: true
    feeWaived?: true
    appliedAt?: true
  }

  export type ProgramApplicationCountAggregateInputType = {
    id?: true
    studentId?: true
    programId?: true
    feeWaived?: true
    appliedAt?: true
    _all?: true
  }

  export type ProgramApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramApplication to aggregate.
     */
    where?: ProgramApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramApplications to fetch.
     */
    orderBy?: ProgramApplicationOrderByWithRelationInput | ProgramApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgramApplications
    **/
    _count?: true | ProgramApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramApplicationMaxAggregateInputType
  }

  export type GetProgramApplicationAggregateType<T extends ProgramApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateProgramApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgramApplication[P]>
      : GetScalarType<T[P], AggregateProgramApplication[P]>
  }




  export type ProgramApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramApplicationWhereInput
    orderBy?: ProgramApplicationOrderByWithAggregationInput | ProgramApplicationOrderByWithAggregationInput[]
    by: ProgramApplicationScalarFieldEnum[] | ProgramApplicationScalarFieldEnum
    having?: ProgramApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramApplicationCountAggregateInputType | true
    _min?: ProgramApplicationMinAggregateInputType
    _max?: ProgramApplicationMaxAggregateInputType
  }

  export type ProgramApplicationGroupByOutputType = {
    id: string
    studentId: string
    programId: string
    feeWaived: boolean
    appliedAt: Date
    _count: ProgramApplicationCountAggregateOutputType | null
    _min: ProgramApplicationMinAggregateOutputType | null
    _max: ProgramApplicationMaxAggregateOutputType | null
  }

  type GetProgramApplicationGroupByPayload<T extends ProgramApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ProgramApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    programId?: boolean
    feeWaived?: boolean
    appliedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programApplication"]>

  export type ProgramApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    programId?: boolean
    feeWaived?: boolean
    appliedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programApplication"]>

  export type ProgramApplicationSelectScalar = {
    id?: boolean
    studentId?: boolean
    programId?: boolean
    feeWaived?: boolean
    appliedAt?: boolean
  }

  export type ProgramApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }
  export type ProgramApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    program?: boolean | ProgramDefaultArgs<ExtArgs>
  }

  export type $ProgramApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgramApplication"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      program: Prisma.$ProgramPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      programId: string
      feeWaived: boolean
      appliedAt: Date
    }, ExtArgs["result"]["programApplication"]>
    composites: {}
  }

  type ProgramApplicationGetPayload<S extends boolean | null | undefined | ProgramApplicationDefaultArgs> = $Result.GetResult<Prisma.$ProgramApplicationPayload, S>

  type ProgramApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProgramApplicationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProgramApplicationCountAggregateInputType | true
    }

  export interface ProgramApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgramApplication'], meta: { name: 'ProgramApplication' } }
    /**
     * Find zero or one ProgramApplication that matches the filter.
     * @param {ProgramApplicationFindUniqueArgs} args - Arguments to find a ProgramApplication
     * @example
     * // Get one ProgramApplication
     * const programApplication = await prisma.programApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramApplicationFindUniqueArgs>(args: SelectSubset<T, ProgramApplicationFindUniqueArgs<ExtArgs>>): Prisma__ProgramApplicationClient<$Result.GetResult<Prisma.$ProgramApplicationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProgramApplication that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProgramApplicationFindUniqueOrThrowArgs} args - Arguments to find a ProgramApplication
     * @example
     * // Get one ProgramApplication
     * const programApplication = await prisma.programApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramApplicationClient<$Result.GetResult<Prisma.$ProgramApplicationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProgramApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramApplicationFindFirstArgs} args - Arguments to find a ProgramApplication
     * @example
     * // Get one ProgramApplication
     * const programApplication = await prisma.programApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramApplicationFindFirstArgs>(args?: SelectSubset<T, ProgramApplicationFindFirstArgs<ExtArgs>>): Prisma__ProgramApplicationClient<$Result.GetResult<Prisma.$ProgramApplicationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProgramApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramApplicationFindFirstOrThrowArgs} args - Arguments to find a ProgramApplication
     * @example
     * // Get one ProgramApplication
     * const programApplication = await prisma.programApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramApplicationClient<$Result.GetResult<Prisma.$ProgramApplicationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProgramApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgramApplications
     * const programApplications = await prisma.programApplication.findMany()
     * 
     * // Get first 10 ProgramApplications
     * const programApplications = await prisma.programApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programApplicationWithIdOnly = await prisma.programApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramApplicationFindManyArgs>(args?: SelectSubset<T, ProgramApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramApplicationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProgramApplication.
     * @param {ProgramApplicationCreateArgs} args - Arguments to create a ProgramApplication.
     * @example
     * // Create one ProgramApplication
     * const ProgramApplication = await prisma.programApplication.create({
     *   data: {
     *     // ... data to create a ProgramApplication
     *   }
     * })
     * 
     */
    create<T extends ProgramApplicationCreateArgs>(args: SelectSubset<T, ProgramApplicationCreateArgs<ExtArgs>>): Prisma__ProgramApplicationClient<$Result.GetResult<Prisma.$ProgramApplicationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProgramApplications.
     * @param {ProgramApplicationCreateManyArgs} args - Arguments to create many ProgramApplications.
     * @example
     * // Create many ProgramApplications
     * const programApplication = await prisma.programApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramApplicationCreateManyArgs>(args?: SelectSubset<T, ProgramApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProgramApplications and returns the data saved in the database.
     * @param {ProgramApplicationCreateManyAndReturnArgs} args - Arguments to create many ProgramApplications.
     * @example
     * // Create many ProgramApplications
     * const programApplication = await prisma.programApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProgramApplications and only return the `id`
     * const programApplicationWithIdOnly = await prisma.programApplication.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgramApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgramApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramApplicationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProgramApplication.
     * @param {ProgramApplicationDeleteArgs} args - Arguments to delete one ProgramApplication.
     * @example
     * // Delete one ProgramApplication
     * const ProgramApplication = await prisma.programApplication.delete({
     *   where: {
     *     // ... filter to delete one ProgramApplication
     *   }
     * })
     * 
     */
    delete<T extends ProgramApplicationDeleteArgs>(args: SelectSubset<T, ProgramApplicationDeleteArgs<ExtArgs>>): Prisma__ProgramApplicationClient<$Result.GetResult<Prisma.$ProgramApplicationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProgramApplication.
     * @param {ProgramApplicationUpdateArgs} args - Arguments to update one ProgramApplication.
     * @example
     * // Update one ProgramApplication
     * const programApplication = await prisma.programApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramApplicationUpdateArgs>(args: SelectSubset<T, ProgramApplicationUpdateArgs<ExtArgs>>): Prisma__ProgramApplicationClient<$Result.GetResult<Prisma.$ProgramApplicationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProgramApplications.
     * @param {ProgramApplicationDeleteManyArgs} args - Arguments to filter ProgramApplications to delete.
     * @example
     * // Delete a few ProgramApplications
     * const { count } = await prisma.programApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramApplicationDeleteManyArgs>(args?: SelectSubset<T, ProgramApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgramApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgramApplications
     * const programApplication = await prisma.programApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramApplicationUpdateManyArgs>(args: SelectSubset<T, ProgramApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProgramApplication.
     * @param {ProgramApplicationUpsertArgs} args - Arguments to update or create a ProgramApplication.
     * @example
     * // Update or create a ProgramApplication
     * const programApplication = await prisma.programApplication.upsert({
     *   create: {
     *     // ... data to create a ProgramApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgramApplication we want to update
     *   }
     * })
     */
    upsert<T extends ProgramApplicationUpsertArgs>(args: SelectSubset<T, ProgramApplicationUpsertArgs<ExtArgs>>): Prisma__ProgramApplicationClient<$Result.GetResult<Prisma.$ProgramApplicationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProgramApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramApplicationCountArgs} args - Arguments to filter ProgramApplications to count.
     * @example
     * // Count the number of ProgramApplications
     * const count = await prisma.programApplication.count({
     *   where: {
     *     // ... the filter for the ProgramApplications we want to count
     *   }
     * })
    **/
    count<T extends ProgramApplicationCountArgs>(
      args?: Subset<T, ProgramApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgramApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramApplicationAggregateArgs>(args: Subset<T, ProgramApplicationAggregateArgs>): Prisma.PrismaPromise<GetProgramApplicationAggregateType<T>>

    /**
     * Group by ProgramApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramApplicationGroupByArgs} args - Group by arguments.
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
      T extends ProgramApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ProgramApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgramApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgramApplication model
   */
  readonly fields: ProgramApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgramApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    program<T extends ProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramDefaultArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ProgramApplication model
   */ 
  interface ProgramApplicationFieldRefs {
    readonly id: FieldRef<"ProgramApplication", 'String'>
    readonly studentId: FieldRef<"ProgramApplication", 'String'>
    readonly programId: FieldRef<"ProgramApplication", 'String'>
    readonly feeWaived: FieldRef<"ProgramApplication", 'Boolean'>
    readonly appliedAt: FieldRef<"ProgramApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProgramApplication findUnique
   */
  export type ProgramApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramApplication
     */
    select?: ProgramApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramApplicationInclude<ExtArgs> | null
    /**
     * Filter, which ProgramApplication to fetch.
     */
    where: ProgramApplicationWhereUniqueInput
  }

  /**
   * ProgramApplication findUniqueOrThrow
   */
  export type ProgramApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramApplication
     */
    select?: ProgramApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramApplicationInclude<ExtArgs> | null
    /**
     * Filter, which ProgramApplication to fetch.
     */
    where: ProgramApplicationWhereUniqueInput
  }

  /**
   * ProgramApplication findFirst
   */
  export type ProgramApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramApplication
     */
    select?: ProgramApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramApplicationInclude<ExtArgs> | null
    /**
     * Filter, which ProgramApplication to fetch.
     */
    where?: ProgramApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramApplications to fetch.
     */
    orderBy?: ProgramApplicationOrderByWithRelationInput | ProgramApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramApplications.
     */
    cursor?: ProgramApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramApplications.
     */
    distinct?: ProgramApplicationScalarFieldEnum | ProgramApplicationScalarFieldEnum[]
  }

  /**
   * ProgramApplication findFirstOrThrow
   */
  export type ProgramApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramApplication
     */
    select?: ProgramApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramApplicationInclude<ExtArgs> | null
    /**
     * Filter, which ProgramApplication to fetch.
     */
    where?: ProgramApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramApplications to fetch.
     */
    orderBy?: ProgramApplicationOrderByWithRelationInput | ProgramApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramApplications.
     */
    cursor?: ProgramApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramApplications.
     */
    distinct?: ProgramApplicationScalarFieldEnum | ProgramApplicationScalarFieldEnum[]
  }

  /**
   * ProgramApplication findMany
   */
  export type ProgramApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramApplication
     */
    select?: ProgramApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramApplicationInclude<ExtArgs> | null
    /**
     * Filter, which ProgramApplications to fetch.
     */
    where?: ProgramApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramApplications to fetch.
     */
    orderBy?: ProgramApplicationOrderByWithRelationInput | ProgramApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgramApplications.
     */
    cursor?: ProgramApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramApplications.
     */
    skip?: number
    distinct?: ProgramApplicationScalarFieldEnum | ProgramApplicationScalarFieldEnum[]
  }

  /**
   * ProgramApplication create
   */
  export type ProgramApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramApplication
     */
    select?: ProgramApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgramApplication.
     */
    data: XOR<ProgramApplicationCreateInput, ProgramApplicationUncheckedCreateInput>
  }

  /**
   * ProgramApplication createMany
   */
  export type ProgramApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgramApplications.
     */
    data: ProgramApplicationCreateManyInput | ProgramApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgramApplication createManyAndReturn
   */
  export type ProgramApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramApplication
     */
    select?: ProgramApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProgramApplications.
     */
    data: ProgramApplicationCreateManyInput | ProgramApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProgramApplication update
   */
  export type ProgramApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramApplication
     */
    select?: ProgramApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgramApplication.
     */
    data: XOR<ProgramApplicationUpdateInput, ProgramApplicationUncheckedUpdateInput>
    /**
     * Choose, which ProgramApplication to update.
     */
    where: ProgramApplicationWhereUniqueInput
  }

  /**
   * ProgramApplication updateMany
   */
  export type ProgramApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgramApplications.
     */
    data: XOR<ProgramApplicationUpdateManyMutationInput, ProgramApplicationUncheckedUpdateManyInput>
    /**
     * Filter which ProgramApplications to update
     */
    where?: ProgramApplicationWhereInput
  }

  /**
   * ProgramApplication upsert
   */
  export type ProgramApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramApplication
     */
    select?: ProgramApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgramApplication to update in case it exists.
     */
    where: ProgramApplicationWhereUniqueInput
    /**
     * In case the ProgramApplication found by the `where` argument doesn't exist, create a new ProgramApplication with this data.
     */
    create: XOR<ProgramApplicationCreateInput, ProgramApplicationUncheckedCreateInput>
    /**
     * In case the ProgramApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramApplicationUpdateInput, ProgramApplicationUncheckedUpdateInput>
  }

  /**
   * ProgramApplication delete
   */
  export type ProgramApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramApplication
     */
    select?: ProgramApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramApplicationInclude<ExtArgs> | null
    /**
     * Filter which ProgramApplication to delete.
     */
    where: ProgramApplicationWhereUniqueInput
  }

  /**
   * ProgramApplication deleteMany
   */
  export type ProgramApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramApplications to delete
     */
    where?: ProgramApplicationWhereInput
  }

  /**
   * ProgramApplication without action
   */
  export type ProgramApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramApplication
     */
    select?: ProgramApplicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramApplicationInclude<ExtArgs> | null
  }


  /**
   * Model SubsidyProvider
   */

  export type AggregateSubsidyProvider = {
    _count: SubsidyProviderCountAggregateOutputType | null
    _min: SubsidyProviderMinAggregateOutputType | null
    _max: SubsidyProviderMaxAggregateOutputType | null
  }

  export type SubsidyProviderMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ProviderType | null
    addedAt: Date | null
  }

  export type SubsidyProviderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ProviderType | null
    addedAt: Date | null
  }

  export type SubsidyProviderCountAggregateOutputType = {
    id: number
    name: number
    type: number
    addedAt: number
    _all: number
  }


  export type SubsidyProviderMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    addedAt?: true
  }

  export type SubsidyProviderMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    addedAt?: true
  }

  export type SubsidyProviderCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    addedAt?: true
    _all?: true
  }

  export type SubsidyProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubsidyProvider to aggregate.
     */
    where?: SubsidyProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubsidyProviders to fetch.
     */
    orderBy?: SubsidyProviderOrderByWithRelationInput | SubsidyProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubsidyProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubsidyProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubsidyProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubsidyProviders
    **/
    _count?: true | SubsidyProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubsidyProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubsidyProviderMaxAggregateInputType
  }

  export type GetSubsidyProviderAggregateType<T extends SubsidyProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateSubsidyProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubsidyProvider[P]>
      : GetScalarType<T[P], AggregateSubsidyProvider[P]>
  }




  export type SubsidyProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubsidyProviderWhereInput
    orderBy?: SubsidyProviderOrderByWithAggregationInput | SubsidyProviderOrderByWithAggregationInput[]
    by: SubsidyProviderScalarFieldEnum[] | SubsidyProviderScalarFieldEnum
    having?: SubsidyProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubsidyProviderCountAggregateInputType | true
    _min?: SubsidyProviderMinAggregateInputType
    _max?: SubsidyProviderMaxAggregateInputType
  }

  export type SubsidyProviderGroupByOutputType = {
    id: string
    name: string
    type: $Enums.ProviderType
    addedAt: Date
    _count: SubsidyProviderCountAggregateOutputType | null
    _min: SubsidyProviderMinAggregateOutputType | null
    _max: SubsidyProviderMaxAggregateOutputType | null
  }

  type GetSubsidyProviderGroupByPayload<T extends SubsidyProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubsidyProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubsidyProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubsidyProviderGroupByOutputType[P]>
            : GetScalarType<T[P], SubsidyProviderGroupByOutputType[P]>
        }
      >
    >


  export type SubsidyProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    addedAt?: boolean
    entries?: boolean | SubsidyProvider$entriesArgs<ExtArgs>
    _count?: boolean | SubsidyProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subsidyProvider"]>

  export type SubsidyProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    addedAt?: boolean
  }, ExtArgs["result"]["subsidyProvider"]>

  export type SubsidyProviderSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    addedAt?: boolean
  }

  export type SubsidyProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | SubsidyProvider$entriesArgs<ExtArgs>
    _count?: boolean | SubsidyProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubsidyProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubsidyProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubsidyProvider"
    objects: {
      entries: Prisma.$SocialRegisterEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.ProviderType
      addedAt: Date
    }, ExtArgs["result"]["subsidyProvider"]>
    composites: {}
  }

  type SubsidyProviderGetPayload<S extends boolean | null | undefined | SubsidyProviderDefaultArgs> = $Result.GetResult<Prisma.$SubsidyProviderPayload, S>

  type SubsidyProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubsidyProviderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubsidyProviderCountAggregateInputType | true
    }

  export interface SubsidyProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubsidyProvider'], meta: { name: 'SubsidyProvider' } }
    /**
     * Find zero or one SubsidyProvider that matches the filter.
     * @param {SubsidyProviderFindUniqueArgs} args - Arguments to find a SubsidyProvider
     * @example
     * // Get one SubsidyProvider
     * const subsidyProvider = await prisma.subsidyProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubsidyProviderFindUniqueArgs>(args: SelectSubset<T, SubsidyProviderFindUniqueArgs<ExtArgs>>): Prisma__SubsidyProviderClient<$Result.GetResult<Prisma.$SubsidyProviderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SubsidyProvider that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubsidyProviderFindUniqueOrThrowArgs} args - Arguments to find a SubsidyProvider
     * @example
     * // Get one SubsidyProvider
     * const subsidyProvider = await prisma.subsidyProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubsidyProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, SubsidyProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubsidyProviderClient<$Result.GetResult<Prisma.$SubsidyProviderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SubsidyProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsidyProviderFindFirstArgs} args - Arguments to find a SubsidyProvider
     * @example
     * // Get one SubsidyProvider
     * const subsidyProvider = await prisma.subsidyProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubsidyProviderFindFirstArgs>(args?: SelectSubset<T, SubsidyProviderFindFirstArgs<ExtArgs>>): Prisma__SubsidyProviderClient<$Result.GetResult<Prisma.$SubsidyProviderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SubsidyProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsidyProviderFindFirstOrThrowArgs} args - Arguments to find a SubsidyProvider
     * @example
     * // Get one SubsidyProvider
     * const subsidyProvider = await prisma.subsidyProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubsidyProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, SubsidyProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubsidyProviderClient<$Result.GetResult<Prisma.$SubsidyProviderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SubsidyProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsidyProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubsidyProviders
     * const subsidyProviders = await prisma.subsidyProvider.findMany()
     * 
     * // Get first 10 SubsidyProviders
     * const subsidyProviders = await prisma.subsidyProvider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subsidyProviderWithIdOnly = await prisma.subsidyProvider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubsidyProviderFindManyArgs>(args?: SelectSubset<T, SubsidyProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubsidyProviderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SubsidyProvider.
     * @param {SubsidyProviderCreateArgs} args - Arguments to create a SubsidyProvider.
     * @example
     * // Create one SubsidyProvider
     * const SubsidyProvider = await prisma.subsidyProvider.create({
     *   data: {
     *     // ... data to create a SubsidyProvider
     *   }
     * })
     * 
     */
    create<T extends SubsidyProviderCreateArgs>(args: SelectSubset<T, SubsidyProviderCreateArgs<ExtArgs>>): Prisma__SubsidyProviderClient<$Result.GetResult<Prisma.$SubsidyProviderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SubsidyProviders.
     * @param {SubsidyProviderCreateManyArgs} args - Arguments to create many SubsidyProviders.
     * @example
     * // Create many SubsidyProviders
     * const subsidyProvider = await prisma.subsidyProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubsidyProviderCreateManyArgs>(args?: SelectSubset<T, SubsidyProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubsidyProviders and returns the data saved in the database.
     * @param {SubsidyProviderCreateManyAndReturnArgs} args - Arguments to create many SubsidyProviders.
     * @example
     * // Create many SubsidyProviders
     * const subsidyProvider = await prisma.subsidyProvider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubsidyProviders and only return the `id`
     * const subsidyProviderWithIdOnly = await prisma.subsidyProvider.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubsidyProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, SubsidyProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubsidyProviderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SubsidyProvider.
     * @param {SubsidyProviderDeleteArgs} args - Arguments to delete one SubsidyProvider.
     * @example
     * // Delete one SubsidyProvider
     * const SubsidyProvider = await prisma.subsidyProvider.delete({
     *   where: {
     *     // ... filter to delete one SubsidyProvider
     *   }
     * })
     * 
     */
    delete<T extends SubsidyProviderDeleteArgs>(args: SelectSubset<T, SubsidyProviderDeleteArgs<ExtArgs>>): Prisma__SubsidyProviderClient<$Result.GetResult<Prisma.$SubsidyProviderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SubsidyProvider.
     * @param {SubsidyProviderUpdateArgs} args - Arguments to update one SubsidyProvider.
     * @example
     * // Update one SubsidyProvider
     * const subsidyProvider = await prisma.subsidyProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubsidyProviderUpdateArgs>(args: SelectSubset<T, SubsidyProviderUpdateArgs<ExtArgs>>): Prisma__SubsidyProviderClient<$Result.GetResult<Prisma.$SubsidyProviderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SubsidyProviders.
     * @param {SubsidyProviderDeleteManyArgs} args - Arguments to filter SubsidyProviders to delete.
     * @example
     * // Delete a few SubsidyProviders
     * const { count } = await prisma.subsidyProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubsidyProviderDeleteManyArgs>(args?: SelectSubset<T, SubsidyProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubsidyProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsidyProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubsidyProviders
     * const subsidyProvider = await prisma.subsidyProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubsidyProviderUpdateManyArgs>(args: SelectSubset<T, SubsidyProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubsidyProvider.
     * @param {SubsidyProviderUpsertArgs} args - Arguments to update or create a SubsidyProvider.
     * @example
     * // Update or create a SubsidyProvider
     * const subsidyProvider = await prisma.subsidyProvider.upsert({
     *   create: {
     *     // ... data to create a SubsidyProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubsidyProvider we want to update
     *   }
     * })
     */
    upsert<T extends SubsidyProviderUpsertArgs>(args: SelectSubset<T, SubsidyProviderUpsertArgs<ExtArgs>>): Prisma__SubsidyProviderClient<$Result.GetResult<Prisma.$SubsidyProviderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SubsidyProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsidyProviderCountArgs} args - Arguments to filter SubsidyProviders to count.
     * @example
     * // Count the number of SubsidyProviders
     * const count = await prisma.subsidyProvider.count({
     *   where: {
     *     // ... the filter for the SubsidyProviders we want to count
     *   }
     * })
    **/
    count<T extends SubsidyProviderCountArgs>(
      args?: Subset<T, SubsidyProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubsidyProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubsidyProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsidyProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubsidyProviderAggregateArgs>(args: Subset<T, SubsidyProviderAggregateArgs>): Prisma.PrismaPromise<GetSubsidyProviderAggregateType<T>>

    /**
     * Group by SubsidyProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsidyProviderGroupByArgs} args - Group by arguments.
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
      T extends SubsidyProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubsidyProviderGroupByArgs['orderBy'] }
        : { orderBy?: SubsidyProviderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubsidyProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubsidyProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubsidyProvider model
   */
  readonly fields: SubsidyProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubsidyProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubsidyProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entries<T extends SubsidyProvider$entriesArgs<ExtArgs> = {}>(args?: Subset<T, SubsidyProvider$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialRegisterEntryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the SubsidyProvider model
   */ 
  interface SubsidyProviderFieldRefs {
    readonly id: FieldRef<"SubsidyProvider", 'String'>
    readonly name: FieldRef<"SubsidyProvider", 'String'>
    readonly type: FieldRef<"SubsidyProvider", 'ProviderType'>
    readonly addedAt: FieldRef<"SubsidyProvider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubsidyProvider findUnique
   */
  export type SubsidyProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsidyProvider
     */
    select?: SubsidyProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsidyProviderInclude<ExtArgs> | null
    /**
     * Filter, which SubsidyProvider to fetch.
     */
    where: SubsidyProviderWhereUniqueInput
  }

  /**
   * SubsidyProvider findUniqueOrThrow
   */
  export type SubsidyProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsidyProvider
     */
    select?: SubsidyProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsidyProviderInclude<ExtArgs> | null
    /**
     * Filter, which SubsidyProvider to fetch.
     */
    where: SubsidyProviderWhereUniqueInput
  }

  /**
   * SubsidyProvider findFirst
   */
  export type SubsidyProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsidyProvider
     */
    select?: SubsidyProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsidyProviderInclude<ExtArgs> | null
    /**
     * Filter, which SubsidyProvider to fetch.
     */
    where?: SubsidyProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubsidyProviders to fetch.
     */
    orderBy?: SubsidyProviderOrderByWithRelationInput | SubsidyProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubsidyProviders.
     */
    cursor?: SubsidyProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubsidyProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubsidyProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubsidyProviders.
     */
    distinct?: SubsidyProviderScalarFieldEnum | SubsidyProviderScalarFieldEnum[]
  }

  /**
   * SubsidyProvider findFirstOrThrow
   */
  export type SubsidyProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsidyProvider
     */
    select?: SubsidyProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsidyProviderInclude<ExtArgs> | null
    /**
     * Filter, which SubsidyProvider to fetch.
     */
    where?: SubsidyProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubsidyProviders to fetch.
     */
    orderBy?: SubsidyProviderOrderByWithRelationInput | SubsidyProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubsidyProviders.
     */
    cursor?: SubsidyProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubsidyProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubsidyProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubsidyProviders.
     */
    distinct?: SubsidyProviderScalarFieldEnum | SubsidyProviderScalarFieldEnum[]
  }

  /**
   * SubsidyProvider findMany
   */
  export type SubsidyProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsidyProvider
     */
    select?: SubsidyProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsidyProviderInclude<ExtArgs> | null
    /**
     * Filter, which SubsidyProviders to fetch.
     */
    where?: SubsidyProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubsidyProviders to fetch.
     */
    orderBy?: SubsidyProviderOrderByWithRelationInput | SubsidyProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubsidyProviders.
     */
    cursor?: SubsidyProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubsidyProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubsidyProviders.
     */
    skip?: number
    distinct?: SubsidyProviderScalarFieldEnum | SubsidyProviderScalarFieldEnum[]
  }

  /**
   * SubsidyProvider create
   */
  export type SubsidyProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsidyProvider
     */
    select?: SubsidyProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsidyProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a SubsidyProvider.
     */
    data: XOR<SubsidyProviderCreateInput, SubsidyProviderUncheckedCreateInput>
  }

  /**
   * SubsidyProvider createMany
   */
  export type SubsidyProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubsidyProviders.
     */
    data: SubsidyProviderCreateManyInput | SubsidyProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubsidyProvider createManyAndReturn
   */
  export type SubsidyProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsidyProvider
     */
    select?: SubsidyProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SubsidyProviders.
     */
    data: SubsidyProviderCreateManyInput | SubsidyProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubsidyProvider update
   */
  export type SubsidyProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsidyProvider
     */
    select?: SubsidyProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsidyProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a SubsidyProvider.
     */
    data: XOR<SubsidyProviderUpdateInput, SubsidyProviderUncheckedUpdateInput>
    /**
     * Choose, which SubsidyProvider to update.
     */
    where: SubsidyProviderWhereUniqueInput
  }

  /**
   * SubsidyProvider updateMany
   */
  export type SubsidyProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubsidyProviders.
     */
    data: XOR<SubsidyProviderUpdateManyMutationInput, SubsidyProviderUncheckedUpdateManyInput>
    /**
     * Filter which SubsidyProviders to update
     */
    where?: SubsidyProviderWhereInput
  }

  /**
   * SubsidyProvider upsert
   */
  export type SubsidyProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsidyProvider
     */
    select?: SubsidyProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsidyProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the SubsidyProvider to update in case it exists.
     */
    where: SubsidyProviderWhereUniqueInput
    /**
     * In case the SubsidyProvider found by the `where` argument doesn't exist, create a new SubsidyProvider with this data.
     */
    create: XOR<SubsidyProviderCreateInput, SubsidyProviderUncheckedCreateInput>
    /**
     * In case the SubsidyProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubsidyProviderUpdateInput, SubsidyProviderUncheckedUpdateInput>
  }

  /**
   * SubsidyProvider delete
   */
  export type SubsidyProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsidyProvider
     */
    select?: SubsidyProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsidyProviderInclude<ExtArgs> | null
    /**
     * Filter which SubsidyProvider to delete.
     */
    where: SubsidyProviderWhereUniqueInput
  }

  /**
   * SubsidyProvider deleteMany
   */
  export type SubsidyProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubsidyProviders to delete
     */
    where?: SubsidyProviderWhereInput
  }

  /**
   * SubsidyProvider.entries
   */
  export type SubsidyProvider$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialRegisterEntry
     */
    select?: SocialRegisterEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialRegisterEntryInclude<ExtArgs> | null
    where?: SocialRegisterEntryWhereInput
    orderBy?: SocialRegisterEntryOrderByWithRelationInput | SocialRegisterEntryOrderByWithRelationInput[]
    cursor?: SocialRegisterEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialRegisterEntryScalarFieldEnum | SocialRegisterEntryScalarFieldEnum[]
  }

  /**
   * SubsidyProvider without action
   */
  export type SubsidyProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubsidyProvider
     */
    select?: SubsidyProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubsidyProviderInclude<ExtArgs> | null
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


  export const StudentScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    studentId: 'studentId',
    registeredAt: 'registeredAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const SocialRegisterEntryScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    providerId: 'providerId',
    dateAdded: 'dateAdded'
  };

  export type SocialRegisterEntryScalarFieldEnum = (typeof SocialRegisterEntryScalarFieldEnum)[keyof typeof SocialRegisterEntryScalarFieldEnum]


  export const ProgramScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    feeUSD: 'feeUSD',
    createdAt: 'createdAt'
  };

  export type ProgramScalarFieldEnum = (typeof ProgramScalarFieldEnum)[keyof typeof ProgramScalarFieldEnum]


  export const ProgramApplicationScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    programId: 'programId',
    feeWaived: 'feeWaived',
    appliedAt: 'appliedAt'
  };

  export type ProgramApplicationScalarFieldEnum = (typeof ProgramApplicationScalarFieldEnum)[keyof typeof ProgramApplicationScalarFieldEnum]


  export const SubsidyProviderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    addedAt: 'addedAt'
  };

  export type SubsidyProviderScalarFieldEnum = (typeof SubsidyProviderScalarFieldEnum)[keyof typeof SubsidyProviderScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ProviderType'
   */
  export type EnumProviderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProviderType'>
    


  /**
   * Reference to a field of type 'ProviderType[]'
   */
  export type ListEnumProviderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProviderType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    fullName?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    phone?: StringNullableFilter<"Student"> | string | null
    studentId?: StringFilter<"Student"> | string
    registeredAt?: DateTimeFilter<"Student"> | Date | string
    socialRegisterEntry?: XOR<SocialRegisterEntryNullableRelationFilter, SocialRegisterEntryWhereInput> | null
    applications?: ProgramApplicationListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    studentId?: SortOrder
    registeredAt?: SortOrder
    socialRegisterEntry?: SocialRegisterEntryOrderByWithRelationInput
    applications?: ProgramApplicationOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    studentId?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    fullName?: StringFilter<"Student"> | string
    phone?: StringNullableFilter<"Student"> | string | null
    registeredAt?: DateTimeFilter<"Student"> | Date | string
    socialRegisterEntry?: XOR<SocialRegisterEntryNullableRelationFilter, SocialRegisterEntryWhereInput> | null
    applications?: ProgramApplicationListRelationFilter
  }, "id" | "email" | "studentId">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    studentId?: SortOrder
    registeredAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    fullName?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    phone?: StringNullableWithAggregatesFilter<"Student"> | string | null
    studentId?: StringWithAggregatesFilter<"Student"> | string
    registeredAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type SocialRegisterEntryWhereInput = {
    AND?: SocialRegisterEntryWhereInput | SocialRegisterEntryWhereInput[]
    OR?: SocialRegisterEntryWhereInput[]
    NOT?: SocialRegisterEntryWhereInput | SocialRegisterEntryWhereInput[]
    id?: StringFilter<"SocialRegisterEntry"> | string
    studentId?: StringFilter<"SocialRegisterEntry"> | string
    providerId?: StringFilter<"SocialRegisterEntry"> | string
    dateAdded?: DateTimeFilter<"SocialRegisterEntry"> | Date | string
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    provider?: XOR<SubsidyProviderRelationFilter, SubsidyProviderWhereInput>
  }

  export type SocialRegisterEntryOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    providerId?: SortOrder
    dateAdded?: SortOrder
    student?: StudentOrderByWithRelationInput
    provider?: SubsidyProviderOrderByWithRelationInput
  }

  export type SocialRegisterEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId?: string
    AND?: SocialRegisterEntryWhereInput | SocialRegisterEntryWhereInput[]
    OR?: SocialRegisterEntryWhereInput[]
    NOT?: SocialRegisterEntryWhereInput | SocialRegisterEntryWhereInput[]
    providerId?: StringFilter<"SocialRegisterEntry"> | string
    dateAdded?: DateTimeFilter<"SocialRegisterEntry"> | Date | string
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    provider?: XOR<SubsidyProviderRelationFilter, SubsidyProviderWhereInput>
  }, "id" | "studentId">

  export type SocialRegisterEntryOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    providerId?: SortOrder
    dateAdded?: SortOrder
    _count?: SocialRegisterEntryCountOrderByAggregateInput
    _max?: SocialRegisterEntryMaxOrderByAggregateInput
    _min?: SocialRegisterEntryMinOrderByAggregateInput
  }

  export type SocialRegisterEntryScalarWhereWithAggregatesInput = {
    AND?: SocialRegisterEntryScalarWhereWithAggregatesInput | SocialRegisterEntryScalarWhereWithAggregatesInput[]
    OR?: SocialRegisterEntryScalarWhereWithAggregatesInput[]
    NOT?: SocialRegisterEntryScalarWhereWithAggregatesInput | SocialRegisterEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialRegisterEntry"> | string
    studentId?: StringWithAggregatesFilter<"SocialRegisterEntry"> | string
    providerId?: StringWithAggregatesFilter<"SocialRegisterEntry"> | string
    dateAdded?: DateTimeWithAggregatesFilter<"SocialRegisterEntry"> | Date | string
  }

  export type ProgramWhereInput = {
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    id?: StringFilter<"Program"> | string
    name?: StringFilter<"Program"> | string
    description?: StringNullableFilter<"Program"> | string | null
    feeUSD?: FloatFilter<"Program"> | number
    createdAt?: DateTimeFilter<"Program"> | Date | string
    applications?: ProgramApplicationListRelationFilter
  }

  export type ProgramOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    feeUSD?: SortOrder
    createdAt?: SortOrder
    applications?: ProgramApplicationOrderByRelationAggregateInput
  }

  export type ProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    name?: StringFilter<"Program"> | string
    description?: StringNullableFilter<"Program"> | string | null
    feeUSD?: FloatFilter<"Program"> | number
    createdAt?: DateTimeFilter<"Program"> | Date | string
    applications?: ProgramApplicationListRelationFilter
  }, "id">

  export type ProgramOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    feeUSD?: SortOrder
    createdAt?: SortOrder
    _count?: ProgramCountOrderByAggregateInput
    _avg?: ProgramAvgOrderByAggregateInput
    _max?: ProgramMaxOrderByAggregateInput
    _min?: ProgramMinOrderByAggregateInput
    _sum?: ProgramSumOrderByAggregateInput
  }

  export type ProgramScalarWhereWithAggregatesInput = {
    AND?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    OR?: ProgramScalarWhereWithAggregatesInput[]
    NOT?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Program"> | string
    name?: StringWithAggregatesFilter<"Program"> | string
    description?: StringNullableWithAggregatesFilter<"Program"> | string | null
    feeUSD?: FloatWithAggregatesFilter<"Program"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
  }

  export type ProgramApplicationWhereInput = {
    AND?: ProgramApplicationWhereInput | ProgramApplicationWhereInput[]
    OR?: ProgramApplicationWhereInput[]
    NOT?: ProgramApplicationWhereInput | ProgramApplicationWhereInput[]
    id?: StringFilter<"ProgramApplication"> | string
    studentId?: StringFilter<"ProgramApplication"> | string
    programId?: StringFilter<"ProgramApplication"> | string
    feeWaived?: BoolFilter<"ProgramApplication"> | boolean
    appliedAt?: DateTimeFilter<"ProgramApplication"> | Date | string
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    program?: XOR<ProgramRelationFilter, ProgramWhereInput>
  }

  export type ProgramApplicationOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    programId?: SortOrder
    feeWaived?: SortOrder
    appliedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    program?: ProgramOrderByWithRelationInput
  }

  export type ProgramApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgramApplicationWhereInput | ProgramApplicationWhereInput[]
    OR?: ProgramApplicationWhereInput[]
    NOT?: ProgramApplicationWhereInput | ProgramApplicationWhereInput[]
    studentId?: StringFilter<"ProgramApplication"> | string
    programId?: StringFilter<"ProgramApplication"> | string
    feeWaived?: BoolFilter<"ProgramApplication"> | boolean
    appliedAt?: DateTimeFilter<"ProgramApplication"> | Date | string
    student?: XOR<StudentRelationFilter, StudentWhereInput>
    program?: XOR<ProgramRelationFilter, ProgramWhereInput>
  }, "id">

  export type ProgramApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    programId?: SortOrder
    feeWaived?: SortOrder
    appliedAt?: SortOrder
    _count?: ProgramApplicationCountOrderByAggregateInput
    _max?: ProgramApplicationMaxOrderByAggregateInput
    _min?: ProgramApplicationMinOrderByAggregateInput
  }

  export type ProgramApplicationScalarWhereWithAggregatesInput = {
    AND?: ProgramApplicationScalarWhereWithAggregatesInput | ProgramApplicationScalarWhereWithAggregatesInput[]
    OR?: ProgramApplicationScalarWhereWithAggregatesInput[]
    NOT?: ProgramApplicationScalarWhereWithAggregatesInput | ProgramApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgramApplication"> | string
    studentId?: StringWithAggregatesFilter<"ProgramApplication"> | string
    programId?: StringWithAggregatesFilter<"ProgramApplication"> | string
    feeWaived?: BoolWithAggregatesFilter<"ProgramApplication"> | boolean
    appliedAt?: DateTimeWithAggregatesFilter<"ProgramApplication"> | Date | string
  }

  export type SubsidyProviderWhereInput = {
    AND?: SubsidyProviderWhereInput | SubsidyProviderWhereInput[]
    OR?: SubsidyProviderWhereInput[]
    NOT?: SubsidyProviderWhereInput | SubsidyProviderWhereInput[]
    id?: StringFilter<"SubsidyProvider"> | string
    name?: StringFilter<"SubsidyProvider"> | string
    type?: EnumProviderTypeFilter<"SubsidyProvider"> | $Enums.ProviderType
    addedAt?: DateTimeFilter<"SubsidyProvider"> | Date | string
    entries?: SocialRegisterEntryListRelationFilter
  }

  export type SubsidyProviderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    addedAt?: SortOrder
    entries?: SocialRegisterEntryOrderByRelationAggregateInput
  }

  export type SubsidyProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubsidyProviderWhereInput | SubsidyProviderWhereInput[]
    OR?: SubsidyProviderWhereInput[]
    NOT?: SubsidyProviderWhereInput | SubsidyProviderWhereInput[]
    name?: StringFilter<"SubsidyProvider"> | string
    type?: EnumProviderTypeFilter<"SubsidyProvider"> | $Enums.ProviderType
    addedAt?: DateTimeFilter<"SubsidyProvider"> | Date | string
    entries?: SocialRegisterEntryListRelationFilter
  }, "id">

  export type SubsidyProviderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    addedAt?: SortOrder
    _count?: SubsidyProviderCountOrderByAggregateInput
    _max?: SubsidyProviderMaxOrderByAggregateInput
    _min?: SubsidyProviderMinOrderByAggregateInput
  }

  export type SubsidyProviderScalarWhereWithAggregatesInput = {
    AND?: SubsidyProviderScalarWhereWithAggregatesInput | SubsidyProviderScalarWhereWithAggregatesInput[]
    OR?: SubsidyProviderScalarWhereWithAggregatesInput[]
    NOT?: SubsidyProviderScalarWhereWithAggregatesInput | SubsidyProviderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubsidyProvider"> | string
    name?: StringWithAggregatesFilter<"SubsidyProvider"> | string
    type?: EnumProviderTypeWithAggregatesFilter<"SubsidyProvider"> | $Enums.ProviderType
    addedAt?: DateTimeWithAggregatesFilter<"SubsidyProvider"> | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    fullName: string
    email: string
    phone?: string | null
    studentId: string
    registeredAt?: Date | string
    socialRegisterEntry?: SocialRegisterEntryCreateNestedOneWithoutStudentInput
    applications?: ProgramApplicationCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    phone?: string | null
    studentId: string
    registeredAt?: Date | string
    socialRegisterEntry?: SocialRegisterEntryUncheckedCreateNestedOneWithoutStudentInput
    applications?: ProgramApplicationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialRegisterEntry?: SocialRegisterEntryUpdateOneWithoutStudentNestedInput
    applications?: ProgramApplicationUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialRegisterEntry?: SocialRegisterEntryUncheckedUpdateOneWithoutStudentNestedInput
    applications?: ProgramApplicationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    fullName: string
    email: string
    phone?: string | null
    studentId: string
    registeredAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialRegisterEntryCreateInput = {
    id?: string
    dateAdded?: Date | string
    student: StudentCreateNestedOneWithoutSocialRegisterEntryInput
    provider: SubsidyProviderCreateNestedOneWithoutEntriesInput
  }

  export type SocialRegisterEntryUncheckedCreateInput = {
    id?: string
    studentId: string
    providerId: string
    dateAdded?: Date | string
  }

  export type SocialRegisterEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSocialRegisterEntryNestedInput
    provider?: SubsidyProviderUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type SocialRegisterEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialRegisterEntryCreateManyInput = {
    id?: string
    studentId: string
    providerId: string
    dateAdded?: Date | string
  }

  export type SocialRegisterEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialRegisterEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramCreateInput = {
    id?: string
    name: string
    description?: string | null
    feeUSD?: number
    createdAt?: Date | string
    applications?: ProgramApplicationCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    feeUSD?: number
    createdAt?: Date | string
    applications?: ProgramApplicationUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    feeUSD?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ProgramApplicationUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    feeUSD?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ProgramApplicationUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    feeUSD?: number
    createdAt?: Date | string
  }

  export type ProgramUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    feeUSD?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    feeUSD?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramApplicationCreateInput = {
    id?: string
    feeWaived?: boolean
    appliedAt?: Date | string
    student: StudentCreateNestedOneWithoutApplicationsInput
    program: ProgramCreateNestedOneWithoutApplicationsInput
  }

  export type ProgramApplicationUncheckedCreateInput = {
    id?: string
    studentId: string
    programId: string
    feeWaived?: boolean
    appliedAt?: Date | string
  }

  export type ProgramApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    feeWaived?: BoolFieldUpdateOperationsInput | boolean
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutApplicationsNestedInput
    program?: ProgramUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ProgramApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    feeWaived?: BoolFieldUpdateOperationsInput | boolean
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramApplicationCreateManyInput = {
    id?: string
    studentId: string
    programId: string
    feeWaived?: boolean
    appliedAt?: Date | string
  }

  export type ProgramApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    feeWaived?: BoolFieldUpdateOperationsInput | boolean
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    feeWaived?: BoolFieldUpdateOperationsInput | boolean
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubsidyProviderCreateInput = {
    id?: string
    name: string
    type: $Enums.ProviderType
    addedAt?: Date | string
    entries?: SocialRegisterEntryCreateNestedManyWithoutProviderInput
  }

  export type SubsidyProviderUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.ProviderType
    addedAt?: Date | string
    entries?: SocialRegisterEntryUncheckedCreateNestedManyWithoutProviderInput
  }

  export type SubsidyProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: SocialRegisterEntryUpdateManyWithoutProviderNestedInput
  }

  export type SubsidyProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entries?: SocialRegisterEntryUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type SubsidyProviderCreateManyInput = {
    id?: string
    name: string
    type: $Enums.ProviderType
    addedAt?: Date | string
  }

  export type SubsidyProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubsidyProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SocialRegisterEntryNullableRelationFilter = {
    is?: SocialRegisterEntryWhereInput | null
    isNot?: SocialRegisterEntryWhereInput | null
  }

  export type ProgramApplicationListRelationFilter = {
    every?: ProgramApplicationWhereInput
    some?: ProgramApplicationWhereInput
    none?: ProgramApplicationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProgramApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    studentId?: SortOrder
    registeredAt?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    studentId?: SortOrder
    registeredAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    studentId?: SortOrder
    registeredAt?: SortOrder
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

  export type StudentRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type SubsidyProviderRelationFilter = {
    is?: SubsidyProviderWhereInput
    isNot?: SubsidyProviderWhereInput
  }

  export type SocialRegisterEntryCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    providerId?: SortOrder
    dateAdded?: SortOrder
  }

  export type SocialRegisterEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    providerId?: SortOrder
    dateAdded?: SortOrder
  }

  export type SocialRegisterEntryMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    providerId?: SortOrder
    dateAdded?: SortOrder
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

  export type ProgramCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    feeUSD?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgramAvgOrderByAggregateInput = {
    feeUSD?: SortOrder
  }

  export type ProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    feeUSD?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgramMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    feeUSD?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgramSumOrderByAggregateInput = {
    feeUSD?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProgramRelationFilter = {
    is?: ProgramWhereInput
    isNot?: ProgramWhereInput
  }

  export type ProgramApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    programId?: SortOrder
    feeWaived?: SortOrder
    appliedAt?: SortOrder
  }

  export type ProgramApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    programId?: SortOrder
    feeWaived?: SortOrder
    appliedAt?: SortOrder
  }

  export type ProgramApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    programId?: SortOrder
    feeWaived?: SortOrder
    appliedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumProviderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderType | EnumProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderType[] | ListEnumProviderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderType[] | ListEnumProviderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderTypeFilter<$PrismaModel> | $Enums.ProviderType
  }

  export type SocialRegisterEntryListRelationFilter = {
    every?: SocialRegisterEntryWhereInput
    some?: SocialRegisterEntryWhereInput
    none?: SocialRegisterEntryWhereInput
  }

  export type SocialRegisterEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubsidyProviderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    addedAt?: SortOrder
  }

  export type SubsidyProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    addedAt?: SortOrder
  }

  export type SubsidyProviderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    addedAt?: SortOrder
  }

  export type EnumProviderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderType | EnumProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderType[] | ListEnumProviderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderType[] | ListEnumProviderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProviderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderTypeFilter<$PrismaModel>
    _max?: NestedEnumProviderTypeFilter<$PrismaModel>
  }

  export type SocialRegisterEntryCreateNestedOneWithoutStudentInput = {
    create?: XOR<SocialRegisterEntryCreateWithoutStudentInput, SocialRegisterEntryUncheckedCreateWithoutStudentInput>
    connectOrCreate?: SocialRegisterEntryCreateOrConnectWithoutStudentInput
    connect?: SocialRegisterEntryWhereUniqueInput
  }

  export type ProgramApplicationCreateNestedManyWithoutStudentInput = {
    create?: XOR<ProgramApplicationCreateWithoutStudentInput, ProgramApplicationUncheckedCreateWithoutStudentInput> | ProgramApplicationCreateWithoutStudentInput[] | ProgramApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ProgramApplicationCreateOrConnectWithoutStudentInput | ProgramApplicationCreateOrConnectWithoutStudentInput[]
    createMany?: ProgramApplicationCreateManyStudentInputEnvelope
    connect?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
  }

  export type SocialRegisterEntryUncheckedCreateNestedOneWithoutStudentInput = {
    create?: XOR<SocialRegisterEntryCreateWithoutStudentInput, SocialRegisterEntryUncheckedCreateWithoutStudentInput>
    connectOrCreate?: SocialRegisterEntryCreateOrConnectWithoutStudentInput
    connect?: SocialRegisterEntryWhereUniqueInput
  }

  export type ProgramApplicationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ProgramApplicationCreateWithoutStudentInput, ProgramApplicationUncheckedCreateWithoutStudentInput> | ProgramApplicationCreateWithoutStudentInput[] | ProgramApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ProgramApplicationCreateOrConnectWithoutStudentInput | ProgramApplicationCreateOrConnectWithoutStudentInput[]
    createMany?: ProgramApplicationCreateManyStudentInputEnvelope
    connect?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SocialRegisterEntryUpdateOneWithoutStudentNestedInput = {
    create?: XOR<SocialRegisterEntryCreateWithoutStudentInput, SocialRegisterEntryUncheckedCreateWithoutStudentInput>
    connectOrCreate?: SocialRegisterEntryCreateOrConnectWithoutStudentInput
    upsert?: SocialRegisterEntryUpsertWithoutStudentInput
    disconnect?: SocialRegisterEntryWhereInput | boolean
    delete?: SocialRegisterEntryWhereInput | boolean
    connect?: SocialRegisterEntryWhereUniqueInput
    update?: XOR<XOR<SocialRegisterEntryUpdateToOneWithWhereWithoutStudentInput, SocialRegisterEntryUpdateWithoutStudentInput>, SocialRegisterEntryUncheckedUpdateWithoutStudentInput>
  }

  export type ProgramApplicationUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ProgramApplicationCreateWithoutStudentInput, ProgramApplicationUncheckedCreateWithoutStudentInput> | ProgramApplicationCreateWithoutStudentInput[] | ProgramApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ProgramApplicationCreateOrConnectWithoutStudentInput | ProgramApplicationCreateOrConnectWithoutStudentInput[]
    upsert?: ProgramApplicationUpsertWithWhereUniqueWithoutStudentInput | ProgramApplicationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ProgramApplicationCreateManyStudentInputEnvelope
    set?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
    disconnect?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
    delete?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
    connect?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
    update?: ProgramApplicationUpdateWithWhereUniqueWithoutStudentInput | ProgramApplicationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ProgramApplicationUpdateManyWithWhereWithoutStudentInput | ProgramApplicationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ProgramApplicationScalarWhereInput | ProgramApplicationScalarWhereInput[]
  }

  export type SocialRegisterEntryUncheckedUpdateOneWithoutStudentNestedInput = {
    create?: XOR<SocialRegisterEntryCreateWithoutStudentInput, SocialRegisterEntryUncheckedCreateWithoutStudentInput>
    connectOrCreate?: SocialRegisterEntryCreateOrConnectWithoutStudentInput
    upsert?: SocialRegisterEntryUpsertWithoutStudentInput
    disconnect?: SocialRegisterEntryWhereInput | boolean
    delete?: SocialRegisterEntryWhereInput | boolean
    connect?: SocialRegisterEntryWhereUniqueInput
    update?: XOR<XOR<SocialRegisterEntryUpdateToOneWithWhereWithoutStudentInput, SocialRegisterEntryUpdateWithoutStudentInput>, SocialRegisterEntryUncheckedUpdateWithoutStudentInput>
  }

  export type ProgramApplicationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ProgramApplicationCreateWithoutStudentInput, ProgramApplicationUncheckedCreateWithoutStudentInput> | ProgramApplicationCreateWithoutStudentInput[] | ProgramApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ProgramApplicationCreateOrConnectWithoutStudentInput | ProgramApplicationCreateOrConnectWithoutStudentInput[]
    upsert?: ProgramApplicationUpsertWithWhereUniqueWithoutStudentInput | ProgramApplicationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ProgramApplicationCreateManyStudentInputEnvelope
    set?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
    disconnect?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
    delete?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
    connect?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
    update?: ProgramApplicationUpdateWithWhereUniqueWithoutStudentInput | ProgramApplicationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ProgramApplicationUpdateManyWithWhereWithoutStudentInput | ProgramApplicationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ProgramApplicationScalarWhereInput | ProgramApplicationScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutSocialRegisterEntryInput = {
    create?: XOR<StudentCreateWithoutSocialRegisterEntryInput, StudentUncheckedCreateWithoutSocialRegisterEntryInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSocialRegisterEntryInput
    connect?: StudentWhereUniqueInput
  }

  export type SubsidyProviderCreateNestedOneWithoutEntriesInput = {
    create?: XOR<SubsidyProviderCreateWithoutEntriesInput, SubsidyProviderUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: SubsidyProviderCreateOrConnectWithoutEntriesInput
    connect?: SubsidyProviderWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutSocialRegisterEntryNestedInput = {
    create?: XOR<StudentCreateWithoutSocialRegisterEntryInput, StudentUncheckedCreateWithoutSocialRegisterEntryInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSocialRegisterEntryInput
    upsert?: StudentUpsertWithoutSocialRegisterEntryInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSocialRegisterEntryInput, StudentUpdateWithoutSocialRegisterEntryInput>, StudentUncheckedUpdateWithoutSocialRegisterEntryInput>
  }

  export type SubsidyProviderUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<SubsidyProviderCreateWithoutEntriesInput, SubsidyProviderUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: SubsidyProviderCreateOrConnectWithoutEntriesInput
    upsert?: SubsidyProviderUpsertWithoutEntriesInput
    connect?: SubsidyProviderWhereUniqueInput
    update?: XOR<XOR<SubsidyProviderUpdateToOneWithWhereWithoutEntriesInput, SubsidyProviderUpdateWithoutEntriesInput>, SubsidyProviderUncheckedUpdateWithoutEntriesInput>
  }

  export type ProgramApplicationCreateNestedManyWithoutProgramInput = {
    create?: XOR<ProgramApplicationCreateWithoutProgramInput, ProgramApplicationUncheckedCreateWithoutProgramInput> | ProgramApplicationCreateWithoutProgramInput[] | ProgramApplicationUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramApplicationCreateOrConnectWithoutProgramInput | ProgramApplicationCreateOrConnectWithoutProgramInput[]
    createMany?: ProgramApplicationCreateManyProgramInputEnvelope
    connect?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
  }

  export type ProgramApplicationUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<ProgramApplicationCreateWithoutProgramInput, ProgramApplicationUncheckedCreateWithoutProgramInput> | ProgramApplicationCreateWithoutProgramInput[] | ProgramApplicationUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramApplicationCreateOrConnectWithoutProgramInput | ProgramApplicationCreateOrConnectWithoutProgramInput[]
    createMany?: ProgramApplicationCreateManyProgramInputEnvelope
    connect?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProgramApplicationUpdateManyWithoutProgramNestedInput = {
    create?: XOR<ProgramApplicationCreateWithoutProgramInput, ProgramApplicationUncheckedCreateWithoutProgramInput> | ProgramApplicationCreateWithoutProgramInput[] | ProgramApplicationUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramApplicationCreateOrConnectWithoutProgramInput | ProgramApplicationCreateOrConnectWithoutProgramInput[]
    upsert?: ProgramApplicationUpsertWithWhereUniqueWithoutProgramInput | ProgramApplicationUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: ProgramApplicationCreateManyProgramInputEnvelope
    set?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
    disconnect?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
    delete?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
    connect?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
    update?: ProgramApplicationUpdateWithWhereUniqueWithoutProgramInput | ProgramApplicationUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: ProgramApplicationUpdateManyWithWhereWithoutProgramInput | ProgramApplicationUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: ProgramApplicationScalarWhereInput | ProgramApplicationScalarWhereInput[]
  }

  export type ProgramApplicationUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<ProgramApplicationCreateWithoutProgramInput, ProgramApplicationUncheckedCreateWithoutProgramInput> | ProgramApplicationCreateWithoutProgramInput[] | ProgramApplicationUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramApplicationCreateOrConnectWithoutProgramInput | ProgramApplicationCreateOrConnectWithoutProgramInput[]
    upsert?: ProgramApplicationUpsertWithWhereUniqueWithoutProgramInput | ProgramApplicationUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: ProgramApplicationCreateManyProgramInputEnvelope
    set?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
    disconnect?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
    delete?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
    connect?: ProgramApplicationWhereUniqueInput | ProgramApplicationWhereUniqueInput[]
    update?: ProgramApplicationUpdateWithWhereUniqueWithoutProgramInput | ProgramApplicationUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: ProgramApplicationUpdateManyWithWhereWithoutProgramInput | ProgramApplicationUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: ProgramApplicationScalarWhereInput | ProgramApplicationScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<StudentCreateWithoutApplicationsInput, StudentUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutApplicationsInput
    connect?: StudentWhereUniqueInput
  }

  export type ProgramCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<ProgramCreateWithoutApplicationsInput, ProgramUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutApplicationsInput
    connect?: ProgramWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StudentUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<StudentCreateWithoutApplicationsInput, StudentUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutApplicationsInput
    upsert?: StudentUpsertWithoutApplicationsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutApplicationsInput, StudentUpdateWithoutApplicationsInput>, StudentUncheckedUpdateWithoutApplicationsInput>
  }

  export type ProgramUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<ProgramCreateWithoutApplicationsInput, ProgramUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutApplicationsInput
    upsert?: ProgramUpsertWithoutApplicationsInput
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutApplicationsInput, ProgramUpdateWithoutApplicationsInput>, ProgramUncheckedUpdateWithoutApplicationsInput>
  }

  export type SocialRegisterEntryCreateNestedManyWithoutProviderInput = {
    create?: XOR<SocialRegisterEntryCreateWithoutProviderInput, SocialRegisterEntryUncheckedCreateWithoutProviderInput> | SocialRegisterEntryCreateWithoutProviderInput[] | SocialRegisterEntryUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: SocialRegisterEntryCreateOrConnectWithoutProviderInput | SocialRegisterEntryCreateOrConnectWithoutProviderInput[]
    createMany?: SocialRegisterEntryCreateManyProviderInputEnvelope
    connect?: SocialRegisterEntryWhereUniqueInput | SocialRegisterEntryWhereUniqueInput[]
  }

  export type SocialRegisterEntryUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<SocialRegisterEntryCreateWithoutProviderInput, SocialRegisterEntryUncheckedCreateWithoutProviderInput> | SocialRegisterEntryCreateWithoutProviderInput[] | SocialRegisterEntryUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: SocialRegisterEntryCreateOrConnectWithoutProviderInput | SocialRegisterEntryCreateOrConnectWithoutProviderInput[]
    createMany?: SocialRegisterEntryCreateManyProviderInputEnvelope
    connect?: SocialRegisterEntryWhereUniqueInput | SocialRegisterEntryWhereUniqueInput[]
  }

  export type EnumProviderTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProviderType
  }

  export type SocialRegisterEntryUpdateManyWithoutProviderNestedInput = {
    create?: XOR<SocialRegisterEntryCreateWithoutProviderInput, SocialRegisterEntryUncheckedCreateWithoutProviderInput> | SocialRegisterEntryCreateWithoutProviderInput[] | SocialRegisterEntryUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: SocialRegisterEntryCreateOrConnectWithoutProviderInput | SocialRegisterEntryCreateOrConnectWithoutProviderInput[]
    upsert?: SocialRegisterEntryUpsertWithWhereUniqueWithoutProviderInput | SocialRegisterEntryUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: SocialRegisterEntryCreateManyProviderInputEnvelope
    set?: SocialRegisterEntryWhereUniqueInput | SocialRegisterEntryWhereUniqueInput[]
    disconnect?: SocialRegisterEntryWhereUniqueInput | SocialRegisterEntryWhereUniqueInput[]
    delete?: SocialRegisterEntryWhereUniqueInput | SocialRegisterEntryWhereUniqueInput[]
    connect?: SocialRegisterEntryWhereUniqueInput | SocialRegisterEntryWhereUniqueInput[]
    update?: SocialRegisterEntryUpdateWithWhereUniqueWithoutProviderInput | SocialRegisterEntryUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: SocialRegisterEntryUpdateManyWithWhereWithoutProviderInput | SocialRegisterEntryUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: SocialRegisterEntryScalarWhereInput | SocialRegisterEntryScalarWhereInput[]
  }

  export type SocialRegisterEntryUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<SocialRegisterEntryCreateWithoutProviderInput, SocialRegisterEntryUncheckedCreateWithoutProviderInput> | SocialRegisterEntryCreateWithoutProviderInput[] | SocialRegisterEntryUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: SocialRegisterEntryCreateOrConnectWithoutProviderInput | SocialRegisterEntryCreateOrConnectWithoutProviderInput[]
    upsert?: SocialRegisterEntryUpsertWithWhereUniqueWithoutProviderInput | SocialRegisterEntryUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: SocialRegisterEntryCreateManyProviderInputEnvelope
    set?: SocialRegisterEntryWhereUniqueInput | SocialRegisterEntryWhereUniqueInput[]
    disconnect?: SocialRegisterEntryWhereUniqueInput | SocialRegisterEntryWhereUniqueInput[]
    delete?: SocialRegisterEntryWhereUniqueInput | SocialRegisterEntryWhereUniqueInput[]
    connect?: SocialRegisterEntryWhereUniqueInput | SocialRegisterEntryWhereUniqueInput[]
    update?: SocialRegisterEntryUpdateWithWhereUniqueWithoutProviderInput | SocialRegisterEntryUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: SocialRegisterEntryUpdateManyWithWhereWithoutProviderInput | SocialRegisterEntryUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: SocialRegisterEntryScalarWhereInput | SocialRegisterEntryScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumProviderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderType | EnumProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderType[] | ListEnumProviderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderType[] | ListEnumProviderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderTypeFilter<$PrismaModel> | $Enums.ProviderType
  }

  export type NestedEnumProviderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProviderType | EnumProviderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProviderType[] | ListEnumProviderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProviderType[] | ListEnumProviderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProviderTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProviderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderTypeFilter<$PrismaModel>
    _max?: NestedEnumProviderTypeFilter<$PrismaModel>
  }

  export type SocialRegisterEntryCreateWithoutStudentInput = {
    id?: string
    dateAdded?: Date | string
    provider: SubsidyProviderCreateNestedOneWithoutEntriesInput
  }

  export type SocialRegisterEntryUncheckedCreateWithoutStudentInput = {
    id?: string
    providerId: string
    dateAdded?: Date | string
  }

  export type SocialRegisterEntryCreateOrConnectWithoutStudentInput = {
    where: SocialRegisterEntryWhereUniqueInput
    create: XOR<SocialRegisterEntryCreateWithoutStudentInput, SocialRegisterEntryUncheckedCreateWithoutStudentInput>
  }

  export type ProgramApplicationCreateWithoutStudentInput = {
    id?: string
    feeWaived?: boolean
    appliedAt?: Date | string
    program: ProgramCreateNestedOneWithoutApplicationsInput
  }

  export type ProgramApplicationUncheckedCreateWithoutStudentInput = {
    id?: string
    programId: string
    feeWaived?: boolean
    appliedAt?: Date | string
  }

  export type ProgramApplicationCreateOrConnectWithoutStudentInput = {
    where: ProgramApplicationWhereUniqueInput
    create: XOR<ProgramApplicationCreateWithoutStudentInput, ProgramApplicationUncheckedCreateWithoutStudentInput>
  }

  export type ProgramApplicationCreateManyStudentInputEnvelope = {
    data: ProgramApplicationCreateManyStudentInput | ProgramApplicationCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type SocialRegisterEntryUpsertWithoutStudentInput = {
    update: XOR<SocialRegisterEntryUpdateWithoutStudentInput, SocialRegisterEntryUncheckedUpdateWithoutStudentInput>
    create: XOR<SocialRegisterEntryCreateWithoutStudentInput, SocialRegisterEntryUncheckedCreateWithoutStudentInput>
    where?: SocialRegisterEntryWhereInput
  }

  export type SocialRegisterEntryUpdateToOneWithWhereWithoutStudentInput = {
    where?: SocialRegisterEntryWhereInput
    data: XOR<SocialRegisterEntryUpdateWithoutStudentInput, SocialRegisterEntryUncheckedUpdateWithoutStudentInput>
  }

  export type SocialRegisterEntryUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: SubsidyProviderUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type SocialRegisterEntryUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramApplicationUpsertWithWhereUniqueWithoutStudentInput = {
    where: ProgramApplicationWhereUniqueInput
    update: XOR<ProgramApplicationUpdateWithoutStudentInput, ProgramApplicationUncheckedUpdateWithoutStudentInput>
    create: XOR<ProgramApplicationCreateWithoutStudentInput, ProgramApplicationUncheckedCreateWithoutStudentInput>
  }

  export type ProgramApplicationUpdateWithWhereUniqueWithoutStudentInput = {
    where: ProgramApplicationWhereUniqueInput
    data: XOR<ProgramApplicationUpdateWithoutStudentInput, ProgramApplicationUncheckedUpdateWithoutStudentInput>
  }

  export type ProgramApplicationUpdateManyWithWhereWithoutStudentInput = {
    where: ProgramApplicationScalarWhereInput
    data: XOR<ProgramApplicationUpdateManyMutationInput, ProgramApplicationUncheckedUpdateManyWithoutStudentInput>
  }

  export type ProgramApplicationScalarWhereInput = {
    AND?: ProgramApplicationScalarWhereInput | ProgramApplicationScalarWhereInput[]
    OR?: ProgramApplicationScalarWhereInput[]
    NOT?: ProgramApplicationScalarWhereInput | ProgramApplicationScalarWhereInput[]
    id?: StringFilter<"ProgramApplication"> | string
    studentId?: StringFilter<"ProgramApplication"> | string
    programId?: StringFilter<"ProgramApplication"> | string
    feeWaived?: BoolFilter<"ProgramApplication"> | boolean
    appliedAt?: DateTimeFilter<"ProgramApplication"> | Date | string
  }

  export type StudentCreateWithoutSocialRegisterEntryInput = {
    id?: string
    fullName: string
    email: string
    phone?: string | null
    studentId: string
    registeredAt?: Date | string
    applications?: ProgramApplicationCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSocialRegisterEntryInput = {
    id?: string
    fullName: string
    email: string
    phone?: string | null
    studentId: string
    registeredAt?: Date | string
    applications?: ProgramApplicationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSocialRegisterEntryInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSocialRegisterEntryInput, StudentUncheckedCreateWithoutSocialRegisterEntryInput>
  }

  export type SubsidyProviderCreateWithoutEntriesInput = {
    id?: string
    name: string
    type: $Enums.ProviderType
    addedAt?: Date | string
  }

  export type SubsidyProviderUncheckedCreateWithoutEntriesInput = {
    id?: string
    name: string
    type: $Enums.ProviderType
    addedAt?: Date | string
  }

  export type SubsidyProviderCreateOrConnectWithoutEntriesInput = {
    where: SubsidyProviderWhereUniqueInput
    create: XOR<SubsidyProviderCreateWithoutEntriesInput, SubsidyProviderUncheckedCreateWithoutEntriesInput>
  }

  export type StudentUpsertWithoutSocialRegisterEntryInput = {
    update: XOR<StudentUpdateWithoutSocialRegisterEntryInput, StudentUncheckedUpdateWithoutSocialRegisterEntryInput>
    create: XOR<StudentCreateWithoutSocialRegisterEntryInput, StudentUncheckedCreateWithoutSocialRegisterEntryInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSocialRegisterEntryInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSocialRegisterEntryInput, StudentUncheckedUpdateWithoutSocialRegisterEntryInput>
  }

  export type StudentUpdateWithoutSocialRegisterEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ProgramApplicationUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSocialRegisterEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ProgramApplicationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SubsidyProviderUpsertWithoutEntriesInput = {
    update: XOR<SubsidyProviderUpdateWithoutEntriesInput, SubsidyProviderUncheckedUpdateWithoutEntriesInput>
    create: XOR<SubsidyProviderCreateWithoutEntriesInput, SubsidyProviderUncheckedCreateWithoutEntriesInput>
    where?: SubsidyProviderWhereInput
  }

  export type SubsidyProviderUpdateToOneWithWhereWithoutEntriesInput = {
    where?: SubsidyProviderWhereInput
    data: XOR<SubsidyProviderUpdateWithoutEntriesInput, SubsidyProviderUncheckedUpdateWithoutEntriesInput>
  }

  export type SubsidyProviderUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubsidyProviderUncheckedUpdateWithoutEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumProviderTypeFieldUpdateOperationsInput | $Enums.ProviderType
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramApplicationCreateWithoutProgramInput = {
    id?: string
    feeWaived?: boolean
    appliedAt?: Date | string
    student: StudentCreateNestedOneWithoutApplicationsInput
  }

  export type ProgramApplicationUncheckedCreateWithoutProgramInput = {
    id?: string
    studentId: string
    feeWaived?: boolean
    appliedAt?: Date | string
  }

  export type ProgramApplicationCreateOrConnectWithoutProgramInput = {
    where: ProgramApplicationWhereUniqueInput
    create: XOR<ProgramApplicationCreateWithoutProgramInput, ProgramApplicationUncheckedCreateWithoutProgramInput>
  }

  export type ProgramApplicationCreateManyProgramInputEnvelope = {
    data: ProgramApplicationCreateManyProgramInput | ProgramApplicationCreateManyProgramInput[]
    skipDuplicates?: boolean
  }

  export type ProgramApplicationUpsertWithWhereUniqueWithoutProgramInput = {
    where: ProgramApplicationWhereUniqueInput
    update: XOR<ProgramApplicationUpdateWithoutProgramInput, ProgramApplicationUncheckedUpdateWithoutProgramInput>
    create: XOR<ProgramApplicationCreateWithoutProgramInput, ProgramApplicationUncheckedCreateWithoutProgramInput>
  }

  export type ProgramApplicationUpdateWithWhereUniqueWithoutProgramInput = {
    where: ProgramApplicationWhereUniqueInput
    data: XOR<ProgramApplicationUpdateWithoutProgramInput, ProgramApplicationUncheckedUpdateWithoutProgramInput>
  }

  export type ProgramApplicationUpdateManyWithWhereWithoutProgramInput = {
    where: ProgramApplicationScalarWhereInput
    data: XOR<ProgramApplicationUpdateManyMutationInput, ProgramApplicationUncheckedUpdateManyWithoutProgramInput>
  }

  export type StudentCreateWithoutApplicationsInput = {
    id?: string
    fullName: string
    email: string
    phone?: string | null
    studentId: string
    registeredAt?: Date | string
    socialRegisterEntry?: SocialRegisterEntryCreateNestedOneWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutApplicationsInput = {
    id?: string
    fullName: string
    email: string
    phone?: string | null
    studentId: string
    registeredAt?: Date | string
    socialRegisterEntry?: SocialRegisterEntryUncheckedCreateNestedOneWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutApplicationsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutApplicationsInput, StudentUncheckedCreateWithoutApplicationsInput>
  }

  export type ProgramCreateWithoutApplicationsInput = {
    id?: string
    name: string
    description?: string | null
    feeUSD?: number
    createdAt?: Date | string
  }

  export type ProgramUncheckedCreateWithoutApplicationsInput = {
    id?: string
    name: string
    description?: string | null
    feeUSD?: number
    createdAt?: Date | string
  }

  export type ProgramCreateOrConnectWithoutApplicationsInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutApplicationsInput, ProgramUncheckedCreateWithoutApplicationsInput>
  }

  export type StudentUpsertWithoutApplicationsInput = {
    update: XOR<StudentUpdateWithoutApplicationsInput, StudentUncheckedUpdateWithoutApplicationsInput>
    create: XOR<StudentCreateWithoutApplicationsInput, StudentUncheckedCreateWithoutApplicationsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutApplicationsInput, StudentUncheckedUpdateWithoutApplicationsInput>
  }

  export type StudentUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialRegisterEntry?: SocialRegisterEntryUpdateOneWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    studentId?: StringFieldUpdateOperationsInput | string
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialRegisterEntry?: SocialRegisterEntryUncheckedUpdateOneWithoutStudentNestedInput
  }

  export type ProgramUpsertWithoutApplicationsInput = {
    update: XOR<ProgramUpdateWithoutApplicationsInput, ProgramUncheckedUpdateWithoutApplicationsInput>
    create: XOR<ProgramCreateWithoutApplicationsInput, ProgramUncheckedCreateWithoutApplicationsInput>
    where?: ProgramWhereInput
  }

  export type ProgramUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: ProgramWhereInput
    data: XOR<ProgramUpdateWithoutApplicationsInput, ProgramUncheckedUpdateWithoutApplicationsInput>
  }

  export type ProgramUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    feeUSD?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    feeUSD?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialRegisterEntryCreateWithoutProviderInput = {
    id?: string
    dateAdded?: Date | string
    student: StudentCreateNestedOneWithoutSocialRegisterEntryInput
  }

  export type SocialRegisterEntryUncheckedCreateWithoutProviderInput = {
    id?: string
    studentId: string
    dateAdded?: Date | string
  }

  export type SocialRegisterEntryCreateOrConnectWithoutProviderInput = {
    where: SocialRegisterEntryWhereUniqueInput
    create: XOR<SocialRegisterEntryCreateWithoutProviderInput, SocialRegisterEntryUncheckedCreateWithoutProviderInput>
  }

  export type SocialRegisterEntryCreateManyProviderInputEnvelope = {
    data: SocialRegisterEntryCreateManyProviderInput | SocialRegisterEntryCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type SocialRegisterEntryUpsertWithWhereUniqueWithoutProviderInput = {
    where: SocialRegisterEntryWhereUniqueInput
    update: XOR<SocialRegisterEntryUpdateWithoutProviderInput, SocialRegisterEntryUncheckedUpdateWithoutProviderInput>
    create: XOR<SocialRegisterEntryCreateWithoutProviderInput, SocialRegisterEntryUncheckedCreateWithoutProviderInput>
  }

  export type SocialRegisterEntryUpdateWithWhereUniqueWithoutProviderInput = {
    where: SocialRegisterEntryWhereUniqueInput
    data: XOR<SocialRegisterEntryUpdateWithoutProviderInput, SocialRegisterEntryUncheckedUpdateWithoutProviderInput>
  }

  export type SocialRegisterEntryUpdateManyWithWhereWithoutProviderInput = {
    where: SocialRegisterEntryScalarWhereInput
    data: XOR<SocialRegisterEntryUpdateManyMutationInput, SocialRegisterEntryUncheckedUpdateManyWithoutProviderInput>
  }

  export type SocialRegisterEntryScalarWhereInput = {
    AND?: SocialRegisterEntryScalarWhereInput | SocialRegisterEntryScalarWhereInput[]
    OR?: SocialRegisterEntryScalarWhereInput[]
    NOT?: SocialRegisterEntryScalarWhereInput | SocialRegisterEntryScalarWhereInput[]
    id?: StringFilter<"SocialRegisterEntry"> | string
    studentId?: StringFilter<"SocialRegisterEntry"> | string
    providerId?: StringFilter<"SocialRegisterEntry"> | string
    dateAdded?: DateTimeFilter<"SocialRegisterEntry"> | Date | string
  }

  export type ProgramApplicationCreateManyStudentInput = {
    id?: string
    programId: string
    feeWaived?: boolean
    appliedAt?: Date | string
  }

  export type ProgramApplicationUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    feeWaived?: BoolFieldUpdateOperationsInput | boolean
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    program?: ProgramUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ProgramApplicationUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    feeWaived?: BoolFieldUpdateOperationsInput | boolean
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramApplicationUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    feeWaived?: BoolFieldUpdateOperationsInput | boolean
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramApplicationCreateManyProgramInput = {
    id?: string
    studentId: string
    feeWaived?: boolean
    appliedAt?: Date | string
  }

  export type ProgramApplicationUpdateWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    feeWaived?: BoolFieldUpdateOperationsInput | boolean
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ProgramApplicationUncheckedUpdateWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    feeWaived?: BoolFieldUpdateOperationsInput | boolean
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramApplicationUncheckedUpdateManyWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    feeWaived?: BoolFieldUpdateOperationsInput | boolean
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialRegisterEntryCreateManyProviderInput = {
    id?: string
    studentId: string
    dateAdded?: Date | string
  }

  export type SocialRegisterEntryUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutSocialRegisterEntryNestedInput
  }

  export type SocialRegisterEntryUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialRegisterEntryUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    dateAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StudentCountOutputTypeDefaultArgs instead
     */
    export type StudentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProgramCountOutputTypeDefaultArgs instead
     */
    export type ProgramCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProgramCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubsidyProviderCountOutputTypeDefaultArgs instead
     */
    export type SubsidyProviderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubsidyProviderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentDefaultArgs instead
     */
    export type StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SocialRegisterEntryDefaultArgs instead
     */
    export type SocialRegisterEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SocialRegisterEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProgramDefaultArgs instead
     */
    export type ProgramArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProgramDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProgramApplicationDefaultArgs instead
     */
    export type ProgramApplicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProgramApplicationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubsidyProviderDefaultArgs instead
     */
    export type SubsidyProviderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubsidyProviderDefaultArgs<ExtArgs>

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