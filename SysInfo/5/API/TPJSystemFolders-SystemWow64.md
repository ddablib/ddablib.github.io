# SystemWow64 class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJSystemFolders](./TPJSystemFolders.md)_

**Applies to:** ~>5.0

```pascal
class function SystemWow64: string;
```

## Description

Returns the fully qualified path name of the system folder used by WOW64. This is the folder used to store shared 32 bit code on 64 bit Windows.

An empty string is always returned on 32 bit Windows.
