import { Header } from '@app/common/components/header/header.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';



export default {
  title: 'Common/Header',
  component: Header,
} as ComponentMeta<typeof Header>;


const Template: ComponentStory<typeof Header> = () => <Header />;

export const View = Template.bind({});