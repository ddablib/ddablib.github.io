# _Chop\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class function Chop<T>(var A: TArray<T>;
  AStartIndex, AEndIndex: Integer): TArray<T>;
  overload; static;

class function Chop<T>(var A: TArray<T>; AStartIndex: Integer): TArray<T>;
  overload; static;
```

## Description

Removes a contiguous range of elements from an array and returns an array containing the removed elements.

The elements of the returned array are shallow copies of the corresponding elements of the original array, so any references within the resulting array are the same as those in the initial array.

The original array is updated in place.

***Parameters:***

* _A_ - The array from which the range of elements is to be chopped. If _A_ is empty then an empty array is always returned.

* _AStartIndex_ - The index of the first element of _A_ that is to be included in the removed section.
    
    If _AStartIndex_ ≤ `0` then the removed section begins at the first element of _A_.
    
    If _AStartIndex_ ≥ `Length(A)` then nothing is deleted and an empty array is returned.

* _AEndIndex_ - Optional parameter that specifies the index of the last element of _A_ that is to be included in the removed section.

    If _AEndIndex_ is omitted or _AEndIndex_ ≥ `Length(A)` then the removed section continues to the end of _A_.

    If _AEndIndex_ \< _AStartIndex_ then nothing is deleted and an empty array is returned. 

***Returns:***

* An array containing the elements of that were removed from _A_.

## Note

If the returned array needs to have deep copies of the deleted array elements then pass the return value of _Chop\<T\>_ to the deep copying overload of [_Copy\<T\>_](./TArrayUtils-Copy.md), along with a suitable _TCloner\<T\>_ implementation.

## Examples

### Example #1

This example shows the most flexible use of _Chop\<T\>_ where both the start and end indexes are provided:

```pascal
procedure Chop_Eg1;
var
  A, ATest, ASlice, AExpectedSlice, AExpectedRemainder: TArray<string>;
begin
  A := TArray<string>.Create('a', 'stitch', 'in', 'time', 'saves', 'nine');
  // slice from the start of A
  ATest := Copy(A);
  ASlice := TArrayUtils.Chop<string>(ATest, 0, 2);
  AExpectedRemainder := TArray<string>.Create('time', 'saves', 'nine');
  AExpectedSlice := TArray<string>.Create('a', 'stitch', 'in');
  Assert(TArrayUtils.Equal<string>(AExpectedRemainder, ATest, SameStr));
  Assert(TArrayUtils.Equal<string>(AExpectedSlice, ASlice, SameStr));
  // Chop in the middle of ATest
  ATest := Copy(A);
  ASlice := TArrayUtils.Chop<string>(ATest, 2, 4);
  AExpectedRemainder := TArray<string>.Create('a', 'stitch', 'nine');
  AExpectedSlice := TArray<string>.Create('in', 'time', 'saves');
  Assert(TArrayUtils.Equal<string>(AExpectedRemainder, ATest, SameStr));
  Assert(TArrayUtils.Equal<string>(AExpectedSlice, ASlice, SameStr));
  // Chop at the end of ATest
  ATest := Copy(A);
  ASlice := TArrayUtils.Chop<string>(ATest, 4, 5);
  AExpectedRemainder := TArray<string>.Create('a', 'stitch', 'in', 'time');
  AExpectedSlice := TArray<string>.Create('saves', 'nine');
  Assert(TArrayUtils.Equal<string>(AExpectedRemainder, ATest, SameStr));
  Assert(TArrayUtils.Equal<string>(AExpectedSlice, ASlice, SameStr));
end;
```

### Example #2

This second example show the use of the basic version of _Chop\<T\>_ where only the start index is provided:

```pascal
procedure Chop_Eg2;
var
  A, ATest, ASlice, AExpectedSlice, AExpectedRemainder: TArray<string>;
begin
  A := TArray<string>.Create('a', 'stitch', 'in', 'time', 'saves', 'nine');
  // slice from mid to end of A
  ATest := Copy(A);
  ASlice := TArrayUtils.Chop<string>(ATest, 3);
  AExpectedRemainder := TArray<string>.Create('a', 'stitch', 'in');
  AExpectedSlice := TArray<string>.Create('time', 'saves', 'nine');
  Assert(TArrayUtils.Equal<string>(AExpectedRemainder, ATest, SameStr));
  Assert(TArrayUtils.Equal<string>(AExpectedSlice, ASlice, SameStr));
  // Chop of all of ATest
  ATest := Copy(A);
  ASlice := TArrayUtils.Chop<string>(ATest, 0);
  AExpectedRemainder := TArray<string>.Create();
  AExpectedSlice := Copy(A);
  Assert(TArrayUtils.Equal<string>(AExpectedRemainder, ATest, SameStr));
  Assert(TArrayUtils.Equal<string>(AExpectedSlice, ASlice, SameStr));
end;
```

## See Also

* [_Slice\<T\>_](./TArrayUtils-Slice.md)
* [_Pick\<T\>_](./TArrayUtils-Pick.md)
* [_Delete\<T\>_](./TArrayUtils-Delete.md)
* [_DeleteRange\<T\>_](./TArrayUtils-DeleteRange.md)
* [_DeDup\<T\>_](./TArrayUtils-DeDup.md)
* [_Insert\<T\>_](./TArrayUtils-Insert.md)
