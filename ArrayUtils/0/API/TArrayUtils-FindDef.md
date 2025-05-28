# _FindDef\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
type
  TConstraint<T> = reference to function (const AElem: T): Boolean;
  TConstraintEx<T> = reference to function (const AElem: T;
    const AIndex: Integer; const AArray: array of T): Boolean;

class function FindDef<T>(const A: array of T;
  const AConstraint: TConstraint<T>; const ADefault: T): T;
  overload; static;

class function FindDef<T>(const A: array of T;
  const AConstraint: TConstraintEx<T>; const ADefault: T): T;
  overload; static;
```

## Description

Finds the first element of an array for which a given constraint function returns `True`. If the constraint does not return `True` for any element then a default value is returned.

***Parameters:***

* _A_ - Array to be checked.

* _AConstraint_ - Constraint function called for each element of _A_. Returns `True` if the element meets the required criteria or `False` otherwise. _AConstraint_ must be a function of type _TConstraint\<T\>_ or _TConstraintEx\<T\>_.

    ***Parameter(s):***

    * _AElem_ - The current array element to be tested.
    * _AIndex_ - The index of _AElem_ in _A_. (_TConstraintEx\<T\>_ only.) 
    * _AArray_ - Reference to the array containing _AElem_. (_TConstraintEx\<T\>_ only.)

    ***Returns:***

    * `True` if _AElem_ meets the required criteria, `False` otherwise.

* _ADefault_ - Default value to be returned if _AConstraint_ never returns `True` for any element of _A_.

***Returns:***

* The first element of _A_ for which _AConstraint_ returns `True` or _ADefault_ if there is no such element.

## Note

The _TConstraint\<T\>_ overload is all you need for most purposes. However there are cases where it is useful to have access to the whole array or the element's index within the array, which is the reason the _TConstraintEx\<T\>_ overload is provided.

## Examples

### Example #1

The first example finds the first element of an integer array that is ≥ `4`. We only need the simple _TConstraint\<T\>_ overload.

```pascal
procedure FindDef_Eg1;
var
  A, B: TArray<Integer>;
  Constraint: TArrayUtils.TConstraint<Integer>;
begin
  Constraint := function (const AElem: Integer): Boolean
    begin
      Result := AElem >= 4;
    end;

  A := TArray<Integer>.Create(1, 2, 3, 4, 5, 3);
  Assert(TArrayUtils.FindDef<Integer>(A, Constraint, MaxInt) = 4);

  B := TArray<Integer>.Create(1, 2, 3);
  Assert(TArrayUtils.FindDef<Integer>(B, Constraint, MaxInt) = MaxInt);
end;
```

### Example #2

The second example finds the first local maximum in an array of integers. To do this we need to be able to access the array element before and after a given element. Therefore the _TConstraintEx\<T\>_ overload of _FindDef\<T\>_ is required.

```pascal
procedure FindDef_Eg2;
var
  IsLocalMaxElem: TArrayUtils.TConstraintEx<Integer>;
  A, B: TArray<Integer>;
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
  Assert(TArrayUtils.FindDef<Integer>(A, IsLocalMaxElem, MaxInt) = 3);

  B := TArray<Integer>.Create(1, 1, 1, 1);
  Assert(TArrayUtils.FindDef<Integer>(B, IsLocalMaxElem, MaxInt) = MaxInt);
end;
```

## See Also

* [_TryFind\<T\>_](./TArrayUtils-TryFind.md)
* [_FindIndex\<T\>_](./TArrayUtils-FindIndex.md)
* [_FindLastDef\<T\>_](./TArrayUtils-FindLastDef.md)
* [_FindAll\<T\>_](./TArrayUtils-FindAll.md)
* [_IndexOf\<T\>_](./TArrayUtils-IndexOf.md)
