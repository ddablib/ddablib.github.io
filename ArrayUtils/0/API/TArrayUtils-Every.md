# _Every\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
type
  TConstraint<T> = reference to function (const AElem: T): Boolean;
  TConstraintEx<T> = reference to function (const AElem: T;
    const AIndex: Integer; const AArray: array of T): Boolean;

class function Every<T>(const A: array of T;
  const AConstraint: TConstraint<T>): Boolean;
  overload; static;

class function Every<T>(const A: array of T;
  const AConstraint: TConstraintEx<T>): Boolean;
  overload; static;
```

## Description

Checks if all elements of a non-empty array satisfy a given constraint.

***Parameters:***

* _A_ - Array to be checked.

* _AConstraint_ - Constraint function called for each element of _A_. Returns `True` if the element meets the required criteria or `False` otherwise. _AConstraint_ must be a function of type _TConstraint\<T\>_ or _TConstraintEx\<T\>_.

    ***Parameter(s):***

    * _AElem_ - The current array element to be tested.
    * _AIndex_ - The index of _AElem_ in _A_. (_TConstraintEx\<T\>_ only.) 
    * _AArray_ - Reference to the array containing _AElem_. (_TConstraintEx\<T\>_ only.)

    ***Returns:***

    * `True` if _AElem_ satisfies the required criteria or `False` otherwise.

***Returns:***

* `True` if _AConstraint_ returns `True` for all elements of _A_, or `False` otherwise.

***Precondition:***

* _A_ must not be empty. An _EAssertionFailed_ exception is raised otherwise.

## Note

The _TConstraint\<T\>_ overload is all you need for most purposes. However there are cases where it is useful to have access to the whole array or the element's index within the array, which is the reason the _TConstraintEx\<T\>_ overload is provided.

## Examples

### Example #1

The first example checks if all elements of an integer array are ≥ `4`. We only need the simple _TConstraint\<T\>_ overload.

```pascal
procedure Every_Eg1;
var
  A, B: TArray<Integer>;
  Constraint: TArrayUtils.TConstraint<Integer>;
begin
  A := TArray<Integer>.Create(1, 2, 3, 4, 5, 3);
  B := TArray<Integer>.Create(4, 5, 6);
  Constraint := function (const AElem: Integer): Boolean
    begin
      Result := AElem >= 4;
    end;
  Assert(TArrayUtils.Every<Integer>(A, Constraint) = False);
  Assert(TArrayUtils.Every<Integer>(B, Constraint) = True);
end;
```

### Example #2

The second example checks that the distance between all adjacent integers in an array is no more than one. To do this we need to be able to access the array element before a given element. Therefore the _TConstraintEx\<T\>_ overload of _Every\<T\>_ is required.

```pascal
procedure Every_Eg2;
var
  Constraint: TArrayUtils.TConstraintEx<Integer>;
  A, B, C: TArray<Integer>;
begin
  Constraint := function (const AElem: Integer; const AIndex: Integer;
    const A: array of Integer): Boolean
    var
      Distance: Integer;
    begin
      // True iff distance betwent element and prior element <=1
      // Assume that single element arrays meet the criteria
      if Length(A) = 1 then
        Exit(True);
      Assert(A[AIndex] = AElem);
      if AIndex = 0 then
        Exit(True);
      Distance := Abs(A[AIndex] - A[AIndex - 1]);
      Result := Distance <= 1;
    end;

  A := TArray<Integer>.Create(0, 1, 0, 1, 2, 1, 2, 1, 0);
  B := TArray<Integer>.Create(0, 1, 2, 0, 1, 2);
  C := TArray<Integer>.Create(42);
  Assert(TArrayUtils.Every<Integer>(A, Constraint) = True);
  Assert(TArrayUtils.Every<Integer>(B, Constraint) = False);
  Assert(TArrayUtils.Every<Integer>(C, Constraint) = True);
end;
```

## See Also

* [_Some\<T\>_](./TArrayUtils-Some.md)
* [_FindAll\<T\>_](./TArrayUtils-FindAll.md)
