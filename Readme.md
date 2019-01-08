Boilerplate for Electron, React, Typescript and Mobx with Hot Reload

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Development with hot reloading

You need 2 terminal windows for that:

```
npm run server		// Build and start hot reloading server &&
npm run startdev	// open electron in development mode with hmr.
```

## Files for distribution

```
npm run pack 		// Build app into '/release' folder.
```

```
npm run dist 		// Build and package app into '/release' folder for distribution.
```

## Acknowledgments

Based on:

-   [https://taraksharma.com/setting-up-electron-typescript-react-webpack/](https://taraksharma.com/setting-up-electron-typescript-react-webpack/)
-   [https://github.com/quantumkv/electron-react-hot-ts-boilerplate](https://github.com/quantumkv/electron-react-hot-ts-boilerplate)
-   [https://github.com/gaoshang212/electron-typescript-react-mobx-boilerplate](https://github.com/gaoshang212/electron-typescript-react-mobx-boilerplate)

## Notes

-   Tested on Mac only.
-   To skip code signing on Mac enter `export CSC_IDENTITY_AUTO_DISCOVERY=false` from terminal.

## Known issues

-   `"noImplicitAny": true` and `"noImplicitThis": true` in `tsconfig.json` throw errors during build time
-   `"strictNullChecks": true` in `tsconfig.json` conflicts with `mainWindow = null` in `main.ts`
