# [Fractions Unit](../index.md) Overview

**Applies to:** ~>0.1

> This page provides an overview of the features of the Fractions Unit. If you are looking for information on programming with the unit please see the [Programmers’ Guide](./API.md).

This unit contains an encapsulation of a fraction and arthrithmetic performed on it.

A single advanced record type, [_TFraction_](./API/TFraction.md), is used to encapsulate the fraction. Instances of the record are immutable, i.e. their properties cannot be altered once the instance has been constructed. All methods that manipulate properties create new instances containing the results.

Operator overloading is used extensively to enable normal arithmetic operations to be carried out on fractions.

> ⚠️ The current code is beta, although it has been stable for some time. The interface is liable to change. If any bugs are noticed, please report them via the [issue tracker](https://github.com/ddablib/fractions/issues) on GitHub (GitHub account required).

## Compatibility

This unit is designed for compilation with 32 bit and 64 bit Windows Delphi compilers. It is designed to compile with compilers from Delphi XE onwards. It may compile with Delphi 2009 and Delphi 2010, but this is not tested and not guaranteed.

The code uses only Delphi RTL libraries and so should be able to compile for any platform supported by Delphi.

The unit is compatible with both VCL and FMX applications.

## Unit Tests

Unit tests that exercise each method and property are available in the [GitHub repository](https://github.com/ddablib/fractions/tree/develop/Test). 

## Example Code

The documentation of each method and property contains brief examples of use.

## Links

* [Programmers' Guide](./API.md)
* [Credits](./Credits.md)
