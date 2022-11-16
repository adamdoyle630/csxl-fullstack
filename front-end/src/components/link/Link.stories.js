import React from 'react';
import Link from './Link';
import styled from 'styled-components';
import UserAvatar from '../UserAvatar';

// Helps with alignment
const Stack = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

// sets defaults for this component's stories
export default {
    component: Link,
    title: 'Link',
};

// TODO: return story
const Template = args => {
    return (
        <Stack>
            <Link {...args}/>
            <UserAvatar src="https://campusrec.unc.edu/wp-content/uploads/2015/08/image.jpg" alt="old well"/>
        </Stack>
    );
}

// I've pre-defined arguments for our Default story – feel free to edit!
export const Default = Template.bind({});
Default.args = {
    link: 'https://www.google.com',
    title: "GO TO GOOGLE"
}