# _Transform\<TIn,TOut\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
type
  TTransformer<TIn,TOut> = reference to function (const AValue: TIn): TOut;
  TTransformerEx<TIn,TOut> = reference to function (const AValue: TIn;
    const AIndex: Integer; const AArray: array of TIn): TOut;

class function Transform<TIn,TOut>(const A: array of TIn;
  const ATransformFunc: TTransformer<TIn,TOut>): TArray<TOut>;
  overload; static;

class function Transform<TIn,TOut>(const A: array of TIn;
  const ATransformFunc: TTransformerEx<TIn,TOut>): TArray<TOut>;
  overload; static;
```

## Description

Transforms the elements, of type _TIn_, of a given array into elements of type _TOut_ of another array.

The transformed array is the same length as the input array. The elements of the transformed array correspond to the elements of the input array at the same index.

***Parameters:***

* _A_ - The array whose elements are to be transformed.

* _ATransformFunc_ - Reference to a function that transforms a value of type _TIn_ to another value of type _TOut_. This function is called once per element of _A_ and its result is stored in the transformed array. _ATransformFunc_ must be a function of type _TTransformer\<TIn,TOut\>_ or _TTransformerEx\<TIn,TOut\>_

    ***Parameter(s):***

    * _AValue_ - Value of type _TIn_ to be transformed.
    * _AIndex_ - Index of _AValue_ in _A_. (_TTransformerEx\<TIn,TOut\>_ only.)
    * _AArray_ - Reference to the array containing _AValue_, i.e. _A_. (_TTransformerEx\<TIn,TOut\>_ only.)

    ***Returns:***

    * The transformed value, of type _TOut_.

***Returns:***

* The array of transformed values, with elements of type _TOut_.

## Examples

### Example #1

The first example uses the simpler _TTransformer\<TIn,TOut\>_ version of the method to transform an array of integers between 1..10 into their roman numeral equivalents.

```pascal
type
  TOneToTen = 1..10;

procedure Transform_Eg1;
var
  A: TArray<TOneToTen>;
  Got, Expected: TArray<string>;
  RomanTransformer: TArrayUtils.TTransformer<TOneToTen,string>;
begin
  {$RangeChecks On}
  RomanTransformer := function (const N: TOneToTen): string
    const
      Numerals: array[TOneToTen] of string = (
        'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'
      );
    begin
      Result := Numerals[N];
    end;

  A := TArray<TOneToTen>.Create(3, 5, 8, 2, 9);
  Got := TArrayUtils.Transform<TOneToTen, string>(A, RomanTransformer);
  Expected := TArray<string>.Create('III', 'V', 'VIII', 'II', 'IX');
  Assert(TArrayUtils.Equal<string>(Expected, Got, SameStr));
end;
```

### Example #2

The second example uses the _TTransformerEx\<TIn,TOut\>_ version of the method to raise a sequence of non-negative integers to the power of their position in the sequence. Note that, in this case, both _TIn_ and _TOut_ are the same type.

```pascal
procedure Transform_Eq2;
var
  A, Got, Expected: TArray<Cardinal>;
begin
  A := TArray<Cardinal>.Create(5, 8, 3, 2, 0, 1, 3);
  Got := TArrayUtils.Transform<Cardinal,Cardinal>(
    A,
    function (const AValue: Cardinal; const AIndex: Integer;
      const A: array of Cardinal): Cardinal
    begin
      Result := Round(IntPower(AValue, AIndex + 1));
    end
  );
  Expected := TArray<Cardinal>.Create(5, 64, 27, 16, 0, 1, 2187);
  Assert(TArrayUtils.Equal<Cardinal>(Expected, Got));
end;
```

## See Also

* [_Reduce\<T\>_](./TArrayUtils-Reduce_OneType.md)
* [_Reduce\<TIn,TOut\>_](./TArrayUtils-Reduce_TwoTypes.md)
