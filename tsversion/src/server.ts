export type Keyed<T extends PropertyKey = any, R = T> = {
    [I in T]: R;
};

export type MapType<K, V = any> = {[I in keyof K]: V};
export type MMapType<M extends PropertyKey, V = any> = {[I in M]: V};
export type KMapType<K, V extends Keyed = any> = {[I in keyof K]: V[I]};
export type MKMapType<M extends PropertyKey, V extends Keyed = any> = {[I in M]: V[I]};

export type AutoToString<T = any> = Exclude<T, symbol>
export type ExcludeKey<O, T> = {
    [K in keyof O]: Exclude<K, T>
}
export type ExtractKey<O, T> = {
    [K in keyof O]: Extract<K, T>
}

export class EventOf<T extends EventTarget> extends Event {
    readonly currentTarget: T | null;
    readonly srcElement: T | null;
    readonly target: T | null;
}

export type EventTargetOf<T, M> = EventTarget & MMapType<`on${AutoToString<keyof M>}`, ((this: T, ev: M[keyof M]) => any) | null>
export type PropertyType<K extends PropertyKey, T> = {
    [I in K]: T
}

export type EventTargetPropertyOf<K extends PropertyKey, T, M> = PropertyType<K, EventTargetOf<T, M>>;

export declare class ServerRequest extends Request {
    constructor(input: RequestInfo | URL, init?: RequestInit);
    
    clone(): Request;
    arrayBuffer(buffer?: ArrayBuffer): Promise<ArrayBuffer>;
    blob(blob?: Blob): Promise<Blob>;
    formData(formData?: FormData): Promise<FormData>;
    json(json?: any): Promise<any>;
    text(text?: string): Promise<string>;
}

export declare class ServerResponse extends Response {
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

export declare class HttpResponse extends XMLHttpRequestEventTarget {
    constructor();

    readyState: number;
    response: any;
    responseText: string;
    responseType: XMLHttpRequestResponseType;
    responseURL: string;
    responseXML: Document;
    status: number;
    statusText: string;
    readonly timeout: number;
    upload: XMLHttpRequestUpload;
    withCredentials: boolean;
    abort(): void;
    getAllResponseHeaders(): string;
    getResponseHeader(name: string): string | null;
    open(method: string, url: string | URL): void;
    open(method: string, url: string | URL, async: boolean, username?: string | null, password?: string | null): void;
    overrideMimeType(mime: string): void;
    send(body?: Document | XMLHttpRequestBodyInit | null): void;
    setRequestHeader(name: string, value: string): void;
    addEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    
    onabort: (<T extends ProgressEvent>(this: XMLHttpRequestEventTarget, event: T) => any) | null;
    onerror: (<T extends ProgressEvent>(this: XMLHttpRequestEventTarget, event: T) => any) | null;
    onload: (<T extends ProgressEvent>(this: XMLHttpRequestEventTarget, event: T) => any) | null;
    onloadend: (<T extends ProgressEvent>(this: XMLHttpRequestEventTarget, event: T) => any) | null;
    onloadstart: (<T extends ProgressEvent>(this: XMLHttpRequestEventTarget, event: T) => any) | null;
    onprogress: (<T extends ProgressEvent>(this: XMLHttpRequestEventTarget, event: T) => any) | null;
    onreadystatechange: (<T extends ProgressEvent>(this: XMLHttpRequestEventTarget, event: T) => any) | null;
    ontimeout: (<T extends ProgressEvent>(this: XMLHttpRequestEventTarget, event: T) => any) | null;

    dispatchEvent(event: Event): boolean;
}

export declare class ServerRequestHandler extends EventTarget implements EventTargetOf<ServerRequest, ServerRequestEventMap<ServerRequest>> {
    onreadystatechange: ((this: ServerRequest, ev: ServerEvent<ServerRequest>) => any) | null;
    onabort: ((this: ServerRequest, ev: ServerEvent<ServerRequest>) => any) | null;
    onerror: ((this: ServerRequest, ev: ServerEvent<ServerRequest>) => any) | null;
    onprogress: ((this: ServerRequest, ev: ServerEvent<ServerRequest>) => any) | null;
    ontimeout: ((this: ServerRequest, ev: ServerEvent<ServerRequest>) => any) | null;
    oninit: ((this: ServerRequest, ev: ServerEvent<ServerRequest>) => any) | null;
    onfile: ((this: ServerRequest, ev: ServerEvent<ServerRequest>) => any) | null;
    oncomplete: ((this: ServerRequest, ev: ServerEvent<ServerRequest>) => any) | null;
}
export declare class ServerResponseHandler extends EventTarget implements EventTargetOf<ServerRequest, ServerRequestEventMap<ServerResponse>> {
    onreadystatechange: ((this: ServerRequest, ev: ServerEvent<ServerResponse>) => any) | null;
    onabort: ((this: ServerRequest, ev: ServerEvent<ServerResponse>) => any) | null;
    onerror: ((this: ServerRequest, ev: ServerEvent<ServerResponse>) => any) | null;
    onprogress: ((this: ServerRequest, ev: ServerEvent<ServerResponse>) => any) | null;
    ontimeout: ((this: ServerRequest, ev: ServerEvent<ServerResponse>) => any) | null;
    oninit: ((this: ServerRequest, ev: ServerEvent<ServerResponse>) => any) | null;
    onfile: ((this: ServerRequest, ev: ServerEvent<ServerResponse>) => any) | null;
    oncomplete: ((this: ServerRequest, ev: ServerEvent<ServerResponse>) => any) | null;
}

export declare class ServerEvent<T extends Body|XMLHttpRequestEventTarget|Server = Body|XMLHttpRequest|Server> extends ProgressEvent implements EventOf<Server> {
    readonly currentTarget: Server;
    readonly srcElement: Server;
    readonly target: Server;

    getPort(): number;
    getContent(): T;
}

export interface ServerEventListener<T extends Body|XMLHttpRequestEventTarget|Server = Body|XMLHttpRequest|Server> extends EventListener {
    
}

export interface ServerEventMap<T extends Body|XMLHttpRequest = Body|XMLHttpRequest> {
    start: ServerEvent<T>;
    stop: ServerEvent<T>;
    abort: ServerEvent<T>;
    error: ServerEvent<T>;
}
export interface ServerRequestEventMap<T extends Body|XMLHttpRequest = Body|XMLHttpRequest> {
    init: ServerEvent<T>;
    progress: ServerEvent<T>;
    file: ServerEvent<T>;
    complete: ServerEvent<T>;
    abort: ServerEvent<T>;
    error: ServerEvent<T>;
    readystatechange: ServerEvent<T>;
    timeout: ServerEvent<T>;
}

export declare class Server extends EventTarget implements EventTargetOf<Server, ServerEventMap> {
    constructor();

    onabort: ((this: Server, ev: ServerEvent<Body | XMLHttpRequest>) => any) | null;
    onerror: ((this: Server, ev: ServerEvent<Body | XMLHttpRequest>) => any) | null;
    onstart: ((this: Server, ev: ServerEvent<Body | XMLHttpRequest>) => any) | null;
    onstop: ((this: Server, ev: ServerEvent<Body | XMLHttpRequest>) => any) | null;
    
    listen(port: number): void;

    dispatchEvent(event: ServerEvent): boolean;
    addEventListener<K extends keyof ServerRequestEventMap>(type: K, listener: (this: Element, ev: ServerRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof ServerRequestEventMap>(type: K, listener: (this: Element, ev: ServerRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}