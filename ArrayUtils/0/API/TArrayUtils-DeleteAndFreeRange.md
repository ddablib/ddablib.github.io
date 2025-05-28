# _DeleteAndFreeRange\<T: class\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class procedure DeleteAndFreeRange<T: class>(var A: TArray<T>;
  AStartIndex, AEndIndex: Integer);
  overload; static;

class procedure DeleteAndFreeRange<T: class>(var A: TArray<T>;
  AStartIndex: Integer);
  overload; static;
```

## Description

Deletes and frees a range of one or more elements of from an array of _TObject_ descendant objects.

The length of the array is reduced by the number of elements deleted.

***Parameters:***

* _A_ - Array from which the elements are to be deleted and freed. The array is updated in place. Empty arrays are ignored.

    Array elements must be _TObject_ descendants.

* _AStartIndex_ - Index of the first element in the range to be deleted and freed.

    If _AStartIndex_ \< `0` then it is adjusted to be equal to `0`.

* _AEndIndex_ - Optional parameter containing the index of the last element in the range to be deleted and freed.

    If _AEndIndex_ is not supplied then the end of the range is assumed to be the last element of the array, so that all elements from _AStartIndex_ to the end of the array are deleted and freed.

    If _AEndIndex_ is ≥ `Length(A)` then it is adjusted to be equal to `Length(A) - 1`.

    If _AEndIndex_ \< _AStartIndex_, after both have been adjusted, then no elements are deleted and _A_ is not changed.

## Notes

If you want to delete and free all the elements of an array with indices ≥ _AStartIndex_ then there is no need to provide _AEndIndex_.

To delete and free a single element set both _AStartIndex_ and _AEndIndex_ to the same index. Alternatively use [_DeleteAndFree\<T: class\>_](./TArrayUtils-DeleteAndFree.md).

## Example

Both examples below use a custom _TObjectEx_ class that records the number of objects currently instantiated. This is defined as follows:

```pascal
type
  TObjectEx = class
  public
    var ID: Char;
    class var InstanceCount: Integer;
    constructor Create(AID: Char);
    destructor Destroy; override;
  end;

{ TObjectEx }

constructor TObjectEx.Create(AID: Char);
begin
  inherited Create;
  ID := AID;
  Inc(InstanceCount);
end;

destructor TObjectEx.Destroy;
begin
  Dec(InstanceCount);
  inherited;
end;
```

### Example #1

This first example uses the overload of _DeleteAndFreeRange\<T: class\>_ that takes both the start and end indices of a range as parameters.

```pascal
procedure DeleteAndFreeRange_Eg1;
var
  A: TArray<TObjectEx>;
  Obj: TObjectEx;
  Constraint: TArrayUtils.TConstraint<TObjectEx>;
begin
  // Start with no objects
  Assert(TObjectEx.InstanceCount = 0, 'TObjectEx <> 0 instances');

  // Create array of 6 objects
  A := TArray<TObjectEx>.Create(
    TObjectEx.Create('A'), TObjectEx.Create('B'),
    TObjectEx.Create('C'), TObjectEx.Create('D'),
    TObjectEx.Create('E'), TObjectEx.Create('F')
  );
  Assert(Length(A) = 6, 'Array length <> 6');
  Assert(TObjectEx.InstanceCount = 6, 'TObjectEx <> 4 instances');
  Assert(A[2].ID = 'C', 'A[2] <> C');
  Assert(A[3].ID = 'D', 'A[3] <> D');
  Assert(A[4].ID = 'E', 'A[4] <> E');

  // Delete and free all objects in range [2..4]
  TArrayUtils.DeleteAndFreeRange<TObjectEx>(A, 2, 4);
  Assert(Length(A) = 3, 'Array length <> 3');
  Assert(TObjectEx.InstanceCount = 3, 'TObjectEx <> 3 instances');
  Constraint := function (const AElem: TObjectEx): Boolean
    begin
      Result := (AElem.ID = 'C') or (AElem.ID = 'D') or (AElem.ID = 'E');
    end;
  Assert(
    not TArrayUtils.Some<TObjectEx>(A, Constraint),
    'C, D, or E found in array'
  );

  // Tidy up remaining objects
  for Obj in A do
    Obj.Free;
  Assert(TObjectEx.InstanceCount = 0, 'TObjectEx <> 0 instances');
end;
```

### Example #2

The second example uses the overload of _DeleteAndFreeRange\<T: class\>_ that takes only start index of a range as a parameter.

```pascal
procedure DeleteAndFreeRange_Eg2;
var
  A: TArray<TObjectEx>;
  Obj: TObjectEx;
  Constraint: TArrayUtils.TConstraint<TObjectEx>;
begin
  // Start with no objects
  Assert(TObjectEx.InstanceCount = 0, 'TObjectEx <> 0 instances');

  // Create array of 6 objects
  A := TArray<TObjectEx>.Create(
    TObjectEx.Create('A'), TObjectEx.Create('B'),
    TObjectEx.Create('C'), TObjectEx.Create('D'),
    TObjectEx.Create('E'), TObjectEx.Create('F')
  );
  Assert(Length(A) = 6, 'Array length <> 6');
  Assert(TObjectEx.InstanceCount = 6, 'TObjectEx <> 4 instances');
  Assert(A[2].ID = 'C', 'A[2] <> C');
  Assert(A[3].ID = 'D', 'A[3] <> D');
  Assert(A[4].ID = 'E', 'A[4] <> E');
  Assert(A[5].ID = 'F', 'A[4] <> F');

  // Delete and free all objects from index 2 to the end of the array
  TArrayUtils.DeleteAndFreeRange<TObjectEx>(A, 2);
  Assert(Length(A) = 2, 'Array length <> 2');
  Assert(TObjectEx.InstanceCount = 2, 'TObjectEx <> 2 instances');
  Constraint := function (const AElem: TObjectEx): Boolean
    begin
      Result := (AElem.ID = 'C') or (AElem.ID = 'D')
        or (AElem.ID = 'E') or (AElem.ID = 'F');
    end;
  Assert(
    not TArrayUtils.Some<TObjectEx>(A, Constraint),
    'C, D, E or F found in array'
  );

  // Tidy up remaining objects
  for Obj in A do
    Obj.Free;
  Assert(TObjectEx.InstanceCount = 0, 'TObjectEx <> 0 instances');
end;
```

## See Also

* [_DeleteRange\<T\>_](./TArrayUtils-DeleteRange.md)
* [_DeleteAndReleaseRange\<T\>_](./TArrayUtils-DeleteAndReleaseRange.md)
* [_DeleteAndFree\<T: class\>_](./TArrayUtils-DeleteAndFree.md)
* [_Chop\<T\>_](./TArrayUtils-Chop.md)
* [_DeDup\<T\>_](./TArrayUtils-DeDup.md)
* [_Insert\<T\>_](./TArrayUtils-Insert.md)
