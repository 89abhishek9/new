import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  console.log('Starting prerendering of ProstaVive static HTML...');
  try {
    const { renderToString } = await import('react-dom/server');
    const React = await import('react');

    // Load the SSR compiled App component
    const ssrAppPath = path.resolve(__dirname, './dist-ssr/App.js');
    if (!fs.existsSync(ssrAppPath)) {
      throw new Error(`SSR bundle not found at ${ssrAppPath}. Make sure to build it first.`);
    }
    
    const App = (await import(ssrAppPath)).default;
    if (!App) {
      throw new Error('App component is not the default export of dist-ssr/App.js');
    }

    // Load index.html template from client build
    const templatePath = path.resolve(__dirname, './dist/index.html');
    if (!fs.existsSync(templatePath)) {
      throw new Error(`index.html template not found at ${templatePath}. Make sure client build runs first.`);
    }

    let html = fs.readFileSync(templatePath, 'utf-8');

    // Render the App component to HTML string
    console.log('Rendering React App to static markup...');
    const appHtml = renderToString(React.createElement(App));

    // Inject prerendered content inside <div id="root"></div>
    const rootDiv = '<div id="root"></div>';
    if (!html.includes(rootDiv)) {
      throw new Error('Could not find <div id="root"></div> placeholder in index.html template');
    }

    html = html.replace(rootDiv, `<div id="root">${appHtml}</div>`);

    // Write back the finished file
    fs.writeFileSync(templatePath, html, 'utf-8');
    console.log('Prerendering completed successfully! dist/index.html has been updated.');
  } catch (error) {
    console.error('Error during prerendering:', error);
    process.exit(1);
  }
}

prerender();
