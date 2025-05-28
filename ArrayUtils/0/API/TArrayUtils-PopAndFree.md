# _PopAndFree\<T: class\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class procedure PopAndFree<T: class>(var A: TArray<T>);
  static;
```

## Description

Removes and frees the last element from a non-empty array of _TObject_ descendants. 

The length of the array is reduced by one.

***Parameters:***

* _A_ - Array from which the element is to be removed and freed. The array is updated in place when the element is deleted.

    Array elements must be _TObject_ descendants.

***Preconditions:***

* _A_ must not be empty. An _EAssertionFailed_ exception is raised otherwise.

## Note

1. If it is not necessary to free an object that is popped off an array then [_Pop\<T\>_](./TArrayUtils-Pop.md) should be used instead of _PopAndFree\<T: class\>_.

2. There is no corresponding object version of [_Push\<T\>_](./TArrayUtils-Push.md) for use with _PopAndFree\<T: class\>_. This is not necessary since pushing an object requires no special handling. Just use [_Push\<T\>_](./TArrayUtils-Push.md) where _T_ is set to the required class type.

## Example

This example illustrates how _PopAndFree\<class T\>_ varies from [_Pop\<T\>_](./TArrayUtils-Pop.md).

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

procedure PopAndFree_Eg;
var
  A: TArray<TObjectEx>;
  Obj, ShiftedObj: TObjectEx;
begin
  // Start with no objects
  Assert(TObjectEx.InstanceCount = 0, 'TObjectEx <> 0 instances');

  // Create array of 3 objects using Push<T>
  SetLength(A, 0);
  TArrayUtils.Push<TObjectEx>(A, TObjectEx.Create('C'));
  TArrayUtils.Push<TObjectEx>(A, TObjectEx.Create('B'));
  TArrayUtils.Push<TObjectEx>(A, TObjectEx.Create('A'));
  Assert(Length(A) = 3, 'Array length <> 3');
  Assert(TObjectEx.InstanceCount = 3, 'TObjectEx <> 3 instances');
  Assert(TArrayUtils.Last<TObjectEx>(A).ID = 'A', 'Last object ID <> A');

  // Pop last object with PopAndFree<T:class>:
  // this will remove it from the array and free it
  TArrayUtils.PopAndFree<TObjectEx>(A);
  // check object was removed from array
  Assert(Length(A) = 2, 'Array length <> 2');
  // check removed object was freed
  Assert(TObjectEx.InstanceCount = 2, 'TObjectEx <> 2 instances');
  Assert(TArrayUtils.Last<TObjectEx>(A).ID = 'B', 'Last object ID <> B');

  // Pop new last object with Pop<T>:
  // this will remove it from the array but not free it
  ShiftedObj := TArrayUtils.Pop<TObjectEx>(A);
  // check object removed from array
  Assert(Length(A) = 1, 'Array length <> 1');
  // check removed object was not freed
  Assert(TObjectEx.InstanceCount = 2, 'TObjectEx <> 2 instances');
  Assert(TArrayUtils.Last<TObjectEx>(A).ID = 'C', 'Last object ID <> C');

  // Tidy up remaining un-freed objects
  ShiftedObj.Free;
  for Obj in A do
    Obj.Free;
  Assert(TObjectEx.InstanceCount = 0, 'TObjectEx <> 0 instances');
end;
```

## See Also

* [_Pop\<T\>_](./TArrayUtils-Pop.md)
* [_PopAndRelease\<T\>_](./TArrayUtils-PopAndRelease.md)
* [_Push\<T\>_](./TArrayUtils-Push.md)
* [_ShiftAndFree\<T: class\>_](./TArrayUtils-ShiftAndFree.md)
* [_Last\<T\>_](./TArrayUtils-Last.md)
