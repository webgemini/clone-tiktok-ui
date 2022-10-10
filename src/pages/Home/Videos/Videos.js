import classNames from 'classnames/bind';
import { useRef, useState, memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Videos.module.scss';
import { PlayVideoIcon, PauseVideoIcon, VolumeVideoIcon, MuteVideoIcon, FlagIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Videos({ data }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    let currentVolume = 0.8;
    const refVideo = useRef();
    const refVolumeContainer = useRef();
    const refVolumeProgress = useRef();
    const refVolumeCircle = useRef();
    const refVolumeBar = useRef();

    const handleChangeAudio = (e) => {
        if (refVolumeProgress.current === e.target) {
            currentVolume = (e.target.offsetHeight - e.nativeEvent.offsetY) / e.target.offsetHeight;
            refVideo.current.volume = currentVolume;
            refVolumeContainer.current.setAttribute('ariaValueText', refVideo.current.volume);
        }
    };
    const handleChangeAudioBar = (e) => {
        if (refVolumeBar.current === e.target) {
            currentVolume = (e.target.offsetHeight - e.nativeEvent.offsetY) / e.target.offsetHeight;
            refVideo.current.volume = currentVolume;
            refVolumeContainer.current.setAttribute('ariaValueText', refVideo.current.volume);
        }
    };

    const handleStartLoadVideo = () => {
        refVideo.current.volume = currentVolume;
    };

    const handleChangeStateVolume = () => {
        const video = refVideo.current;
        const volumeCircle = refVolumeCircle.current;
        const volumeBar = refVolumeBar.current;

        if (video.volume > 0.1 && video.volume <= 1) {
            volumeBar.style.transform = `scaleY(${video.volume})`;
            volumeCircle.style.transform = `translateY(${-video.volume * 48 + 12}px)`;
        }
        if (video.volume < 0.1) {
            volumeBar.style.transform = `scaleY(${video.volume})`;
            volumeCircle.style.transform = `translateY(${-video.volume * 48}px)`;
        }
        if (video.volume < 0.1) {
            video.volume = 0;
        }
        if (video.volume > 0.96 || video.volume >= 1) {
            video.volume = 1;
        }
    };

    const handlePlayingVideo = () => {
        if (!!isPlaying) {
            refVideo.current.pause();
            setIsPlaying(false);
        } else {
            refVideo.current.play();
            setIsPlaying(true);
        }
    };
    const handleMutedAudioVideo = () => {
        if (!isMuted) {
            refVideo.current.volume = 0;
            setIsMuted(true);
        } else {
            refVideo.current.volume = currentVolume;
            setIsMuted(false);
        }
    };

    return (
        <div className={cx('video-card-container')}>
            <canvas className={cx('video-canvas-placeholder')} width={56.25} height={100}></canvas>
            <div className={cx('video-player-wrapper')}>
                <div className={cx('container')}>
                    <img
                        loading="lazy"
                        draggable={false}
                        src={data.img_placeholder_video}
                        className={cx('img-poster')}
                        alt={data.content_video}
                    />
                    <div className={cx('basic-player-wrapper')}>
                        <div className={cx('player-container')}>
                            <video
                                ref={refVideo}
                                crossOrigin="anonymous"
                                poster={data.img_placeholder_video}
                                src={data.url_video}
                                onVolumeChange={handleChangeStateVolume}
                                onLoadStart={handleStartLoadVideo}
                            ></video>
                        </div>
                    </div>
                </div>
                <div className={cx('play-control-wrapper')} onClick={handlePlayingVideo}>
                    {isPlaying ? <PauseVideoIcon /> : <PlayVideoIcon />}
                </div>
                <div
                    ref={refVolumeContainer}
                    className={cx('volume-control-wrapper')}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    tabIndex={0}
                >
                    <div className={cx('volume-control')} aria-valuemin={0} aria-valuemax={100} tabIndex={0}>
                        <div
                            ref={refVolumeProgress}
                            className={cx('volume-control-progress')}
                            onMouseDown={handleChangeAudio}
                        ></div>
                        <div ref={refVolumeCircle} className={cx('volume-control-circle')}></div>
                        <div
                            ref={refVolumeBar}
                            className={cx('volume-control-bar')}
                            onMouseDown={handleChangeAudioBar}
                        ></div>
                    </div>
                    <div className={cx('mute-icon')} onClick={handleMutedAudioVideo} onDoubleClick={() => false}>
                        {!!isMuted ? <MuteVideoIcon /> : <VolumeVideoIcon />}
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
    );
}

Videos.propTypes = {
    data: PropTypes.object.isRequired,
};

export default memo(Videos);
