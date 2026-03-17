# eqpis
オリジナルのEQPiS(地震情報提供システム) ©です。

# コードの配置
```both
eqpis/
├── package.json
├── vite.config.js
├── index.html
├── public/
│   ├── alert.mp3
│   └── manifest.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles/
│   │   └── index.css
│   ├── hooks/
│   │   ├── useEEW.js
│   │   └── useLocation.js
│   ├── components/
│   │   ├── EEWAlert.jsx
│   │   ├── QuakeList.jsx
│   │   ├── MapView.jsx
│   │   └── Settings.jsx
│   ├── utils/
│   │   ├── quakeColor.js
│   │   └── distance.js
│   └── services/
│       └── firebase.js
└── server/
    └── server.js

```
