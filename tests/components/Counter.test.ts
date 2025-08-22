// @vitest-environment nuxt
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { fireEvent, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";

import Counter from "../../app/components/Counter.vue";

describe("Counter Component", () => {
  it("mounts properly", async () => {
    await renderSuspended(Counter);
    const heading = screen.getByText("Counter");
    const h3 = screen.getByRole("heading", { level: 3 });
    expect(heading).toBeDefined();
    expect(h3).toBeDefined();
  });
  it("has initial count of 0", async () => {
    await renderSuspended(Counter);
    const count = screen.getByText("0");
    expect(count).toBeDefined();
  });
  it("increments count when button is clicked", async () => {
    await renderSuspended(Counter);
    const button = screen.getByRole("button", { name: /increment/i });
    await fireEvent.click(button);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeDefined();
    expect(heading.innerHTML).toBe("1");
  });
});
