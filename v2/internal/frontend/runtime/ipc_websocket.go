//go:build dev || bindings

package runtime

import _ "embed"

//go:embed ipc_websocket.js
var WebsocketIPC []byte
