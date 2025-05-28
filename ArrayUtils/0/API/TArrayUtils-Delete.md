# _Delete\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class procedure Delete<T>(var A: TArray<T>; const AIndex: Integer);
  overload; static;

class procedure Delete<T>(var A: TArray<T>;
  const AIndices: array of Integer);
  overload; static;
```

## Description

Deletes the element or elements at one or more indices in an array.

***Parameters:***

* _A_ - Array from which the elements are to be deleted. The array is updated in place.

* _AIndex_ - Index of a single element to be deleted. (First overload only.)
    
    If _A_ is empty, if _AIndex_ \< `0` or if _AIndex_ ≥ `Length(A)` then no deletion takes place and _A_ is unchanged.

* _AIndices_ - An integer array containing the indices of the elements to be deleted. (Second overload only.)

    If any index \< `0` or ≥ `Length(A)` then that index is ignored.

    Duplicate indices are ignored. 

    If _A_ is empty then no deletion takes place and _A_ is unchanged.

## Examples

### Example #1

This example demonstrates the overload of _Delete\<T\>_ that deletes a single element an array.

```pascal
procedure Delete_Eg1;
var
  A, Expected: TArray<Integer>;
begin
  A := TArray<Integer>.Create(1, 2, 3, 4, 5);

  // delete middle item
  TArrayUtils.Delete<Integer>(A, 2);
  Expected := TArray<Integer>.Create(1, 2, 4, 5);
  Assert(TArrayUtils.Equal<Integer>(Expected, A));

  // delete first item
  TArrayUtils.Delete<Integer>(A, 0);
  Expected := TArray<Integer>.Create(2, 4, 5);
  Assert(TArrayUtils.Equal<Integer>(Expected, A));

  // delete last item
  TArrayUtils.Delete<Integer>(A, 2);
  Expected := TArray<Integer>.Create(2, 4);
  Assert(TArrayUtils.Equal<Integer>(Expected, A));

  // delete invalid index < 0
  TArrayUtils.Delete<Integer>(A, -1);
  Expected := TArray<Integer>.Create(2, 4);
  Assert(TArrayUtils.Equal<Integer>(Expected, A));

  // delete invalid index = Length(A)
  TArrayUtils.Delete<Integer>(A, Length(A));
  Expected := TArray<Integer>.Create(2, 4);
  Assert(TArrayUtils.Equal<Integer>(Expected, A));
end;
```

### Example #2

This second example shows the use of the _Delete\<T\>_ overload that deletes a elements at multiple indices.

```pascal
procedure Delete_Eg2;
var
  A, Expected: TArray<Integer>;
begin
  // Delete indices 0, 2, 4 and 9. We also throw in some duplicate and out of
  // range indices to show that they are ignored.
  A := TArray<Integer>.Create(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  // the following function is identical to calling
  // TArrayUtils.Delete<Integer>(A, [0, 2, 4, 9]);
  TArrayUtils.Delete<Integer>(A, [0, 26, 2, -1, 9, 4, 9, 9, 26]);
  Expected := TArray<Integer>.Create(1, 3, 5, 6, 7, 8);
  Assert(TArrayUtils.Equal<Integer>(Expected, A));
end;
```

## See Also

* [_DeleteAndFree\<T: class\>_](./TArrayUtils-DeleteAndFree.md)
* [_DeleteRange\<T\>_](./TArrayUtils-DeleteRange.md)
* [_Chop\<T\>_](./TArrayUtils-Chop.md)
* [_DeDup\<T\>_](./TArrayUtils-DeDup.md)
* [_Insert\<T\>_](./TArrayUtils-Insert.md)
