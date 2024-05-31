[**awesome-package**](../README.md) • **Docs**

***

[awesome-package](../README.md) / Logger

# Class: Logger

Class representing a logger.

## Example

```ts
const logger = new Logger(LogLevel.DEBUG);
logger.debug('This is a debug message');
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');
```

## Constructors

### new Logger()

> **new Logger**(`level`): [`Logger`](Logger.md)

Create a logger.

#### Parameters

• **level**: `LogLevel`

The minimum log level for the logger.

#### Returns

[`Logger`](Logger.md)

#### Source

Logger.ts:35

## Methods

### debug()

> **debug**(`message`): `void`

Log a debug message.

#### Parameters

• **message**: `string`

The message to log.

#### Returns

`void`

#### Source

Logger.ts:44

***

### error()

> **error**(`message`): `void`

Log an error message.

#### Parameters

• **message**: `string`

The message to log.

#### Returns

`void`

#### Source

Logger.ts:80

***

### info()

> **info**(`message`): `void`

Log an info message.

#### Parameters

• **message**: `string`

The message to log.

#### Returns

`void`

#### Source

Logger.ts:56

***

### warn()

> **warn**(`message`): `void`

Log a warning message.

#### Parameters

• **message**: `string`

The message to log.

#### Returns

`void`

#### Source

Logger.ts:68
