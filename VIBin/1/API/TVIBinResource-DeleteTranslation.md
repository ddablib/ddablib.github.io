# DeleteTranslation method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
procedure DeleteTranslation(TransIdx: Integer);
```

## Description

Deletes a translation from the translation table.

Parameters:

* _TransIdx_ -- Index of the translation to be deleted from the translation table.

Exception:
    
* _EVIBinResource_ is raised if _TransIdx_ is out of bounds.

## See Also

* [_AddTranslation_](./TVIBinResource-AddTranslation.md)
* [_GetTranslationCharSet_](./TVIBinResource-GetTranslationCharSet.md)
* [_GetTranslationCount_](./TVIBinResource-GetTranslationCount.md)
* [_GetTranslationLanguageID_](./TVIBinResource-GetTranslationLanguageID.md)
* [_GetTranslationString_](./TVIBinResource-GetTranslationString.md)
* [_IndexOfTranslation_](./TVIBinResource-IndexOfTranslation.md)
* [_SetTranslation_](./TVIBinResource-SetTranslation.md)
* [_TransToString_](./TVIBinResource-TransToString.md)
