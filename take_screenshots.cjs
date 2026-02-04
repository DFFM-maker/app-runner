const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 720 });

  // Helper to take screenshot and wait
  const takeScreenshot = async (name) => {
    await page.waitForTimeout(1000); // Wait for animations
    await page.screenshot({ path: `verification/${name}.png` });
    console.log(`Saved ${name}.png`);
  };

  // 1. Chat Page (Home)
  await page.goto('http://localhost:5173/');
  await takeScreenshot('chat_page_blue');

  // 2. Library Page
  await page.goto('http://localhost:5173/library');
  await takeScreenshot('library_page_blue');

  // 3. API Management Page
  await page.goto('http://localhost:5173/api-management');
  await takeScreenshot('api_page_blue');

  // 4. Neural Map Page
  await page.goto('http://localhost:5173/neural-map');
  await takeScreenshot('neural_map_blue');

  // 5. Settings Modal (on Chat page)
  await page.goto('http://localhost:5173/');
  await page.click('text=Settings');
  await takeScreenshot('settings_modal_blue');

  await browser.close();
})();
