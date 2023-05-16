# GetTranslationLanguageID method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
function GetTranslationLanguageID(TransIdx: Integer): Word;
```

## Description

Gets the language identifier of a translation in the translation table.

Parameter:

* _TransIdx_ -- Index of the required translation within the translation table.

Returns:

* The language identifier of the selected translation.

Exception:

* _EVIBinResource_ is raised if _TransIdx_ is out of bounds.

## See Also

* [_AddTranslation_](./TVIBinResource-AddTranslation.md)
* [_DeleteTranslation_](./TVIBinResource-DeleteTranslation.md)
* [_GetTranslationCharSet_](./TVIBinResource-GetTranslationCharSet.md)
* [_GetTranslationCount_](./TVIBinResource-GetTranslationCount.md)
* [_GetTranslationString_](./TVIBinResource-GetTranslationString.md)
* [_IndexOfTranslation_](./TVIBinResource-IndexOfTranslation.md)
* [_SetTranslation_](./TVIBinResource-SetTranslation.md)
* [_TransToString_](./TVIBinResource-TransToString.md)
