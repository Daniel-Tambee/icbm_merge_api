
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.17.0
 * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
 */
Prisma.prismaVersion = {
  client: "5.17.0",
  engine: "393aa359c9ad4a4bb28630fb5613f9c281cde053"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.StudentApplicationScalarFieldEnum = {
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

exports.Prisma.StudentApplicationPaymentScalarFieldEnum = {
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

exports.Prisma.SocialRegisterScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Gender = exports.$Enums.Gender = {
  male: 'male',
  female: 'female',
  other: 'other'
};

exports.EducationLevel = exports.$Enums.EducationLevel = {
  none: 'none',
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  postgraduate: 'postgraduate'
};

exports.AreaOfStudy = exports.$Enums.AreaOfStudy = {
  science: 'science',
  arts: 'arts',
  social_science: 'social_science',
  engineering: 'engineering',
  medical: 'medical',
  other: 'other'
};

exports.PreferredTrack = exports.$Enums.PreferredTrack = {
  software: 'software',
  data: 'data',
  design: 'design',
  product: 'product',
  cybersecurity_ai: 'cybersecurity_ai'
};

exports.EmploymentStatus = exports.$Enums.EmploymentStatus = {
  employed: 'employed',
  unemployed: 'unemployed',
  student: 'student'
};

exports.Availability = exports.$Enums.Availability = {
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  weekend: 'weekend'
};

exports.NYSCStatus = exports.$Enums.NYSCStatus = {
  completed: 'completed',
  currently_serving: 'currently_serving',
  exempted: 'exempted',
  not_applicable: 'not_applicable'
};

exports.ApplicationFeeStatus = exports.$Enums.ApplicationFeeStatus = {
  PAID: 'PAID',
  WAIVED: 'WAIVED',
  UNPAID: 'UNPAID'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PAID: 'PAID',
  PENDING: 'PENDING',
  FAILED: 'FAILED',
  WAIVED: 'WAIVED'
};

exports.PaymentMethod = exports.$Enums.PaymentMethod = {
  CARD: 'CARD',
  TRANSFER: 'TRANSFER',
  USSD: 'USSD',
  MANUAL: 'MANUAL',
  WAIVER: 'WAIVER'
};

exports.Prisma.ModelName = {
  StudentApplication: 'StudentApplication',
  StudentApplicationPayment: 'StudentApplicationPayment',
  SocialRegister: 'SocialRegister'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/terna/icbm_merge_api/signup-schema/generated/prisma/signUpDb",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/home/terna/icbm_merge_api/signup-schema/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.17.0",
  "engineVersion": "393aa359c9ad4a4bb28630fb5613f9c281cde053",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma/signUpDb\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel StudentApplication {\n  id               String         @id @default(uuid())\n  fullName         String\n  email            String         @unique\n  phoneNumber      String\n  dateOfBirth      DateTime\n  gender           Gender\n  stateOfOrigin    String\n  currentResidence String?\n  educationLevel   EducationLevel\n  areaOfStudy      AreaOfStudy\n  preferredTrack   PreferredTrack\n\n  englishReading  Int\n  englishWriting  Int\n  englishSpeaking Int\n\n  basicITSkills String[]\n  typingSpeed   Int\n\n  zoomConfidence  Int\n  slackConfidence Int\n  emailConfidence Int\n  docsConfidence  Int\n\n  problemSolvingAnswers String[]\n\n  needsLoan         Boolean\n  employmentStatus  EmploymentStatus\n  willingToRelocate Boolean\n  hasLaptop         Boolean\n\n  availability    Availability\n  motivationEssay String\n  futureGoals     String\n  willingToCommit Boolean\n  nyscStatus      NYSCStatus\n  wantsMentor     Boolean\n\n  cybersecurityAnswers String[]\n\n  applicationFeeStatus ApplicationFeeStatus        @default(UNPAID)\n  payments             StudentApplicationPayment[]\n  frappeId             String?                     @unique\n  odooId               Int?                        @unique\n  socialRegisterId     String?                     @unique\n\n  createdAt DateTime @default(now())\n}\n\nmodel StudentApplicationPayment {\n  id               String             @id @default(uuid())\n  application      StudentApplication @relation(fields: [applicationId], references: [id])\n  applicationId    String\n  amount           Float\n  currency         String             @default(\"USD\")\n  status           PaymentStatus      @default(PENDING)\n  method           PaymentMethod\n  reference        String? // Payment gateway ref (e.g. Paystack)\n  socialRegister   SocialRegister?    @relation(fields: [socialRegisterId], references: [id])\n  socialRegisterId String?\n  createdAt        DateTime           @default(now())\n  updatedAt        DateTime           @updatedAt\n}\n\nmodel SocialRegister {\n  id         String  @id @default(uuid())\n  fullName   String\n  nationalId String  @unique\n  lga        String\n  state      String\n  gender     Gender\n  age        Int\n  email      String?\n  phone      String?\n\n  applicationPayments StudentApplicationPayment[]\n}\n\nenum Gender {\n  male\n  female\n  other\n}\n\nenum EducationLevel {\n  none\n  primary\n  secondary\n  tertiary\n  postgraduate\n}\n\nenum AreaOfStudy {\n  science\n  arts\n  social_science\n  engineering\n  medical\n  other\n}\n\nenum PreferredTrack {\n  software\n  data\n  design\n  product\n  cybersecurity_ai\n}\n\nenum EmploymentStatus {\n  employed\n  unemployed\n  student\n}\n\nenum Availability {\n  morning\n  afternoon\n  evening\n  weekend\n}\n\nenum NYSCStatus {\n  completed\n  currently_serving\n  exempted\n  not_applicable\n}\n\nenum ApplicationFeeStatus {\n  PAID\n  WAIVED\n  UNPAID\n}\n\nenum PaymentStatus {\n  PAID\n  PENDING\n  FAILED\n  WAIVED\n}\n\nenum PaymentMethod {\n  CARD\n  TRANSFER\n  USSD\n  MANUAL\n  WAIVER\n}\n",
  "inlineSchemaHash": "d33536ae9f79759a6a048688b5c8cb1a91692167dbdf2a60a818c157d4bc79e3",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"StudentApplication\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fullName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phoneNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dateOfBirth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gender\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stateOfOrigin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentResidence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"educationLevel\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EducationLevel\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"areaOfStudy\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AreaOfStudy\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preferredTrack\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PreferredTrack\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"englishReading\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"englishWriting\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"englishSpeaking\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"basicITSkills\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"typingSpeed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zoomConfidence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slackConfidence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emailConfidence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"docsConfidence\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"problemSolvingAnswers\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"needsLoan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"employmentStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EmploymentStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"willingToRelocate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hasLaptop\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"availability\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Availability\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"motivationEssay\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"futureGoals\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"willingToCommit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nyscStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"NYSCStatus\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wantsMentor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cybersecurityAnswers\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"applicationFeeStatus\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ApplicationFeeStatus\",\"default\":\"UNPAID\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentApplicationPayment\",\"relationName\":\"StudentApplicationToStudentApplicationPayment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frappeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"odooId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socialRegisterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StudentApplicationPayment\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"application\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentApplication\",\"relationName\":\"StudentApplicationToStudentApplicationPayment\",\"relationFromFields\":[\"applicationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"applicationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"USD\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PaymentStatus\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"method\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PaymentMethod\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reference\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socialRegister\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SocialRegister\",\"relationName\":\"SocialRegisterToStudentApplicationPayment\",\"relationFromFields\":[\"socialRegisterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"socialRegisterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SocialRegister\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fullName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nationalId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lga\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gender\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"age\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"applicationPayments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StudentApplicationPayment\",\"relationName\":\"SocialRegisterToStudentApplicationPayment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Gender\":{\"values\":[{\"name\":\"male\",\"dbName\":null},{\"name\":\"female\",\"dbName\":null},{\"name\":\"other\",\"dbName\":null}],\"dbName\":null},\"EducationLevel\":{\"values\":[{\"name\":\"none\",\"dbName\":null},{\"name\":\"primary\",\"dbName\":null},{\"name\":\"secondary\",\"dbName\":null},{\"name\":\"tertiary\",\"dbName\":null},{\"name\":\"postgraduate\",\"dbName\":null}],\"dbName\":null},\"AreaOfStudy\":{\"values\":[{\"name\":\"science\",\"dbName\":null},{\"name\":\"arts\",\"dbName\":null},{\"name\":\"social_science\",\"dbName\":null},{\"name\":\"engineering\",\"dbName\":null},{\"name\":\"medical\",\"dbName\":null},{\"name\":\"other\",\"dbName\":null}],\"dbName\":null},\"PreferredTrack\":{\"values\":[{\"name\":\"software\",\"dbName\":null},{\"name\":\"data\",\"dbName\":null},{\"name\":\"design\",\"dbName\":null},{\"name\":\"product\",\"dbName\":null},{\"name\":\"cybersecurity_ai\",\"dbName\":null}],\"dbName\":null},\"EmploymentStatus\":{\"values\":[{\"name\":\"employed\",\"dbName\":null},{\"name\":\"unemployed\",\"dbName\":null},{\"name\":\"student\",\"dbName\":null}],\"dbName\":null},\"Availability\":{\"values\":[{\"name\":\"morning\",\"dbName\":null},{\"name\":\"afternoon\",\"dbName\":null},{\"name\":\"evening\",\"dbName\":null},{\"name\":\"weekend\",\"dbName\":null}],\"dbName\":null},\"NYSCStatus\":{\"values\":[{\"name\":\"completed\",\"dbName\":null},{\"name\":\"currently_serving\",\"dbName\":null},{\"name\":\"exempted\",\"dbName\":null},{\"name\":\"not_applicable\",\"dbName\":null}],\"dbName\":null},\"ApplicationFeeStatus\":{\"values\":[{\"name\":\"PAID\",\"dbName\":null},{\"name\":\"WAIVED\",\"dbName\":null},{\"name\":\"UNPAID\",\"dbName\":null}],\"dbName\":null},\"PaymentStatus\":{\"values\":[{\"name\":\"PAID\",\"dbName\":null},{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"FAILED\",\"dbName\":null},{\"name\":\"WAIVED\",\"dbName\":null}],\"dbName\":null},\"PaymentMethod\":{\"values\":[{\"name\":\"CARD\",\"dbName\":null},{\"name\":\"TRANSFER\",\"dbName\":null},{\"name\":\"USSD\",\"dbName\":null},{\"name\":\"MANUAL\",\"dbName\":null},{\"name\":\"WAIVER\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

