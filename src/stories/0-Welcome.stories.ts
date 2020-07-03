import Welcome from '@storybook/angular/dist/demo/welcome.component';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => ({
  component: Welcome,
  props: {},
});

ToStorybook.story = {
  name: 'to Storybook',
};
