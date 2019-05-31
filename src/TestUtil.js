import React from "react";
import { MemoryRouter } from "react-router-dom";

const withTestRouter = Component => <MemoryRouter>{Component}</MemoryRouter>;

export { withTestRouter };
