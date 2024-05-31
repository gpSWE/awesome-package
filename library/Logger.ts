/**
 * @module Logger
 * This module provides a Logger class to handle logging messages with different levels.
 */

/**
 * Enum for log levels.
 * @readonly
 * @enum {number}
 */
enum LogLevel {
	DEBUG = 0,
	INFO = 1,
	WARN = 2,
	ERROR = 3,
}

/**
 * Class representing a logger.
 * @example
 * const logger = new Logger(LogLevel.DEBUG);
 * logger.debug('This is a debug message');
 * logger.info('This is an info message');
 * logger.warn('This is a warning message');
 * logger.error('This is an error message');
 */
export class Logger {

	private level: LogLevel

	/**
	 * Create a logger.
	 * @param {LogLevel} level - The minimum log level for the logger.
	 */
	constructor( level: LogLevel ) {

		this.level = level
	}

	/**
	 * Log a debug message.
	 * @param {string} message - The message to log.
	 */
	debug( message: string ): void {

		if ( this.level <= LogLevel.DEBUG ) {

			console.debug( `DEBUG: ${message}` )
		}
	}

	/**
	 * Log an info message.
	 * @param {string} message - The message to log.
	 */
	info( message: string ): void {

		if ( this.level <= LogLevel.INFO ) {

			console.info( `INFO: ${message}` )
		}
	}

	/**
	 * Log a warning message.
	 * @param {string} message - The message to log.
	 */
	warn( message: string ): void {

		if ( this.level <= LogLevel.WARN ) {

			console.warn( `WARN: ${message}` )
		}
	}

	/**
	 * Log an error message.
	 * @param {string} message - The message to log.
	 */
	error( message: string ): void {

		if ( this.level <= LogLevel.ERROR ) {

			console.error( `ERROR: ${message}` )
		}
	}
}
