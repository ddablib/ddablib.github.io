# _Reverse\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class procedure Reverse<T>(var A: array of T);
  static;
```

## Description

Reverses the order of elements of a given array.

***Parameters:***

* _A_ - The array being reversed. The array is updated in place after the elements have been reversed.

## Example

```pascal
procedure Reverse_Eg;
var
  A, Expected: TArray<Integer>;
begin
  A := TArray<Integer>.Create(0, 99, 42, 56);
  TArrayUtils.Reverse<Integer>(A);
  Expected := TArray<Integer>.Create(56, 42, 99, 0);
  Assert(TArrayUtils.Equal<Integer>(Expected, A));
end;
```

## See Also

* [_CopyReversed\<T\>_](./TArrayUtils-CopyReversed.md)
* [_Copy\<T\>_](./TArrayUtils-Copy.md)
* [_Sort\<T\>_](./TArrayUtils-Sort.md)
