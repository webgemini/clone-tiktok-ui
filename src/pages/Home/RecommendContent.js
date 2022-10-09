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
import { videosForYou } from '~/components/Contains';

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
        const isAccounts = accountsContent.length;

        if (isAccounts !== 0) {
            return accountsContent.map((account) => {
                const videoUid = videosForYou.filter((video) => {
                    return video.uid === account.id;
                });

                const dataVideos = videoUid[0];

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
                                    <span className={cx('content-text')}>{dataVideos.content_video}</span>
                                    <Link to="/tag/" className={cx('common-link')}>
                                        <strong className={cx('strong-text')}>{dataVideos.tags_content}</strong>
                                    </Link>
                                </div>
                                <h4 className={cx('h4-music')}>
                                    <Link to="/music">
                                        <MusicIcon />
                                        {dataVideos.music_content}
                                    </Link>
                                </h4>
                            </div>
                            <div className={cx('video-wrapper')}>
                                <Videos data={dataVideos} />
                                <div className={cx('actions-item-container')}>
                                    <button className={cx('action-item-btn')}>
                                        <span className={cx('span-icon-wrapper')}>
                                            <HeathIcon />
                                        </span>
                                        <strong className={cx('action-strong-text')}>
                                            {dataVideos.likes_count_video}
                                        </strong>
                                    </button>
                                    <button className={cx('action-item-btn')}>
                                        <span className={cx('span-icon-wrapper')}>
                                            <CommentIcon />
                                        </span>
                                        <strong className={cx('action-strong-text')}>
                                            {dataVideos.comments_count_video}
                                        </strong>
                                    </button>
                                    <SharePopper>
                                        <button className={cx('action-item-btn')}>
                                            <span className={cx('span-icon-wrapper')}>
                                                <SharePCIcon />
                                            </span>
                                            <strong className={cx('action-strong-text')}>
                                                {dataVideos.shares_count_video}
                                            </strong>
                                        </button>
                                    </SharePopper>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        } else {
            return <h1>Loading...</h1>;
        }
    }, [accountsContent]);

    return <div className={cx('wrapper')}>{handleAccounts()}</div>;
}

export default RecommendContent;
