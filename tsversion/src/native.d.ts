export namespace NativeFactory {
    class NavigatorImpl {
        clipboard: Clipboard;
        credentials: CredentialsContainer;
        doNotTrack: string;
        geolocation: Geolocation;
        maxTouchPoints: number;
        mediaCapabilities: MediaCapabilities;
        mediaDevices: MediaDevices;
        mediaSession: MediaSession;
        permissions: Permissions;
        serviceWorker: ServiceWorkerContainer;
        userActivation: UserActivation;
        wakeLock: WakeLock;
        canShare(data?: ShareData): boolean;
        getGamepads(): (Gamepad | null)[];
        requestMIDIAccess(options?: MIDIOptions): Promise<MIDIAccess>;
        requestMediaKeySystemAccess(keySystem: string, supportedConfigurations: MediaKeySystemConfiguration[]): Promise<MediaKeySystemAccess>;
        sendBeacon(url: string | URL, data?: BodyInit | null): boolean;
        share(data?: ShareData): Promise<void>;
        vibrate(pattern: VibratePattern): boolean;
        webdriver: boolean;
        clearAppBadge(): Promise<void>;
        setAppBadge(contents?: number): Promise<void>;
        hardwareConcurrency: number;
        registerProtocolHandler(scheme: string, url: string | URL): void;
        appCodeName: string;
        appName: string;
        appVersion: string;
        platform: string;
        product: string;
        productSub: string;
        userAgent: string;
        vendor: string;
        vendorSub: string;
        language: string;
        languages: readonly string[];
        locks: LockManager;
        onLine: boolean;
        mimeTypes: MimeTypeArray;
        plugins: PluginArray;
        storage: StorageManager;
    }

    export function init(): void;
    export function initWindow(): Window;

    export function callConstructor<T extends Object, C extends { (...args: any): T; } | { new(...args: any): T; }>(constructor: C, ...args: any[]): T;
    export function applyConstructor<T extends Object, C extends { (...args: any): T; } | { new(...args: any): T; }>(constructor: C, args: any[]): T;
    export function getConstructor<T extends Object, C extends { (...args: any): T; } | { new(...args: any): T; }>(constructor: C);

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
    export function Navigation(...args: any): any|"Navigation";
    export function Navigator(): Navigator;
    export function Performance(): Performance;
    export function Scheduler(...args: any): any|"Scheduler";
    export function Screen(): Screen;
    export function Storage(entries: { [key: string]: any } | Map<string, any>): Storage;
    export function Window(url?: string | URL, target?: string, features?: string): Window | WindowProxy;
    export function WindowSharedStorage(...args: any): any|"WindowSharedStorage";
    export function TrustedTypePolicyFactory(): any|"TrustedTypePolicyFactory";
    export function VisualViewport(): VisualViewport;
}

