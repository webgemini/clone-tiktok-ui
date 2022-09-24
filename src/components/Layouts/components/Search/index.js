import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import { PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon, LoadingIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        if (searchValue !== '') {
            setLoading(true);
            fetch(`https://jsonplaceholder.typicode.com/users?q=${encodeURIComponent(searchValue)}&type=more`)
                .then((res) => res.json())
                .then((res) => {
                    setSearchResult(res);
                    setLoading(false);
                })
                .catch(() => {
                    console.log(Error);
                });
        }
    }, [searchValue]);
    const handleOnChangeInput = (e) => {
        if (e.target.value.startsWith(' ') && e.target.value.startsWith('')) {
            return false;
        }
        setSearchValue(e.target.value);
    };
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('wrapper-search')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('wrapper-title')}>Accounts</div>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                        <div className={cx('wrapper-item')}>
                            <p className={cx('more-text')}>View all results for "{searchValue}"</p>
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <form className={cx('form-element')} action="/search">
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    onChange={handleOnChangeInput}
                    onFocus={() => setShowResult(true)}
                />
                <div className={cx('clear')} onClick={handleClear}>
                    {!!searchValue && !loading && <FontAwesomeIcon icon={faCircleXmark} />}
                    {loading && <LoadingIcon className={cx('loading')} />}
                </div>
                <span className={cx('splitter')}></span>
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </form>
        </HeadlessTippy>
    );
}

export default Search;
