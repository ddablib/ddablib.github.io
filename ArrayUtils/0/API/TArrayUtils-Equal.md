# _Equal\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class function Equal<T>(const ALeft, ARight: array of T;
  const AEqualityComparer: TEqualityComparison<T>): Boolean;
  overload; static;

class function Equal<T>(const ALeft, ARight: array of T;
  const AEqualityComparer: IEqualityComparer<T>): Boolean;
  overload; static;

class function Equal<T>(const ALeft, ARight: array of T): Boolean;
  overload; static;
```

## Description

Checks if two arrays, both with elements of of the same type, have the same contents, in the same order.

***Parameters:***

* _ALeft_ - The first array to be compared.

* _ARight_ - The second array to be compared.

* _AEqualityComparer_ - An optional function or object that is used to test the equality of two values. Used to check equality of array elements.
    
    If _AEqualityComparer_ is provided it must be one of:

    * A function of type [_TEqualityComparison\<T\>_](./RTL.md#tequalitycomparisont-function-reference).
    * An object that supports the [_IEqualityComparer\<T\>_](./RTL.md#iequalitycomparert-interface) interface.

    If the parameter is omitted then the default equality comparer defined by Delphi's [_TEqualityComparer\<T\>.Default_](./RTL#tequalitycomparertdefault-class-method) method is used.

***Returns:***

* `True` if _ALeft_ and _ARight_ are the same or `False` if not.

## Notes

1. Two non-empty arrays are considered equal if, and only if, both arrays have the same length and the elements at the same index in each array are equal.

2. Two empty arrays are considered equal.

## Examples

### Example #1

Using a comparer function:

```pascal
procedure Equal_Eg1;
var
  A, B, C, D, E1, E2: TArray<Integer>;
  EqComparerFn: TEqualityComparison<Integer>;
begin
  A := TArray<Integer>.Create(1, 2, 3);
  B := TArray<Integer>.Create(1, 2, 3);
  C := TArray<Integer>.Create(1, 2);
  D := TArray<Integer>.Create(1, 5, 7);
  E1 := TArray<Integer>.Create();        // empty
  E2 := TArray<Integer>.Create();        // empty
  EqComparerFn := function(const Left, Right: Integer): Boolean
    begin
      Result := Left = Right;
    end;
  Assert(TArrayUtils.Equal<Integer>(A, B, EqComparerFn) = True);
  Assert(TArrayUtils.Equal<Integer>(A, C, EqComparerFn) = False);
  Assert(TArrayUtils.Equal<Integer>(A, D, EqComparerFn) = False);
  Assert(TArrayUtils.Equal<Integer>(A, E1, EqComparerFn) = False);
  Assert(TArrayUtils.Equal<Integer>(E1, E2, EqComparerFn) = True);
end;
```

### Example #2

Using a comparer object:

```pascal
procedure Equal_Eg2;
var
  A, B, C, D, E1, E2: TArray<string>;
  EqComparerObj: IEqualityComparer<string>;
begin
  A := TArray<string>.Create('a', 'b', 'c');
  B := TArray<string>.Create('a', 'b', 'c');
  C := TArray<string>.Create('a', 'b');
  D := TArray<string>.Create('a', 'd', 'f');
  E1 := TArray<string>.Create();        // empty
  E2 := TArray<string>.Create();        // empty
  EqComparerObj := TDelegatedEqualityComparer<string>.Create(
    SameStr,
    function (const Value: string): Integer
    begin
      // This is only safe because the hash function isn't called by Equal
      Result := 0;
    end
  );
  Assert(TArrayUtils.Equal<string>(A, B, EqComparerObj) = True);
  Assert(TArrayUtils.Equal<string>(A, C, EqComparerObj) = False);
  Assert(TArrayUtils.Equal<string>(A, D, EqComparerObj) = False);
  Assert(TArrayUtils.Equal<string>(A, E1, EqComparerObj) = False);
  Assert(TArrayUtils.Equal<string>(E1, E2, EqComparerObj) = True);
end;
```

## See Also

* [_EqualStart\<T\>_](./TArrayUtils-EqualStart.md)
* [_Compare\<T\>_](./TArrayUtils-Compare.md)
