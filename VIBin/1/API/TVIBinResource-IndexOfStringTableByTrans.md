# IndexOfStringTableByTrans method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
function IndexOfStringTableByTrans(LanguageID, CharSet: Word): Integer;
```

## Description

Finds the index of the string table with a given translation code within the string table list.

Parameters:

* _LanguageID_ -- The language identifier component of the string table's translation code.
* _CharSet_ --  The character set code component of the string table's translation code.

Returns:

* The index of the string table in the string table list, or `-1` if such a string table can not be not found.

## See Also

* [_AddStringTable_](./TVIBinResource-AddStringTable.md)
* [_AddStringTableByTrans_](./TVIBinResource-AddStringTableByTrans.md)
* [_DeleteStringTable_](./TVIBinResource-DeleteStringTable.md)
* [_GetStringTableCharSet_](./TVIBinResource-GetStringTableCharSet.md)
* [_GetStringTableCount_](./TVIBinResource-GetStringTableCount.md)
* [_GetStringTableLanguageID_](./TVIBinResource-GetStringTableLanguageID.md)
* [_GetStringTableTransStr_](./TVIBinResource-GetStringTableTransStr.md)
* [_IndexOfStringTable_](./TVIBinResource-IndexOfStringTable.md)
