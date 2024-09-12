type Keyed<T extends PropertyKey = any, R = T> = {
    [I in T]: R;
};

interface EventOf<T extends EventTarget> extends Event {
    readonly currentTarget: T | null;
    readonly srcElement: T | null;
    readonly target: T | null;
}

interface ServerRequest {

}
interface ServerResponse {

}

interface ServerEvent extends EventOf<Server> {
    
}

interface ServerEventMap {
    requestinit: ServerEvent;
    requestprogress: ServerEvent;
    requestfile: ServerEvent;
    requestcomplete: ServerEvent;
    requestabort: ServerEvent;
    responseinit: ServerEvent;
    responseprogress: ServerEvent;
    responsecomplete: ServerEvent;
    responseabort: ServerEvent;
}




// type Mutable<T> = {[I in keyof T]: T[I]}
// type Mutable2<T extends Keyed> = {[I in keyof T]: T[I]}

type MapType<K, V = any> = {[I in keyof K]: V};
type MMapType<M extends PropertyKey, V = any> = {[I in M]: V};
type KMapType<K, V extends Keyed = any> = {[I in keyof K]: V[I]};
type MKMapType<M extends PropertyKey, V extends Keyed = any> = {[I in M]: V[I]};

type Server = EventTarget & MMapType<`on${keyof ServerEventMap}`, ((this: Server, ev: Event) => any) | null> & {
    listen(port: number): void;

    addEventListener<K extends keyof ServerEventMap>(type: K, listener: (this: Element, ev: ServerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServerEventMap>(type: K, listener: (this: Element, ev: ServerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
};