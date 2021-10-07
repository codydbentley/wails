//go:build dev || bindings || (!dev && !production && !bindings)

package runtime

import _ "embed"

//go:embed driver_desktop.js
var DriverDesktopJS []byte
