import { Icon } from '@/shared/ui';
import './loading.scss';

const Loading = () => {
  return (
    <div className="loader">
      <div className="coin">
        <span className="engraving">
          <Icon iconId="logo-subtract" width={250} height={250} />
        </span>
      </div>
    </div>
  );
};

export default Loading;
