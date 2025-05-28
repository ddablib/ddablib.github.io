# _Compare\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class function Compare<T>(const ALeft, ARight: array of T;
  const AComparer: TComparison<T>): Integer;
  overload; static;

class function Compare<T>(const ALeft, ARight: array of T;
  const AComparer: IComparer<T>): Integer;
  overload; static;

class function Compare<T>(const ALeft, ARight: array of T): Integer;
  overload; static;
```

## Description

Compares two arrays with elements of the same type. A value is returned that indicates the relationship of the two arrays.

***Parameters:***

* _ALeft_ - The first array to be compared.

* _ARight_ - The second array to be compared

* _AComparer_ - An optional function or object that can be used to compare two values. Used to compare the elements of the arrays.
    
    If _AComparer_ is provided it must be one of:

    * A function of type [_TComparison\<T\>_](./RTL.md#tcomparisont-function-reference).
    * An object that supports the [_IComparer\<T\>_](./RTL.md#icomparert-interface) interface.

    If this parameter is omitted then the default comparer defined by the [_TComparer\<T\>.Default_](./RTL.md#tcomparertdefault-class-method) method from the Delphi's  _System.Generics.Defaults_ unit is used.

***Returns:***

* An _Integer_ value that should be interpreted as follows:

    * `0` - The arrays are equal.
    * negative - _ALeft_ is less than (i.e. sorts before) _ARight_.
    * positive - _ALeft_ is greater than (i.e. sorts after) _ARight_.

## Notes

1. Two non-empty arrays are considered equal if, and only if, both arrays have the same length and the elements at the same index in each array are equal.
2. For two non-empty arrays of the same length, where the elements at index N are the first non-equal elements, the result of the comparison is the result of comparing the elements at index N in each array.
3. If we have two non-empty arrays, X and Y where `Length(X) < Length(Y)` and the first `Length(X)` elements of Y are equal to the elements of X then Y is greater than X.
4. Two empty arrays are equal.
5. An empty array is always less than a non-empty array.

## Examples

### Example #1

Using a comparer function:

```pascal
procedure Compare_Eg1;
var
  A, B, C, D, E: TArray<Integer>;
  ComparerFn: TComparison<Integer>;
begin
  A := TArray<Integer>.Create(1, 2, 3);
  B := TArray<Integer>.Create(1, 2, 3);
  C := TArray<Integer>.Create(1, 2);
  D := TArray<Integer>.Create(1, 5, 7);
  E := TArray<Integer>.Create();        // empty
  ComparerFn := function(const Left, Right: Integer): Integer
    begin
      Result := Left - Right;
    end;
  Assert(TArrayUtils.Compare<Integer>(A, B, ComparerFn) = 0);
  Assert(TArrayUtils.Compare<Integer>(A, C, ComparerFn) > 0);
  Assert(TArrayUtils.Compare<Integer>(A, D, ComparerFn) < 0);
  Assert(TArrayUtils.Compare<Integer>(A, E, ComparerFn) > 0);
end;
```

### Example #2

Using a comparer object:

```pascal
procedure Compare_Eg2;
var
  A, B, C, D, E: TArray<string>;
  ComparerObj: IComparer<string>;
begin
  A := TArray<string>.Create('a', 'b', 'c');
  B := TArray<string>.Create('a', 'b', 'c');
  C := TArray<string>.Create('a', 'b');
  D := TArray<string>.Create('a', 'd', 'f');
  E := TArray<string>.Create();        // empty
  ComparerObj := TDelegatedComparer<string>.Create(CompareStr);
  Assert(TArrayUtils.Compare<string>(A, B, ComparerObj) = 0);
  Assert(TArrayUtils.Compare<string>(A, C, ComparerObj) > 0);
  Assert(TArrayUtils.Compare<string>(A, D, ComparerObj) < 0);
  Assert(TArrayUtils.Compare<string>(A, E, ComparerObj) > 0);
end;
```

## See Also

* [_Equal\<T\>_](./TArrayUtils-Equal.md)
* [_EqualStart\<T\>_](./TArrayUtils-EqualStart.md)
