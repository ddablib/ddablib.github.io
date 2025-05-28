# _MinMax\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class procedure MinMax<T>(const A: array of T;
  const AComparer: TComparison<T>; out AMinValue, AMaxValue: T);
  overload; static;

class procedure MinMax<T>(const A: array of T;
  AComparer: IComparer<T>; out AMinValue, AMaxValue: T);
  overload; static;

class procedure MinMax<T>(const A: array of T; out AMinValue, AMaxValue: T);
  overload; static;
```

## Description

Finds the minimum and maximum values of a non empty array.

***Parameters:***

* _A_ - The array to be examined.

* _AComparer_ - An optional function or object that can be used to compare two values. Used to compare the elements of the arrays to each other.
    
    If _AComparer_ is provided it must be one of:

    * A function of type [_TComparison\<T\>_](./RTL.md#tcomparisont-function-reference).
    * An object that supports the [_IComparer\<T\>_](./RTL.md#icomparert-interface) interface.

    If this parameter is omitted then the default comparer defined by the [_TComparer\<T\>.Default_](./RTL.md#tcomparertdefault-class-method) method from the Delphi's  _System.Generics.Defaults_ unit is used.

* _MinValue_ - Set to the minimum value of _A_ when the method returns.

* _MaxValue_ - Set to the maximum value of _A_ when the method returns.

***Precondition:***

* _A_ must not be empty. An _EAssertionFailed_ exception is raised otherwise.

## Examples

### Example #1

Using an equality comparer function:

```pascal
procedure MinMax_Eg1;
var
  A: TArray<Integer>;
  MinVal, MaxVal: Integer;
  ComparerFn: TComparison<Integer>;
begin
  A := TArray<Integer>.Create(1, 2, 3, 4, 2, 3, 2);
  ComparerFn := function(const Left, Right: Integer): Integer
    begin
      Result := Left - Right;
    end;
  TArrayUtils.MinMax<Integer>(A, ComparerFn, MinVal, MaxVal);
  Assert(MinVal = 1);
  Assert(MaxVal = 4);
end;
```

### Example #2

Using an equality comparer object:

```pascal
procedure MinMax_Eg2;
var
  A: TArray<string>;
  MinVal, MaxVal: string;
  ComparerObj: IComparer<string>;
begin
  A := TArray<string>.Create('a', 'b', 'c', 'd', 'c', 'a');
  ComparerObj := TDelegatedComparer<string>.Create(CompareStr);
  TArrayUtils.MinMax<string>(A, ComparerObj, MinVal, MaxVal);
  Assert(MinVal = 'a');
  Assert(MaxVal = 'd');
end;
```

## See Also

* [_Max\<T\>_](./TArrayUtils-Max.md)
* [_Min\<T\>_](./TArrayUtils-Min.md)
