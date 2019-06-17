
export type EventType =
  'V1.REQUIRE_CONTEXT' |
  'V1.CLOSE' |
  'V1.REQUIRE_PERMISSIONS'|
  'V1.SEND_ACTION' |
  'V1.SEND_ACTION_RESULT' |
  string;

export const SHELL_EVENTS = {
  Version1: {
    REQUIRE_CONTEXT: 'V1.REQUIRE_CONTEXT',
    CLOSE: 'V1.CLOSE',
    REQUIRE_PERMISSIONS: 'V1.REQUIRE_PERMISSIONS',
    SEND_ACTION: 'V1.SEND_ACTION',
    SEND_ACTION_RESULT: 'V1.SEND_ACTION_RESULT'
  },
  ERROR: 'ERROR'
};
