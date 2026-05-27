const fs = require('fs');
let content = fs.readFileSync('lib/i18n/translations.ts', 'utf8');

content = content.replace(/contact: "Contact",/g, 'contact: "Contact",\n      environment: "Environment",');
content = content.replace(/contact: "Contatto",/g, 'contact: "Contatto",\n      environment: "Ambiente",');
content = content.replace(/contact: "Contato",/g, 'contact: "Contato",\n      environment: "Meio Ambiente",');

fs.writeFileSync('lib/i18n/translations.ts', content);
