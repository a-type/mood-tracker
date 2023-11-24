/** @generated - do not modify this file. */

// src/schema.ts
import { collection, schema } from "@verdant-web/store";
var entries = collection({
  name: "entry",
  primaryKey: "date",
  fields: {
    date: {
      type: "string",
      default: () => {
        const today = /* @__PURE__ */ new Date();
        today.setHours(0, 0, 0, 0);
        return today.getTime().toString();
      }
    },
    mood: {
      type: "string",
      options: ["worst", "worse", "same", "better", "best"]
    }
  },
  indexes: {
    date: {
      field: "date"
    }
  }
});
var schema_default = schema({
  version: 1,
  collections: {
    entries
  }
});
export {
  schema_default as default
};
