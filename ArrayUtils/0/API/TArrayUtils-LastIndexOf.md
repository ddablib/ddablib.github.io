# _LastIndexOf\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class function LastIndexOf<T>(const AItem: T; const A: array of T;
  const AEqualityComparer: TEqualityComparison<T>): Integer;
  overload; static;

class function LastIndexOf<T>(const AItem: T; const A: array of T;
  const AEqualityComparer: IEqualityComparer<T>): Integer;
  overload; static;

class function LastIndexOf<T>(const AItem: T; const A: array of T): Integer;
  overload; static;
```

## Description

Returns the last index of an element of an array that is equal to a given value.

***Parameters:***

* _AItem_ - The item to be searched for.

* _A_ - The array to be searched.

* _AEqualityComparer_ - An optional function or object that is used to test the equality of two values. Used to test _AItem_ for equality with elements of _A_.
    
    If _AEqualityComparer_ is provided it must be one of:

    * A function of type [_TEqualityComparison\<T\>_](./RTL.md#tequalitycomparisont-function-reference).
    * An object that supports the [_IEqualityComparer\<T\>_](./RTL.md#iequalitycomparert-interface) interface.

    If the parameter is omitted then the default equality comparer defined by Delphi's [_TEqualityComparer\<T\>.Default_](./RTL#tequalitycomparertdefault-class-method) method is used.

***Returns:***

* The highest index of an element of _A_ that tests equal to _AItem_ or `-1` _A_ contains no matching element.

## Examples

### Example #1

Using an equality comparer function:

```pascal
procedure LastIndexOf_Eg1;
var
  A: TArray<Integer>;
  EqComparerFn: TEqualityComparison<Integer>;
begin
  A := TArray<Integer>.Create(1, 2, 3, 4, 2, 3, 2);
  EqComparerFn := function(const Left, Right: Integer): Boolean
    begin
      Result := Left = Right;
    end;
  Assert(TArrayUtils.LastIndexOf<Integer>(3, A, EqComparerFn) = 5);
  Assert(TArrayUtils.LastIndexOf<Integer>(5, A, EqComparerFn) = -1);
end;
```

### Example #2

Using an equality comparer object:

```pascal
procedure LastIndexOf_Eg2;
var
  A: TArray<string>;
  EqComparerObj: IEqualityComparer<string>;
begin
  A := TArray<string>.Create('a', 'b', 'c', 'd', 'c', 'a');
  EqComparerObj := TDelegatedEqualityComparer<string>.Create(
    SameStr,
    function(const Value: string): Integer
    begin
      // only do this if you KNOW the hash function won't be called
      Result := 0;
    end
  );
  Assert(TArrayUtils.LastIndexOf<string>('a', A, EqComparerObj) = 5);
  Assert(TArrayUtils.LastIndexOf<string>('x', A, EqComparerObj) = -1);
end;
```

## See Also

* [_IndexOf\<T\>_](./TArrayUtils-IndexOf.md)
* [_IndicesOf\<T\>_](./TArrayUtils-IndicesOf.md)
* [_TryFindLast\<T\>_](./TArrayUtils-TryFindLast.md)
* [_FindLastDef\<T\>_](./TArrayUtils-FindLastDef.md)
