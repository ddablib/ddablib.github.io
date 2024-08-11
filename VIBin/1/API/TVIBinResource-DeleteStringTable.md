# DeleteStringTable method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
procedure DeleteStringTable(TableIdx: Integer);
```

## Description

Deletes a string table from the string table list.

Parameters:

* _TableIdx_ -- Index of the string table to be deleted from the string table list.

Exception:
    
* _EVIBinResource_ is raised if _TableIdx_ is out of bounds.

## See Also

* [_AddStringTable_](./TVIBinResource-AddStringTable.md)
* [_AddStringTableByTrans_](./TVIBinResource-AddStringTableByTrans.md)
* [_GetStringTableCharSet_](./TVIBinResource-GetStringTableCharSet.md)
* [_GetStringTableCount_](./TVIBinResource-GetStringTableCount.md)
* [_GetStringTableLanguageID_](./TVIBinResource-GetStringTableLanguageID.md)
* [_GetStringTableTransStr_](./TVIBinResource-GetStringTableTransStr.md)
* [_IndexOfStringTable_](./TVIBinResource-IndexOfStringTable.md)
* [_IndexOfStringTableByTrans_](./TVIBinResource-IndexOfStringTableByTrans.md)
