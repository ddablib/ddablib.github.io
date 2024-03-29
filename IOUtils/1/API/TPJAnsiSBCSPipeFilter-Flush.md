# Flush method

**Project:** [I/O Utility Classes](../API.md)

**Unit:** [_PJPipeFilters_](./PJPipeFilters.md)

**Class:** [_TPJAnsiSBCSPipeFilter_](./TPJAnsiSBCSPipeFilter.md)

**Applies to:** ~>1.0

```pascal
procedure Flush;
```

## Description

Flushes any pending un-terminated line of ANSI text from the internal buffer.

If there is any text in the buffer then the [_OnLineEnd_](./TPJAnsiSBCSPipeFilter-OnLineEnd.md) event is triggered for that text as if it was a complete line. If there is no un-terminated text then the event is not triggered.

## Remarks

It is not recommended that _Flush_ is called while there is still data in the pipe as this can introduce artificial line breaks in the text.

_Flush_ is called automatically when the filter object is destroyed.

Calling _Flush_ multiple times between pipe reads or after the last read is benign. Once any remaining text has been flushed further calls to the method have no effect.
