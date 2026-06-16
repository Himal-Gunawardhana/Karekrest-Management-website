import fs from 'fs';

const appPath = './src/App.jsx';
const cssPath = './src/index.css';

let app = fs.readFileSync(appPath, 'utf8');
let css = fs.readFileSync(cssPath, 'utf8');

// App.jsx logo replacements
app = app.replace(
  /<div style={{ width:44, height:44, borderRadius:'50%', background:'linear-gradient\(135deg,var\(--amethyst\),var\(--accent\)\)', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontFamily:'Sora,sans-serif', fontWeight:800, fontSize:'1rem', boxShadow:'0 4px 16px rgba\(139,92,246,\.45\)' }}>KM<\/div>/g,
  `<img src="/karekrestlogo.jpg" alt="KareKRest Logo" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 16px rgba(59,130,246,.45)' }} />`
);

app = app.replace(
  /<div style={{ width:40, height:40, borderRadius:'50%', background:'linear-gradient\(135deg,#1A5FD4,#07213F\)', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontFamily:'Sora,sans-serif', fontWeight:800 }}>KM<\/div>/g,
  `<img src="/karekrestlogo.jpg" alt="KareKRest Logo" style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />`
);

// Colors in App.jsx
app = app.replace(/#8B5CF6/g, '#3B82F6');
app = app.replace(/#F43F5E/g, '#60A5FA');
app = app.replace(/139,92,246/g, '59,130,246');
app = app.replace(/244,63,94/g, '96,165,250');

// Colors in index.css
css = css.replace(/#8B5CF6/g, '#3B82F6');
css = css.replace(/#F43F5E/g, '#60A5FA');
css = css.replace(/139,92,246/g, '59,130,246');
css = css.replace(/244,63,94/g, '96,165,250');

fs.writeFileSync(appPath, app);
fs.writeFileSync(cssPath, css);
console.log('Replacement complete.');
