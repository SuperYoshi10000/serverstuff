export type Writeable<T> = { -readonly [P in keyof T]: T[P] };
export type Not<T, U> = U extends T ? never : any
type a = Not<any, number>

export namespace NativeFactory {
    export function init(): void;
    export function initWindow(): Window;
    
    export function getSynchronous<T>(promise: Promise<T>): T;

    export function callConstructor<T extends Object, C extends { (...args: any): T; } | { new(...args: any): T; }>(constructor: C, ...args: any[]): T;
    export function applyConstructor<T extends Object, C extends { (...args: any): T; } | { new(...args: any): T; }>(constructor: C, args: any[]): T;
    export function getConstructor<T extends Object, C extends { (...args: any): T; } | { new(...args: any): T; }>(constructor: C);

    export function replaceObject<K extends PropertyKey, T>(obj: { [I in K]: T }, key: K, value: T): T;

    export type CacheEntry = RequestInfo | URL | [RequestInfo | URL, Response?] | {request: RequestInfo | URL, response?: Response}
    export function Cache(): Cache;
    export function CacheStorage(...caches: Cache[]): CacheStorage;

    export type Link = string | [string, string?, string?] | { text: string, href: string, target: string };
    export type ConsoleEntryContent = string | ImageBitmap | Node | Link;
    export type ConsoleEntry = {type: "", text: string, content: ConsoleEntryContent};
    export function Console(...entries: ConsoleEntry[]): Console;

    export function CookieStore(...args: any): any|"CookieStore";
    export function Crypto(): Crypto;
    export function CustomElementRegistry(elements: Map<string, typeof HTMLElement>): CustomElementRegistry;
    export function DocumentPictureInPicture(...args: any): any|"DocumentPictureInPicture";
    export function Document(): Document;
    export function DOMImplementation(): DOMImplementation;
    export function PictureInPictureWindow(): PictureInPictureWindow;
    export function External(): External;
    export function Fence(...args: any): any|"Fence";
    
    export type HistoryState = [any, string, string | URL | null] | {data: any, unused: string, url?: string | URL | null};
    export function History(...states: HistoryState[]): History;
    
    export function IDBDatabase(): IDBDatabase;
    export function IDBFactory(): IDBFactory;

    export function LaunchQueue(...args: any): any|"LaunchQueue";
    export function Location(
            ancestorOrigins: DOMStringList,
            hash: string,
            host: string,
            hostname: string,
            href: string,
            origin: string,
            pathname: string,
            port: string,
            protocol: string,
            search: string,
    ): Location;
    export function Navigation(...args: any):  any|"Navigation";
    
    export type CustomNavigator = Writeable<Navigator>
    export function Navigator(navigator: CustomNavigator): Navigator;
    export function Navigator(
        userAgent?: string
    ): Navigator;

    export function Clipboard(): Clipboard;
    export function CredentialsContainer(): CredentialsContainer;
    export function Geolocation(): Geolocation;
    export function MaxTouchPoints(): number;
    export function MediaCapabilities(): MediaCapabilities;
    export function MediaDevices(): MediaDevices;
    export function MediaSession(): MediaSession;
    export function Permissions(): Permissions;
    export function ServiceWorkerContainer(): ServiceWorkerContainer;
    export function UserActivation(): UserActivation;
    export function WakeLock(): WakeLock;
    export function Gamepad(): Gamepad;
    export function MIDIAccess(options?: MIDIOptions): MIDIAccess;
    export function MediaKeySystemAccess(keySystem: string, supportedConfigurations: MediaKeySystemConfiguration[]): MediaKeySystemAccess;

    export function Performance(): Performance;
    export function Scheduler(...args: any): any|"Scheduler";
    export function Screen(): Screen;
    export function Storage(entries: { [key: string]: any } | Map<string, any>): Storage;
    export function Window(url?: string | URL, target?: string, features?: string): Window | WindowProxy;
    export function WindowSharedStorage(...args: any): any|"WindowSharedStorage";
    export function TrustedTypePolicyFactory(): any|"TrustedTypePolicyFactory";
    export function VisualViewport(): VisualViewport;
}

