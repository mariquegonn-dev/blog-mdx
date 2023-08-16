import { OpenIcon, CloseIcon } from '@/components/Icons';

type ToggleProps = {
  isOpenMenu: boolean;
  handleToggleMenu: () => void;
};

export const ToggleButton = ({ isOpenMenu, handleToggleMenu }: ToggleProps) => {
  const title = isOpenMenu ? 'Fechar' : 'Abrir';
  return (
    <button onClick={handleToggleMenu} title={title}>
      {isOpenMenu && <CloseIcon size={32} data-testid="close-icon" />}
      {!isOpenMenu && <OpenIcon size={32} data-testid="open-icon" />}
    </button>
  );
};
