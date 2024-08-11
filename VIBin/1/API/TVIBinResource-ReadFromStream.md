# ReadFromStream method

**Project:** [Binary Version Information Manipulation Units](../API.md).

**Unit:** _DelphiDabbler.Lib.VIBin.Resource_.

**Class:** _[TVIBinResource](./TVIBinResource.md)_

**Applies to:** ~>1.0

```pascal
procedure ReadFromStream(const Stream: IStream);
```

## Description

Reads the binary representation of the version information from a stream then parses the data and stores it in this object.

Parameter:

* _Stream_ -- [_IStream_](https://learn.microsoft.com/en-us/windows/win32/api/objidl/nn-objidl-istream) interface to the stream that is to be read from.

Exception:

* _EVIBinVarRec_ raised if any error is encountered reading from the stream or if the stream is empty.

## Example

The following example shows how to read data from a file into a Unicode version information object.

The code opens the file using a [_TFileStream_](https://docwiki.embarcadero.com/Libraries/Alexandria/en/System.Classes.TFileStream) object. Since _ReadFromStream_ expects an _IStream_ instance rather than a _TStream_, a [_TStreamAdapter_](https://docwiki.embarcadero.com/Libraries/Alexandria/en/System.Classes.TStreamAdapter) object is used to wrap the _TStream_ to provide the required _IStream_ interface.  

~~~pascal
begin
  var VI := TVIBinResource.Create(vrtUnicode);
  try
    var FS := TFileStream.Create('C:\MyVersionData', fmOpenRead);
    var FSA: IStream := TStreamAdapter.Create(FS, soOwned);
    VI.ReadFromStream(FSA);
    // ...
    // Do something with VI here
    // ...
  finally
    VI.Free;
  end;
end;
~~~

Note that we pass ownership of file stream _FS_ to the _TStreamAdapter_ instance _FSA_, which means that _FS_ will be freed when _FSA_ is destroyed. _FSA_ will be destroyed automatically when it goes out of scope.

For brevity, the _TFileStream_ instance and its _IStream_ wrapper could be created on the fly as follows:

```pascal
    VI.ReadFromStream(
      TStreamAdapter.Create(
        TFileStream.Create('C:\MyVersionData', fmOpenRead),
        soOwned  
      )
    );
```

## See Also

* [_WriteToStream_](./TVIBinResource-WriteToStream.md)
* [_Assign_](./TVIBinResource-Assign.md)
* [_Reset_](./TVIBinResource-Reset.md)
