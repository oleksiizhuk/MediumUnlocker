# Medium Unlocker

A Chrome extension that adds a button to open Medium articles on Freedium for free reading.

## Features

- Adds a floating button on Medium articles
- Opens articles on Freedium mirror with one click
- Works on Medium.com and related publications

## Supported Sites

- `medium.com`
- `*.medium.com`
- `levelup.gitconnected.com`
- `*.gitconnected.com`

## Installation

### From Source (Development)

1. Clone the repository:
   ```bash
   git clone https://github.com/oleksiizhuk/MediumUnlocker.git
   cd MediumUnlocker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Load in Chrome:
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select `build/chrome-mv3-dev` folder

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run release` | Bump patch version and build |
| `npm run release:minor` | Bump minor version and build |
| `npm run release:major` | Bump major version and build |

## Tech Stack

- [Plasmo](https://www.plasmo.com/) - Browser extension framework
- React
- TypeScript

## License

MIT