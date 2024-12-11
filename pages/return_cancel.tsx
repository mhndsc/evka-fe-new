import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import ReturnCancelScreen from '../src/modules/return_cancel';
import environment from '../src/relay/environment';

const ReturnCancel: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ReturnCancelScreen />
    </RelayEnvironmentProvider>
  );
};

export default ReturnCancel;
