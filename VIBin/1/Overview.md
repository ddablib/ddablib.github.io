# [Binary Version Information Manipulation Units](../index.md) Overview

> 📝 ***DRAFT: Page subject to change. Do not bookmark links - they may change.***

> This page provides an overview of the features of the Binary Version Information Manipulation Units. If you are looking for information on programming with the component please see the [Programmers' Guide](./API.md).

These units contain a set of classes that can be used to read, manipulate and write Windows version information in its raw binary form. The Windows API is bypassed.

The advantage of using these classes over the Windows API for reading version information is that the code can cope with badly formed version information that would defeat the API routines. Furthermore, this code can enumerate the contents of string tables and list and access non-standard string table entries. It also works with string tables in multiple languages.

## Links

* [Programmers' Guide](./API.md) -- Classes, methods etc.
