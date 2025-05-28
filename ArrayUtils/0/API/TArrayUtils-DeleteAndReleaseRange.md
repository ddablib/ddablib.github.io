# _DeleteAndReleaseRange\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
type
  TCallback<T> = reference to procedure (const AElem: T);

class procedure DeleteAndReleaseRange<T>(var A: TArray<T>;
  AStartIndex, AEndIndex: Integer; const AReleaser: TCallback<T>);
  overload; static;

class procedure DeleteAndReleaseRange<T>(var A: TArray<T>;
  AStartIndex: Integer; const AReleaser: TCallback<T>);
  overload; static;
```

## Description

Deletes a range of one or more elements from an array and releases any resources associated with the deleted elements.

The length of the array is reduced by the number of elements deleted.

***Parameters:***

* _A_ - Array from which the elements are to be deleted and associated resources released. The array is updated in place. Empty arrays are ignored.

* _AStartIndex_ - Index of the first element in the range to be deleted and released.

    If _AStartIndex_ \< `0` then it is adjusted to be equal to `0`.

* _AEndIndex_ - Optional parameter containing the index of the last element in the range to be deleted.

    If _AEndIndex_ is not supplied then the end of the range is assumed to be the last element of the array, so that all elements from _AStartIndex_ to the end of the array are deleted.

    If _AEndIndex_ is ≥ `Length(A)` then it is adjusted to be equal to `Length(A) - 1`.

    If _AEndIndex_ \< _AStartIndex_, after both have been adjusted, then no elements are deleted, no resources are released and _A_ is not changed.

* _AReleaser_ - Callback procedure called for each deleted element. Must release any resource associated with the element.


    ***Parameter(s):***

    * _AElem_ - Element whose associated resource is to be released.

## Notes

If you want to delete and release associated resources of all the elements of an array with indices ≥ _AStartIndex_ then there is no need to provide _AEndIndex_.

To delete and release the associated resource of a single element set both _AStartIndex_ and _AEndIndex_ to the same index. Alternatively use [_DeleteAndRelease\<T\>_](./TArrayUtils-DeleteAndRelease.md).

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

This first example uses the overload of _DeleteAndReleaseRange\<T\>_ that takes both the start and end indices of a range as parameters.

```pascal
procedure DeleteAndReleaseRange_Eg1;
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

  // delete and release elements in range 1..3
  TArrayUtils.DeleteAndReleaseRange<TMockResource>(
    RA,
    1,
    3,
    procedure (const AElem: TMockResource) begin AElem.Release end
  );
  // check array size reduced and one resource released
  Assert(Length(RA) = 2, '2 element array expected following deletion');
  Assert(TMockResource.InstanceCount = 2, 'Expected 2 "resources" allocated');
  Expected := TArray<TMockResource>.Create(R0, R4);
  Assert(TArrayUtils.Equal<TMockResource>(Expected, RA),
    'updated array content not as expected');

  // clear up remaining allocations
  for R in RA do R.Release;
  Assert(TMockResource.InstanceCount = 0, 'Expected all "resources" released');
end;
```

### Example #2

The second example uses the overload of _DeleteAndReleaseRange\<T\>_ that takes only the start index of a range as a parameter.

```pascal
procedure DeleteAndReleaseRange_Eg2;
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

  // delete and release elements @ indices 2..end of array
  TArrayUtils.DeleteAndReleaseRange<TMockResource>(
    RA,
    2,
    procedure (const AElem: TMockResource) begin AElem.Release end
  );
  // check array size reduced and three resources released
  Assert(Length(RA) = 2, '2 element array expected following deletion');
  Assert(TMockResource.InstanceCount = 2, 'Expected 2 "resources" allocated');
  Expected := TArray<TMockResource>.Create(R0, R1);
  Assert(TArrayUtils.Equal<TMockResource>(Expected, RA),
    'updated array content not as expected');

  // clear up remaining allocations
  for R in RA do R.Release;
  Assert(TMockResource.InstanceCount = 0, 'Expected all "resources" released');
end;
```

## See Also

* [_DeleteAndRelease\<T\>_](./TArrayUtils-DeleteAndRelease.md)
* [_DeleteRange\<T\>_](./TArrayUtils-DeleteRange.md)
* [_DeleteAndFreeRange\<T: class\>_](./TArrayUtils-DeleteAndFreeRange.md)
* [_Chop\<T\>_](./TArrayUtils-Chop.md)
* [_DeDup\<T\>_](./TArrayUtils-DeDup.md)
* [_Insert\<T\>_](./TArrayUtils-Insert.md)
