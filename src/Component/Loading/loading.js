import React from 'react';
import { Loader} from 'semantic-ui-react';

const Loading = ({ show }) => {
  return show && (
    <Loader active size='massive'>
      Loading...
    </Loader>
  );
}

export default Loading;