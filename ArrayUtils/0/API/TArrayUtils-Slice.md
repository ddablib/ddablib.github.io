# _Slice\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class function Slice<T>(const A: array of T;
  AStartIndex, AEndIndex: Integer): TArray<T>;
  overload; static;

class function Slice<T>(const A: array of T;
  AStartIndex: Integer): TArray<T>;
  overload; static;
```

## Description

Returns an array comprising a contiguous range of elements from an array.

The elements of the returned array are shallow copies of the corresponding elements of the original array, so any references within the resulting array are the same as those in the initial array.

The original array is not modified.

***Parameters:***

* _A_ - The array from which the slice is to be taken. If _A_ is empty then all slices are also empty.

* _AStartIndex_ - The index of the first element of _A_ that is to be included in the slice.
    
    If _AStartIndex_ ≤ `0` then the slice begins at the first element of _A_.
    
    If _AStartIndex_ ≥ `Length(A)` then an empty array is returned.

* _AEndIndex_ - Optional parameter that specified the index of the last element of _A_ that is to be included in the slice.

    If _AEndIndex_ is omitted or _AEndIndex_ ≥ `Length(A)` then the slice continues to the end of _A_.

    If _AEndIndex_ \< _AStartIndex_ then an empty array is returned. 

***Returns:***

* An array containing the required slice.

## Note

If the returned array needs to have deep copies of the the original array elements then pass the return value of _Slice\<T\>_ to the deep copying overload of [_Copy\<T\>_](./TArrayUtils-Copy.md), along with a suitable _TCloner\<T\>_ implementation.

## Examples

### Example #1

This example shows the most flexible use of _Slice\<T\>_ where both the start and end indexes are provided:

```pascal
procedure Slice_Eg1;
var
  A, ASlice, AExpectedSlice: TArray<string>;
begin
  A := TArray<string>.Create('a', 'stitch', 'in', 'time', 'saves', 'nine');
  // slice from the start of A
  ASlice := TArrayUtils.Slice<string>(A, 0, 2);
  AExpectedSlice := TArray<string>.Create('a', 'stitch', 'in');
  Assert(TArrayUtils.Equal<string>(AExpectedSlice, ASlice, SameStr));
  // slice in the middle of A
  ASlice := TArrayUtils.Slice<string>(A, 2, 4);
  AExpectedSlice := TArray<string>.Create('in', 'time', 'saves');
  Assert(TArrayUtils.Equal<string>(AExpectedSlice, ASlice, SameStr));
  // slice at the end of A
  ASlice := TArrayUtils.Slice<string>(A, 4, 5);
  AExpectedSlice := TArray<string>.Create('saves', 'nine');
  Assert(TArrayUtils.Equal<string>(AExpectedSlice, ASlice, SameStr));
end;
```

### Example #2

This second example show the use of the basic version of _Slice\<T\>_ where only the start index is provided:

```pascal
procedure Slice_Eg2;
var
  A, ASlice, AExpectedSlice: TArray<string>;
begin
  A := TArray<string>.Create('a', 'stitch', 'in', 'time', 'saves', 'nine');
  // slice from mid to end of A
  ASlice := TArrayUtils.Slice<string>(A, 3);
  AExpectedSlice := TArray<string>.Create('time', 'saves', 'nine');
  Assert(TArrayUtils.Equal<string>(AExpectedSlice, ASlice, SameStr));
  // slice of all of A
  ASlice := TArrayUtils.Slice<string>(A, 0);
  AExpectedSlice := A;
  Assert(TArrayUtils.Equal<string>(AExpectedSlice, ASlice, SameStr));
end;
```

## See Also

* [_Pick\<T\>_](./TArrayUtils-Pick.md)
* [_Chop\<T\>_](./TArrayUtils-Chop.md)
* [_Concat\<T\>_](./TArrayUtils-Concat.md)
* [_Copy\<T\>_](./TArrayUtils-Copy.md)
* [_DeDup\<T\>_](./TArrayUtils-DeDup.md)
