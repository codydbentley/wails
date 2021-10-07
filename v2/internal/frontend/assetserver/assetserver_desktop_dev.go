//go:build dev

package assetserver

import (
	"os"
	"path/filepath"
)

func (d *DesktopAssetServer) ReadFile(filename string) ([]byte, error) {
	d.LogDebug("Loading file from disk: %s", filename)
	return os.ReadFile(filepath.Join(d.assetdir, filename))
}
