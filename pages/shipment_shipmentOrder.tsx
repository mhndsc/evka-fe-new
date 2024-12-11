import { NextPage } from 'next';
import React from 'react';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { ShipmentOrder } from '../src/modules/shipment_invoice';
import environment from '../src/relay/environment';

const ShipmentShipmentOrder: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ShipmentOrder />
    </RelayEnvironmentProvider>
  );
};

export default ShipmentShipmentOrder;
