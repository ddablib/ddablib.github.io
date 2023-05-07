# CanSpoof class function

**Project:** [System Information Unit](../API.md).

**Unit:** _PJSysInfo_.

**Class:** _[TPJOSInfo](./TPJOSInfo.md)_

**Applies to:** ~>5.0

```pascal
class function CanSpoof: Boolean;
```

## Description

Checks if the reported operating can be "spoofed" when the program is running in compatibility mode.

When this method returns `True` it indicates that some methods of _[TPJOSInfo](./TPJOSInfo.md)_ and some [global variables](./Globals.md) will return the details of the compatibility mode OS instead of the actual one.

When _CanSpoof_ returns `False` returned OS information will be the installed operating system and the operating system compatibility mode is ignored.

See the documentation of the [relevant methods](./TPJOSInfo.md) and [global variables](./Globals.md) for details of which of them are affected by spoofing.
