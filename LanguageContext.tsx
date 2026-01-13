
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ES' | 'EN';

interface Translations {
  [key: string]: {
    [K in Language]: string | string[] | any;
  };
}

export const translations: Translations = {
  nav: {
    ES: { request: "Auditar mi Negocio" },
    EN: { request: "Audit my Business" }
  },
  assistant: {
    ES: {
      title: "SISTEMA_CONSULTA_DXOF+",
      status: "CONEXIÓN_SEGURA_ACTIVA",
      placeholder: "Describa el activo o decisión a auditar...",
      intro: "Iniciando protocolo de validación técnica. Describa el material decisional (proceso, escala, tecnología) para análisis forense.",
      error: "Error de transmisión. Reintente protocolo.",
      warning: "ADVERTENCIA: Activo de alta sensibilidad detectado."
    },
    EN: {
      title: "DXOF+_QUERY_SYSTEM",
      status: "SECURE_CONNECTION_ACTIVE",
      placeholder: "Describe the asset or decision to audit...",
      intro: "Initiating technical validation protocol. Describe the decisional material (process, scale, technology) for forensic analysis.",
      error: "Transmission error. Retry protocol.",
      warning: "WARNING: High sensitivity asset detected."
    }
  },
  hero: {
    ES: {
      headline: "DXOF+. Tu Empresa bajo Control. Siempre.",
      subheadline: "No dejes que el software tome el control de tu balance. Implementamos el Blindaje Decisional (RACI-AI) que protege tu responsabilidad legal y garantiza rentabilidad real.",
      alert: "ESTATUS: EXPOSICIÓN FIDUCIARIA CRÍTICA",
      cta: "QUIERO BLINDAR MI NEGOCIO"
    },
    EN: {
      headline: "DXOF+. Your Company in Control. Always.",
      subheadline: "Don't let software take control of your balance sheet. We implement Decisional Shielding (RACI-AI) that protects your legal liability and guarantees real profitability.",
      alert: "STATUS: CRITICAL FIDUCIARY EXPOSURE",
      cta: "SHIELD MY BUSINESS NOW"
    }
  },
  problem: {
    ES: {
      title: "El Coste de la",
      title_accent: "Exposición.",
      subtitle: "La automatización sin gobierno es una bomba de tiempo para tu patrimonio y la continuidad del negocio.",
      p1_title: "Responsabilidad Ciega",
      p1_desc: "Sin un 'Accountable' humano único por decisión, el riesgo legal recae directamente en el Directorio.",
      p1_case_title: "ANÁLISIS DE FALLO: RESPONSABILIDAD",
      p1_case_text: "Vacío legal: Ante un error algorítmico masivo, la empresa carece de una línea de defensa fiduciaria clara.",
      p1_evidence: "CASO DE REFERENCIA: Air Canada (2024). Un tribunal dictaminó que la aerolínea es legalmente responsable de las promesas erróneas de su chatbot, sentando un precedente de responsabilidad directa sobre el software no supervisado.",
      p2_title: "Fuga de Capital AI",
      p2_desc: "El 'Shadow AI' (uso de IA no controlada) quema recursos sin KPIs de negocio auditables.",
      p2_case_title: "ANÁLISIS DE FALLO: RETORNO",
      p2_case_text: "Inversiones de $1M+ en modelos 'Black Box' que no reportan impacto directo al EBTIDA.",
      p2_evidence: "CASO DE REFERENCIA: Zillow Offers (2021). El cierre de su unidad de compra algorítmica de viviendas resultó en pérdidas de $304M debido a la incapacidad del modelo para predecir precios reales de mercado sin veto humano experto.",
      p3_title: "Escala Ingobernable",
      p3_desc: "No puedes escalar procesos que no puedes auditar en tiempo real. El miedo frena tu crecimiento.",
      p3_case_title: "ANÁLISIS DE FALLO: ESCALABILIDAD",
      p3_case_text: "Riesgo sistémico: Decisiones automáticas erróneas replicadas a escala global en milisegundos.",
      p3_evidence: "CASO DE REFERENCIA: Knight Capital Group (2012). Un error de despliegue en un algoritmo de trading causó pérdidas de $440M en solo 45 minutos, demostrando que la velocidad de ejecución sin 'Kill-Switches' fiduciarios es letal."
    },
    EN: {
      title: "The Cost of",
      title_accent: "Exposure.",
      subtitle: "Automation without governance is a ticking time bomb for your assets and business continuity.",
      p1_title: "Blind Accountability",
      p1_desc: "Without a unique human 'Accountable' per decision, legal risk falls directly on the Board.",
      p1_case_title: "FAILURE ANALYSIS: ACCOUNTABILITY",
      p1_case_text: "Legal vacuum: In a massive algorithmic error, the company lacks a clear fiduciary line of defense.",
      p1_evidence: "REFERENCE CASE: Air Canada (2024). A tribunal ruled the airline is legally liable for its chatbot's erroneous promises, setting a precedent for direct liability over unsupervised software.",
      p2_title: "AI Capital Leak",
      p2_desc: "Shadow AI (uncontrolled AI usage) burns resources without auditable business KPIs.",
      p2_case_title: "FAILURE ANALYSIS: ROI",
      p2_case_text: "$1M+ investments in 'Black Box' models that fail to report direct EBITDA impact.",
      p2_evidence: "REFERENCE CASE: Zillow Offers (2021). The closure of its algorithmic home-buying unit resulted in $304M losses due to the model's inability to predict real market prices without expert human veto.",
      p3_title: "Ungovernable Scale",
      p3_desc: "You cannot scale processes you cannot audit in real-time. Fear stalls your growth.",
      p3_case_title: "FAILURE ANALYSIS: SCALABILITY",
      p3_case_text: "Systemic risk: Erroneous automatic decisions replicated at global scale in milliseconds.",
      p3_evidence: "REFERENCE CASE: Knight Capital Group (2012). A deployment glitch in a trading algorithm caused $440M losses in just 45 minutes, proving that execution speed without fiduciary 'Kill-Switches' is lethal."
    }
  },
  maturity: {
    ES: {
      title: "Diagnóstico de Madurez",
      subtitle: "¿Qué tan segura es tu operación?",
      l1: "Riesgo Invisible (Nivel 0)",
      l1_d: "Tecnología sin dueño humano asignado.",
      l1_p: "Shadow AI Discovery Protocol. Identificación técnica de activos no gobernados y brechas de seguridad fiduciaria.",
      l2: "Inversión Ciega",
      l2_d: "Gasto técnico sin KPIs económicos.",
      l2_p: "Economic ROI Mapping. Atribución técnica de valor a cada ciclo de decisión automatizado para proteger el flujo de caja.",
      l3: "Control Activo",
      l3_d: "Reglas básicas con riesgos de desvío.",
      l3_p: "RACI-AI Governance. Implementación de 'Kill-Switches' manuales y designación técnica de responsables de sistema.",
      l4: "Operación Blindada",
      l4_d: "Trazabilidad fiduciaria total ante ley.",
      l4_p: "Decisional Ledger Protocol. Registro inmutable (log) de la lógica algorítmica para defensa legal y auditoría externa.",
      l5: "Ventaja Sistémica",
      l5_d: "Escalado masivo con riesgo cero.",
      l5_p: "Autonomous Sovereignty. Orquestación de decisiones competitivas con veto humano instantáneo. Ventaja de mercado real.",
      cta: "AUDITAR MI NIVEL DE RIESGO"
    },
    EN: {
      title: "Maturity Diagnostic",
      subtitle: "How secure is your operation?",
      l1: "Invisible Risk (Level 0)",
      l1_d: "Technology without assigned human ownership.",
      l1_p: "Shadow AI Discovery Protocol. Technical identification of ungoverned assets and fiduciary security gaps.",
      l2: "Blind Investment",
      l2_d: "Tech spending without economic KPIs.",
      l2_p: "Economic ROI Mapping. Technical value attribution to each automated decision cycle to protect cash flow.",
      l3: "Active Control",
      l3_d: "Basic rules with drift risks.",
      l3_p: "RACI-AI Governance. Implementation of manual 'Kill-Switches' and technical designation of system owners.",
      l4: "Shielded Operation",
      l4_d: "Total fiduciary traceability before the law.",
      l4_p: "Decisional Ledger Protocol. Immutable logging of algorithmic logic for legal defense and external auditing.",
      l5: "Systemic Advantage",
      l5_d: "Massive scaling with zero risk.",
      l5_p: "Autonomous Sovereignty. Orchestration of competitive decisions with instant human veto. Real market advantage.",
      cta: "AUDIT MY RISK LEVEL"
    }
  },
  dxof: {
    ES: {
      title: "Arquitectura",
      title_accent: "DXOF+.",
      protocol: "LAYER_",
      initiatives: "Intención de Negocio",
      role1: "¿Qué queremos ganar?",
      orchestrator: "Estructura RACI",
      role2: "¿Quién firma la decisión?",
      operative: "Lógica Explicable",
      role3: "¿Por qué se decidió esto?",
      observer: "Control Fiduciario",
      role4: "¿Cómo detenemos el error?",
      footer: "Convertimos la complejidad técnica en una operación de negocio defendible."
    },
    EN: {
      title: "Architecture",
      title_accent: "DXOF+.",
      protocol: "LAYER_",
      initiatives: "Business Intent",
      role1: "What do we want to gain?",
      orchestrator: "RACI Structure",
      role2: "Who signs the decision?",
      operative: "Explainable Logic",
      role3: "Why was this decided?",
      observer: "Fiduciary Control",
      role4: "How do we stop the error?",
      footer: "We turn technical complexity into a defensible business operation."
    }
  },
  services: {
    ES: {
      title: "Soluciones de",
      title_accent: "Gobierno.",
      s1: "Auditoría de Control",
      s1_desc: "Análisis forense de tu deuda decisional y detección de Shadow AI en 48h.",
      s2: "Diseño de Blindaje",
      s2_desc: "Protocolo RACI-AI: Manual de reglas y responsables para sistemas autónomos.",
      s3: "Escalado Seguro",
      s3_desc: "Implementación de Decisional Ledgers para una trazabilidad legal absoluta.",
      cta: "HABLAR CON UN CONSULTOR",
      modal_title: "Detalles del Blindaje",
      protocol_title: "PROTOCOLO TÉCNICO",
      deliverable: "ENTREGABLE FINAL",
      deliverable_text: "Certificación de Cumplimiento Fiduciario DXOF+",
      p1_protocol: "Mapeo de activos decisionales, auditoría de logs y detección de 'Shadow AI' mediante inspección de flujos de datos.",
      p1_kpi: "Reducción de exposición legal no contabilizada y optimización de costes de infraestructura redundante.",
      p2_protocol: "Definición de matrices RACI-AI, establecimiento de umbrales de escalado humano y diseño de Kill-Switches de emergencia.",
      p2_kpi: "Establecimiento de una línea de responsabilidad legal ininterrumpida ante socios y reguladores.",
      p3_protocol: "Despliegue de Decisional Ledgers (registros inmutables) y orquestación de soberanía de datos en entornos multicloud.",
      p3_kpi: "Incremento del 400% en la velocidad de decisión sin aumento del riesgo operativo o fiduciario."
    },
    EN: {
      title: "Governance",
      title_accent: "Solutions.",
      s1: "Control Audit",
      s1_desc: "Forensic analysis of decisional debt and Shadow AI detection in 48h.",
      s2: "Shielding Design",
      s2_desc: "RACI-AI Protocol: Rulebook and owners for autonomous systems.",
      s3: "Secure Scaling",
      s3_desc: "Implementation of Decisional Ledgers for absolute legal traceability.",
      cta: "TALK TO A CONSULTANT",
      modal_title: "Shielding Details",
      protocol_title: "TECHNICAL PROTOCOL",
      deliverable: "FINAL DELIVERABLE",
      deliverable_text: "DXOF+ Fiduciary Compliance Certification",
      p1_protocol: "Mapping of decisional assets, log auditing, and 'Shadow AI' detection through data flow inspection.",
      p1_kpi: "Reduction of unrecorded legal exposure and optimization of redundant infrastructure costs.",
      p2_protocol: "Definition of RACI-AI matrices, establishment of human escalation thresholds, and emergency Kill-Switch design.",
      p2_kpi: "Establishment of an uninterrupted line of legal liability to partners and regulators.",
      p3_protocol: "Deployment of Decisional Ledgers (immutable logs) and data sovereignty orchestration in multicloud environments.",
      p3_kpi: "400% increase in decision speed without increase in operational or fiduciary risk."
    }
  },
  registration: {
    ES: {
      access: "SISTEMA_AUDITORIA",
      title: "SOLICITAR",
      accent: "BLINDAJE",
      label_id: "DECISOR PRINCIPAL",
      placeholder_id: "TU NOMBRE Y CARGO",
      label_link: "CANAL CORPORATIVO",
      placeholder_link: "EMAIL O TELÉFONO PROFESIONAL",
      label_magnitude: "EXPOSICIÓN ESTIMADA",
      mag_1: "LOCAL / PILOTO",
      mag_2: "EMPRESA NACIONAL",
      mag_3: "CONTINENTAL / ESTRATÉGICO",
      mag_4: "GLOBAL / CRÍTICO",
      submit: "ENVIAR PARA EVALUACIÓN",
      encryption: "AES_256_FIPS_COMPLIANT_SSL",
      ip_log: "IP_RECORDED_BY_DXOF+",
      sent_title: "PETICIÓN RECIBIDA",
      sent_sub: "Analizando disponibilidad de Consultor de Gobierno Senior.",
      wait: "RESPUESTA DIRECTA EN < 24H"
    },
    EN: {
      access: "AUDIT_SYSTEM",
      title: "REQUEST",
      accent: "SHIELDING",
      label_id: "PRINCIPAL DECISOR",
      placeholder_id: "NAME AND TITLE",
      label_link: "CORPORATE CHANNEL",
      placeholder_link: "CORPORATE EMAIL OR PHONE",
      label_magnitude: "ESTIMATED EXPOSURE",
      mag_1: "LOCAL / PILOT",
      mag_2: "NATIONAL COMPANY",
      mag_3: "CONTINENTAL / STRATEGIC",
      mag_4: "GLOBAL / CRITICAL",
      submit: "SUBMIT FOR EVALUATION",
      encryption: "AES_256_FIPS_COMPLIANT_SSL",
      ip_log: "IP_RECORDED_BY_DXOF+",
      sent_title: "REQUEST RECEIVED",
      sent_sub: "Analyzing Senior Governance Consultant availability.",
      wait: "DIRECT RESPONSE IN < 24H"
    }
  },
  certification: {
    ES: {
      badge: "CERTIFICACIÓN DXOF+",
      title: "LIDERAZGO DE",
      subtitle: "SISTEMAS",
      desc: "No solo técnica. Gobernanza real para el mundo real."
    },
    EN: {
      badge: "DXOF+ CERTIFICATION",
      title: "SYSTEMS",
      subtitle: "LEADERSHIP",
      desc: "Not just technical. Real governance for the real world."
    }
  },
  footer: {
    ES: { rights: "DXOF+ | EL MARCO DE CONTROL EMPRESARIAL.", p1: "Privacidad", p2: "Metodología Técnica", p3: "Legal", p4: "Assessment" },
    EN: { rights: "DXOF+ | THE BUSINESS CONTROL FRAMEWORK.", p1: "Privacy", p2: "Technical Methodology", p3: "Legal", p4: "Assessment" }
  },
  value: {
    ES: {
      line1: "EL FUTURO NO SE TRATA DE QUIÉN TIENE LA MEJOR IA.",
      line2: "SINO DE QUIÉN LA CONTROLA.",
      label: "MANDATO DXOF+"
    },
    EN: {
      line1: "THE FUTURE IS NOT ABOUT WHO HAS THE BEST AI.",
      line2: "BUT ABOUT WHO CONTROLS IT.",
      label: "DXOF+ MANDATE"
    }
  },
  whatIsNot: {
    ES: {
      title: "LO que NO SOMOS",
      not_a: "NO ES UN",
      copilot: "COPILOTO",
      no_es: "NO ES UN",
      prompt: "PROMPT",
      auto: "AUTOMATISMO",
      system_mandate: "MANDATO DE SISTEMA DXOF+ V4.1"
    },
    EN: {
      title: "WHAT WE ARE NOT",
      not_a: "IT IS NOT A",
      copilot: "COPILOT",
      no_es: "IT IS NOT A",
      prompt: "PROMPT",
      auto: "AUTOMATION",
      system_mandate: "DXOF+ SYSTEM MANDATE V4.1"
    }
  },
  manifesto: {
    ES: {
      main_1: "Soberanía Decisional",
      detail_1: "Recupera el control final sobre cada decisión automatizada que impacta tu balance.",
      main_2: "Blindaje Fiduciario",
      detail_2: "Protegemos a los directores de responsabilidades legales imprevistas derivadas de errores algorítmicos.",
      main_3: "Rentabilidad Auditable",
      detail_3: "Cada ciclo de IA debe reportar un KPI de negocio claro y directo al EBITDA.",
      sub: "EL MANIFIESTO DEL CONTROL",
      footer: "ORDEN // PODER // RENTABILIDAD"
    },
    EN: {
      main_1: "Decisional Sovereignty",
      detail_1: "Regain final control over every automated decision that impacts your balance sheet.",
      main_2: "Fiduciary Shielding",
      detail_2: "We protect directors from unforeseen legal liabilities arising from algorithmic errors.",
      main_3: "Auditable Profitability",
      detail_3: "Every AI cycle must report a clear and direct business KPI to EBITDA.",
      sub: "THE CONTROL MANIFESTO",
      footer: "ORDER // POWER // PROFITABILITY"
    }
  },
  cta: {
    ES: {
      alert: "VENTANA DE INTERVENCIÓN ABIERTA",
      title_1: "ELIMINA LA",
      title_accent: "INCERTIDUMBRE",
      title_2: "DE TU OPERACIÓN.",
      sub: "DXOF+ es la diferencia entre el caos algorítmico y una ventaja competitiva blindada por ley.",
      button: "INICIAR BLINDAJE EMPRESARIAL",
      footer: "CONSULTORÍA DE ALTO NIVEL // PLAZAS LIMITADAS POR TRIMESTRE"
    },
    EN: {
      alert: "INTERVENTION WINDOW OPEN",
      title_1: "ELIMINATE",
      title_accent: "UNCERTAINTY",
      title_2: "FROM YOUR OPERATION.",
      sub: "DXOF+ is the difference between algorithmic chaos and a competitive advantage shielded by law.",
      button: "START ENTERPRISE SHIELDING",
      footer: "HIGH-LEVEL CONSULTANCY // LIMITED SLOTS PER QUARTER"
    }
  }
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (section: string, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('ES');

  const t = (section: string, key: string): any => {
    return translations[section]?.[lang]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
