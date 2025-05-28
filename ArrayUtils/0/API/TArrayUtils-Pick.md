# _Pick\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class function Pick<T>(const A: array of T;
  const AIndices: array of Integer): TArray<T>;
  static;
```

## Description

Returns an array containing elements copied from given indices in an array.

The elements of the returned array are shallow copies of the corresponding elements of the original array, so any references within the resulting array are the same as those in the initial array.

The original array is not modified.

***Parameters:***

* _A_ - The array from which the elements are to be picked.

    If _A_ is empty then the returned array is always empty.

* _AIndices_ - The indices of the elements of _A_ to be included in the returned array.

    If any index is \< `0` or is ≥ `Length(A)` then it is ignored. 
    
***Returns:***

* An array containing the required elements of _A_, in the order their indices occur in _AIndices_. If any index is repeated in _AIndices_ then the associated element is repeated in the returned array.

## Notes

1. If the returned array needs to have deep copies of the the original array elements then pass the return value of _Pick\<T\>_ to the deep copying overload of [_Copy\<T\>_](./TArrayUtils-Copy.md), along with a suitable _TCloner\<T\>_ implementation.

2. To ensure that the returned elements are in the same order they occur in _A_ then _AIndices_ must be sorted in ascending order. This can be achieved by passing the array of required indices to either the [_CopySorted\<Integer\>_](./TArrayUtils-CopySorted.md) or [_Sort\<Integer\>_](./TArrayUtils-Sort.md) methods.

3. If only one copy of each element at a given index is to be picked then ensure that _AIndices_ contains no duplicates. The [_DeDup\<Integer\>_](./TArrayUtils-DeDup.md) method can be used to achieve this.

## Example

```pascal
procedure Pick_Eg;
var
  A, AGot, AExpected: TArray<string>;
  Indices: TArray<Integer>;
begin
  A := TArray<string>.Create('a', 'stitch', 'in', 'time', 'saves', 'nine');

  // extract a single element of A
  AGot := TArrayUtils.Pick<string>(A, [2]);
  AExpected := TArray<string>.Create('in');
  Assert(TArrayUtils.Equal<string>(AExpected, AGot, SameStr));

  // Pick the elements of A with odd indices, in the original order
  AGot := TArrayUtils.Pick<string>(A, [1, 3, 5]);
  AExpected := TArray<string>.Create('stitch', 'time', 'nine');
  Assert(TArrayUtils.Equal<string>(AExpected, AGot, SameStr));

  // Pick one or more copies of specified elements of A, in a different order
  // to their order in A
  AGot := TArrayUtils.Pick<string>(A, [5, 3, 1, 5]);
  AExpected := TArray<string>.Create('nine', 'time', 'stitch', 'nine');
  Assert(TArrayUtils.Equal<string>(AExpected, AGot, SameStr));

  // Pick two unique elements of A, ignoring out of range elements
  AGot := TArrayUtils.Pick<string>(A, [0, -1, Length(A), Length(A)-1]);
  AExpected := TArray<string>.Create('a', 'nine');
  Assert(TArrayUtils.Equal<string>(AExpected, AGot, SameStr));

  // Return elements in the same order they appear in A, with no duplicates
  Indices := TArrayUtils.CopySorted<Integer>(
    TArrayUtils.DeDup<Integer>([3, 1, 2, 2, 3, 2])
  );
  AGot := TArrayUtils.Pick<string>(A, Indices);
  AExpected := TArray<string>.Create('stitch', 'in', 'time');
  Assert(TArrayUtils.Equal<string>(AExpected, AGot, SameStr));
end;
```

## See Also

* [_Slice\<T\>_](./TArrayUtils-Slice.md)
* [_Chop\<T\>_](./TArrayUtils-Chop.md)
* [_Concat\<T\>_](./TArrayUtils-Concat.md)
* [_Copy\<T\>_](./TArrayUtils-Copy.md)
* [_DeDup\<T\>_](./TArrayUtils-DeDup.md)
