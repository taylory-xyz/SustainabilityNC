# To start:
## Prereqs:
- git
- npm or yarn

## Steps (from the commandline):
- git clone https://github.com/SustainabilityNC/SustainabilityNC.git
- cd SustainabilityNC
- `npm install expo`, or `yarn add expo`
- expo start
	- `w` for web,
	- but you can also install the expo client on your phone and use the qr code
- if there is an error, edit the path in `node_modules/expo/AppEntry.js` so that it says `import App from '../../src/App';`

