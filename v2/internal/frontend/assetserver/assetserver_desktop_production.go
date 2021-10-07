//go:build production

package assetserver

func (d *DesktopAssetServer) ReadFile(filename string) ([]byte, error) {
	return d.assets.ReadFile(filename)
}
