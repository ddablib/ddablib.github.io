# IndexOfTranslation method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
function IndexOfTranslation(LanguageID, CharSet: Word): Integer;
```

## Description

Finds the index of a translation with a given translation code within the translation table.

Parameters:

* _LanguageID_ -- The language identifier component of the translation code. A value of `$FFFF` is converted to `0`.
* _CharSet_ --  The character set code component of the translation code . A value of `$FFFF` is converted to `0`.
    
Returns:

* The index of the translation in the translation table, or `-1` if such a translation can not be not found within the table.

## See Also

* [_AddTranslation_](./TVIBinResource-AddTranslation.md)
* [_DeleteTranslation_](./TVIBinResource-DeleteTranslation.md)
* [_GetTranslationCharSet_](./TVIBinResource-GetTranslationCharSet.md)
* [_GetTranslationCount_](./TVIBinResource-GetTranslationCount.md)
* [_GetTranslationLanguageID_](./TVIBinResource-GetTranslationLanguageID.md)
* [_GetTranslationString_](./TVIBinResource-GetTranslationString.md)
* [_SetTranslation_](./TVIBinResource-SetTranslation.md)
* [_TransToString_](./TVIBinResource-TransToString.md)
