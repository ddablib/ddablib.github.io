# TransToString class method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
class function TransToString(const Language, CharSet: WORD): string;
```

## Description

Creates a translation string from a language identifier and a character set code. The resulting string will be in the format used to identify a translation.

Parameters:

* _Language_ -- The language identifier to be included in the translation string
* _CharSet_ -- The character set code to be included in the translation string.

Returns:

* The formatted translation string.

## See Also

* [_GetTranslationString_](./TVIBinResource-GetTranslationString.md)
* [_AddStringTable_](./TVIBinResource-AddStringTable.md)
* [_GetStringTableTransStr_](./TVIBinResource-GetStringTableTransStr.md)
* [_IndexOfStringTable_](./TVIBinResource-IndexOfStringTable)
