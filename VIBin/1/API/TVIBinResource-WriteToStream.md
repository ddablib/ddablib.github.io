# WriteToStream method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
procedure WriteToStream(const Stream: IStream);
```

## Description

Writes the binary representation of the version information to a stream.

Parameter:

* _Stream_ -- [_IStream_](https://learn.microsoft.com/en-us/windows/win32/api/objidl/nn-objidl-istream) interface to the stream that is to be written to.

Exception:

* _EVIBinVarRec_ raised if any error is encountered while writing to the stream.

## Example

Say you have a Unicode [_TVIBinResource_](./TVIBinResource.md) object containing version information data that you want to write to a file. This can be achieved as follows:

1. Open a [_TFileStream_](https://docwiki.embarcadero.com/Libraries/Alexandria/en/System.Classes.TFileStream) instance onto a newly created file.
2. Because _WriteToStream_ expects an _IStream_ parameter, create a [_TStreamAdapter_](https://docwiki.embarcadero.com/Libraries/Alexandria/en/System.Classes.TStreamAdapter) instance to provide an _IStream_ interface to _TFileStream_.
3. Write the data to the stream using _WriteToStream_.

The following code does the job

```pascal
begin
  var VI: TVIBinResource.Create(vrtUnicode);
  try
    // ...
    // Add some data to VI here
    // ...
    var FS := TFileStream.Create('C:\MyFile', fmCreate);
    var FSA: IStream := TStreamAdapter.Create(FS, soOwned);
    VI.WriteToStream(FSA);
  finally
    VI.Free;
  end;
end;
```

Note that we pass ownership of file stream _FS_ to the _TStreamAdapter_ instance _FSA_, which means that _FS_ will be freed when _FSA_ is destroyed. _FSA_ will be destroyed automatically when it goes out of scope.

For brevity, the _TFileStream_ instance and its _IStream_ wrapper could be created on the fly as follows:

```pascal
    VI.WriteToStream(
      TStreamAdapter.Create(
        TFileStream.Create('C:\MyFile', fmCreate), 
        soOwned
      )
    );
```

## See Also

* [_ReadFromStream_](./TVIBinResource-ReadFromStream.md)
* [_Assign_](./TVIBinResource-Assign.md)
