# _Push\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class procedure Push<T>(var A: TArray<T>; const AValue: T);
  static;
```

## Description

Appends a value to a given array

The length of the array is increased by one.

***Parameters:***

* _A_ - Array to which the element is to be added. The array is updated in place when the element is added.

* _AValue_ - The element to be added to the array.

## Example

This example appends three elements to a previously empty string array.

```pascal
procedure Push_Eg;
var
  A, Expected: TArray<string>;
begin
  A := TArray<string>.Create();

  TArrayUtils.Push<string>(A, 'foo');
  Expected := TArray<string>.Create('foo');
  Assert(TArrayUtils.Equal<string>(Expected, A, SameStr));

  TArrayUtils.Push<string>(A, 'bar');
  Expected := TArray<string>.Create('foo', 'bar');
  Assert(TArrayUtils.Equal<string>(Expected, A, SameStr));

  TArrayUtils.Push<string>(A, 'baz');
  Expected := TArray<string>.Create('foo', 'bar', 'baz');
  Assert(TArrayUtils.Equal<string>(Expected, A, SameStr));
end;
```

## See Also

* [_Pop\<T\>_](./TArrayUtils-Pop.md)
* [_PopAndFree\<T: class\>_](./TArrayUtils-PopAndFree.md)
* [_PopAndRelease\<T\>_](./TArrayUtils-PopAndRelease.md)
* [_UnShift\<T\>_](./TArrayUtils-UnShift.md)
