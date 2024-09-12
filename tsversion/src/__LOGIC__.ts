type digit = "0"|"1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9";
type repeatStr<T extends primitive, N extends number = 10> = 
    N extends 0 ? never :
    N extends 1 ? `${T}` :
    N extends 2 ? `${T}${T}` :
    N extends 3 ? `${T}${T}${T}` :
    N extends 4 ? `${T}${T}${T}${T}` :
    N extends 5 ? `${T}${T}${T}${T}${T}` :
    N extends 6 ? `${T}${T}${T}${T}${T}${T}` :
    N extends 7 ? `${T}${T}${T}${T}${T}${T}${T}` :
    N extends 8 ? `${T}${T}${T}${T}${T}${T}${T}${T}` :
    N extends 9 ? `${T}${T}${T}${T}${T}${T}${T}${T}${T}` : 
    N extends 10 ? `${T}${T}${T}${T}${T}${T}${T}${T}${T}${T}` :
    never;
type repeatArray<T extends primitive, N extends number = 10> = 
    N extends 0 ? [] :
    N extends 1 ? [T] :
    N extends 2 ? [T, T] :
    N extends 3 ? [T, T, T] :
    N extends 4 ? [T, T, T, T] :
    N extends 5 ? [T, T, T, T, T] :
    N extends 6 ? [T, T, T, T, T, T] :
    N extends 7 ? [T, T, T, T, T, T, T] :
    N extends 8 ? [T, T, T, T, T, T, T, T] :
    N extends 9 ? [T, T, T, T, T, T, T, T, T] : 
    N extends 10 ? [T, T, T, T, T, T, T, T, T, T] :
    never;

type repeatDigit = repeatStr<digit, 4>;
type Num<N extends number> = `${N}` extends repeatDigit ? N : never;

let x: Num<1>;


namespace logic {
    export type t = true;
    export type f = false;

    export type is<x> = x extends t ? t : f;
    export type not<x> = x extends f ? t : f;
    
    export type and<a, b> = a & b;
    export type or<a, b> = a | b;
    export type xor<a, b> = a | b & not<a & b>;    
    export type nand<a, b> = not<a & b>;
    export type nor<a, b> = not<a> & not<b>;
    export type xnor<a, b> = nor<a, b> | (a & b);

    let l: is<false>;
}