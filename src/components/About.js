import React from 'react';
import { Typography, Space } from 'antd';

const { Title, Text } = Typography;

export default function About() {
    return(

            <Space direction="vertical">
            <Title>About This Web-Site</Title>
            <Text>
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Laboriosam odio perferendis 
            repudiandae voluptatum mollitia quibusdam 
            voluptas possimus, dolore voluptatem modi, 
            error pariatur consequatur ipsam, fugiat ab magni
             aliquid vero consequuntur.
            </Text>
            </Space>
          
    )
}