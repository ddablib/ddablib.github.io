# _Shift\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class function Shift<T>(var A: TArray<T>): T;
  static;
```

## Description

Removes the first element from a non-empty array. 

The length of the array is reduced by one.

***Parameters:***

* _A_ - Array from which the element is to be removed. The array is updated in place when the element is deleted.

***Returns:***

* The element that was removed from _A_.

***Preconditions:***

* _A_ must not be empty. An _EAssertionFailed_ exception is raised otherwise.

## Example

This example shifts elements from an array until the array is empty.

```pascal
procedure Shift_Eg;
var
  A, Expected: TArray<string>;
begin
  A := TArray<string>.Create('a', 'stitch', 'in', 'time');

  Expected := TArray<string>.Create('stitch', 'in', 'time');
  Assert(TArrayUtils.Shift<string>(A) = 'a');
  Assert(TArrayUtils.Equal<string>(Expected, A, SameStr));

  Expected := TArray<string>.Create('in', 'time');
  Assert(TArrayUtils.Shift<string>(A) = 'stitch');
  Assert(TArrayUtils.Equal<string>(Expected, A, SameStr));

  Expected := TArray<string>.Create('time');
  Assert(TArrayUtils.Shift<string>(A) = 'in');
  Assert(TArrayUtils.Equal<string>(Expected, A, SameStr));

  Expected := TArray<string>.Create();
  Assert(TArrayUtils.Shift<string>(A) = 'time');
  Assert(TArrayUtils.Equal<string>(Expected, A, SameStr));
end;
```

## See Also

* [_ShiftAndFree\<T: class\>_](./TArrayUtils-ShiftAndFree.md)
* [_ShiftAndRelease\<T\>_](./TArrayUtils-ShiftAndRelease.md)
* [_UnShift\<T\>_](./TArrayUtils-UnShift.md)
* [_Pop\<T\>_](./TArrayUtils-Pop.md)
* [_First\<T\>_](./TArrayUtils-First.md)
