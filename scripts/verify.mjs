/** Production browser QA: run `npm run build && npm start`, then `npm run verify`. */
import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";

const base = process.env.PREVIEW_URL || "http://127.0.0.1:3000";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const output = "tmp/qa";
await mkdir(output, { recursive: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  reducedMotion: "reduce",
});
const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const report = {
  widths: [],
  routes: [],
  accessibility: [],
  interactions: [],
  errors,
};
try {
  await page.goto(base, { waitUntil: "networkidle" });
  const routes = await page
    .locator("a.project-card")
    .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
  assert.equal(routes.length, 4, "Four real case-study routes");
  for (const width of [320, 375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto(base, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    const overflowing = await page.evaluate(() => ({
      viewport: innerWidth,
      body: document.documentElement.scrollWidth,
    }));
    assert(
      overflowing.body <= overflowing.viewport,
      `Homepage overflow at ${width}: ${JSON.stringify(overflowing)}`,
    );
    for (const href of await page
      .locator('a[href^="#"]')
      .evaluateAll((links) => links.map((link) => link.getAttribute("href")))) {
      assert(
        await page.locator(`[id="${href.slice(1)}"]`).count(),
        `Missing anchor ${href}`,
      );
    }
    if (width === 375 || width === 1440) {
      const accessibility = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      report.accessibility.push({
        page: "/",
        width,
        violations: accessibility.violations,
      });
      assert.equal(
        accessibility.violations.length,
        0,
        `Accessibility violations at ${width}: ${JSON.stringify(accessibility.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => ({ target: n.target, summary: n.failureSummary })) })))}`,
      );
      for (const image of await page.locator("main img").all()) {
        await image.scrollIntoViewIfNeeded();
        await image.evaluate((el) => el.decode());
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({
        path: `${output}/home-${width}.png`,
        fullPage: true,
      });
    }
    if (width === 375) {
      await page.getByRole("button", { name: "Menu" }).click();
      assert.equal(
        await page
          .getByRole("button", { name: "Close" })
          .getAttribute("aria-expanded"),
        "true",
      );
      await page
        .getByRole("navigation", { name: "Main navigation" })
        .getByRole("link", { name: "About" })
        .click();
      assert.equal(
        await page
          .getByRole("button", { name: "Menu" })
          .getAttribute("aria-expanded"),
        "false",
      );
      report.interactions.push("Mobile menu opens, navigates, closes");
    }
    report.widths.push({ width, overflow: false });
    for (const route of routes) {
      const response = await page.goto(`${base}${route}`, {
        waitUntil: "networkidle",
      });
      assert.equal(response.status(), 200);
      assert.equal(await page.locator("main h1").count(), 1);
      const hasOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      );
      assert.equal(hasOverflow, false, `${route} overflows at ${width}`);
      if (width === 1440) {
        const accessibility = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
          .analyze();
        report.accessibility.push({
          page: route,
          width,
          violations: accessibility.violations,
        });
        assert.equal(
          accessibility.violations.length,
          0,
          `Accessibility: ${route}: ${JSON.stringify(accessibility.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })))}`,
        );
        report.routes.push({
          route,
          status: response.status(),
          title: await page.title(),
        });
      }
      if ((width === 375 || width === 1440) && route === routes[0])
        await page.screenshot({
          path: `${output}/case-${width}.png`,
          fullPage: true,
        });
    }
  }
  await page.goto(base, { waitUntil: "networkidle" });
  await page.keyboard.press("Tab");
  assert.equal(await page.locator(":focus").textContent(), "Skip to content");
  await page.keyboard.press("Enter");
  assert.equal(new URL(page.url()).hash, "#main");
  report.interactions.push("Keyboard skip link reaches main content");
  await page.locator("summary").click();
  await page
    .getByText("Student Mentor", { exact: true })
    .waitFor({ state: "visible" });
  report.interactions.push("Earlier experience expands");
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.getByRole("button", { name: "Copy email" }).click();
  assert.equal(
    await page.evaluate(() => navigator.clipboard.readText()),
    "jeremykulljaeggli@gmail.com",
  );
  await page
    .getByRole("status")
    .filter({ hasText: "Email address copied." })
    .waitFor();
  report.interactions.push(
    "Copy email writes to clipboard and announces success",
  );
  assert.equal(
    await page
      .locator(".flow-field canvas")
      .evaluate((el) => getComputedStyle(el).display),
    "none",
  );
  report.interactions.push("Reduced motion uses static SVG");
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForFunction(() =>
    document.querySelector(".flow-field").classList.contains("flow-active"),
  );
  await page.getByRole("button", { name: "Pause flow" }).click();
  assert.equal(
    await page
      .getByRole("button", { name: "Resume flow" })
      .getAttribute("aria-pressed"),
    "true",
  );
  await page.waitForFunction(
    () =>
      !document.querySelector(".flow-field").classList.contains("flow-active"),
  );
  await page.getByRole("button", { name: "Resume flow" }).click();
  await page.waitForFunction(() =>
    document.querySelector(".flow-field").classList.contains("flow-active"),
  );
  report.interactions.push("Flow animation can be paused and resumed");
  await page.locator("#about").scrollIntoViewIfNeeded();
  await page.waitForFunction(
    () =>
      !document.querySelector(".flow-field").classList.contains("flow-active"),
  );
  report.interactions.push(
    "Animated flow activates in view and stops off-screen",
  );
  const unknown = await page.goto(`${base}/work/does-not-exist`);
  assert.equal(unknown.status(), 404);
  report.interactions.push("Unknown project returns 404");
  const nojs = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 375, height: 812 },
  });
  const staticPage = await nojs.newPage();
  await staticPage.goto(base);
  assert.equal(await staticPage.locator("a.project-card").count(), 4);
  await staticPage.locator("a.project-card").first().click();
  assert.equal(
    await staticPage.locator("main h1").textContent(),
    "Learning credit-account representations with JEPA",
  );
  await nojs.close();
  report.interactions.push("Case-study navigation works without JavaScript");
  assert.deepEqual(errors, []);
  await writeFile(`${output}/report.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally {
  await browser.close();
}
