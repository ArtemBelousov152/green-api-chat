import { ChatPage } from 'pages';

import classNames from './app.module.scss';
import './styles/index.scss';

export const App = () => {
  return (
    <div className={classNames.app}>
      <ChatPage />
    </div>
  );
};
