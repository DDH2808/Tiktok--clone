import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEllipsisVertical, 
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

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
                <img src={images.logo} alt="Tiktok" />

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
                                src='https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/4703b652e37ff95a0a31396e16108dd1~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=39930&refresh_token=635c2e301f5bc5631c0c4300770d5298&x-expires=1723194000&x-signature=yl8XfBTlnVWgPsSM9ZiWrvXOiz8%3D&shp=a5d48078&shcp=81f88b70' 
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