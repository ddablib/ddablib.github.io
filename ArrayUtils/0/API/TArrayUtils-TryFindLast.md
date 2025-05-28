# _TryFindLast\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
type
  TConstraint<T> = reference to function (const AElem: T): Boolean;
  TConstraintEx<T> = reference to function (const AElem: T;
    const AIndex: Integer; const AArray: array of T): Boolean;

class function TryFindLast<T>(const A: array of T;
  const AConstraint: TConstraint<T>; out AItem: T): Boolean;
  overload; static;

class function TryFindLast<T>(const A: array of T;
  const AConstraint: TConstraintEx<T>; out AItem: T): Boolean;
  overload; static;
```

## Description

Attempts to find the last element of an array for which a given constraint function returns `True`. Returns a _Boolean_
that indicates success or failure.

***Parameters:***

* _A_ - Array to be checked.

* _AConstraint_ - Constraint function called for each element of _A_. Returns `True` if the element meets the required criteria or `False` otherwise. _AConstraint_ must be a function of type _TConstraint\<T\>_ or _TConstraintEx\<T\>_.

    ***Parameter(s):***

    * _AElem_ - The current array element to be tested.
    * _AIndex_ - The index of _AElem_ in _A_. (_TConstraintEx\<T\>_ only.) 
    * _AArray_ - Reference to the array containing _AElem_. (_TConstraintEx\<T\>_ only.)

    ***Returns:***

    * `True` if _AElem_ meets the required criteria, `False` otherwise.

* _AItem_ - Set to the last element of _A_ for which _AConstraint_ returns `True`. Undefined if _AConstraint_ returns `False`, i.e. no such element is found.

***Returns:***

* `True` if _A_ contains at least one element for which _AConstraint_ returns `True` is found, `False` otherwise.

## Note

The _TConstraint\<T\>_ overload is all you need for most purposes. However there are cases where it is useful to have access to the whole array or the element's index within the array, which is the reason the _TConstraintEx\<T\>_ overload is provided.

## Examples

### Example #1

The first example finds the last element of an integer array that is ≥ `4`. We only need the simple _TConstraint\<T\>_ overload.

```pascal
procedure TryFindLast_Eg1;
var
  A, B: TArray<Integer>;
  Found: Integer;
  Constraint: TArrayUtils.TConstraint<Integer>;
begin
  A := TArray<Integer>.Create(1, 2, 3, 4, 5, 3);
  B := TArray<Integer>.Create(1, 2, 3);
  Constraint := function (const AElem: Integer): Boolean
    begin
      Result := AElem >= 4;
    end;
  Assert(TArrayUtils.TryFindLast<Integer>(A, Constraint, Found) = True);
  Assert(Found = 5);
  Assert(TArrayUtils.TryFindLast<Integer>(B, Constraint, Found) = False);
  // `Found` is undefined
end;
```

### Example #2

The second example finds the last local maximum in an array of integers. To do this we need to be able to access the array element before and after a given element. Therefore the _TConstraintEx\<T\>_ overload of _TryFindLast\<T\>_ is required.

```pascal
procedure TryFindLast_Eg2;
var
  IsLocalMaxElem: TArrayUtils.TConstraintEx<Integer>;
  A, B: TArray<Integer>;
  Found: Integer;
begin
  IsLocalMaxElem :=
    function (const AElem: Integer; const AIndex: Integer;
      const A: array of Integer): Boolean
    begin
      if Length(A) = 0 then
        // no local maxima in an empty array
        Exit(False);
      if Length(A) = 1 then
        // the only element in a 1 element array is considered to be a maximum
        Exit(True);
      // Length(A) >= 2
      if (AIndex = 0) then
        // 1st elem: peak if next elem smaller
        Result := A[Succ(AIndex)] < AElem
      else if AIndex = Pred(Length(A)) then
        // last elem: peak if previous elem smaller
        Result := A[Pred(AIndex)] < AElem
      else
        // not 1st or last: peak if > than elems on either side
        Result := (A[Succ(AIndex)] < AElem) and (A[Pred(AIndex)] < AElem);
    end;

  A := TArray<Integer>.Create(1, 2, 3, 2, 3, 5, 1);
  Assert(TArrayUtils.TryFindLast<Integer>(A, IsLocalMaxElem, Found) = True);
  Assert(Found = 5);

  B := TArray<Integer>.Create(1, 1, 1, 1);
  Assert(TArrayUtils.TryFindLast<Integer>(B, IsLocalMaxElem, Found) = False);
  // Found is not defined
end;
```

## See Also

* [_TryFind\<T\>_](./TArrayUtils-TryFind.md)
* [_FindAll\<T\>_](./TArrayUtils-FindAll.md)
* [_FindLastDef\<T\>_](./TArrayUtils-FindLastDef.md)
* [_FindLastIndex\<T\>_](./TArrayUtils-FindLastIndex.md)
* [_LastIndexOf\<T\>_](./TArrayUtils-LastIndexOf.md)
