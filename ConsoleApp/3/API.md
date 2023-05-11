# [Console Application Runner Classes](../index.md) Programmers Guide

## Introduction

This section of the Console Application Runner Classes documentation describes the API exposed to programmers.

## Contents

### Units

There is just one unit in this project 

It also provides some helper routines and useful constants.

| Units | Description |
|:------|:------------|
| _PJConsoleApp_ | The only unit in this project. This unit provides classes that encapsulate and execute command line applications and optionally redirect the application's standard input, output and error. It also provides some helper routines and useful constants. |

### Classes

| Classes | Description |
|:--------|:------------|
| [_TPJCustomConsoleApp_](./API/TPJCustomConsoleApp.md) | Base class for [_TPJConsoleApp_](./API/TPJConsoleApp.md). Provides all functionality but declares all properties protected. Use this class if creating sub-classes that do not want to make all properties public or need to execute custom code within the class rather than handling events. |
| [_TPJConsoleApp_](./API/TPJConsoleApp.md) | Main console application class. Makes all properties inherited from [_TPJCustomConsoleApp_](./API/TPJCustomConsoleApp.md) public. Use instances of this class when working with console processes. |

### Simple Types

| Types | Description |
|:------|:------------|
| [_TPJConsoleAppPriority_](./API/TPJConsoleAppPriority.md) | Enumerated type that specifies each possible priority level with which an application can be executed. |
|  [_TPJConsoleColor_](./API/TPJConsoleColor.md) | Enumerated type that specifies of all possible colours that can be used for a console's foreground and background. |
| [_TPJConsoleColors_](./API/TPJConsoleColors.md) | Record that stores a console window's foreground and background colours. |

### Other

| Other | Description |
|:------|:------------|
| [Helper routines](./API/Routines.md) | Various routines to help working with console applications. |
| [Constants](./API/Constants.md) | Constants used by the library. |

## Conventions

This documentation complies with [these conventions](../../common/conventions.md).

## Links

* [Overview](./Overview.md)
* [Examples](./Examples.md)
* [Appendicies](./Appendices.md)
