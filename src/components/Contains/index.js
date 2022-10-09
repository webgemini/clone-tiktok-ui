import {
    PersonUserIcon,
    CoinIcon,
    SettingIcon,
    LanguageIcon,
    FeedbackIcon,
    KeyboardIcon,
    LogoutIcon,
    ShareEmbedIcon,
    ShareMessageIcon,
    ShareFacebookIcon,
    ShareWhatAppIcon,
    CopyLinkIcon,
    ShareTwitterIcon,
    ShareLinkedinIcon,
    ShareTelegramIcon,
    ShareEmailIcon,
    ShareLineIcon,
    SharePinterestIcon,
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

export const shareLinks = [
    {
        id: 1,
        icon: <ShareEmbedIcon />,
        title: 'Embed',
        to: '/',
    },
    {
        id: 2,
        icon: <ShareMessageIcon />,
        title: 'Send to friends',
        to: '/',
    },
    {
        id: 3,
        icon: <ShareFacebookIcon />,
        title: 'Share to Facebook',
        to: '/',
    },
    {
        id: 4,
        icon: <ShareWhatAppIcon />,
        title: 'Share to WhatsApp',
        to: '/',
    },
    {
        id: 5,
        icon: <CopyLinkIcon />,
        title: 'Copy link',
        to: '/',
    },
    {
        id: 6,
        icon: <ShareTwitterIcon />,
        title: 'Share to Twitter',
        to: '/',
    },
    {
        id: 7,
        icon: <ShareLinkedinIcon />,
        title: 'Share to LinkedIn',
        to: '/',
    },
    {
        id: 8,
        icon: <ShareTelegramIcon />,
        title: 'Share to Telegram',
        to: '/',
    },
    {
        id: 9,
        icon: <ShareEmailIcon />,
        title: 'Share to Email',
        to: '/',
    },
    {
        id: 10,
        icon: <ShareLineIcon />,
        title: 'Share to Line',
        to: '/',
    },
    {
        id: 11,
        icon: <SharePinterestIcon />,
        title: 'Share to Pinterest',
        to: '/',
    },
];

export const videosForYou = [
    {
        id: 1,
        uid: 168,
        content_video: 'đủ để ăn đứt chủ link nhạc.',
        tags_content: '#taybannha🇪🇸, #congchuataybannha👑, #princessleonor',
        music_content: 'nhạc chế - Trung Ruồi',
        url_video: require('~/assets/videos/video-1.mp4'),
        img_placeholder_video: require('~/assets/images/imgVideo/img-1.jpeg'),
        likes_count_video: '1.6M',
        comments_count_video: '7932',
        shares_count_video: '7686',
    },
    {
        id: 2,
        uid: 213,
        content_video: 'Anh vì nước , còn em vì điều ước...!',
        tags_content: '#🥺🥺🥺🥺',
        music_content: 'nhạc nền - Bình Võ 🚕 DVDl Bình Phước ❤️',
        url_video: require('~/assets/videos/video-2.mp4'),
        img_placeholder_video: require('~/assets/images/imgVideo/img-2.jpeg'),
        likes_count_video: '168K',
        comments_count_video: '936',
        shares_count_video: '686',
    },
    {
        id: 3,
        uid: 112,
        content_video: 'Còn một cái clip rung đầu nữa up nốttt 🤣',
        tags_content: '#hyeepham #ikonix #idolface',
        music_content: 'original sound - Chú Gián Nhỏ chơi nhạc',
        url_video: require('~/assets/videos/video-3.mp4'),
        img_placeholder_video: require('~/assets/images/imgVideo/img-3.jpeg'),
        likes_count_video: '68K',
        comments_count_video: '368',
        shares_count_video: '286',
    },
    {
        id: 4,
        uid: 116,
        content_video: 'Pet yêu đời kiểu 😘😘',
        tags_content: '#popsww #pets #xuhuong',
        music_content: 'Love You So - The King Khan & BBQ Show',
        url_video: require('~/assets/videos/video-4.mp4'),
        img_placeholder_video: require('~/assets/images/imgVideo/img-4.jpeg'),
        likes_count_video: '68K',
        comments_count_video: '368',
        shares_count_video: '286',
    },
    {
        id: 5,
        uid: 75,
        content_video: 'Ở đây không tiếp nỗi buồn nha 😍😍',
        tags_content: '#popsww #pets #xuhuong',
        music_content: 'Love You So - The King Khan & BBQ Show',
        url_video: require('~/assets/videos/video-5.mp4'),
        img_placeholder_video: require('~/assets/images/imgVideo/img-5.jpeg'),
        likes_count_video: '1.6M',
        comments_count_video: '7932',
        shares_count_video: '7686',
    },
    {
        id: 6,
        uid: 170,
        content_video: 'Y như cục bông Gòn di động vậy 😘😘',
        tags_content: '#popsww #pets #xuhuong',
        music_content: 'JonelSagaynoRemix🇵🇭 - JonelSagaynoRemix🇵🇭',
        url_video: require('~/assets/videos/video-6.mp4'),
        img_placeholder_video: require('~/assets/images/imgVideo/img-6.jpeg'),
        likes_count_video: '1.6M',
        comments_count_video: '7932',
        shares_count_video: '7986',
    },
    {
        id: 7,
        uid: 187,
        content_video: 'Ở đây không tiếp nỗi buồn nha 😍😍',
        tags_content: '#popsww #pets #xuhuong',
        music_content: 'Love You So - The King Khan & BBQ Show',
        url_video: require('~/assets/videos/video-5.mp4'),
        img_placeholder_video: require('~/assets/images/imgVideo/img-5.jpeg'),
        likes_count_video: '1.6M',
        comments_count_video: '7932',
        shares_count_video: '7686',
    },
    {
        id: 8,
        uid: 12,
        content_video: 'Y như cục bông Gòn di động vậy 😘😘',
        tags_content: '#popsww #pets #xuhuong',
        music_content: 'JonelSagaynoRemix🇵🇭 - JonelSagaynoRemix🇵🇭',
        url_video: require('~/assets/videos/video-6.mp4'),
        img_placeholder_video: require('~/assets/images/imgVideo/img-6.jpeg'),
        likes_count_video: '1.6M',
        comments_count_video: '7932',
        shares_count_video: '7686',
    },
    {
        id: 9,
        uid: 10,
        content_video: 'đủ để ăn đứt chủ link nhạc.',
        tags_content: '#taybannha🇪🇸, #congchuataybannha👑, #princessleonor',
        music_content: 'nhạc chế - Trung Ruồi',
        url_video: require('~/assets/videos/video-1.mp4'),
        img_placeholder_video: require('~/assets/images/imgVideo/img-1.jpeg'),
        likes_count_video: '1.6M',
        comments_count_video: '7932',
        shares_count_video: '7686',
    },
    {
        id: 10,
        uid: 19,
        content_video: 'Còn một cái clip rung đầu nữa up nốttt 🤣',
        tags_content: '#hyeepham #ikonix #idolface',
        music_content: 'original sound - Chú Gián Nhỏ chơi nhạc',
        url_video: require('~/assets/videos/video-3.mp4'),
        img_placeholder_video: require('~/assets/images/imgVideo/img-3.jpeg'),
        likes_count_video: '1.6M',
        comments_count_video: '7932',
        shares_count_video: '7686',
    },
];
