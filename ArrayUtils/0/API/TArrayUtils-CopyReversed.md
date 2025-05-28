# _CopyReversed\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class function CopyReversed<T>(const A: array of T): TArray<T>;
  static;
```

## Description

Returns a reversed copy of the elements of a given array.

The copy is a shallow copy, so any references within the resulting array are the same as those in the initial array.

***Parameters:***

* _A_ - The array to be reversed.

***Returns:***

* The reversed copy of the array.

## Note

If a deep copy of the reversed array is required, pass the return value of _CopyReversed\<T\>_ to the deep copying overload of [_Copy\<T\>_](./TArrayUtils-Copy.md) along with a suitable _TCloner\<T\>_ implementation.

## Example

```pascal
procedure CopyReversed_Eg;
var
  A, R, Expected: TArray<Integer>;
begin
  A := TArray<Integer>.Create(0, 99, 42, 56);
  R := TArrayUtils.CopyReversed<Integer>(A);
  Expected := TArray<Integer>.Create(56, 42, 99, 0);
  Assert(TArrayUtils.Equal<Integer>(Expected, R));
end;
```

## See Also

* [_Reverse\<T\>_](./TArrayUtils-Reverse.md)
* [_Copy\<T\>_](./TArrayUtils-Copy.md)
* [_CopySorted\<T\>_](./TArrayUtils-CopySorted.md)
