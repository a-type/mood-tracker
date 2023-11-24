import { collection, schema } from '@verdant-web/store';
import { getTodayKey } from 'src/tools.js';

const entries = collection({
  name: 'entry',
  primaryKey: 'date',
  fields: {
    date: {
      type: 'string',
      default: getTodayKey,
    },
    mood: {
      type: 'string',
      options: ['worst', 'worse', 'same', 'better', 'best'],
    },
  },
  indexes: {
    date: {
      field: 'date',
    },
  },
});

export default schema({
  version: 1,
  collections: {
    entries,
  },
});
