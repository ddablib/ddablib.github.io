# [MD5 Message Digest Unit](../index.md) Overview

**Applies to:** ~>1.0

> This page provides an overview of the features of the MD5 Messsage Digest Unit. If you are looking for information on programming with the unit please see the [Programmers’ Guide](./API.md).

This unit contains an implementation of the MD5 message digest algorithm.

The code has been developed from scratch based on the algorithm presented in [RFC 1321](https://www.rfc-editor.org/rfc/rfc1321). Portions of the code are translated from the reference C code supplied in the RFC. However the code is ***not*** a literal translation into Pascal from the reference C code.

## Compatibility

This unit is designed for compilation with 32 bit and 64 bit Delphi compilers. It is designed to compile with compilers from Delphi 2009 onwards.

The code uses only Delphi RTL libraries and so should be able to compile for any platform supported by Delphi.

The unit is compatible with both VCL and FMX applications.

## Unit Tests

Unit tests that exercise each method and property are available in the [GitHub repository](https://github.com/ddablib/md5/tree/develop/Test). The tests include those specified in [RFC 1321](https://www.rfc-editor.org/rfc/rfc1321).

## Tutorial

A Tutorial showing how to use the the MD5 Message Digest Unit is available is the [How To](./HowTo.md) section of this documentation.  

## Links

* [Programmers' Guide](./API.md)
* [How-to Guide](./HowTo.md)
