# _DeleteAndRelease\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
type
  TCallback<T> = reference to procedure (const AElem: T);

class procedure DeleteAndRelease<T>(var A: TArray<T>; const AIndex: Integer;
  const AReleaser: TCallback<T>);
  overload; static;

class procedure DeleteAndRelease<T>(var A: TArray<T>;
  const AIndices: array of Integer; const AReleaser: TCallback<T>);
  overload; static;
```

## Description

Deletes the element or elements at one or more indices in an array and releases any resources associated with the deleted elements.

***Parameters:***

* _A_ - Array from which the elements are to be deleted. The array is updated in place.

* _AIndex_ - Index of a single element to be deleted. (First overload only.)
    
    If _A_ is empty, if _AIndex_ \< `0` or if _AIndex_ ≥ `Length(A)` then no deletion takes place and _A_ is unchanged.

* _AIndices_ - An integer array of indices of elements to be deleted. (Second overload only.)

    If any index \< `0` or ≥ `Length(A)` then that index is ignored.

    Duplicate indices are ignored. 

    If _A_ is empty then no deletion takes place and _A_ is unchanged.

* _AReleaser_ - Callback procedure called for each deleted element. Must release any resource associated with the element.

    ***Parameter(s):***

    * _AElem_ - Element whose associated resource is to be released.

## Example

Both examples below use a custom _TMockResource_ record that emulates a resource that must be released. The record keeps track of the total number of instantiations. It is defined as follows:

```pascal
type
  TMockResource = record
  public
    constructor Create(const AField: Integer);
    procedure Release;
    var Field: Integer;
    class var InstanceCount: Cardinal;
  end;

{ TMockResource }

constructor TMockResource.Create(const AField: Integer);
begin
  Field := AField;
  Inc(InstanceCount);
end;

procedure TMockResource.Release;
begin
  Dec(InstanceCount);
end;
```

### Example #1

This example illustrates how a single element deleted from an array has its associated resource deleted.

```pascal
procedure DeleteAndRelease_Eg1;
var
  R, R0, R1, R2, R3: TMockResource;
  RA, Expected: TArray<TMockResource>;
begin
  // create array of 4 "resources"
  R0 := TMockResource.Create(0);
  R1 := TMockResource.Create(1);
  R2 := TMockResource.Create(2);
  R3 := TMockResource.Create(3);
  RA := TArray<TMockResource>.Create(R0, R1, R2, R3);
  Assert(Length(RA) = 4, '4 element array expected');
  Assert(TMockResource.InstanceCount = 4, 'Expected 4 "resources" allocated');

  // delete and release element @ index 2
  TArrayUtils.DeleteAndRelease<TMockResource>(
    RA,
    2,
    procedure (const AElem: TMockResource) begin AElem.Release end
  );
  // check array size reduced and one resource released
  Assert(Length(RA) = 3, '3 element array expected following deletion');
  Assert(TMockResource.InstanceCount = 3, 'Expected 3 "resources" allocated');
  Expected := TArray<TMockResource>.Create(R0, R1, R3);
  Assert(TArrayUtils.Equal<TMockResource>(Expected, RA),
    'updated array content not as expected');

  // clear up remaining allocations
  for R in RA do R.Release;
  Assert(TMockResource.InstanceCount = 0, 'Expected all "resources" released');
end;
```

### Example #2

This example illustrates how several elements deleted from an array have associated resources deleted.

```pascal
procedure DeleteAndRelease_Eg2;
var
  R, R0, R1, R2, R3, R4: TMockResource;
  RA, Expected: TArray<TMockResource>;
begin
  // create array of 5 "resources"
  R0 := TMockResource.Create(0);
  R1 := TMockResource.Create(1);
  R2 := TMockResource.Create(2);
  R3 := TMockResource.Create(3);
  R4 := TMockResource.Create(4);
  RA := TArray<TMockResource>.Create(R0, R1, R2, R3, R4);
  Assert(Length(RA) = 5, '5 element array expected');
  Assert(TMockResource.InstanceCount = 5, 'Expected 5 "resources" allocated');

  // delete and release elements @ indices 0, 2, 3
  TArrayUtils.DeleteAndRelease<TMockResource>(
    RA,
    [2, 3, 0],
    procedure (const AElem: TMockResource) begin AElem.Release end
  );
  // check array size reduced and three resources released
  Assert(Length(RA) = 2, '2 element array expected following deletion');
  Assert(TMockResource.InstanceCount = 2, 'Expected 2 "resources" allocated');
  Expected := TArray<TMockResource>.Create(R1, R4);
  Assert(TArrayUtils.Equal<TMockResource>(Expected, RA),
    'updated array content not as expected');

  // clear up remaining allocations
  for R in RA do R.Release;
  Assert(TMockResource.InstanceCount = 0, 'Expected all "resources" released');
end;
```

## See Also

* [_DeleteAndReleaseRange\<T\>_](./TArrayUtils-DeleteAndReleaseRange.md)
* [_Delete\<T\>_](./TArrayUtils-Delete.md)
* [_DeleteAndFree\<T: class\>_](./TArrayUtils-DeleteAndFree.md)
* [_Chop\<T\>_](./TArrayUtils-Chop.md)
* [_DeDup\<T\>_](./TArrayUtils-DeDup.md)
* [_Insert\<T\>_](./TArrayUtils-Insert.md)
