# _ShiftAndFree\<T: class\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class procedure ShiftAndFree<T: class>(var A: TArray<T>);
  static;
```

## Description

Removes and frees the first element from a non-empty array of _TObject_ descendants. 

The length of the array is reduced by one.

***Parameters:***

* _A_ - Array from which the element is to be removed and freed. The array is updated in place when the element is deleted.

    Array elements must be _TObject_ descendants.

***Preconditions:***

* _A_ must not be empty. An _EAssertionFailed_ exception is raised otherwise.

## Note

1. If it is not necessary to free an object that is shifted off an array then [_Shift\<T\>_](./TArrayUtils-Shift.md) should be used instead of _ShiftAndFree\<T: class\>_.

2. There is no corresponding object version of [_UnShift\<T\>_](./TArrayUtils-UnShift.md) for use with _ShiftAndFree\<T: class\>_. This is not necessary since un-shifting an object requires no special handling. Just use [_UnShift\<T\>_](./TArrayUtils-UnShift.md) where _T_ is set to the required class type.

## Example

This example illustrates how _ShiftAndFree\<class T\>_ varies from [_Shift\<T\>_](./TArrayUtils-Shift.md).

The example uses custom class _TObjectEx_ that records the number of objects currently instantiated.

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

procedure ShiftAndFree_Eg;
var
  A: TArray<TObjectEx>;
  Obj, ShiftedObj: TObjectEx;
begin
  // Start with no objects
  Assert(TObjectEx.InstanceCount = 0, 'TObjectEx <> 0 instances');

  // Create array of 3 objects using UnShift<T>
  SetLength(A, 0);
  TArrayUtils.UnShift<TObjectEx>(A, TObjectEx.Create('C'));
  TArrayUtils.UnShift<TObjectEx>(A, TObjectEx.Create('B'));
  TArrayUtils.UnShift<TObjectEx>(A, TObjectEx.Create('A'));
  Assert(Length(A) = 3, 'Array length <> 3');
  Assert(TObjectEx.InstanceCount = 3, 'TObjectEx <> 3 instances');
  Assert(TArrayUtils.First<TObjectEx>(A).ID = 'A', 'First object ID <> A');

  // Pop first object with ShiftAndFree<T:class>:
  // this will remove it from the array and free it
  TArrayUtils.ShiftAndFree<TObjectEx>(A);
  // check object was removed from array
  Assert(Length(A) = 2, 'Array length <> 2');
  // check removed object was freed
  Assert(TObjectEx.InstanceCount = 2, 'TObjectEx <> 2 instances');
  Assert(TArrayUtils.First<TObjectEx>(A).ID = 'B', 'First object ID <> B');

  // Pop new first object with Shift<T>:
  // this will remove it from the array but not free it
  ShiftedObj := TArrayUtils.Shift<TObjectEx>(A);
  // check object removed from array
  Assert(Length(A) = 1, 'Array length <> 1');
  // check removed object was not freed
  Assert(TObjectEx.InstanceCount = 2, 'TObjectEx <> 2 instances');
  Assert(TArrayUtils.First<TObjectEx>(A).ID = 'C', 'First object ID <> C');

  // Tidy up remaining un-freed objects
  ShiftedObj.Free;
  for Obj in A do
    Obj.Free;
  Assert(TObjectEx.InstanceCount = 0, 'TObjectEx <> 0 instances');
end;
```

## See Also

* [_Shift\<T\>_](./TArrayUtils-Shift.md)
* [_ShiftAndRelease\<T\>_](./TArrayUtils-ShiftAndRelease.md)
* [_UnShift\<T\>_](./TArrayUtils-UnShift.md)
* [_PopAndFree\<T: class\>_](./TArrayUtils-PopAndFree.md)
* [_First\<T\>_](./TArrayUtils-First.md)
