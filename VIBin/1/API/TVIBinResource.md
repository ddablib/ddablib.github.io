# TVIBinResource class

**Project:** [Binary Version Information Manipulation Units](../API.md)

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_

**Applies to:** ~>1.0

_TVIBinResource_ is a class that encapsulates the binary representation of Windows version information and exposes properties and methods that permit this data to be read, modified and written.

The class operates directly on version information in its raw binary form, without going through the Windows version information API. Badly formed version information can be handled that would otherwise defeat the Windows API routines. _TVIBinResource_ can enumerate the contents of string tables and list and access non-standard string table entries. It also works with string tables in multiple languages.

## Methods

_TVIBinResource_ provides numerous methods. They are grouped into similar functions below.

### Constructor

| Constructor | Description |
|-------------|-------------|
| [_Create_](./TVIBinResource-Create.md) | Creates a _TVIBinResource_ object that encapsulates version information in either Unicode or ANSI format. |

### Fixed File Information Methods

The following methods operate on the fixed file information record of the encapsulated version information.

| Methods | Description |
|---------|-------------|
| [_GetFixedFileInfo_](./TVIBinResource-GetFixedFileInfo.md) | Returns the fixed file information record. |
| [_SetFixedFileInfo_](./TVIBinResource-SetFixedFileInfo.md) | Sets the fixed file information record to a given value. |

### Translation Table Methods

The following methods operate on the translations records in the translation table of the encapsulated version information.

| Methods | Description |
|---------|-------------|
| [_AddTranslation_](./TVIBinResource-AddTranslation.md) | Creates a new translation with specified language ID and character set and adds it to the translation table. |
| [_DeleteTranslation_](./TVIBinResource-DeleteTranslation.md) | Deletes a specified translation from the translation table. |
| [_GetTranslationCharSet_](./TVIBinResource-GetTranslationCharSet.md) | Returns the character set of a specified translation in the translation table. |
| [_GetTranslationCount_](./TVIBinResource-GetTranslationCount.md) | Returns the number of translations in the translation table. |
| [_GetTranslationLanguageID_](./TVIBinResource-GetTranslationLanguageID.md) | Returns the language ID of a specified translation in the translation table. |
| [_GetTranslationString_](./TVIBinResource-GetTranslationString.md) | Returns the translation code string of a specified translation in the translation table. |
| [_IndexOfTranslation_](./TVIBinResource-IndexOfTranslation.md) | Returns the index in the translation table of the translation with specified language ID and character set. |
| [_SetTranslation_](./TVIBinResource-SetTranslation.md) | Sets the language ID and character set of a specified translation in the translation table. |

### String Table Methods

The following methods operate on the string tables of the encapsulated version information.

| Methods | Description |
|---------|-------------|
| [_AddStringTable_](./TVIBinResource-AddStringTable.md) | Adds a new, empty, string table to the version information, identified by a given translation code string. |
| [_AddStringTableByTrans_](./TVIBinResource-AddStringTableByTrans.md) | Adds a new, empty, string table to the version information, identified by specified language ID and character set. |
| [_DeleteStringTable_](./TVIBinResource-DeleteStringTable.md) | Deletes a specified string table from the version information. |
| [_GetStringTableCharSet_](./TVIBinResource-GetStringTableCharSet.md) | Returns the character set encoded in the translation code string that identifies a specified string table. |
| [_GetStringTableCount_](./TVIBinResource-GetStringTableCount.md) | Returns the number of string tables in the version information. |
| [_GetStringTableLanguageID_](./TVIBinResource-GetStringTableLanguageID.md) | Returns the language ID encoded in the translation code string that identifies a specified string table. |
| [_GetStringTableTransStr_](./TVIBinResource-GetStringTableTransStr.md) | Returns the translation code string that identifies a specified string table. |
| [_IndexOfStringTable_](./TVIBinResource-IndexOfStringTable.md) | Returns the index of the string table in the version information, identified by a given translation code string. |
| [_IndexOfStringTableByTrans_](./TVIBinResource-IndexOfStringTableByTrans.md) | Returns the index of the string table in the version information, identified by a given language ID and character set. |

### String Information Methods

The following methods operate on individual string information items in a specifed string table of the encapsulated version information.

| Methods | Description |
|---------|-------------|
| [_AddOrUpdateString_](./TVIBinResource-AddOrUpdateString.md) | Checks if a named string information item is present in a specified string table and adds the item with the given name and value if not present, or updates the value if it is present. |
| [_AddString_](./TVIBinResource-AddString.md) | Adds a new string with a given name and value to a specified string table. |
| [_DeleteString_](./TVIBinResource-DeleteString.md) | Deletes the string information item at the a given location in a specified string table. |
| [_DeleteStringByName_](./TVIBinResource-DeleteStringByName.md) | Deletes a named string information item in a specified string table. |
| [_GetStringCount_](./TVIBinResource-GetStringCount.md) | Returns the number of string information items in a specified string table. |
| [_GetStringName_](./TVIBinResource-GetStringName.md) | Returns the name of a specifed string information item in a specified string table. |
| [_GetStringValue_](./TVIBinResource-GetStringValue.md) | Returns the value of a specifed string information item in a specified string table. |
| [_GetStringValueByName_](./TVIBinResource-GetStringValueByName.md) | Returns the value of a named string information item in a specified string table. |
| [_IndexOfString_](./TVIBinResource-IndexOfString.md) | Returns the index of a named string information item in a specified string table. |
| [_SetStringValue_](./TVIBinResource-SetStringValue.md) | Sets the value of string information item at a given location in a specified string table. |
| [_SetStringValueByName_](./TVIBinResource-SetStringValueByName.md) | Sets the value of a named string information item in a specified string table. |

### Miscellaneous Methods

| Methods | Description |
|---------|-------------|
| [_Assign_](./TVIBinResource-Assign.md) | Assigns a copy of the content of another _TVIBinResource_ instance to this instance. |
| [_ReadFromStream_](./TVIBinResource-ReadFromStream.md) | Reads binary version information from a stream into the object. |
| [_Reset_](./TVIBinResource-Reset.md) | Resets the version information object to the default, empty, state. |
| [_WriteToStream_](./TVIBinResource-WriteToStream.md) | Writes the binary version information encapsulated by the object to a stream. |

## Class Methods

| Methods | Description |
|---------|-------------|
| [_TransToString_](./TVIBinResource-TransToString.md) | Returns the translation code string representing a specified language ID and character set. |
