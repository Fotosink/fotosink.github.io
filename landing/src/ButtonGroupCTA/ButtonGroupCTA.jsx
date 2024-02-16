import { Button } from 'react-bulma-components';

export const ButtonGroupCTA = ({...props}) => {
  return (
    <div className="button-group">
      <a href="https://forms.gle/jedjSZYyjz8roFaq7" target="_blank">
        <Button color="primary">Request Access</Button>
      </a>
      <a href="https://files.fotosink.com" target="_blank">
        <Button color="white">Log In</Button>
      </a>
    </div>
  );
};
