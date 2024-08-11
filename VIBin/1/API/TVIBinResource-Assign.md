# Assign method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
procedure Assign(const Source: TVIBinResource);
```

## Description

Copies the contents of another _[TVIBinResource](./TVIBinResource.md)_ object to this object, making the content of the two objects equal.

Parameter:

* _Source_ -- _[TVIBinResource](./TVIBinResource.md)_ object whose content is to be copied.

## Note

This method can be used to convert an ANSI resource into a Unicode resource and vice versa if one object is created as ANSI and the other as Unicode.

## Example

In this example we convert an ANSI version information resource object to Unicode.

```pascal
begin
  // Create an ANSI version information resource object
  var AnsiVI := TVIBinResource.Create(vrtAnsi);
  // ...
  // add information to AnsiVI here
  // ...

  // Create a Unicode version information resource object
  var UnicodeVI := TVIBinResource.Create(vrtUnicode);
  // Set Unicode resource to be a copy of AnsiVI, but with
  // content converted from ANSI to Unicode
  UnicodeVI.Assign(AnsiVI);
  // ...
  // do something with UnicodeVI here
  // ...
  
  UnicodeVI.Free;
  AnsiVI.Free;
end;
```

## See Als0

* [_ReadFromStream_](./TVIBinResource-ReadFromStream.md)
* [_WriteToStream_](./TVIBinResource-WriteToStream.md)
* [_Reset_](./TVIBinResource-Reset.md)
