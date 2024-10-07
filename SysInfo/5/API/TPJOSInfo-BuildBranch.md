# BuildBranch class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJOSInfo](./TPJOSInfo.md)_

**Applies to:** ~>5.30

```pascal
class function BuildBranch: string;
```

## Description

Returns a string containing the Windows development branch from which the OS release was built.

If no build branch information is available then an empty string is returned.

## Example

An example build branch that _may_ be returned by this method when using Windows 11 is `'ni_release'`.
