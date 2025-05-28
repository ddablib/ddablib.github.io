# _DeDup\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
class function DeDup<T>(const A: array of T;
  const AEqualityComparer: TEqualityComparison<T>): TArray<T>;
  overload; static;

class function DeDup<T>(const A: array of T;
  const AEqualityComparer: IEqualityComparer<T>): TArray<T>;
  overload; static;

class function DeDup<T>(const A: array of T): TArray<T>;
  overload; static;
```

## Description

Returns a copy of an array that contains no duplicated elements.

The copy is a shallow copy, so any references within the resulting array are the same as those in the initial array.

***Parameters:***

* _A_ - The array to be de-duplicated.

* _AEqualityComparer_ - An optional function or object that is used to test the equality of two values. Used to determine which array elements are duplicated.
    
    If _AEqualityComparer_ is provided it must be one of:

    * A function of type [_TEqualityComparison\<T\>_](./RTL.md#tequalitycomparisont-function-reference).
    * An object that supports the [_IEqualityComparer\<T\>_](./RTL.md#iequalitycomparert-interface) interface.

    If the parameter is omitted then the default equality comparer defined by Delphi's [_TEqualityComparer\<T\>.Default_](./RTL#tequalitycomparertdefault-class-method) method is used.

***Returns:***

* The de-duplicated copy of the array.

## Note

If a deep copy of the de-duplicated array is required then pass the return value of _DeDup\<T\>_ to the deep copying overload of [_Copy\<T\>_](./TArrayUtils-Copy.md) along with a suitable _TCloner\<T\>_ implementation.

## Example

To de-duplicate a **string** array use the following code. The code uses the equality comparer function overloaded version of _DeDup\<T\>_.

```pascal
procedure DeDup_Eg;
var
  A, B, Expected: TArray<string>;
begin
  A := TArray<string>.Create('Foo', 'Bar', 'foo', 'Foo', 'BAR');
  B := TArrayUtils.DeDup<string>(A, SameText);
  Expected := TArray<string>.Create('Foo', 'Bar');
  Assert(TArrayUtils.Equal<string>(Expected, B, SameText));
end;
```

## See Also

* [_Chop\<T\>_](./TArrayUtils-Chop.md)
* [_Copy\<T\>_](./TArrayUtils-Copy.md)
* [_Delete\<T\>_](./TArrayUtils-Delete.md)
* [_DeleteRange\<T\>_](./TArrayUtils-DeleteRange.md)
* [_Pick\<T\>_](./TArrayUtils-Pick.md)
* [_Slice\<T\>_](./TArrayUtils-Slice.md)
