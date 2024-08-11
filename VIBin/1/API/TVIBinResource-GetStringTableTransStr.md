# GetStringTableTransStr method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
function GetStringTableTransStr(TableIdx: Integer): string;
```

## Description

Gets the translation code string of a string table in the string table list.

Parameter:

* _TableIdx_ -- Index of the required string table within the string table list.

Returns:

* The translation code string of the selected string table.

Exception:

* _EVIBinResource_ is raised if _TableIdx_ is out of bounds.

## See Also

* [_AddStringTable_](./TVIBinResource-AddStringTable.md)
* [_AddStringTableByTrans_](./TVIBinResource-AddStringTableByTrans.md)
* [_DeleteStringTable_](./TVIBinResource-DeleteStringTable.md)
* [_GetStringTableCharSet_](./TVIBinResource-GetStringTableCharSet.md)
* [_GetStringTableCount_](./TVIBinResource-GetStringTableCount.md)
* [_GetStringTableLanguageID_](./TVIBinResource-GetStringTableLanguageID.md)
* [_IndexOfStringTable_](./TVIBinResource-IndexOfStringTable.md)
* [_IndexOfStringTableByTrans_](./TVIBinResource-IndexOfStringTableByTrans.md)
