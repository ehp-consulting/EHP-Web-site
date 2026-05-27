const fs = require('fs');

const file = fs.readFileSync('lib/i18n/translations.ts', 'utf8');

let newFile = file;

// Add nav.environmentalPolicy
newFile = newFile.replace(/environment: "Medioambiente"/g, 'environment: "Medioambiente",\n    environmentalPolicy: "Política Ambiental"');
newFile = newFile.replace(/environment: "Environment",/g, 'environment: "Environment",\n      environmentalPolicy: "Environmental Policy",');
newFile = newFile.replace(/environment: "Environment",/g, 'environment: "Environment",\n      environmentalPolicy: "Politique Environnementale",'); // Wait, French is Environment instead of Environnement? Let's fix that too.
newFile = newFile.replace(/contact: "Contatti",/g, 'contact: "Contatti",\n      environment: "Ambiente",\n      environmentalPolicy: "Politica Ambientale",');
newFile = newFile.replace(/environment: "Meio Ambiente",/g, 'environment: "Meio Ambiente",\n      environmentalPolicy: "Política Ambiental",');

// Add contact.form.requestCallback and contact.form.phone
newFile = newFile.replace(/optional: "Opcional",/g, 'optional: "Opcional",\n      requestCallback: "Solicitar llamada",\n      phone: "Teléfono",');
newFile = newFile.replace(/optional: "Optional",/g, 'optional: "Optional",\n        requestCallback: "Request a Callback",\n        phone: "Phone Number",');
newFile = newFile.replace(/optional: "Optionnel",/g, 'optional: "Optionnel",\n        requestCallback: "Demander un rappel",\n        phone: "Numéro de téléphone",');
newFile = newFile.replace(/optional: "Opzionale",/g, 'optional: "Opzionale",\n        requestCallback: "Richiedi una richiamata",\n        phone: "Numero di telefono",');
newFile = newFile.replace(/optional: "Opcional",/g, 'optional: "Opcional",\n        requestCallback: "Solicitar uma ligação",\n        phone: "Número de telefone",');

// Add sustainabilityRoute.esgGoals
const esgGoalsEs = `
    esgGoals: {
      title: "Objetivos ESG Clave",
      subtitle: "Nuestro progreso hacia un futuro sostenible.",
      carbon: "Reducción de Huella de Carbono",
      water: "Conservación de Agua",
      waste: "Reducción de Residuos",
      energy: "Energía Renovable"
    },`;
newFile = newFile.replace(/title: "Ruta de Sostenibilidad",/g, `title: "Ruta de Sostenibilidad",${esgGoalsEs}`);

const esgGoalsEn = `
      esgGoals: {
        title: "Key ESG Goals",
        subtitle: "Our progress towards a sustainable future.",
        carbon: "Carbon Footprint Reduction",
        water: "Water Conservation",
        waste: "Waste Reduction",
        energy: "Renewable Energy"
      },`;
newFile = newFile.replace(/title: "Sustainability Route",/g, `title: "Sustainability Route",${esgGoalsEn}`);

const esgGoalsFr = `
      esgGoals: {
        title: "Objectifs ESG Clés",
        subtitle: "Notre progression vers un avenir durable.",
        carbon: "Réduction de l'Empreinte Carbone",
        water: "Conservation de l'Eau",
        waste: "Réduction des Déchets",
        energy: "Énergie Renouvelable"
      },`;
newFile = newFile.replace(/title: "Route de la Durabilité",/g, `title: "Route de la Durabilité",${esgGoalsFr}`);

const esgGoalsIt = `
      esgGoals: {
        title: "Obiettivi ESG Chiave",
        subtitle: "Il nostro progresso verso un futuro sostenibile.",
        carbon: "Riduzione dell'Impronta di Carbonio",
        water: "Conservazione dell'Acqua",
        waste: "Riduzione dei Rifiuti",
        energy: "Energia Rinnovabile"
      },`;
newFile = newFile.replace(/title: "Percorso di Sostenibilità",/g, `title: "Percorso di Sostenibilità",${esgGoalsIt}`);

const esgGoalsPt = `
      esgGoals: {
        title: "Principais Metas ESG",
        subtitle: "Nosso progresso rumo a um futuro sustentável.",
        carbon: "Redução da Pegada de Carbono",
        water: "Conservação de Água",
        waste: "Redução de Resíduos",
        energy: "Energia Renovável"
      },`;
newFile = newFile.replace(/title: "Rota de Sustentabilidade",/g, `title: "Rota de Sustentabilidade",${esgGoalsPt}`);

// Add environmentalPolicy section
const envPolicyEs = `
  environmentalPolicy: {
    title: "Política Ambiental",
    subtitle: "Nuestro compromiso con el planeta",
    content: "En EHP, reconocemos nuestra responsabilidad de minimizar el impacto ambiental de nuestras operaciones y las de nuestros clientes. Nos comprometemos a promover prácticas sostenibles, reducir las emisiones de carbono, conservar los recursos naturales y apoyar la biodiversidad. Nuestra política ambiental guía cada decisión que tomamos, asegurando que la sostenibilidad esté integrada en el núcleo de nuestra estrategia empresarial."
  },`;
newFile = newFile.replace(/sustainabilityRoute: {/g, `${envPolicyEs}\n  sustainabilityRoute: {`);

const envPolicyEn = `
    environmentalPolicy: {
      title: "Environmental Policy",
      subtitle: "Our commitment to the planet",
      content: "At EHP, we recognize our responsibility to minimize the environmental impact of our operations and those of our clients. We are committed to promoting sustainable practices, reducing carbon emissions, conserving natural resources, and supporting biodiversity. Our environmental policy guides every decision we make, ensuring that sustainability is integrated into the core of our business strategy."
    },`;
newFile = newFile.replace(/sustainabilityRoute: {/g, `${envPolicyEn}\n    sustainabilityRoute: {`);

const envPolicyFr = `
    environmentalPolicy: {
      title: "Politique Environnementale",
      subtitle: "Notre engagement envers la planète",
      content: "Chez EHP, nous reconnaissons notre responsabilité de minimiser l'impact environnemental de nos opérations et de celles de nos clients. Nous nous engageons à promouvoir des pratiques durables, à réduire les émissions de carbone, à conserver les ressources naturelles et à soutenir la biodiversité. Notre politique environnementale guide chaque décision que nous prenons, en veillant à ce que la durabilité soit intégrée au cœur de notre stratégie d'entreprise."
    },`;
newFile = newFile.replace(/sustainabilityRoute: {/g, `${envPolicyFr}\n    sustainabilityRoute: {`);

const envPolicyIt = `
    environmentalPolicy: {
      title: "Politica Ambientale",
      subtitle: "Il nostro impegno per il pianeta",
      content: "In EHP, riconosciamo la nostra responsabilità nel ridurre al minimo l'impatto ambientale delle nostre operazioni e di quelle dei nostri clienti. Ci impegniamo a promuovere pratiche sostenibili, ridurre le emissioni di carbonio, conservare le risorse naturali e sostenere la biodiversità. La nostra politica ambientale guida ogni decisione che prendiamo, assicurando che la sostenibilità sia integrata nel cuore della nostra strategia aziendale."
    },`;
newFile = newFile.replace(/sustainabilityRoute: {/g, `${envPolicyIt}\n    sustainabilityRoute: {`);

const envPolicyPt = `
    environmentalPolicy: {
      title: "Política Ambiental",
      subtitle: "Nosso compromisso com o planeta",
      content: "Na EHP, reconhecemos nossa responsabilidade de minimizar o impacto ambiental de nossas operações e das de nossos clientes. Estamos comprometidos em promover práticas sustentáveis, reduzir as emissões de carbono, conservar os recursos naturais e apoiar a biodiversidade. Nossa política ambiental orienta cada decisão que tomamos, garantindo que a sustentabilidade esteja integrada ao núcleo de nossa estratégia de negócios."
    },`;
newFile = newFile.replace(/sustainabilityRoute: {/g, `${envPolicyPt}\n    sustainabilityRoute: {`);

fs.writeFileSync('lib/i18n/translations.ts', newFile);
