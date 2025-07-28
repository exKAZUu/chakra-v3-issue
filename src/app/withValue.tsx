import {setTimeout} from 'node:timers/promises';
import React from 'react';
import {ClientComponent} from '@/app/ClientComponent';

export function withValue(Page: React.FC<{ value: unknown }>): React.FC<{ value: unknown }> {
  return async function WithAuthorizationOnServer() {
    await setTimeout(1000);
    const value = { id: 'abc' };
    return (
        <ClientComponent value={value}>
          <Page value={value} />
        </ClientComponent>
    );
  };
}
