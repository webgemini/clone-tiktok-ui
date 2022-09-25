import {
    PersonUserIcon,
    CoinIcon,
    SettingIcon,
    LanguageIcon,
    FeedbackIcon,
    KeyboardIcon,
    LogoutIcon,
} from '~/components/Icons';

export const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        subMenu: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'ar',
                    title: 'العربية',
                },
                {
                    type: 'language',
                    code: 'bn',
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    type: 'language',
                    code: 'ceb',
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    type: 'language',
                    code: 'cz',
                    title: 'Čeština (Česká republika)',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

export const userMenu = [
    { icon: <PersonUserIcon />, title: 'View profile', to: '/@mrgem16?lang=en' },
    { icon: <CoinIcon />, title: 'Get coins', to: '/coin' },
    { icon: <SettingIcon />, title: 'Settings', to: '/setting' },
    ...MENU_ITEMS,
    { icon: <LogoutIcon />, title: 'Log out', to: '/logout', separate: true },
];

export { fakeApi, fakeApiBackUp } from './FakeAPI';
