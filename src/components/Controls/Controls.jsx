import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';

import { Flex } from '../Shared';
import { evolveBoard } from '../../actions/evolutions';

const Controls = ({ onEvolveBoard }) => {
  return (
    <Flex width="100%" direction="row" style={{ marginTop: 32 }}>
      <Button type="primary" onClick={onEvolveBoard}>
        Evolve!
      </Button>
    </Flex>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onEvolveBoard: () => dispatch(evolveBoard()),
});

export default connect(null, mapDispatchToProps)(Controls);
