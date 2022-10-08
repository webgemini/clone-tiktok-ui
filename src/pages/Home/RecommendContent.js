import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useCallback, useState, useEffect } from 'react';

import styles from './RecommendContent.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Videos from './Videos/';
import { MusicIcon, HeathIcon, CommentIcon, SharePCIcon } from '~/components/Icons';
import { SharePopper } from '~/components/Popper/SharePopper';
import * as accountService from '~/services/searchService';
import AccountItem from '~/components/Accounts/AccountItem';
import PopperInfo from '~/components/Accounts/PopperInfo';

const cx = classNames.bind(styles);

function RecommendContent() {
    const [accountsContent, setAccountsContent] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await accountService.searchApi('i', 'more');
            result ? setAccountsContent(result) : setAccountsContent([]);
        };
        fetchApi();
    }, []);

    const handleAccounts = useCallback(() => {
        return accountsContent.map((account) => {
            return (
                <div key={account.id} className={cx('item-container')}>
                    <PopperInfo data={account}>
                        <Link to="/@" className={cx('avt-link')}>
                            <div className={cx('avt-container')}>
                                <Image className={cx('styled-avatar')} src={account.avatar} alt="User" />
                            </div>
                        </Link>
                    </PopperInfo>
                    <div className={cx('content-container')}>
                        <div className={cx('text-info')}>
                            <PopperInfo setOffset={[-70, 35]} data={account}>
                                <div className={cx('author-container')}>
                                    <AccountItem
                                        data={account}
                                        classNameLAvatar="author-avatar-anchor"
                                        classNameLInfo="author-link-info"
                                        classNameTitle="author-title"
                                        classNameDesc="author-desc"
                                    />
                                </div>
                            </PopperInfo>
                            <Button types="outlinePrimary" className={cx('profile-btn')}>
                                Follow
                            </Button>
                            <div className={cx('content')}>
                                <span className={cx('content-text')}>đủ để ăn đứt chủ link nhạc.</span>
                                <Link to="/tag/" className={cx('common-link')}>
                                    <strong className={cx('strong-text')}>#taybannha🇪🇸</strong>
                                </Link>
                                <Link to="/tag/" className={cx('common-link')}>
                                    <strong className={cx('strong-text')}>#congchuataybannha👑</strong>
                                </Link>
                                <Link to="/tag/" className={cx('common-link')}>
                                    <strong className={cx('strong-text')}>#princessleonor</strong>
                                </Link>
                            </div>
                            <h4 className={cx('h4-music')}>
                                <Link to="/music">
                                    <MusicIcon />
                                    nhạc chế - Trung Ruồi
                                </Link>
                            </h4>
                        </div>
                        <div className={cx('video-wrapper')}>
                            <Videos />
                            <div className={cx('actions-item-container')}>
                                <button className={cx('action-item-btn')}>
                                    <span className={cx('span-icon-wrapper')}>
                                        <HeathIcon />
                                    </span>
                                    <strong className={cx('action-strong-text')}>1.6M</strong>
                                </button>
                                <button className={cx('action-item-btn')}>
                                    <span className={cx('span-icon-wrapper')}>
                                        <CommentIcon />
                                    </span>
                                    <strong className={cx('action-strong-text')}>7932</strong>
                                </button>
                                <SharePopper>
                                    <button className={cx('action-item-btn')}>
                                        <span className={cx('span-icon-wrapper')}>
                                            <SharePCIcon />
                                        </span>
                                        <strong className={cx('action-strong-text')}>7686</strong>
                                    </button>
                                </SharePopper>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }, [accountsContent]);
    console.log('Render MainLayout');

    return <div className={cx('wrapper')}>{handleAccounts() || <h1>Internal server error</h1>}</div>;
}

export default RecommendContent;
