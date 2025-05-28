# _Insert\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class procedure Insert<T>(var A: TArray<T>; AValue: T; AIndex: Integer);
  overload; static;

class procedure Insert<T>(var A: TArray<T>; const AValues: array of T;
  AIndex: Integer);
  overload; static;
```

## Description

Inserts an element, or an array of elements, at a given index in an array.

The length of the array is increased by the number if elements inserted.

***Parameters:***

* _A_ - Array into which the element or elements are to be inserted. The array is updated in place.

* _AValue_ - Single element to be inserted into the array. (First overload only.)

* _AValues_ - Array of elements to be inserted into the array. (Second overload only.)

    If _AValues_ is empty then _A_ is not changed.

* _AIndex_ - specifies where the element or elements are to be inserted.

    If _AIndex_ ≤ `0` then the insertion is before the 1st element of _A_.
    
    If `0` \< _AIndex_ \< `Length(A)` then the insertion is immediatley before the element at _AIndex_.

    If _AIndex_ ≥ `Length(A)` then the the insertion is at the end of the array. 

## Example

### Eample #1

This first example inserts single elements before the middle, first and last elements of an array of integers and finally appends an element to the array.

```pascal
procedure Insert_Eg1;
var
  A, Expected: TArray<Integer>;
begin
  A := TArray<Integer>.Create(1, 2, 3, 4, 5);

  TArrayUtils.Insert<Integer>(A, 6, 2);  // insert before middle item
  Expected := TArray<Integer>.Create(1, 2, 6, 3, 4, 5);
  Assert(TArrayUtils.Equal<Integer>(Expected, A));

  TArrayUtils.Insert<Integer>(A, 7, 0);  // insert before first item
  Expected := TArray<Integer>.Create(7, 1, 2, 6, 3, 4, 5);
  Assert(TArrayUtils.Equal<Integer>(Expected, A));

  TArrayUtils.Insert<Integer>(A, 8, 6);  // insert before last item
  Expected := TArray<Integer>.Create(7, 1, 2, 6, 3, 4, 8, 5);
  Assert(TArrayUtils.Equal<Integer>(Expected, A));

  TArrayUtils.Insert<Integer>(A, 9, 8);  // insert after last item
  Expected := TArray<Integer>.Create(7, 1, 2, 6, 3, 4, 8, 5, 9);
  Assert(TArrayUtils.Equal<Integer>(Expected, A));
end;
```

### Example #2

The second example inserts an array of integers into other such arrays, at the start, in the middle and at the end of the target array.

```pascal
procedure Insert_Eg2;
var
  ATarget, AInsert, AExpected: TArray<Integer>;
begin
  AInsert := TArray<Integer>.Create(42, 56);

  // Insert non-empty array at end of ATarget non-empty array
  ATarget := TArray<Integer>.Create(1, 2, 3, 4, 5);
  TArrayUtils.Insert<Integer>(ATarget, AInsert, Length(ATarget));
  AExpected := TArray<Integer>.Create(1, 2, 3, 4, 5, 42, 56);
  Assert(TArrayUtils.Equal<Integer>(AExpected, ATarget));

  // Insert non-empty array in middle of non-empty array
  ATarget := TArray<Integer>.Create(2, 4, 6, 8, 10);
  TArrayUtils.Insert<Integer>(ATarget, AInsert, 3);
  AExpected := TArray<Integer>.Create(2, 4, 6, 42, 56, 8, 10);
  Assert(TArrayUtils.Equal<Integer>(AExpected, ATarget));

  // Insert non-empty array before start of ATarget non-empty array
  ATarget := TArray<Integer>.Create(1, 2, 3);
  TArrayUtils.Insert<Integer>(ATarget, AInsert, 0);
  AExpected := TArray<Integer>.Create(42, 56, 1, 2, 3);
  Assert(TArrayUtils.Equal<Integer>(AExpected, ATarget));
end;
```

## See Also

* [_Delete\<T\>_](./TArrayUtils-Delete.md)
* [_DeleteRange\<T\>_](./TArrayUtils-DeleteRange.md)
* [_DeleteAndRelease\<T\>_](./TArrayUtils-DeleteAndRelease.md)
* [_DeleteAndReleaseRange\<T\>_](./TArrayUtils-DeleteAndReleaseRange.md)
* [_DeleteAndFree\<T: class\>_](./TArrayUtils-DeleteAndFree.md)
* [_DeleteAndFreeRange\<T: class\>_](./TArrayUtils-DeleteAndFreeRange.md)
