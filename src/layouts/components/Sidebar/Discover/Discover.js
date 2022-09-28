import classNames from 'classnames/bind';

import styles from './Discover.module.scss';
import Button from '~/components/Button';
import { TagIcon, MusicIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Discover() {
    return (
        <div className={cx('container')}>
            <p className={cx('label')}>Discover</p>
            <div className={cx('list-container')}>
                <Button className={cx('tag-link')} types="outline" to="/tag/suthatla?lang=en" leftIcon={<TagIcon />}>
                    sansangthaydoi
                </Button>
                <Button
                    className={cx('tag-link')}
                    types="outline"
                    to="/tag/sansangthaydoi?lang=en"
                    leftIcon={<TagIcon />}
                >
                    sansangthaydoi
                </Button>
                <Button className={cx('tag-link')} types="outline" to="/music/hieuung?lang=en" leftIcon={<TagIcon />}>
                    hieuung
                </Button>
                <Button
                    className={cx('tag-link')}
                    types="outline"
                    to="/music/Yêu-Đơn-Phương-Là-Gì?lang=en"
                    leftIcon={<MusicIcon />}
                >
                    Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n
                </Button>
                <Button
                    className={cx('tag-link')}
                    types="outline"
                    to="/music/Về-Nghe-Mẹ-Ru?lang=en"
                    leftIcon={<MusicIcon />}
                >
                    Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng
                </Button>
                <Button
                    className={cx('tag-link')}
                    types="outline"
                    to="/music/Thiên-Thần-Tình-Yêu-7045285812895877890?lang=en"
                    leftIcon={<MusicIcon />}
                >
                    Thiên Thần Tình Yêu - RICKY STAR
                </Button>
            </div>
        </div>
    );
}

export default Discover;
