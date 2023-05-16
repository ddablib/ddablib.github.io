# AddTranslation method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
function AddTranslation(LanguageID, CharSet: Word): Integer;
```

## Description

Creates a new translation with a specified translation code and adds it to the translation table.

Parameters:

* _LanguageID_ -- Language identifier component of the translation code. If the value is `$FFFF` then the language identfier is set to `0`.
* _CharSet_ -- Character set code component of the translation code. If the value is `$FFFF` then the character set code is set to `0`.

Returns:

* The index of the new translation in the translation table.

## Note

The translation code should be unique within the translation table, but this is not checked.

## See Also

* [_DeleteTranslation_](./TVIBinResource-DeleteTranslation.md)
* [_GetTranslationCharSet_](./TVIBinResource-GetTranslationCharSet.md)
* [_GetTranslationCount_](./TVIBinResource-GetTranslationCount.md)
* [_GetTranslationLanguageID_](./TVIBinResource-GetTranslationLanguageID.md)
* [_GetTranslationString_](./TVIBinResource-GetTranslationString.md)
* [_IndexOfTranslation_](./TVIBinResource-IndexOfTranslation.md)
* [_SetTranslation_](./TVIBinResource-SetTranslation.md)
* [_TransToString_](./TVIBinResource-TransToString.md)
