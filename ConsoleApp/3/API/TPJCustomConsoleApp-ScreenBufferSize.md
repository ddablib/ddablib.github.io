# ScreenBufferSize property

**Project:** [Console Application Runner Classes](../API.md)

**Unit:** _PJConsoleApp_

**Classes:** [_TPJCustomConsoleApp_](./TPJCustomConsoleApp.md), [_TPJConsoleApp_](./TPJConsoleApp.md)

**Applies to:** ~>3.0

```pascal
property ScreenBufferSize: TSize;
```

## Description

Specifies the size of a console's screen buffer in character columns and rows. If either dimension is zero or negative the default buffer size is used.

The property defaults to `(0, 0)`.

## Remarks

If a console application shares a console this property has no effect. See [_UseNewConsole_](./TPJCustomConsoleApp-UseNewConsole.md) for more information about shared consoles.

The individual fields of the property are read-only so the property must be set by first creating a _TSize_ record containing the required buffer size information and then assigning the record to the property. For example:

```pascal
var
  Size: TSize;
  App: TPJConsoleApp;
begin
  // assume App contains a valid TPJConsoleApp instance
  Size.cx := 120;  // 120 columns
  Size.cy := 300;  // 300 rows
  App.ScreenBufferSize := Size;
end;
```

The [_MakeSize_](./Routines.md#makesize) routine has been provided to make this process easier. The following code has the same effect as the above:

```pascal
var
  App: TPJConsoleApp;
begin
  // assume App contains a valid TPJConsoleApp instance
  App.ScreenBufferSize := MakeSize(120, 300);
end;
```

The property is public in [_TPJConsoleApp_](./TPJConsoleApp.md) and protected in [_TPJCustomConsoleApp_](./TPJCustomConsoleApp.md).
