import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEllipsisVertical, 
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';

import routesConfig from '~/config/routes';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { 
    UploadIcon,
    MessageIcon,
    InboxIcon,
    ViewProfile,
    GetCoins,
    CreatorTools,
    Settings,
    Language,
    Feedback,
    Mode,
    LogOut,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <Language />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ]
        }
    },
    {
        icon: <Feedback />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <Mode />,
        title: 'Dark mode',
        children: {
            title: 'Mode',
            data: [
                {
                    type: 'mode',
                    title: 'Use device theme',
                },
                {
                    type: 'mode',
                    title: 'Dark mode',
                },
                {
                    type: 'mode',
                    title: 'Light mode',
                },
            ]
        }
    },
];

function Header() {
    const currentUser =  true

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            case 'creatorTools':
                // Handle creator tools
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <ViewProfile />,
            title: 'View profile',
            to: '/@anguyen',
        },
        {
            icon: <GetCoins />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <CreatorTools />,
            title: 'Creator tools',
            children: {
                title: 'Creator tools',
                data: [
                    {
                        type: 'creatorTools',
                        title: 'LIVE Studio',
                        to: '/studio',
                    },
                    {
                        type: 'creatorTools',
                        title: 'LIVE Creator Hub',
                        to: '/live/creators',
                    },
                ]
            }
        },
        {
            icon: <Settings />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <LogOut />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link 
                    to={routesConfig.home} 
                    className={cx('logo-link')}
                >
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                            <button className={cx('action-btn')}>
                                <UploadIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Message" placement="bottom">
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                                <span className={cx('badge')}>12</span>
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button text>Upload</Button>
                        <Button primary>Log in</Button>
                    </>
                )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image  
                                src='https://th.bing.com/th/id/OIP.Q4qJvu0XqguTnYAQQnm8XwHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7' 
                                className={cx('user-avatar')} 
                                alt="Nguyen Van A" 
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;