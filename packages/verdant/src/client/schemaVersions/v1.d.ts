import { StorageSchema } from "@verdant-web/common";
declare const schema: StorageSchema;
export default schema;

export type EntrySnapshot = {
  date: string;
  mood: "worst" | "worse" | "same" | "better" | "best";
};
export type EntryInit = {
  date?: string;
  mood: "worst" | "worse" | "same" | "better" | "best";
};

export type MigrationTypes = {
  entries: { init: EntryInit; snapshot: EntrySnapshot };
};
