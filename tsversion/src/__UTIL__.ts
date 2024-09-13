
type primitive = string | number | bigint | boolean | null | undefined;
type concat<A extends string, B extends string> = `${A}${B}`
type Nullable<T> = T | null | undefined;
type OrList<T> = T | T[] | OrList<T>[];
type OrItems<T extends any> = T extends (infer I)[] ? OrItems<I> : T;
type Items<T extends any[]> = T extends (infer I)[] ? I : never;

type EventTargetType<name extends string, E extends Event = Event, T = any> = {
    [K in `on${name}`]: EventListenerType<E, T> | null;
} & {
    addEventListener(n: name, l: EventListenerType<E, T>): any;
};

interface EventListenerType<E extends Event = Event, T = any> {
    (this: T, e: E): any
}