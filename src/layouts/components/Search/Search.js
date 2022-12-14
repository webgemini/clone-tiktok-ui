import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';
import { PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon, LoadingIcon } from '~/components/Icons';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const debounceValue = useDebounce(searchValue, 800);

    useEffect(() => {
        if (debounceValue !== '') {
            const fetchApi = async () => {
                setLoading(true);
                const result = await searchServices.searchApi(debounceValue);
                setSearchResult(result);
                setLoading(false);
            };
            fetchApi();
        } else if (debounceValue === '') {
            setSearchResult([]);
            return;
        }
    }, [debounceValue]);

    const handleOnChangeInput = (e) => {
        const searchInputValue = e.target.value;
        if (searchInputValue.startsWith(' ') && searchInputValue.startsWith('')) {
            return false;
        }
        setSearchValue(searchInputValue);
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
            zIndex={18}
            render={(attrs) => (
                <div className={cx('wrapper-search')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={cx('wrapper-title')}>Accounts</div>
                        {searchResult.map((result) => (
                            <AccountItem key={result?.id} data={result} />
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
                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchIcon />
                </button>
            </form>
        </HeadlessTippy>
    );
}

export default Search;
