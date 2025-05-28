# _DeleteAndFree\<T: class\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class procedure DeleteAndFree<T: class>(var A: TArray<T>;
  const AIndex: Integer);
  overload; static;

class procedure DeleteAndFree<T: class>(var A: TArray<T>;
  const AIndices: array of Integer);
  overload; static;
```

## Description

Deletes and frees the element or elements at one or more indices in an array of _TObject_ descendant objects.

***Parameters:***

* _A_ - Array from which the elements are to be deleted. The array is updated in place.

    Array elements must be _TObject_ descendants.

* _AIndex_ - Index of a single element to be deleted. (First overload only.)
    
    If _A_ is empty, if _AIndex_ \< `0` or if _AIndex_ ≥ `Length(A)` then no deletion takes place and _A_ is unchanged.

* _AIndices_ - An integer array of indices of elements to be deleted and freed. (Second overload only.)

    If any index \< `0` or ≥ `Length(A)` then that index is ignored.

    Duplicate indices are ignored. 

    If _A_ is empty then no deletion takes place and _A_ is unchanged.

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

This example illustrates how a single object deleted from an array is freed in addition to being removed from the array.

```pascal
procedure DeleteAndFree_Eg1;
var
  A: TArray<TObjectEx>;
  Obj: TObjectEx;
begin
  // Start with no objects
  Assert(TObjectEx.InstanceCount = 0, 'TObjectEx <> 0 instances');
  // Create array of 3 objects
  A := TArray<TObjectEx>.Create(
    TObjectEx.Create('A'), TObjectEx.Create('B'), TObjectEx.Create('C')
  );
  Assert(Length(A) = 3, 'Array length <> 3');
  Assert(TObjectEx.InstanceCount = 3, 'TObjectEx <> 3 instances');
  Assert(A[1].ID = 'B', 'A[1] <> B');

  // Delete object @ index 1: this will remove it from the array and free it
  TArrayUtils.DeleteAndFree<TObjectEx>(A, 1);
  Assert(Length(A) = 2, 'Array length <> 2');
  Assert(TObjectEx.InstanceCount = 2, 'TObjectEx <> 2 instances');
  Assert(A[1].ID <> 'B', 'Last object ID = B');
  // Tidy up remaining 2 objects
  for Obj in A do
    Obj.Free;
  Assert(TObjectEx.InstanceCount = 0, 'TObjectEx <> 0 instances');
end;
```

### Example #2

This example shows how multiple objects deleted from an array are freed in addition to being removed from the array.

```pascal
procedure DeleteAndFree_Eg2;
var
  A: TArray<TObjectEx>;
  Obj: TObjectEx;
  Constraint: TArrayUtils.TConstraint<TObjectEx>;
begin
  // Start with no objects
  Assert(TObjectEx.InstanceCount = 0, 'TObjectEx <> 0 instances');

  // Create array of 4 objects
  A := TArray<TObjectEx>.Create(
    TObjectEx.Create('A'), TObjectEx.Create('B'),
    TObjectEx.Create('C'), TObjectEx.Create('D')
  );
  Assert(Length(A) = 4, 'Array length <> 4');
  Assert(TObjectEx.InstanceCount = 4, 'TObjectEx <> 4 instances');
  Assert(A[1].ID = 'B', 'A[1] <> B');
  Assert(A[2].ID = 'C', 'A[2] <> C');

  // Delete objects @ index 1 & 2 with IDs 'B' and 'C':
  // this will remove the objects from the array and free them
  TArrayUtils.DeleteAndFree<TObjectEx>(A, [1, 2]);
  Assert(Length(A) = 2, 'Array length <> 2');
  Assert(TObjectEx.InstanceCount = 2, 'TObjectEx <> 2 instances');
  Constraint := function (const AElem: TObjectEx): Boolean
    begin
      Result := (AElem.ID = 'B') or (AElem.ID = 'C');
    end;
  Assert(
    not TArrayUtils.Some<TObjectEx>(A, Constraint),
    'B or C found in array'
  );

  // Tidy up remaining 2 objects
  for Obj in A do
    Obj.Free;
  Assert(TObjectEx.InstanceCount = 0, 'TObjectEx <> 0 instances');
end;
```

## See Also

* [_Delete\<T\>_](./TArrayUtils-Delete.md)
* [_DeleteAndRelease\<T\>_](./TArrayUtils-DeleteAndRelease.md)
* [_DeleteAndFreeRange\<T: class\>_](./TArrayUtils-DeleteAndFreeRange.md)
* [_Chop\<T\>_](./TArrayUtils-Chop.md)
* [_DeDup\<T\>_](./TArrayUtils-DeDup.md)
* [_Insert\<T\>_](./TArrayUtils-Insert.md)
