# TVIBinResource class

> 📝 ***DRAFT: Page subject to change. Do not bookmark links - they may change.***

**Project:** [Binary Version Information Manipulation Units](../API.md)

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_

**Applies to:** ~>1.0

_TVIBinResource_ is a class that encapsulates the binary representation of Windows version information and exposes properties and methods that permit this data to be read, modified and written.

The class operates directly on version information in its raw binary form, without going through the Windows version information API. Badly formed version information can handles that would defeat the API routines. _TVIBinResource_ can enumerate the contents of string tables and list and access non-standard string table entries. It also works with string tables in multiple languages.

## Methods

> 🚧 _**UNDER CONSTRUCTION**_ 🚧
> 
> ***Not all method description pages are present as yet. Expect broken links.***
>
> _Please check back later_

_TVIBinResource_ provides numerous methods. They are grouped into similar functions below.

### Constructor

| Constructor | Description |
|-------------|-------------|
| _Create_ | Creates a _TVIBinResource_ object that encapsulates version information in either Unicode or ANSI format. |

### Fixed File Information Methods

The following methods operate on the fixed file information record of the encapsulated version information.

| Methods | Description |
|---------|-------------|
| _GetFixedFileInfo_ | Returns the fixed file information record. |
| _SetFixedFileInfo_ | Sets the fixed file information record to a given value. |

### Translation Table Methods

The following methods operate on the translations records in the translation table of the encapsulated version information.

| Methods | Description |
|---------|-------------|
| _AddTranslation_ | Creates a new translation with specified language ID and character set and adds it to the table. |
| _DeleteTranslation_ | Delets a specified translation from the translation table. |
| _GetTranslationCount_ | Returns the number of translations in the table. |
| _GetTranslationCharSet_ | Returns the character set of a specified translation in the table. |
| _GetTranslationLanguageID_ | Returns the language ID of a specified translation in the table. |
| _GetTranslationString_ | Returns the translation code string of a specified translation in the table. |
| _IndexOfTranslation_ | Returns the index in the translation table of the translation with specified language ID and character set. |
| _SetTranslation_ | Sets the language ID and character set of a specified translation in the table. |

### String Table Methods

The following methods operate on the string tables of the encapsulated version information.

| Methods | Description |
|---------|-------------|
| _AddStringTable_ | Adds a new, empty, string table to the version information, identified by a given translation code string. |
| _AddStringTableByTrans_ | Adds a new, empty, string table to the version information, identified by specified language ID and character set. |
| _DeleteStringTable_ | Deletes a specified string table from the version information. |
| _GetStringTableCharSet_ | Returns the character set encoded in the translation code string that identifies a specified string table. |
| _GetStringTableCount_ | Returns the number of string tables in the version information. |
| _GetStringTableLanguageID_ | Returns the language ID encoded in the translation code string that identifies a specified string table. |
| _GetStringTableTransStr_ | Returns the translation code string that identifies a specifoed string table. |
| _IndexOfStringTable_ | Returns the index of the string table to the version information, identified by a given translation code string. |
| _IndexOfStringTableByTrans_ | Returns the index of the string table to the version information, identified by a given language ID and character set. |

### String Information Methods

The following methods operate on individual string information items in a specifed string table of the encapsulated version information.

| Methods | Description |
|---------|-------------|
| _AddOrUpdateString_ | Checks if a named string information item is present in a specified string table and adds the item with the given name and value if not present, or updates the value if it is present. |
| _AddString_ | Adds a new string with a given name and value to a specified string table. |
| _DeleteString_ | Deletes the string information item at the a given location in a specified string table. |
| _DeleteStringByName_ | Deletes a name string information item in a specified string table. |
| _GetStringCount_ | Returns the number of string information items in a specified string table. |
| _GetStringName_ | Returns the name of a specifed string information item in a specified string table. |
| _GetStringValue_ | Returns the value of a specifed string information item in a specified string table. |
| _GetStringValueByName_ | Returns the value of a named string information item in a specified string table. |
| _IndexOfString_ | Returns the index of a named string information item in a specified string table. |
| _SetStringValue_ | Sets the value of string information item at a given location in a specified string table. |
| _SetStringValueByName_ | Sets the value of a named string information item in a specified string table. |

### Miscellaneous Methods

| Methods | Description |
|---------|-------------|
| _Assign_ | Assigns a copy of the content of another _TVIBinResource_ instance to this instance. |
| _ReadFromStream_ | Reads binary version information from a stream into the object. |
| _Reset_ | Resets the version information object to the default, empty, state. |
| _WriteToStream_ | Writes the binary version information encapsulated by the object to a stream. |

## Class Methods

| Methods | Description |
|---------|-------------|
| _TransToString_ | Returns the translation code string representing a specified language ID and character set. |
