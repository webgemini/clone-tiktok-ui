import PropsTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames/bind';

import styles from './Accounts.module.scss';
import AccountItem from './AccountItem';
import PopperInfo from './PopperInfo';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(styles);

function Accounts({ label }) {
    const [accounts, setAccounts] = useState([]);
    const [actionStyle, setActionStyle] = useState({ display: 'none', label: 'See more' });

    const handleActionAccount = useCallback(() => {
        if (actionStyle.display === 'none') {
            setActionStyle({ display: 'flex', label: 'See less' });
        } else {
            setActionStyle({ display: 'none', label: 'See more' });
        }
    }, [actionStyle]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchServices.searchApi('s', 'more');
            result ? setAccounts(result) : setAccounts([]);
        };
        fetchApi();
    }, []);

    const handleRenderAccounts = useCallback(() => {
        return accounts.map((result, index) =>
            index < 5 ? (
                <PopperInfo key={result.id} offset={[-20, 2]} data={result}>
                    <div className={cx('user-container')}>
                        <AccountItem data={result} />
                    </div>
                </PopperInfo>
            ) : (
                <PopperInfo key={result.id} setOffset={[-20, 2]} data={result}>
                    <div className={cx('user-container')} style={actionStyle}>
                        <AccountItem data={result} />
                    </div>
                </PopperInfo>
            ),
        );
    }, [accounts, actionStyle]);

    return (
        <div className={cx('container')}>
            <p className={cx('label')}>{label}</p>
            {handleRenderAccounts()}
            <div className={cx('show-more')}>
                <p className={cx('see-more')} onClick={handleActionAccount}>
                    {actionStyle.label}
                </p>
            </div>
        </div>
    );
}

Accounts.propTypes = {
    label: PropsTypes.string.isRequired,
};

export default Accounts;
