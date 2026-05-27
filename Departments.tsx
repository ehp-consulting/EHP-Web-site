"use client";
import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Departments() {
  const { language } = useLanguage();

  const content = {
    es: {
      subtitle: "Cobertura departamental",
      title: "Intervención en cada área del hotel",
      desc: "Un hotel de lujo es un sistema donde cada departamento afecta la percepción del huésped. EHP trabaja con todos los departamentos de forma integrada, no aislada.",
      departments: [
        { name: "Recepción y Conserjería", desc: "Protocolo de llegada, salida, personalización del servicio, gestión de solicitudes y comunicación interdepartamental. Elevamos la primera y última impresión del huésped.", tags: ["Protocolos", "SOPs", "Formación"] },
        { name: "Housekeeping", desc: "Estándares de limpieza, inspección de habitaciones, presentación de amenidades, control de calidad post-servicio y cultura de detalle en cada turno.", tags: ["Checklists", "Inspecciones", "Calidad"] },
        { name: "Áreas Públicas", desc: "Limpieza, mantenimiento preventivo y presentación de espacios comunes, lobbies, accesos y exteriores como primera experiencia física del resort.", tags: ["Mantenimiento", "Presentación"] },
        { name: "Lavandería & Lencería", desc: "Estándares de calidad textil, protocolos de reposición, umbrales de reemplazo y presentación de ropa de cama y uniformes al nivel luxury exigido.", tags: ["Textiles", "Estándares"] },
        { name: "Alimentos & Bebidas", desc: "Servicio en restaurante, bar, in-room dining y eventos. Estándares de presentación, menú, personalización y tiempos de entrega alineados con la expectativa del huésped de lujo.", tags: ["F&B", "Menú", "Servicio"] },
        { name: "Cocina", desc: "Control de calidad culinaria, presentación de platos, higiene alimentaria, temperatura, tiempos de producción y coherencia de la oferta gastronómica con el posicionamiento del hotel.", tags: ["Calidad", "HACCP", "Presentación"] },
        { name: "Mantenimiento e Ingeniería", desc: "Sistemas de ticket preventivo, SLAs de respuesta, mantenimiento de infraestructura, instalaciones y equipamiento como garantía de la experiencia física del huésped.", tags: ["Preventivo", "SLA", "Infraestructura"] },
        { name: "Spa & Bienestar", desc: "Protocolo de experiencia wellness, tratamientos, presentación, higiene y coherencia de la oferta de bienestar con el estándar de lujo de la propiedad.", tags: ["Wellness", "Protocolo"] },
        { name: "Reservas", desc: "Protocolo de atención telefónica y digital, gestión de reservas, conocimiento del producto, personalización y conversión de contactos en estancias memorables.", tags: ["Conversión", "Personalización"] },
        { name: "Dirección y Management", desc: "Apoyo al equipo directivo en toma de decisiones, estructura organizativa, liderazgo de equipos, cultura interna y preparación para estándares internacionales de lujo.", tags: ["Liderazgo", "Estrategia", "Estructura"] }
      ]
    },
    en: {
      subtitle: "Departmental Coverage",
      title: "Intervention in Every Hotel Area",
      desc: "A luxury hotel is a system where every department affects guest perception. EHP works with all departments in an integrated manner, not in isolation.",
      departments: [
        { name: "Reception & Concierge", desc: "Arrival and departure protocols, service personalization, request management, and interdepartmental communication. We elevate the first and last impression.", tags: ["Protocols", "SOPs", "Training"] },
        { name: "Housekeeping", desc: "Cleaning standards, room inspection, amenities presentation, post-service quality control, and a culture of detail in every shift.", tags: ["Checklists", "Inspections", "Quality"] },
        { name: "Public Areas", desc: "Cleaning, preventive maintenance, and presentation of common spaces, lobbies, and exteriors as the first physical experience.", tags: ["Maintenance", "Presentation"] },
        { name: "Laundry & Linen", desc: "Textile quality standards, replenishment protocols, replacement thresholds, and presentation of bedding and uniforms at the required luxury level.", tags: ["Textiles", "Standards"] },
        { name: "Food & Beverage", desc: "Service in restaurants, bars, in-room dining, and events. Presentation standards, menu, personalization, and delivery times aligned with luxury expectations.", tags: ["F&B", "Menu", "Service"] },
        { name: "Kitchen", desc: "Culinary quality control, plating presentation, food hygiene, temperature, production times, and coherence of the gastronomic offer.", tags: ["Quality", "HACCP", "Presentation"] },
        { name: "Maintenance & Engineering", desc: "Preventive ticketing systems, response SLAs, infrastructure and equipment maintenance as a guarantee of the physical experience.", tags: ["Preventive", "SLA", "Infrastructure"] },
        { name: "Spa & Wellness", desc: "Wellness experience protocols, treatments, presentation, hygiene, and coherence of the wellness offer with luxury standards.", tags: ["Wellness", "Protocol"] },
        { name: "Reservations", desc: "Phone and digital service protocols, reservation management, product knowledge, personalization, and conversion of contacts into memorable stays.", tags: ["Conversion", "Personalization"] },
        { name: "Direction & Management", desc: "Support for the executive team in decision making, organizational structure, team leadership, internal culture, and preparation for international luxury standards.", tags: ["Leadership", "Strategy", "Structure"] }
      ]
    },
    fr: {
      subtitle: "Couverture Départementale",
      title: "Intervention dans Chaque Espace de l'Hôtel",
      desc: "Un hôtel de luxe est un système où chaque département affecte la perception du client. EHP travaille avec tous les départements de manière intégrée, et non isolée.",
      departments: [
        { name: "Réception & Conciergerie", desc: "Protocoles d'arrivée et de départ, personnalisation du service, gestion des demandes et communication interdépartementale. Nous sublimons la première et dernière impression.", tags: ["Protocoles", "SOPs", "Formation"] },
        { name: "Gouvernance", desc: "Normes de nettoyage, inspection des chambres, présentation des articles de toilette, contrôle qualité post-service et culture du détail à chaque cycle.", tags: ["Checklists", "Inspections", "Qualité"] },
        { name: "Espaces Publics", desc: "Nettoyage, entretien préventif et présentation des espaces communs, lobbys, accès et extérieurs comme première expérience physique.", tags: ["Entretien", "Présentation"] },
        { name: "Blanchisserie & Lingerie", desc: "Normes de qualité textile, protocoles de réapprovisionnement, seuils de remplacement et présentation de la literie et des uniformes au niveau de luxe exigé.", tags: ["Textiles", "Normes"] },
        { name: "Restauration & Boissons", desc: "Service en restaurant, bar, in-room dining et événements. Normes de présentation, menu, personnalisation et temps de livraison alignés sur les attentes de luxe.", tags: ["F&B", "Menu", "Service"] },
        { name: "Cuisine", desc: "Contrôle de la qualité culinaire, présentation des plats, hygiène alimentaire, température, temps de production et cohérence de l'offre gastronomique.", tags: ["Qualité", "HACCP", "Présentation"] },
        { name: "Maintenance & Ingénierie", desc: "Systèmes de tickets préventifs, SLA de réponse, maintenance des infrastructures, des installations et des équipements comme garantie de l'expérience physique.", tags: ["Préventive", "SLA", "Infrastructure"] },
        { name: "Spa & Bien-être", desc: "Protocoles d'expérience bien-être, soins, présentation, hygiène et cohérence de l'offre bien-être avec les standards de luxe.", tags: ["Bien-être", "Protocole"] },
        { name: "Réservations", desc: "Protocoles de service téléphonique et numérique, gestion des réservations, connaissance du produit, personnalisation et conversion des contacts en séjours mémorables.", tags: ["Conversion", "Personnalisation"] },
        { name: "Direction & Management", desc: "Soutien à l'équipe de direction dans la prise de décision, la structure organisationnelle, le leadership, la culture interne et la préparation aux normes de luxe internationales.", tags: ["Leadership", "Stratégie", "Structure"] }
      ]
    },
    it: {
      subtitle: "Copertura Dipartimentale",
      title: "Intervento in Ogni Area dell'Hotel",
      desc: "Un hotel di lusso è un sistema in cui ogni dipartimento influisce sulla percezione dell'ospite. EHP lavora con tutti i dipartimenti in modo integrato, non isolato.",
      departments: [
        { name: "Reception e Concierge", desc: "Protocolli di arrivo, partenza, personalizzazione del servizio, gestione delle richieste e comunicazione interdipartimentale. Eleviamo la prima e l'ultima impressione.", tags: ["Protocolli", "SOPs", "Formazione"] },
        { name: "Housekeeping", desc: "Standard di pulizia, ispezione delle camere, presentazione delle dotazioni, controllo qualità post-servizio e cultura del dettaglio in ogni turno.", tags: ["Checklist", "Ispezioni", "Qualità"] },
        { name: "Aree Pubbliche", desc: "Pulizia, manutenzione preventiva e presentazione di spazi comuni, hall, accessi ed esterni come prima esperienza fisica.", tags: ["Manutenzione", "Presentazione"] },
        { name: "Lavanderia e Biancheria", desc: "Standard di qualità tessile, protocolli di rifornimento, soglie di sostituzione e presentazione di biancheria e uniformi al livello di lusso richiesto.", tags: ["Tessile", "Standard"] },
        { name: "Food & Beverage", desc: "Servizio in ristoranti, bar, in-room dining ed eventi. Standard di presentazione, menù, personalizzazione e tempi di consegna allineati alle aspettative del lusso.", tags: ["F&B", "Menu", "Servizio"] },
        { name: "Cucina", desc: "Controllo della qualità culinaria, presentazione dei piatti, igiene alimentare, temperatura, tempi di produzione e coerenza dell'offerta gastronomica.", tags: ["Qualità", "HACCP", "Presentazione"] },
        { name: "Manutenzione e Ingegneria", desc: "Sistemi di ticket preventivi, SLA di risposta, manutenzione di infrastrutture, impianti e attrezzature come garanzia dell'esperienza fisica dell'ospite.", tags: ["Preventivo", "SLA", "Infrastruttura"] },
        { name: "Spa & Benessere", desc: "Protocollo dell'esperienza benessere, trattamenti, presentazione, igiene e coerenza dell'offerta benessere con lo standard di lusso della proprietà.", tags: ["Benessere", "Protocollo"] },
        { name: "Prenotazioni", desc: "Protocollo di attenzione telefonica e digitale, gestione delle prenotazioni, conoscenza del prodotto, personalizzazione e conversione dei contatti in soggiorni memorabili.", tags: ["Conversione", "Personalizzazione"] },
        { name: "Direzione e Management", desc: "Supporto al team direttivo nel processo decisionale, struttura organizzativa, leadership del team, cultura interna e preparazione agli standard internazionali del lusso.", tags: ["Leadership", "Strategia", "Struttura"] }
      ]
    },
    pt: {
      subtitle: "Cobertura Departamental",
      title: "Intervenção em Cada Área do Hotel",
      desc: "Um hotel de luxo é um sistema onde cada departamento afeta a percepção do hóspede. A EHP trabalha com todos os departamentos de forma integrada, não isolada.",
      departments: [
        { name: "Recepção e Concierge", desc: "Protocolo de chegada, saída, personalização do serviço, gestão de pedidos e comunicação interdepartamental. Elevamos a primeira e a última impressão do hóspede.", tags: ["Protocolos", "SOPs", "Formação"] },
        { name: "Housekeeping", desc: "Padrões de limpeza, inspeção de quartos, apresentação de comodidades, controle de qualidade pós-serviço e cultura de detalhe em cada turno.", tags: ["Checklists", "Inspeções", "Qualidade"] },
        { name: "Áreas Públicas", desc: "Limpeza, manutenção preventiva e apresentação de espaços comuns, lobbies, acessos e exteriores como primeira experiência física do resort.", tags: ["Manutenção", "Apresentação"] },
        { name: "Lavanderia e Rouparia", desc: "Padrões de qualidade têxtil, protocolos de reposição, limites de substituição e apresentação de roupas de cama e uniformes ao nível de luxo exigido.", tags: ["Têxteis", "Padrões"] },
        { name: "Alimentos e Bebidas", desc: "Serviço em restaurante, bar, in-room dining e eventos. Padrões de apresentação, cardápio, personalização e tempos de entrega alinhados com a expectativa do hóspede de luxo.", tags: ["F&B", "Menu", "Serviço"] },
        { name: "Cozinha", desc: "Controle de qualidade gastronômica, apresentação de pratos, higiene alimentar, temperatura, tempos de produção e coerência da oferta gastronômica com o posicionamento do hotel.", tags: ["Qualidade", "HACCP", "Apresentação"] },
        { name: "Manutenção e Engenharia", desc: "Sistemas de ticket preventivo, SLAs de resposta, manutenção de infraestrutura, instalações e equipamentos como garantia da experiência física do hóspede.", tags: ["Preventivo", "SLA", "Infraestrutura"] },
        { name: "Spa e Bem-estar", desc: "Protocolo de experiência de bem-estar, tratamentos, apresentação, higiene e coerência da oferta de bem-estar com o padrão de luxo da propriedade.", tags: ["Bem-estar", "Protocolo"] },
        { name: "Reservas", desc: "Protocolo de atendimento telefônico e digital, gestão de reservas, conhecimento do produto, personalização e conversão de contatos em estadias memoráveis.", tags: ["Conversão", "Personalização"] },
        { name: "Direção e Administração", desc: "Apoio à equipe executiva na tomada de decisões, estrutura organizacional, liderança de equipes, cultura interna e preparação para padrões internacionais de luxo.", tags: ["Liderança", "Estratégia", "Estrutura"] }
      ]
    }
  };

  const currentContent = content[(language as keyof typeof content)] || content.es;

  const icons = [
    <svg key={0} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>,
    <svg key={1} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>,
    <svg key={2} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064"/></svg>,
    <svg key={3} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>,
    <svg key={4} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M8 7h8M8 17h8M5 12h14"/></svg>,
    <svg key={5} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
    <svg key={6} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>,
    <svg key={7} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>,
    <svg key={8} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>,
    <svg key={9} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
  ];

  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-32 border-t border-white/5" id="departamentos">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-[#B0A387] font-semibold mb-4 block"
          >
            {currentContent.subtitle}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight"
          >
            {currentContent.title.split(/ (cada área del hotel|Every Hotel Area)/).map((part, i) => 
               i === 1 ? <React.Fragment key={i}><br/>{part}</React.Fragment> : <React.Fragment key={i}>{part}</React.Fragment>
            )}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 font-light leading-relaxed text-lg max-w-2xl"
          >
            {currentContent.desc}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentContent.departments.map((dept, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#121212] border border-white/5 p-8 flex flex-col group hover:border-[#B0A387]/30 transition-all duration-300"
            >
              <div className="mb-6 text-[#B0A387] group-hover:scale-110 transition-transform duration-300 origin-left">
                {icons[index] || icons[0]}
              </div>
              <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-[#B0A387] transition-colors">{dept.name}</h3>
              <p className="text-neutral-400 font-light leading-relaxed mb-8 flex-grow">
                {dept.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {dept.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-[10px] uppercase tracking-widest px-2 py-1 bg-[#1A1A1A] border border-white/10 text-neutral-400 rounded-sm group-hover:border-[#B0A387]/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
