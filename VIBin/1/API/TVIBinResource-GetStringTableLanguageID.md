# GetStringTableLanguageID method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
function GetStringTableLanguageID(TableIdx: Integer): Word;
```

## Description

Gets the language identifier of a string table in the string table list.

Parameter:

* _TableIdx_ -- Index of the required string table within the string table list.

Returns:

* The language identifier of the selected string table.

Exception:

* _EVIBinResource_ is raised if _TableIdx_ is out of bounds.

## See Also

* [_AddStringTable_](./TVIBinResource-AddStringTable.md)
* [_AddStringTableByTrans_](./TVIBinResource-AddStringTableByTrans.md)
* [_DeleteStringTable_](./TVIBinResource-DeleteStringTable.md)
* [_GetStringTableCharSet_](./TVIBinResource-GetStringTableCharSet.md)
* [_GetStringTableCount_](./TVIBinResource-GetStringTableCount.md)
* [_GetStringTableTransStr_](./TVIBinResource-GetStringTableTransStr.md)
* [_IndexOfStringTable_](./TVIBinResource-IndexOfStringTable.md)
* [_IndexOfStringTableByTrans_](./TVIBinResource-IndexOfStringTableByTrans.md)
