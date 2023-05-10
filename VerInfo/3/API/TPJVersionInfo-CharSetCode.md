# CharSetCode property

***Project:*** [Version Information Component](../API.md)

***Unit:*** _PJVersionInfo_

***Class:*** [_TPJVersionInfo_](./TPJVersionInfo.md)

```pascal
property CharSetCode: WORD;
```

## Description

Read only property that returns the code of the character set used by the current translation.

If the current file has no version information then `0` is returned. To get a description of the character set use the [_CharSet_](./TPJVersionInfo-CharSet.md) property instead.

See the _charsetID_ section of the [VERSIONINFO resource](https://learn.microsoft.com/en-gb/windows/win32/menurc/versioninfo-resource) documentation.
