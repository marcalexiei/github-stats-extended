import type { Page } from "@playwright/test";

/**
 * Fulfils the card endpoints: the `Display` stage fetches `https://<host>/api…`, which nothing serves here.
 *
 * @param page - The page to install the route handler on.
 */
export async function stubCardApi(page: Page): Promise<void> {
  // Pathname, not a `**/api**` glob: that also matches module URLs like `/src/wizard/api/user.ts`.
  // Install before a spec's own route for one `/api` endpoint, which then wins.
  await page.route(
    (url) => url.pathname === "/api" || url.pathname.startsWith("/api/"),
    (route) =>
      route.fulfill({
        status: 200,
        contentType: "image/svg+xml",
        body: '<svg xmlns="http://www.w3.org/2000/svg" width="495" height="195"></svg>',
      }),
  );
}
