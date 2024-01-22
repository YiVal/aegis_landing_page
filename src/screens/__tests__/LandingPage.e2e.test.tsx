import puppeteer from "puppeteer";

describe("LandingPage E2E test", () => {
  test('should display "5-Minute STEM Essays: Plagiarism-Free" text and "Start for Free" button on page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to your application's home page
    await page.goto("http://localhost:3000");

    // Check if "5-Minute STEM Essays: Plagiarism-Free" text is present on the page
    const titleTextContent = await page.evaluate(
      () => document.body.textContent,
    );
    expect(titleTextContent).toContain("5-Minute STEM Essays: Plagiarism-Free");

    // Check if "Start for Free" button is present on the page
    const buttonTextContent = await page.evaluate(
      () => document.body.textContent,
    );
    expect(buttonTextContent).toContain("Start for Free");

    await browser.close();
  });
});
