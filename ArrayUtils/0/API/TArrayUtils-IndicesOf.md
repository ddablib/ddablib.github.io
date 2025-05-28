# _IndicesOf\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class function IndicesOf<T>(const AItem: T; const A: array of T;
  const AEqualityComparer: TEqualityComparison<T>): TArray<Integer>;
  overload; static;

class function IndicesOf<T>(const AItem: T; const A: array of T;
  const AEqualityComparer: IEqualityComparer<T>): TArray<Integer>;
  overload; static;

class function IndicesOf<T>(const AItem: T;
  const A: array of T): TArray<Integer>;
  overload; static;
```

## Description

Returns the indices of all elements of an array that are equal to a given value.

***Parameters:***

* _AItem_ - The item to be searched for.

* _A_ - The array to be searched.

* _AEqualityComparer_ - An optional function or object that is used to test the equality of two values. Used to test _AItem_ for equality with elements of _A_.
    
    If _AEqualityComparer_ is provided it must be one of:

    * A function of type [_TEqualityComparison\<T\>_](./RTL.md#tequalitycomparisont-function-reference).
    * An object that supports the [_IEqualityComparer\<T\>_](./RTL.md#iequalitycomparert-interface) interface.

    If the parameter is omitted then the default equality comparer defined by Delphi's [_TEqualityComparer\<T\>.Default_](./RTL#tequalitycomparertdefault-class-method) method is used.

***Returns:***

* Integer array containing all the found indexes. The array will be empty if _AItem_ is not equal to any element of _A_.

## Examples

### Example #1

Get the indices of all elements of a byte array that are equal to a given byte value. We use an equality comparer function in this code.

```pascal
procedure IndicesOf_Eg1;
var
  A: TArray<Byte>;
  Got, Expected: TArray<Integer>;
  EqComparerFn: TEqualityComparison<Byte>;
begin
  EqComparerFn := function (const L, R: Byte): Boolean
    begin
      Result := L = R;
    end;

  A := TArray<Byte>.Create(0, 3, 2, 1, 2, 3, 1, 3, 3);

  Got := TArrayUtils.IndicesOf<Byte>(3, A, EqComparerFn);
  Expected := TArray<Integer>.Create(1, 5, 7, 8);
  Assert(TArrayUtils.Equal<Integer>(Expected, Got));

  Got := TArrayUtils.IndicesOf<Byte>(4, A, EqComparerFn);
  Expected := TArray<Integer>.Create();
  Assert(TArrayUtils.Equal<Integer>(Expected, Got));
end;
```

### Example #2

Get the indices of all elements of a string array that are the same as a given string, ignoring case. We use an equality comparer object in this code.

```pascal
procedure IndicesOf_Eg2;
var
  A: TArray<string>;
  Got, Expected: TArray<Integer>;
  EqComparer: IEqualityComparer<string>;
begin
  EqComparer := TDelegatedEqualityComparer<string>.Create(
    SameText,
    function (const AValue: string): Integer
    begin
      // Don't do this unless you KNOW the hasher function won't be called
      Result := 0;
    end
  );
  A := TArray<string>.Create('foo', 'FOO', 'bar', 'baz', 'Foo');
  Got := TArrayUtils.IndicesOf<string>('foo', A, EqComparer);
  Expected := TArray<Integer>.Create(0, 1, 4);
  Assert(TArrayUtils.Equal<Integer>(Expected, Got));
end;
```

## See Also

* [_IndexOf\<T\>_](./TArrayUtils-IndexOf.md)
* [_LastIndexOf\<T\>_](./TArrayUtils-LastIndexOf.md)
* [_FindAll\<T\>_](./TArrayUtils-FindAll.md)
* [_OccurrencesOf\<T\>_](./TArrayUtils-OccurrencesOf.md)
