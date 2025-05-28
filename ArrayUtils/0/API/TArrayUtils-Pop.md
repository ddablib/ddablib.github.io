# _Pop\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class function Pop<T>(var A: TArray<T>): T;
  static;
```

## Description

Removes and returns the last element from a non-empty array. 

The length of the array is reduced by one.

***Parameters:***

* _A_ - Array from which the element is to be removed. The array is updated in place when the element is deleted.

***Returns:***

* The element that was removed from _A_.

***Preconditions:***

* _A_ must not be empty. An _EAssertionFailed_ exception is raised otherwise.

## Example

This example pops elements from an array until the array is empty.

```pascal
procedure Pop_Eg;
var
  A, Expected: TArray<string>;
begin
  A := TArray<string>.Create('a', 'stitch', 'in', 'time');

  Expected := TArray<string>.Create('a', 'stitch', 'in');
  Assert(TArrayUtils.Pop<string>(A) = 'time');
  Assert(TArrayUtils.Equal<string>(Expected, A, SameStr));

  Expected := TArray<string>.Create('a', 'stitch');
  Assert(TArrayUtils.Pop<string>(A) = 'in');
  Assert(TArrayUtils.Equal<string>(Expected, A, SameStr));

  Expected := TArray<string>.Create('a');
  Assert(TArrayUtils.Pop<string>(A) = 'stitch');
  Assert(TArrayUtils.Equal<string>(Expected, A, SameStr));

  Expected := TArray<string>.Create();
  Assert(TArrayUtils.Pop<string>(A) = 'a');
  Assert(TArrayUtils.Equal<string>(Expected, A, SameStr));
end;
```

## See Also

* [_PopAndFree\<T: class\>_](./TArrayUtils-PopAndFree.md)
* [_PopAndRelease\<T\>_](./TArrayUtils-PopAndRelease.md)
* [_Push\<T\>_](./TArrayUtils-Push.md)
* [_Shift\<T\>_](./TArrayUtils-Shift.md)
* [_Last\<T\>_](./TArrayUtils-Last.md)
