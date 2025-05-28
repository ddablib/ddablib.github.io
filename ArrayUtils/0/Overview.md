# [Array Utilities Unit](../index.md) Overview

**Applies to:** ~>0.1

> This page provides an overview of the features of the _Array Utilities Unit_. If you are looking for information on programming with the unit please see the [Programmers’ Guide](./API.md).

This unit contains methods that can be used to operate on and minipulate arrays.

A single advanced record type, [_TArrayUtils_](./API/TArrayUtils.md), is provided. This record is simply a container for generic static methods, each of which performs an operation on arrays. The record also contains various inner type declarations for various callback functions that are passed to the array manipulation methods.

> ⚠️ The current code is beta. The interface is liable to change. If any bugs are noticed, please report them via the [issue tracker](https://github.com/ddablib/arrayutils/issues) on GitHub (GitHub account required).

## Compatibility

This unit is designed for compilation with 32 bit and 64 bit Windows Delphi compilers. It should compile with Delphi XE onwards.

The code uses only Delphi RTL libraries and so should be able to compile for any platform or framework supported by Delphi.

## Unit Tests

Unit tests that exercise each method are available in the [GitHub repository](https://github.com/ddablib/arrayutils/tree/develop/Test). 

## Example Code

Brief examples of use are included with the documentation of each method.

Each of these examples is available in the [GitHub repository](https://github.com/ddablib/arrayutils/tree/develop/Demos) where there is a separate unit for each method.

## Links

* [Programmers' Guide](./API.md)
