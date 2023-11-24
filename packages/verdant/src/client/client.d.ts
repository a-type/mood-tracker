/** Generated types for Verdant client */
import type {
  Client as BaseClient,
  ClientDescriptor as BaseClientDescriptor,
  ClientDescriptorOptions as BaseClientDescriptorOptions,
  CollectionQueries,
  StorageSchema,
  Migration,
} from "@verdant-web/store";
export * from "@verdant-web/store";

export class Client<Presence = any, Profile = any> {
  readonly entries: CollectionQueries<Entry, EntryInit, EntryFilter>;

  sync: BaseClient<Presence, Profile>["sync"];
  undoHistory: BaseClient<Presence, Profile>["undoHistory"];
  namespace: BaseClient<Presence, Profile>["namespace"];
  entities: BaseClient<Presence, Profile>["entities"];
  // queryStore: BaseClient<Presence, Profile>['queryStore'];
  batch: BaseClient<Presence, Profile>["batch"];
  // files: BaseClient<Presence, Profile>['files'];
  close: BaseClient<Presence, Profile>["close"];
  export: BaseClient<Presence, Profile>["export"];
  import: BaseClient<Presence, Profile>["import"];
  subscribe: BaseClient<Presence, Profile>["subscribe"];
  stats: BaseClient<Presence, Profile>["stats"];
  __dangerous__resetLocal: BaseClient<
    Presence,
    Profile
  >["__dangerous__resetLocal"];
}

export interface ClientDescriptorOptions<Presence = any, Profile = any>
  extends Omit<
    BaseClientDescriptorOptions<Presence, Profile>,
    "schema" | "migrations"
  > {
  /** WARNING: overriding the schema is dangerous and almost definitely not what you want. */
  schema?: StorageSchema;
  /** WARNING: overriding the migrations is dangerous and almost definitely not what you want. */
  migrations?: Migration[];
}

export class ClientDescriptor<Presence = any, Profile = any> {
  constructor(init: ClientDescriptorOptions<Presence, Profile>);
  open: () => Promise<Client<Presence, Profile>>;
  close: () => Promise<void>;
  readonly current: Client<Presence, Profile> | null;
  readonly readyPromise: Promise<Client<Presence, Profile>>;
  readonly schema: StorageSchema;
  readonly namespace: string;
}

import { ObjectEntity, ListEntity, EntityFile } from "@verdant-web/store";

/** Generated types for Entry */

export type Entry = ObjectEntity<EntryInit, EntryDestructured, EntrySnapshot>;
export type EntryDate = string;
export type EntryMood = "worst" | "worse" | "same" | "better" | "best";
export type EntryInit = {
  date?: string;
  mood: "worst" | "worse" | "same" | "better" | "best";
};

export type EntryDestructured = {
  date: string;
  mood: "worst" | "worse" | "same" | "better" | "best";
};

export type EntrySnapshot = {
  date: string;
  mood: "worst" | "worse" | "same" | "better" | "best";
};

/** Index filters for Entry **/

export interface EntryDateMatchFilter {
  where: "date";
  equals: string;
  order?: "asc" | "desc";
}
export interface EntryDateRangeFilter {
  where: "date";
  gte?: string;
  gt?: string;
  lte?: string;
  lt?: string;
  order?: "asc" | "desc";
}
export interface EntryDateStartsWithFilter {
  where: "date";
  startsWith: string;
  order?: "asc" | "desc";
}
export type EntryFilter =
  | EntryDateMatchFilter
  | EntryDateRangeFilter
  | EntryDateStartsWithFilter;
