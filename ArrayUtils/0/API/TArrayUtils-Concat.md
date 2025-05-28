# _Concat\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class function Concat<T>(const A, B: array of T): TArray<T>;
  static;
```

## Description

Returns a concatenation of two arrays with elements of the same type.

The returned array contains shallow copies of the two arrays.

***Parameters:***

* _A_ - The first array to be copied.

* _B_ - The second array to be copied.

***Returns:***

* The required concatenation comprising a copy of _A_ followed by a copy of _B_.

## Note

If a deep copy of the concatenated array is required, pass the return value of _Concat\<T\>_ to the deep copying overload of [_Copy\<T\>_](./TArrayUtils-Copy.md) along with a suitable _TCloner\<T\>_ implementation.

## Example

```pascal
procedure Concat_Eg;
var
  A, B, Got, Expected: TArray<Integer>;
begin
  A := TArray<Integer>.Create(1, 2, 3, 4);
  B := TArray<Integer>.Create(42, 56);
  Got := TArrayUtils.Concat<Integer>(A, B);
  Expected := TArray<Integer>.Create(1, 2, 3, 4, 42, 56);
  Assert(TArrayUtils.Equal<Integer>(Expected, Got));
end;
```

## See Also

* [_Copy\<T\>_](./TArrayUtils-Copy.md)
* [_Pick\<T\>_](./TArrayUtils-Pick.md)
* [_Slice\<T\>_](./TArrayUtils-Slice.md)
* [_Reverse\<T\>_](./TArrayUtils-Reverse.md)
