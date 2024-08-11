# SetTranslation method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
procedure SetTranslation(TransIdx: Integer; LanguageID, CharSet: Word);
```

## Description

Updates the language identifier and / or character set code of a translation within the the translation table.

Parameters:

* _TransIdx_ -- Index of the required translation in the translation table.
* _LanguageID_ -- The new language identifier. If the value is `$FFFF` then the language identifer is not updated.
* _CharSet_ -- The new character set code. If value is `$FFFF` then the character set code is not updated.

Exception:

* _EVIBinResource_ is raised if _TransIdx_ is out of bounds.

## Note

The new translation code should be unique within the translation table, but this is not checked.

## See Also

* [_AddTranslation_](./TVIBinResource-AddTranslation.md)
* [_DeleteTranslation_](./TVIBinResource-DeleteTranslation.md)
* [_GetTranslationCharSet_](./TVIBinResource-GetTranslationCharSet.md)
* [_GetTranslationCount_](./TVIBinResource-GetTranslationCount.md)
* [_GetTranslationLanguageID_](./TVIBinResource-GetTranslationLanguageID.md)
* [_GetTranslationString_](./TVIBinResource-GetTranslationString.md)
* [_IndexOfTranslation_](./TVIBinResource-IndexOfTranslation.md)
* [_TransToString_](./TVIBinResource-TransToString.md)
