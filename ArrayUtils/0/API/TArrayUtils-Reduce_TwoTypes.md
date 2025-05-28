# _Reduce\<TIn,TOut\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
type
  TReducer<TIn,TOut> = reference to function (const AAccumulator: TOut;
    const ACurrent: TIn): TOut;
  TReducerEx<TIn,TOut> = reference to function (const AAccumulator: TOut;
    const ACurrent: TIn; const AIndex: Integer;
    const AArray: array of TIn): TOut;

class function Reduce<TIn,TOut>(const A: array of TIn;
  const AReducer: TReducer<TIn,TOut>; const AInitialValue: TOut): TOut;
  overload; static;

class function Reduce<TIn,TOut>(const A: array of TIn;
  const AReducer: TReducerEx<TIn,TOut>; const AInitialValue: TOut): TOut;
  overload; static;
```

## Description

Reduces the elements of an array to a single value of an optionally different type to that of the array elements.

***Parameters:***

* _A_ - The array whose elements are to be reduced.

* _AReducer_ - Callback function executed for each element in the array that is used to calculate the reduced value. _AReducer_ must be a function of type _TReducer\<TIn,TOut\>_ or _TReducerEx\<TIn,TOut\>_.

    ***Parameter(s):***

    * _AAccumulator_ - The value, of type _TOut_, resulting from the previous call to _AReducer_. On the first call, its value is set to _AInitialValue_.
    * _ACurrent_ - The value of the current element of the array, of type _TIn_. On the first call, its value is _A[0]_.
    * _AIndex_ - The index of _ACurrent_ in array _A_. On the first call, its value is `0`. (_TReducerEx\<TIn,TOut\>_ only.)
    * _AArray_ - Reference to the array on which _Reduce\<TIn,TOut\>_ was called (i.e. _A_). (_TReducerEx\<TIn,TOut\>_ only.)

    ***Returns:***

    * A value of type _TOut_ that becomes the value of the _AAccumulator_ on the next invocation of this callback. On the final call the return value becomes the return value of _Reduce\<TIn,TOut\>_.

* _AInitialValue_ - A value, of type _TOut_, to which _AAccumulator_ is initialized the first time that _AReducer_ is called.

***Returns:***

* The single value of type _TOut_ that results from running _AReducer_ over the elements of _A_. 

## Examples

### Example #1

This first example uses the first overload of _Reduce\<Tin,TOut\>_ that uses a callback of type _TReducer\<TIn,TOut\>_. The procedure counts the number of strings in an array that begin with given text.

```pascal
procedure Reduce_TwoTypes_Eg1;
const
  RequiredStr = 'needle';
var
  A: TArray<string>;
  CountStrsReducer: TArrayUtils.TReducer<string,Integer>;
begin
  CountStrsReducer := function (const AAccumulator: Integer;
    const ACurrent: string): Integer
    begin
      Result := AAccumulator;
      if Pos(RequiredStr, ACurrent) = 1 then
        Inc(Result);
    end;
  A := TArray<string>.Create('find', 'the', 'needle', 'and', 'more', 'needles');
  Assert(TArrayUtils.Reduce<string,Integer>(A, CountStrsReducer, 0) = 2);
end;
```

### Exampe #2

This second example uses the second overload of _Reduce\<Tin,TOut\>_ that uses a callback of type _TReducerEx\<TIn,TOut\>_. The calculates the arithmetic mean of a list of integers stored in an array.

```pascal
procedure Reduce_TwoTypes_Eg2;
var
  AverageReducer: TArrayUtils.TReducerEx<Integer,Extended>;
  A: TArray<Integer>;
begin
  AverageReducer := function (const AAccumulator: Extended;
    const ACurrent: Integer; const AIndex: Integer;
    const AArray: array of Integer): Extended
    begin
      // Don't call with empty array
      Result := AAccumulator + ACurrent / Length(A);
    end;
  A := TArray<Integer>.Create(3, 6, 3, 8, 3, 2);
  Assert(
    SameValue(
      4.16666666666667,
      TArrayUtils.Reduce<Integer,Extended>(A, AverageReducer, 0),
      0.000001
    )
  );
end;
```

## See Also

* [_Reduce\<T\>_](./TArrayUtils-Reduce_OneType.md)
* [_Transform\<TIn,TOut\>_](./TArrayUtils-Transform.md)
