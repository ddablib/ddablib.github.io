# _CopySorted\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class function CopySorted<T>(const A: array of T;
  const AComparer: TComparison<T>): TArray<T>;
  overload; static;

class function CopySorted<T>(const A: array of T;
  const AComparer: IComparer<T>): TArray<T>;
  overload; static;

class function CopySorted<T>(const A: array of T): TArray<T>;
  overload; static;
```

## Description

Returns a sorted copy of an array.

The copy is a shallow copy, so any references within the resulting array are the same as those in the initial array.

***Parameters:***

* _A_ - The array to be sorted.

* _AComparer_ - An optional function or object that can be used to compare two values. Determines the sort order of the array.
    
    If _AComparer_ is provided it must be one of:

    * A function of type [_TComparison\<T\>_](./RTL.md#tcomparisont-function-reference).
    * An object that supports the [_IComparer\<T\>_](./RTL.md#icomparert-interface) interface.

    If this parameter is omitted then the default comparer defined by the [_TComparer\<T\>.Default_](./RTL.md#tcomparertdefault-class-method) method from the Delphi's  _System.Generics.Defaults_ unit is used.

***Returns:***

* A sorted copy of the array.

## Note

If a deep copy of the sorted array is required then pass the return value of _CopySorted\<T\>_ to the deep copying overload of [_Copy\<T\>_](./TArrayUtils-Copy.md) along with a suitable _TCloner\<T\>_ implementation.

## Examples

### Example #1

The first example uses a comparer function to reverse sort an array of integers.

```pascal
procedure CopySorted_Eg1;
var
  A, Got, Expected: TArray<Integer>;
  ReverseComparerFn: TComparison<Integer>;
begin
  A := TArray<Integer>.Create(1, 2, 3, 4, 2, 3, 2);
  ReverseComparerFn := function(const Left, Right: Integer): Integer
    begin
      // reverse sort
      Result := Right - Left;
    end;
  Got := TArrayUtils.CopySorted<Integer>(A, ReverseComparerFn);
  Expected := TArray<Integer>.Create(4, 3, 3, 2, 2, 2, 1);
  Assert(TArrayUtils.Equal<Integer>(Expected, Got));
end;
```

### Example #2

The second example uses a comparer object to sort an array of strings.

```pascal
procedure CopySorted_Eg2;
var
  A, Got, Expected: TArray<string>;
  ComparerObj: IComparer<string>;
begin
  ComparerObj := TDelegatedComparer<string>.Create(
    function (const Left, Right: string): Integer
    begin
      Result := CompareStr(Left, Right);
    end
  );
  A := TArray<string>.Create(
    'dave', 'dee', 'dozy', 'beaky', 'mick', 'and', 'titch'
  );
  Got := TArrayUtils.CopySorted<string>(A, ComparerObj);
  Expected := TArray<string>.Create(
    'and', 'beaky', 'dave', 'dee', 'dozy', 'mick', 'titch'
  );
  Assert(TArrayUtils.Equal<string>(Expected, Got, SameStr));
end;
```

## See Also

* [_Sort\<T\>_](./TArrayUtils-Sort.md)
* [_Copy\<T\>_](./TArrayUtils-Copy.md)
* [_CopyReversed\<T\>_](./TArrayUtils-CopyReversed.md)
