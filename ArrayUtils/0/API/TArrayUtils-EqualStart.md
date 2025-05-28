# _EqualStart\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class function EqualStart<T>(const ALeft, ARight: array of T;
  const ACount: Integer; const AEqualityComparer: TEqualityComparison<T>):
  Boolean;
  overload; static;

class function EqualStart<T>(const ALeft, ARight: array of T;
  const ACount: Integer; const AEqualityComparer: IEqualityComparer<T>):
  Boolean;
  overload; static;

class function EqualStart<T>(const ALeft, ARight: array of T;
  const ACount: Integer): Boolean;
  overload; static;
```

## Description

Checks if a given number of elements at the start two arrays, both with elements of the same type, have the same contents, in the same order.

***Parameters:***

* _ALeft_ - The first array to be compared.

* _ARight_ - The second array to be compared.

* _ACount_ - The number of bytes to be compared. Must be a positive number.

* _AEqualityComparer_ - An optional function or object that is used to test the equality of two values. Used to check equality of array elements.

    If _AEqualityComparer_ is provided it must be one of:

    * A function of type [_TEqualityComparison\<T\>_](./RTL.md#tequalitycomparisont-function-reference).
    * An object that supports the [_IEqualityComparer\<T\>_](./RTL.md#iequalitycomparert-interface) interface.

    If the parameter is omitted then the default equality comparer defined by Delphi's [_TEqualityComparer\<T\>.Default_](./RTL#tequalitycomparertdefault-class-method) method is used.

***Returns:***

* `True` if _ALeft_ and _ARight_ begin with the same _ACount_ elements or `False` if not.

***Precondition:***

* _ACount_ must be ≥ `1`. An _EAssertionFailed_ exception is raised otherwise.

## Examples

### Example #1

Using a comparer function:

```pascal
procedure EqualStart_Eg1;
var
  A, B: TArray<Integer>;
  EqComparerFn: TEqualityComparison<Integer>;
begin
  A := TArray<Integer>.Create(1, 2, 3);
  B := TArray<Integer>.Create(1, 2, 5, 6);
  EqComparerFn := function(const Left, Right: Integer): Boolean
    begin
      Result := Left = Right;
    end;
  Assert(TArrayUtils.EqualStart<Integer>(A, B, 1, EqComparerFn) = True);
  Assert(TArrayUtils.EqualStart<Integer>(A, B, 2, EqComparerFn) = True);
  Assert(TArrayUtils.EqualStart<Integer>(A, B, 3, EqComparerFn) = False);
end;
```

### Example #2

Using a comparer object:

```pascal
procedure EqualStart_Eg2;
var
  A, B: TArray<string>;
  EqComparerObj: IEqualityComparer<string>;
begin
  A := TArray<string>.Create('a', 'b', 'c');
  B := TArray<string>.Create('a', 'b');
  EqComparerObj := TDelegatedEqualityComparer<string>.Create(
    SameStr,
    function (const Value: string): Integer
    begin
      // This is only safe because the hash function isn't called by EqualStart
      Result := 0;
    end
  );
  Assert(TArrayUtils.EqualStart<string>(A, B, 2, EqComparerObj) = True);
  Assert(TArrayUtils.EqualStart<string>(A, B, 3, EqComparerObj) = False);
end;
```

## See Also

* [_Equal\<T\>_](./TArrayUtils-Equal.md)
* [_Compare\<T\>_](./TArrayUtils-Compare.md)