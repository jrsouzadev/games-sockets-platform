import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders", () => {
  const view = render(<App />);
  expect(view).not.toThrowError();
});
