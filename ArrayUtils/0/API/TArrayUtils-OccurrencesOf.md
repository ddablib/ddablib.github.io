# _OccurrencesOf\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class function OccurrencesOf<T>(const AItem: T; const A: array of T;
  const AEqualityComparer: TEqualityComparison<T>): Integer;
  overload; static;

class function OccurrencesOf<T>(const AItem: T; const A: array of T;
  const AEqualityComparer: IEqualityComparer<T>): Integer;
  overload; static;

class function OccurrencesOf<T>(const AItem: T;
  const A: array of T): Integer;
  overload; static;
```

## Description

Returns the number of elements of an array that are equal to a given value.

***Parameters:***

* _AItem_ - The item to be searched for.

* _A_ - The array to be searched.

* _AEqualityComparer_ - An optional function or object that is used to test the equality of two values. Used to test _AItem_ for equality with elements of _A_.
    
    If _AEqualityComparer_ is provided it must be one of:

    * A function of type [_TEqualityComparison\<T\>_](./RTL.md#tequalitycomparisont-function-reference).
    * An object that supports the [_IEqualityComparer\<T\>_](./RTL.md#iequalitycomparert-interface) interface.

    If the parameter is omitted then the default equality comparer defined by Delphi's [_TEqualityComparer\<T\>.Default_](./RTL#tequalitycomparertdefault-class-method) method is used.

***Returns:***

* The number of matching elements of _A_.

## Examples

### Example #1

Using an equality comparer function:

```pascal
procedure OccurrencesOf_Eg1;
var
  A: TArray<Integer>;
  EqComparerFn: TEqualityComparison<Integer>;
begin
  A := TArray<Integer>.Create(1, 2, 3, 4, 2, 3, 2);
  EqComparerFn := function(const Left, Right: Integer): Boolean
    begin
      Result := Left = Right;
    end;
  Assert(TArrayUtils.OccurrencesOf<Integer>(2, A, EqComparerFn) = 3);
  Assert(TArrayUtils.OccurrencesOf<Integer>(5, A, EqComparerFn) = 0);
end;
```

### Example #2

Using an equality comparer object:

```pascal
procedure OccurrencesOf_Eg2;
var
  A: TArray<string>;
  EqComparerObj: IEqualityComparer<string>;
begin
  A := TArray<string>.Create('A', 'B', 'C', 'd', 'c', 'a');
  EqComparerObj := TDelegatedEqualityComparer<string>.Create(
    SameText,
    function(const Value: string): Integer
    begin
      // only do this if you KNOW the hash function won't be called
      Result := 0;
    end
  );
  Assert(TArrayUtils.OccurrencesOf<string>('C', A, EqComparerObj) = 2);
  Assert(TArrayUtils.OccurrencesOf<string>('x', A, EqComparerObj) = 0);
end;
```

## See Also

* [_IndexOf\<T\>_](./TArrayUtils-IndexOf.md)
* [_LastIndexOf\<T\>_](./TArrayUtils-LastIndexOf.md)
* [_IndicesOf\<T\>_](./TArrayUtils-OccurrencesOf.md)
