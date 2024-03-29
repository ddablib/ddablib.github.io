# Seek method

**Project:** [Stream Extension Classes](../API.md)

**Unit:** [_PJIStreams_](./PJIStreams.md)

**Classes:** [_TPJIStreamWrapper_](./TPJIStreamWrapper.md), [_TPJHandleIStreamWrapper_](./TPJHandleIStreamWrapper.md), [_TPJFileIStream_](./TPJFileIStream.md)

**Applies to:** ~>3.0

```pascal
function Seek(dlibMove: Largeint; dwOrigin: Longint;
  out libNewPosition: Largeint): HResult; virtual; stdcall;
```

## Description

Changes the seek pointer of the wrapped stream to a new location. The new location can be relative to the beginning of the stream, the end of the stream, or the current seek pointer position.

Parameters:

* _dlibMove_ -- Number of bytes to offset seek pointer from origin specified by _dwOrigin_.
* _dwOrigin_ -- Origin of the move. Possible values are:
  * _STREAM_SEEK_SET_: Offset from start of stream. _dlibMove_ should be positive.
  * _STREAM_SEEK_CUR_: Offset from current stream position. Positive values of _dlibMove_ move forward in stream and negative values move backward.
  * _STREAM_SEEK_END_: Offset from end of stream. _dlibMove_ should be negative.
* _libNewPosition_ -- Set to the new position in the wrapped stream after the move. _See Remarks._

Returns:

* _S_OK_ on success.
* _STG_E_INVALIDPOINTER_ if the seek fails.
* _STG_E_INVALIDFUNCTION_ if an invalid origin was specified.

## Remarks

### Large Streams (=> _MaxInit_ Bytes)

**[~>3.0.0]** This method cannot be used reliably on streams greater than _MaxInt_ bytes in size. This is because the new stream position, passed out via the _libNewPosition_ parameter is truncated to 32 bits, even though this is a 64 bit parameter. If the wrapped stream supports 64 bit offsets its new position will be set correctly, but the reported value in _libNewPosition_ will be wrong.

**[~>3.1]** This method is reliable. The _libNewPosition_ parameter is set correctly when the new stream position is greater than _MaxInt_.

### Wrapped Stream Move Offset Limitations

It is possible that wrapped streams may support only 32 bit move offsets or be limited in size to _MaxInt_ bytes. In such cases passing a value of more than _MaxInt_ to the _dlibMove_ parameter, or attempting to seek beyond _MaxInt_, can have unexpected results.

**[~>3.0.0]** The method will succeed, returning _S_OK_, even though the stream's position will not be as expected.

**[~>3.1]** You can detect the 32 bit move offset or 32 bit stream size problems mentioned above because the value of _libNewPosition_ will differ from _dlibMove_ when the method returns.

> Note that before Delphi 6 no _TStream_ descendants supported 64 bit moves and all were limited to _MaxInt_ bytes.

### Seek Bug in TStringStream

For non-Unicode versions of Delphi, _TStringStream_ does not behave as expected for some seek operations.

> This problem does not occur in any other stream class, or in Unicode versions of _TStringStream_.

**[~>3.0.0]** Setting _dwOrigin_ to _STREAM_SEEK_END_ when _dlibMove_ will cause offsets to work the opposite way to that expected, i.e. a positive offset will move back in the stream. 

**[~>3.1]** The problem is resolved. Although affected _TStringStream_ classes still exhibit the problem, _Seek_ intercepts and fixes the error. However, you can revert to earlier behaviour by undefining the _FIX_TSTRINGSTREAM_SEEK_ERROR_ symbol in the [_PJStreamWrapper_](./PJStreamWrapper.md) unit.
