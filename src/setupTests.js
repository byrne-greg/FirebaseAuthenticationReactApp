import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";

// Configure Enzyme
configure({ adapter: new Adapter() });

// Ensure any error/warning/log output to console is flagged as a failing test
global.console.error = error => {
  throw new Error(error);
};
global.console.warn = error => {
  throw new Error(error);
};
global.console.log = error => {
  throw new Error(error);
};

// Setup Snapshot Serializer
expect.addSnapshotSerializer(createSerializer({ noKey: true, mode: "deep" }));
