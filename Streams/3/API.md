# [Stream Extension Classes](../index.md) Programmers' Guide

## Introduction

This section of the Stream Extension Classes documentation describes the API exposed by the classes to programmers.

## Contents

### Units

The project consists of two units:

| Unit  | Description |
|:------|:------------|
| [_PJStreamWrapper_](./API/PJStreamWrapper.md)| Provides the core base class for all other classes that "wrap" a _TStream_ instance to provide a filter or to add functionality. |
| [_PJIStreams_](./API/PJIStreams.md) | Contains stream wrapper classes that provide various implementations of the _IStream_ interface. |

### Classes

The following classes are provided by the library:

| Class | Unit | Description |
|:------|:-----|:------------|
| [_TPJStreamWrapper_](./API/TPJStreamWrapper.md) | [_PJStreamWrapper_](./API/PJStreamWrapper.md)| This is a base class for descendant classes that "wrap" a _TStream_ class to filter the data or add functionality. The wrapped _TStream_ is used to perform the required reads, writes and seeks. _TStreamWrapper_ simply replicates the facilities in the wrapped stream - it is for descendant classes to add functionality. |
| [_TPJIStreamWrapper_](./API/TPJIStreamWrapper.md) | [_PJIStreams_](./API/PJIStreams.md) | Implements the _IStream_ interface for a wrapped _TStream_ object. |
| [_TPJHandleIStreamWrapper_](./API/TPJHandleIStreamWrapper.md) | [_PJIStreams_](./API/PJIStreams.md) | Implements an _IStream_ interface for a wrapped _THandleStream_ object. Acts in a similar way to [_TPJIStreamWrapper_](./API/TPJIStreamWrapper.md) except that file date stamps can be access. |
| [_TPJFileIStream_](./API/TPJFileIStream.md) | [_PJIStreams_](./API/PJIStreams.md) | Implements an _IStream_ interface on a file stream. |

## Conventions

This documentation complies with [these conventions](../../common/conventions.md).

## Links

* [Overview](./Overview.md)
