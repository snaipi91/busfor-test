import React from 'react';
import { Text } from 'react-native';

import moment from 'moment';

const Time = (params) => (
        <Text>
            {moment(params.ms).format('DD MMMM hh:mm')}
        </Text>
    );

export default Time;