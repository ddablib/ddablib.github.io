# _Min\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class function Min<T>(const A: array of T;
  const AComparer: TComparison<T>): T;
  overload; static;

class function Min<T>(const A: array of T;
  const AComparer: IComparer<T>): T;
  overload; static;

class function Min<T>(const A: array of T): T;
  overload; static;
```

## Description

Finds the minimum value of a non empty array.

***Parameters:***

* _A_ - The array to be examined.

* _AComparer_ - An optional function or object that can be used to compare two values. Used to compare the elements of the arrays to each other.
    
    If _AComparer_ is provided it must be one of:

    * A function of type [_TComparison\<T\>_](./RTL.md#tcomparisont-function-reference).
    * An object that supports the [_IComparer\<T\>_](./RTL.md#icomparert-interface) interface.

    If this parameter is omitted then the default comparer defined by the [_TComparer\<T\>.Default_](./RTL.md#tcomparertdefault-class-method) method from the Delphi's  _System.Generics.Defaults_ unit is used.

***Returns:***

* The element whose value is the smallest in the array.

***Precondition:***

* _A_ must not be empty. An _EAssertionFailed_ exception is raised otherwise.

## Examples

### Example #1

Using an equality comparer function:

```pascal
procedure Min_Eg1;
var
  A: TArray<Integer>;
  ComparerFn: TComparison<Integer>;
begin
  A := TArray<Integer>.Create(1, 2, 3, 4, 2, 3, 2);
  ComparerFn := function(const Left, Right: Integer): Integer
    begin
      Result := Left - Right;
    end;
  Assert(TArrayUtils.Min<Integer>(A, ComparerFn) = 1);
end;
```

### Example #2

Using an equality comparer object:

```pascal
procedure Min_Eg2;
var
  A: TArray<string>;
  ComparerObj: IComparer<string>;
begin
  A := TArray<string>.Create('a', 'b', 'c', 'd', 'c', 'a');
  ComparerObj := TDelegatedComparer<string>.Create(CompareStr);
  Assert(TArrayUtils.Min<string>(A, ComparerObj) = 'a');
end;
```

## See Also

* [_Max\<T\>_](./TArrayUtils-Max.md)
* [_MinMax\<T\>_](./TArrayUtils-MinMax.md)
