# [I/O Utility Classes](../index.md) Programmers Guide

## Introduction 

This section of the _I/O Utility Classes_ project documentation documentation describes the API exposed to programmers.

## Contents

### Units

| Units | Description |
|:----- |:------------|
| [_PJPipe_](./API/PJPipe.md) | Exposes a single class that encapsulates an unnamed pipe and can read and write the pipe.  |
| [_PJPipeFilters_](./API/PJPipeFilters.md) | Classes and other types that can filter or format output from pipes. |
| [_PJFileHandle_](./API/PJFileHandle.md) | Exposes a single class that assists in manipulating file handles. |

### Classes

| Class | Unit | Description |
|:------|:-----|:------------|
| [_TPJPipe_](./API/TPJPipe.md) | [_PJPipe_](./API/PJPipe.md) | This class encapsulates an un-named pipe. It simplifies read and writing such pipes and creating pipes with inheritable handles. |
| [_TPJFileHandle_](./API/TPJFileHandle.md) | [_PJFileHandle_](./API/PJFileHandle.md) | This class can create or open files in various access and sharing modes with specified security and provide access to the file handle. It makes it easy to create or open files with inheritable handles. |
| [_TPJPipeFilter_](./API/TPJPipeFilter.md) | [_PJPipeFilters_](./API/PJPipeFilters.md) | Abstract base class for all classes that filter data read from pipes. |
| [_TPJAnsiSBCSPipeFilter_](./API/TPJAnsiSBCSPipeFilter.md) | [_PJPipeFilters_](./API/PJPipeFilters.md) | Pipe filter that constructs valid ANSI strings from data read from pipe. Strings are also parsed into lines. Only single byte character sets are supported. |
| [_TPJUnicodeBMPPipeFilter_](./API/TPJUnicodeBMPPipeFilter.md) | [_PJPipeFilters_](./API/PJPipeFilters.md) | Pipe filter that constructs valid Unicode strings from data read from pipe. Strings are also parsed into lines. Only characters from Unicode's basic multilingual plane are supported. |

### Other types

| Type | Unit | Description |
|:-----|:-----|:------------|
| [_TPJUnicodeTextReadEvent_](./API/TPJUnicodeTextReadEvent.md) | [_PJPipeFilters_](./API/PJPipeFilters.md) | Type of text read event triggered by classes that read Unicode strings from pipes. |
| [_TPJAnsiTextReadEvent_](./API/TPJAnsiTextReadEvent.md) | [_PJPipeFilters_](./API/PJPipeFilters.md) | Type of text read event triggered by classes that read Ansi strings from pipes. |

## Conventions

This documentation complies with [these conventions](../../common/conventions.md).

## Links

* [Overview](./Overview.md) -- details of the purpose of the library
