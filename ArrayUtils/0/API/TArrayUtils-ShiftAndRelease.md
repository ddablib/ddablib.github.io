# _ShiftAndRelease\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
type
  TCallback<T> = reference to procedure (const AElem: T);

class procedure ShiftAndRelease<T>(var A: TArray<T>;
  const AReleaser: TCallback<T>);
  static;
```

## Description

Deletes the first element of a non-empty array and releases any resources associated with the deleted element.

The length of the array is reduced by one.

***Parameters:***

* _A_ - Array from which the element is to be removed and its associated resource released. The array is updated in place.

* _AReleaser_ - Procedure called for the deleted element that must release any resource associated with the element.

    ***Parameter(s):***

    * _AElem_ - Element whose associated resource is to be released.

***Preconditions:***

* _A_ must not be empty. An _EAssertionFailed_ exception is raised otherwise.

## Note

1. If it is not necessary release a resource associated with an element that is shifted off an array then [_Shift\<T\>_](./TArrayUtils-Shift.md) should be used instead of _ShiftAndRelease\<T\>_.

2. There is no corresponding version of [_UnShift\<T\>_](./TArrayUtils-UnShift.md) for use with _ShiftAndRelease\<T\>_. This is not necessary since un-shifting an element with an associated resource requires no special handling. Just use [_UnShift\<T\>_](./TArrayUtils-UnShift.md).

## Example

The example below use a custom _TMockResource_ record that emulates a resource that must be released. The record keeps track of the number of records  currently instantiated.

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

procedure ShiftAndRelease_Eg;
var
  R, R0, R1, R2: TMockResource;
  RA, Expected: TArray<TMockResource>;
begin
  // create array of 3 "resources"
  R0 := TMockResource.Create(0);
  R1 := TMockResource.Create(1);
  R2 := TMockResource.Create(2);
  RA := TArray<TMockResource>.Create(R0, R1, R2);
  Assert(Length(RA) = 3, '3 element array expected');
  Assert(TMockResource.InstanceCount = 3, 'Expected 3 "resources" allocated');
  Assert(TArrayUtils.First<TMockResource>(RA).Field = 0, '0 1st elem expected');

  // pop and release element at end of array
  TArrayUtils.ShiftAndRelease<TMockResource>(
    RA,
    procedure (const AElem: TMockResource) begin AElem.Release end
  );

  // check array after popping
  Assert(TArrayUtils.First<TMockResource>(RA).Field = 1, '1 1st elem expected');
  Assert(Length(RA) = 2, '2 element array expected following deletion');
  Assert(TMockResource.InstanceCount = 2, 'Expected 2 "resources" allocated');
  Expected := TArray<TMockResource>.Create(R1, R2);
  Assert(TArrayUtils.Equal<TMockResource>(Expected, RA),
    'updated array content not as expected');

  // clear up remaining allocations
  for R in RA do R.Release;
  Assert(TMockResource.InstanceCount = 0, 'Expected all "resources" released');
end;
```

## See Also

* [_Shift\<T\>_](./TArrayUtils-Shift.md)
* [_ShiftAndFree\<T: class\>_](./TArrayUtils-ShiftAndFree.md)
* [_UnShift\<T\>_](./TArrayUtils-UnShift.md)
* [_PopAndRelease\<T\>_](./TArrayUtils-PopAndRelease.md)
* [_Last\<T\>_](./TArrayUtils-Last.md)
