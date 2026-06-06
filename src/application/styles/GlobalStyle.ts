import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

  :root {
    color: #3b390d;
    background: #fffbff;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    --surface: #fffbff;
    --surface-low: #fffbd8;
    --surface-card: #ffffff;
    --surface-soft: #f9f5cb;
    --surface-high: #f4f0bc;
    --ink: #3b390d;
    --muted: #686635;
    --primary: #354010;
    --secondary: #2b6b84;
    --tertiary: #845c32;
    --primary-soft: #dbe9a9;
    --secondary-soft: #bde9ff;
    --tertiary-soft: #e1af7e;
    --outline: rgb(191 188 130 / 0.24);
    --shadow: 0 24px 60px rgb(59 57 13 / 0.08);
    --shadow-soft: 0 18px 40px rgb(59 57 13 / 0.05);
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 6rem;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    background:
      radial-gradient(circle at 12% 18%, rgb(219 233 169 / 0.34), transparent 24%),
      radial-gradient(circle at 88% 18%, rgb(189 233 255 / 0.22), transparent 28%),
      radial-gradient(circle at 70% 86%, rgb(225 175 126 / 0.14), transparent 24%),
      var(--surface);
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.05;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    z-index: -1;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;

export default GlobalStyle;
