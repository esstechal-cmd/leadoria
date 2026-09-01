import { useEffect } from 'react';

export default function DevisDecennale() {
  useEffect(() => {
    const scriptId = 'fde-script';

    // Éviter de charger le script plusieurs fois
    if (document.getElementById(scriptId)) return;

    const w = window as any;

    // Initialisation FDE
    w.fde = w.fde || [];

    w.fde.push([
      { slotId: '1788292787' },
      { siteKey: 'httpsleadflow-agencyfr' },
      { designId: '1276' },
      { contentType: 'singlepageVue' },
      { startedAt: performance.now() },
      { productId: '29' },
      { affiliateCampaignCode: '' }
    ]);

    // Chargement du script FDE
    const script = document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.type = 'module';
    script.src =
      'https://vue-singlepage.am.fgrp.net/fr/fdeam.nocache.module.js';

    const firstScript = document.getElementsByTagName('script')[0];

    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="w-full bg-white">
      <div id="fde-slot-am-1788292787"></div>
    </div>
  );
}