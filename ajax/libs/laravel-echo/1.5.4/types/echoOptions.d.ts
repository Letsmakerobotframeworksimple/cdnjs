/// <reference types="socket.io-client" />
import { AuthConfig, Config } from "pusher-js";
export default interface EchoOptions extends Config, SocketIOClient.ConnectOpts {
    namespace?: string | boolean;
    authEndpoint?: string;
    broadcaster?: string;
    csrfToken?: string | null;
    host?: string | undefined;
    key?: string | undefined;
    client?: Pusher.Pusher | SocketIOClient.Socket;
    auth?: AuthConfig;
}
