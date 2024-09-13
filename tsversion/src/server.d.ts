export type Keyed<T extends PropertyKey = any, R = T> = {
    [I in T]: R;
};

export interface EventOf<T extends EventTarget> extends Event {
    readonly currentTarget: T | null;
    readonly srcElement: T | null;
    readonly target: T | null;
}

export class ServerRequest extends Request {
    constructor(input: RequestInfo | URL, init?: RequestInit);
    
    clone(): Request;
    arrayBuffer(buffer?: ArrayBuffer): Promise<ArrayBuffer>;
    blob(blob?: Blob): Promise<Blob>;
    formData(formData?: FormData): Promise<FormData>;
    json(json?: any): Promise<any>;
    text(text?: string): Promise<string>;
}

export class ServerResponse extends Response {
    constructor(init?: ResponseInit);
    constructor(status: number, statusText?: string);
    constructor(headers: HeadersInit, status?: number, statusText?: string);

    constructor(input: Response, init?: ResponseInit);
    constructor(input: Response, status: number, statusText?: string);
    constructor(input: Response, headers: HeadersInit, status?: number, statusText?: string);
    
    clone(): Response;
    arrayBuffer(buffer?: ArrayBuffer): Promise<ArrayBuffer>;
    blob(blob?: Blob): Promise<Blob>;
    formData(formData?: FormData): Promise<FormData>;
    json(json?: any): Promise<any>;
    text(text?: string): Promise<string>;
}

export class ServerEvent implements EventOf<Server> {
    readonly currentTarget: Server;
    readonly srcElement: Server;
    readonly target: Server;
    readonly bubbles: boolean;
    cancelBubble: boolean;
    readonly cancelable: boolean;
    readonly composed: boolean;
    readonly defaultPrevented: boolean;
    readonly eventPhase: number;
    readonly isTrusted: boolean;
    returnValue: boolean;
    readonly timeStamp: number;
    readonly type: string;
    composedPath(): EventTarget[];
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    readonly NONE = 0;
    readonly CAPTURING_PHASE = 1;
    readonly AT_TARGET = 2;
    readonly BUBBLING_PHASE = 3;
}

export interface ServerEventMap {
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

export type MapType<K, V = any> = {[I in keyof K]: V};
export type MMapType<M extends PropertyKey, V = any> = {[I in M]: V};
export type KMapType<K, V extends Keyed = any> = {[I in keyof K]: V[I]};
export type MKMapType<M extends PropertyKey, V extends Keyed = any> = {[I in M]: V[I]};

export type Server = EventTarget & MMapType<`on${keyof ServerEventMap}`, ((this: Server, ev: Event) => any) | null> & {
    listen(port: number): void;

    addEventListener<K extends keyof ServerEventMap>(type: K, listener: (this: Element, ev: ServerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServerEventMap>(type: K, listener: (this: Element, ev: ServerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
};