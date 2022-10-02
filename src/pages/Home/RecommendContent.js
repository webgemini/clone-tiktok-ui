import className from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './RecommendContent.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import {
    MusicIcon,
    PlayVideoIcon,
    VolumeVideoIcon,
    FlagIcon,
    HeathIcon,
    CommentIcon,
    SharePCIcon,
} from '~/components/Icons';

const cx = className.bind(styles);

function RecommendContent() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item-container')}>
                <Link to="/@" className={cx('avt-link')}>
                    <div className={cx('avt-container')}>
                        <Image
                            className={cx('styled-avatar')}
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/77e8c68bf0e0bfe846e4ecf681d7ab33~c5_100x100.jpeg?x-expires=1664812800&x-signature=p664nvB23DhpoHVGwitLPIM4RMs%3D"
                            alt="User"
                        />
                    </div>
                </Link>
                <div className={cx('content-container')}>
                    <div className={cx('text-info')}>
                        <div className={cx('author-container')}>
                            <Link to="/@leonor_sofia355" className={cx('author-link')}>
                                <h3 className={cx('author-title')}>leonor_sofia355</h3>
                                <h4 className={cx('author-name')}>Leonor Sofia</h4>
                            </Link>
                        </div>
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
                        <div className={cx('video-card-container')}>
                            <canvas className={cx('video-canvas-placeholder')} width={56.25} height={100}></canvas>
                            <div className={cx('video-player-wrapper')}>
                                <div className={cx('container')}>
                                    <img
                                        src={require('../../assets/images/img-video-1.jpeg')}
                                        className={cx('img-poster')}
                                        alt="đủ để ăn đứt chủ link nhạc."
                                    />
                                    <div className={cx('basic-player-wrapper')}>
                                        <div className={cx('player-container')}>
                                            <video
                                                crossOrigin="anonymous"
                                                src={require('../../assets/videos/video-1.mp4')}
                                            ></video>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('play-control')}>
                                    <PlayVideoIcon />
                                </div>
                                <div className={cx('volume-control')}>
                                    <div className={cx('mute-icon')}>
                                        <VolumeVideoIcon />
                                    </div>
                                </div>
                                <div className={cx('video-control-wrapper')}>
                                    <div className={cx('seek-bar-container')}>
                                        <div className={cx('seek-bar-progress')}></div>
                                        <div className={cx('seek-bar-circle')}></div>
                                        <div className={cx('seek-bar-fill')}></div>
                                    </div>
                                </div>
                                <div className={cx('control-bottom')}></div>
                                <p className={cx('report-text')}>
                                    <FlagIcon />
                                    Report
                                </p>
                            </div>
                        </div>
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
                            <button className={cx('action-item-btn')}>
                                <span className={cx('span-icon-wrapper')}>
                                    <SharePCIcon />
                                </span>
                                <strong className={cx('action-strong-text')}>7686</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecommendContent;
