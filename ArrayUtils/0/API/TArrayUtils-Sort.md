# _Sort\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class procedure Sort<T>(var A: array of T; const AComparer: TComparison<T>);
  overload; static;

class procedure Sort<T>(var A: array of T; const AComparer: IComparer<T>);
  overload; static;

class procedure Sort<T>(var A: array of T);
  overload; static;
```

## Description

Sorts an array in place.

***Parameters:***

* _A_ - The array being sorted. The array to be sorted is passed in and the sorted array is passed out

* _AComparer_ - An optional function or object that can be used to compare two values. Determines the sort order of the array.
    
    If _AComparer_ is provided it must be one of:

    * A function of type [_TComparison\<T\>_](./RTL.md#tcomparisont-function-reference).
    * An object that supports the [_IComparer\<T\>_](./RTL.md#icomparert-interface) interface.

    If this parameter is omitted then the default comparer defined by the [_TComparer\<T\>.Default_](./RTL.md#tcomparertdefault-class-method) method from the Delphi's  _System.Generics.Defaults_ unit is used.

## Examples

### Example #1

The first example uses an equality comparer function to reverse sort an array of integers.

```pascal
procedure Sort_Eg1;
var
  A, Expected: TArray<Integer>;
  ReverseComparerFn: TComparison<Integer>;
begin
  ReverseComparerFn := function(const Left, Right: Integer): Integer
    begin
      Result := Right - Left;
    end;
  A := TArray<Integer>.Create(1, 2, 3, 4, 2, 3, 2);
  TArrayUtils.Sort<Integer>(A, ReverseComparerFn);
  Expected := TArray<Integer>.Create(4, 3, 3, 2, 2, 2, 1);
  Assert(TArrayUtils.Equal<Integer>(Expected, A));
end;
```

### Example #2

The second example uses an equality comparer object to sort an array of strings.

```pascal
procedure Sort_Eg2;
var
  A, Expected: TArray<string>;
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
  TArrayUtils.Sort<string>(A, ComparerObj);
  Expected := TArray<string>.Create(
    'and', 'beaky', 'dave', 'dee', 'dozy', 'mick', 'titch'
  );
  Assert(TArrayUtils.Equal<string>(Expected, A, SameStr));
end;
```

## See Also

* [_CopySorted\<T\>_](./TArrayUtils-CopySorted.md)
* [_Reverse\<T\>_](./TArrayUtils-Reverse.md)
