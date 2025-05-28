# _UnShift\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class procedure UnShift<T>(var A: TArray<T>; const AValue: T);
  static;
```

## Description

Prepends a value to a given array

The length of the array is increased by one.

***Parameters:***

* _A_ - Array to which the element is to be added. The array is updated in place when the element is added.

* _AValue_ - The element to be added to the array.

## Example

This example prepends three elements to a previously empty string array.

```pascal
procedure UnShift_Eg;
var
  A, Expected: TArray<string>;
begin
  A := TArray<string>.Create();

  TArrayUtils.UnShift<string>(A, 'foo');
  Expected := TArray<string>.Create('foo');
  Assert(TArrayUtils.Equal<string>(Expected, A, SameStr));

  TArrayUtils.UnShift<string>(A, 'bar');
  Expected := TArray<string>.Create('bar', 'foo');
  Assert(TArrayUtils.Equal<string>(Expected, A, SameStr));

  TArrayUtils.UnShift<string>(A, 'baz');
  Expected := TArray<string>.Create('baz', 'bar', 'foo' );
  Assert(TArrayUtils.Equal<string>(Expected, A, SameStr));
end;
```

## See Also

* [_Shift\<T\>_](./TArrayUtils-Shift.md)
* [_ShiftAndFree\<T: class\>_](./TArrayUtils-ShiftAndFree.md)
* [_ShiftAndRelease\<T\>_](./TArrayUtils-ShiftAndRelease.md)
* [_Push\<T\>_](./TArrayUtils-Push.md)
