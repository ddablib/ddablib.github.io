# _Reduce\<T\>_ class method

**Project:** [Array Utilities Unit](../API.md)

**Unit:** _DelphiDabbler.Lib.ArrayUtils_

**Record:** [_TArrayUtils_](./TArrayUtils.md)

**Applies to:** ~>0.1

```pascal
type
  TReducer<T> = reference to function (const AAccumulator, ACurrent: T): T;
  TReducerEx<T> = reference to function (const AAccumulator, ACurrent: T;
    const AIndex: Integer; const AArray: array of T): T;

class function Reduce<T>(const A: array of T;
  const AReducer: TReducer<T>): T;
  overload; static;

class function Reduce<T>(const A: array of T; const AReducer: TReducer<T>;
  const AInitialValue: T): T;
  overload; static;

class function Reduce<T>(const A: array of T; const AReducer: TReducerEx<T>;
  const AInitialValue: T): T;
  overload; static;
```

## Description

Reduces the elements of an array to a single value of the same type as the array elements.

***Parameters:***

* _A_ - The array whose elements are to be reduced.

* _AReducer_ - Callback function executed for each element in the array that is used to calculate the reduced value. _AReducer_ must be a function of type _TReducer\<T\>_ or _TReducerEx\<T\>_.

    ***Parameter(s):***

    * _AAccumulator_ - The value resulting from the previous call to _AReducer_. On the first call, its value is _AInitialValue_ if specified, otherwise its value is _A[0]_.
    * _ACurrent_ - The value of the current element of the array. On the first call, its value is _A[0]_ if _AInitialValue_ provided, otherwise its value is _A[1]_.
    * _AIndex_ - The index of _ACurrent_ in array _A_. On the first call, its value is `0` if _AInitialValue_ is specified, otherwise the value is `1`. (_TReducerEx\<T\>_ only.)
    * _AArray_ - Reference to the array on which _Reduce\<T\>_ was called (i.e. _A_). (_TReducerEx\<T\>_ only.)

    ***Returns:***

    * A value that becomes the value of the _AAccumulator_ on the next invocation of this callback. On the final call the return value becomes the return value of _Reduce\<T\>_.

* _AInitialValue_ - An optional value to which _AAccumulator_ is initialised the first time that _AReducer_ is called.

    If _AInitialValue_ is specified then _AReducer_ starts executing with _AAccumulator_ set to _AInitialValue_ and _ACurrent_ is set to _A[0]_ . If _A_ is empty then _AReducer_ is never called.

    If _AInitialValue_ is not specified then _AReducer_ starts executing with _AAccumulator_ set to _A[0]_ and _ACurrent_ is set to _A[1]_. If _A_ has only one element then _AReducer_ is never called.

***Returns:***

* The single value that results from running _AReducer_ over the elements of _A_. 

    If _AInitialValue_ is specified and _A_ is empty then _AInitialValue_ is returned.

    If _AInitialValue_ is not specified and _A_ has just one element then _A[0]_ returned.

***Precondition:***

* If _AInitialValue_ is not provided then _A_ must not be empty. An _EAssertionFailed_ exception is raised otherwise.

## Examples

### Example #1

The first example uses the 1st overload of _Reduce\<T\>_, which requires a non-empty array. The example computes the sum of a given integer array.

```pascal
procedure Reduce_SingleType_Eg1;
var
  A: TArray<Integer>;
  SumCallback: TArrayUtils.TReducer<Integer>;
begin
  SumCallback := function (const AAccumulator, ACurrent: Integer): Integer
    begin
      Result := ACurrent + AAccumulator;
    end;
  A := TArray<Integer>.Create(1, 3, 5, 7, 9);
  Assert(TArrayUtils.Reduce<Integer>(A, SumCallback) = 25);
end;
```

### Example #2

The second example exercises the 2nd _Reduce\<T\>_ overload, using the _AInitialValue_ parameter and the simple _TReducer\<T\>_ callback function. The code demonstrates how to cumulatively add multiple arrays.

```pascal
procedure Reduce_SingleType_Eg2;
var
  A, B: TArray<Integer>;
  SumCallback: TArrayUtils.TReducer<Integer>;
  RunningTotal: Integer;
begin
  SumCallback := function (const AAccumulator, ACurrent: Integer): Integer
    begin
      Result := ACurrent + AAccumulator;
    end;
  A := TArray<Integer>.Create(1, 3, 5, 7, 9);   // sum = 25
  B := TArray<Integer>.Create(2, 4, 6, 8, 10);  // sum = 30
  RunningTotal := 0;
  RunningTotal := TArrayUtils.Reduce<Integer>(A, SumCallback, RunningTotal);
  Assert(RunningTotal = 25);
  RunningTotal := TArrayUtils.Reduce<Integer>(B, SumCallback, RunningTotal);
  Assert(RunningTotal = 55);
end;
```

### Example #3

The final example sums the absolute distances between adjacent elements of an integer array. It uses the 3rd _Reduce\<T\>_ overload, using the _AInitialValue_ and the more complex _TReducerEx\<T\>_ callback function.

```pascal
procedure Reduce_SingleType_Eg3;
var
  SumDistancesReducer: TArrayUtils.TReducerEx<Integer>;
  A: TArray<Integer>;
begin
  // Adds the absolute distances between adjacent elements of an integer array
  SumDistancesReducer := function (const AAccumulator, ACurrent: Integer;
    const AIndex: Integer; const AArray: array of Integer): Integer
    var
      Distance: Integer;
    begin
      Result := AAccumulator;
      if AIndex = 0 then
        Exit;
      Distance := Abs(AArray[AIndex] - AArray[AIndex - 1]);
      Result := Result + Distance;
    end;

  A := TArray<Integer>.Create(3, 6, 3, 8, 3, 2);
  Assert(TArrayUtils.Reduce<Integer>(A, SumDistancesReducer, 0) = 17);
end;
```

## See Also

* [_Reduce\<TIn,TOut\>_](./TArrayUtils-Reduce_TwoTypes.md)
* [_Transform\<TIn,TOut\>_](./TArrayUtils-Transform.md)
