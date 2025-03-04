
import {
  MoonIconOutline,
  SunIconOutline
} from '@neo4j-ndl/react/icons';
import { Dispatch, memo, SetStateAction, useContext } from 'react';
import { IconButtonWithToolTip } from '../UI/IconButtonToolTip';
import { SKIP_AUTH, tooltips } from '../../utils/Constants';
import { ThemeWrapperContext } from '../../context/ThemeWrapper';
import { connectionState } from '../../types';
import Profile from '../User/Profile';

interface HeaderProp {
  chatOnly?: boolean;
  deleteOnClick?: () => void;
  setOpenConnection?: Dispatch<SetStateAction<connectionState>>;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProp> = () => {
  const { colorMode, toggleColorMode } = useContext(ThemeWrapperContext);
  return (
    <>
      <div
        className='n-bg-palette-neutral-bg-weak p-1'
        style={{ borderBottom: '1px solid rgb(var(--theme-palette-neutral-border-weak))' }}
      >
        <nav
          className='flex items-center justify-between flex-row'
          role='navigation'
          data-testid='navigation'
          id='navigation'
          aria-label='main navigation'
        >
            <section className='items-center justify-between flex-row  flex w-full'>
              <div className="sys-name w-full">
                <span>专业教学知识助手</span>
                <span className='info'>构建学科知识体系、实现知识关联可视化与智能问答</span>
              </div>
              <div>
                  <IconButtonWithToolTip
                    label={tooltips.theme}
                    text={tooltips.theme}
                    clean
                    size='large'
                    onClick={toggleColorMode}
                    placement='left'
                  >
                    {colorMode === 'dark' ? (
                      <span role='img' aria-label='sun'>
                        <SunIconOutline />
                      </span>
                    ) : (
                      <span role='img' aria-label='moon'>
                        <MoonIconOutline />
                      </span>
                    )}
                  </IconButtonWithToolTip>
                  {!SKIP_AUTH && <Profile />}
              </div>
            </section>
        </nav>
      </div>
      {/* <ChatModeToggle
        closeHandler={(_, reason) => {
          if (reason.type === 'backdropClick') {
            setShowChatModeOption(false);
          }
        }}
        open={showChatModeOption}
        menuAnchor={chatAnchor}
        isRoot={false}
      /> */}
    </>
  );
};
export default memo(Header);
