# _DeleteRange\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class procedure DeleteRange<T>(var A: TArray<T>;
  AStartIndex, AEndIndex: Integer);
  overload; static;

class procedure DeleteRange<T>(var A: TArray<T>; AStartIndex: Integer);
  overload; static;
```

## Description

Deletes a range of one or more elements from an array.

The length of the array is reduced by the number of elements deleted.

***Parameters:***

* _A_ - Array from which the elements are to be deleted. The array is updated in place after the deletion. Empty arrays are ignored.

* _AStartIndex_ - Index of the first element in the range to be deleted.

    If _AStartIndex_ \< `0` then it is adjusted to be equal to `0`.

* _AEndIndex_ - Optional parameter containing the index of the last element in the range to be deleted.

    If _AEndIndex_ is not supplied then the end of the range is assumed to be the last element of the array, so that the whole array from _AStartIndex_ to the end is deleted.

    If _AEndIndex_ is ≥ `Length(A)` then it is adjusted to be equal to `Length(A) - 1`.

    If _AEndIndex_ \< _AStartIndex_, after both have been adjusted, then nothing is deleted and _A_ is not changed.

## Note

If you want to delete all the elements of an array with indices ≥ _AStartIndex_ then there is no need to provide _AEndIndex_.

To delete a single element set both _AStartIndex_ and _AEndIndex_ to the same index. Alternatively use [_Delete\<T\>_](./TArrayUtils-Delete.md).

## Example

### Example #1

This first example deletes a range of values from the start, the middle and the end of an array.

```pascal
procedure DeleteRange_Eg1;
var
  A, B, Expected: TArray<Integer>;
begin
  // We have to copy B to get round an obscure Delphi bug that seems to optimise
  // multiple TArray<Integer>.Create calls for the same elements.
  B := TArray<Integer>.Create(1, 2, 3, 4, 5);

  // delete 1st three elements
  A := Copy(B);
  TArrayUtils.DeleteRange<Integer>(A, 0, 2);
  Expected := TArray<Integer>.Create(4, 5);
  Assert(TArrayUtils.Equal<Integer>(Expected, A));

  // delete 3 elements from index 1
  A := Copy(B);
  TArrayUtils.DeleteRange<Integer>(A, 1, 3);
  Expected := TArray<Integer>.Create(1, 5);
  Assert(TArrayUtils.Equal<Integer>(Expected, A));

  // delete last 3 elements
  A := Copy(B);
  TArrayUtils.DeleteRange<Integer>(A, 2);
  // last index not required: if provided provided Pred(Length(A))
  Expected := TArray<Integer>.Create(1, 2);
  Assert(TArrayUtils.Equal<Integer>(Expected, A));
end;
```

### Example #2

In the second example we a try _DeleteRange\<T\>_ with start and end indexes outside the bounds of the array.

```pascal
procedure DeleteRange_Eg2;
var
  A, B, Expected: TArray<Integer>;
begin
  // We have to copy B to get round an obscure Delphi bug that seems to optimise
  // repeated TArray<Integer>.Create calls for the same elements.
  B := TArray<Integer>.Create(1, 2, 3, 4, 5);
  // delete from start to index 2, providing negative start index
  A := Copy(B);
  TArrayUtils.DeleteRange<Integer>(A, -3, 2);
  Expected := TArray<Integer>.Create(4, 5);
  Assert(TArrayUtils.Equal<Integer>(Expected, A));

  // delete from index 2 to end of array, providing a very large end index
  A := Copy(B);
  TArrayUtils.DeleteRange<Integer>(A, 2, 42);
  Expected := TArray<Integer>.Create(1, 2);
  Assert(TArrayUtils.Equal<Integer>(Expected, A));

  // delete nothing because start index > end index
  A := Copy(B);
  TArrayUtils.DeleteRange<Integer>(A, 3, 2);
  Expected := TArray<Integer>.Create(1, 2, 3, 4, 5);
  Assert(TArrayUtils.Equal<Integer>(Expected, A));
end;
```

## See Also

* [_Delete\<T\>_](./TArrayUtils-Delete.md)
* [_DeleteAndReleaseRange\<T: class\>_](./TArrayUtils-DeleteAndReleaseRange.md)
* [_DeleteAndFreeRange\<T: class\>_](./TArrayUtils-DeleteAndFreeRange.md)
* [_Chop\<T\>_](./TArrayUtils-Chop.md)
* [_DeDup\<T\>_](./TArrayUtils-DeDup.md)
* [_Insert\<T\>_](./TArrayUtils-Insert.md)
